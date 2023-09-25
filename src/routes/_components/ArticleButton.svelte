<script lang="ts">
	import { ArrowRightIcon } from 'svelte-feather-icons';
	import { fly, slide } from 'svelte/transition';

	export let title: string;
	export let description: string = '';
	export let link: string;

	let show: boolean = false;
</script>

<div class="flex flex-col gap-2 w-full">
	<span class="text-lg text-left">
		{description}
	</span>
	<a
		class="py-2 px-4 flex items-center justify-between border-2 border-darkred-500 rounded-lg bg-surface-400 ml-2 font-semibold text-lg"
		on:mouseenter={() => (show = true)}
		on:mouseleave={() => (show = false)}
		href={link}
		target="_blank"
	>
		<div
			class={`transition-colors duration-500 flex items-center ${
				show ? 'text-redorange-600' : 'text-amber-950'
			}`}
		>
			{#if show}
				<div transition:slide={{ delay: 250, duration: 300, axis: 'x' }}>
					<ArrowRightIcon />
				</div>
			{/if}
			<!-- <a href={link} class="ml-2 font-semibold text-lg" target="_blank"> -->
			{title}
			<!-- </a> -->
		</div>
		{#if !show}
			<div transition:slide={{ delay: 250, duration: 300, axis: 'x' }}>
				<ArrowRightIcon />
			</div>
		{/if}
	</a>
</div>
