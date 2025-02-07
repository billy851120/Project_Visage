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
      <div class="title">
        <span>Cart <small>(1 items)</small> </span>
        <button
          class="close"
          @click="close"
        >
          <el-icon><Close /></el-icon>
        </button>
      </div>
      <div class="items">
        <SidebarItems></SidebarItems>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, defineProps } from "vue";
  import SidebarItems from "./SidebarItems.vue";
  //數據
  const model = defineModel();
  //方法
  const close = () => {
    model.value = false;
  };
</script>

<style scoped>
  .title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
  }
  .title span {
    font-size: 1.2rem;
    font-weight: 500;
    display: inline-block;
    margin-right: auto;
  }

  .close {
    display: inline-block;
    border: none;
    background: transparent;
    font-size: 1.5rem;
  }
  .close i {
    transform: translateY(15%);
  }
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
    box-sizing: border-box;
    padding: 20px 18px;
    position: fixed;
    top: 0;
    right: 0;
    width: 420px;
    height: 100%;
    z-index: 200;
    background-color: #fff;
  }
</style>
