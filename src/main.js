import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// import SuiVue from 'semantic-ui-vue';
// import 'semantic-ui-css/semantic.min.css';
import "./tailwind.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeadSideMask, faWheelchair, faMoneyBillWave, faComment, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeadSideMask, faWheelchair, faMoneyBillWave, faComment,faExclamationTriangle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')