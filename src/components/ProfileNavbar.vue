<template>
  <div class="relative ml-3">
    <button
      type="button"
      class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      @click="toggleDropdown"
    >
      <span class="absolute -inset-1.5"></span>
      <span class="sr-only">Open user menu</span>
      <img class="h-8 w-8 rounded-full" :src="avatarUrl" alt="User Avatar" />
    </button>

    <transition name="fade">
      <div
        v-if="showDropdown"
        ref="dropdown"
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <a
          class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
          @click="() => navigateTo('profile')"
        >
          Your Profile
        </a>
        <a
          class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
          @click="() => navigateTo('settings')"
        >
          Settings
        </a>
        <a
          class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
          @click="logout"
        >
          Sign out
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    avatarUrl: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  emits: ["logout", "navigate"],
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleClickOutside(event: MouseEvent) {
      const dropdown = document.querySelector(".relative") as HTMLElement;
      if (dropdown && !dropdown.contains(event.target as Node)) {
        this.showDropdown = false;
      }
    },
    navigateTo(routeName: string) {
      this.$emit("navigate", routeName);
      this.showDropdown = false;
    },

    logout() {
      this.$emit("logout");
      this.showDropdown = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeMount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
