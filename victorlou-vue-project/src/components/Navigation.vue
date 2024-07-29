<script setup>
import { RouterLink } from "vue-router";
import NavigationItem from "./NavigationItem.vue";
import IconHome from "@/assets/icons/IconHome.vue";
import IconSell from "@/assets/icons/IconSell.vue";
import IconEvent from "@/assets/icons/IconEvent.vue";
import IconMusic from "@/assets/icons/IconMusic.vue";
import IconContact from "@/assets/icons/IconContact.vue";
import IconLibrayBooks from "@/assets/icons/IconLibrayBooks.vue";
</script>

<template>
  <!-- Home -->
  <RouterLink to="/">
    <NavigationItem>
      <template #icon>
        <IconHome />
      </template>
      <template #heading>Home</template>
    </NavigationItem>
  </RouterLink>
  <!-- About -->
  <RouterLink to="/about">
    <NavigationItem>
      <template #icon>
        <IconLibrayBooks />
      </template>
      <template #heading>About</template>
    </NavigationItem>
  </RouterLink>
  <!-- Releases -->
  <RouterLink to="/releases">
    <NavigationItem>
      <template #icon>
        <IconMusic />
      </template>
      <template #heading>Releases</template>
    </NavigationItem>
  </RouterLink>
  <!-- Dates -->
  <RouterLink to="/dates">
    <NavigationItem>
      <template #icon>
        <IconEvent />
      </template>
      <template #heading>Dates</template>
    </NavigationItem>
  </RouterLink>
  <!-- Merch -->
  <RouterLink to="/merch">
    <NavigationItem>
      <template #icon>
        <IconSell />
      </template>
      <template #heading>Merch</template>
    </NavigationItem>
  </RouterLink>
  <!-- Contact -->
  <RouterLink to="/contact">
    <NavigationItem>
      <template #icon>
        <IconContact />
      </template>
      <template #heading>Contact</template>
    </NavigationItem>
  </RouterLink>
</template>
