<template>
  <div>
    <div
      v-if="model"
      class="overlay"
      @click="close"
    ></div>
    <div
      v-if="model"
      class="sidebar"
    >
      我是側邊欄
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, defineProps } from "vue";
  //數據
  const model = defineModel();
  //方法
  const close = () => {
    model.value = false;
  };
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 190;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 420px;
    height: 100%;
    z-index: 200;
    background-color: #fff;
  }
</style>
