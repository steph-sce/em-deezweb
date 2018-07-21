<template>
<div>
  <div v-if="loader">
    <img src="../assets/img/loader.gif" alt="Loader de chargement.">
  </div>
  <div v-else>
    <b-card>
      <b-media>
        <img slot="aside" :src= "artistResults.picture_big"  alt="Photo artiste." />
        <h5 class="mt-0">{{artistResults.name}}</h5>
        <p>Nombre de d'albums : {{artistResults.nb_album}}</p>
        <p>Nombre de fans : {{artistResults.nb_fan}}</p>
        <div>
          <b-button :href="artistResults.link" target="blank">Voir l'artiste sur Deezer</b-button>
        </div>
      </b-media>
    </b-card>
  </div>
</div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      artistResults: {},
      loader: true
    };
  },
  beforeMount() {
    let id = this.$route.params.id;
    axios
      .get(
        //`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}&output=json`
        `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/artist/${id}/&output=json`
      )
      .then(response => {
        this.artistResults = response.data;
        this.loader = false;
        console.log(response.data);
      });
  }
};
</script>
<style>
</style>
