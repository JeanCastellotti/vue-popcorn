<script setup lang="ts">
import { inject } from 'vue'
import type { Movie } from '@/App.vue'

const movies = inject('movies') as Movie[]
</script>

<template>
  <p class="text-xl">
    Found
    <strong>{{ movies.length }}</strong>
    results
  </p>
</template>
