<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <!-- <p slot="content">A wonderful Quote</p> -->
          <p>A wonderful Quote</p>
        </app-quote>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";

export default {
  data() {
    return {
      quoteTitle: "The Quote de oufffffffff",
      selectedComponent: "app-quote"
    };
  },
  components: {
    appQuote: Quote,
    appNew: New,
    appAuthor: Author
  }
};
</script>

<style>
</style>
