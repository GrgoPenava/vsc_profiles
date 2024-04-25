<template>
  <div>
    <h1>XSS Demo</h1>
    <input v-model="userInput" placeholder="Unesi nešto opasno" />
    <button @click="displayInput">Prikaži</button>
    <div v-html="dangerousHTML"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      userInput: "",
      dangerousHTML: "",
    };
  },
  methods: {
    displayInput() {
      //<img src="invalid.jpg" onerror="alert('XSS napad!')">
      console.log("OKINE SE", this.dangerousHTML);
      this.dangerousHTML = this.userInput;
    },
  },
});
</script>
<style scoped></style>
