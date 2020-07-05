import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://axios-training-4c3b4.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'faasa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const resInterceptor = axios.intercerptors.request.use(config => {
  console.log(config)
  return config
})
const reqInterceptor = axios.intercerptors.response.use(res => {
  console.log(res)
  return res
})

axios.intercerptors.request.eject(reqInterceptor)
axios.intercerptors.request.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
