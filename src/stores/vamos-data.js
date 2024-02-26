import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useVamosDataStore = defineStore("vamosUserData", {
  state: () => ({
    vamosUserData: 0,
    endUserPersonalInfo: {
      entityNo: "",
      fullName: "",
      gender: "",
      dateOfBirth: "",
      mobileNo: "",
      homeAddress: "",
      email: "",
      photo: "",
    },
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
        this.vamosUserData = res.data;

        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
