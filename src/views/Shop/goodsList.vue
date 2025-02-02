<template>
  <h1 class="title textColor_2">{{ formattedCategory }}</h1>
  <div>
    <button
      class="filterBtn"
      v-if="goodsStore.filters.ProductType[0]"
      v-for="i in goodsStore.filters.ProductType"
      @click="clearType(i)"
    >
      {{ i }}
      <span
        ><el-icon><Close /></el-icon
      ></span>
    </button>
    <button
      class="filterBtn"
      v-if="goodsStore.filters.colorPicker[0]"
      v-for="i in goodsStore.filters.colorPicker"
      @click="clearColor(i)"
    >
      {{ i }}
      <span
        ><el-icon><Close /></el-icon
      ></span>
    </button>
    <button
      class="filterBtn"
      v-if="
        goodsStore.filters.priceRange[0] !== 6 ||
        goodsStore.filters.priceRange[1] !== 10
      "
      @click="clearRange"
    >
      ${{ goodsStore.filters.priceRange[0].toFixed(2) }} - ${{
        goodsStore.filters.priceRange[1].toFixed(2)
      }}
      <span
        ><el-icon><Close /></el-icon
      ></span>
    </button>
    <button
      v-if="
        goodsStore.filters.ProductType[0] ||
        goodsStore.filters.priceRange[0] !== 6 ||
        goodsStore.filters.priceRange[1] !== 10 ||
        goodsStore.filters.colorPicker[0]
      "
      class="claer_All"
      @click="handleClearAll"
    >
      Clear All
    </button>
  </div>
  <div class="sort_content">
    <Sort></Sort>
  </div>
  <div
    class="goodslist_wallpaper"
    ref="shopList"
  >
    <ProductList_item
      v-if="category"
      :category="category"
    ></ProductList_item>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { computed, ref, watch, onBeforeMount } from "vue";
  import { useRoute } from "vue-router";
  import ProductList_item from "@/components/ProductList_item.vue";
  import Sort from "./components/Sort.vue";
  import { useGoodsStore } from "@/stores/goodsStore";

  //數據
  const goodsStore = useGoodsStore();
  const route = useRoute();

  // defineProps(["clearType", "clearRange", "clearColor"]);

  const validCategories = [
    "AllProducts",
    "MostPopular",
    "Adults",
    "Kids",
  ] as const;

  //方法
  const props = defineProps<{
    clearType: (type: string) => void;
    clearRange: () => void;
    clearColor: (color: string) => void;
    clearAll: () => void;
  }>();

  const handleClearAll = () => {
    props.clearAll();
  };

  const category = computed(() => {
    const queryValue = route.params.browse;
    if (
      typeof queryValue === "string" &&
      validCategories.includes(queryValue as any)
    ) {
      return queryValue as "AllProducts" | "MostPopular" | "Adults" | "Kids";
    }
    return "AllProduct"; // 如果無效則返回 undefined 或設置默認值
  });
  const formattedCategory = computed(() => {
    const queryValue = route.params.browse;
    if (typeof queryValue === "string") {
      return queryValue.replace(/([a-z])([A-Z])/g, "$1 $2");
    }
    return "All Products";
  });

  watch(
    () => goodsStore.filteredProducts,
    (newVal) => {
      console.log(goodsStore.filteredProducts);
      console.log(goodsStore.filters.ProductType);
    },
  );
</script>

<style scoped>
  .filterBtn {
    border: none;
    background-color: #e5e5e5;
    padding: 9px 15px;
    font-size: 0.9rem;
    font-weight: 300;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }
  .filterBtn span {
    font-size: 0.9rem;
    padding-left: 10px;
    display: inline-flex;
    transform: translateY(1px);
  }
  .claer_All {
    font-size: 0.9rem;
    font-weight: 300;
    background-color: transparent;
    border: none;
    text-decoration: underline;
  }
  .goodslist_wallpaper {
    width: 100%;
    padding-bottom: 90px;
  }

  .title {
    font-size: 3.5rem;
  }

  .sort_content {
    display: flex;
    justify-content: end;
  }
</style>
