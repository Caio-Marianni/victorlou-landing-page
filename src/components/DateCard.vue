<script>
export default {
  props: ["day", "month", "year", "event", "loc", "linkTicket"],
};
</script>
<template>
  <div
    class="group flex justify-center align-middle py-10 shadow-[0px_15px_35px_-5px] bg-cSixty500 bg-opacity-80 relative w-[250px] rounded-[8px]"
  >
    <div
      class="text-[#adb7e0] relative opacity-50 transition-[0.5s] group-hover:opacity-100 group-hover:-translate-y-5"
    >
      <div class="flex justify-center -mt-8 font-dateFont">
        <p class="tracking-[px] text-[120px]">{{ day }}</p>
        <p class="mt-[74px] text-[60px] opacity-70">/{{ month }}</p>
      </div>
      <p
        class="m-auto w-[88px] -mt-6 border-t-2 text-[30px] tracking-[20px] font-dateFont opacity-70"
      >
        {{ year }}
      </p>
      <div class="text-center mt-4">
        <p class="w-full font-bold text-xl">{{ event }}</p>
        <p class="h-full font-extralight text-sm">{{ loc }}</p>
      </div>
    </div>
    <ul class="absolute flex justify-center align-middle bottom-[20px]">
      <li
        class="translate-y-4 opacity-0 transition-[0.5s] delay-[calc(0.1s_*_var(--i))] group-hover:translate-y-0 group-hover:opacity-100"
      >
        <a
          class="w-1/2 px-6 py-1 text-center text-[#dfe1eb] hover:bg-cSixty transition-all border rounded-md"
          :href="linkTicket"
          >Tickets</a
        >
      </li>
    </ul>
  </div>
</template>
