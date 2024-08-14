<script setup>
import Dates from "@/components/Dates.vue";
import Hero from "@/components/Hero.vue";
import { vScrollReveal } from "vue-scroll-reveal";
</script>
import { vScrollReveal } from "vue-scroll-reveal";
<template>
  <div v-scroll-reveal="{ delay:200, scale: 1, distance: '10px'}">

    <Hero>
      <template #heading>All Dates</template>
      <template #pageView> </template>
      <template #content><Dates /></template>
    </Hero>
  </div>
</template>