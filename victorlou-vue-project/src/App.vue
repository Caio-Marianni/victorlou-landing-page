<script setup>
import Navbar from "./components/Navbar.vue";
import BackgroundNoise from "./components/BackgroundNoise.vue";
import CenterContent from "./components/CenterContent.vue";
</script>

<template>
  <!-- Grid System -->
  <div className="grid grid-cols-6 grid-rows-6">
    <!-- Lateral -->
    <div class="border col-span-6 h-20">
      <Navbar />
    </div>
    <div class="border w-full">teste2</div>
    <div class="border w-full">teste3</div>
    <div class="border w-full">teste4</div>
    <div class="border w-full">teste5</div>
    <div class="border w-full">teste6</div>
    <div class="border w-full">teste7</div>
    <div class="border w-full">teste8</div>
    <div class="border w-full">teste9</div>
    <div class="border w-full">teste10</div>
    <!-- Background -->
    <!-- <BackgroundNoise  /> -->
    <!-- Content Center -->
    <!-- <CenterContent class="z-40"/> -->
  </div>
</template>
