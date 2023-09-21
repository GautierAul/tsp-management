<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	type headerItem = {
		title: string;
		link?: string;
		items?: headerItem[];
	};

	export let item: headerItem;

	let show: boolean = false;

	let activeClass = 'font-bold';
	let subActiveClass = 'font-semibold';

	const containedLinks = item.items?.map((item) => item.link);
</script>

<div class="flex flex-col">
	{#if item.items}
		<button
			class={`flex flex-row items-center justify-center gap-2 p-2 transition-colors duration-300 rounded-t-lg hover:bg-surface-600 
			${containedLinks?.includes($page.url.pathname) ? subActiveClass : ''}
			${show ? 'bg-surface-600' : 'bg-white'}`}
			on:click={() => {
				show = !show;
			}}
		>
			<span>{item.title}</span>
		</button>
		<div class="relative w-full h-full">
			{#if show}
				<div
					class="absolute -top-full right-0 shadow-lg shadow-gray-800 w-[250px] flex flex-col gap-2 bg-surface-500 rounded-b rounded-l p-2 border-2 border-surface-700"
					transition:slide
				>
					{#each item.items as headerItem}
						<button
							class={`flex flex-row items-center justify-center gap-2 p-2 transition-all hover:bg-surface-600 ${
								$page.url.pathname === headerItem.link ? activeClass : ''
							}`}
							on:click={() => {
								headerItem.link && goto(headerItem.link);
							}}
						>
							<span>{headerItem.title}</span>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>
