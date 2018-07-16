<template>
  <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand :to="{name: 'accueil'}">Deez'Web</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item :to="{name: 'accueil'}">Recherche</b-nav-item>
      <b-nav-item href="#">Mes favoris</b-nav-item>
      <router-link :to="{name: 'album'}" class="title">Album</router-link>
    <router-link :to="{name:'artiste'}" class="title">Artiste</router-link>
    <router-link :to="{name:'track'}" class="title">Track</router-link>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</template>
<script>
export default {};
</script>

<style>
</style>
