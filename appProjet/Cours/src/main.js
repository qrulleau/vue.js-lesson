import Vue from 'vue'
import App from './App.vue'
import home from './home.vue'

Vue.component('app-server-status', home);

new Vue({
  el: '#app',
  render: h => h(App)
})
