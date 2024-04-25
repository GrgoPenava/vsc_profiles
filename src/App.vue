<template>
  <div class="h-screen flex flex-col">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
export default defineComponent({
  components: { Navbar },
});
</script>
<style scoped></style>
