<script setup>
import Navigation from "./Navigation.vue";
import IconLogo from "@/assets/icons/IconLogo.vue";
import NavigationMobile from "./NavigationMobile.vue";
</script>
<template>
  <div class="flex flex-col justify-between">
    <IconLogo />
    <Navigation />
    <NavigationMobile />
  </div>
</template>
