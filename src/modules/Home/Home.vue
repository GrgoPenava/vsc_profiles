<template>
  <div class="h-full overflow-visible">
    <div class="h-full text-2xl my-10 text-default">abc</div>
    <div class="h-full text-2xl my-10 text-dark">abc</div>
    <div class="h-full text-2xl my-10 text-light">abc</div>
    <div class="h-full text-2xl my-10 text-lighter">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <div class="h-full text-2xl my-10">abc</div>
    <Button type="primary" @onClick="handlePrimaryClick">Primary</Button>
    <Button type="secondary" @click="handlePrimaryClick">Secondary</Button>
    <Button
      type="custom"
      bgColor="bg-red-500"
      textColor="text-yellow-100"
      @click="handlePrimaryClick"
    >
      Custom
    </Button>

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
import Button from "../../components/Button.vue";

export default defineComponent({
  components: { Button },
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
  methods: {
    async handlePrimaryClick() {
      const response = await this.signService.test();
      console.log("CLICKKK", response);
    },
  },
});
</script>
<style scoped></style>
