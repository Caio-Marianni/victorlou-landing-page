<script>
import MusicCard from "./MusicCard.vue";

export default {
  components: { MusicCard },
  data() {
    return {
      tracks: [
        {
          title: "Untitled (Trance Remix)",
          artist: "Victor Lou, Mazuk",
          cover: "src/assets/cover/untitled(TranceRemix).webp",
          music: "src/assets/music/untitled(TranceRemix).ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6n9HAIjtM3wF1AY8QfXv7p",
        },
        {
          title: "Baile Lotadão",
          artist: "Victor Lou, Gesualdi",
          cover: "src/assets/cover/baileLotadao.webp",
          music: "src/assets/music/baileLotadao.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/7LWs9wqCZIUPsZAllaKjEY",
        },
        {
          title: "Silver Stone",
          artist: "Victor Lou, Odaya",
          cover: "src/assets/cover/silverStone.webp",
          music: "src/assets/music/silverStone.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6TfU6xhKT4I7ptc5qeiG48",
        },
      ],
    };
  },
};
</script>
<template>
  <h1>Last Release</h1>
  <div class="flex gap-10 items-center" v-for="track in tracks" :key="track.id">
    <MusicCard
      :title="track.title"
      :artist="track.artist"
      :cover="track.cover"
      :music="track.music"
      :spotify="track.linkSpotify"
    />
  </div>
</template>
