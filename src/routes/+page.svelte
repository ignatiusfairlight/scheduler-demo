<script>
  import Calendar from "$lib/components/calendar.svelte";
  import * as Table from "$lib/components/ui/table/index.js";
</script>

<h2 class="mt-5 ml-10 text-4xl font-semibold mb-4">Home</h2>

<div class="flex flex-col xl:flex-row gap-10 p-4 xl:p-10">
  <div class="flex-grow xl:basis-2/3 xl:pr-4">
      <Calendar />
  </div>

  <!--This table should only show 10 upcoming events-->
  <div class="flex-grow xl:basis-1/3 min-w-0">
    <div class="w-full overflow-hidden">
      <Table.Root class="w-full">
        <Table.Caption>Upcoming Events</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-[100px] truncate">Title</Table.Head>
            <Table.Head class="text-center truncate">Date</Table.Head>
            <Table.Head class="text-center truncate">Time</Table.Head>
            <Table.Head class="text-right truncate">Location</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell class="truncate">Jogging Day</Table.Cell>
            <Table.Cell class="text-center truncate">17 July 2025</Table.Cell>
            <Table.Cell class="text-center truncate">9:00 AM</Table.Cell>
            <Table.Cell class="text-right truncate">Home</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  </div>
</div>



