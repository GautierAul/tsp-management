<script lang="ts">
	import { articlesList, type Article } from '$lib/DB';
	import ArticleButton from '../_components/ArticleButton.svelte';

	let articlesByYear: any = [];
	articlesList.forEach((article) => {
		if (!articlesByYear[article.year]) articlesByYear[article.year] = [];
		articlesByYear[article.year].unshift(article);
	});

	// $: console.log(Object.keys(articlesByYear).sort());
</script>

<div class="flex flex-col items-center justify-center gap-10 bg-surface-200 h-fit">
	<div class="w-full md:w-2/3 flex flex-col items-center justify-center gap-10 p-4">
		<h1 class="text-xl font-bold text-center">
			Mes façons de penser par les articles crées par moi-même pour vous.
		</h1>
		<div class="flex flex-col gap-6">
			{#each Object.keys(articlesByYear).reverse() as year}
				<div>
					<h2 class="text-lg font-semibold bg-darkred-400 p-2 rounded-lg text-white w-fit">
						{year}
					</h2>
					<div class="flex flex-col gap-4">
						{#each articlesByYear[year] as article}
							<ArticleButton title={article.title} link={article.link} />
						{/each}
					</div>
				</div>
			{/each}
			<!-- {#each articlesList as article}
				<ArticleButton title={article.title} link={article.link} />
			{/each} -->
		</div>
	</div>
</div>
