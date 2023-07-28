<script setup lang="ts">
import MovieListItem from './MovieListItem.vue'
import { store } from '@/store'
</script>

<template>
  <ul class="divide-y divide-gray-700">
    <MovieListItem
      v-for="movie in store.movies"
      :key="movie.imdbID"
      v-bind="movie"
    />
  </ul>
</template>
