new Vue({
  el: "#app",
  data: {
    title: "hello world!",
    link: "http://google.fr",
    hello: "salut ma couille",
    finishedLink: '<a href="https://google.com">Google</>'
  },
  methods: {
    changeTitle(e) {
      this.title = e.target.value;
    },
    sayHello() {
      this.hello = "Y a une couille dans le potage";
      return this.hello;
    },
  }
});

new Vue({
  el: "#exerciceApp",
  data: {
    name: "Quentin Rulleau",
    age: 15,
    aleaNumber: Math.random(),
    image: 'https://qrulleau.github.io/img/test.jpg',
  },
  methods: {
    newAge() {
      return this.age * 3
    },
    randomNumber() {
      return Math.random();
    }
  }
});

new Vue({
  el: '#events',
  data: {
    counter: 0,
    X: 0,
    Y: 0
  },
  methods: {
    increase(step, event) {
      this.counter += step;
    },
    updateCoordinate(event) {
      this.X = event.clientX;
      this.Y = event.clientY;
    },
    noneMouseOver(event) {
      event.stopPropagation();
    },
    alertMe() {
      alert("You are writing")
    },
  },
});

new Vue({
  el: "#exerciceEvents",
  data: {
    value: "",
  },
  methods: {
    showAlert() {
      alert("you clicked")
    },
    valueFetch(event) {
      this.value = event.target.value;
    }
  },
});

new Vue({
  el: "#dataBinding",
  data: {
    name: "Quentin",
    counter: 0,
    secondCounter: 0,
  },
  computed: {
    output() {
      //console.log('computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  },
  watch: {
    counter(value) {
      //console.log(value)
      let vm = this;
      //console.log(vm)
      setTimeout(function () {
        vm.counter = 0;
      }, 2000)
    },
  },
  methods: {
    result() {
      console.log('methods');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    },
  },
});

new Vue({
  el: '#dataBindingExercice',
  data: {
    value: 0
  },
  computed: {
    result() {
      return this.value == 37 ? 'done' : 'not there yet';
    }
  },
  watch: {
    result(e) {
      let vm = this;
      //console.log(this)
      setTimeout(function () {
        vm.value = 0;
      }, 3000);
    }
  },
});

new Vue({
  el: '#dynamicCSS',
  data: {
    attachRed: false,
    attachBlue: false,
    attachGreen: false,
    color: 'green',
    width: 100,

  },
  computed: {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyles() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
});

new Vue({
  el: '#dynamicCssExercice',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },

    fontSize: 20,
    fontWeight: 'bold',
    test: '',
    userClass: '',
    isVisible: true,
    progressBar : {
      width : '0px',
      backgroundColor : 'Red',

    }
  },
  methods: {
    startEffect() {
      var vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.highlight
      }, 1000)
    },
    startProgress(){
      let vm = this;
      let width = 0;
      setInterval(function(){
        width = width +10;
        vm.progressBar.width = width + 'px';
      }, 500)
    }
  },
  computed: {
    amazingStyle() {
      return {
        fontSize: this.fontSize + 'px',
        fontWeight: this.fontWeight,
      }
    }
  }
});

new Vue ({
  el : '#conditionnal',
  data: {
    show: true
  }
});

new Vue ({
  el : '#renderingList',
  data: {
    ingredient : ['meat','fruit','cookies'],
    persons : [
      {name: 'max', age:24, color : 'red'},
      {name: 'anna', age:'unknow', color : 'blue'}
    ]
  }
});