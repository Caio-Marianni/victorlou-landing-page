<script setup>
import Hero from "@/components/Hero.vue";
import Releases from "@/components/Releases.vue";
</script>
<template>
  <Hero>
    <template #heading>Last Releases</template>
    <template #pageView> </template>
    <template #content><Releases /></template>
  </Hero>
</template>
