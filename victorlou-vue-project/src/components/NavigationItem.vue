<template>
  <div class="flex flex-col md:flex-row items-center gap-2 md:w-24 py-4 pb-3 md:py-0 md:pb-0 cursor-pointer border-t-2 md:border-t-0 hover:bg-cSixty md:hover:bg-cSixty500 hover:text-cTen transition">
    <slot name="icon"></slot>
    <slot name="heading"></slot>
  </div>
</template>