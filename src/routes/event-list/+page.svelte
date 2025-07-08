<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import DataTable from "./data-table.svelte";
    import { columns } from "./column.js";

    let { data } = $props();
</script>

<h2 class="mt-5 ml-10 text-4xl font-semibold mb-4">Event List</h2>


<div class="flex flex-col gap-5 p-10">
    <div class="flex justify-end">
        <Button variant="outline">Create New Event</Button>
    </div>
    <div>
        <DataTable data={data.event} {columns} />
    </div> 
</div>
