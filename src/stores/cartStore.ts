import { sum } from "element-plus/es/components/table-v2/src/utils.mjs";
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
          loading: Boolean;
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
    totalPrice(state) {
      return state.cartItems.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.quantity),
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
      quantity: number;
      loading: Boolean;
    }) {
      const item = this.cartItems.find(
        (element) =>
          element.id === products.id && element.color === products.color,
      );
      if (item) {
        if ("quantity" in item && typeof item.quantity === "number") {
          item.quantity += products.quantity;
          console.log("數量++");
        }
      } else {
        console.log("進購物車");
        console.log(this.cartItems);
        this.cartItems.push({ ...products });
      }
    },
    removeFromCart(id: Number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id && item);
    },
  },
});
