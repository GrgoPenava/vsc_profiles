<template>
  <div class="h-full overflow-visible">
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginService from "./../LoginRegister/services/LoginService";

export default defineComponent({
  data() {
    return {
      loginService: new LoginService(),
    };
  },
  async created() {
    console.log("HOME");
    const response = await this.loginService.test();
    console.log("TEST response: " + response);
  },
});
</script>
<style scoped></style>
