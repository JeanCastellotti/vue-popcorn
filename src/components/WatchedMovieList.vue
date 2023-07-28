<script setup lang="ts">
import { store } from '@/store'
import WatchedMovieListItem from './WatchedMovieListItem.vue'
</script>

<template>
  <div class="relative flex-1">
    <ul v-if="store.watchedMovies.length" class="divide-y divide-gray-600 py-3">
      <WatchedMovieListItem
        v-for="movie in store.watchedMovies"
        :key="movie.imdbID"
        v-bind="movie"
      />
    </ul>
    <div v-else class="absolute inset-0 flex">
      <span class="m-auto">No movies yet</span>
    </div>
  </div>
</template>
