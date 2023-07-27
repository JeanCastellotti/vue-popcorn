<script setup lang="ts">
import { inject, ref, watchEffect, type Ref } from 'vue'
import AppLoader from './AppLoader.vue'
import IconArrowUturnLeft from './IconArrowUturnLeft.vue'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

interface SelectedMovie {
  Title: string
  Year: string
  Poster: string
  Runtime: string
  imdbRating: string
  Plot: string
  Released: string
  Actors: string
  Director: string
  Genre: string
}

const isLoading = ref(false)
const selectedMovie = ref<SelectedMovie | null>(null)

const selectedMovieID = inject('selectedMovieID') as Ref<string>

watchEffect(async () => {
  isLoading.value = true
  const res = await fetch(
    `${apiUrl}/?apikey=${apiKey}&i=${selectedMovieID.value}`
  )
  const data = await res.json()
  selectedMovie.value = data
  isLoading.value = false
})

const close = inject('closeSelectedMovie') as () => void
</script>

<template>
  <div class="relative">
    <AppLoader v-if="isLoading" class="mx-auto my-5" />
    <template v-else-if="selectedMovie">
      <button
        @click="close"
        class="absolute left-2 top-2 z-50 flex aspect-square h-12 cursor-pointer items-center justify-center rounded-full bg-white text-[#2b3035] shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
      >
        <IconArrowUturnLeft />
      </button>
      <header class="flex">
        <div
          v-if="selectedMovie?.Poster === 'N/A'"
          class="flex w-1/3 shrink-0 bg-slate-600"
        >
          <span class="m-auto text-4xl">?</span>
        </div>
        <img
          v-else
          :src="selectedMovie?.Poster"
          :alt="selectedMovie?.Poster"
          class="w-1/3 object-cover"
        />
        <div class="w-full space-y-2 bg-[#343a40] px-12 py-10">
          <h2 class="mb-2 text-xl font-bold">{{ selectedMovie?.Title }}</h2>
          <p>
            {{ selectedMovie?.Released }} &bull; {{ selectedMovie?.Runtime }}
          </p>
          <p>{{ selectedMovie?.Genre }}</p>
          <p class="flex items-center gap-1">
            <span>⭐</span>
            <span>{{ selectedMovie?.imdbRating }} IMDb rating</span>
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
          <em>{{ selectedMovie?.Plot }}</em>
        </p>
        <p>Starring {{ selectedMovie?.Actors }}</p>
        <p>Directed by {{ selectedMovie?.Director }}</p>
      </div>
    </template>
  </div>
</template>
