<script lang="ts">
	import { onMount } from 'svelte';

	type Profiles = -1 | 0 | 1 | 2;

	let hasLoaded: boolean = false;
	onMount(() => {
		hasLoaded = true;
	});

	let selectedProfile: Profiles = 0;

	let profileText: string[] = [
		'Animer par le plaisir de transmettre, je suis formateur en management à IAE School of Management, ISEC Luxembourg et à l’Ecole Nationale Supérieur des Officiers Sapeurs-Pompiers. J’ai également réalisé quelques conférences appuyées sur l’association de ces 3 expériences. <br/> <br/> En 2022, l’état-major m’a confié la mission de concevoir et de mettre en  oeuvre une formation en management à destination des Chefs d’Unité Opérationnelle Sapeurs-Pompiers de Moselle. Diplômé d’un M2 en management complété par des formations comme une certification en négociation complexe « NSTAA » à ADN Group, je suis également auteur du <a target="_blank" class="underline" href="https://www.fnac.com/a6243413/Herve-Aulner-Le-manuel-du-chef"> Manuel du Chef</a> et j’écris régulièrement des articles portant sur le management',
		'Manager depuis plusieurs années, management de centres de profit, directeur de réseaunational, directeur commercial. Récompensé par NetMédia group à 2 reprises avec un trophée argent du meilleur manager commercial de l’année et un trophée Or de la meilleure opération marketing.',
		'Je suis également Sapeur-Pompier depuis plus de 30 ans (BSPP dans ma jeunesse), Officier et Chef d’une unité opérationnelle de Sapeurs-pompiers depuis plus de 20 ans que le collectif a fait progresser pour être aujourd’hui reconnu pour ses sur-performances.'
	];

	let hasClicked: boolean = false;

	const incrementProfile = (current: Profiles): Profiles => {
		if (current === 2) return 0;
		if (current === 1) return 2;
		return 1;
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

	setInterval(() => {
		if (hasClicked) return;
		selectedProfile = incrementProfile(selectedProfile);
	}, 3000);
</script>

<div
	class="flex flex-col w-full items-center justify-center gap-4 text-center bg-surface-200 p-4 h-2/4"
>
	<div class="flex justify-between items-center w-full md:w-2/3 overflow-x-auto">
		<button
			class="flex flex-col items-center p-4 transition-colors-slow rounded
	{selectedProfile === 0 ? 'bg-surface-600' : 'hover:bg-surface-500'}"
			on:click={() => handleClick(0)}
		>
			<div class="h-32 w-32 rounded-full border-4 border-lightred-500">
				<img src="/foracc.jpg" alt="profil d'hervé" class="rounded-full" />
			</div>
			<span class="text-lightred-500 font-medium">Formateur accompagnateur</span>
		</button>
		<button
			class="flex flex-col items-center p-4 transition-colors-slow rounded
			{selectedProfile === 1 ? 'bg-surface-600' : 'hover:bg-surface-500'}"
			on:click={() => handleClick(1)}
		>
			<div class="h-32 w-32 rounded-full border-4 border-lightred-500">
				<img src="/profil-herve.jpg" alt="profil d'hervé" class="rounded-full" />
			</div>
			<span class="text-lightred-500 font-medium">Directeur commercial</span>
		</button>
		<button
			class="flex flex-col items-center p-4 transition-colors-slow rounded
			{selectedProfile === 2 ? 'bg-surface-600' : 'hover:bg-surface-500'}"
			on:click={() => handleClick(2)}
		>
			<div class="h-32 w-32 rounded-full border-4 border-lightred-500">
				<img src="/herve-pompier.png" alt="profil d'hervé" class="rounded-full" />
			</div>
			<span class="text-lightred-500 font-medium">Officier sapeurs-pompiers</span>
		</button>
	</div>
	<div id="profile-content-container" class="w-full md:w-2/3 relative text-darkred-500">
		<div
			class="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-lightred-500 rounded-tl-xl"
		/>
		<div
			class="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-lightred-500 rounded-br-xl"
		/>
		<!-- <span class="transition-all">
			{@html profileText[selectedProfile]}
		</span> -->
		<div id="profile-content" class="flex justify-between items-center w-full overflow-x-hidden">
			<div class="h-full min-w-full p-4">
				<!-- {profileText[0]} -->
				Animer par le plaisir de transmettre, je suis formateur en management à IAE School of Management,
				ISEC Luxembourg et à l’Ecole Nationale Supérieur des Officiers Sapeurs-Pompiers. J’ai également
				réalisé quelques conférences appuyées sur l’association de ces 3 expériences. <br /> <br />
				En 2022, l’état-major m’a confié la mission de concevoir et de mettre en oeuvre une formation
				en management à destination des Chefs d’Unité Opérationnelle Sapeurs-Pompiers de Moselle. Diplômé
				d’un M2 en management complété par des formations comme une certification en négociation complexe
				« NSTAA » à ADN Group, je suis également auteur du
				<a
					target="_blank"
					class="underline"
					href="https://www.fnac.com/a6243413/Herve-Aulner-Le-manuel-du-chef"
				>
					Manuel du Chef</a
				> et j’écris régulièrement des articles portant sur le management
			</div>
			<div class="h-full min-w-full p-4">
				Manager depuis plusieurs années, management de centres de profit, directeur de
				réseaunational, directeur commercial. Récompensé par NetMédia group à 2 reprises avec un
				trophée argent du meilleur manager commercial de l’année et un trophée Or de la meilleure
				opération marketing.
			</div>
			<div class="h-full min-w-full p-4">
				Je suis également Sapeur-Pompier depuis plus de 30 ans (BSPP dans ma jeunesse), Officier et
				Chef d’une unité opérationnelle de Sapeurs-pompiers depuis plus de 20 ans que le collectif a
				fait progresser pour être aujourd’hui reconnu pour ses sur-performances.
			</div>
			<!-- {#if selectedProfile === 0} -->
			<!-- <ProfileContent content={profileText[0]} /> -->
			<!-- {:else if selectedProfile === 1} -->
			<!-- <ProfileContent content={profileText[1]} /> -->
			<!-- {:else if selectedProfile === 2} -->
			<!-- <ProfileContent content={profileText[2]} /> -->
			<!-- {/if} -->
		</div>
	</div>
</div>

<style>
	.transition-colors-slow {
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 1000ms;
	}
</style>
