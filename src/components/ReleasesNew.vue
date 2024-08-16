<script>
import MusicCard from "./MusicCard.vue";
import socaSocaShark from "../assets/cover/socaSocaShark.webp";
import socaSocaFunk from "../assets/cover/socaSocaFunk.webp";
import untitledTranceRemix from "../assets/cover/untitled(TranceRemix).webp";
import baileLotadao from "../assets/cover/baileLotadao.webp";

export default {
  components: { MusicCard },
  data() {
    return {
      tracks: [
        {
          title: "Soca Soca do Submundo (Shark Version)",
          artist: "Victor Lou, MC Theuzyn",
          cover: socaSocaShark,
          music: "src/assets/music/socaSocaShark.ogg",
          linkSpotify:
              "https://open.spotify.com/intl-pt/album/1KLyYfUuBmnSlwNEhtnaVU?si=7aVIx_lXRO6ENQM56T1a3A",
        },
        {
          title: "Soca Soca do Submundo (Funk Version)",
          artist: "Victor Lou, dJ GBR, MC Theuzyn",
          cover: socaSocaFunk,
          music: "src/assets/music/socaSocaFunk.ogg",
          linkSpotify:
              "https://open.spotify.com/intl-pt/album/6i4F2LcrVKA9I5ltZAEHWu?si=hBMQWm0IS-erHnM9XA34Zw",
        },
        {
          title: "Untitled (Trance Remix)",
          artist: "Victor Lou, Mazuk",
          cover: untitledTranceRemix,
          music: "src/assets/music/untitled(TranceRemix).ogg",
          linkSpotify:
              "https://open.spotify.com/intl-pt/album/6n9HAIjtM3wF1AY8QfXv7p",
        },
        {
          title: "Baile Lotadão",
          artist: "Victor Lou, Gesualdi",
          cover: baileLotadao,
          music: "src/assets/music/baileLotadao.ogg",
          linkSpotify:
              "https://open.spotify.com/intl-pt/album/7LWs9wqCZIUPsZAllaKjEY",
        }
      ],
    };
  },
};
</script>
<template>
  <div v-for="track in tracks" :key="track.id">
    <MusicCard
      :title="track.title"
      :artist="track.artist"
      :cover="track.cover"
      :music="track.music"
      :spotify="track.linkSpotify"
    />
  </div>
</template>
