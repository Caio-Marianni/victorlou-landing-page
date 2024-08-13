<template>
  <div class="flex flex-col pl-10 pt-8">
    <div class="text-2xl">
      <slot name="heading"></slot>
    </div>
    <div class="mt-2 ml-4 font-light text-[#888888]">
      <slot name="email"></slot>
    </div>
  </div>
</template>
