<script lang="ts">
	import { articlesList } from '$lib/DB';
	import Button from '../../../../_components/Button.svelte';
	import Modal from '../../../../_components/Modal.svelte';
	import TextField from '../../../../_components/TextField.svelte';
	import ArticleItem from './_components/ArticleItem.svelte';

	let art = articlesList;
	let articlesByYear: any = [];
	$: if (art) {
		art.forEach((article) => {
			if (!articlesByYear[article.year]) articlesByYear[article.year] = [];
			articlesByYear[article.year].unshift(article);
		});
	}

	const refresh = () => {
		art.forEach((article) => {
			if (!articlesByYear[article.year]) articlesByYear[article.year] = [];
			articlesByYear[article.year].unshift(article);
		});
	};

	let showModal = false;

	let newTitle = '';
	let newLink = '';
	let newYear = new Date().getFullYear();

	const addArticle = () => {
		console.log(newTitle, newLink, newYear);
		art.unshift({
			title: newTitle,
			link: newLink,
			year: newYear
		});
		art = art;
		newTitle = '';
		newLink = '';
		newYear = new Date().getFullYear();
		showModal = false;
	};
</script>

<div class="flex flex-col gap-4">
	<Button
		on:click={() => {
			showModal = true;
		}}
	>
		Ajouter un article
	</Button>
	<Modal bind:showModal>
		<div class="flex flex-col gap-2">
			<TextField label="Titre" bind:value={newTitle} />
			<TextField label="Lien" bind:value={newLink} />
			<TextField label="Année" bind:value={newYear} type="number" />
			<Button on:click={addArticle}>Sauvegarder</Button>
		</div>
	</Modal>
	{#each art as article}
		<ArticleItem {article} />
	{/each}
</div>
