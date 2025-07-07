<script>
  import { Calendar, DayGrid, TimeGrid } from "@event-calendar/core";

  let plugins = [DayGrid, TimeGrid];
  let options = $state({
    height: "75dvh",
    headerToolbar: {
      start: "today",
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay prev,next",
    },
    view: "dayGridMonth",

    //Change this to interact with data (use eventSource)
    events: [
      {
        title: "Jogging Day",
        start: "2025-7-17T09:00",
        end: "2025-7-20T10:00",
      },
      {
        title: "Running Day",
        start: "2025-7-25T09:00",
        end: "2025-7-25T10:00",
      },
    ],
  });
</script>

<Calendar {plugins} {options} />
