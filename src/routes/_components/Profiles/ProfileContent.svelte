<script lang="ts">
	import { horizontalSlide } from '$lib/transition';
	import { slide } from 'svelte/transition';

	export let content: string = '';

	let show: boolean = false;
	setTimeout(() => {
		show = true;
	}, 1000);
</script>

<!-- {#if show} -->
<span>
	{@html content}
</span>
<!-- {/if} -->
