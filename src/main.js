import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "./tailwind.css"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeadSideMask, faWheelchair, faMoneyBillWave, faComment, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeadSideMask, faWheelchair, faMoneyBillWave, faComment, faExclamationTriangle)
library.add(faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify)

Vue.config.productionTip = false
new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App),
}).$mount('#app')