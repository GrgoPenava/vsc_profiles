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
import SignService from "./../LoginRegister/services/SignService";

export default defineComponent({
  data() {
    return {
      signService: new SignService(),
    };
  },
  async created() {
    console.log("HOME");
    const response = await this.signService.test();
    console.log("TEST response: " + response);
  },
});
</script>
<style scoped></style>
