<template>
  <div class="t-center">
    <p>Merci d'insérer le nom d'une ville en anglais pour y trouver les evenements qui vont s'y produire</p>
    <input type="text" v-model="userInput" />

    <button @click="afficherDonne">afficher des donnés</button>
    <ul>
      <li v-for="(tableaux, index) in tableau " :key="index">
        {{ tableaux.name }}
        <br />
        {{ tableaux.url }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableau: [],
      userInput: ""
    };
  },
  methods: {
    async afficherDonne() {
      const response = await axios.get(
        `discovery/v2/events?city=${this.userInput}&apikey=bNVBNt1GRhkQhm1Jji0uN3Pgr5IWJNO8`
      );
      //console.log(response);
      this.tableau = response.data._embedded.events;
      //console.log(reponse.data._embedded.events);
      //console.log(this.tableau);
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.t-center {
  text-align: center;
}

li {
  margin-bottom: 35px;
}
ul {
  list-style-type: none;
}
</style>
