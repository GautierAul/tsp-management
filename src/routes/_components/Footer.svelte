<script lang="ts">
	import { BookOpenIcon, HomeIcon, LinkedinIcon } from 'svelte-feather-icons';
	import { smallScreen, footerHeight, selectedPage } from '$lib/stores';

	let footer = 0;
	$: if ($smallScreen && footer) {
		$footerHeight = footer;
	}

	let activeClass = 'bg-gradient-to-b from-surface-500 to-surface-600 font-bold';
</script>

<div
	class="flex flex-row justify-between items-center gap-2 text-darkred-500 footer border-t border-darkred-100"
	bind:clientHeight={footer}
>
	<button
		class="flex flex-col items-center justify-center w-1/3 py-2 transition-all {$selectedPage ===
		'home'
			? activeClass
			: ''}"
		on:click={() => ($selectedPage = 'home')}
	>
		<HomeIcon />
		<span>Accueil</span>
	</button>
	<button
		class="flex flex-col items-center justify-center w-1/3 py-2 transition-all {$selectedPage ===
		'plans'
			? activeClass
			: ''}"
		on:click={() => ($selectedPage = 'plans')}
	>
		<BookOpenIcon />
		<span>Formules</span>
	</button>
	<button
		class="flex flex-col items-center justify-center w-1/3 py-2 transition-all {$selectedPage ===
		'infos'
			? activeClass
			: ''}"
		on:click={() => ($selectedPage = 'infos')}
	>
		<LinkedinIcon />
		<span>Informations</span>
	</button>
</div>

<style>
	.footer {
		-webkit-box-shadow: 0px 20px 20px 10px #540b0e;
		box-shadow: 0px 20px 20px 10px #540b0e;
	}
</style>
