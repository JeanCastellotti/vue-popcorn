<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import AppLoader from './AppLoader.vue'
import SelectedMovieCloseButton from './SelectedMovieCloseButton.vue'
import SelectedMovieHeader from './SelectedMovieHeader.vue'
import SelectedMovieDetails from './SelectedMovieDetails.vue'

import { store } from '@/store'

import { useKey } from '@/composables/useKey'

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

useKey('Escape', store.closeSelectedMovie.bind(store))
</script>

<template>
  <div class="relative h-full">
    <AppLoader v-if="isLoading" />
    <template v-else-if="store.selectedMovie">
      <SelectedMovieCloseButton />
      <SelectedMovieHeader />
      <SelectedMovieDetails />
    </template>
  </div>
</template>
