<template>
  <div>
    <div class="search">
      <b-form-input
        type="search"
        v-model="searchDeezer"
        placeholder="Recherche sur Deezer"
      ></b-form-input>
      <select v-model="order">
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
import Card from "../components/Card";
import {getSearch} from "../api/apiCalls";
export default {
  name: "app",
  data: function () {
    return {
      modalShow: false,
      searchDeezer: "",
      order: "ARTIST_ASC",
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
    search: async function (search) {
      this.results = {};
      this.loader = true;
      //TODO: afficher message d'erreur si pas de résultat.
      const {data} = await getSearch(search, this.order);
      this.results = data;
      this.loader = false;
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
