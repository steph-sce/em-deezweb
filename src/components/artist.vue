<template>
<div>
  <div v-if="loader" class="loader">
    <img src="../assets/img/loader.gif" alt="Loader de chargement.">
  </div>
  <div class="artist" v-else>
    <div>
      <img slot="aside" :src= "artistResults.picture_big"  alt="Photo artiste." />
    </div>
    <div>
      <h5 class="mt-0">{{artistResults.name}}</h5>
      <p>Nombre d'albums : {{artistResults.nb_album}}</p>
      <p>Nombre de fans : {{artistResults.nb_fan}}</p>
      <b-button :href="artistResults.link" target="blank">Voir l'artiste sur Deezer</b-button>
    </div>
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
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}&output=json`
      )
      .then(response => {
        if (response.status === 200) {
          this.artistResults = response.data;
          this.loader = false;
        } else {
          axios
            .get(
              `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/artist/${id}/&output=json`
            )
            .then(response => {
              this.artistResults = response.data;
              this.loader = false;
            });
        }
      });
  }
};
</script>
<style>
.artist {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 10px gray;
  margin: 20px;
  padding: 20px 0;
}
</style>
