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
        },
        {
          day: "12",
          month: "10",
          year: "2024",
          event: "Mauka Ocean Club",
          loc: "Ancheta - ES",
          linkTicket:
            "",
        },
        {
          day: "25",
          month: "10",
          year: "2024",
          event: "Club Vibe",
          loc: "Alfenas - MG",
          linkTicket:
            "",
        },
        {
          day: "01",
          month: "11",
          year: "2024",
          event: "Tríplice",
          loc: "Raposa - MA",
          linkTicket:
            "",
        },
        {
          day: "08",
          month: "11",
          year: "2024",
          event: "2800 Music Club",
          loc: "Londrina - PR",
          linkTicket:
            "",
        },
        {
          day: "09",
          month: "11",
          year: "2024",
          event: "Blackartel Festival",
          loc: "Goiania - GO",
          linkTicket:
            "",
        },
        {
          day: "14",
          month: "11",
          year: "2024",
          event: "Cult Music Festival",
          loc: "Patos de Minas - MG",
          linkTicket:
            "",
        },
        {
          day: "23",
          month: "11",
          year: "2024",
          event: "AWE Festival",
          loc: "São Jose do Rio Preto - SP",
          linkTicket:
            "",
        },
        {
          day: "29",
          month: "11",
          year: "2024",
          event: "LE Clube",
          loc: "São Paulo - SP",
          linkTicket:
            "",
        },
        {
          day: "30",
          month: "11",
          year: "2024",
          event: "Sunset Festival",
          loc: "Lages - SC",
          linkTicket:
            "",
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
