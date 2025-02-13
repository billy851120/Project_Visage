<template>
  <div class="sort_content">
    <el-dropdown
      @command="handleCommand"
      placement="top"
      trigger="click"
      size="large"
    >
      <span class="el-dropdown-link">
        Sort by: {{ sort }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="Recommended">Recommended</el-dropdown-item>
          <el-dropdown-item command="Newest">Newest</el-dropdown-item>
          <el-dropdown-item command="Price (low to high)"
            >Price (low to high)</el-dropdown-item
          >
          <el-dropdown-item command="Price (high to low)"
            >Price (high to low)</el-dropdown-item
          >
          <el-dropdown-item command="Name A-Z">Name A-Z</el-dropdown-item>
          <el-dropdown-item command="Name Z-A">Name Z-A</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, watch } from "vue";
  import { useGoodsStore } from "@/stores/goodsStore";

  //數據
  const goodsStore = useGoodsStore();
  const sort = ref("Recommended");

  //方法
  watch(sort, (value) => {
    const newValue = value.replace(/\s/g, "");
    console.log(newValue);
    goodsStore.filters.sortOption = newValue;
  });
  const handleCommand = (command: string) => {
    sort.value = command;
  };
</script>

<style scoped>
  .sort_content {
    padding: 30px 0;
    user-select: none;
  }

  .el-dropdown {
    color: #000;
    font-size: 0.95rem;
    font-weight: 100;
  }
</style>
