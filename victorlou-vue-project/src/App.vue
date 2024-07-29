<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackgroundNoise from './components/BackgroundNoise.vue';
</script>

<template>
  <Navbar />
  <BackgroundNoise />
  <RouterView />
  <Footer />
</template>
