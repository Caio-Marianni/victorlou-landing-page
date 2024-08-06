<script setup>
import IconArrowRight from "@/assets/icons/IconArrowRight.vue";
import Dates from "@/components/Dates.vue";
import Hero from "@/components/Hero.vue";
import HeroNew from "@/components/HeroNew.vue";
import ReleasesNew from "@/components/ReleasesNew.vue";
</script>
<template>
  <!-- Top Hero New -->
  <HeroNew />
  <!-- Releases -->
  <Hero>
    <template #heading>Releases</template>
    <template #pageView>
      <RouterLink to="/releases">
        <IconArrowRight />
        See more Releases
      </RouterLink>
    </template>
    <template #content><ReleasesNew /></template>
  </Hero>
  <!-- Dates -->
  <Hero>
    <template #heading>Dates</template>
    <template #pageView>
      <RouterLink to="/releases">
        <IconArrowRight />
        See more Dates
      </RouterLink>
    </template>
    <template #content><Dates /></template>
  </Hero>
</template>
