<script lang="ts">
	import { slide } from 'svelte/transition';

	let selectedProfile: 0 | 1 | 2 = 0;

	let profileText: string[] = [
		'Animer par le plaisir de transmettre, je suis formateur en management à IAE School of Management, ISEC Luxembourg et à l’Ecole Nationale Supérieur des Officiers Sapeurs-Pompiers. J’ai également réalisé quelques conférences appuyées sur l’association de ces 3 expériences. <br/> <br/> En 2022, l’état-major m’a confié la mission de concevoir et de mettre en  oeuvre une formation en management à destination des Chefs d’Unité Opérationnelle Sapeurs-Pompiers de Moselle. Diplômé d’un M2 en management complété par des formations comme une certification en négociation complexe « NSTAA » à ADN Group, je suis également auteur du <a target="_blank" class="underline" href="https://www.fnac.com/a6243413/Herve-Aulner-Le-manuel-du-chef"> Manuel du Chef</a> et j’écris régulièrement des articles portant sur le management',
		'Manager depuis plusieurs années, management de centres de profit, directeur de réseaunational, directeur commercial. Récompensé par NetMédia group à 2 reprises avec un trophée argent du meilleur manager commercial de l’année et un trophée Or de la meilleure opération marketing.',
		'Je suis également Sapeur-Pompier depuis plus de 30 ans (BSPP dans ma jeunesse), Officier et Chef d’une unité opérationnelle de Sapeurs-pompiers depuis plus de 20 ans que le collectif a fait progresser pour être aujourd’hui reconnu pour ses sur-performances.'
	];
</script>

<div class="flex flex-col w-full items-center gap-4 text-center bg-surface-200 p-4">
	<div class="flex justify-between items-center w-full md:w-2/3 overflow-x-auto">
		<!-- <button
			class="text-5xl"
			on:click={() => {
				selectedProfile = selectedProfile === 0 ? 1 : 0;
			}}>&#8592;</button
		> -->
		<button
			class="flex flex-col items-center p-4 transition-colors rounded
	{selectedProfile === 0 ? 'bg-surface-600' : 'hover:bg-surface-500'}"
			on:click={() => {
				selectedProfile = 0;
			}}
		>
			<div class="h-32 w-32 rounded-full border-4 border-lightred-500">
				<img src="/foracc.jpg" alt="profil d'hervé" class="rounded-full" />
			</div>
			<span class="text-lightred-500 font-medium">Formateur accompagnateur</span>
		</button>
		<button
			class="flex flex-col items-center p-4 transition-colors rounded
			{selectedProfile === 1 ? 'bg-surface-600' : 'hover:bg-surface-500'}"
			on:click={() => {
				selectedProfile = 1;
			}}
		>
			<div class="h-32 w-32 rounded-full border-4 border-lightred-500">
				<img src="/profil-herve.jpg" alt="profil d'hervé" class="rounded-full" />
			</div>
			<span class="text-lightred-500 font-medium">Directeur commercial</span>
		</button>
		<button
			class="flex flex-col items-center p-4 transition-colors rounded
			{selectedProfile === 2 ? 'bg-surface-600' : 'hover:bg-surface-500'}"
			on:click={() => {
				selectedProfile = 2;
			}}
		>
			<div class="h-32 w-32 rounded-full border-4 border-lightred-500">
				<img src="/herve-pompier.png" alt="profil d'hervé" class="rounded-full" />
			</div>
			<span class="text-lightred-500 font-medium">Officier sapeurs-pompiers</span>
		</button>

		<!-- <button
			class="text-5xl"
			on:click={() => {
				selectedProfile = selectedProfile === 0 ? 1 : 0;
			}}>&#8594;</button
		> -->
	</div>
	<div class="w-full md:w-2/3 relative p-4 text-darkred-500">
		<div
			class="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-lightred-500 rounded-tl-xl"
		/>
		<div
			class="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-lightred-500 rounded-br-xl"
		/>
		<span class="transition-all">
			{@html profileText[selectedProfile]}
		</span>
	</div>
</div>
