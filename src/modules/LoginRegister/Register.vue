<template>
  <div class="flex items-center justify-center min-h-screen bg-[#1B262C]">
    <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
      <h1 class="text-2xl font-bold text-center text-gray-700">Register</h1>
      <p class="text-sm text-center text-gray-500">
        Please enter your details.
      </p>
      <form @submit.prevent="register">
        <div>
          <div v-for="(field, key) in fields" :key="key" class="mb-4">
            <div class="relative flex items-start">
              <p class="text-xs text-start ml-3 text-gray-500 relative">
                {{ field.field }}
                <span
                  v-if="field.required"
                  class="absolute text-red-500 text-xs -top-0.5 -right-2"
                  >*</span
                >
              </p>
            </div>

            <input
              :type="field.type"
              :placeholder="field.placeholder"
              class="w-full p-4 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="registerCreds[key]"
              :class="{ 'border-red-500': v$.$invalid && v$.$dirty }"
            />
            <div
              v-if="
                v$.registerCreds[key].$invalid && v$.registerCreds[key].$dirty
              "
              class="text-red-500 text-xs"
            >
              {{ field.error }}
            </div>
          </div>

          <button
            class="w-full py-3 mt-4 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-600"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <div class="flex items-center justify-center mt-4">
        <div class="h-px bg-gray-300 grow"></div>
        <span class="px-2 text-sm text-gray-400">or</span>
        <div class="h-px bg-gray-300 grow"></div>
      </div>

      <p class="mt-4 text-xs text-center text-gray-400">
        Already have an account?
        <router-link to="/login" class="text-black hover:text-gray-300">
          <a href="#" class="text-blue-600 hover:underline">Sign in</a>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toast-notification";
import SignService from "./services/SignService";
import { Register } from "./Types/SignTypes";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default defineComponent({
  data() {
    return {
      fields: {
        firstName: {
          type: "text",
          placeholder: "Enter your first name",
          field: "First name",
          error: "First name is required.",
          required: true,
        },
        lastName: {
          type: "text",
          placeholder: "Enter your last name",
          field: "Last name",
          error: "Last name is required.",
          required: true,
        },
        username: {
          type: "text",
          placeholder: "Enter your username",
          field: "Username",
          error: "Username is required.",
          required: true,
        },
        email: {
          type: "email",
          placeholder: "Enter your email",
          field: "Email",
          error: "A valid email is required.",
          required: true,
        },
        password: {
          type: "password",
          placeholder: "Enter your password",
          field: "Password",
          error:
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 6 characters long.",
          required: true,
        },
      },
      v$: useVuelidate(),
      router: useRouter(),
      registerCreds: {} as Register,
      toast: useToast(),
      signService: new SignService(),
    };
  },
  validations() {
    const passwordValidator = (value: string) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
      return regex.test(value) || "Invalid password format.";
    };

    return {
      registerCreds: {
        firstName: { required },
        lastName: { required },
        username: { required },
        email: { required, email },
        password: { required, minLength: minLength(6), passwordValidator },
      },
    };
  },
  methods: {
    async register() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        this.toast.error("Please fill in all fields correctly.");
        return;
      }
      try {
        const response = await this.signService.register(this.registerCreds);
        this.toast.success(response.message);
      } catch (error: any) {
        this.toast.error(error.message);
      }
    },
  },
});
</script>
<style scoped></style>
