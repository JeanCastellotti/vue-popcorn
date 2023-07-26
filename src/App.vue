<script setup lang="ts">
import { ref, provide } from 'vue'
import TheHeader from '@/components/TheHeader.vue'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const movies = ref<Movie[]>([])

provide('movies', movies)
</script>

<template>
  <div class="bg-[#212529] p-[2.4rem] text-[#dee2e6]">
    <TheHeader />
  </div>
</template>
