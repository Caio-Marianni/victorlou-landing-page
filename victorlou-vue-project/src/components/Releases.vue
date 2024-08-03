<script>
import MusicCard from "./MusicCard.vue";

export default {
  components: { MusicCard },
  data() {
    return {
      tracks: [
        {
          title: "Untitled (Trance Remix)",
          artist: "Victor Lou, Mazuk ",
          cover: "src/assets/cover/teste.webp",
          music: "src/assets/music/Untitled(TranceRemix).mp3",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6n9HAIjtM3wF1AY8QfXv7p",
        },
        {
          title: "Untitled (Trance Remix)",
          artist: "Victor Lou, Mazuk ",
          cover: "src/assets/cover/teste.webp",
          music: "src/assets/music/Untitled.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6n9HAIjtM3wF1AY8QfXv7p",
        },
      ],
    };
  },
};
</script>
<template>
  <h1>Releases ON</h1>
  <div class="flex gap-10 items-center" v-for="track in tracks" :key="track.id">
    <MusicCard
      :title="track.title"
      :artist="track.artist"
      :cover="track.cover"
      :music="track.music"
    />
  </div>
</template>
