import { defineStore } from "pinia";

export const useRoleStore = defineStore("roleStore", {
  state: () => {
    return { role: null as string | null };
  },

  actions: {
    setRole(role: string) {
      this.role = role;
    },
    removeRole() {
      this.role = null;
    },
  },
});
