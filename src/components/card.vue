<template>
  <b-card
    :title="result.title"
    :img-src="result.album.cover_xl"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; margin: 20px"
    class="mb-2"
  >
    <p class="card-text">{{ result.artist.name }}</p>
    <p class="card-text">{{ result.album.title }}</p>
    <div class="card_btn">
      <b-button variant="light" @click="getTrack(result.id)"
        ><font-awesome-icon icon="play"
      /></b-button>
      <b-button variant="light" @click="getAlbum(result.album.id)"
        >album</b-button
      >
      <b-button variant="light" @click="getArtist(result.artist.id)"
        >artiste</b-button
      >
    </div>
  </b-card>
</template>
<script>
import Album from "./album";
import Artist from "./artist";
import Title from "./title";

export default {
  data: function () {
    return {
      albumResults: {},
    };
  },
  props: {
    result: Object,
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
};
</script>
<style>
.card_btn {
  display: flex;
  justify-content: space-around;
}
</style>
