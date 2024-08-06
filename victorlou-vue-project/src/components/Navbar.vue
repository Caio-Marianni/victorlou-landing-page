<script setup>
import IconLogo from "@/assets/icons/IconLogo.vue";
import IconLogoName from "@/assets/icons/IconLogoName.vue";
import Navigation from "./Navigation.vue";
import NavigationMobile from "./NavigationMobile.vue";
</script>
<template>
  <div class="flex flex-col justify-between">
    <IconLogo class="w-10" />
    <IconLogoName class="w-40" />
    <Navigation />
    <NavigationMobile />
  </div>
</template>
