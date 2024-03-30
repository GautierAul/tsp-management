<script lang="ts">
	export let label: string;
	export let value: any;
	export let type: string = 'text';

	function typeAction(node: any) {
		node.type = type;
	}
</script>

<div class="flex items-center h-fit w-full">
	<div
		class="h-full text-black bg-surface-500 w-fit rounded-l-lg p-2 border-t border-b border-l border-black"
	>
		<label for={label} class="">{label}</label>
	</div>
	<input
		type="text"
		name={label}
		class="border border-black rounded-r-lg p-2 grow"
		bind:value
		use:typeAction
	/>
</div>
