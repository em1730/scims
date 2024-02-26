import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useScimsDataStore = defineStore("scimsUserData", {
  state: () => ({
    scimsUserData: 0,
    endUserAccountInfo: {
      department: "",
      division: "",
      password: "",
      username: "",
      jobDesignation: "",
      section: "",
    },
  }),

  getters: {
    doubleCount(state) {
      return state.scimsUserData * 2;
    },
  },

  actions: {
    async findScimsUserData(keyword) {
      try {
        const res = await api.post("api/user", { query: keyword });
        this.scimsUserData = res.data;
        console.log(this.scimsUserData);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
