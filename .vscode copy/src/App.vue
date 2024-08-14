<script setup>
import Navbar from "./components/Navbar.vue";
import BackgroundNoise from "./components/BackgroundNoise.vue";
import CenterContent from "./components/CenterContent.vue";
</script>

<template>
  <!-- Background -->
  <BackgroundNoise />
  <!-- Lateral -->
  <Navbar />
  <!-- content -->
  <div class="pt-20 md:pt-0 md:ml-32">
    <CenterContent />
  </div>
</template>
