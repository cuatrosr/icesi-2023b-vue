import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorites", {
  state: () => {
    return { favorites: [] };
  },

  actions: {
    addFavorites() {},
    removeFavorites() {},
  },
});
