<script>
import DateCard from "./DateCard.vue";

export default {
  components: { DateCard },
  data() {
    return {
      dates: [
        {
          day: "01",
          month: "09",
          year: "2024",
          event: "Day Trip After Party",
          loc: "Los Angeles - CA",
          linkTicket:
            "",
        },
        {
          day: "07",
          month: "09",
          year: "2024",
          event: "Boiler Club",
          loc: "Bauru - SP",
          linkTicket:
            "",
        },
        {
          day: "19",
          month: "09",
          year: "2024",
          event: "Rock In Rio",
          loc: "Rio de Janeiro - RJ",
          linkTicket:
            "",
        },
        {
          day: "21",
          month: "09",
          year: "2024",
          event: "Surreal Park & House",
          loc: "Camboriú - SC",
          linkTicket:
            "",
        }
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
