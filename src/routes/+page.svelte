<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import ProfilesList from './_components/Profiles/ProfilesList.svelte';
	import Separator from './_components/Separator.svelte';
	import { footerHeight, headerHeight, screenHeight } from '$lib/stores';

	let title: string = 'Team Spirit & Perfomrance';

	let loaded: boolean = false;
	onMount(() => {
		loaded = true;
	});

	$: height = $screenHeight - ($headerHeight * 2 + $footerHeight);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
{#if $headerHeight > 0 && height}
	<div class="flex flex-col items-center">
		<div
			id="home"
			class={`flex items-center justify-center w-full text-white shadow-md shadow-gray-500`}
			style="height: {height}px; background-size: cover; background-position: center;"
		>
			{#if loaded}
				<div
					class={`flex flex-col gap-4 items-center justify-center bg-black bg-opacity-40 p-8 w-full text-center`}
					transition:slide={{ delay: 250, duration: 1000 }}
				>
					<span class="text-4xl font-bold">Team Spirit & Performance</span>
					<span class="text-2xl font-semibold">
						Augmentez votre impact managerial pour vos performances collectives
					</span>
				</div>
			{/if}
		</div>
		<div class="flex flex-col md:w-2/3 w-full p-8 items-center gap-4 text-center">
			<span class="text-2xl font-medium"
				>Pourquoi les pompiers réussissent toujours face au feu ?</span
			>
			<span>
				Conférences, formations et entrainements managériaux innovants à destination des dirigeants
				Et des managers dans tous les domaines d’activité.
			</span>
			<span>
				Dans l’environnement Sapeurs-Pompiers la capacité à s’adapter, le mental, la cohésion, et la
				confiance sont les clés de la réussite. Cependant, du management au commandement lors de la
				phase opération, le socle repose sur un ensemble maîtrisé de postures et de méthodes
				managériales adaptées.
			</span>
		</div>
		<Separator />
		<ProfilesList />
		<div class="bg-surface-500 w-full flex justify-center p-8">
			<span class="italic w-2/3 text-center text-lg">
				"Passionné par l’humain et la force du collectif; mon but et de faire grandir chacun et tous
				en soutenant les relations humaines dans l’objectif d’atteindre de meilleurs niveaux de
				performances."
			</span>
		</div>
	</div>
{/if}

<style lang="postcss">
	#home {
		background-image: url('/firemen-team.png');
	}
</style>
