<script>
import Navigation from "./Navigation.vue";

export default {
  methods: {
    rotateMenu() {
      const bar1 = this.$refs.bar1;
      const bar2 = this.$refs.bar2;
      const bar3 = this.$refs.bar3;
      const menu = this.$refs.menu;
      bar1.classList.toggle("-rotate-45");
      bar1.classList.toggle("translate-y-4");
      bar2.classList.toggle("opacity-0");
      bar3.classList.toggle("rotate-45");
      bar3.classList.toggle("-translate-y-4");
      menu.classList.toggle("top-1");
    },
  },
};
</script>
<template>
  <!-- Burguer Menu -->
  <div
    @click="rotateMenu" class="md:invisible cursor-pointer flex flex-col gap-2 justify-center items-center absolute z-40 top-3 right-12"
  >
    <div
      ref="bar1" class="h-2 w-10 bg-red rounded-full transition duration-300 ease-in-out transform"
    ></div>
    <div
      ref="bar2" class="h-2 w-10 bg-red rounded-full transition duration-200 ease-in-out transform rotate-0"
    ></div>
    <div
      ref="bar3" class="h-2 w-10 bg-red rounded-full transition duration-300 ease-in-out transform"
    ></div>
  </div>
  <!-- Navigation pages -->
  <div ref="menu">
    <Navigation />
  </div>
</template>
