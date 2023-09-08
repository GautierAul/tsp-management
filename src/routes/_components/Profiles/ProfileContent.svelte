<script lang="ts">
	import { horizontalSlide } from '$lib/transition';
	import { slide } from 'svelte/transition';

	export let content: string = '';
</script>

<div class="w-full">
	{@html content}
</div>
