<script>
import Navigation from "./Navigation.vue";

export default {
  components: { Navigation },
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
      menu.classList.toggle("-translate-y-full");
    },
  },
};
</script>
<template>
  <div class="absolute right-0 w-full bg-cSixty800 -z-10">
    <div class="h-20 py-5 pr-5 bg-cSixty500">
      <!-- Burguer Menu -->
      <div
        @click="rotateMenu"
        class="absolute right-4 cursor-pointer flex flex-col gap-2 justify-center items-center"
      >
        <div
          ref="bar1"
          class="h-2 w-10 bg-cThirty rounded-full transition duration-300 ease-in-out transform"
        ></div>
        <div
          ref="bar2"
          class="h-2 w-10 bg-cThirty rounded-full transition duration-200 ease-in-out transform rotate-0"
        ></div>
        <div
          ref="bar3"
          class="h-2 w-10 bg-cThirty rounded-full transition duration-300 ease-in-out transform"
        ></div>
      </div>
    </div>
    <!-- Navigation pages -->
    <div
      ref="menu"
      class="absolute w-screen right-0 -translate-y-full bg-cSixty800 transition-all -z-10"
    >
      <Navigation />
    </div>
  </div>
</template>
