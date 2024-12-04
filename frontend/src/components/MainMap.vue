<template>
  <div class="main-map">

  </div>
</template>

<script>
import {onMounted} from "vue";
import OlLayerTile from 'ol/layer/Tile.js';
import OlView from 'ol/View.js';
import OlMap from 'ol/Map.js';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj.js'

let olMap = undefined;

onMounted(() => {
  olMap = new olMap({
    target: this.$refs.map,
    layers: [
      new OlLayerTile({
        source: new OSM()
      })
    ],
    view : new OlView({
      center: fromLonLat([127.1388684, 37.4449168]), // 경기도 성남
      zoom: 10
    })
  })
})
</script>

<style scoped>
  .main-map{
    width: 100%;
    height: 100%;
  }
</style>