<template>
  <div class="container mx-auto p-0">
    <div class="row cartContent d-flex mx-auto">
      <div class="col myCar p-0">
        <div class="title">
          <h6>My cart</h6>
        </div>
        <div class="cartList">
          <goods></goods>
        </div>
        <div class="code">
          <a
            class="d-inline-block mb-3"
            href="#"
            ><el-icon class="me-2"><Discount /></el-icon>Enter a promo code</a
          >
          <br />
          <a
            class="d-inline-block"
            href="#"
            ><el-icon class="me-2"><Document /></el-icon>Add a note</a
          >
        </div>
      </div>
      <div class="col-4 order">
        <div class="title">
          <h6>Order summary</h6>
        </div>
        <div class="Subtotal">
          <div class="d-flex mb-3">
            <span class="d-inline-block flex-grow-1">Subtotal</span>
            <span class="d-inline-block"
              >${{ cartStore.totalPrice.toFixed(2) }}</span
            >
          </div>
          <div class="d-flex mb-2">
            <span class="d-inline-block flex-grow-1">Delivery </span>
            <span class="d-inline-block">FREE</span>
          </div>
          <div class="destination d-flex">
            <a href="#">Taiwan</a>
          </div>
        </div>
        <div class="total d-flex mb-3">
          <span class="d-inline-block flex-grow-1">Total</span>
          <span class="d-inline-block"
            >${{ cartStore.totalPrice.toFixed(2) }}</span
          >
        </div>
        <div class="checkOut">
          <button class="w-100">Checkout</button>
          <p><i class="fa-solid fa-lock me-2"></i>Secure Checkout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import goods from "./components/goods.vue";
  import { useCartStore } from "@/stores/cartStore";

  //數據
  const cartStore = useCartStore();

  //方法
</script>

<style scoped>
  .title h6 {
    font-size: 1.15rem;
    font-weight: 400;
  }
  .cartContent {
    width: 980px;
    padding: 40px 20px;
    column-gap: 33px;
  }
  .cartList {
    border-top: 1px solid #ccc;
    padding: 20px 0;
    margin: 23px 0;
  }
  .Subtotal {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 30px 0;
    margin: 15px 0;
  }
  .code a {
    text-decoration: none;
    color: #0a1fdb;
    font-weight: 200;
    font-size: 0.95rem;
  }
  .total span {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .Subtotal span {
    font-size: 0.95rem;
    font-weight: 400;
  }
  .destination a {
    font-size: 0.95rem;
    font-weight: 400;
    color: #000;
  }
  .checkOut button {
    background-color: #0a1fdb;
    color: #fff;
    border: none;
    padding: 14px 0;
    font-size: 0.95rem;
  }
  .checkOut p {
    margin-top: 12px;
    text-align: center;
    font-size: 0.85rem;
    font-weight: normal;
  }
</style>
