<script setup>
import Navigation from "./Navigation.vue";
import NavigationMobile from "./NavigationMobile.vue";
import LogoContainer from "./LogoContainer.vue";
</script>
<template>
  <div
    class="fixed flex md:justify-between w-screen md:w-auto md:h-screen md:flex-col md:px-0 z-20 md:bg-cSixty500"
  >
    <!-- Logo -->
    <RouterLink to="/">
      <LogoContainer />
    </RouterLink>
    <!-- Desktop -->
    <div class="hidden md:flex">
      <Navigation />
    </div>
    <!-- Mobile -->
    <div class="md:invisible">
      <NavigationMobile />
    </div>
  </div>
</template>
