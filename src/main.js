import Vue from 'vue'
import App from './App'
import vuetify from '@/plugin/vuetify'
import router from './router'
import VeeValidate from 'vee-validate'
import store from './store'

Vue.config.productionTip = false
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  store,
  vuetify,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
