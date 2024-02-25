<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ProfilesList from './_components/Profiles/ProfilesList.svelte';
	import Separator from './_components/Separator.svelte';
	import { footerHeight, headerHeight, hideScreen, screenHeight } from '$lib/stores';
	import Button from './_components/Button.svelte';
	import { ChevronRightIcon } from 'svelte-feather-icons';

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
		class={`bg-black relative flex flex-col items-center justify-center w-full text-white shadow-md shadow-gray-500 h-screen transition-all duration-500`}
		class:reduced={isReduced && loaded}
		style={`--max-height: ${maxHeight}px; background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('photo_main.jpg');; background-repeat: no-repeat; background-size: cover; background-position: center;`}
	>
		<img
			src="/herve-dir.png"
			alt="Logo"
			class="h-52 md:h-72 aspect-auto absolute left-0 lg:left-[15%] mx-auto text-center bg-blue-500 rounded-r-3xl lg:rounded-3xl bg-opacity-50"
		/>
		<img
			src="/herve-dessin-pompier.png"
			alt="Logo"
			class="h-52 md:h-72 aspect-auto absolute right-0 lg:right-[15%] mx-auto text-center bg-lightred-500 rounded-l-3xl lg:rounded-3xl bg-opacity-50 p-1"
		/>
		<!-- class={`flex flex-col gap-4 items-center justify-center bg-black bg-opacity-40 p-8 w-full text-center`} -->
		<!-- {#if loaded} -->
		<!-- <h1 class="text-4xl font-bold">Hervé Aulner - Team Spirit & Performance</h1>
				<h1 class="text-2xl font-semibold">
					Augmentez votre impact managerial pour booster vos performances collectives
				</h1> -->

		<div class="flex flex-col items-center justify-center text-center w-full grow font-semibold">
			<h1 class="text-2xl md:text-3xl font-bold text-gradient">2 enjeux majeurs</h1>
			<h2 class="text-lg md:text-xl underline">Agilité et engagement collaborateurs</h2>
			<h2 class="mt-4 text-base md:text-lg">
				Augmentez votre impact managérial pour booster vos performances collectives
			</h2>
		</div>
		<div class="relative p-2 grow w-full">
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
		<div class="flex flex-col gap-4 items-center justify-center w-full grow p-2">
			<h1 class="text-lg md:text-xl text-center">
				La double expérience de <b>Directeur Commercial</b> et <b>officer Sapeur-Pompier</b> au service
				du management
			</h1>
		</div>
		<!-- {/if} -->
	</div>

	<div class="w-full bg-surface-600 flex justify-center">
		<div
			class="flex flex-col md:w-2/3 w-full p-8 items-center gap-4 text-center bg-surface-600 scroll-reveal"
		>
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
	<div
		class="bg-surface-600 w-full flex flex-col items-center gap-2 justify-center p-8 text-center"
	>
		<h3 class="font-semibold w-2/3 text-lg">Prix et distinctions</h3>
		<span>
			Mon parcours, source de fierté, a permis d'accumuler plusieurs prix et distinctions grâce à
			l'expérience acquise.
		</span>
		<div class="flex flex-col gap-2 mt-2">
			<a
				href="https://www.actionco.fr/Thematique/strategie-commerciale-1218/Diaporamas/tac2019-qui-sont-laureats-2019-345382/animation-commerciale-points-vente-poste-remporte--345383.htm"
				class="bg-surface-500 shadow-sm shadow-surface-800 border border-black rounded-xl p-2 flex justify-between gap-4 items-center group"
				target="_blank"
			>
				<span> Trophée Action Co - 2019 </span>
				<div
					class="border border-surface-800 rounded-full group-hover:rotate-[360deg] transition-all duration-700"
				>
					<ChevronRightIcon />
				</div>
			</a>
			<a
				href="https://www.actionco.fr/Thematique/management-1214/Breves/Trophees-2014-Managers-annee-decouvrez-podium-247901.htm"
				class="bg-surface-500 shadow-sm shadow-surface-800 border border-black rounded-xl p-2 flex justify-between gap-4 items-center group"
				target="_blank"
			>
				<span> Trophée Action Co - 2014 </span>
				<div
					class="border border-surface-800 rounded-full group-hover:rotate-[360deg] transition-all duration-1000"
				>
					<ChevronRightIcon />
				</div>
			</a>
		</div>
	</div>
	<Separator />
	<div class="bg-surface-500 w-full flex justify-center p-8">
		<h3 class="italic w-2/3 text-center text-lg">
			"Passionné par l’humain et la force du collectif; mon but et de faire grandir chacun et tous
			en soutenant les relations humaines dans l’objectif d’atteindre de meilleurs niveaux de
			performances."
		</h3>
	</div>
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
		/* background: linear-gradient(to right, #53a3d4 21%, #9b0101 100%); */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
		animation: bg-pan-tl 5s ease-in-out infinite alternate both;
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
