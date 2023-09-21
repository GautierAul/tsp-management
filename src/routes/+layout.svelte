<script lang="ts">
	import { smallScreen, screenHeight } from '$lib/stores';
	import '../app.css';
	import Footer from './_components/Footer.svelte';
	import Header from './_components/Header/Header.svelte';
	import Contacts from './_components/SideModal/Contacts.svelte';
	import WorkInProgress from './_components/WorkInProgress.svelte';
	import { onNavigate } from '$app/navigation';

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
</script>

<svelte:window bind:innerWidth bind:innerHeight={$screenHeight} />
<div class="flex flex-col h-screen bg-white">
	<Contacts />
	<Header />
	<div class="grow overflow-y-auto flex justify-center w-full bg-surface-600">
		<div class="w-full">
			<slot />
		</div>
	</div>
	<WorkInProgress />
	<!-- {#if $smallScreen}
		<Footer />
	{/if} -->
</div>
