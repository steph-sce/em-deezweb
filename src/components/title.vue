<template>
<div>
  <p>Titre : {{titleResults.title}}</p>
  <img :src="titleResults.album.cover_big" alt="" srcset="">
  <p>Titre : {{titleResults.album.title}}</p>
  <img :src="titleResults.artist.picture_big" alt="" srcset="">
  <p>Titre : {{titleResults.artist.name}}</p>
  <p>Durée : {{titleResults.duration}}</p>
  <p>Date de parution : {{titleResults.release_date}}</p>
  <b-button :href="titleResults.link" target="blank">Voir le titre sur Deezer</b-button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      titleResults: {}
    };
  },
  beforeMount() {
    let id = this.$route.params.id;

    axios
      .get(
        //`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}&output=json`
        `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/track/${id}/&output=json`
      )
      .then(response => {
        this.titleResults = response.data;
        console.log(response.data);
      });
  }
};
</script>
<style>
</style>
