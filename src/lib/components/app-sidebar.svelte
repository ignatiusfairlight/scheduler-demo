<script>
    import HouseIcon from "@lucide/svelte/icons/house";
    import InboxIcon from "@lucide/svelte/icons/inbox";
    import * as Sidebar from "$lib/components/ui/sidebar/index";
    
    const { setOpenMobile } = Sidebar.useSidebar();
    const items = [
        {
            title: "Home",
            url: ".",
            icon: HouseIcon,
        },
        {
            title: "Inbox",
            url: "inbox",
            icon: InboxIcon,
        },
    ];
</script>

<Sidebar.Root collapsible="icon">
    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    {#each items as item (item.title)}
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton>
                                {#snippet child({ props })}
                                    <a href={item.url} onclick={() => setOpenMobile(false)} {...props}>
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
