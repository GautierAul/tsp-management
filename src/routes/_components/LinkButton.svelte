<script lang="ts">
	import { ArrowRightIcon } from 'svelte-feather-icons';
	import { fly, slide } from 'svelte/transition';

	export let title: string;
	export let description: string = '';
	export let link: string;

	let show: boolean = false;
</script>

<div class="flex flex-col w-full py-4">
	<div class="flex flex-col">
		<span class="relative text-lg text-left p-2 rounded-lg">
			{description}
		</span>
		<!-- <div class="ml-20 w-11 overflow-hidden">
			<div class="h-4 w-11 bg-lightred-500 -rotate-45 origin-top-left" />
		</div> -->
	</div>
	<a
		class="py-2 px-4 flex items-center justify-between border-2 border-darkred-500 rounded-lg bg-surface-400 ml-2 font-semibold text-lg"
		on:mouseenter={() => (show = true)}
		on:mouseleave={() => (show = false)}
		target="_blank"
		href={link}
	>
		<div
			class={` transition-colors duration-500 flex items-center ${
				show ? 'text-redorange-600' : 'text-amber-950'
			}`}
		>
			{#if show}
				<div transition:slide={{ delay: 250, duration: 300, axis: 'x' }}>
					<ArrowRightIcon />
				</div>
			{/if}
			<!-- <a class="ml-2 font-semibold text-lg"> -->
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
