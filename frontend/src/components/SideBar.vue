<template>
  <div class="side-bar-wrapper">
    <!-- active=['r']는 r => 오른쪽으로 resize화 되도록    -->
    <VueResizable class ="resizable-side-bar" :width="500" :min-width="500" :max-width="Infinity" :active="['r']">
      <div class="side-bar">

      </div>
    </VueResizable>
  </div>
</template>

<script setup>
import VueResizable from 'vue-resizable';
</script>

<style>
  .resizable-side-bar{
    background-color: #000000;
    opacity: 0.5;
    width: 500px;
    height: 100%;
  }
</style>