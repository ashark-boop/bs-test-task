import VueRouter from 'vue-router'


import HomePage from '../pages/HomePage.vue'
import CasePage from '../pages/CasePage.vue'
import ConverterPage from '../pages/ConverterPage.vue'

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  routes : [
        {
          path: '/',
          component: HomePage,
        },
        {
          path: '/case',
          component: CasePage,
        },
        {
          path: '/converter',
          component: ConverterPage,
        }
      ],
});