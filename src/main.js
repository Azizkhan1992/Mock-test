import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './plugins'
import store from './vuex/store'
import Vuelidate from 'vuelidate'
import vuetify from '@/plugins/vuetify'
import VueMoment from 'vue-moment'

Vue.use(VueRouter),
Vue.use(Vuelidate),
Vue.use(VueMoment)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
