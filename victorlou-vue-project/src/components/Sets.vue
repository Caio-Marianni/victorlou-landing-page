<script>
export default {
  data() {
    return {
      sets: [
        {
          title: "Summer All day, Vol.5",
          cover: "src/assets/cover/summerAllDay5.webp",
          cover2: "src/assets/cover/summerAllDay52.webp",
          link: "https://www.youtube.com/watch?v=MZmfBH4wM4E",
        },
        {
          title: "Summer All day, Vol.4",
          cover: "src/assets/cover/summerAllDay4.webp",
          cover2: "src/assets/cover/summerAllDay42.webp",
          link: "https://www.youtube.com/watch?v=mrpbPXddepk&pp=ygUOdmljdG9yIGxvdSBzZXQ%3D",
        },
        {
          title: "Só Track Boa - 2023 Sp",
          cover: "src/assets/cover/soTrackBoa.webp",
          cover2: "src/assets/cover/soTrackBoa2.webp",
          link: "https://www.youtube.com/watch?v=HXIPapV5dn8&t=1601s&pp=ygUOdmljdG9yIGxvdSBzZXQ%3D",
        },
        {
          title: "Green Valley - Camboriú",
          cover: "src/assets/cover/greenValley.webp",
          cover2: "src/assets/cover/greenValley2.webp",
          link: "https://www.youtube.com/watch?v=j3Ochn9KJ2k&t=6605s&pp=ygUOdmljdG9yIGxvdSBzZXQ%3D",
        },
      ],
    };
  },
};
</script>
<template>
  <!-- Container -->
  <div v-for="set in sets" :key="set.id">
    <!-- Card -->
    <div class="group relative h-[300px] text-center shadow-[0px_15px_35px_-5px] border-2 rounded-lg overflow-hidden">
      <img class="object-cover h-full w-full transition-all group-hover:blur-[4px] lg:-pt-10" :src="set.cover" alt="Set Cover" />
      
      <div class="absolute top-0">
        <img class="object-cover h-full w-full transition-all lg:-pt-10" :src="set.cover2" alt="Set Cover2" />
      </div>
      <!-- info -->
      <div class="absolute py-1 bg-cSixty500 text-[#c8d3ff] font-bold flex flex-col justify-center w-full bottom-[20px] translate-y-4 opacity-0 transition-[0.5s] delay-[calc(0.1s_*_var(--i))] group-hover:translate-y-0 group-hover:opacity-100">
        <h2>{{ set.title }}</h2>
        <a class="opacity-50" :href="set.link" targer="_blank">watch here</a>
      </div>
    </div>
  </div>
</template>