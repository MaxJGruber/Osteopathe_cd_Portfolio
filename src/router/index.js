import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";
import ContactPage from "../views/contactPage.vue"
import PhotoGallery from "../views/PhotoGallery.vue"

Vue.use(VueRouter);

const routes = [{path:"/", name: "Home", component: Home}, {path:"/contact-page",name: "Contact-page", component: ContactPage}, {path:"/photo-gallery", name: "Photo-Gallery", component: PhotoGallery}];

const router = new VueRouter({
    mode: "history",
    routes
  });
  
export default router;
