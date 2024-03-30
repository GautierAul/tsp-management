<script>
	import { formulesList } from '$lib/DB';
	import FormuleCard from '../../_components/Formules/FormuleCard.svelte';
</script>

<div
	class="flex flex-col items-center justify-normal md:justify-center p-8 bg-surface-200 w-full h-fit md:h-full gap-4"
>
	<h1 class="text-lg font-semibold text-center">
		Construisons ensemble votre offre sur-mesure : audit, formation, conférence, coaching ; ou
		choisissez l’une des 3 formules clés en main
	</h1>
	<div class="flex flex-col md:flex-row gap-4 w-full h-fit">
		{#each formulesList as formule, index}
			<FormuleCard {formule} {index} />
		{/each}
	</div>
</div>
