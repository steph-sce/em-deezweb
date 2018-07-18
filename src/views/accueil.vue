<template>
  <div id="app">
    <h1>Accueil</h1>
    <input type="text" v-model="searchDeezer">
    <button @click="search(searchDeezer)">Recherche</button>
     <b-card
    :img-src= "result.album.cover_xl"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    v-for="result in results"
    >
    <p class="card-text">{{ result.title }}</p>
    <p class="card-text">{{ result.artist.name }} / {{ result.album.title }}</p>
    <p class="card-text">{{ result.duration }}</p>
    <b-button href="#" variant="primary">Ecouter un extrait</b-button>
    <b-button href="#" variant="primary">Consulter l'album</b-button>
    <b-button href="#" variant="primary">Voir la fiche de l'artiste</b-button>
  </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/card'
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
