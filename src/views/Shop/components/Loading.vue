<template>
  <div class="preloader">
    <div class="circ1"></div>
    <div class="circ2"></div>
    <div class="circ3"></div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入

  //數據

  //方法
</script>

<style scoped>
  @keyframes loader {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .preloader > div {
    background-color: #5362e6;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
    animation: loader 0.8s infinite ease-in-out;
    margin: 0 4px;
  }
  .preloader .circ1 {
    animation-delay: 0;
  }
  .preloader .circ2 {
    animation-delay: 0.1s;
  }
  .preloader .circ3 {
    animation-delay: 0.2s;
  }
</style>
