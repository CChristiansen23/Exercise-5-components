import Vue from 'vue'
import App from './App.vue'
import Footer from './Component/Footer.vue'
import Header from './Component/Header.vue'
import Status from './Component/Status.vue'

Vue.component('my-header', Header)
Vue.component('my-footer', Footer)
Vue.component('my-status', Status)




new Vue({
  el: '#app',
  render: h => h(App)
})
