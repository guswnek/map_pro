<template>
  <div class="main-map" id="map">

  </div>
</template>

<script setup>
import {onMounted} from "vue";
// 지도와 관련된 모듈은 node_modules에 위치해있는 ol 폴도에 있는 기능 중 필요한 것을 import
import OlLayerTile from 'ol/layer/Tile.js'; // Tile Layer
import OlView from 'ol/View.js'; // View
import OlMap from 'ol/Map.js'; // Map
import OSM from 'ol/source/OSM'; // OpenStreetMap 소스
import { fromLonLat } from 'ol/proj.js'; // 좌표 변환
import { defaults } from 'ol/control.js'

let olMap = null; //eslint-disable-line no-unused-vars

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

})

</script>

<style scoped>
  .main-map{
    width: 100%;
    height: 100%;
  }
</style>