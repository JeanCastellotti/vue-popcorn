<script setup lang="ts">
import { ref } from 'vue'
import { store } from '@/store'
import { onKeyDown } from '@vueuse/core'

const input = ref<HTMLInputElement | null>(null)

onKeyDown('Enter', () => {
  input.value?.focus()
})
</script>

<template>
  <input
    ref="input"
    :value="store.query"
    @input="store.updateQuery(($event.target as HTMLInputElement).value)"
    placeholder="Search movies..."
    class="w-96 self-center rounded bg-indigo-700 px-4 py-3 text-xl text-indigo-200 transition-[width] placeholder:text-indigo-400 focus:w-[28rem] focus:outline-0"
  />
</template>
