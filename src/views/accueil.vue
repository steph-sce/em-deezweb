<template>
  <div id="app">
    <h1>Accueil</h1>
    <input type="text" v-model="message">
    <button @click="search(message)">Recherche</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data(){
    return {
      message: '',
      artist: response.data.data
    }
  },
  methods: {
    search: function(message) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${message}"&output=json`
        )
        .then(response => console.log(response.data.data));
      console.log("YOLO");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

#app {
  font-family: "Montserrat", sans-serif;
}
</style>
