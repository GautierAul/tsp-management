<script lang="ts">
	import type { Review } from '$lib/DB';
	import { ChevronDownIcon, ChevronUpIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';

	export let review: Review;

	let show: boolean = false;
</script>

<div class="flex flex-col border border-darkred-500 rounded-lg w-full md:w-[49%] h-fit">
	<button
		class={`group flex gap-2 text-left items-center justify-between h-[120px] p-4 rounded-lg hover:bg-surface-500 transition-colors duration-300
        ${show ? 'bg-surface-500' : 'bg-white'}`}
		on:click={() => {
			show = !show;
		}}
	>
		<div class="flex flex-col gap-2 w-10/12">
			<span class="font-semibold">{review.name} - {review.poste}</span>
			<span class="font-normal">{review.company}</span>
		</div>

		<div class="group-hover:animate-pulse">
			{#if show}
				<ChevronUpIcon />
			{:else}
				<ChevronDownIcon />
			{/if}
		</div>
	</button>
	{#if show}
		<span class="border-t border-black p-6 text-justify" transition:slide>{review.content}</span>
	{/if}
</div>
