import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./Router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import ApiService from "./Services/ApiService";
import ToastPlugin from "vue-toast-notification";
import { ToastProps } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

ApiService.init(import.meta.env.VITE_BACKEND_URL);
const toastOptions: ToastProps = {
  position: "top-right",
  queue: true,
};

function renderApp() {
  app.use(router).use(PrimeVue).use(ToastPlugin, toastOptions).mount("#app");
}

renderApp();
