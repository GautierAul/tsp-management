<script lang="ts">
	import { page } from '$app/stores';
	import '../../../../app.css';

	$: console.log($page.route.id);
	$: route = $page.route.id;
</script>

<div class="flex flex-col h-screen bg-surface-900 text-white">
	<div
		class="w-full flex items-center justify-center gap-6 text-lg border-b border-surface-700 p-4"
	>
		<a href="/add/offres" class={route === '/(admin)/add/(connected)/offres' ? 'font-bold' : ''}
			>Offres</a
		>
		<a href="/add/contacts" class={route === '/(admin)/add/(connected)/contacts' ? 'font-bold' : ''}
			>Contacts</a
		>
		<a
			href="/add/coup-de-coeur"
			class={route === '/(admin)/add/(connected)/coup-de-coeur' ? 'font-bold' : ''}>Coup de coeur</a
		>
		<a href="/add/articles" class={route === '/(admin)/add/(connected)/articles' ? 'font-bold' : ''}
			>Articles</a
		>
		<a
			href="/add/temoignages"
			class={route === '/(admin)/add/(connected)/temoignages' ? 'font-bold' : ''}>Témoignages</a
		>
	</div>
	<div class="p-4 overflow-y-scroll">
		<slot />
	</div>
</div>
