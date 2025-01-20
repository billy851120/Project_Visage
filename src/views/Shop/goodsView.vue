<template>
  <div class="goodsView_content">
    <div class="goodsView_nav mb-5">
      <ul class="goodsView_Breadcrumb">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/">All Products</router-link>
        </li>
        <li><router-link to="/">I'm a product</router-link></li>
      </ul>
      <ul class="goodsView_pagination">
        <li>
          <router-link to="/"
            ><i class="fa-solid fa-chevron-left"></i> Prev</router-link
          >
        </li>
        <li>
          <router-link to="/"
            >Next<i class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="goodsView_item">
      <div class="goodsView_img">
        <div
          class="img_box img_cursor"
          data-curser="你好"
        >
          <img
            src="/src/assets/imgs/01.jpg"
            alt=""
          />
        </div>
        <div class="img_list">
          <div class="thumbnail-container">
            <button>
              <img
                src="/src/assets/imgs/01.jpg"
                alt=""
              />
            </button>
          </div>
          <div class="thumbnail-container">
            <button>
              <img
                src="/src/assets/imgs/01.jpg"
                alt=""
              />
            </button>
          </div>
          <div class="thumbnail-container">
            <button>
              <img
                src="/src/assets/imgs/01.jpg"
                alt=""
              />
            </button>
          </div>
        </div>
        <p>
          I'm a product description. I'm a great place to add more details about
          your product such as sizing, material, care instructions and cleaning
          instructions.
        </p>
      </div>
      <div class="goodsView_info">
        <div class="title mb-3">
          <h1>I'm a Product</h1>
          <p>SKU: {{ route.params.id }}</p>
        </div>
        <div class="price mb-3">
          <p>$10.00</p>
        </div>
        <div class="color mb-3">
          <p class="mb-2">Color: Black</p>
          <ColorPickerView
            :sendColor="getColor"
            :clearColor="clearColor"
          ></ColorPickerView>
          <ColorPickerView
            :sendColor="getColor"
            :clearColor="clearColor"
          ></ColorPickerView>
        </div>
        <div class="Quantity mb-4">
          <p class="mb-2">Quantity</p>
          <input
            type="number"
            value="1"
          />
        </div>
        <div class="submit">
          <div class="submit_top mb-3">
            <div class="addCart">
              <button>Add to Cart</button>
            </div>
            <div class="like">
              <button>
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
          <div class="submit_bottom">
            <div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div class="Collapse">
          <div class="collapse-info">
            <el-collapse
              v-model="activeNames"
              @change="handleChange"
              accordion
            >
              <el-collapse-item
                title="Product Info"
                name="1"
              >
                <template #icon="{ isActive }">
                  <span class="ms-auto icon-ele">
                    <el-icon v-if="isActive"><Minus /></el-icon>
                    <el-icon v-else><Plus /></el-icon>
                  </span>
                </template>
                <div class="collapse-info_text">
                  I'm a product detail. I'm a great place to add more
                  information about your product such as sizing, material, care
                  and cleaning instructions. This is also a great space to write
                  what makes this product special and how your customers can
                  benefit from this item.
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Return & Refund Policy"
                name="2"
              >
                <template #icon="{ isActive }">
                  <span class="ms-auto icon-ele">
                    <el-icon v-if="isActive"><Minus /></el-icon>
                    <el-icon v-else><Plus /></el-icon>
                  </span>
                </template>
                <div class="collapse-info_text">
                  I’m a Return and Refund policy. I’m a great place to let your
                  customers know what to do in case they are dissatisfied with
                  their purchase. Having a straightforward refund or exchange
                  policy is a great way to build trust and reassure your
                  customers that they can buy with confidence.
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Shipping Info"
                name="3"
              >
                <template #icon="{ isActive }">
                  <span class="ms-auto icon-ele">
                    <el-icon v-if="isActive"><Minus /></el-icon>
                    <el-icon v-else><Plus /></el-icon>
                  </span>
                </template>
                <div class="collapse-info_text">
                  I'm a shipping policy. I'm a great place to add more
                  information about your shipping methods, packaging and cost.
                  Providing straightforward information about your shipping
                  policy is a great way to build trust and reassure your
                  customers that they can buy from you with confidence.
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import ColorPickerView from "./components/ColorPickerView.vue";

  //數據
  const route = useRoute();
  const colorHover = ref();

  //方法
  function getColor(value: any) {
    colorHover.value = value.currentTarget.children[0].attributes[2].value;
  }
  function clearColor(valur: any) {
    colorHover.value = "";
  }
