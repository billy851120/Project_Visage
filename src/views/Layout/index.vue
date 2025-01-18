<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>

<script setup lang="ts" name="">
  //引入
  import LayoutNav from "./components/LayoutNav.vue";
  import LayoutFooter from "./components/LayoutFooter.vue";
  import LayoutHeader from "./components/LayoutHeader.vue";

  //數據

  //方法
</script>

<style scoped></style>
