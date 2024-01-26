<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import ProfilesList from './_components/Profiles/ProfilesList.svelte';
	import Separator from './_components/Separator.svelte';
	import { footerHeight, headerHeight, hideScreen, screenHeight } from '$lib/stores';
	import Button from './_components/Button.svelte';

	let loaded: boolean = false;

	onMount(() => {
		loaded = true;
	});

	$: maxHeight = $screenHeight - ($headerHeight * 2 + $footerHeight);

	let isReduced = false;
	function reduceSize() {
		isReduced = true;
	}

	$: if (!$hideScreen) {
		isReduced = true;
	}
</script>

<div id="home" class="flex flex-col items-center" transition:fade>
	<div
		id="home"
		class={`flex items-center justify-center w-full text-white shadow-md shadow-gray-500 h-screen transition-all duration-500`}
		class:reduced={isReduced && loaded}
		style={`background-size: cover; background-position: center; --max-height: ${maxHeight}px;`}
	>
		{#if loaded}
			<div
				class={`flex flex-col gap-4 items-center justify-center bg-black bg-opacity-40 p-8 w-full text-center`}
			>
				<h1 class="text-4xl font-bold">Hervé Aulner - Team Spirit & Performance</h1>
				<h1 class="text-2xl font-semibold">
					Augmentez votre impact managerial pour booster vos performances collectives
				</h1>
				<div class="flex flex-col gap-2 items-center">
					{#if $hideScreen}
						<button
							class="bg-gradient-to-tr from-darkred-500 to-darkred-400 text-white px-4 py-2 rounded-full font-semibold bg-pan-tl"
							on:click={() => {
								reduceSize();
								$hideScreen = false;
							}}
						>
							Découvrir
						</button>
					{/if}
					<Button>
						<a href="/FLYER_TSP.pdf" download>Télécharger mon flyer</a>
					</Button>
				</div>
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
	<div class="bg-surface-500 w-full flex justify-center p-8" />
</div>
<!-- Used for serving image for og:image meta tag -->
<a href="/logo-cut.png" download />

<style lang="postcss">
	#home {
		background-image: url('/photo_main.jpg');
	}

	.reduced {
		transition: height 0.5s ease-in-out;
		height: var(--max-height);
	}

	.bg-pan-tl {
		-webkit-animation: bg-pan-tl 2s ease-in-out infinite alternate both;
		animation: bg-pan-tl 3s ease-in-out infinite alternate both;
		background: linear-gradient(-45deg, #9e2a2b, #335c67);
		background-size: 400% 400%;
		/* animation: gradient 15s ease infinite; */
	}

	@-webkit-keyframes bg-pan-tl {
		0% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0 0;
		}
	}
	@keyframes bg-pan-tl {
		0% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0 0;
		}
	}
</style>
