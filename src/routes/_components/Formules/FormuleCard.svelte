<script lang="ts">
	import type { Formule } from '$lib/DB';

	export let formule: Formule;
	export let index: number;

	const getColors = (index: number): string => {
		switch (index) {
			case 0:
				return 'redorange-500';
			case 1:
				return 'lightred-400';
			case 2:
				return 'darkred-500';
			default:
				return 'redorange-500';
		}
	};
	const bgTextColor: string = getColors(index);
</script>

{#if bgTextColor}
	<div class="flex flex-col items-center p-8 bg-surface-200 w-full">
		<div class="relative w-full">
			<span
				class={`absolute bottom-0 left-0 w-full bg-${bgTextColor} text-center px-2 py-1 rounded text-white`}
			>
				{formule.title}
			</span>
			<img
				src="/foracc.jpg"
				alt="profil d'hervé"
				class={`rounded-full h-32 w-32 border-4 border-${bgTextColor}`}
			/>
		</div>
	</div>
{/if}
