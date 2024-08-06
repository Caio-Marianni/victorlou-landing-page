<script>
import DateCard from "./DateCard.vue";

export default {
  components: { DateCard },
  data() {
    return {
      dates: [
        {
          day: "09",
          month: "11",
          year: "2024",
          event: "Blackartel Festival",
          loc: "Goiania - GO",
          linkTicket:
            "https://open.spotify.com/intl-pt/album/6n9HAIjtM3wF1AY8QfXv7p",
        },
      ],
    };
  },
};
</script>
<template>
    <div class="flex gap-10 items-center" v-for="date in dates" :key="date.id">
    <DateCard
      :day="date.day"
      :month="date.month"
      :year="date.year"
      :event="date.event"
      :loc="date.loc"
      :linkTicket="date.linkTicket"
    />
  </div>
</template>
