<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<Sidebar.Provider
	style="--sidebar-width: calc(var(--spacing) * 60); --header-height: calc(var(--spacing) * 12);"
>
	<AppSidebar variant="sidebar" />
	<Sidebar.Inset>
		<SiteHeader />
		<main>
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>

<style>
	main {
		padding: 1rem;
	}
</style>
