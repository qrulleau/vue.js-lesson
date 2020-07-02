<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverseText}}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ `j'adore les gros nibard.` | length-word}}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ anotherFunFonction }}</p>
        <p>{{ calculateLenght }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "time to reverse this text",
      firstName: "quentin",
      secondName: "rulleau"
    };
  },
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    anotherFunFonction() {
      return this.firstName
        .split("")
        .reverse()
        .join("");
    },
    calculateLenght() {
      return this.secondName + " " + this.secondName.length;
    }
  }
};
</script>

<style>
</style>
