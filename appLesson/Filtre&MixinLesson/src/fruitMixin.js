export const fruitMixin = {
data() {
    return {
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruit() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  created(){
      console.log('created');
  }
}