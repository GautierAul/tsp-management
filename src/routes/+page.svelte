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
		class={`flex flex-col items-center justify-center w-full text-white shadow-md shadow-gray-500 h-screen transition-all duration-500`}
		class:reduced={isReduced && loaded}
		style={`--max-height: ${maxHeight}px; background-image: url('/photo_main.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center;`}
	>
		<!-- class={`flex flex-col gap-4 items-center justify-center bg-black bg-opacity-40 p-8 w-full text-center`} -->
		<!-- {#if loaded} -->
		<!-- <h1 class="text-4xl font-bold">Hervé Aulner - Team Spirit & Performance</h1>
				<h1 class="text-2xl font-semibold">
					Augmentez votre impact managerial pour booster vos performances collectives
				</h1> -->

		<div
			class="flex flex-col items-center justify-center text-center w-full grow font-semibold bg-black bg-opacity-50"
		>
			<h1 class="text-2xl font-bold text-gradient">2 enjeux majeurs</h1>
			<h2 class="text-lg underline">Agilité et engagement collaborateurs</h2>
			<h2 class="mt-4">
				Augmentez votre impact managérial pour booster vos performances collectives
			</h2>
		</div>
		<div class="relative p-2 grow w-full bg-black bg-opacity-50">
			<img
				src="/herve-dir.png"
				alt="Logo"
				class="h-56 md:h-60 aspect-auto absolute -top-10 md:-top-5 left-1 md:left-1/4 bg-gradient-to-tr from-[#53a3d4] from-10% to-darkred-400/70 rounded-full"
			/>
			<img
				src="/herve-dessin-pompier.png"
				alt="Logo"
				class="h-52 md:h-60 aspect-auto absolute -bottom-10 md:-bottom-5 right-1 md:right-1/4 bg-gradient-to-tl from-darkred-400 from-50% to-[#53a3d4]/70 rounded-full"
			/>
			<div class="flex flex-col gap-2 items-center justify-center w-full h-full p-4 rounded-3xl">
				{#if $hideScreen}
					<button
						class="bg-gradient-to-tr from-darkred-500 to-darkred-400 text-white px-4 py-2 rounded-full font-semibold bg-pan-tl"
						on:click={() => {
							reduceSize();
							$hideScreen = false;
						}}
					>
						Accéder au site
					</button>
				{/if}
				<Button>
					<a href="/FLYER_TSP.pdf" download>Télécharger mon flyer</a>
				</Button>
			</div>
		</div>
		<div class="flex flex-col items-center justify-center w-full grow bg-black bg-opacity-50 p-4">
			<h1 class="text-xl text-center">
				La double expérience de Directeur Commercial et officer Sapeur-Pompier au service du
				management
			</h1>
		</div>
		<!-- {/if} -->
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
	.bg-image {
		background-image: url('/pompier-dessins.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.text-gradient {
		background: #53a3d4;
		background: linear-gradient(to right, #53a3d4 21%, #9b0101 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
		animation: bg-pan-tl 10s ease-in-out infinite alternate both;
		background-size: 400% 400%;
	}

	.reduced {
		transition: height 0.5s ease-in-out;
		height: var(--max-height);
	}

	.bg-pan-tl {
		-webkit-animation: bg-pan-tl 2s ease-in-out infinite alternate both;
		animation: bg-pan-tl 3s ease-in-out infinite alternate both;
		background: linear-gradient(-45deg, #9e2a2b, #53a3d4);
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
