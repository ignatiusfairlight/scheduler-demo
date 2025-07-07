<script>
  import Calendar from "$lib/components/calendar.svelte";
  import * as Table from "$lib/components/ui/table/index.js";
</script>

<h2 class="mt-5 ml-10 text-4xl font-semibold mb-4">Home</h2>

<div class="flex gap-10 p-10">
  <div class="flex-2">
    <Calendar />
  </div>

  <div class="flex-1 overflow-x-auto">
    <Table.Root>
      <Table.Caption>Upcoming Events</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head class=w-[100px]>Title</Table.Head>
          <Table.Head class="text-center">Date</Table.Head>
          <Table.Head class="text-center">Time</Table.Head>
          <Table.Head class="text-right">Location</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Jogging Day</Table.Cell>
          <Table.Cell class="text-center">17 July 2025</Table.Cell>
          <Table.Cell class="text-center">9:00 AM</Table.Cell>
          <Table.Cell class="text-right">Home</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  </div>
</div>



