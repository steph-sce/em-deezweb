import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './../node_modules/bulma/css/bulma.css';

require('./assets/normalize.css')
require('./assets/reset.css')

Vue.use(router);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')