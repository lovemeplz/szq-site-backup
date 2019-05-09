// dependencies
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import './icons'
import i18n from './lang' // Internationalization

import router from './router'
import store from './store'
import './permission' // permission control
import './mock' // simulation data

Vue.config.productionTip = false
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
