<template>
  <div class="block"></div>
  <div class="Visage_navbar">
    <div class="nav_link">
      <nav>
        <ul>
          <li
            v-for="item in Category_Nav"
            :key="item.id"
          >
            <router-link
              class="textColor_1"
              :to="`/${item.name}`"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="logo">
      <router-link
        class="textColor_1"
        to="/"
        >VISAGE</router-link
      >
    </div>
    <div class="nav_member">
      <div class="search">
        <input
          type="text"
          placeholder="Search..."
          value=""
        />
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
      </div>
      <div class="log-in">
        <a href="#">
          <span style="font-size: 1.6rem; margin-right: 10px"
            ><i class="fa-solid fa-circle-user"></i
          ></span>
          <span style="font-size: 0.9rem">Log In</span>
        </a>
      </div>
      <div class="shopCar">
        <router-link to="/cart">
          <span class="shopCar_count">{{ cartStore.totalQuantity }}</span>
          <svg
            style="display: inline-block; width: 25px; padding-bottom: 4px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, reactive, onMounted, watch } from "vue";
  import { useScroll, useEventListener } from "@vueuse/core";
  import { RouterLink } from "vue-router";
  import { useCartStore } from "@/stores/cartStore";

  //數據
  const Category_Nav = reactive([
    { id: "N001", name: "Shop" },
    { id: "N002", name: "FAQ" },
    { id: "N003", name: "Contact" },
  ]);
  const cartStore = useCartStore();

  //方法
  const { isScrolling } = useScroll(window);
  onMounted(() => {
    let navbar: any = document.querySelector(".Visage_navbar");
    navbar.classList.add("visible");

    let ScrollCountUp = 0;
    let ScrollCountDown = 0;
    useEventListener(document, "wheel", (event) => {
      NavShow(event.deltaY);
    });

    function NavShow(ScrollVal: number) {
      if (ScrollVal < 0) {
        ScrollCountUp++;

        if (ScrollCountUp >= 3) {
          navbar.classList.remove("close");
          ScrollCountReset();
        }
      } else {
        ScrollCountDown++;

        if (ScrollCountDown >= 2) {
          navbar.classList.add("close");
          ScrollCountReset();
        }
      }
    }

    function ScrollCountReset() {
      ScrollCountDown = 0;
      ScrollCountUp = 0;
    }
  });

  //監控
  // watch(cartStore.totalQuantity, (item) => {

  // });
</script>

<style scoped>
  .block {
    padding: 55px 0;
  }

  .Visage_navbar {
    z-index: 99;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .Visage_navbar.visible {
    transform: none;
    opacity: 1;
    transition:
      opacity 0.1s,
      transform 0.9s ease-in-out;
  }

  .Visage_navbar.close {
    z-index: 99;
    display: flex;
    /* visibility: hidden; */
    opacity: 0;
    transition: opacity 0.4s 0.2s;
    pointer-events: none;
  }

  .nav_link ul {
    display: flex;
  }

  .nav_link a {
    padding: 12px 13px;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .nav_link a:hover {
    transition: all 0.3s;
    color: #0a1fdb;
  }

  .logo {
    padding-left: 190px;
  }

  .logo a {
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 6px;
  }

  .search {
    position: relative;
  }

  .search input {
    border: none;
    box-shadow: 0px 1px #000;
    padding: 11px 11px;
    font-size: 0.9rem;
    width: 192px;
  }

  .search input:hover {
    box-shadow: none;
    outline: 2px solid #000;
  }

  .search span {
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .nav_member {
    display: flex;
    align-items: center;
  }

  .log-in {
    margin: 0px 35px;
  }

  .log-in a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
  }

  .shopCar a {
    display: block;
    position: relative;
    text-decoration: none;
  }

  .shopCar a svg {
    font-size: 1.5rem;
    color: #000;
  }

  .shopCar a span {
    font-size: 0.9rem;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
  }
</style>
