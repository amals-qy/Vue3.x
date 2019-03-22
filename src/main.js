import Vue from "vue";
import A from "./Tem/A.vue";
import router from "./router/index";
import store from "./store/index";
import './assets/css/main.scss'
import utils from './utils/utils'
import Element from 'element-ui'
import './assets/css/element/theme.scss'

Vue.config.productionTip = false;
Vue.use(utils)
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(A)
}).$mount("#Am_backstage");
