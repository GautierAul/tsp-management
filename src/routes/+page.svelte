<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import ProfilesList from './_components/Profiles/ProfilesList.svelte';
	import Separator from './_components/Separator.svelte';
	import { footerHeight, headerHeight, screenHeight } from '$lib/stores';
	import Formules from './_components/Formules/Formules.svelte';

	let loaded: boolean = false;
	onMount(() => {
		loaded = true;
	});

	$: height = $screenHeight - ($headerHeight * 2 + $footerHeight);
</script>

<div id="home" class="flex flex-col items-center" transition:fade>
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
				<h1 class="text-4xl font-bold">Team Spirit & Performance</h1>
				<h1 class="text-2xl font-semibold">
					Augmentez votre impact managerial pour booster vos performances collectives
				</h1>
				<a href="/FLYER_TSP.pdf" class="underline text-lg" download>Télécharger mon flyer</a>
			</div>
		{/if}
	</div>
	<!-- <Separator /> -->
	<div class="w-full bg-surface-600 flex justify-center">
		<div class="flex flex-col md:w-2/3 w-full p-8 items-center gap-4 text-center bg-surface-600">
			<h2 class="text-2xl font-medium">Pourquoi les pompiers réussissent toujours face au feu ?</h2>

			<span>
				Dans l’environnement Sapeurs-Pompiers la capacité à s’adapter, le mental, la cohésion, et la
				confiance sont les clés de la réussite. Cependant, du management au commandement lors de la
				phase opération, le socle repose sur un ensemble maîtrisé de postures et de méthodes
				managériales adaptées.
			</span>
		</div>
	</div>
	<Separator />
	<ProfilesList />
	<Separator />
	<div class="bg-surface-600 w-full flex justify-center p-8">
		<h3 class="italic w-2/3 text-center text-lg">
			"Passionné par l’humain et la force du collectif; mon but et de faire grandir chacun et tous
			en soutenant les relations humaines dans l’objectif d’atteindre de meilleurs niveaux de
			performances."
		</h3>
	</div>
	<Separator />
</div>

<style lang="postcss">
	#home {
		background-image: url('/photo_main.jpg');
	}
</style>
