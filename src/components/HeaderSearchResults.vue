<script setup lang="ts">
import { store } from '@/store'
</script>

<template>
  <p class="text-xl text-indigo-200">
    Found
    <strong>{{ store.movies.length }}</strong>
    results
  </p>
</template>
