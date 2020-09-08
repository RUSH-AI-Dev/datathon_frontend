import Vue from "vue";
import VueRouter from "vue-router";
import Map from "../views/Map.vue";
import Report from "../views/Report.vue";
import Budget from "../views/Budget.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Budget",
    name: "Budget",
    component: Budget,
  },
  {
    path: "/Report",
    name: "Report",
    component: Report,
  },
  {
    path: "/Map",
    name: "Map",
    component: Map,
  },
  {
    path: "*",
    name: "Map",
    component: Map,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
