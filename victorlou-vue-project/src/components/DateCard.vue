<script>
  export default {
    props: [ "day", "month", "year", "event", "loc", "linkTicket"]
  }
</script>
<template>
  <div class="">
    <!-- date -->
    <div class="">
      <div class="">
        <p>{{ day }}</p>
        <p>/{{ month }}</p>
      </div>
      <p>{{ year }}</p>
    </div>
    <!-- Info -->
    <div class="">
      <p>{{ event }}</p>
      <p>{{ loc }}</p>
    </div>
    <!-- Tickets -->
    <a :href="linkTicket" class="flex font-dateFont cursor-pointer">Tickets</a>
  </div>
</template>
