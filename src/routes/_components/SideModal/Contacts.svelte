<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { showContact } from '$lib/stores';
</script>

{#if $showContact}
	<div
		class="absolute top-0 left-0 flex flex-row z-50 w-full h-full bg-black bg-opacity-20 overflow-hidden"
		transition:fade
	>
		<div
			class="w-10/12 md:w-2/3 lg:w-1/2 bg-surface-500 flex flex-col justify-between p-4"
			transition:fly={{ x: -1000, duration: 300 }}
		>
			<div class="flex flex-col">
				<h2 class="font-semibold text-xl">Mes contacts</h2>
			</div>
			<div class="flex justify-end">
				<button
					class="bg-darkred-500 px-4 py-2 rounded-full text-white w-fit"
					on:click={() => ($showContact = false)}
				>
					Fermer
				</button>
			</div>
		</div>

		<div class="grow">
			<button class="w-full h-full" on:click={() => ($showContact = false)} />
		</div>
	</div>
{/if}
