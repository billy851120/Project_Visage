<template>
  <div class="items">
    <div class="content">
      <div class="img">
        <img
          src="@/assets/imgs/84770f_2a6c30317dfa4ce993da3dda8fa7cb15~mv2.webp"
          alt=""
        />
      </div>
      <div class="info">
        <div class="txt me-auto">
          <div class="title">I'm a Product</div>
          <div class="price">$10.00</div>
          <div class="color">Color: Orange</div>
        </div>
        <div class="counter">
          <div class="count">
            <button>
              <el-icon><Minus /></el-icon>
            </button>
            <input
              type="number"
              name=""
              id=""
              v-model="count"
            />
            <button>
              <el-icon><Plus /></el-icon>
            </button>
          </div>
          <div class="total">$10.00</div>
        </div>
      </div>
    </div>
    <div class="del">
      <el-icon><Delete /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  import { ref } from "vue";

  //引入

  //數據
  const count = ref("1");

  //方法
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

  .info .txt .title {
    font-size: 0.9rem;
  }
  .info .txt {
    font-size: 0.8rem;
    font-weight: normal;
    letter-spacing: 0.3px;
  }
  .counter {
    display: flex;
  }
  .count input[type="number"]::-webkit-inner-spin-button,
  .count input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .count {
    border: 1px solid rgba(0, 0, 0, 0.6);
    align-items: center;
  }
  .count input[type="number"] {
    width: 100px;
    text-align: center;
    border: none;
    font-size: 0.8rem;
    transform: translateY(2px);
    outline: none;
    -moz-appearance: textfield;
  }
</style>
