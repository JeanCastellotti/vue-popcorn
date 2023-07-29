<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStorage, watchDebounced } from '@vueuse/core'

import TheHeader from '@/components/TheHeader.vue'
import AppPanel from './components/AppPanel.vue'
import AppLoader from './components/AppLoader.vue'
import AppErrorMessage from './components/AppErrorMessage.vue'
import MovieList from './components/MovieList.vue'
import SelectedMovie from './components/SelectedMovie.vue'
import WatchedMovieList from './components/WatchedMovieList.vue'
import WatchedMovieSummary from './components/WatchedMovieSummary.vue'

import { store } from './store'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

const isLoading = ref(false)
const error = ref<string | null>(null)

onMounted(() => {
  store.watchedMovies = useStorage('watchedMovies', []).value
})

watchDebounced(
  () => store.query,
  async () => {
    try {
      isLoading.value = true
      error.value = null
      const res = await fetch(`${apiUrl}/?apikey=${apiKey}&s=${store.query}`)
      if (!res.ok) throw new Error('Failed to load movies')
      const data = await res.json()
      if (data.Response === 'False') throw new Error(data.Error)
      store.movies = data.Search
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
</script>

<template>
  <div class="min-h-screen bg-gray-900 p-10 text-gray-300">
    <div class="container mx-auto">
      <TheHeader />
      <main class="grid h-[calc(100vh-6rem-3*2.5rem)] grid-cols-2 gap-8">
        <AppPanel>
          <AppLoader v-if="isLoading" />
          <AppErrorMessage v-else-if="error" :message="error" />
          <MovieList v-else />
        </AppPanel>

        <AppPanel>
          <SelectedMovie v-if="store.selectedMovieID" />
          <div v-else class="flex h-full flex-col">
            <WatchedMovieSummary />
            <WatchedMovieList />
          </div>
        </AppPanel>
      </main>
    </div>
  </div>
</template>
