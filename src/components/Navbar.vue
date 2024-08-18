<script setup>
import Navigation from "./Navigation.vue";
import NavigationMobile from "./NavigationMobile.vue";
import LogoContainer from "./LogoContainer.vue";
</script>
<template>
  <div
    class="font-mainFont fixed flex md:justify-between shadow-[0px_15px_35px_-5px] w-screen md:w-32 md:h-screen md:flex-col md:px-0 z-20 bg-[#191919]"
  >
    <!-- Logo -->
    <LogoContainer />
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
