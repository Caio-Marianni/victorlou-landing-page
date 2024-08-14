<script setup>
import { vScrollReveal } from 'vue-scroll-reveal';
</script>
<template>
  <div v-scroll-reveal="{ delay:200, scale: 1, distance: '10px'}">
  <div class="flex flex-col justify-center">
    <img
      class="m-auto w-2/6"
      src="../assets//aboutCover.webp"
      alt="victorlou pic"
    />
    <!-- Text Area -->
    <div class="flex m-auto w-3/4">
      <h1 class="text-white">
        Authentic, consistent, atypical, and unmistakable. These are the words
        that define an artist who faced various challenges throughout life.
        Victor Lou began his career around 2015, proposing his own style of
        sound, which has now become an international reference. Engaged in
        social causes, the artist carried out actions for the environment and
        food collection during the COVID-19 pandemic.
        <br />
        <br />
        Empathetic and aware of his relevance, Victor Lou relentlessly seeks his
        evolution. With hits like "Diu Diu Lai," "Untitled," and "Remote
        Control," which showcase a more conceptual version of the artist, Victor
        confirms his immeasurable ascent.
        <br /><br />
        As evidence of this, the artist has been booked for festivals such as
        XXXperience, Só Track Boa, Rock in Rio, Lollapalooza, and Tomorrowland.
        In clubs, Victor Lou has made appearances at Surreal, Laroc, Privilege,
        Green Valley, El Fortin, and P12. A reference in the "desande" movement
        and more recently in "techno," Lou spares no effort to reinvent himself
        with each song and live performance.
      </h1>
      <ul class="ml-14 w-full">
        <li class="mb-8">
          <p class="text-white text-6xl font-dateFont">314K</p>
          <p class="text-[#a5a5a5]">Seguidores</p>
        </li>
        <li>
          <p class="text-white text-6xl font-dateFont">119.333</p>
          <p class="text-[#a5a5a5]">Ouvintes Mensais</p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
