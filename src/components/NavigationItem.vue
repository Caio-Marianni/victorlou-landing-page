<template>
  <div class="group flex flex-col md:flex-row items-center gap-2 md:w-24 py-4 pb-3 md:py-0 md:pb-0 cursor-pointer border-t-2 border-[#313131] md:border-t-0 hover:bg-[#1a1a1a] hover:bg-opacity-75 md:bg-opacity-100 md:hover:bg-[#191919] transition">
    <slot name="icon"></slot>
    <div class="text-[#757575] group-hover:text-[#ffffff] transition-all">
      <slot name="heading"></slot>
    </div>
  </div>
</template>