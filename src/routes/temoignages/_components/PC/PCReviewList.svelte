<script lang="ts">
	import { reviewList } from '$lib/DB';
	import PcReviewItem from './PCReviewItem.svelte';

	let openedItems: boolean[] = [];

	const closeAll = () => {
		openedItems = openedItems.map(() => false);
	};
</script>

<div class="flex flex-wrap gap-2 justify-between">
	{#each reviewList as review, i}
		<PcReviewItem
			{review}
			bind:show={openedItems[i]}
			on:open={() => {
				closeAll();
				openedItems[i] = !openedItems[i];
			}}
		/>
	{/each}
</div>
