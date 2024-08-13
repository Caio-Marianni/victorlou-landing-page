<script setup>
import EmailContact from "./EmailContact.vue";
import Apps from "./Apps.vue";
</script>
<template>
  <div class="mt-20 bg-[#1a1a1a]">
    <!-- Email -->
    <div class="text-white mb-10">
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
  </div>
</template>
