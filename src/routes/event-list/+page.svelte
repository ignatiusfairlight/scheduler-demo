<script lang="ts">
    import DataTable from "./data-table.svelte";
    import { columns } from "./column.js";

    let { data } = $props();
</script>

<DataTable data={data.event} {columns} />