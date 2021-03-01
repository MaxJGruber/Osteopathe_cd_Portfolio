import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/contact-page", name: "Contact-page", component: () =>
      import(/* webpackChunkName: "contact" */ "../views/contactPage.vue")
  },
  {
    path: "/photo-gallery", name: "Photo-Gallery", component: () =>
      import(/* webpackChunkName: "photo-gallery" */ "../views/PhotoGallery.vue")
  }];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_FRONTEND_URL,
  routes
});

export default router;
