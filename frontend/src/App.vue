<template>
  <div id = "app">
    <MainMap @send-address="handleAddress"/>
    <SideBar :address="address" class="side-bar"/>
  </div>
</template>

<script setup>
import MainMap from '@/components/MainMap'
import SideBar from '@/components/SideBar'
import {ref} from "vue";

let address = ref(null);

function handleAddress(addr){
  console.log("parent addres : " + addr);
  address.value = addr;
}
</script>

<style>
#app {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.side-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}

</style>
