<script lang="ts">
    import DataTable from "./data-table.svelte";
    import { columns } from "./column.js";

    let { data } = $props();
</script>

<h2 class="mt-5 ml-10 text-4xl font-semibold mb-4">Event List</h2>

<div class="p-10">
    <DataTable data={data.event} {columns} />
</div>
