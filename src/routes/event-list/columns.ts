import type { ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "$lib/components/ui/data-table";
import DataTableActions from "./data-table-actions.svelte";
import DataTableTitleButton from "./data-table-title-button.svelte";

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
    header: ({ column }) =>
      renderComponent(DataTableTitleButton, {
        onclick: column.getToggleSortingHandler(),
      }),
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
    header: "End Time",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return renderComponent(DataTableActions, { id: row.original.id });
    },
  },
];
