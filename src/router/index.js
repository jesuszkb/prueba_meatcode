import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Productos from "@/views/Productos.vue";
import Recetas from "@/views/Recetas.vue";
import Consejos from "@/views/Consejos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos
  },
  {
    path: "/recetas",
    name: "Recetas",
    component: Recetas
  },
  {
    path: "/consejos",
    name: "Consejos",
    component: Consejos
  },
  {
    path: "*",
    redirect: { name: "Home" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
