<template>
  <div class="goodsView_content">
    <Sidebar v-model="isSidebarOpen"></Sidebar>
    <div class="goodsView_nav mb-5">
      <ul class="goodsView_Breadcrumb">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/shop/goodsList/AllProducts"
            >All Products</router-link
          >
        </li>
        <li>
          <router-link
            activeClass="active"
            to="/"
            >I'm a Product</router-link
          >
        </li>
      </ul>
      <ul class="goodsView_pagination">
        <li>
          <button @click="prevItem">
            <i class="fa-solid fa-chevron-left"></i> Prev
          </button>
        </li>
        <li>
          <button @click="nextItem">
            Next<i class="fa-solid fa-chevron-right"></i>
          </button>
        </li>
      </ul>
    </div>
    <div class="goodsView_item">
      <div class="goodsView_img">
        <transition-group
          class="img_box img_cursor"
          :class="{ loadding: isLoading }"
          name="fade"
          tag="div"
        >
          <img
            key="view1"
            v-if="
              selectedImg === goodsStore.filteredProducts[category].defaultImage
            "
            :src="selectedImg"
            alt=""
          />
          <img
            key="view2"
            v-if="
              selectedImg ===
              goodsStore.filteredProducts[category].hoverImage[0]
            "
            :src="selectedImg"
            alt=""
          />
          <img
            key="view3"
            v-if="
              selectedImg ===
              goodsStore.filteredProducts[category].hoverImage[1]
            "
            :src="selectedImg"
            alt=""
          />
        </transition-group>

        <div class="img_list">
          <input
            id="defaultImage"
            type="radio"
            name="list_img"
            :value="goodsStore.filteredProducts[category].defaultImage"
            v-model="selectedImg"
          />
          <input
            id="hoverImage_0"
            type="radio"
            name="list_img"
            :value="goodsStore.filteredProducts[category].hoverImage[0]"
            v-model="selectedImg"
          />
          <input
            id="hoverImage_1"
            type="radio"
            name="list_img"
            :value="goodsStore.filteredProducts[category].hoverImage[1]"
            v-model="selectedImg"
          />

          <div class="thumbnail-container">
            <button>
              <label for="defaultImage">
                <img
                  :src="goodsStore.filteredProducts[category].defaultImage"
                  alt=""
                />
              </label>
            </button>
          </div>

          <div class="thumbnail-container">
            <button>
              <label for="hoverImage_0">
                <img
                  :src="goodsStore.filteredProducts[category].hoverImage[0]"
                  alt=""
                />
              </label>
            </button>
          </div>
          <div class="thumbnail-container">
            <button>
              <label for="hoverImage_1">
                <img
                  :src="goodsStore.filteredProducts[category].hoverImage[1]"
                  alt=""
                />
              </label>
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
          <p>SKU: {{ goodsStore.filteredProducts[category].id }}</p>
        </div>
        <div class="price mb-3">
          <p>$10.00</p>
        </div>
        <div class="color mb-3">
          <p
            v-if="selectedColor[0]"
            class="mb-2"
          >
            Color:
            {{ selectedColor[0]?.toLocaleUpperCase() + selectedColor.slice(1) }}
          </p>
          <p
            v-else
            class="mb-2"
          >
            Color:
          </p>
          <ColorPickerView
            v-for="color in goodsStore.filteredProducts[category].color"
            :sendColor="getColor"
            :clearColor="clearColor"
            :colorValue="color"
            v-model="selectedColor"
          ></ColorPickerView>
        </div>
        <div class="Quantity mb-4">
          <p class="mb-2">Quantity</p>
          <input
            type="number"
            v-model="Quantity"
          />
        </div>
        <div class="submit">
          <div></div>
          <div class="submit_top mb-3">
            <div class="addCart">
              <button @click="addToCart()">
                <Loading v-if="isLoading2"></Loading>
                <span v-else> Add to Cart</span>
              </button>
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
  import { useGoodsStore } from "@/stores/goodsStore";
  import { useCartStore } from "@/stores/cartStore";
  import type { CollapseModelValue } from "element-plus";
  import { onUnmounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import ColorPickerView from "./components/ColorPickerView.vue";
  import Loading from "./components/Loading.vue";
  import Sidebar from "./components/Sidebar.vue";
  import router from "@/router";

  //數據
  const isLoading = ref(false);
  const isLoading2 = ref(false);
  const isSidebarOpen = ref(false);
  const selectedColor = ref("");
  const Quantity = ref(1);
  const route = useRoute();
  const colorHover = ref();
  const activeNames = ref(["1"]);
  const handleChange = (val: CollapseModelValue) => {
    // console.log(val);
  };

  const goodsStore = useGoodsStore();
  const cartStore = useCartStore();
  const category = ref(
    goodsStore.filteredProducts.findIndex((item) => {
      return item.id === Number(route.params.id);
    }),
  );
  let selectedImg = ref(
    goodsStore.filteredProducts[category.value].defaultImage,
  );
  const goods = ref(goodsStore.filteredProducts[category.value]);

  //方法
  function getColor(value: any) {
    colorHover.value = value.currentTarget.children[0].attributes[2].value;
  }
  function clearColor(valur: any) {
    colorHover.value = "";
  }
  function addToCart() {
    if (selectedColor.value) {
      if (isLoading2.value) return;
      isLoading2.value = true;

      setTimeout(() => {
        cartStore.addToCart({
          id: goods.value.id,
          name: goods.value.name,
          price: goods.value.price,
          color: selectedColor.value,
          image: goods.value.defaultImage,
          quantity: Quantity.value,
          loading: false,
        });
        isLoading2.value = false;
        isSidebarOpen.value = true;
      }, 1500);
    } else {
      alert("請選擇顏色");
      return;
    }
  }
  console.log(goodsStore.filteredProducts[category.value]);

  function prevItem() {
    if (isLoading.value) return;
    if (category.value <= 0) {
      category.value = 0;
      router.push(
        `/shop/goodsView/${goodsStore.filteredProducts[category.value].id}`,
      );
      selectedColor.value = "";
    } else {
      category.value -= 1;
      router.push(
        `/shop/goodsView/${goodsStore.filteredProducts[category.value].id}`,
      );
      selectedColor.value = "";

      isLoading.value = true;
    }

    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
  function nextItem() {
    if (isLoading.value) return;
    if (category.value >= goodsStore.filteredProducts.length - 1) {
      category.value = goodsStore.filteredProducts.length - 1;
      router.push(
        `/shop/goodsView/${goodsStore.filteredProducts[category.value].id}`,
      );
      selectedColor.value = "";
    } else {
      category.value += 1;
      router.push(
        `/shop/goodsView/${goodsStore.filteredProducts[category.value].id}`,
      );
      selectedColor.value = "";

      isLoading.value = true;
    }

    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
  onUnmounted(() => {
    goodsStore.clearAll2();
  });

  //監視
  watch(category, () => {
    selectedImg.value =
      goodsStore.filteredProducts[category.value].defaultImage;
    goods.value = goodsStore.filteredProducts[category.value];
  });
  console.log(cartStore.cartItems);
</script>
<style scoped>
  .loadding {
    filter: blur(4px);
  }
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
    width: 100%;
    height: 45px;
    display: inline-block;
    padding: 0;
    border: none;
    cursor: default;
  }
  .thumbnail-container label {
    height: 100%;
    width: 100%;
    padding: 0;
    border: none;
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
  .goodsView_pagination li button {
    color: #000;
    text-decoration: none;
    border: none;
    background: transparent;
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
    /* cursor: url("../../assets/imgs/Cursor.png"), auto; */
    cursor: pointer;
  }

  .img_list input[type="radio"] {
    display: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    position: absolute;
  }
  .fade-leave-from,
  .fade-enter-to {
    opacity: 1;
    position: static;
  }

  .goodsView_Breadcrumb li a.active {
    color: #a6a6a6;
    pointer-events: none;
  }
</style>
