<script>
import IconPause from "@/assets/icons/IconPause.vue";
import IconPlay from "@/assets/icons/IconPlay.vue";
import IconSpotify from "@/assets/icons/IconSpotify.vue";

export default {
  components: { IconPlay, IconPause, IconSpotify },
  props: ["title", "artist", "cover", "music", "spotify"],
  data() {
    return {
      // Created
      audio: null,
      // Generate Time
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      // Change play icon
      isTimerPlaying: false,
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      // Duration
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      // Current Time
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
  },
  created() {
    let vm = this;
    // Verificar se a URL do áudio está definida
    if (!this.music) {
      console.error("A URL do áudio não está definida.");
      return;
    }
    // Verificar a acessibilidade do arquivo de áudio
    fetch(this.music, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Erro ao acessar o arquivo de áudio: " + response.statusText
          );
        }
        return response;
      })
      .then(() => {
        // Create audio
        vm.audio = new Audio();

        // Verificar se o navegador suporta o tipo de áudio antes de definir o src
        const canPlayType = vm.audio.canPlayType("audio/mp3"); // ou outro tipo de áudio apropriado
        if (canPlayType === "") {
          console.error("O navegador não suporta o tipo de áudio fornecido.");
          return;
        }

        // Definir o src
        vm.audio.src = vm.music;

        // Adicionar eventos de erro
        vm.audio.onerror = function (e) {
          const errorMessage = e.target.error.message || "Erro desconhecido";
          console.error("Erro ao carregar o áudio:", errorMessage);
        };

        // Functions
        vm.audio.ontimeupdate = function () {
          vm.generateTime();
        };
        vm.audio.onloadedmetadata = function () {
          vm.generateTime();
        };

        // Log de carregamento
        console.log("Tentando carregar o áudio a partir de:", vm.music);
      })
      .catch((error) => {
        console.error("Erro ao verificar o arquivo de áudio:", error);
      });
  },
};
</script>

<template>
  <div class="flex gap-5 items-center">
    <!-- halfTop -->
    <div>
      <!-- cover -->
      <div class="">
        <img class="w-20" :src="cover" :alt="cover" />
      </div>
      <!-- controls -->
      <div class="">
        <!-- play -->
        <div class="cursor-pointer border" @click="play">
          <IconPause class="w-20 h-20" v-if="isTimerPlaying" />
          <IconPlay class="w-20 h-20" v-else />
        </div>
        <!-- External link -->
        <a :href="spotify" target="_blank">
          <IconSpotify class="w-20 h-20" />
        </a>
      </div>
    </div>
    <!-- halfBottom-->
    <div ref="progress">
      <!-- info / timer -->
      <div class="">
        <!-- info -->
        <div class="">
          <p class="w-36 h-10">{{ title }}</p>
          <p class="flex w-36 h-10">{{ artist }}</p>
        </div>
        <!-- timer -->
        <div class="">{{ duration }}</div>
      </div>
      <!-- progress -->
       <div class="h-2 border rounded-lg" @click="clickProgress" :style="{width: barWidth}"></div>
       <div class="">{{ currentTime }}</div>
    </div>
  </div>
</template>
