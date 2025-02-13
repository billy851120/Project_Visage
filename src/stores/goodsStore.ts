import { defineStore } from "pinia";

// options store
export const useGoodsStore = defineStore("goods", {
  state: () => {
    //data(){return{}}防止數據汙染
    return {
      products: [
        {
          id: 1,
          name: "I'm a Product",
          price: 10,
          discountPrice: 6,
          sales: 10,
          color: ["blue", "red"],
          category: ["Adults", "MostPopular"],
          defaultImage:
            "/src/assets/imgs/84770f_46124d58147e46368cb73b4761c936b4~mv2 (1).webp",
          hoverImage: [
            "/src/assets/imgs/84770f_971a52319ced40d6becd8c7e858a01e4~mv2 (1).webp",
            "/src/assets/imgs/84770f_96be5e3c9bbd4ad8b10decf2d1aa80b7~mv2.webp",
          ],
        },
        {
          id: 2,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 1,
          color: ["green", "yellow"],
          category: "Adults",
          defaultImage:
            "/src/assets/imgs/84770f_e5643eebf75546529f98894b57c21224~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_4a8b1a0d8cb4418f888f8d8bd7a8a051~mv2.webp",
            "/src/assets/imgs/84770f_d7413e29052c4f2d8cc96b7046f0e10b~mv2.webp",
          ],
        },
        {
          id: 3,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 1,
          color: ["green", "pink"],
          category: "Adults",
          defaultImage:
            "/src/assets/imgs/84770f_797c96e4331c432e8e8e9ee00ba7947a~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_03564240a45d424688bbb43d83063992~mv2.webp",
            "/src/assets/imgs/84770f_2fa8a02c428e4ade94043396b278df22~mv2.webp",
          ],
        },
        {
          id: 4,
          name: "I'm a Product",
          price: 10,
          discountPrice: 6,
          sales: 1,
          color: ["blue", "pink"],
          category: "Adults",
          defaultImage:
            "/src/assets/imgs/84770f_2a6c30317dfa4ce993da3dda8fa7cb15~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_2d47918659e24fa0851bc32129db8664~mv2.webp",
            "/src/assets/imgs/84770f_4fd1c929921046e1acee5520f78ff44d~mv2.webp",
          ],
        },
        {
          id: 5,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 10,
          color: ["yellow", "blue"],
          category: ["Adults", "MostPopular"],
          defaultImage:
            "/src/assets/imgs/84770f_c63930bf88244b0e8799477c0341f3bc~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_920a15db22c7467eb14e19720c7ef161~mv2.webp",
            "/src/assets/imgs/84770f_ee87e6052e08485b83c6c071573f14ea~mv2.webp",
          ],
        },
        {
          id: 6,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 10,
          color: ["black", "white"],
          category: ["Adults", "MostPopular"],
          defaultImage:
            "/src/assets/imgs/84770f_28edc5e19bc2497189eb88785717f1e0~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_42c9ab98392d4c0d8db0aca2bb4df529~mv2.webp",
            "/src/assets/imgs/84770f_e24baab83d344b49b7b36c5788f9b89b~mv2.webp",
          ],
        },
        {
          id: 7,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 10,
          color: ["red", "orange"],
          category: ["Adults", "MostPopular"],
          defaultImage:
            "/src/assets/imgs/84770f_4f3970a052ef4bc3914f116a8160b7f2~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_ec4189bb9cfa41d7a0a2e7a3a9a2897e~mv2.webp",
            "/src/assets/imgs/84770f_32b5174906e746039427179b9e077cae~mv2.webp",
          ],
        },
        {
          id: 8,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 1,
          color: ["grey", "blue"],
          category: "Adults",
          defaultImage:
            "/src/assets/imgs/84770f_5c44195329a545a1bbbfba3865478cb3~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_62f23b8c89d24017b9b8a0d56bf2c827~mv2.webp",
            "/src/assets/imgs/84770f_944bc2bd18b9403297c4389b4f2375f2~mv2.webp",
          ],
        },
        {
          id: 9,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 1,
          color: ["grey", "blue"],
          category: "Kids",
          defaultImage:
            "/src/assets/imgs/84770f_ab1c5202398f451dbda7b91d5ed71d12~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_67a0d6aaef364045aaebd9bffc02c94a~mv2.webp",
            "/src/assets/imgs/84770f_fb7dc7c5d3af49d085d28debc4d3c157~mv2.webp",
          ],
        },
        {
          id: 10,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 1,
          color: ["orange", "pink"],
          category: "Kids",
          defaultImage:
            "/src/assets/imgs/84770f_be6849bea9c64fa2825532ece846ef48~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_207fed3b2e3942749213c72b0e123f88~mv2.webp",
            "/src/assets/imgs/84770f_04a63e09f68341fabc3559938b7380fc~mv2.webp",
          ],
        },
        {
          id: 11,
          name: "I'm a Product",
          price: 10,
          discountPrice: 6,
          sales: 1,
          color: ["red", "blue"],
          category: "Kids",
          defaultImage:
            "/src/assets/imgs/84770f_25ab51f9bfef4dff96d59a26cb2821a4~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_f1fb5b7439f3446d86017277a31b3b3d~mv2.webp",
            "/src/assets/imgs/84770f_0e1df6e0af2745bf81d43bdba3c90690~mv2.webp",
          ],
        },
        {
          id: 12,
          name: "I'm a Product",
          price: 10,
          discountPrice: null,
          sales: 1,
          color: ["yellow", "blue"],
          category: "Kids",
          defaultImage:
            "/src/assets/imgs/84770f_c0e2f78236a94bfe8d4a589e82a53472~mv2.webp",
          hoverImage: [
            "/src/assets/imgs/84770f_920a15db22c7467eb14e19720c7ef161~mv2 (1).webp",
            "/src/assets/imgs/84770f_8d591d4e42f0492d8e4e9a77a2b04016~mv2.webp",
          ],
        },
      ],
      filters: {
        id: 0,
        category: "",
        priceRange: [6, 10],
        colorPicker: [],
        ProductType: [],
        sortOption: "default",
      },
    };
  },
  getters: {
    filteredProducts: (state) => {
      const filtered = state.products.filter((item) => {
        // 篩選邏輯
        const matchId = !state.filters.id || item.id === state.filters.id;
        const effectivePrice = item.discountPrice || item.price;
        const matchCategory =
          !state.filters.category ||
          item.category.includes(state.filters.category);
        const matchType =
          !state.filters.ProductType[0] ||
          (Array.isArray(state.filters.ProductType) &&
            state.filters.ProductType.some((type) => {
              return Array.isArray(item.category)
                ? item.category.includes(type)
                : item.category === type;
            }));
        const matchPrice =
          effectivePrice >= state.filters.priceRange[0] &&
          effectivePrice <= state.filters.priceRange[1];
        const matchColor =
          !state.filters.colorPicker.length ||
          state.filters.colorPicker.some((color) => item.color.includes(color));
        return (
          matchId && matchCategory && matchPrice && matchColor && matchType
        );
      });

      // 排序邏輯
      return filtered.sort((a, b) => {
        switch (state.filters.sortOption) {
          case "Newest":
            return b.id - a.id;
          case "Price(lowtohigh)":
            return (a.discountPrice || a.price) - (b.discountPrice || b.price);
          case "Price(hightolow)":
            return (b.discountPrice || b.price) - (a.discountPrice || a.price);
          default:
            return 0;
        }
      });
    },
    mostPopularProducts: (state) => {
      return state.products.filter((item) => {
        const isPopular = item.sales >= 5;
        return isPopular;
      });
    },
    productTypes() {
      const types = new Set<string>();
      this.filteredProducts.forEach((item) => {
        const categories = Array.isArray(item.category)
          ? item.category
          : [item.category];

        categories.forEach((item) => {
          if (!this.filters.category || !item.includes(this.filters.category)) {
            types.add(item);
          }
        });
      });
      return Array.from(types);
    },
  },
  actions: {
    setId(id: any) {
      this.filters.id = id;
    },
    setCategory(category: any) {
      if (category === "AllProducts") {
        this.filters.category = "";
      } else {
        this.filters.category = category;
      }
    },
    setPriceRange(range: [number, number]) {
      this.filters.priceRange = range;
    },
    setColorPicker(color: any) {
      this.filters.colorPicker = color;
    },
    setProductType(category: any) {
      this.filters.ProductType = category;
    },
    setSortOption(options: string) {
      this.filters.sortOption = options;
    },
    clearAll(option: any) {
      this.filters.colorPicker = [];
    },
    clearAll2() {
      this.filters.id = 0;
      this.filters.category = "";
      this.filters.priceRange = [6, 10];
      this.filters.colorPicker = [];
      this.filters.ProductType = [];
      this.filters.sortOption = "default";
    },
  },
});
