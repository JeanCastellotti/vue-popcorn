<script setup lang="ts">
import HeaderSearch from './HeaderSearch.vue'
import HeaderSearchResults from './HeaderSearchResults.vue'
import TheLogo from './TheLogo.vue'
</script>

<template>
  <header
    class="flex h-[7.2rem] items-center justify-between rounded-[0.9rem] bg-[#6741d9] px-[3.2rem]"
  >
    <TheLogo />
    <HeaderSearch />
    <HeaderSearchResults />
  </header>
</template>
