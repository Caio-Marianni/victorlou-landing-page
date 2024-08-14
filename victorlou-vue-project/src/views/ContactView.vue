<script setup>
import { vScrollReveal } from "vue-scroll-reveal";
</script>
<template>
  <div v-scroll-reveal="{ delay: 200, scale: 1, distance: '10px' }">
    <!-- Contact Me -->
    <div class="flex align-middle justify-center mt-40 md:mt-0 md:pt-40">
      <form
        action="#"
        class="w-3/4 md:w-1/2 border border-[#033033] p-6 bg-[#bbbbbb]"
      >
        <h2 class="text-2xl pb-3 font-semibold">Send Message</h2>
        <div>
          <div class="flex flex-col mb-3">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="px-3 py-2 bg-[#616161] border border-[#424242] focus:border-[#033033] focus:outline-none focus:bg-[#616161] focus:text-white"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col mb-3">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              class="px-3 py-2 bg-[#616161] border border-[#424242] focus:border-[#033033] focus:outline-none focus:bg-[#616161] focus:text-white"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col mb-3">
            <label for="message">Message</label>
            <textarea
              rows="4"
              id="message"
              class="px-3 py-2 bg-[#616161] border border-[#424242] focus:border-[#033033] focus:outline-none focus:bg-[#616161] focus:text-white"
            ></textarea>
          </div>
        </div>
        <div class="w-full pt-3">
          <button
            type="submit"
            class="w-full bg-gray-900 border border-[#033033] px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
