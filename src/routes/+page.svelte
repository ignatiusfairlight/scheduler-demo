<script>
	import Calendar from '$lib/components/calendar.svelte';
</script>

<h1>This is home</h1>

<main>
	<Calendar />
	<div>Insert Shadcd </div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1rem;
	}
</style>
