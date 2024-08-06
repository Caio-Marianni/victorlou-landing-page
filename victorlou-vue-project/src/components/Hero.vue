<template>
  <div class="">
    <!-- Top Part -->
    <div class="">
      <slot name="heading"></slot>
      <div class="">
        <slot name="pageView"></slot>
      </div>
    </div>
    <!-- Bottom Part -->
    <slot name="content"></slot>
  </div>
</template>
