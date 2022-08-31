import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/theme.scss'

Vue.use(BootstrapVue)
Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app')
