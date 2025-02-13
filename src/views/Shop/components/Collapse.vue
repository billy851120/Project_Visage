<template>
  <el-collapse
    v-model="activeNames"
    @change="handleChange"
  >
    <el-collapse-item :name="collapseKey">
      <template #title>
        <span class="custom-title">{{ title }}</span>
        <span
          v-if="msg"
          class="custom-title__color"
          >: {{ msg }}</span
        >
      </template>
      <template #icon="{ isActive }">
        <span class="icon-ele">
          <el-icon v-if="isActive">
            <Minus />
          </el-icon>
          <el-icon v-else>
            <Plus />
          </el-icon>
        </span>
      </template>
      <div>
        <slot></slot>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref } from "vue";
  import { Plus, Minus } from "@element-plus/icons-vue";

  //數據
  const activeNames = ref(["1"]);
  const handleChange = (val: string[]) => {};
  defineProps(["title", "collapseKey", "msg"]);

  //方法
</script>

<style scoped>
  .category_Filter .el-collapse .icon-ele {
    color: #000;
    margin: 0 8px 0 auto;
    font-size: 0.85rem;
  }

  .category_Filter .el-collapse {
    border-top: none;
    /* padding-bottom: 5px; */
    border-bottom: 1px solid #cccccc;
  }

  .custom-title {
    font-size: 0.9rem;
    padding: 0 0;
  }

  .custom-title__color {
    font-size: 1rem;
    padding: 0 0;
  }

  ::v-deep(.el-collapse-item__header) {
    padding: 26px 0;
    border-bottom: 1px solid #cccccc;
    transition: all 0.1s 0.3s;
  }

  ::v-deep(.el-collapse-item__header.is-active) {
    border-bottom-color: transparent;
    transition: all 0.1s;
  }

  ::v-deep(.el-collapse-item__wrap) {
    border-bottom: 1px solid #cccccc;
  }

  ::v-deep(.el-collapse-item__header.focusing:focus:not(:hover)) {
    color: initial;
  }
</style>
