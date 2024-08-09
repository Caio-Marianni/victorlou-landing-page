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
          return;
        }

        // Definir o src
        vm.audio.src = vm.music;

        // Adicionar eventos de erro
        vm.audio.onerror = function (e) {
          const errorMessage = e.target.error.message || "Erro desconhecido";
        };

        // Functions
        vm.audio.ontimeupdate = function () {
          vm.generateTime();
        };
        vm.audio.onloadedmetadata = function () {
          vm.generateTime();
        };
      })
  },
};
</script>

<template>
  <div class="bg-cThirtyOff bg-opacity-10 w-[410px] min-h-[480px] shadow-[0px_15px_35px_-5px] p-[30px] rounded-[15px]">
    <!-- halfTop -->
    <div class="flex items-start relative z-[4]">
      <!-- cover -->
      <div class="w-[300px] h-[300px] ml-[-70px] shrink-0 relative z-[2] rounded-[15px]">
        <div class="bg-no-repeat bg-center bg-cover w-full h-full absolute rounded-[15px] left-0 top-0 before:content-[] before:w-full before:h-full before:shadow-[0px_10px_40px_0px_rgba(76,70,124,0.5)] before:block before:z-[1] before:absolute before:blur-[10px] before:opacity-90 before:rounded-[15px] before:scale-90 before:top-[30px] after:content-[] after:w-full after:h-full after:shadow-[0px_10px_40px_0px_rgba(76,70,124,0.5)] after:block after:z-[2] after:absolute after:rounded-[15px] before:background: inherit after:background: inherit">
          <img class="w-full h-full object-cover shadow-[0px_10px_40px_0px_rgba(76,70,124,0.5)] select-none pointer-events-none rounded-[15px]" :src="cover" :alt="cover" />
        </div>
      </div>
      <!-- controls -->
      <div class="flex-1 flex flex-col items-center pl-5">
        <!-- play -->
        <div class="inline-flex text-3xl text-[#acb8cc] before:bg-cadControl cursor-pointer w-[50px] h-[50px] items-center justify-center relative transition-all duration-[0.3s] ease-[ease-in-out] mb-2.5 p-[5px] before:content-[ before:absolute before:w-full before:h-full before:opacity-0 before:shadow-[0px_5px_10px_0px_rgba(76,70,124,0.2)] before:transition-all before:duration-[0.3s] before:ease-[cubic-bezier(0.35,0.57,0.13,0.88)] before:rounded-[50%] before:scale-50" @click="play">
          <IconPause class="w-20 h-20 relative z-[2]" v-if="isTimerPlaying" />
          <IconPlay class="w-20 h-20 relative z-[2] fill-cadControl" v-else />
        </div>
        <!-- External link -->
        <a class="inline-flex text-3xl text-[#acb8cc] before:bg-cadControl cursor-pointer w-[50px] h-[50px] items-center justify-center relative transition-all duration-[0.3s] ease-[ease-in-out] mb-2.5 p-[5px] before:content-[ before:absolute before:w-full before:h-full before:opacity-0 before:shadow-[0px_5px_10px_0px_rgba(76,70,124,0.2)] before:transition-all before:duration-[0.3s] before:ease-[cubic-bezier(0.35,0.57,0.13,0.88)] before:rounded-[50%] before:scale-50" :href="spotify" target="_blank">
          <IconSpotify class="w-20 h-20 relative z-[2]" />
        </a>
      </div>
    </div>
    <!-- halfBottom-->
    <div class="w-full mt-[-15px] select-none" ref="progress">
      <!-- info / timer -->
      <div class="flex items-end justify-between">
        <!-- info -->
        <div class="text-[#71829e] flex-1 select-none pr-[60px]">
          <p class="font-normal text-xl opacity-70 leading-[1.3em] min-h-[52px]">{{ title }}</p>
          <p class="text-xl font-[bold] leading-[1.3em] mb-3">{{ artist }}</p>
        </div>
        <!-- timer -->
        <div class="text-[#71829e] font-bold text-xl opacity-50">{{ duration }}</div>
      </div>
      <!-- progress -->
       <div class="h-1.5 w-full cursor-pointer bg-[#d0d8e6] inline-block rounded-[10px]" @click="clickProgress">
        <div class="h-[inherit] w-[0%] bg-[#a3b3ce] rounded-[10px]" :style="{width: barWidth}"></div>
       </div>
       <div class="text-[#71829e] font-bold text-base opacity-70 mt-0.5">{{ currentTime }}</div>
    </div>
  </div>
</template>
