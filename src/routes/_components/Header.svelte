<script lang="ts">
	import { headerHeight, smallScreen, selectedPage, showContact } from '$lib/stores';
	import { BookOpenIcon, HomeIcon, LinkedinIcon } from 'svelte-feather-icons';

	let activeClass = 'font-bold';
</script>

<header
	class="text-lg h-auto p-4 bg-header shadow-md flex items-center md:justify-between justify-around md:px-8 px-0 bg-transparent text-amber-950 z-10"
	bind:clientHeight={$headerHeight}
>
	<div class="flex gap-2 items-center justify-center text-lg font-semibold">
		<img src="/logo-cut.png" alt="Logo" class="h-20 w-20 aspect-square" />
		<span>Team Spirit & Performance</span>
	</div>
	{#if !$smallScreen}
		<div class="flex flex-row justify-between items-center gap-4 text-darkred-500">
			<button
				class="flex flex-row items-center justify-center gap-2 py-2 transition-all {$selectedPage ===
				'home'
					? activeClass
					: ''}"
				on:click={() => ($selectedPage = 'home')}
			>
				<!-- <HomeIcon /> -->
				<span>Accueil</span>
			</button>
			<button
				class="flex flex-row items-center justify-center gap-2 py-2 transition-all {$selectedPage ===
				'plans'
					? activeClass
					: ''}"
				on:click={() => ($selectedPage = 'plans')}
			>
				<!-- <BookOpenIcon /> -->
				<span>Formules</span>
			</button>
			<button
				class="flex flex-row items-center justify-center gap-2 py-2 transition-all {$selectedPage ===
				'infos'
					? activeClass
					: ''}"
				on:click={() => ($selectedPage = 'infos')}
			>
				<!-- <LinkedinIcon /> -->
				<span>Informations</span>
			</button>
			<button
				class="flex flex-row items-center justify-center gap-2 py-2 transition-all"
				on:click={() => ($showContact = true)}
			>
				<!-- <LinkedinIcon /> -->
				<span>Contacts</span>
			</button>
		</div>
	{/if}
</header>
