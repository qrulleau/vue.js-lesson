<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name : {{ switchName() }}</p>
    <p>User Age : {{ userAge }}</p>
    <button @click="resetName">Reset the name</button>
    <button @click="resetFn()"></button>
  </div>
</template>

<script>
import { eventsBus } from "../main";

export default {
  //props: ["name"],
  props: {
    name: {
      type: String
    },
    resetFn: Function,
    //name: [String, Array]
    userAge: Number
  },
  methods: {
    switchName() {
      return this.name.split("").join("");
    },
    resetName() {
      this.name = "Max";
      this.$emit("nameWasReset", this.name);
    }
  },
  created() {
    eventsBus.$on("ageWasEdited", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
