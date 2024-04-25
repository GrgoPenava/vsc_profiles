<template>
  <div
    class="bg-slate-600 h-12 font-semibold text-xl text-center justify-start items-center flex gap-6 px-5"
  >
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="{ name: route.name }"
      class="text-white hover:text-gray-300"
    >
      {{ route.name }}
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  data() {
    return {
      router: useRouter(),
      routes: [] as any[],
    };
  },
  created() {
    this.routes = this.router
      .getRoutes()
      .filter((route) => route.name && route.meta.show);
  },
});
</script>
<style scoped></style>
