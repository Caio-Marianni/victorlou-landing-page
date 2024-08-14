<script setup>
import Hero from "@/components/Hero.vue";
import Releases from "@/components/Releases.vue";
import { vScrollReveal } from "vue-scroll-reveal";
</script>
<template>
  <div v-scroll-reveal="{ delay: 200, scale: 1, distance: '10px' }">
    <Hero>
      <template #heading>Last Releases</template>
      <template #pageView> </template>
      <template #content><Releases /></template>
    </Hero>
  </div>
</template>
