<template>
  <div class="stabdFor">
    <h1 class="textColor_2">What We Stand For</h1>
    <div class="stabdFor_banner">
      <div class="stabdFor_txt">
        <div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
      <div class="stabdFor_img">
        <img
          src="/src/assets/imgs/5743b5_8f39b268f4bf477ca1b79062233ff327~mv2.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入

  //數據

  //方法
</script>

<style scoped>
  .stabdFor {
    text-align: center;
    margin-bottom: 200px;
  }

  .stabdFor h1 {
    padding: 50px 0px 0px 0;
    font-size: 1.6em;
    letter-spacing: 1.1px;
    margin-bottom: 37px;
  }

  .stabdFor_banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 40px;
  }

  .stabdFor_txt {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 680px;
    width: 50%;
    background-color: #d9ecff;
  }

  .stabdFor_txt div {
    width: 380px;
  }

  .stabdFor_txt p {
    color: #0a1fdb;
    font-size: 1.1rem;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 1.9;
  }

  .stabdFor_img {
    width: 50%;
  }

  .stabdFor_img img {
    height: 680px;
    width: 100%;
  }
</style>
