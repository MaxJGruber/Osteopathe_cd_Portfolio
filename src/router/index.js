// Vue router file which creates router system for website pages

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/contact-page", name: "Contact-page", component: () =>
      import(/* webpackChunkName: "contact-page" */ "../views/contactPage.vue")
  },
  {
    path: "/photo-gallery", name: "Photo-Gallery", component: () =>
      import(/* webpackChunkName: "photo-gallery" */ "../views/PhotoGallery.vue")
  },
  {
    path: "/presentations", name: "Presentations", component: () =>
      import(/* webpackChunkName: "presentations" */ "../views/Presentations.vue")
  },
  {
    path: "/patients", name: "Patients", component: () =>
      import(/* webpackChunkName: "patients" */ "../views/Patients.vue")
  },
  {
    path: "/admin-route", name: "Admin", component: () =>
      import(/* webpackChunkName: "admin-route" */ "../views/AdminRoute.vue")
  },
  {
    path: "/legal-notes", name: "Legal", component: () =>
      import(/* webpackChunkName: "legal-notes" */ "../views/LegalNotes.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
