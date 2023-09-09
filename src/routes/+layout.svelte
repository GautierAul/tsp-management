<script lang="ts">
	import { smallScreen, screenHeight } from '$lib/stores';
	import '../app.css';
	import Footer from './_components/Footer.svelte';
	import Header from './_components/Header.svelte';

	let innerWidth = 0;

	$: $smallScreen = innerWidth < 768;
</script>

<svelte:window bind:innerWidth bind:innerHeight={$screenHeight} />
<div class="flex flex-col h-screen bg-white">
	<Header />
	<div class="grow overflow-y-auto flex justify-center w-full bg-surface-500">
		<div class="w-full">
			<slot />
		</div>
	</div>
	{#if $smallScreen}
		<Footer />
	{/if}
</div>
