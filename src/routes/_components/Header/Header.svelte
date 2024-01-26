<script lang="ts">
	import { goto } from '$app/navigation';
	import { headerHeight, smallScreen, selectedPage, showContact } from '$lib/stores';
	import { BookOpenIcon, HomeIcon, LinkedinIcon, MenuIcon, XIcon } from 'svelte-feather-icons';
	import Dropdown from './Dropdown.svelte';
	import { page } from '$app/stores';
	import { fade, slide } from 'svelte/transition';

	let activeClass = 'font-bold';

	type headerItem = {
		title: string;
		link?: string;
		items?: headerItem[];
	};

	const headerItems: headerItem[] = [
		{
			title: 'Accueil',
			link: '/'
		},
		{
			title: 'Offres',
			link: '/offres'
		},
		{
			title: "Plus d'infos",
			items: [
				{
					title: 'Contacts',
					link: '/contacts'
				},
				{
					title: 'Mes coups de cœurs',
					link: '/coupdecoeurs'
				},
				{
					title: 'Articles',
					link: '/articles'
				},
				{
					title: 'Témoignages',
					link: '/temoignages'
				},
				{
					title: 'Mentions légales',
					link: '/mentions-legales'
				}
			]
		}
	];

	let openHeader: boolean = false;
</script>

<header
	class="text-lg h-auto p-0 md:p-4 bg-header shadow-md flex flex-col md:flex-row items-center md:justify-between justify-between md:px-8 px-0 bg-transparent text-amber-950 z-10"
	bind:clientHeight={$headerHeight}
	transition:slide
>
	<div
		class="flex gap-2 items-center justify-between md:justify-center text-lg font-semibold py-2 px-4 md:py-0 w-full md:w-fit"
	>
		<button class="flex gap-2 items-center w-full" on:click={() => goto('/')}>
			<img src="/logo-cut.png" alt="Logo" class="h-20 w-20 aspect-square" />
			<span
				>Team Spirit
				{#if $smallScreen}
					<br />
				{/if}
				& Performance</span
			>
		</button>

		{#if $smallScreen}
			<button
				class="text-2xl p-2 border border-surface-700 rounded-lg"
				on:click={() => {
					openHeader = !openHeader;
				}}
			>
				{#if openHeader}
					<XIcon size="30" />
				{:else}
					<MenuIcon size="30" />
				{/if}
			</button>
		{/if}
	</div>

	{#if !$smallScreen || openHeader}
		{#if $smallScreen}
			<div transition:fade class="bg-gray-400 h-[1px] w-full" />
		{/if}
		<div
			class="flex flex-row justify-between items-center gap-4 text-darkred-500 p-2 md:py-0 w-full md:w-fit"
			transition:slide
		>
			{#each headerItems as headerItem}
				{#if headerItem.link}
					<button
						class={`flex flex-row items-center justify-center gap-2 p-2 transition-all duration-300 hover:bg-surface-600 rounded-xl ${
							$page.url.pathname === headerItem.link ? activeClass : ''
						}`}
						on:click={() => {
							headerItem.link && goto(headerItem.link);
						}}
					>
						<span>{headerItem.title}</span>
					</button>
				{:else if headerItem.items?.length}
					<Dropdown item={headerItem} />
				{/if}
			{/each}
		</div>
	{/if}
</header>
