<script>
  import Calendar from "$lib/components/calendar.svelte";
  import * as Table from "$lib/components/ui/table/index.js";
</script>

<main>
  <div>
    <Calendar />
  </div>
  
  <div>
    <Table.Root>
      <Table.Caption>Upcoming Events</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head class="w-[100px]">Title</Table.Head>
          <Table.Head>Start Date</Table.Head>
          <Table.Head>Start Time</Table.Head>
          <Table.Head>End Date</Table.Head>
          <Table.Head>End Time</Table.Head>
          <Table.Head class="text-right">Location</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell class="font-medium">Jogging Day</Table.Cell>
          <Table.Cell>17 July 2025</Table.Cell>
          <Table.Cell>9:00 AM</Table.Cell>
          <Table.Cell>20 July 2025</Table.Cell>
          <Table.Cell>12:00 AM</Table.Cell>
          <Table.Cell class="text-right">Home</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  </div>
</main>
