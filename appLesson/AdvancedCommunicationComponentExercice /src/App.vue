<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectTemplate = 'appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectTemplate = 'appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectTemplate = 'appRed'">Load Red Template</button>
        <hr />
        <component :is="selectTemplate"></component>
        <!-- <app-blue>
          <p>This is the Content</p>
        </app-blue>
        <app-green>
          <p>This is the Content</p>
        </app-green>
        <app-red>
          <p>This is the Content</p>
        </app-red>-->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      selectTemplate: Blue
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
