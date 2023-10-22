import { defineStore } from "pinia";

export const useCounterStore = defineStore("vamosUserData", {
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
        let res = await api.post("api/search-user", { query: keyword });
        this.vamosUserData = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
