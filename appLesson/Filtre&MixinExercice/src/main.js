import Vue from 'vue'
import App from './App.vue'

Vue.filter('length-word', function(value) {
    return value + ' ' + value.length + ' ' + 'words on this sentence';
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
