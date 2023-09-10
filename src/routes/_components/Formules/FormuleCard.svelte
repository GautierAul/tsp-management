<script lang="ts">
	import type { Formule } from '$lib/DB';
	import ModaleFormuleDetails from './ModaleFormuleDetails.svelte';

	export let formule: Formule;
	export let index: number;

	let showModal: boolean = false;

	const getColors = (index: number): string => {
		switch (index) {
			case 0:
				return 'bg-redorange-500';
			case 1:
				return 'bg-lightred-400';
			case 2:
				return 'bg-darkred-500';
			default:
				return 'bg-redorange-500';
		}
	};

	const getBorderColors = (index: number): string => {
		switch (index) {
			case 0:
				return 'border-redorange-500';
			case 1:
				return 'border-lightred-400';
			case 2:
				return 'border-darkred-500';
			default:
				return 'border-redorange-500';
		}
	};
	const bgTextColor: string = getColors(index);
	const borderColor: string = getBorderColors(index);

	$: console.log(index, showModal);
</script>

{#if bgTextColor}
	<div
		class={`flex flex-col items-center p-8 bg-surface-200 w-full ${
			index === 1 ? 'border-2' : 'border'
		} ${borderColor} rounded gap-2`}
	>
		<div class="relative w-fit group">
			<span
				class={`absolute z-10 group-hover:scale-105 group-hover:-bottom-1 transition-all bottom-0 left-0 w-full ${bgTextColor} text-center px-2 py-1 rounded text-white`}
			>
				{formule.title}
			</span>
			<img
				src="/foracc.jpg"
				alt="profil d'hervé"
				class={`group-hover:scale-105 transition rounded-full ${index === 1 ? 'h-40' : 'h-32'} ${
					index === 1 ? 'w-40' : 'w-32'
				} border-4 ${borderColor}`}
			/>
		</div>
		<span class="font-light">{formule.objective}</span>
		<span class="">Durée : {formule.duration}</span>
		<button
			class="underline cursor-pointer"
			on:click={() => {
				showModal = true;
			}}>Plus d'information</button
		>
	</div>
{/if}

<ModaleFormuleDetails {formule} bind:showModal />
