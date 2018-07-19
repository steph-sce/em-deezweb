<template>
  <div id="app">
    <h1>Accueil</h1>
    <input type="text" v-model="searchDeezer">
    <button @click="search(searchDeezer)">Recherche</button>    
    <Card v-for="result in results" :key="result.id" :result="result"></Card>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/card";
export default {
  name: "app",
  data: function() {
    return {
      searchDeezer: "",
      results: []
    };
  },
  methods: {
    search: function(searchDeezer) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${searchDeezer}"&output=json`
        )
        .then(response => {
          this.results = response.data.data;
        });
    }
  },
  components: {
    Card
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

#app {
  font-family: "Montserrat", sans-serif;
}
</style>
