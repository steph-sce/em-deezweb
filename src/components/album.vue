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
import axios from "axios";
import Title from "./title";
import Artist from "./artist";

export default {
  data: function () {
    return {
      albumResults: {},
      trackResults: {},
      loader: true,
    };
  },
  created() {
    let id = this.$route.params.id;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}&output=json`
      )
      .then((response) => {
        if (response.status === 200) {
          this.albumResults = response.data;
          this.trackResults = response.data.tracks.data;
          this.loader = false;
        } else {
          axios
            .get(
              `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/album/${id}&output=json`
            )
            .then((response) => {
              this.albumResults = response.data;
              this.trackResults = response.data.tracks.data;
              this.loader = false;
            });
        }
      });
  },
  methods: {
    getTrack(id) {
      this.$router.push({
        path: "/title",
        name: "title",
        component: Title,
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
