<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "primary",
    },
    bgColor: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "",
    },
  },

  computed: {
    buttonClasses() {
      switch (this.type) {
        case "primary":
          return "inline-block rounded bg-light px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-0 active:bg-opacity-80";
        case "secondary":
          return "inline-block rounded bg-lighter px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-light transition duration-150 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-0 active:bg-opacity-80";
        case "custom":
          return `inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-lg transition duration-150 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-0 active:bg-opacity-80 ${this.bgColor} ${this.textColor}`;
        default:
          return "";
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
});
</script>

<style scoped></style>
