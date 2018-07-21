<template>
<div>
  <b-card :title= "result.title"
          :img-src= "result.album.cover_xl"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">{{ result.artist.name }}</p>
    <p class="card-text">{{ result.album.title }}</p>
    <p class="card-text">{{ result.duration }}</p>
    <p class="card-text">{{ result.album.id }}</p>
    <b-button variant="light" >play</b-button>
    <b-button variant="light" @click="getAlbum(result.album.id)">album</b-button>
    <b-button variant="light" @click="getArtist(result.artist.id)">artiste</b-button>
  </b-card>
</div>
</template>
<script>
import Album from "./album";
import Artist from "./artist";

export default {
  data: function() {
    return {
      albumResults: {}
    };
  },
  props: {
    result: Object
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
  }
};
</script>
<style>
</style>
