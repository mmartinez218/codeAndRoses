import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'



Vue.config.productionTip = false
Vue.prototype.store ={
    globalTest:"Yes This is Global!"
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
