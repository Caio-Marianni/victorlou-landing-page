<script setup lang="ts">
import IconAppleMusic from "@/assets/icons/IconAppleMusic.vue";
import IconBeatport from "@/assets/icons/IconBeatport.vue";
import IconDeezer from "@/assets/icons/IconDeezer.vue";
import IconInstagram from "@/assets/icons/IconInstagram.vue";
import IconMusic from "@/assets/icons/IconMusic.vue";
import IconSoundCloud from "@/assets/icons/IconSoundCloud.vue";
import IconSpotify from "@/assets/icons/IconSpotify.vue";
import IconYoutube from "@/assets/icons/IconYoutube.vue";
</script>
<template>
  <!-- Title -->
  <h1 class="">Follow Victor Lou On:</h1>
  <!-- icons -->
  <div class="flex gap-6 border h-12">
    <a href="http://youtube.com/@victorloumusic" target="_blank" class="">
      <IconYoutube class="w-20 h-20" />
    </a>
    <a href="https://soundcloud.com/victorloumusic" target="_blank" class="">
      <IconSoundCloud class="w-20 h-20" />
    </a>
    <a href="https://instagram.com/victorloumusic" target="_blank" class="">
      <IconInstagram class="w-20 h-20" />
    </a>
    <a href="https://spoti.fi/3m6NG5j" target="_blank" class="">
      <IconSpotify class="w-20 h-20" />
    </a>
    <a href="https://www.deezer.com/br/artist/5597325" target="_blank" class="">
      <IconDeezer class="w-20 h-20" />
    </a>
    <a
      href="https://www.beatport.com/artist/victor-lou/384641"
      target="_blank"
      class=""
    >
      <IconBeatport class="w-20 h-20" />
    </a>
    <a
      href="https://music.apple.com/br/artist/victor-lou/816870684"
      target="_blank"
      class=""
    >
      <IconAppleMusic class="w-20 h-20" />
    </a>
    <a
      href="https://music.amazon.com.br/artists/B005F7IB9A/victor-lou"
      target="_blank"
      class=""
    >
      <IconMusic class="w-20 h-20" />
    </a>
  </div>
</template>
