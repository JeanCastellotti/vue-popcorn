<script setup lang="ts">
import { computed } from 'vue'
import { store } from '@/store'

const hasPoster = computed(() => store.selectedMovie!.Poster === 'N/A')
const selectedMovie = computed(() => store.selectedMovie!)
</script>

<template>
  <header class="flex">
    <div v-if="hasPoster" class="flex w-1/3 shrink-0 bg-gray-600">
      <span class="m-auto text-4xl">?</span>
    </div>
    <img
      v-else
      :src="selectedMovie.Poster"
      :alt="selectedMovie.Poster"
      class="w-1/3 object-cover"
    />
    <div class="w-full space-y-2 bg-gray-700 px-12 py-10">
      <h2 class="mb-2 text-xl font-bold">
        {{ selectedMovie.Title }}
      </h2>
      <p>
        {{ selectedMovie.Released }} &bull;
        {{ selectedMovie.Runtime }}
      </p>
      <p>{{ selectedMovie.Genre }}</p>
      <p class="flex items-center gap-1">
        <span>⭐</span>
        <span>{{ selectedMovie.imdbRating }} IMDb rating</span>
      </p>
    </div>
  </header>
</template>
