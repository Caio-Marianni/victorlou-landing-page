<template>
  <!-- Card -->
  <div
    class="relative group w-full h-[500px] lg:h-[550px] shadow-[0px_15px_35px_-5px]"
  >
    <img
      class="object-cover h-full w-full transition-all group-hover:blur-[4px] lg:-pt-10"
      src="../assets/BannerHero.webp"
      alt="Set Cover"
    />

    <div class="absolute w-full h-[500px] lg:h-[550px] top-0">
      <img
        class="object-cover h-full w-full"
        src="../assets/BannerHero2.webp"
        alt="Set Cover2"
      />
    </div>
    <!-- info -->
    <div
      class="absolute text-center py-2 bg-cSixty500 text-[#c8d3ff] font-bold flex flex-col justify-center w-full bottom-[20px] translate-y-4 opacity-0 transition-[0.5s] delay-[calc(0.1s_*_var(--i))] group-hover:translate-y-0 group-hover:opacity-100"
    >
      <a href="https://www.youtube.com/watch?v=MZmfBH4wM4E" targer="_blank"
        >Watch Now</a
      >
    </div>
  </div>
</template>
