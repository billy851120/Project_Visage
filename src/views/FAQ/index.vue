<template>
  <div class="banner"><h1>FAQ</h1></div>
  <div class="faqContent">
    <div class="faq_search">
      <h6>Frequently asked questions</h6>
    </div>
    <div class="faq_collapse">
      <ul class="tabList">
        <li class="tabList_btn">
          <button>
            <router-link
              to="/FAQ/general"
              active-class="active"
              >General</router-link
            >
          </button>
        </li>
        <li class="tabList_btn">
          <button>
            <router-link
              to="/FAQ/settingUp"
              active-class="active"
              >Setting up FAQs</router-link
            >
          </button>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref } from "vue";

  //數據
  //方法
</script>

<style scoped>
  .tabList {
    display: flex;
    align-items: center;
  }
  .tabList_btn button {
    background-color: transparent;
    border: none;
    padding: 20px 30px 20px 0;
  }
  .tabList_btn a {
    font-size: 0.9rem;
    text-decoration: none;
    color: #000;
  }
  .tabList_btn a.active {
    color: #0a1fe0;
    font-weight: bold;
  }
  .faq_search {
  }
  .faq_search h6 {
    color: #0a1fe0;
    font-size: 1.1rem;
    font-weight: normal;
  }
  .faq_collapse {
    width: 900px;
  }
  .faqContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 60px 0;
  }
  .banner {
    width: 100%;
    background-color: #fdf8ec;
    text-align: center;
    padding: 20px 0;
  }
  .banner h1 {
    color: #0a1fe0;
    font-size: 4rem;
    font-weight: normal;
    letter-spacing: 10px;
  }
</style>
