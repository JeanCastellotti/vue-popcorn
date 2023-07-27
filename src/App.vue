<script setup lang="ts">
import { ref, provide } from 'vue'
import { watchDebounced } from '@vueuse/core'

import TheHeader from '@/components/TheHeader.vue'
import AppPanel from './components/AppPanel.vue'
import AppLoader from './components/AppLoader.vue'
import AppErrorMessage from './components/AppErrorMessage.vue'
import MovieList from './components/MovieList.vue'
import SelectedMovie from './components/SelectedMovie.vue'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

const query = ref('')
const movies = ref<Movie[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const selectedMovieID = ref<string | null>(null)

watchDebounced(
  query,
  async () => {
    try {
      isLoading.value = true
      error.value = null
      const res = await fetch(`${apiUrl}/?apikey=${apiKey}&s=${query.value}`)
      if (!res.ok) throw new Error('Failed to load movies')
      const data = await res.json()
      if (data.Response === 'False') throw new Error(data.Error)
      movies.value = data.Search
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      isLoading.value = false
    }
  },
  {
    debounce: 500,
  }
)

function updateQuery(value: string) {
  query.value = value
}

function selectMovie(id: string) {
  selectedMovieID.value = selectedMovieID.value === id ? null : id
}

function closeSelectedMovie() {
  selectedMovieID.value = null
}

provide('query', { query, updateQuery })
provide('movies', movies)
provide('selectMovie', selectMovie)
provide('selectedMovieID', selectedMovieID)
provide('closeSelectedMovie', closeSelectedMovie)
</script>

<template>
  <div
    class="grid min-h-screen grid-rows-[auto_1fr] bg-[#212529] p-10 text-[#dee2e6]"
  >
    <TheHeader />
    <main class="grid grid-cols-2 justify-center gap-8">
      <AppPanel>
        <AppLoader v-if="isLoading" class="absolute inset-0 m-auto" />
        <AppErrorMessage v-else-if="error" :message="error" />
        <MovieList v-else />
      </AppPanel>

      <AppPanel class="sticky top-10 h-min">
        <SelectedMovie v-if="selectedMovieID" />
      </AppPanel>
    </main>
  </div>
</template>
