<script setup lang="ts">
import { inject } from 'vue'

const { query, updateQuery } = inject('query') as {
  query: string
  updateQuery: (value: string) => void
}
</script>

<template>
  <input
    :value="query"
    @input="updateQuery(($event.target as HTMLInputElement).value)"
    placeholder="Search movies..."
    class="w-[40rem] self-center rounded-[0.7rem] bg-[#7950f2] px-[1.6rem] py-[1.1rem] text-xl text-[#dee2e6] transition-all placeholder:text-[#adb5bd] focus:-translate-y-[2px] focus:shadow-[0_2.4rem_2.4rem_rgba(0,0,0,0.1)] focus:outline-0"
  />
</template>
