var manipulation = new Vue ({
  el : '#instance',
  data : {
    title : 'The vue instance',
    showParagraph : false,
  },
  methods : {
    show (){
      this.showParagraph = true,
      this.updateTitle('the vue instace(update)')
    },
    updateTitle(title){
      this.title = title
    },
      
  },
  computed : {
    lowercaseTitle (){
      return this.title.toLowerCase()
    },
  },
  watch : {
    title(value){
      alert('title changed new value : ' + value)
    }
  }
});
 
var manipulation1 = new Vue ({
  el : "#communicationBetweenInstance",
  data : {
    title : 'The second instance appear',
  },
  methods : {
    onChange(){
      manipulation.title = this.title
    },
  }
});

Vue.component('hello', {
  template : `<h1>hello!</h1>`
});

var vm3 = new Vue ({
  template : '<h1>Hello World</h1>'
});


//maniere de connecter l'instance crée avec l'html
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el)