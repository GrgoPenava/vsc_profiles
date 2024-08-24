import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./Router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import ApiService from "./Services/ApiService";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
const backendUrl = "http://localhost:5000/";
ApiService.init(backendUrl);

function renderApp() {
  app.use(router).use(PrimeVue).mount("#app");
}

renderApp();
