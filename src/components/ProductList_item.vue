<template>
  <ul class="goodsList">
    <li
      ref="shopList"
      v-if="filteredProducts.length > 0"
      v-for="item in filteredProducts"
      :key="item.id"
    >
      <div class="goodsList_item">
        <router-link :to="{ path: `/shop/goodsView/${item.id}` }">
          <div
            v-if="item.discountPrice"
            class="tag"
          >
            <p>Sale</p>
          </div>
          <div class="goodsList_img">
            <img
              :src="item.defaultImage"
              alt=""
            />
            <div class="hoverImage">
              <img
                :src="item.hoverImage[0]"
                alt=""
              />
            </div>
            <div class="goodsList_View">
              <p>Quick View</p>
            </div>
          </div>
          <div class="goodsList_txt">
            <p class="goodsList_name">{{ item.name }}</p>
            <p v-if="item.discountPrice">
              <span class="goodsList_price sale"
                >${{ item.price.toFixed(2) }}</span
              >

              <span class="goodsList_price">
                ${{ item.discountPrice?.toFixed(2) }}
              </span>
            </p>
            <p v-else>
              <span class="goodsList_price">${{ item.price.toFixed(2) }}</span>
            </p>
          </div>
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, reactive, watch, computed, onMounted } from "vue";
  import { useGoodsStore } from "@/stores/goodsStore";
  import { useRoute } from "vue-router";
  import gsap from "gsap";

  //數據
  const route = useRoute();
  const goodsStore = useGoodsStore();
  const shopList = ref<HTMLElement | null>(null);
  const filteredProducts = computed(() => goodsStore.filteredProducts);
  const mostPopularProducts = computed(() => goodsStore.mostPopularProducts);
  const selectedCategory = ref("");

  console.log(goodsStore.filteredProducts);

  //方法
  onMounted(() => {
    const category = route.params.browse as string;
    goodsStore.setCategory(category || "");
  });
  watch(
    () => route.params.browse,
    (newCategory) => {
      goodsStore.setCategory(newCategory || "");
    },
  );
  watch(selectedCategory, (value) => {
    goodsStore.setCategory(value);
  });
  watch(
    () => goodsStore.filteredProducts,
    async () => {
      if (shopList.value) {
        gsap.fromTo(
          shopList.value,
          {
            opacity: 0,
            filter: "blur(5px)",
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            delay: 0.3,
            lazy: true,
            stagger: 0.05, //每個項目依次延遲
            ease: "power3.out",
          },
        );
      }
    },
  );
</script>

<style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s 1s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
  }
  .goodsList {
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-wrap: wrap;
    gap: 30px 20px;
  }

  .goodsList li {
    width: calc(25% - 20px);
  }

  .goodsList_img {
    position: relative;
    overflow: hidden;
  }

  .goodsList_img:hover .hoverImage {
    opacity: 1;
  }

  .goodsList_img img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .hoverImage {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s;
  }

  .hoverImage img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .goodsList_item {
    border: 2px solid #c7c7c7;
    text-align: center;
    position: relative;
  }

  .goodsList_item a {
    text-decoration: none;
  }

  .goodsList_item:hover .goodsList_View {
    /* opacity: 1; */
    transform: none;
    pointer-events: all;
    transition: all 0.4s;
  }

  .goodsList_name {
    color: #000;
    font-size: 0.9rem;
  }

  .goodsList_price {
    color: #0a1fc8;
  }

  .goodsList_txt {
    padding: 10px 0;
    position: relative;
    background-color: #fff;
    z-index: 9;
  }

  .goodsList_View {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    /* opacity: 0; */
    transform: translateY(102%);
    pointer-events: none;
    transition: all 0.4s;
  }

  .goodsList_View p {
    padding: 15px 0;
    font-size: 0.8rem;
    color: #000;
    width: 100%;
    display: block;
    text-decoration: none;
  }

  .shop_all {
    margin: 60px 0px;
    text-align: center;
  }

  .shop_all a {
    font-size: 0.95rem;
    color: #0a1fc8;
    border: 1px solid #0a1fc8;
    border-radius: 4px;
    padding: 10px 40px;
    text-decoration: none;
    background: transparent;
  }

  .shop_all a:hover {
    background-color: #0a1fc8;
    color: #fff;
    transition: all 0.4s;
  }
  .sale {
    text-decoration: line-through;
  }
  .tag {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    color: #fff;
    padding: 2px 14px;
    font-size: 0.8rem;
    font-weight: normal;
    z-index: 9;
  }
</style>
