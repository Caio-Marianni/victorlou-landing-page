<script setup>
import MusicCard from "./MusicCard.vue";
import songs from "@/core/constants/songs";

</script>
<template>
  <div v-for="song in songs" :key="song.id">
    <MusicCard
      :title="song.title"
      :artists="song.artists"
      :cover="song.cover"
      :audio="song.audio"
      :link="song.link"
    />
  </div>
</template>
