import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout.vue";
import AccountLayout from "@/layouts/AccountLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard",
    component: BasicLayout,
    children: [
      {
        path: "/dashboard",
        name: "user.dashboard",
        component: () => import("@/pages/user/Dashboard.vue"),
      },
    ],
  },
  {
    path: "/account",
    component: AccountLayout,
    children: [
      {
        path: "/login",
        component: () => import("@/pages/account/Login.vue"),
      },
      {
        path: "/register",
        component: () => import("@/pages/account/RegisterUser.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
