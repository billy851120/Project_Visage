<template>
  <div class="TagUs">
    <h1 class="textColor_2">Tag Us on Your Daily Cruise #visage</h1>
    <div class="TagUs_list">
      <div class="TagUs_itemsTop">
        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/01.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/02.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/03.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/04.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="TagUs_itemsBottom">
        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/05.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/06.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/07.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="TagUs_item">
          <router-link to="/">
            <div class="TagUs_itemBg">
              <img
                src="/src/assets/imgs/08.jpg"
                alt=""
              />
            </div>
            <div class="TagUs_itemTxt">
              <div>
                <p>#wix, #website,</p>
                <p>#freewebsite,</p>
                <p>#websitetemplate,</p>
                <p>#wix.com</p>
              </div>
            </div>
          </router-link>
        </div>
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
  .TagUs {
    text-align: center;
  }

  .TagUs h1 {
    padding: 50px 0px 0px 0;
    font-size: 1.6em;
    letter-spacing: 1.1px;
    margin-bottom: 37px;
  }

  .TagUs_item {
    position: relative;
    width: 25%;
  }

  .TagUs_item:hover .TagUs_itemTxt {
    opacity: 1;
    transition: all 0.3s;
  }

  .TagUs_item a {
    cursor: default;
  }

  .TagUs_itemBg {
    width: 100%;
  }

  .TagUs_itemBg img {
    width: 100%;
  }

  .TagUs_list {
    background-color: #fdf8ec;
    padding: 80px 40px;
  }

  .TagUs_itemTxt {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
  }

  .TagUs_itemTxt p {
    color: #fff;
  }

  .TagUs_listTop {
    margin-bottom: 0;
  }

  .TagUs_itemsTop {
    margin-bottom: 85px;
  }

  .TagUs_itemsTop,
  .TagUs_itemsBottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 85px;
  }
</style>
