<template>
  <div
    v-for="item in CartStore.cartItems"
    v-loading="item.loading"
    class="items"
  >
    <div class="content">
      <div class="img">
        <img
          :src="item.image as string"
          alt=""
        />
      </div>
      <div class="info">
        <div class="txt me-auto">
          <div class="title">{{ item.name }}</div>
          <div class="price">${{ item.price.toFixed(2) }}</div>
          <div class="color">
            Color: {{ item.color[0].toUpperCase() + item.color.slice(1) }}
          </div>
        </div>
        <div class="counter">
          <div class="count">
            <button @click="sub(item)">
              <el-icon><Minus /></el-icon>
            </button>
            <input
              type="number"
              name=""
              id=""
              :value="item.quantity"
              readonly
            />
            <button @click="add(item)">
              <el-icon><Plus /></el-icon>
            </button>
          </div>
          <div class="total">
            ${{ (Number(item.quantity) * Number(item.price)).toFixed(2) }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="del"
      @click="del(item)"
    >
      <el-icon><Delete /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  import { ref } from "vue";
  import { useCartStore } from "@/stores/cartStore";

  //引入

  //數據
  const CartStore = useCartStore();
  const minValue = 1;
  const maxValue = 99;

  //方法
  function sub(item: any) {
    if (Number(item.quantity) > minValue) {
      item.quantity--;
    }
  }
  function add(item: any) {
    if (Number(item.quantity) < maxValue) {
      item.quantity++;
    }
  }
  function del(item: any) {
    item.loading = true;
    setTimeout(() => {
      CartStore.removeFromCart(item.id);
      item.loading = false;
    }, 2000);
  }
</script>

<style scoped>
  .items {
    display: flex;
    border-bottom: 1px solid #b2b2b2;
    padding: 20px 0;
  }
  .img {
    width: 75px;
    height: 100px;
    margin-right: 20px;
  }
  .img img {
    width: 100%;
    height: 100%;
  }
  .content {
    width: 100%;
    display: flex;
  }
  .info {
    flex: 1;
  }

  .info .txt .title {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  .info .txt .price {
    margin-bottom: 7px;
  }
  .info .txt .color {
    margin-bottom: 7px;
  }
  .info .txt {
    font-size: 0.8rem;
    font-weight: normal;
    letter-spacing: 0.3px;
  }
  .counter {
    display: flex;
    overflow: hidden;
    align-items: center;
    width: 100%;
  }
  .count input[type="number"]::-webkit-inner-spin-button,
  .count input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .count {
    border: 1px solid rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  .count input[type="number"] {
    width: 22px;
    text-align: center;
    border: none;
    font-size: 0.8rem;
    /* transform: translateY(0px); */
    outline: none;
    -moz-appearance: textfield;
    padding: 8px 0;
  }
  .count button {
    background: transparent;
    border: none;
  }
  .count button i {
    transform: translateY(2px);
  }
  .counter .total {
    font-size: 0.9rem;
  }
  .del {
    font-size: 1.2rem;
    padding-right: 5px;
    cursor: pointer;
  }
</style>
