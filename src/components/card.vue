<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :img-src= "result.album.cover_xl" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :img-src= "result.album.cover_xl" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ result.artist.name }}</p>
        <p class="subtitle is-6">{{ result.title }}</p>
      </div>
    </div>

    <div class="content">
      {{ result.album.title }}. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">{{ result.duration }}</time>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    result: Object
  }
};
</script>
<style>
</style>
