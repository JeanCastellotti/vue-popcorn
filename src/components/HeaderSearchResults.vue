<script setup lang="ts">
import type { Movie } from '@/App.vue'
import { inject } from 'vue'

const movies = inject('movies') as Movie[]
</script>

<template>
  <p class="text-xl">
    Found
    <strong>{{ movies.length }}</strong>
    results
  </p>
</template>
