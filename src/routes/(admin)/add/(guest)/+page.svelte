<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../../../_components/Button.svelte';
	import TextField from '../../../_components/TextField.svelte';

	let username: string = '';
	let password: string = '';
</script>

<div class="flex items-center justify-center w-full h-full">
	<div class="bg-surface-600 rounded-lg p-12 flex flex-col gap-4">
		<TextField label="Nom d'utilisateur" bind:value={username} />
		<TextField label="Mot de passe" bind:value={password} type="password" />
		<div class="w-full flex justify-end">
			<Button
				on:click={() => {
					goto('/add/dashboard');
				}}>Se connecter</Button
			>
		</div>
	</div>
</div>
