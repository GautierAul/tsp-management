<script>
	import { reviewList } from '$lib/DB';
	import PcReviewList from './_components/PC/PCReviewList.svelte';
	import ReviewCaroussel from './_components/ReviewCaroussel/ReviewCaroussel.svelte';
</script>

<div
	class="flex flex-col items-center justify-normal md:justify-center p-8 bg-surface-200 w-full min-h-full gap-4"
>
	<div class="w-full md:w-2/3 h-full flex flex-col gap-2">
		<h1 class="text-center text-xl font-bold">
			Ce sont nos rencontres et vos retours positifs qui me motivent au quotidien.
		</h1>
		<h2 class="text-lg font-medium text-justify mb-6">
			Et nos partages d'expériences qui m'invitent toujours à l'amélioration continue. Certaines
			personnes ont pris le temps pour écrire leur ressenti et leur expérience vécue avec moi afin
			que je puisse vous les partager… Alors en voilà {reviewList.length} qui m'ont réellement touché
			! Un grand merci à vous, car je suis vraiment sensible à vos mots réellement motivants et qui sont
			aussi pour moi le seul KPI qui compte.
		</h2>
		<PcReviewList />
		<!-- <ReviewCaroussel /> -->
	</div>
</div>
