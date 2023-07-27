<script setup lang="ts">
import { inject } from 'vue'
import MovieListItem from './MovieListItem.vue'
import type { Movie } from '@/App.vue'

const movies = inject('movies') as Movie[]
</script>

<template>
  <ul class="divide-y divide-[#343a40]">
    <MovieListItem v-for="movie in movies" :key="movie.imdbID" v-bind="movie" />
  </ul>
</template>
