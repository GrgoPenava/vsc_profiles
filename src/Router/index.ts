import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound from "../components/NotFound.vue";
import Home from "../modules/Home/Home.vue";
import Login from "../modules/LoginRegister/Login.vue";
import Register from "../modules/LoginRegister/Register.vue";

export function getRoutes(): RouteRecordRaw[] {
  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "HOME",
      component: Home,
      meta: { requiresAuth: true, show: false },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth: true, show: false },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { requiresAuth: true, show: false },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ];
  return routes;
}

const router = createRouter({
  history: createWebHistory("/"),
  routes: getRoutes(),
});
export default router;
