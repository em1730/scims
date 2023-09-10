import { defineStore } from 'pinia'

export const AuthStore = defineStore('authstore', {
  state: () => ({
    token:"",
    user: {},

  }),

  // getters: {
  //   doubleCount (state) {
  //     return state.counter * 2
  //   }
  // },

  actions: {
    login (token,user) {
      this.token = token,
      this.user = user
    }
  }
})
