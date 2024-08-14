<script setup>
import Dates from "@/components/Dates.vue";
import Hero from "@/components/Hero.vue";
</script>
<template>
  <Hero>
    <template #heading>All Dates</template>
    <template #pageView> </template>
    <template #content><Dates /></template>
  </Hero>
</template>