<template>
  <div class="container goodsContent">
    <div
      v-for="item in cartStore.cartItems"
      v-loading="item.loading"
      class="row item"
    >
      <div class="col-2 img">
        <img
          :src="item.image as string"
          alt=""
        />
      </div>
      <div class="col-4 txt">
        <div class="title mb-3">{{ item.name }}</div>
        <div class="price mb-2">{{ item.price }}</div>
        <div class="color">Color:Grey</div>
      </div>
      <div class="col-2 count_box">
        <div class="d-flex count">
          <button @click="sub(item)">
            <el-icon><Minus /></el-icon>
          </button>
          <input
            type="number"
            :value="item.quantity"
            readonly
          />
          <button @click="add(item)">
            <el-icon><Plus /></el-icon>
          </button>
        </div>
      </div>
      <div class="col-3 totalPrice ps-5">
        ${{ (Number(item.quantity) * price).toFixed(2) }}
      </div>
      <div class="col-1 del">
        <button @click="del(item)">
          <el-icon><Delete /></el-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref } from "vue";
  import { useCartStore } from "@/stores/cartStore";

  //數據
  const cartStore = useCartStore();
  const minValue = 1;
  const maxValue = 99;
  const price = 10;

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
      cartStore.removeFromCart(item.id);
      item.loading = false;
    }, 2000);
  }
</script>

<style scoped>
  .goodsContent {
    padding-bottom: 20px;
    /* border-bottom: 1px solid #ccc; */
  }
  .item:first-child {
    padding-top: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  .item {
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  .img {
    padding: 0;
  }
  .img img {
    padding: 0;
    width: 100px;
    height: 133px;
  }
  .txt {
    padding-left: 20px;
    font-size: 0.9rem;
    font-weight: normal;
    letter-spacing: 0.2px;
  }
  .count {
    border: 1px solid rgba(0, 0, 0, 0.6);
    align-items: center;
  }
  .count_box {
    padding: 0 10px;
  }
  .count input {
    width: 100%;
    text-align: center;
    border: none;
    font-size: 0.8rem;
    transform: translateY(2px);
    outline: none;
    -moz-appearance: textfield;
  }
  .count input[type="number"]::-webkit-inner-spin-button,
  .count input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .count button {
    border: none;
    background-color: transparent;
    color: #000;
    padding: 5px 5px;
    font-size: 0.8rem;
  }
  .count button i {
    transform: translateY(2px);
  }

  .totalPrice {
    font-size: 0.9rem;
    font-weight: 400;
  }
  .del button {
    border: none;
    background-color: transparent;
    color: #000;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
  }
</style>
