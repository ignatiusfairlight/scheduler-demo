<script>
	import Calendar from '$lib/components/calendar.svelte';
	import * as Table from '$lib/components/ui/table/index.js';

	const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card"
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal"
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer"
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card"
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal"
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer"
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card"
    }
  ];
</script>

<h1>This is home</h1>

<main>
	<Calendar />
	<div class="table-container">
		<Table.Root>
			<Table.Caption>List of Upcoming Events</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Cell>Invoice</Table.Cell>
					<Table.Cell>Status</Table.Cell>
					<Table.Cell>Method</Table.Cell>
					<Table.Cell>Amount</Table.Cell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each invoices as invoice (invoice)}
				<Table.Row>
					<Table.Cell>{invoice.invoice}</Table.Cell>
					<Table.Cell>{invoice.paymentStatus}</Table.Cell>
					<Table.Cell>{invoice.paymentMethod}</Table.Cell>
					<Table.Cell>{invoice.totalAmount}</Table.Cell>
				</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1rem;
	}
</style>
