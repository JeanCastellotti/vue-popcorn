<script setup lang="ts">
import IconArrowUturnLeft from './icons/IconArrowUturnLeft.vue'
import { store } from '@/store'
</script>

<template>
  <button
    @click="store.closeSelectedMovie()"
    class="absolute left-2 top-2 z-50 flex aspect-square h-12 cursor-pointer items-center justify-center rounded-full bg-white text-gray-800 shadow"
  >
    <IconArrowUturnLeft />
  </button>
</template>
