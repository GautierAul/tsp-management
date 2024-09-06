<script>
	import { coupDeCoeurList } from '$lib/DB';
	import LinkButton from '../_components/LinkButton.svelte';
</script>

<div class="flex flex-col items-center justify-center gap-10 bg-surface-200 h-fit md:h-full">
	<div class="w-full md:w-2/3 flex flex-col items-center justify-center gap-10 p-4">
		<h1 class="text-xl font-bold text-center">Mes coups de cœur encore d’actualité !</h1>
		<div class="flex flex-col gap-4 text-center divide-y-2 divide-surface-700">
			{#each coupDeCoeurList as coupDeCoeur}
				<LinkButton
					description={coupDeCoeur.description}
					title={coupDeCoeur.title}
					link={coupDeCoeur.link}
				/>
			{/each}
		</div>
	</div>
</div>
