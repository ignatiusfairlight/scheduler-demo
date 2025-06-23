<script>
    import {Calendar, DayGrid, TimeGrid} from '@event-calendar/core';

    let plugins = [DayGrid, TimeGrid];
    let options = $state({
        height: "100%",
        headerToolbar: {
            start:'today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay prev,next' 
        },
        view: 'dayGridMonth',
        events: [
            // your list of events
        ]
    });
</script>

<Calendar {plugins} {options} />