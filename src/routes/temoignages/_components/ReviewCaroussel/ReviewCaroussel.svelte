<script lang="ts">
	import { reviewList } from '$lib/DB';
	import { onMount } from 'svelte';
	import CarousselItem from './CarousselItem.svelte';
	import { ChevronsLeftIcon, ChevronsRightIcon } from 'svelte-feather-icons';

	type Profiles = -1 | 0 | 1 | 2;

	let hasLoaded: boolean = false;
	onMount(() => {
		hasLoaded = true;
	});

	let selectedProfile: number = 0;

	let profileText: string[] = [
		'Animer par le plaisir de transmettre, je suis formateur en management à IAE School of Management, ISEC Luxembourg et à l’Ecole Nationale Supérieur des Officiers Sapeurs-Pompiers. J’ai également réalisé quelques conférences appuyées sur l’association de ces 3 expériences. <br/> <br/> En 2022, l’état-major m’a confié la mission de concevoir et de mettre en  oeuvre une formation en management à destination des Chefs d’Unité Opérationnelle Sapeurs-Pompiers de Moselle. Diplômé d’un M2 en management complété par des formations comme une certification en négociation complexe « NSTAA » à ADN Group, je suis également auteur du <a target="_blank" class="underline" href="https://www.fnac.com/a6243413/Herve-Aulner-Le-manuel-du-chef"> Manuel du Chef</a> et j’écris régulièrement des articles portant sur le management',
		'Manager depuis plusieurs années, management de centres de profit, directeur de réseaunational, directeur commercial. Récompensé par NetMédia group à 2 reprises avec un trophée argent du meilleur manager commercial de l’année et un trophée Or de la meilleure opération marketing.',
		'Je suis également Sapeur-Pompier depuis plus de 30 ans (BSPP dans ma jeunesse), Officier et Chef d’une unité opérationnelle de Sapeurs-pompiers depuis plus de 20 ans que le collectif a fait progresser pour être aujourd’hui reconnu pour ses sur-performances.'
	];

	let hasClicked: boolean = false;

	const increment = (): number => {
		const max = reviewList.length - 1;
		if (selectedProfile === max) return 0;
		return selectedProfile + 1;
	};

	const decrement = (): number => {
		const max = reviewList.length - 1;
		if (selectedProfile === 0) return max;
		return selectedProfile - 1;
	};

	const handleClick = (value: Profiles) => {
		hasClicked = true;
		selectedProfile = value;
	};

	$: if (hasLoaded && (selectedProfile || selectedProfile === 0)) {
		const container = document.getElementById('profile-content-container');
		const profileContent = document.getElementById('profile-content');
		if (container || profileContent) {
			profileContent.scrollTo({
				left: selectedProfile * container.offsetWidth,
				behavior: 'smooth'
			});
		}
	}

	// setInterval(() => {
	// 	if (hasClicked) return;
	// 	selectedProfile = incrementProfile(selectedProfile);
	// }, 3000);
</script>

<div class="flex flex-col border border-black p-4 rounded-lg">
	<div id="profile-content-container" class="w-full relative text-darkred-500">
		<!-- <div
			class="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-lightred-500 rounded-tl-xl"
		/>
		<div
			class="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-lightred-500 rounded-br-xl"
		/> -->
		<div
			class="absolute bottom-[calc(50%-24px)] left-0 w-12 h-12 border border-black rounded-full flex items-center justify-center"
		>
			<ChevronsLeftIcon />
		</div>
		<div
			class="absolute bottom-[calc(50%-24px)] right-0 w-12 h-12 border border-black rounded-full flex items-center justify-center"
		>
			<ChevronsRightIcon />
		</div>
		<div id="profile-content" class="flex justify-between items-center w-full overflow-x-hidden">
			{#each reviewList as review, index}
				<CarousselItem {...review} {index} />
			{/each}
		</div>
	</div>
	<div class="flex flex-row justify-around gap-2">
		<!-- <button
			class="bg-darkred-500 text-white p-2 flex gap-2 items-center"
			on:click={() => {
				selectedProfile = decrement();
			}}
		>
			<ChevronsLeftIcon />
		</button> -->
		{#each Array(reviewList.length) as item, i}
			<button
				on:click={() => {
					selectedProfile = i;
				}}
				class="{i === selectedProfile ? 'bg-surface-800' : 'bg-surface-700'}  grow rounded-full h-2"
			/>
		{/each}

		<!-- <button
			class="bg-darkred-500 text-white px-4 py-2 flex gap-2 items-center"
			on:click={() => {
				selectedProfile = increment();
			}}
		>
			<ChevronsRightIcon />
		</button> -->
	</div>
</div>
