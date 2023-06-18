<template>
  <div>
    <div v-if="loader" class="loader">
      <img src="../assets/img/loader.gif" alt="Loader de chargement." />
    </div>
    <div class="artist" v-else>
      <div>
        <img
          slot="aside"
          :src="artistResults.picture_big"
          alt="Photo artiste."
        />
      </div>
      <div>
        <h5 class="mt-0">{{ artistResults.name }}</h5>
        <p>Nombre d'albums : {{ artistResults.nb_album }}</p>
        <p>Nombre de fans : {{ artistResults.nb_fan }}</p>
        <b-button :href="artistResults.link" target="blank"
          >Voir l'artiste sur Deezer</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import {getArtist} from "../api/apiCalls";

export default {
  methods: {
    async getArtist(){
      let artistId = this.$route.params.id;
      const data = await getArtist(artistId);
      this.artistResults = data;
      this.loader = false;
    }
  },
  data: function () {
    return {
      artistResults: {},
      loader: true,
    };
  },
  mounted() {
    this.getArtist();
  },
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
