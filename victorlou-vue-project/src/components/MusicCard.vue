<script>
export default {
  props: ["title", "artist", "cover", "music"],
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

      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null,

      showName: true,
      // {
      //     name: "Mekanın Sahibi",
      //     artist: "Norm Ender",
      //     cover: "1.jpg",
      //     source: "1.mp3",
      //     url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
      //     favorited: true
      //   }
    };
  },
  methods: {
    toggleShow() {
      console.log("YOU CLICKED MEEEEEE");
      this.showName = !this.showName;
    },
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
  },
  created() {
  let vm = this;

  // Verificar se a URL do áudio está definida
  if (!this.music) {
    console.error('A URL do áudio não está definida.');
    return;
  }

  // Verificar a acessibilidade do arquivo de áudio
  fetch(this.music, { method: 'HEAD' })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao acessar o arquivo de áudio: ' + response.statusText);
      }
      return response;
    })
    .then(() => {
      // Create audio
      vm.audio = new Audio();
      
      // Verificar se o navegador suporta o tipo de áudio antes de definir o src
      const canPlayType = vm.audio.canPlayType('audio/mp3'); // ou outro tipo de áudio apropriado
      if (canPlayType === '') {
        console.error('O navegador não suporta o tipo de áudio fornecido.');
        return;
      }

      // Definir o src
      vm.audio.src = vm.music;

      // Adicionar eventos de erro
      vm.audio.onerror = function (e) {
        const errorMessage = e.target.error.message || 'Erro desconhecido';
        console.error('Erro ao carregar o áudio:', errorMessage);
      };

      // Functions
      vm.audio.ontimeupdate = function () {
        vm.generateTime();
      };
      vm.audio.onloadedmetadata = function () {
        vm.generateTime();
      };

      // Log de carregamento
      console.log('Tentando carregar o áudio a partir de:', vm.music);
    })
    .catch(error => {
      console.error('Erro ao verificar o arquivo de áudio:', error);
    });
},
};
</script>

<template>
  <div class="flex gap-5 items-center">
    <!-- buttom -->
    <div class="cursor-pointer border"@click="play">
      <svg class="w-20 h-20">
        <use xlink:href="#icon-pause" v-if="isTimerPlaying"></use>
        <use xlink:href="#icon-play" v-else></use>
      </svg>
    </div>
    <!-- info -->
    <img class="w-20" :src="cover" alt="nao deu certo" />
    <p v-if="showName" name="title" class="w-36 h-10">{{ title }}</p>
    <p v-if="showName" name="artist" class="flex w-36 h-10">{{ artist }}</p>

    <div v-cloack></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      hidden
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-pause" viewBox="0 0 32 32">
          <title>icon-pause</title>
          <path
            d="M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"
          ></path>
          <path
            d="M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"
          ></path>
          <path
            d="M12.16 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"
          ></path>
          <path
            d="M19.84 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"
          ></path>
        </symbol>
        <symbol id="icon-play" viewBox="0 0 32 32">
          <title>icon-play</title>
          <path
            d="M21.216 15.168l-7.616-5.088c-0.672-0.416-1.504 0.032-1.504 0.832v10.176c0 0.8 0.896 1.248 1.504 0.832l7.616-5.088c0.576-0.416 0.576-1.248 0-1.664z"
          ></path>
          <path
            d="M13.056 22.4c-0.224 0-0.416-0.064-0.608-0.16-0.448-0.224-0.704-0.672-0.704-1.152v-10.176c0-0.48 0.256-0.928 0.672-1.152s0.928-0.224 1.344 0.064l7.616 5.088c0.384 0.256 0.608 0.672 0.608 1.088s-0.224 0.864-0.608 1.088l-7.616 5.088c-0.192 0.16-0.448 0.224-0.704 0.224zM13.056 10.272c-0.096 0-0.224 0.032-0.32 0.064-0.224 0.128-0.352 0.32-0.352 0.576v10.176c0 0.256 0.128 0.48 0.352 0.576 0.224 0.128 0.448 0.096 0.64-0.032l7.616-5.088c0.192-0.128 0.288-0.32 0.288-0.544s-0.096-0.416-0.288-0.544l-7.584-5.088c-0.096-0.064-0.224-0.096-0.352-0.096z"
          ></path>
          <path
            d="M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"
          ></path>
          <path
            d="M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"
          ></path>
        </symbol>
      </defs>
    </svg>
  </div>
</template>