</script>
<style scoped>
  /* .goodsView_info .Quantity input[type="number"]::-webkit-inner-spin-button,
  .goodsView_info .Quantity input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    background-color: #ccc;
    color: #000;
  } */

  .goodsView_info .submit .submit_top {
    display: flex;
    gap: 0 10px;
    box-sizing: border-box;
    height: 43px;
  }
  .goodsView_info .submit .submit_bottom {
    display: flex;
    box-sizing: border-box;
    height: 43px;
  }

  .goodsView_info .submit .addCart {
    flex: 1;
  }
  .goodsView_info .submit .submit_bottom > div {
    flex: 1;
  }
  .goodsView_info .submit .like {
    width: 13%;
  }
  .goodsView_info .submit .like button {
    font-size: 1.2rem !important;
  }
  .goodsView_info .submit .submit_bottom button {
    border: none;
    background-color: #0a1fdb;
    height: 100%;
    color: #fff;
    width: 100%;
    font-weight: 500;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: all 0.2s;
  }
  .goodsView_info .submit .submit_bottom button:hover {
    opacity: 0.8;
  }

  .goodsView_info .submit .submit_top .addCart button,
  .goodsView_info .submit .submit_top .like button {
    border: none;
    border: 1px solid #0a1fdb;
    background-color: #fff;
    height: 100%;
    color: #0a1fdb;
    width: 100%;
    font-weight: 500;
    border-radius: 5px;
    font-size: 0.9rem;
  }

  .goodsView_info .Quantity input {
    width: 80px;
    border: 1px solid rgb(199, 199, 199);
    color: #575757;
    font-weight: 300;
    padding: 12px 12px;
  }

  .goodsView_info .color p,
  .goodsView_info .Quantity p {
    font-size: 0.8rem;
    font-weight: normal;
  }

  .goodsView_info .price p {
    color: #0a1fdb;
    font-size: 1.2rem;
    font-weight: 300;
  }
  .goodsView_info .title h1 {
    color: #575757;
    font-size: 1.5rem;
    letter-spacing: 0.7px;
    margin-bottom: 10px;
  }
  .goodsView_info .title p {
    color: rgb(85, 85, 85);
    font-size: 0.75rem;
    font-weight: normal;
  }

  .goodsView_img p {
    font-size: 0.9rem;
    line-height: 1.8;
    font-weight: 400;
  }
  .img_list {
    margin: 12px 0 25px 0;
    padding-left: 25px;
    display: flex;
    gap: 0 5px;
  }
  .thumbnail-container {
    width: 45px;
    box-sizing: border-box;
    border: 1px solid rgb(199, 199, 199);
  }
  .thumbnail-container button {
    height: 45px;
    width: 100%;
    display: inline-block;
    padding: 0;
    border: none;
    cursor: default;
  }
  .thumbnail-container button img {
    width: 100%;
    height: 100%;
  }
  .img_box {
    width: 100%;
    border: 1px solid rgb(199, 199, 199);
    height: 667px;
  }
  .img_box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .goodsView_img {
    width: 56%;
  }
  .goodsView_info {
    flex: 1;
  }

  .goodsView_item {
    display: flex;
    gap: 0 40px;
  }
  .goodsView_pagination {
    display: inline-flex;
    margin-left: 50%;
  }
  .goodsView_pagination li:first-child::after {
    content: "|";
    margin: 0 10px;
  }
  .goodsView_pagination li a {
    color: #000;
    text-decoration: none;
  }
  .goodsView_content {
    margin: 50px auto;
    width: 890px;
  }
  .goodsView_Breadcrumb {
    display: inline-flex;
  }
  .goodsView_Breadcrumb li {
  }
  .goodsView_Breadcrumb li:not(:last-child)::after {
    content: "/";
    margin: 0 5px;
  }
  .goodsView_Breadcrumb li a {
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
    font-weight: normal;
  }
  ::v-deep(.collapse-info button) {
    color: #0a1fdb;
    font-size: 1.04rem;
    font-weight: 800;
  }
  .Collapse {
    margin-top: 50px;
  }
  ::v-deep(.collapse-info_text) {
    font-size: 0.9rem;
    line-height: 1.8;
    font-weight: 400;
    color: #000;
  }
  .el-collapse:first-child {
    border-top: none;
  }
  ::v-deep(.el-collapse-item__wrap) {
    border-bottom: 1px solid #000;
  }
  ::v-deep(.el-collapse-item__header) {
    border-bottom: 1px solid #000;
    transition: 0.6s 0.3s;
  }
  ::v-deep(.el-collapse-item__header.is-active) {
    border: none;
  }
  .img_cursor {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  /* Tooltip 內容 */
  .img_cursor::after {
    content: attr(data-curser); /* 讀取 HTML 的 data-tooltip 屬性 */
    position: absolute;
    bottom: 150%; /* 讓 tooltip 顯示在上方 */
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 6px 10px;
    font-size: 14px;
    white-space: nowrap;
    border-radius: 5px;
    /* opacity: 0; */
    /* visibility: hidden; */
    /* transition: opacity 0.3s ease-in-out; */
    z-index: 9;
  }

  /* 當滑鼠移入時顯示 tooltip */
  .img_cursor:hover::after {
    opacity: 1;
    visibility: visible;
    z-index: 9;
  }
</style>
