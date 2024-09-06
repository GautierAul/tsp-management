<script lang="ts">
	import type { Review } from '$lib/DB';
	import { createEventDispatcher } from 'svelte';
	import { ChevronDownIcon, ChevronUpIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';

	export let review: Review;
	export let show: boolean = false;

	const dispatch = createEventDispatcher();
</script>

<div class="relative flex flex-col border border-darkred-500 rounded-lg w-full md:w-[49%] h-fit">
	<button
		class={`group flex gap-2 text-left items-center justify-between h-[120px] p-4 rounded-lg hover:bg-surface-500 transition-colors duration-300
        ${show ? 'bg-surface-500' : 'bg-white'}`}
		on:click={() => {
			dispatch('open');
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
		<span
			class="absolute top-full left-0 z-10 border border-black p-6 text-justify bg-surface-300 scale-[1.02] rounded-lg shadow-2xl"
			transition:slide>{review.content}</span
		>
	{/if}
</div>
