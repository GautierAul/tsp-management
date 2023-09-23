<script lang="ts">
	import { reviewList } from '$lib/DB';
	import PcReviewItem from './PCReviewItem.svelte';
</script>

<div class="flex flex-wrap gap-2 justify-between">
	{#each reviewList as review}
		<PcReviewItem {review} />
	{/each}
</div>
