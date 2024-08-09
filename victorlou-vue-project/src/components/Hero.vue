<template>
  <div class="flex flex-col">
    <!-- Top Part -->
    <div class="flex justify-between mx-2 px-2 py-2 border-b-2 text-cThirty border-cThirty000">
      <slot name="heading"></slot>
      <div class="flex text-cThirty200">
        <slot name="pageView"></slot>
      </div>
    </div>
    <!-- Bottom Part -->
     <div class="flex flex-wrap gap-20">
       <slot name="content" ></slot>
      </div>
  </div>
</template>
