import { defineStore } from "pinia";

export const useRoleStore = defineStore("roleStore", {
  state: () => {
    return { role: [] as string[] };
  },

  actions: {
    setRole(role: string) {
      if (this.role.indexOf(role) !== -1) {
        return;
      }

      this.role.push(role);
    },
  },
});
