<script setup lang="ts">
import TheLogo from './TheLogo.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderSearchResults from './HeaderSearchResults.vue'
</script>

<template>
  <header
    class="mb-10 flex items-center justify-between rounded bg-[#6741d9] px-10 py-5"
  >
    <TheLogo />
    <HeaderSearch />
    <HeaderSearchResults />
  </header>
</template>
