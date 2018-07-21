<template>
<div>
  <p>Titre chanson: {{titleResults.title}}</p>
  <img :src="titleResults.album.cover" alt="Photo album.">
  <p>Titre album: {{titleResults.album.title}}</p>
  <img :src="titleResults.artist.picture" alt="Photo artiste.">
  <p>Titre : {{titleResults.artist.name}}</p>
  <p>Durée : {{titleResults.duration}}</p>
  <p>Date de parution : {{titleResults.release_date}}</p>
  <b-button :href="titleResults.link" target="blank">Voir le titre sur Deezer</b-button>
  <a-player
    :music="{
      title: this.titleResults.title,
      artist: this.titleResults.artist.name,
      src: this.titleResults.preview,
      pic: this.titleResults.album.cover
    }"
  />
  </div>
</template>
<script>
import axios from "axios";
import VueAplayer from "vue-aplayer";

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
        console.log(response.data.album);
      });
  },
  components: { "a-player": VueAplayer }
};
</script>
<style>
</style>
