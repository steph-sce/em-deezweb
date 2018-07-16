import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./assets/normalize.css')
require('./assets/reset.css')

Vue.use(BootstrapVue);
Vue.use(router);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')