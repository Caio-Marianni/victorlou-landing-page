<script setup lang="ts">
import IconAppleMusic from "@/assets/icons/IconAppleMusic.vue";
import IconBeatport from "@/assets/icons/IconBeatport.vue";
import IconDeezer from "@/assets/icons/IconDeezer.vue";
import IconInstagram from "@/assets/icons/IconInstagram.vue";
import IconSoundCloud from "@/assets/icons/IconSoundCloud.vue";
import IconSpotify from "@/assets/icons/IconSpotify.vue";
import IconYoutube from "@/assets/icons/IconYoutube.vue";
import { vScrollReveal } from "vue-scroll-reveal";
</script>
<template>
  <div v-scroll-reveal="{ delay:200, scale: 1, distance: '10px'}" class="text-white ml-10">
    <!-- Title -->
    <h1 class="text-2xl mb-4">Follow Victor Lou On:</h1>
    <!-- icons -->
    <div class="flex flex-wrap h-full gap-6 pb-10">
      <a href="http://youtube.com/@victorloumusic" target="_blank">
        <IconYoutube
          class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
        />
      </a>
      <a href="https://soundcloud.com/victorloumusic" target="_blank">
        <IconSoundCloud
          class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
        />
      </a>

      <a href="https://spoti.fi/3m6NG5j" target="_blank">
        <IconSpotify
          class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
        />
      </a>
      <a
        href="https://www.deezer.com/br/artist/5597325"
        target="_blank"
        class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
      >
        <IconDeezer
          class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
        />
      </a>
      <a
        href="https://www.beatport.com/artist/victor-lou/384641"
        target="_blank"
      >
        <IconBeatport
          class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
        />
      </a>
      <a
        href="https://music.apple.com/br/artist/victor-lou/816870684"
        target="_blank"
      >
        <IconAppleMusic
          class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
        />
      </a>
      <a href="https://instagram.com/victorloumusic" target="_blank">
        <IconInstagram
          class="w-16 h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 transition-all"
        />
      </a>
    </div>
  </div>
</template>
