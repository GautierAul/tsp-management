<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let contactValue: string;
	export let link: string = '';
</script>

<div
	class="aspect-square w-[220px] flex flex-col border border-surface-700 p-4 rounded-xl justify-between"
>
	<div class="h-1/3">
		<div class="border border-surface-600 rounded-lg p-2 w-fit h-fit">
			<!-- Used for importing icons -->
			<slot />
		</div>
	</div>
	<div class="flex flex-col gap-2 h-1/3">
		<span class="text-lg font-bold">{title}</span>
		<span class="">{description}</span>
	</div>
	<div class="h-1/3">
		{#if link}
			<a class="font-semibold underline break-words" href={link} target="_blank"
				>{@html contactValue}</a
			>
		{:else}
			<span class="font-semibold underline break-words">{@html contactValue}</span>
		{/if}
	</div>
</div>
