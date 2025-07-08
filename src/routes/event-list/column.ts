import type { ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "$lib/components/ui/data-table";
import DataTableActions from "./data-table-actions.svelte";

export type Event = {
    id: string;
    title: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    location: string;
};

export const columns: ColumnDef<Event>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "startDate",
        header: "Start Date",
    },
    {
        accessorKey: "startTime",
        header: "Start Time",
    },
    {
        accessorKey: "endDate",
        header: "End Date",
    },
    {
        accessorKey: "endTime",
        header: "Time Date",
    },
    {
        accessorKey: "location",
        header: "Location",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return renderComponent(DataTableActions, { id: row.original.id });
        }
    },
];