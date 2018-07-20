<template>
<div>
  <div>
    <input type="text" v-model="searchDeezer">
    <b-button variant="light" @click="search(searchDeezer)">Recherche</b-button>          
  </div>
  <div>
    <Card v-for="result in results" :key="result.id" :result="result"></Card> 
  </div>
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
      results: {},
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
          console.log(response.data.data);
        });
    }
  },
  components: {
    Card,
  }
};
</script>

<style>
</style>
