<script>
	import { formulesList } from '$lib/DB';
	import FormuleCard from './FormuleCard.svelte';
</script>

<div class="flex flex-col items-center p-8 bg-surface-200 w-full">
	<h2 class="text-lg font-semibold">
		Formules ajustées à vos problématiques managériales pour plus d’efficacité !
	</h2>
	<div class="flex md:flex-row flex-col">
		{#each formulesList as formule, index}
			<FormuleCard {formule} {index} />
		{/each}
	</div>
</div>
