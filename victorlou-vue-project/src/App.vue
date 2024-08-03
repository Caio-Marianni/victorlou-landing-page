<script setup>
import MusicCard from './components/MusicCard.vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackgroundNoise from './components/BackgroundNoise.vue';
import Releases from './components/Releases.vue';
</script>

<template>
  <Releases />
  <!-- <MusicCard /> -->
  <Navbar />
  <BackgroundNoise />
  <RouterView />
  <Footer />
</template>
