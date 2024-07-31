<script setup>
import Navigation from "./Navigation.vue";
import IconLogo from "@/assets/icons/IconLogo.vue";
import NavigationMobile from "./NavigationMobile.vue";
import IconLogoName from "@/assets/icons/IconLogoName.vue";
import MusicCard from "./MusicCard.vue";
import Releases from "./Releases.vue";
</script>
<template>
  <div class="flex flex-col justify-between">
    <!-- <MusicCard /> -->
     <Releases />
    <IconLogo class="w-10" />
    <IconLogoName class="w-40" />
    <Navigation />
    <NavigationMobile />
  </div>
</template>
