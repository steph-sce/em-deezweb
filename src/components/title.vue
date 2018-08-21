<template>
<div>
  <div v-if="loader" class="loader">
    <img src="../assets/img/loader.gif" alt="Loader de chargement.">
  </div>
  <div v-else>
    <h3 class="title_song">Titre chanson: {{titleResults.title}}</h3>
    <div class="title_pres">
      <div>
        <img :src="titleResults.album.cover" alt="Photo album.">
        <p class="title_album" @click="getAlbum(titleResults.album.id)">Album : {{titleResults.album.title}}</p>
      </div>
      <div>
        <img :src="titleResults.artist.picture" alt="Photo artiste.">
        <p class="title_artist" @click="getArtist(titleResults.artist.id)">Artiste : {{titleResults.artist.name}}</p>
      </div>
      <div>
        <p>Durée : {{titleResults.duration}}</p>
        <p>Date de parution : {{titleResults.release_date}}</p>
        <b-button :href="titleResults.link" target="blank">Voir le titre sur Deezer</b-button>
      </div>
      <div>
        <a-player
          :music="{
            title: this.titleResults.title,
            artist: this.titleResults.artist.name,
            src: this.titleResults.preview,
            pic: this.titleResults.album.cover
          }"
        />
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import VueAplayer from "vue-aplayer";
import Album from "./album";
import Artist from "./artist";

export default {
  data: function() {
    return {
      titleResults: {},
      loader: true
    };
  },
  beforeMount() {
    let id = this.$route.params.id;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}&output=json`
      )
      .then(response => {
        if (response.status === 200) {
          this.titleResults = response.data;
          this.loader = false;
        } else {
          axios
            .get(
              `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/track/${id}/&output=json`
            )
            .then(response => {
              this.titleResults = response.data;
              this.loader = false;
            });
        }
      });
  },
  methods: {
    getAlbum(id) {
      this.$router.push({
        path: "/album",
        name: "album",
        component: Album,
        params: { id: `${id}` }
      });
    },
    getArtist(id) {
      this.$router.push({
        path: "/artist",
        name: "artist",
        component: Artist,
        params: { id: `${id}` }
      });
    }
  },
  components: { "a-player": VueAplayer }
};
</script>
<style>
.title_song {
  text-align: center;
}

.title_album:hover,
.title_artist:hover {
  cursor: pointer;
  color: blue;
}

.title_pres {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 10px gray;
  margin: 20px;
  padding: 20px 0;
}
</style>
