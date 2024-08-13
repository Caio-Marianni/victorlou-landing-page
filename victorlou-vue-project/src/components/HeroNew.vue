<template>
  <div class="relative group w-full h-[500px] lg:h-[550px]">
    <img
      class="object-cover h-full w-full transition-all group-hover:blur-[4px] lg:-pt-10"
      src="../assets/BannerHero.webp"
      alt=""
    />
    <ul class="absolute flex justify-center w-full bottom-[20px]">
        <li class="translate-y-4 opacity-0 transition-[0.5s] delay-[calc(0.1s_*_var(--i))] group-hover:translate-y-0 group-hover:opacity-100">
          <a class="text-xl border px-4 py-1 text-white" href="https://www.youtube.com/watch?v=MZmfBH4wM4E">Watch Here</a>
        </li>
    </ul>
  </div>
</template>
