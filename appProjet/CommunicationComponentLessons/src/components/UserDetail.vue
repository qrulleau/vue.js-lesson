<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name : {{ switchName() }}</p>
    <button @click="resetName">Reset the name</button>
    <button @click="resetFn()"></button>
  </div>
</template>

<script>
export default {
  //props: ["name"],
  props: {
    name: {
      type: String
    },
    resetFn: Function
    //name: [String, Array]
  },
  methods: {
    switchName() {
      return this.name.split("").join("");
    },
    resetName() {
      this.name = "Max";
      this.$emit("nameWasReset", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
