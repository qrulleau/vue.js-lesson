<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | to-lowercase}}</p>
        <hr />
        <button@click="fruits.push('berries')">Add new Item</button>
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruit">{{ fruit }}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./list.vue";
import { FruitMixin, fruitMixin } from "./fruitMixin.js";
export default {
  mixin: [fruitMixin],
  data() {
    return {
      text: "hello there!",
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruit() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  components: {
    appList: List
  }
};
</script>

<style>
</style>
