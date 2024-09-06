<script lang="ts">
	import type { Distinction } from '$lib/DB';
	import { ChevronRightIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';

	export let distinction: Distinction;

	let opened: boolean = false;
</script>

<a
	href={distinction.link}
	class="bg-surface-500 shadow-sm shadow-surface-800 border border-black rounded-xl p-2 flex justify-between gap-4 items-center group w-fit"
	target="_blank"
	on:mouseenter={() => (opened = true)}
	on:mouseleave={() => (opened = false)}
>
	<span> {distinction.title} d</span>
	<div class="border border-surface-800 rounded-full flex items-center gap-1 px-2">
		{#if opened}
			<span class="pb-[0.2px] text-sm" transition:slide={{ axis: 'x' }}> Voir </span>
		{/if}
		<div class="group-hover:rotate-[360deg] transition-all duration-700">
			<ChevronRightIcon />
		</div>
	</div>
</a>
