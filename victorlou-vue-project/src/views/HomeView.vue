<script setup>
import IconArrowRight from "@/assets/icons/IconArrowRight.vue";
import Sets from "@/components/Sets.vue";
import Hero from "@/components/Hero.vue";
import DatesMonth from "@/components/DatesMonth.vue";
import HeroNew from "@/components/HeroNew.vue";
import ReleasesNew from "@/components/ReleasesNew.vue";
</script>
<template>
  <!-- Top Hero New -->
  <HeroNew />
  <!-- Releases -->
  <Hero>
    <template #heading>Last Releases</template>
    <template #pageView>
      <div class="relative h-full w-40">
        <RouterLink to="/releases">
          <div class="absolute bottom-0 right-0 flex align-middle justify-center">
            <IconArrowRight />
            See more Releases
          </div>
        </RouterLink>
      </div>
    </template>
    <template #content><ReleasesNew /></template>
  </Hero>
  <!-- Dates -->
  <Hero>
    <template #heading>Dates</template>
    <template #pageView>
      <div class="relative h-full w-40">
        <RouterLink to="/dates">
          <div class="absolute bottom-0 right-0 flex align-middle justify-center">
            <IconArrowRight />
            See more Dates
          </div>
        </RouterLink>
      </div>
    </template>
    <template #content><DatesMonth /></template>
  </Hero>
  <!-- Sets -->
  <Hero>
    <template #heading>Sets</template>
    <template #pageView>
      <div class="relative h-full w-40">
        <a class="absolute bottom-0 right-0 flex align-middle justify-center"
          href="https://www.youtube.com/channel/UCv1M1zI4E3ZR4PmCJ0VsD2A" >
          <IconArrowRight />
          See more Sets
        </a>
      </div>
    </template>
    <template #content><Sets /></template>
  </Hero>
</template>
