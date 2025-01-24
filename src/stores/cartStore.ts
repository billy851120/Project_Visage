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
  getters: {},
  actions: {
    addToCart(products: {
      id: Number;
      name: String;
      price: Number;
      color: String;
      image: String;
      quantity: Number;
    }) {
      console.log("asdasdasdsad");
      this.cartItems.push({ ...products, quantity: 1 });
    },
  },
});
