<template>
  <div>
    <div v-if="loader" class="loader">
      <img src="../assets/img/loader.gif" alt="Loader de chargement." />
    </div>
    <div v-else class="album">
      <div>
        <img :src="albumResults.cover_big" alt="Photo de l'album" />
      </div>
      <div>
        <h5>Titre de l'album : {{ albumResults.title }}</h5>
        <p class="artist_album" @click="getArtist(albumResults.artist.id)">
          Artiste : {{ albumResults.artist.name }}
        </p>
        <p>
          {{ albumResults.nb_tracks }} titres - {{ albumResults.fans }} fans
        </p>
        <ul v-for="trackResult in trackResults" :key="trackResult.id">
          <li @click="getTrack(trackResult.id)">
            <font-awesome-icon icon="music" /> {{ trackResult.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {getAlbum} from "../api/apiCalls";
import Track from "./Track";
import Artist from "./Artist";

export default {
  methods: {
    async getAlbum(){
      const albumId = this.$route.params.id;
      const data = await getAlbum(albumId);
      this.albumResults = data;
      this.trackResults = data.tracks.data;
      this.loader = false;
    },
    getTrack(id) {
      this.$router.push({
        path: "/track",
        name: "track",
        component: Track,
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
  data: function () {
    return {
      albumResults: {},
      trackResults: {},
      loader: true,
    };
  },
  mounted() {
    this.getAlbum();
  },
};
</script>
<style>
.album {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 10px gray;
  margin: 20px;
  padding: 20px 0;
}

.artist_album {
  cursor: pointer;
}

ul li {
  cursor: pointer;
  list-style: none;
}

.artist_album:hover,
ul li:hover {
  color: blue;
}
</style>
