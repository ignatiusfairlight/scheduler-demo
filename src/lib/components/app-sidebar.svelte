<script lang="ts">
  import HouseIcon from "@lucide/svelte/icons/house";
  import CalendarIcon from "@lucide/svelte/icons/calendar";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  const { setOpenMobile } = Sidebar.useSidebar();

  const items = [
    {
      title: "Home",
      url: "./",
      icon: HouseIcon,
    },
    {
      title: "Event List",
      url: "event-list",
      icon: CalendarIcon,
    },
  ];
</script>

<Sidebar.Root variant="floating" collapsible="icon">
  <Sidebar.Header />
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a
                    href={item.url}
                    {...props}
                    onclick={() => setOpenMobile(false)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
