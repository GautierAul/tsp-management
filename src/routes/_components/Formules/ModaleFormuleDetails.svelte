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

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
