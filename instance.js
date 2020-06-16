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