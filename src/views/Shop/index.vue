<template>
  <div class="shopPage">
    <div class="shopPage_category">
      <div class="category_browse">
        <h3>Browse by</h3>
        <ul>
          <li v-for="item in category">
            <router-link
              :to="{
                path: `/shop/goodsList/${item.replace(/\s/g, '')}`,
              }"
              :class="{ active: isActive(item) }"
              >{{ item }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="category_Filter">
        <h3>Filter by</h3>
        <collapse
          title="Product type"
          msg=""
          collapseKey="1"
        >
          <checkBox
            v-for="item in ProductType[
              route.params.browse as keyof typeof ProductType
            ]"
            :checkTitle="item"
            v-model="checkedType"
          ></checkBox>
        </collapse>
        <collapse
          title="Price"
          collapseKey="2"
        >
          <range v-model="priceRange"></range>
        </collapse>
        <collapse
          title="Color"
          :msg="colorHover"
          collapseKey="3"
        >
          <div class="colorGrpup">
            <ColorPicker
              v-for="color in colors"
              v-model="checkedColor"
              :key="color.name"
              :sendColor="getColor"
              :clearColor="clearColor"
              :colorName="color.name"
              :colorValue="color.value"
            ></ColorPicker>
          </div>
        </collapse>
      </div>
    </div>
    <div
      class="shopPage_views"
      ref="shopPageViews"
    >
      <router-view
        :clearType="cancelType"
        :clearRange="cancelRange"
        :clearColor="cancelColor"
        :clearAll="clearFilter"
      ></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { RouterView, useRoute } from "vue-router";
  import { ref, watch, onUpdated, onMounted } from "vue";
  import checkBox from "./components/CheckBox.vue";
  import collapse from "./components/Collapse.vue";
  import range from "./components/Range.vue";
  import ColorPicker from "./components/ColorPicker.vue";
  import { useGoodsStore } from "@/stores/goodsStore";
  import gsap from "gsap";

  //數據
  const goodsStore = useGoodsStore();
  const shopPageViews = ref<HTMLElement | null>(null);
  const colorHover = ref();
  const route = useRoute();
  const checkedType = ref([]);
  const checkedColor = ref([]);
  const priceRange = ref([6, 10]);
  const category = ref(["All Products", "Most Popular", "Adults", "Kids"]);
  const ProductType = {
    AllProducts: ["Adults", "MostPopular", "Kids"],
    MostPopular: ["Adults"],
    Adults: ["MostPopulat"],
    Kids: [],
  };
  const colors = [
    { name: "Black", value: "rgb(0, 0, 0)" },
    { name: "Blue", value: "rgb(51, 109, 206)" },
    { name: "Green", value: "rgb(120, 192, 127)" },
    { name: "Grey", value: "rgb(198, 198, 198)" },
    { name: "Orange", value: "rgb(219, 104, 10)" },
    { name: "Pink", value: "rgb(241, 205, 206)" },
    { name: "Red", value: "rgb(234, 75, 80)" },
    { name: "White", value: "rgb(255, 255, 255)" },
    { name: "Yellow", value: "rgb(255, 230, 0)" },
  ];
  goodsStore.setCategory(route.params.browse);
  goodsStore.setSortOption("");

  //方法
  watch(
    checkedColor,
    (value) => {
      goodsStore.setColorPicker(value);
    },
    { deep: true },
  );
  watch(
    checkedType,
    (value) => {
      goodsStore.setProductType(value);
    },
    { deep: true },
  );

  watch(
    () => route.params.browse,
    async () => {
      checkedType.value = [];

      if (shopPageViews.value) {
        gsap.fromTo(
          shopPageViews.value,
          {
            opacity: 0,
            filter: "blur(5px)",
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            delay: 0.5,
            stagger: 0.1, //每個項目依次延遲
            ease: "power3.out",
          },
        );
      }
    },
    { deep: true, immediate: true },
  );

  function getColor(value: any) {
    colorHover.value = value.currentTarget.children[0].attributes[2].value;
  }
  function clearColor(valur: any) {
    colorHover.value = "";
  }
  function isActive(item: any) {
    const queryBrowse = route.params.browse;
    return queryBrowse === item.replace(/\s/g, "");
  }
  function cancelType(val: string) {
    const canceled = goodsStore.filters.ProductType.filter((item) => {
      return item !== val;
    });
    checkedType.value = canceled;
  }
  function cancelColor(val: string) {
    const canceled = goodsStore.filters.colorPicker.filter((item) => {
      return item !== val;
    });
    checkedColor.value = canceled;
  }
  function cancelRange(val: any) {
    priceRange.value = [6, 10];
  }
  function clearFilter(value: any) {
    checkedType.value = [];
    checkedColor.value = [];
    priceRange.value = [6, 10];
  }
</script>

<style scoped>
  .shopPage_category {
    width: 16%;
    padding: 20px;
  }

  .shopPage_category h3 {
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 15px;
    margin-bottom: 0px;
    border-bottom: 1px solid #cccccc;
  }

  .category_browse {
    margin-bottom: 50px;
  }

  .category_browse ul li a {
    text-decoration: none;
    color: #000;
    display: inline-block;
    margin: 6px 0px;
    font-size: 1rem;
    font-weight: 200;
  }

  .category_browse ul li a:hover {
    text-decoration: underline;
  }

  .shopPage {
    display: flex;
  }

  .category_browse,
  .category_Filter {
  }

  .shopPage_views {
    width: 84%;
  }

  .colorGrpup {
    padding: 10px 0;
  }

  .active {
    color: #0a1fdb !important;
    text-decoration: underline !important;
  }
</style>
