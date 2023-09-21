<script lang="ts">
	export let title: string;
	export let description: string;
	export let contactValue: string;
</script>

<div
	class="aspect-square max-w-[250px] flex flex-col border border-surface-700 p-4 rounded-xl justify-between"
>
	<div class="border border-surface-600 rounded-lg p-2 w-fit h-fit">
		<!-- Used for importing icons -->
		<slot />
	</div>
	<div class="flex flex-col gap-2">
		<span class="text-lg font-bold">{title}</span>
		<span class="">{description}</span>
	</div>
	<div>
		<span class="font-semibold underline">{contactValue}</span>
	</div>
</div>
