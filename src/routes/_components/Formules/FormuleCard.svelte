<script lang="ts">
	import type { Formule } from '$lib/DB';
	import { ArrowRightCircleIcon, ChevronDownIcon, ChevronUpIcon } from 'svelte-feather-icons';
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
</script>

{#if bgTextColor}
	<div
		class={`flex flex-col items-center justify-between p-8 w-full ${
			index === 1 ? 'border-2' : 'border'
		} ${borderColor} ${index === 1 ? 'bg-surface-400 ' : 'bg-surface-200 '} rounded gap-2`}
	>
		<div class="relative w-fit group">
			<h3
				class={`absolute z-10 group-hover:scale-105 group-hover:-bottom-1 transition-all bottom-0 left-0 w-full ${bgTextColor} text-center px-2 py-1 rounded text-white`}
			>
				{formule.title}
			</h3>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				src={formule.image}
				alt="profil d'hervé"
				class={`group-hover:scale-105 transition rounded-full ${index === 1 ? 'h-40' : 'h-32'} ${
					index === 1 ? 'w-40' : 'w-32'
				} border-4 ${borderColor}`}
				on:click={() => {
					showModal = true;
				}}
			/>
		</div>
		<div class="flex flex-col gap-2">
			<span class="font-medium">{formule.objective}</span>
			<span>Durée : {formule.duration}</span>
			<span>Format: {formule.format}</span>
		</div>
		<div class="flex justify-center">
			<button
				class="cursor-pointer flex items-center justify-center gap-2 rounded-lg w-fit px-4 py-2 bg-surface-600 font-medium border border-surface-700"
				on:click={() => {
					showModal = !showModal;
				}}
			>
				<span> Plus d'information </span>
				<ArrowRightCircleIcon />
			</button>
		</div>
	</div>
{/if}

<ModaleFormuleDetails {formule} bind:showModal />
