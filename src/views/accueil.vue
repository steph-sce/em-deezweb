<template>
  <div>
    <div class="search">
      <b-form-input
        type="search"
        v-model="searchDeezer"
        placeholder="Recherche sur Deezer"
      ></b-form-input>
      <select v-model="selected">
        <option
          v-for="option in options"
          v-bind:value="option.value"
          :key="option.id"
        >
          {{ option.text }}
        </option>
      </select>
      <b-button variant="outline-primary" @click="search(searchDeezer)"
        >Recherche</b-button
      >
    </div>
    <div class="result_card container">
      <Card v-for="result in results" :key="result.id" :result="result"></Card>
    </div>
    <!-- <div>
    <b-modal v-model="modalShow">
      Erreur
    </b-modal>
  </div> -->
    <div v-if="loader" class="loader">
      <img src="../assets/img/loader.gif" alt="Loader de chargement." />
    </div>

    <!-- Modal Erreur de recherche-->
    <div>
      <b-modal v-model="modalShow" ok-only> Aucun élément trouvé. </b-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/card";
export default {
  name: "app",
  data: function () {
    return {
      modalShow: false,
      searchDeezer: "",
      selected: "ARTIST_ASC",
      loader: false,
      options: [
        { text: "Artiste", value: "ARTIST_ASC" },
        { text: "Album", value: "ALBUM_ASC" },
        { text: "Musique", value: "TRACK_ASC" },
        { text: "Les plus populaires", value: "RATING_ASC" },
        { text: "Les mieux notés", value: "RANKING" },
      ],
      results: {},
    };
  },
  methods: {
    search: async function (searchDeezer) {
      this.loader = true;
      //TODO: afficher message d'erreur si pas de résultat.
      await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchDeezer}&order=${this.selected}&output=json`
        )
        .then((response) => {
          if (response.status === 200) {
            if (response.data.total === 0) {
              this.modalShow = true;
            }
            this.results = response.data.data;
            this.loader = false;
          } else {
            axios
              .get(
                `https://cryptic-headland-94862.herokuapp.com/https://api.deezer.com/search?q=${searchDeezer}&order=${this.selected}&output=json`
              )
              .then((response) => {
                if (response.data.total === 0) {
                  this.modalShow = true;
                }
                this.results = response.data.data;
                this.loader = false;
              })
              .catch((error) => {
                error;
              });
          }
        })
        .catch((error) => {
          error;
        });
    },
  },
  components: {
    Card,
  },
};
</script>

<style>
.search {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.search .form-control {
  width: 30%;
}
.result_card {
  display: flex;
  flex-wrap: wrap;
}

.loader {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.loader img {
  width: 500px;
  height: 500px;
}
</style>
