<template>
  <div class="HotGoods">
    <h1 class="textColor_2">Most Popular</h1>
    <div class="goodsList">
      <ProductList_item category="MostPopular"></ProductList_item>
    </div>
    <div class="shop_all">
      <router-link to="/">Shop All</router-link>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, reactive } from "vue";
  import ProductList_item from "@/components/ProductList_item.vue";
  import { useGoodsStore } from "@/stores/goodsStore";

  //數據
  const goodsStore = useGoodsStore();
  goodsStore.setCategory("MostPopular");

  //方法
</script>

<style scoped>
  .HotGoods {
    margin-bottom: 139px;
  }

  .HotGoods h1 {
    text-align: center;
    padding: 50px 0px 0px 0;
    font-size: 1.6em;
    letter-spacing: 1.1px;
    margin-bottom: 37px;
  }

  .shop_all {
    margin: 60px 0px;
    text-align: center;
  }

  .shop_all a {
    font-size: 0.95rem;
    color: #0a1fc8;
    border: 1px solid #0a1fc8;
    border-radius: 4px;
    padding: 10px 40px;
    text-decoration: none;
    background: transparent;
  }

  .shop_all a:hover {
    background-color: #0a1fc8;
    color: #fff;
    transition: all 0.4s;
  }
</style>
