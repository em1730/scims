import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useVamosDataStore = defineStore("vamosUserData", {
  state: () => ({
    vamosUserData: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.vamosUserData * 2;
    },
  },

  actions: {
    async findVamosUserData(keyword) {
      try {
        let res = await api.post("api/search-data", { query: keyword });
        this.vamosUserData = res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
