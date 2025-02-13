<template>
  <HomeBanner></HomeBanner>
  <HomeHot></HomeHot>
  <HomeOurMasks></HomeOurMasks>
  <HomeStandFor></HomeStandFor>
  <HomeTagUs></HomeTagUs>
  <div
    class="block"
    style="height: 80px"
  ></div>
</template>

<script setup lang="ts" name="">
  //引入
  import HomeBanner from "./components/HomeBanner.vue";
  import HomeHot from "./components/HomeHot.vue";
  import HomeOurMasks from "./components/HomeOurMasks.vue";
  import HomeStandFor from "./components/HomeStandFor.vue";
  import HomeTagUs from "./components/HomeTagUs.vue";

  //數據

  //方法
</script>

<style scoped>
  .block {
    background-color: #fdf8ec;
    margin: 45px 0;
  }
</style>
