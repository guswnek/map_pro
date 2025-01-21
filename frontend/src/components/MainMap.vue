<template>
  <div class="main-map" id="map">

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
// 지도와 관련된 모듈은 node_modules에 위치해있는 ol 폴도에 있는 기능 중 필요한 것을 import
import OlLayerTile from 'ol/layer/Tile.js'; // Tile Layer
import OlView from 'ol/View.js'; // View
import OlMap from 'ol/Map.js'; // Map
import OSM from 'ol/source/OSM'; // OpenStreetMap 소스
import { fromLonLat, toLonLat } from 'ol/proj.js'; // 좌표 변환
import { defaults } from 'ol/control.js'
import axios from "axios";
import { useStore } from 'vuex';
import Geocoder from 'ol-geocoder'

const store = useStore();

let olMap = null; //eslint-disable-line no-unused-vars
let address = ref(null);

onMounted(() => {

  const mapElement = document.getElementById("map");

  olMap = new OlMap({
    target: mapElement,           // ref로 참조된 DOM 요소
    controls: defaults({  // 정의된 각 버튼 및 속성
      attribution: false,
      zoom: false,
      rotate: false
    }),
    layers: [
      new OlLayerTile({
        source: new OSM(),
      }),
    ],
    view: new OlView({
      center: fromLonLat([127.1388684, 37.4449168]), // 경기도 성남 좌표
      zoom: 10,
    }),
  });

  olMap.on('click', (e) => {
    const lonLan = toLonLat(e.coordinate);
    const lon = lonLan[0];
    const lat = lonLan[1];
    getAddress(lon, lat);
  })

  const geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    lang: 'kr',
    placeholder: '주소 검색',
    limt: 5, //  자동 완성 결과 최대 개수
    autocomplete: true,
    keepOpen: true
  })
  olMap.addControl(geocoder);

  geocoder.on('addresschosen', (evt) => {
    setUiAddress(evt.address.details.name);
  });

})

function setUiAddress(str){
  const changeAddress = str.split(", ").reverse().join(" ");
  store.commit("setAddress", changeAddress);
  console.log(store.state.address);
}

function getAddress(lon, lat){
  axios.get('http://nominatim.openstreetmap.org/reverse',{
    params: {
      format: 'json',
      lon: lon,
      lat: lat
    }
  }).then((response) => {
    address.value = response.data.display_name.split(", ").reverse().join(" ");
    store.commit("setAddress", address.value);
  })

}

</script>

<style lang="scss" scoped>
  .main-map {
    width: 100%;
    height: 100%;

    ::v-deep.ol-geocoder {
      position: absolute;
      right: 0;
      padding: 10px;

      button {
        display: none;
      }

      input::placeholder {
        color: white;
        opacity: 0.7;
      }

      input, ul {
        border-style: none;
        width: 200px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        border-color: unset;
        padding: 0 5px;
        color: white;
      }

      ul {
        margin-top: 5px;
        padding: 0;
        list-style: none;

        li:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }

        li {
          padding: 5px 10px;
          font-size: 13px;

          a {
            text-decoration: none;

            .gcd-road {
              color: white;
            }
          }
        }
      }
    }
  }


</style>