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
        <span
          >Cart <small>({{ cartStore.totalQuantity }} items)</small>
        </span>
        <button
          class="close"
          @click="close"
        >
          <el-icon><Close /></el-icon>
        </button>
      </div>
      <div class="items flex-grow-1">
        <SidebarItems></SidebarItems>
      </div>
      <div class="sub">
        <div class="subTotal">
          <div class="d-flex mb-3">
            <span class="d-inline-block flex-grow-1">Subtotal</span>
            <span class="d-inline-block"
              >${{ cartStore.totalPrice.toFixed(2) }}</span
            >
          </div>
          <h6>Taxes and shipping are calculated at checkout.</h6>
        </div>
        <div class="checkout mb-3">
          <button class="w-100">Checkout</button>
          <button class="w-100">
            <router-link to="/cart">View Cart</router-link>
          </button>
        </div>
        <div class="Secure text-center">
          <p><i class="fa-solid fa-lock me-2"></i>Secure Checkout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, defineProps } from "vue";
  import SidebarItems from "./SidebarItems.vue";
  import { useCartStore } from "@/stores/cartStore";
  //數據
  const model = defineModel();
  const cartStore = useCartStore();
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
    display: flex;
    flex-direction: column;
  }
  .sub {
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }
  .sub .subTotal {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  .sub .subTotal h6 {
    font-size: 0.8rem;
    color: #555555;
  }
  .checkout button {
    padding: 12px 0;
    border: none;
    font-size: 0.88rem;
  }
  .checkout button:nth-child(1) {
    background-color: #0a1fdb;
    color: #fff;
    margin-bottom: 10px;
  }
  .checkout button:nth-child(2) {
    background-color: #fff;
    border: 1px solid #0a1fdb;
  }
  .checkout button:nth-child(2) a {
    text-decoration: none;
    color: #0a1fdb;
  }
  .Secure {
    font-size: 0.85rem;
  }
  .items {
    overflow: auto;
  }
</style>
