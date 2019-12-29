import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
  	path: "/death",
    name: "death",
    component: () => import('../views/Death.vue') 
  },
  {
  	path: "/days",
  	name: "days",
  	component: () => import("../views/Days.vue")
  },
  {
  	path: "/god",
  	name: "god",
  	component: () => import("../views/God.vue")
  },
  {
  	path: "/spider",
  	name: "spider",
  	component: () => import("../views/Spider.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
