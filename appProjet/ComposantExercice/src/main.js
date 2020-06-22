import Vue from 'vue'
import App from './App.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Body from './components/body.vue'

Vue.component('main-header', Header);
Vue.component('main-footer', Footer);
Vue.component('main-body', Body);


new Vue({
  el: '#app',
  render: h => h(App)
})
