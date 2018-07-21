<template>
<div>
  <div v-if="loader">
    <img src="../assets/img/loader.gif" alt="Loader de chargement.">
  </div>
  <div v-else>
    <div>
      <b-img center :src= "albumResults.cover_big" alt="center image" />
    </div>
    <p>Titre de l'album : {{albumResults.title}}</p>
    <p>Artiste : {{albumResults.artist.name}}</p>
    <p>Rang de l'album : {{albumResults.artist.name}}</p>
    <p>
      {{albumResults.nb_tracks}} titres -
      {{albumResults.duration}} -
      {{albumResults.release_date}} - 
      {{albumResults.fans}} fans 
      </p>
    <ul v-for="trackResult in trackResults" :key="trackResult.id">
      <li @click="getTrack(trackResult.id)">{{trackResult.title}}</li>
    </ul>
    <p>Album : </p>
  </div>  
</div>
</template>
<script>
import axios from "axios";
import Title from "./title";

export default {
  data: function() {
    return {
      albumResults: {},
      trackResults: {},
      loader: true
    };
  },
  created() {
    let id = this.$route.params.id;
    const that = this //la portée de this n'est pas correcte axios.spread

    axios
      .all([
        axios.get(
          `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/album/${id}&output=json`
        ),
        axios.get(
          `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/album/${id}/tracks&output=json`
        )
      ])
      .then(
        axios.spread(function(album, track) {
          that.albumResults = album.data;
          that.trackResults = track.data.data;
          that.loader = false;
        })
      )
      //.then(response => this.setState({ vehicles: response.data }))
      .catch(error => console.log(error));
  },
  methods: {
    getTrack(id) {
      this.$router.push({
        path: "/title",
        name: "title",
        component: Title,
        params: { id: `${id}` }
      });
    }
  }
};
</script>
<style>
</style>
