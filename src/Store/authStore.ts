import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    isLoggedIn(status: boolean) {
      this.loggedIn = status;
    },
  },
});
