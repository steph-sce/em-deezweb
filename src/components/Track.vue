<template>
  <div>
    <div v-if="loader" class="loader">
      <img src="../assets/img/loader.gif" alt="Loader de chargement." />
    </div>
    <div v-else>
      <h3 class="track_song">Titre chanson: {{ trackResults.title }}</h3>
      <div class="track_pres">
        <div>
          <img :src="trackResults.album.cover" alt="Photo album." />
          <p class="track_album" @click="getAlbum(trackResults.album.id)">
            Album : {{ trackResults.album.title }}
          </p>
        </div>
        <div>
          <img :src="trackResults.artist.picture" alt="Photo artiste." />
          <p class="track_artist" @click="getArtist(trackResults.artist.id)">
            Artiste : {{ trackResults.artist.name }}
          </p>
        </div>
        <div>
          <p>Durée : {{ trackResults.duration }}</p>
          <p>Date de parution : {{ trackResults.release_date }}</p>
          <b-button :href="trackResults.link" target="blank"
            >Voir le titre sur Deezer</b-button
          >
        </div>
        <div>
          <a-player
            :music="{
              title: this.trackResults.title,
              artist: this.trackResults.artist.name,
              src: this.trackResults.preview,
              pic: this.trackResults.album.cover,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getTrack} from "../api/apiCalls";
import VueAplayer from "vue-aplayer";
import Album from "./Album";
import Artist from "./Artist";

export default {
  data: function () {
    return {
      trackResults: {},
      loader: true,
    };
  },
  methods: {
    async getTrack(){
      let trackId = this.$route.params.id;
      const data = await getTrack(trackId);
      this.trackResults = data;
      this.loader = false;
    },
    getAlbum(id) {
      this.$router.push({
        path: "/album",
        name: "album",
        component: Album,
        params: { id: `${id}` },
      });
    },
    getArtist(id) {
      this.$router.push({
        path: "/artist",
        name: "artist",
        component: Artist,
        params: { id: `${id}` },
      });
    },
  },
  mounted() {
    this.getTrack();
  },
  components: { "a-player": VueAplayer },
};
</script>
<style>
.track_song {
  text-align: center;
}

.track_album:hover,
.track_artist:hover {
  cursor: pointer;
  color: blue;
}

.track_pres {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 10px gray;
  margin: 20px;
  padding: 20px 0;
}
</style>
