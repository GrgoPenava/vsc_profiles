import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//import { useRoleStore } from "../Store/roleStore";
import NotFound from "../components/NotFound.vue";
import Home from "../modules/Home/Home.vue";
import Login from "../modules/LoginRegister/Login.vue";

export function getRoutes(): RouteRecordRaw[] {
  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: { requiresAuth: true, show: true },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth: true, show: true },
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
