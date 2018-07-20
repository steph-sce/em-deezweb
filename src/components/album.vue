<template>
<div>
  <h1>ALBUM</h1>
  <div v-if="loader">
    <img src="../assets/img/loader.gif" alt="Loader de chargement.">
  </div>
  <div v-else>
    <div>
      <b-img center :img-src= "albumResults.picture" alt="center image" />
    </div>
    <p>Artiste : {{albumResults.name}}</p>
    <ul v-for="albumResult in albumResults" :key="albumResult.id">
      <li>{{albumResult}}</li>
    </ul>
    <p>Album : </p>
  </div>  
</div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      albumResults: {},
      loader: true
    };
  },
  beforeMount() {
    let id = this.$route.params.id;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}&output=json`
      )
      .then(response => {
        this.albumResults = response.data.artist;
        this.loader = false;
        console.log(response.data);
      });
  }
};
</script>
<style>
</style>
