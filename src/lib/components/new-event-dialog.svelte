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
        <Dialog.Title>Create New Event</Dialog.Title>
      </Dialog.Header>
      <div class="grid gap-4 py-5">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="title" class="text-right">Title</Label>
          <Input id="title" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">Username</Label>
          <Input id="username" class="col-span-3" />
        </div>
      </div>
      <Dialog.Footer>
        <Button variant="outline">Save</Button>
        <Button variant="destructive">Cancel</Button>
      </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
