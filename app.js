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
      console.log('computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  },
  methods: {
    result() {
      console.log('methods');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    },
  },
});
