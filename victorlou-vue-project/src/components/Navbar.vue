<script setup>
import Navigation from "./Navigation.vue";
import IconLogo from "@/assets/icons/IconLogo.vue";
import NavigationMobile from "./NavigationMobile.vue";
import IconLogoName from "@/assets/icons/IconLogoName.vue";
import MusicCards from "./MusicCard.vue";
 </script>
<template>
  <div class="flex flex-col justify-between">
    <MusicCards /> 
    <IconLogo class="w-10" />
    <IconLogoName class="w-40" />
    <Navigation />
    <NavigationMobile />
  </div>
</template>
