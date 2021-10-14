import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import router from './router/index'

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
