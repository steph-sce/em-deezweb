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
    <b-button variant="light">play</b-button>
    <b-button variant="light" @click="getAlbum(result.album.id)">album</b-button>
    <b-button variant="light">artiste</b-button>
  </b-card>
</div>
</template>
<script>
import axios from "axios";

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
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}&output=json`
        )
        .then(response => {
          this.albumResults = response.data;
          console.log(response.data);

          if (JSON.parse(response.status) == "200") {
            this.$router.push("/album");
            console.log(response.data);
          }
        });
      console.log("YOLO", id);
    }
  }
};
</script>
<style>
</style>
