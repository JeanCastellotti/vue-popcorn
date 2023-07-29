<script setup lang="ts">
import { store } from '@/store'
import { computed } from 'vue'

const selectedMovie = computed(() => store.selectedMovie!)

const isInWatchedMovieList = computed(() =>
  store.watchedMovies.find((movie) => movie.imdbID === store.selectedMovieID)
)
</script>

<template>
  <div class="space-y-5 p-10 text-lg">
    <div class="mb-3 flex flex-col justify-center space-y-3">
      <!-- <div class="flex flex-col items-center gap-1">
            <span>You already rated this movie</span>
            <div>
              <span>⭐</span>
            </div>
          </div>
          <Rating
            maxRating="{10}"
            size="{32}"
            class="justify-between"
            onSetRating="{setUserRating}" 
          /> -->
      <button
        v-if="!isInWatchedMovieList"
        @click="store.addWatchedMovie(store.selectedMovie!)"
        class="cursor-pointer rounded bg-indigo-600 px-3 py-2 font-bold text-indigo-100 transition hover:bg-indigo-500"
      >
        Add to list
      </button>
    </div>
    <p>
      <em>{{ selectedMovie.Plot }}</em>
    </p>
    <p>Starring {{ selectedMovie.Actors }}</p>
    <p>Directed by {{ selectedMovie.Director }}</p>
  </div>
</template>
