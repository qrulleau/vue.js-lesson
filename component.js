Vue.component('raconte-pas-ta-vie', {
   data () {
      return {
      status : 'critical',
     }
   },
   template : '<p>Server Status : {{ status }}</p>'
});

new Vue ({
 el : '#app',
 
});

new Vue ({
   el : '#app2',
});