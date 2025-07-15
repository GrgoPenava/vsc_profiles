<template>
  <InitLoading v-if="isLoading" />
  <div v-else class="min-h-screen flex flex-col bg-[#1B262C]">
    <Navbar />
    <router-view class="pt-16 custom-scrollbar"></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import ApiService from "./Services/ApiService";
import InitLoading from "./components/InitLoading.vue";
export default defineComponent({
  components: { Navbar, InitLoading },
  data() {
    return {
      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      await ApiService.readTokenFromStorage();
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  },
});
</script>
<style scoped>
.bg-cover {
  background-image: url("./assets/background2.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
