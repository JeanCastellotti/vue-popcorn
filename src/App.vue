<script setup lang="ts">
import { ref, provide, reactive, toRef } from 'vue'
import { watchDebounced } from '@vueuse/core'

import TheHeader from '@/components/TheHeader.vue'
import AppPanel from './components/AppPanel.vue'
import AppLoader from './components/AppLoader.vue'
import AppErrorMessage from './components/AppErrorMessage.vue'
import MovieList from './components/MovieList.vue'
import SelectedMovie from './components/SelectedMovie.vue'
import { store } from './store'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

const isLoading = ref(false)
const error = ref<string | null>(null)

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
  <div
    class="grid min-h-screen grid-rows-[auto,1fr] bg-gray-900 p-10 text-gray-300"
  >
    <TheHeader />
    <main class="grid grid-cols-2 gap-8">
      <AppPanel>
        <AppLoader v-if="isLoading" class="absolute inset-0 m-auto" />
        <AppErrorMessage v-else-if="error" :message="error" />
        <MovieList v-else />
      </AppPanel>

      <AppPanel
        class="sticky top-10 h-min max-h-[calc(100vh-5rem)] overflow-y-auto"
      >
        <SelectedMovie v-if="store.selectedMovieID" />
      </AppPanel>
    </main>
  </div>
</template>
