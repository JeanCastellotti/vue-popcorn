<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import AppLoader from './AppLoader.vue'
import IconArrowUturnLeft from './IconArrowUturnLeft.vue'
import { store } from '@/store'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

const isLoading = ref(false)
const error = ref<string | null>(null)

watchEffect(async () => {
  isLoading.value = true

  try {
    const url = `${apiUrl}/?apikey=${apiKey}&i=${store.selectedMovieID}`
    const res = await fetch(url)
    const data = await res.json()
    store.selectedMovie = data
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    isLoading.value = false
  }
})

const hasPoster = computed(() => store.selectedMovie?.Poster === 'N/A')
</script>

<template>
  <div class="relative">
    <AppLoader v-if="isLoading" class="mx-auto my-5" />
    <template v-else-if="store.selectedMovie">
      <button
        @click="store.closeSelectedMovie()"
        class="absolute left-2 top-2 z-50 flex aspect-square h-12 cursor-pointer items-center justify-center rounded-full bg-white text-gray-800 shadow"
      >
        <IconArrowUturnLeft />
      </button>
      <header class="flex">
        <div v-if="hasPoster" class="flex w-1/3 shrink-0 bg-gray-600">
          <span class="m-auto text-4xl">?</span>
        </div>
        <img
          v-else
          :src="store.selectedMovie.Poster"
          :alt="store.selectedMovie.Poster"
          class="w-1/3 object-cover"
        />
        <div class="w-full space-y-2 bg-gray-700 px-12 py-10">
          <h2 class="mb-2 text-xl font-bold">
            {{ store.selectedMovie.Title }}
          </h2>
          <p>
            {{ store.selectedMovie.Released }} &bull;
            {{ store.selectedMovie.Runtime }}
          </p>
          <p>{{ store.selectedMovie.Genre }}</p>
          <p class="flex items-center gap-1">
            <span>⭐</span>
            <span>{{ store.selectedMovie.imdbRating }} IMDb rating</span>
          </p>
        </div>
      </header>
      <div class="space-y-5 p-16 text-lg">
        <!--
        <div
          class="mb-3 flex flex-col justify-center space-y-3 rounded bg-[#343a40] px-5 py-4 font-semibold"
        >
           <div class="flex flex-col items-center gap-1">
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
          />
          <button
            @click="addToWatchedMovies"
            class="cursor-pointer rounded bg-[#6741d9] px-3 py-1 font-bold text-[#dee2e6] transition hover:bg-[#7950f2]"
          >
            Add to list
          </button>
        </div>-->
        <p>
          <em>{{ store.selectedMovie.Plot }}</em>
        </p>
        <p>Starring {{ store.selectedMovie.Actors }}</p>
        <p>Directed by {{ store.selectedMovie.Director }}</p>
      </div>
    </template>
  </div>
</template>
