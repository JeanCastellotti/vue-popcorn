<script setup lang="ts">
import TheLogo from './TheLogo.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderSearchResults from './HeaderSearchResults.vue'
</script>

<template>
  <header
    class="mb-10 flex h-24 items-center justify-between rounded bg-indigo-600 px-10"
  >
    <TheLogo />
    <HeaderSearch />
    <HeaderSearchResults />
  </header>
</template>
