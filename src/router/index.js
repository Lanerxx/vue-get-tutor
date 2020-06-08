import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    props: true,
    path: "/login",
    component: () => import("@/views/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
