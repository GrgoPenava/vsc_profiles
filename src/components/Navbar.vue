<template>
  <nav class="fixed top-0 left-0 w-full z-50 py-2 bg-[#1B262C] px-5">
    <!-- Hamburger Icon -->
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
        <!-- Conditional icon change -->
        <i :class="showMenu ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
    </div>

    <!-- Full menu for larger screens -->
    <div
      class="hidden sm:flex justify-between items-center h-12 font-semibold text-xl text-center"
    >
      <!-- Logo -->
      <div>
        <router-link to="/" class="text-white hover:text-gray-300">
          <img src="../assets/logo.png" class="h-10 w-10" />
        </router-link>
      </div>

      <!-- Router Links -->
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

      <!-- Login/Register -->
      <div>
        <router-link to="/login" class="text-white hover:text-gray-300">
          <button class="text-white hover:text-gray-300">Login/Register</button>
        </router-link>
      </div>
    </div>

    <!-- Mobile Menu with Transition -->

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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const routes = router
      .getRoutes()
      .filter((route) => route.name && route.meta.show);
    const showMenu = ref(false);

    function toggleMenu() {
      showMenu.value = !showMenu.value;
    }

    return { routes, showMenu, toggleMenu };
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
