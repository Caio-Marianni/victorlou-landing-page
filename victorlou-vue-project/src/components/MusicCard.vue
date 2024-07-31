<script>
export default {
  data() {
    return {
      musics: [
        { id: 2811085192 },
        { id: 583374402 },
        { id: 1537782972 },
        { id: 1633552152 },
        { id: 2058581567 }
      ],
    };
  },
};
</script>

<template>
  <div class="flex gap-5 flex-wrap"> 
    <div v-for="music in musics" :key="music.id">
      <iframe
        :src="`https://widget.deezer.com/widget/dark/track/${music.id}?tracklist=false`"
        width="400"
        height="300"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media; clipboard-write"
        ></iframe
      >
    </div>
  </div>
</template>