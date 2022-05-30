import Vue from 'vue'
import App from './App.vue'
import "./register-single-app";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
import router from "./router/router";
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
