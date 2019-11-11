import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
const baseURL = 'http://localhost:8000'

axios.defaults.baseURL = baseURL
new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
