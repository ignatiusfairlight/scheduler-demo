<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<caption
	bind:this={ref}
	data-slot="table-caption"
	class={cn("text-2xl font-semibold mb-4", className)}
	{...restProps}
>
	{@render children?.()}
</caption>
