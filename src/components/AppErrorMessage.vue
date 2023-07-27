<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <p
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-3 text-xl font-semibold uppercase"
  >
    <span>⛔</span>
    <span>{{ message }}</span>
  </p>
</template>
