<script lang="ts">
	import type { Article } from '$lib/DB';

	export let article: Article;
</script>

<div class="flex gap-4 border border-white rounded-xl p-4">
	<div class="w-3/4">
		<h3 class="text-lg">Titre : {article.title}</h3>
		<p>Lien : {article.link}</p>
		<p>Année : {article.year}</p>
	</div>
</div>
