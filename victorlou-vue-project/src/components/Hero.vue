<template>
  <div class="flex flex-col align-middle">
    <!-- Top Part -->
    <div
      class="flex justify-between mt-24 mb-14 mx-5 px-5 py-3 border-b-2 border-opacity-30 text-cThirty border-cThirty000"
    >
      <div class="flex text-2xl">
        <slot name="heading"></slot>
      </div>
      <div class="text-cThirty200 text-md font-light">
        <slot name="pageView"></slot>
      </div>
    </div>
    <!-- Bottom Part -->
    <div class="flex flex-wrap justify-center px-5 lg:px-11 gap-5 md:gap-10 lg:gap-20">
      <slot name="content"></slot>
    </div>
  </div>
</template>
