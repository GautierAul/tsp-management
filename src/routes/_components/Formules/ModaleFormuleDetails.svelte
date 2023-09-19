<script lang="ts">
	import type { Formule } from '$lib/DB';
	import { CheckIcon } from 'svelte-feather-icons';
	import Modal from '../Modal.svelte';

	export let showModal: boolean; // boolean
	export let formule: Formule;

	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<Modal bind:showModal>
	<h3 slot="header" class="text-center font-semibold text-lg">
		{formule.title}
	</h3>

	<span><span class="font-bold">Format</span>: {formule.format}</span>
	<div>
		{#each formule.description as detail}
			<div class="flex flex-row gap-2">
				<div class="pt-1">
					<CheckIcon size="20" />
				</div>
				<span> {detail}</span>
			</div>
		{/each}
	</div>
</Modal>
