<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <list-group></list-group>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
import groupList from "./groupList.vue";

export default {
  components: {
    "list-group": groupList
  }
};
</script>