<script lang="ts">
	import { fade } from 'svelte/transition';
	import Loader from './Loader.svelte';

	export let type: 'primary' | 'secondary' | 'tertiary' = 'primary';

	export let buttonType: 'button' | 'reset' | 'submit' | null | undefined = 'button';
	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let customBg: string = '';

	let bgColor: string = '';

	$: if (!customBg) {
		switch (type) {
			case 'primary':
				bgColor = 'bg-darkred-500 hover:bg-darkred-400 border border-surface-900 text-white';
				break;
			case 'secondary':
				bgColor =
					'bg-surface-500 hover:bg-surface-400 text-darkred-500 border border-darkred-500 font-semibold';
				break;
			case 'tertiary':
				bgColor = 'bg-transparent hover:text-darkred-400 underline text-darkred-500';
				break;
			default:
				bgColor = 'bg-darkred-500 hover:bg-darkred-400';
				break;
		}
	} else {
		bgColor = customBg;
	}
</script>

<button
	class={'w-fit px-4 py-2 transition-colors duration-500 rounded-full text-base flex gap-2  ' +
		bgColor +
		' ' +
		(loading || disabled ? 'bg-opacity-80' : '')}
	on:click
	on:submit
	on:mousedown
	type={buttonType}
	disabled={loading || disabled}
	transition:fade={{ duration: 250 }}
>
	<slot />
	{#if loading}
		<Loader />
	{/if}
</button>
