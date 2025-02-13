<template>
  <div class="banner">
    <div class="banner_bg">
      <img
        src="/src/assets/imgs/5743b5_2661f76c3b8b451e94e7d18e03a64176~mv2.jpg"
        alt=""
      />
    </div>
    <div class="banner_text">
      <h1>
        Reusable<br />
        Face Masks
      </h1>
      <router-link to="/">Shop Now</router-link>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入

  //數據

  //方法
</script>

<style scoped>
  .banner {
    position: relative;
  }

  .banner_text h1 {
    font-size: 4rem;
    font-weight: normal;
    letter-spacing: 2px;
    margin: 0px 0 40px 0px;
  }

  .banner_text {
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);
    width: 615px;
    height: auto;
  }

  .banner_text a {
    color: #0a1fc8;
    border: 1px solid #0a1fc8;
    border-radius: 5px;
    padding: 10px 34px;
    text-decoration: none;
    background: transparent;
  }

  .banner_text a:hover {
    background-color: #0a1fc8;
    color: #fff;
    transition: all 0.4s;
  }

  .banner_bg img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
</style>
