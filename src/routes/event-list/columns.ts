import type { ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "$lib/components/ui/data-table";
import DataTableActions from "./data-table-actions.svelte";
import DataTableStartDateButton from "./data-table-start-date-button.svelte";
import DataTableStartTimeButton from "./data-table-start-time-button.svelte";
import DataTableEndDateButton from "./data-table-end-date-button.svelte";
import DataTableEndTimeButton from "./data-table-end-time-button.svelte";

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
    header: ({ column }) =>
      renderComponent(DataTableStartDateButton, {
        onclick: column.getToggleSortingHandler(),
      }),
  },
  {
    accessorKey: "startTime",
    header: ({ column }) =>
      renderComponent(DataTableStartTimeButton, {
        onclick: column.getToggleSortingHandler(),
      }),
  },
  {
    accessorKey: "endDate",
    header: ({ column }) =>
      renderComponent(DataTableEndDateButton, {
        onclick: column.getToggleSortingHandler(),
      }),
  },
  {
    accessorKey: "endTime",
    header: ({ column }) =>
      renderComponent(DataTableEndTimeButton, {
        onclick: column.getToggleSortingHandler(),
      }),
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
