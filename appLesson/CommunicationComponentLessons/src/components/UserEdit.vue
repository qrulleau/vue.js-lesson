<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <P>User age : {{ userAge }}</P>
    <button @click="editAge">Edit the age</button>
  </div>
</template>

<script>
import { eventsBus } from "../main";

export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      //this.$emit("ageWasEdited", this.userAge);
      //eventsBus.$emit("ageWasEdited", this.userAge);
      eventsBus.changeAge(this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
