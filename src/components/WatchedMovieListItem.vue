<script setup lang="ts">
import IconXMark from './icons/IconXMark.vue'
import { store, type Movie } from '@/store'

defineProps<Movie>()
</script>

<template>
  <li
    class="relative flex items-center gap-x-5 px-4 py-2 transition-all hover:bg-gray-700"
  >
    <div
      v-if="Poster === 'N/A'"
      class="row-[1/-1] flex h-20 w-20 shrink-0 rounded bg-gray-600"
    >
      <span class="m-auto text-4xl">?</span>
    </div>

    <img
      v-else
      :src="Poster"
      :alt="`${Title} poster`"
      class="row-[1/-1] w-20 object-cover"
    />
    <div class="space-y-3">
      <h3 class="text-lg font-semibold">{{ Title }}</h3>
      <div class="flex items-center gap-8">
        <p class="flex items-center gap-2">
          <span>⭐️</span>
          <span>{{ imdbRating ? imdbRating : '-' }}</span>
        </p>
        <p class="flex items-center gap-2">
          <span>🌟</span>
          <span>{{ userRating ? userRating : '-' }}</span>
        </p>
        <p class="flex items-center gap-2">
          <span>⏳</span>
          <span>{{ Runtime ? `${Runtime}` : '-' }}</span>
        </p>
      </div>
    </div>
    <button
      @click="store.deleteWatchedMovie(imdbID)"
      class="ml-auto flex aspect-square h-8 cursor-pointer items-center justify-center rounded-full bg-red-500 font-bold text-red-100 transition hover:scale-110"
    >
      <IconXMark />
    </button>
  </li>
</template>
