<script lang="ts">
	import { LinkedinIcon, MailIcon, PhoneCallIcon } from 'svelte-feather-icons';
	import ContactCard from './_components/ContactCard.svelte';
</script>

<div
	class="flex flex-col items-center justify-normal md:justify-center p-8 bg-surface-200 w-full h-fit md:h-full gap-10"
>
	<div class="flex flex-col gap-4 items-center">
		<img src="/logo-cut.png" class="h-20 w-20" alt="tsp" />
		<h1 class="text-lg font-semibold text-center">N'hésitez pas à me contacter !</h1>
	</div>
	<div class="flex flex-col md:flex-row gap-4">
		<ContactCard
			title="Par email"
			description="Pour une conversation formelle."
			contactValue="tsp.management.france</br>@gmail.com"
			link="mailto:tsp.management.france@gmail.com"
		>
			<MailIcon />
		</ContactCard>
		<ContactCard
			title="LinkedIn"
			description="Suivez mes dernières actualités."
			contactValue="Hervé Aulner"
			link="https://www.linkedin.com/in/hervé-aulner-47bb4946/"
		>
			<LinkedinIcon />
		</ContactCard>
		<ContactCard
			title="Appel téléphonique"
			description="Intéressé par mon profil ? Contactez-moi !"
			contactValue="06 07 03 78 87"
		>
			<PhoneCallIcon />
		</ContactCard>
	</div>

	<!-- <ContactCard link={item.link} title={item.title} isActive={item.active}>
		<svelte:component this={item.icon} {...item.iconParam} />
	</ContactCard> -->
</div>
