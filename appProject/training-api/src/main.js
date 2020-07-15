import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Axios.defaults.baseURL= "https://app.ticketmaster.com/"
//console.log(process.env.VUE_APP_TM_TOKEN)


new Vue({
  render: h => h(App),
}).$mount('#app')
