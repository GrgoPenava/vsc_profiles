<template>
  <nav class="fixed top-0 left-0 w-full z-50 py-2 bg-[#1B262C] px-5">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-xl text-center sm:hidden">
        <router-link to="/" class="text-white hover:text-gray-300">
          <img src="../assets/logo.png" class="h-10 w-10" />
        </router-link>
      </div>
      <div
        class="text-white h-12 flex items-center justify-end sm:hidden"
        @click="toggleMenu"
      >
        <i :class="showMenu ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
    </div>

    <div
      class="hidden sm:flex justify-between items-center h-12 font-semibold text-xl text-center"
    >
      <div>
        <router-link to="/" class="text-white hover:text-gray-300">
          <img src="../assets/logo.png" class="h-10 w-10" />
        </router-link>
      </div>

      <div class="flex gap-6">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="{ name: route.name }"
          class="text-white hover:text-gray-300"
        >
          {{ route.name }}
        </router-link>
      </div>

      <div class="flex items-center" v-if="!loggedIn">
        <router-link to="/login">
          <button
            type="button"
            class="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
          >
            Sign in
          </button>
        </router-link>
        <router-link to="/register">
          <button
            type="button"
            class="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Sign up for free
          </button>
        </router-link>
      </div>
      <div v-if="loggedIn">
        <ProfileNavbar @logout="logout" @navigate="handleNavigation" />
      </div>
    </div>

    <transition name="slide">
      <div v-if="showMenu" class="flex flex-col items-center sm:hidden">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="{ name: route.name }"
          class="text-white hover:text-gray-300 py-2"
        >
          {{ route.name }}
        </router-link>
        <button class="text-white hover:text-gray-300 py-2">
          Login/Register
        </button>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordNormalized, useRouter } from "vue-router";
import { useAuthStore } from "../Store/authStore";
import SignService from "../modules/LoginRegister/services/SignService";
import { useToast } from "vue-toast-notification";
import ProfileNavbar from "./ProfileNavbar.vue";

export default defineComponent({
  components: { ProfileNavbar },
  data() {
    return {
      router: useRouter(),
      routes: [] as RouteRecordNormalized[],
      showMenu: false,
      showDropdown: false,
      loggedIn: false,
      authStore: useAuthStore(),
      signService: new SignService(),
      toast: useToast(),
    };
  },
  watch: {
    "authStore.loggedIn"(newVal) {
      this.loggedIn = newVal;
    },
  },
  created() {
    this.loggedIn = this.authStore.loggedIn;
    this.router.getRoutes().filter((route) => route.name && route.meta.show);
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    async logout() {
      try {
        await this.signService.logout();
        this.showDropdown = false;
      } catch (error: any) {
        this.toast.error(error);
        console.log(error);
      }
    },

    handleNavigation(routeName: string) {
      this.router.push({ name: routeName });
    },
  },
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
