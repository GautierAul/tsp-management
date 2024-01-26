<script lang="ts">
	import { LoaderIcon } from 'svelte-feather-icons';

	export let classes = 'w-6 h-6';
</script>

<div class="animate-spin-slow">
	<LoaderIcon class={classes} />
</div>
