<script lang="ts">
	import type { Formule } from '$lib/DB';
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

	<span class="font-bold">Contenu</span>
	<ol>
		{#each formule.description as detail}
			<li>- {detail}</li>
		{/each}
	</ol>

	<span><span class="font-bold">Format</span>: {formule.format}</span>
</Modal>
