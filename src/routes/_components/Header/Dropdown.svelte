<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ChevronDownIcon, ChevronUpIcon } from 'svelte-feather-icons';
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

	const containedLinks = item.items?.map((item) => item.link)!;
</script>

<div class="flex flex-col">
	{#if item.items}
		<button
			class={`flex flex-row items-center justify-center gap-2 p-2 transition-colors duration-300 rounded-t-lg hover:bg-surface-600 
			${containedLinks.includes($page.route.id) ? subActiveClass : ''}
			${show ? 'bg-surface-600' : 'bg-white'}`}
			on:click={() => {
				show = !show;
			}}
		>
			<span>{item.title}</span>
			{#if show}
				<ChevronUpIcon />
			{:else}
				<ChevronDownIcon />
			{/if}
		</button>
		<div class="relative w-full h-full z-50">
			{#if show}
				<div
					class="absolute -top-full right-0 shadow-lg shadow-gray-800 w-[250px] flex flex-col gap-2 bg-surface-400 rounded-b rounded-l p-2 border-2 border-surface-700"
					transition:slide
				>
					{#each item.items as headerItem}
						<button
							class={`flex flex-row items-center justify-center gap-2 p-2 transition-all duration-300 hover:bg-surface-600 rounded-xl ${
								$page.route.id === headerItem.link ? activeClass : ''
							}`}
							on:click={() => {
								show = !show;
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
