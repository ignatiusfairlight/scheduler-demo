<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
</script>

<Dialog.Root>
  <Dialog.Trigger class={buttonVariants({ variant: "outline"})}>Create New Event</Dialog.Trigger>   
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title class="text-2xl font-semibold">Create New Event</Dialog.Title>
      </Dialog.Header>
      <div class="grid gap-4 py-5">
        <!--Title-->
        <div class="grid gap-2">
          <Label for="title" class="block mb-1 font-medium">Title</Label>
          <Input id="title" type="text" class="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <!--Start date and time-->
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <Label for="start-date" class="block text-sm font-medium mb-1">Start Date</Label>
            <Input id="start-date" type="date" class="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <Label for="start-time" class="block text-sm font-medium mb-1">Start Time</Label>
            <Input id="start-time" type="time" class="w-full rounded-md border border-gray-300 p-2" />
          </div>
        </div>
        <!--End date and time-->
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <Label for="end-date" class="block text-sm font-medium mb-1">End Date</Label>
            <Input id="end-date" type="date" class="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <Label for="end-time" class="block text-sm font-medium mb-1">End Time</Label>
            <Input id="end-time" type="time" class="w-full rounded-md border border-gray-300 p-2" />
          </div>
        </div>
        <!--Location-->
        <div class="grid gap-2">
          <Label for="location" class="block mb-1 font-medium">Location</Label>
          <Input id="location" type="text" class="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <Dialog.Footer class="mt-4 flex justify-end gap-2">
        <Button variant="outline">Save</Button>
        <Button variant="destructive">Cancel</Button>
      </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
