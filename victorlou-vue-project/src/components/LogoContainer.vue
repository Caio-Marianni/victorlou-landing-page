<script setup>
import { RouterLink } from "vue-router";
import IconLogo from "@/assets/icons/IconLogo.vue";
import IconLogoName from "@/assets/icons/IconLogoName.vue";
</script>
<template>
    <RouterLink to="/" class="flex md:flex-col h-20 md:h-24 py-2 pl-5 md:pt-5 md:px-3">
      <IconLogo class="h-16 w-12 md:w-full" />
      <IconLogoName class="py-5 h-full md:hidden lg:flex" />
    </RouterLink>
</template>
