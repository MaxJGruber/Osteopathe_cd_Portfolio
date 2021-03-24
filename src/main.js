import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "./style/tailwind.css"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueLazyLoad from 'vue-lazyload'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

// Importing fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeadSideMask, faWheelchair, faMoneyBillWave, faComment, faHandSparkles, faSchool, faWalking, faRunning, faFemale, faBlind, faChild, faBaby, faUserMd, faExclamationTriangle, faDoorOpen, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Adding fontawesome icons after importing them 
library.add(faHeadSideMask, faWheelchair, faMoneyBillWave, faComment, faHandSparkles, faSchool, faWalking, faRunning, faFemale, faBlind, faChild, faBaby, faUserMd, faExclamationTriangle, faDoorOpen, faDoorClosed)
library.add(faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue using Vuetify
Vue.use(Vuetify)
Vue.use(VueLazyLoad)

Vue.config.productionTip = false
new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App),
}).$mount('#app')