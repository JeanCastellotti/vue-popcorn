<script setup lang="ts">
import { computed } from 'vue'
import { store } from '@/store'

function average(arr: number[]) {
  return arr.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0)
}

const avgImdbRating = computed(() =>
  average(store.watchedMovies.map((movie) => Number(movie.imdbRating)))
)

const avgUserRating = computed(() =>
  average(store.watchedMovies.map((movie) => Number(movie.userRating)))
)

const avgRuntime = computed(() =>
  average(store.watchedMovies.map((movie) => Number(movie.Runtime)))
)
</script>

<template>
  <div
    class="rounded bg-gray-600 px-5 py-4 shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.2)]"
  >
    <h2 class="mb-2 text-xl font-semibold uppercase">Movies you watched</h2>
    <div class="flex items-center gap-10 text-lg">
      <p class="flex items-center gap-2">
        <span>#️⃣</span>
        <span>{{ store.watchedMovies.length }} movies</span>
      </p>
      <p class="flex items-center gap-2">
        <span>⭐️</span>
        <span>{{ avgImdbRating ? avgImdbRating.toFixed(2) : '-' }}</span>
      </p>
      <p class="flex items-center gap-2">
        <span>🌟</span>
        <span>{{ avgUserRating ? avgUserRating.toFixed(2) : '-' }}</span>
      </p>
      <p class="flex items-center gap-2">
        <span>⏳</span>
        <span>{{ avgRuntime ? `${avgRuntime.toFixed(2)} min` : '-' }}</span>
      </p>
    </div>
  </div>
</template>
