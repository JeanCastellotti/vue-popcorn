<script setup lang="ts">
import type { Movie } from '@/App.vue'

defineProps<Movie>()

function selectMovie(id: string) {}
</script>

<template>
  <li
    @click="selectMovie(imdbID)"
    class="relative flex cursor-pointer items-center gap-x-10 px-12 py-4 transition-all hover:bg-[#343a40]"
  >
    <div
      v-if="Poster === 'N/A'"
      class="flex h-20 w-20 shrink-0 rounded bg-slate-600"
    >
      <span class="m-auto text-4xl">?</span>
    </div>
    <img v-else :src="Poster" :alt="Title" class="w-20 object-cover" />
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">{{ Title }}</h3>
      <p class="flex items-center gap-2">
        <span>🗓</span>
        <span>{{ Year }}</span>
      </p>
    </div>
  </li>
</template>
