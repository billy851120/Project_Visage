import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartItems: ref<
        {
          id: Number;
          name: String;
          price: Number;
          color: String;
          image: String;
          quantity: Number;
        }[]
      >([]),
    };
  },
  getters: {
    totalQuantity(state) {
      return state.cartItems.reduce(
        (sum, item) => sum + Number(item.quantity),
        0,
      );
    },
  },
  actions: {
    addToCart(products: {
      id: Number;
      name: String;
      price: Number;
      color: String;
      image: String;
      quantity: Number;
    }) {
      const item = this.cartItems.find((element) => element.id === products.id);
      if (item) {
        if ("quantity" in item && typeof item.quantity === "number") {
          item.quantity++;
          console.log("數量++");
        }
      } else {
        console.log("進購物車");
        this.cartItems.push({ ...products, quantity: 1 });
      }
    },
    removeFromCart(id: Number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
    },
  },
});
