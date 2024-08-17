<script>
import MusicCard from "./MusicCard.vue";
import socaSocaShark from "../assets/cover/socaSocaShark.webp";
import socaSocaFunk from "../assets/cover/socaSocaShark.webp";
import baileLotadao from "../assets/cover/baileLotadao.webp";
import darkSide from "../assets/cover/darkSide.webp";
import everythingIGot from "../assets/cover/everythingIGot.webp";
import kanyes from "../assets/cover/kanyes.webp";
import may23 from "../assets/cover/may23.webp";
import may232 from "../assets/cover/may23(2).webp";
import natural from "../assets/cover/natural.webp";
import nightIsClosing from "../assets/cover/nightIsClosing.webp";
import piloto from "../assets/cover/piloto.webp";
import silverStone from "../assets/cover/silverStone.webp";
import untitledTranceRemix from "../assets/cover/untitled(TranceRemix).webp";
import amaM from "../assets/music/ama.ogg";
import bassLevelM from "../assets/music/bassLevel.ogg";
import catedralM from "../assets/music/catedral.ogg";
import cigarretsM from "../assets/music/cigarrets.ogg";
import closedEyesM from "../assets/music/closedEyes.ogg";
import colorsM from "../assets/music/colors.ogg";
import danceM from "../assets/music/dance.ogg";
import gameBoyM from "../assets/music/gameBoy.ogg";
import hmM from "../assets/music/hm.ogg";
import industryM from "../assets/music/industry.ogg";
import interludioM from "../assets/music/interlúdio.ogg";
import introM from "../assets/music/intro.ogg";
import killBixoM from "../assets/music/killBixo.ogg";
import memoriesM from "../assets/music/memories.ogg";
import paradiseM from "../assets/music/paradise.ogg";
import remoteControlM from "../assets/music/remoteControl.ogg";
import shadowzadaM from "../assets/music/shadowzada.ogg";
import vitoriaM from "../assets/music/vitoria.ogg";
import socaSocaSharkM from "../assets/music/socaSocaShark.ogg";
import socaSocaFunkM from "../assets/music/socaSocaShark.ogg";
import baileLotadaoM from "../assets/music/baileLotadao.ogg";
import darkSideM from "../assets/music/darkSide.ogg";
import everythingIGotM from "../assets/music/everythingIGot.ogg";
import kanyesM from "../assets/music/kanyes.ogg";
import nightIsClosingM from "../assets/music/nightIsClosing.ogg";
import pilotoM from "../assets/music/piloto.ogg";
import silverStoneM from "../assets/music/silverStone.ogg";
import untitledTranceRemixM from "../assets/music/untitled(TranceRemix).ogg";
// try to update 

export default {
  components: { MusicCard },
  data() {
    return {
      tracks: [
        {
          title: "Soca Soca do Submundo (Shark Version)",
          artist: "Victor Lou, MC Theuzyn",
          cover: socaSocaShark,
          music: socaSocaSharkM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/1KLyYfUuBmnSlwNEhtnaVU?si=7aVIx_lXRO6ENQM56T1a3A",
        },
        {
          title: "Soca Soca do Submundo (Funk Version)",
          artist: "Victor Lou, dJ GBR, MC Theuzyn",
          cover: socaSocaFunk,
          music: socaSocaFunkM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6i4F2LcrVKA9I5ltZAEHWu?si=hBMQWm0IS-erHnM9XA34Zw",
        },
        {
          title: "Untitled (Trance Remix)",
          artist: "Victor Lou, Mazuk",
          cover: untitledTranceRemix,
          music: untitledTranceRemixM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6n9HAIjtM3wF1AY8QfXv7p",
        },
        {
          title: "Baile Lotadão",
          artist: "Victor Lou, Gesualdi",
          cover: baileLotadao,
          music: baileLotadaoM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/7LWs9wqCZIUPsZAllaKjEY",
        },
        {
          title: "Silver Stone",
          artist: "Victor Lou, Odaya",
          cover: silverStone,
          music: silverStoneM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6TfU6xhKT4I7ptc5qeiG48",
        },
        {
          title: "Everything I Got",
          artist: "Victor Lou,",
          cover: everythingIGot,
          music: everythingIGotM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6XGsbOf23jgqWqyFxSvV8C",
        },
        {
          title: "Night Is Closing",
          artist: "Victor Lou",
          cover: nightIsClosing,
          music: nightIsClosingM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/3lDpGeWM1LS4mCF2qX8Hcw",
        },
        {
          title: "Kanyes",
          artist: "Victor Lou",
          cover: kanyes,
          music: kanyesM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/6ePpI5BPsyDdFR3XpjESP2",
        },
        {
          title: "Dark Side",
          artist: "Victor Lou, Lori'S",
          cover: darkSide,
          music: darkSideM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/5iPFyuo0C5zXRiNG8xjjTF?uid=96387ac4675ebd60bcc6&uri=spotify%3Atrack%3A3PuUTLpGpBS4YYKPJ1JQhN",
        },
        {
          title: "Closed Eyes",
          artist: "Victor Lou, Lori'S",
          cover: darkSide,
          music: closedEyesM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/5iPFyuo0C5zXRiNG8xjjTF?uid=96387ac4675ebd60bcc6&uri=spotify%3Atrack%3A3PuUTLpGpBS4YYKPJ1JQhN",
        },
        {
          title: "Catedral",
          artist: "Victor Lou, Duarte",
          cover: natural,
          music: catedralM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Game Boy",
          artist: "Victor Lou, Duarte, EVEL!N",
          cover: natural,
          music: gameBoyM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Colors",
          artist: "Victor Lou, Duarte",
          cover: natural,
          music: colorsM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "AMA",
          artist: "Victor Lou, Duarte",
          cover: natural,
          music: amaM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Cigarrets",
          artist: "Victor Lou, Duarte",
          cover: natural,
          music: cigarretsM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Vitoria",
          artist: "Victor Lou, Duarte",
          cover: natural,
          music: vitoriaM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/2F7rJsdLsrnN7nuIM7Xwlk",
        },
        {
          title: "Piloto",
          artist: "Victor Lou, Duarte, Yung Buda",
          cover: piloto,
          music: pilotoM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/3QvyoGqcvy6cy55J8nJSG7",
        },
        {
          title: "Intro",
          artist: "Victor Lou",
          cover: may23,
          music: introM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Dance",
          artist: "Victor Lou",
          cover: may23,
          music: danceM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Remote Control",
          artist: "Victor Lou",
          cover: may23,
          music: remoteControlM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Paradise",
          artist: "Victor Lou",
          cover: may23,
          music: paradiseM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Shadowzada",
          artist: "Victor Lou",
          cover: may23,
          music: shadowzadaM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Bass Level",
          artist: "Victor Lou",
          cover: may232,
          music: bassLevelM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Kill Bixo",
          artist: "Victor Lou",
          cover: may232,
          music: killBixoM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "HM",
          artist: "Victor Lou",
          cover: may232,
          music: hmM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Industry",
          artist: "Victor Lou",
          cover: may232,
          music: industryM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Memories",
          artist: "Victor Lou",
          cover: may232,
          music: memoriesM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
        {
          title: "Interlúdio",
          artist: "Victor Lou",
          cover: may232,
          music: interludioM,
          linkSpotify:
            "https://open.spotify.com/intl-pt/album/465uKcpgmFpMmcEAwIW8J1",
        },
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
