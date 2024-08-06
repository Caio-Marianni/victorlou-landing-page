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
        {
          title: "Everything I Got",
          artist: "Victor Lou,",
          cover: "src/assets/cover/everythingIGot.webp",
          music: "src/assets/music/everythingIGot.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6XGsbOf23jgqWqyFxSvV8C",
        },
        {
          title: "Night Is Closing",
          artist: "Victor Lou",
          cover: "src/assets/cover/nightIsCLosing.webp",
          music: "src/assets/music/nightIsClosing.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/3lDpGeWM1LS4mCF2qX8Hcw",
        },
        {
          title: "Kanyes",
          artist: "Victor Lou",
          cover: "src/assets/cover/kanyes.webp",
          music: "src/assets/music/kanyes.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6ePpI5BPsyDdFR3XpjESP2",
        },
        {
          title: "Dark Side",
          artist: "Victor Lou, Lori'S",
          cover: "src/assets/cover/darkSide.webp",
          music: "src/assets/music/darkSide.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/5iPFyuo0C5zXRiNG8xjjTF?uid=96387ac4675ebd60bcc6&uri=spotify%3Atrack%3A3PuUTLpGpBS4YYKPJ1JQhN",
        },
        {
          title: "Closed Eyes",
          artist: "Victor Lou, Lori'S",
          cover: "src/assets/cover/darkSide.webp",
          music: "src/assets/music/closedEyes.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/5iPFyuo0C5zXRiNG8xjjTF?uid=96387ac4675ebd60bcc6&uri=spotify%3Atrack%3A3PuUTLpGpBS4YYKPJ1JQhN",
        },
        {
          title: "Catedral",
          artist: "Victor Lou, Duarte",
          cover: "src/assets/cover/natural.webp",
          music: "src/assets/music/catedral.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Game Boy",
          artist: "Victor Lou, Duarte, EVEL!N",
          cover: "src/assets/cover/natural.webp",
          music: "src/assets/music/gameBoy.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Colors",
          artist: "Victor Lou, Duarte",
          cover: "src/assets/cover/natural.webp",
          music: "src/assets/music/colors.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "AMA",
          artist: "Victor Lou, Duarte",
          cover: "src/assets/cover/natural.webp",
          music: "src/assets/music/ama.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Cigarrets",
          artist: "Victor Lou, Duarte",
          cover: "src/assets/cover/natural.webp",
          music: "src/assets/music/cigarrets.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Vitoria",
          artist: "Victor Lou, Duarte",
          cover: "src/assets/cover/natural.webp",
          music: "src/assets/music/vitoria.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Piloto",
          artist: "Victor Lou, Duarte, Yung Buda",
          cover: "src/assets/cover/piloto.webp",
          music: "src/assets/music/piloto.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/3QvyoGqcvy6cy55J8nJSG7",
        },
        {
          title: "Intro",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/intro.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Dance",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/dance.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Remote Control",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/remoteControl.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Paradise",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/paradise.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Shadowzada",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/shadowzada.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Bass Level",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/bassLevel.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Kill Bixo",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/killBixo.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "HM",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/hm.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Industry",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/industry.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Memories",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/memories.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Interlúdio",
          artist: "Victor Lou",
          cover: "src/assets/cover/may23.webp",
          music: "src/assets/music/interludio.ogg",
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
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
      :spotify="track.linkSpotify"
    />
  </div>
</template>
