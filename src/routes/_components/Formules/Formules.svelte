<script>
	import { formulesList } from '$lib/DB';
	import FormuleCard from './FormuleCard.svelte';
</script>

<div id="plans" class="flex flex-col items-center p-8 bg-surface-200 w-full gap-4">
	<h2 class="text-lg font-semibold text-center">
		3 offres au contenu unique : conférences, formations et entrainements managériaux pour les
		dirigeants et managers dans tous domaines d’activité.
	</h2>
	<div class="flex flex-col gap-4 w-full md:w-2/3 lg:w-1/2">
		{#each formulesList as formule, index}
			<FormuleCard {formule} {index} />
		{/each}
	</div>
</div>
