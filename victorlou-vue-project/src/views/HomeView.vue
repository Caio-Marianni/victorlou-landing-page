<script setup>
import IconArrowRight from "@/assets/icons/IconArrowRight.vue";
import Sets from "@/components/Sets.vue"
import Hero from "@/components/Hero.vue";
import Dates from "@/components/Dates.vue";
import Contact from "@/components/Contact.vue";
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
      <RouterLink to="/dates">
        <IconArrowRight />
        See more Dates
      </RouterLink>
    </template>
    <template #content><Dates /></template>
  </Hero>
  <!-- Sets -->
  <Hero>
    <template #heading>Sets</template>
    <template #pageView>
      <a href="https://www.youtube.com/channel/UCv1M1zI4E3ZR4PmCJ0VsD2A">
        <IconArrowRight />
        See more Sets
      </a>
    </template>
    <template #content><Sets /></template>
  </Hero>
  <!-- Contact -->
  <Contact />
</template>
