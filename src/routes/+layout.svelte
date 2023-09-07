<script>
	import '../app.css';
	import Header from './_components/Header.svelte';
</script>

<div class="flex flex-col h-screen bg-white">
	<Header />
	<div class="grow overflow-y-auto flex justify-center w-full bg-surface-500">
		<div class="w-full">
			<slot />
		</div>
	</div>
</div>
