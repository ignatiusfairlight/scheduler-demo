<script lang="ts">
  import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";

  let { id }: { id: string } = $props();
  let showEditDialog = $state(false);
  let showDeleteDialog = $state(false);

  function openEditDialog() {
    showEditDialog = true;
  }

  function closeEditDialog() {
    showEditDialog = false;
  }

  function openDeleteDialog() {
    showDeleteDialog = true;
  }

  function closeDeleteDialog() {
    showDeleteDialog = false;
  }
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="ghost"
        size="icon"
        class="relative size-8 p-0"
      >
        <span class="sr-only">Open menu</span>
        <EllipsisIcon />
      </Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onclick={openEditDialog}>Edit</DropdownMenu.Item>
    <DropdownMenu.Item onclick={openDeleteDialog}>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>

<Dialog.Root
  open={showEditDialog}
  onOpenChange={(open) => (showEditDialog = open)}
>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title class="text-2xl font-semibold">Edit Event</Dialog.Title>
    </Dialog.Header>
    <div class="grid gap-4 py-5">
      <!--Title-->
      <div class="grid gap-2">
        <Label for="title" class="block mb-1 font-medium">Title</Label>
        <Input
          id="title"
          type="text"
          class="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <!--Start date and time-->
      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <Label for="start-date" class="block text-sm font-medium mb-1"
            >Start Date</Label
          >
          <Input
            id="start-date"
            type="date"
            class="w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div>
          <Label for="start-time" class="block text-sm font-medium mb-1"
            >Start Time</Label
          >
          <Input
            id="start-time"
            type="time"
            class="w-full rounded-md border border-gray-300 p-2"
          />
        </div>
      </div>
      <!--End date and time-->
      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <Label for="end-date" class="block text-sm font-medium mb-1"
            >End Date</Label
          >
          <Input
            id="end-date"
            type="date"
            class="w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div>
          <Label for="end-time" class="block text-sm font-medium mb-1"
            >End Time</Label
          >
          <Input
            id="end-time"
            type="time"
            class="w-full rounded-md border border-gray-300 p-2"
          />
        </div>
      </div>
      <!--Location-->
      <div class="grid gap-2">
        <Label for="location" class="block mb-1 font-medium">Location</Label>
        <Input
          id="location"
          type="text"
          class="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <Dialog.Footer class="mt-4 flex justify-end gap-2">
      <Button>Save</Button>
      <Button variant="destructive" onclick={closeEditDialog}>Cancel</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>

<Dialog.Root
  open={showDeleteDialog}
  onOpenChange={(open) => (showDeleteDialog = open)}
>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title class="text-2xl font-semibold">Are you sure?</Dialog.Title>
    </Dialog.Header>
    <Dialog.Description>
      This action cannot be undone and will permanently delete this event from
      the database.
    </Dialog.Description>
    <Dialog.Footer class="mt-4 flex justify-end gap-2">
      <Button variant="destructive">Delete</Button>
      <Button onclick={closeDeleteDialog}>Cancel</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
