import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Shop from "@/views/Shop/index.vue";
import FAQ from "@/views/FAQ/index.vue";
import General from "@/views/FAQ/components/General.vue";
import SettingUp from "@/views/FAQ/components/SettingUp.vue";
import Contact from "@/views/Contact/index.vue";
import GoodsList from "@/views/Shop/goodsList.vue";
import GoodsView from "@/views/Shop/goodsView.vue";
import Cart from "@/views/Cart/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "shop",
          component: Shop,
          children: [
            {
              path: "",
              redirect: "/shop/goodsList/AllProducts",
            },

            {
              path: "goodsList/:browse",
              component: GoodsList,
            },
          ],
        },
        {
          path: "shop/goodsView/:id",
          component: GoodsView,
        },
        {
          path: "faq",
          component: FAQ,
          children: [
            {
              path: "",
              redirect: "FAQ/general",
            },
            {
              path: "general",
              component: General,
            },
            {
              path: "settingUp",
              component: SettingUp,
            },
          ],
        },
        {
          path: "contact",
          component: Contact,
        },
        {
          path: "cart",
          component: Cart,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
