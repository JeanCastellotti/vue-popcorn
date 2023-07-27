<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)

function toggle() {
  show.value = !show.value
}
</script>

<template>
  <section
    class="relative overflow-hidden overflow-y-auto rounded bg-[#2b3035]"
  >
    <button
      @click="toggle"
      class="absolute right-4 top-4 z-50 aspect-square h-10 cursor-pointer rounded-full border-none bg-[#212529] font-bold text-[#dee2e6]"
    >
      {{ show ? '-' : '+' }}
    </button>
    <div v-show="show">
      <slot />
    </div>
  </section>
</template>
