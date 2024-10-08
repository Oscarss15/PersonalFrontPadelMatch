import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/tecnica",
      name: "tecnica",
      component: () => import("../views/TecnicaView.vue"),
    },
    {
      path: "/psicologia",
      name: "psicologia",
      component: () => import("../views/PsicologiaDeportivaView.vue"),
    },
    {
      path: "/salas",
      name: "salas",
      component: () => import("../views/SalasView.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/articulos",
      name: "articulos",
      component: () => import("../views/ArticulosView.vue"),
    },
    {
      path: "/adminArticulos",
      name: "adminArticulos",
      component: () => import("../views/AdminArticulosView.vue"),
    },
    {
      path: "/articulos/:id",
      name: "cuerpoArticulo",
      component: () => import("../components/compArticulo/CuerpoArticulo.vue"),
      props: true,
    },
    {
      path: "/sala",
      name: "sala",
      component: () => import("../views/SalaView.vue"),
    },
  ],
});

export default router;
