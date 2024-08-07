<script setup>
import EmailContact from "./EmailContact.vue";
import Apps from "./Apps.vue";
</script>
<template>
  <!-- Email -->
  <div class="">
    <EmailContact>
      <template #heading>Management</template>
      <template #email>mgmt@victorloumusic.com</template>
    </EmailContact>
    <EmailContact>
      <template #heading>Press</template>
      <template #email>press@victorloumusic.com</template>
    </EmailContact>
    <EmailContact>
      <template #heading>Contact Us</template>
      <template #email>help@victorloumusic.com</template>
    </EmailContact>
  </div>
  <!-- Follow -->
  <Apps />
</template>
