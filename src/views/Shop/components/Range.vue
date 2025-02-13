<template>
  <div class="slider-demo-block">
    <el-slider
      v-model="range"
      :show-tooltip="false"
      :step="0.2"
      range
      :marks="marks"
      :max="10"
      :min="6"
    />
  </div>
  <div></div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, computed, watch } from "vue";
  import { useGoodsStore } from "@/stores/goodsStore";

  //數據
  const range = defineModel();
  const goodsStore = useGoodsStore();

  const marks = computed(() => ({
    6: `$${goodsStore.filters.priceRange[0].toFixed(2)}`,
    10: `$${goodsStore.filters.priceRange[1].toFixed(2)}`,
  }));

  //方法
  watch(
    range,
    ([min, max]) => {
      goodsStore.setPriceRange([min, max]);
    },
    { deep: true },
  );
</script>

<style scoped>
  .slider-demo-block {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-right: 14px;
    margin-left: 10px;
  }

  :deep(.el-slider__bar) {
    background: #000;
    height: 1.9px;
  }

  :deep(.el-slider__runway) {
    height: 1.9px;
  }

  :deep(.el-slider__button) {
    width: 12px;
    height: 12px;
    border: none;
    background-color: #000;
  }

  :deep(.el-slider__button-wrapper) {
    transform: translate(-50%, -6%);
    cursor: pointer;
  }

  :deep(.el-slider__marks-text) {
    color: #000;
  }

  :deep(.el-slider__marks-text:first-child) {
    left: 5% !important;
  }

  :deep(.el-slider__marks-text:last-child) {
    left: 95% !important;
  }

  :deep(.el-slider__button-wrapper .hover) {
    cursor: pointer;
  }
</style>
