<template>
  <div class="flex items-center justify-center min-h-screen bg-[#1B262C]">
    <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
      <h1 class="text-2xl font-bold text-center text-gray-700">Welcome back</h1>
      <p class="text-sm text-center text-gray-500">
        Please enter your details.
      </p>
      <div>
        <input
          type="input"
          placeholder="Enter your username"
          class="w-full p-4 mt-2 mb-4 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="loginCreds.username"
        />
        <input
          type="password"
          placeholder="Enter password"
          class="w-full p-4 mt-2 mb-4 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="loginCreds.password"
        />
        <div class="flex items-center justify-between">
          <a href="#" class="text-xs text-blue-600 hover:underline"
            >Forgot password?</a
          >
        </div>
        <button
          class="w-full py-3 mt-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          @click="login"
        >
          Sign in
        </button>
      </div>
      <div class="flex items-center justify-center mt-4">
        <div class="h-px bg-gray-300 grow"></div>
        <span class="px-2 text-sm text-gray-400">or</span>
        <div class="h-px bg-gray-300 grow"></div>
      </div>

      <p class="mt-4 text-xs text-center text-gray-400">
        Don't have an account?
        <a href="#" class="text-blue-600 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginService from "./services/LoginService";
import { Login } from "./Types/Login";

export default defineComponent({
  data() {
    return {
      loginService: new LoginService(),
      loginCreds: {} as Login,
    };
  },
  created() {
    console.log("Created");
  },
  methods: {
    async login() {
      console.log("LOGIN 1", this.loginCreds.password);
      await this.loginService.login(this.loginCreds);
    },
  },
});
</script>
<style scoped></style>
