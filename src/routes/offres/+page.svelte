<script>
	import { formulesList } from '$lib/DB';
	import FormuleCard from '../_components/Formules/FormuleCard.svelte';
	import PCReviewList from '../temoignages/_components/PC/PCReviewList.svelte';
</script>

<div
	class="flex flex-col items-center justify-normal md:justify-center p-8 bg-surface-200 w-full h-fit md:h-full gap-4"
>
	<div class="flex flex-col gap-8 mt-4 md:mt-16">
		<h1 class="text-lg font-semibold text-center text-redorange-600 base-font">
			J'interviens auprès des dirigeants et managers de tous horizons à travers un dispositif
			complet, articulant :
		</h1>
		<div class="flex flex-col md:flex-row gap-4 w-full h-fit grow">
			{#each formulesList as formule, index}
				<FormuleCard {formule} {index} />
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-4 mt-16">
		<h2 class="font-semibold text-center text-darkred-500">
			Une intervention sur-mesure approuvé par de nombreux dirigeants et managers
		</h2>
		<PCReviewList />
	</div>
</div>
