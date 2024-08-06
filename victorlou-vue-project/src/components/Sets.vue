<script>
export default {
  data() {
    return {
      sets: [
        {
          title: "Summer All day, Vol.5",
          cover: "src/assets/cover/summerAllDay5.webp",
          link: "https://www.youtube.com/watch?v=MZmfBH4wM4E",
        },
        {
          title: "Summer All day, Vol.4",
          cover: "src/assets/cover/summerAllDay4.webp",
          link: "https://www.youtube.com/watch?v=mrpbPXddepk&pp=ygUOdmljdG9yIGxvdSBzZXQ%3D",
        },
        {
          title: "Só TTrack Boa - 2023 Sp",
          cover: "src/assets/cover/soTrackBoa.webp",
          link: "https://www.youtube.com/watch?v=HXIPapV5dn8&t=1601s&pp=ygUOdmljdG9yIGxvdSBzZXQ%3D",
        },
        {
          title: "Green Valley - Camboriú",
          cover: "src/assets/cover/greenValley.webp",
          link: "https://www.youtube.com/watch?v=j3Ochn9KJ2k&t=6605s&pp=ygUOdmljdG9yIGxvdSBzZXQ%3D",
        },
      ],
    };
  },
};
</script>
<template>
  <!-- Container -->
  <div class="" v-for="set in sets" :key="set.id">
    <!-- Card -->
    <div class="">
      <img :src="set.cover" alt="Set Cover" />
      <!-- info -->
      <div class="">
        <h2>{{ set.title }}</h2>
        <a :href="set.link" targer="_blank">watch here</a>
      </div>
    </div>
  </div>
</template>
