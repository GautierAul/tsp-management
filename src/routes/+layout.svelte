<script lang="ts">
	import { smallScreen, screenHeight, hideScreen } from '$lib/stores';
	import '../app.css';
	import Header from './_components/Header/Header.svelte';
	import Contacts from './_components/SideModal/Contacts.svelte';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let innerWidth = 0;

	$: $smallScreen = innerWidth < 768;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let loaded = false;
	onMount(() => {
		if ($page.route.id === '/') {
			$hideScreen = true;
		}
		loaded = true;
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight={$screenHeight} />
<div class="flex flex-col h-screen bg-white">
	<Contacts />
	{#if !$hideScreen && loaded}
		<Header />
	{/if}
	<div
		class="grow {$hideScreen ? 'overflow-y-hidden' : 'overflow-y-auto'} 
			{!loaded ? 'overflow-y-hidden' : ''}
			flex justify-center w-full bg-surface-600"
	>
		<div class="w-full h-full flex flex-col justify-between">
			<div class="grow">
				<slot />
			</div>
			{#if $page.route.id !== '/mentions-legales'}
				<div class="bg-black text-white text-center p-4">
					<a href="/mentions-legales" class="underline"> Mentions légales </a>
				</div>
			{/if}
		</div>
	</div>

	<!-- <WorkInProgress /> -->
	<!-- {#if $smallScreen}
		<Footer />
	{/if} -->
</div>
