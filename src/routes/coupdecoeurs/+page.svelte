<script>
	import LinkButton from './_components/LinkButton.svelte';
</script>

<div class="flex flex-col items-center justify-center gap-10">
	<div class="w-full md:w-2/3 flex flex-col items-center justify-center gap-10 p-4">
		<h1 class="text-xl font-bold text-center">Mes coups de cœur encore d’actualité !</h1>
		<div class="flex flex-col gap-4 text-center divide-y-2 divide-surface-700">
			<LinkButton
				description="Un impératif ! Faire réussir une équipe hétérogène dans un but commun"
				title="Coopération en entreprise VS bureaucratie : une bataille loin d'être gagnée d'avance."
				link="https://www.hbrfrance.fr/organisation/cooperation-en-entreprise-une-bataille-contre-la-bureaucratie-qui-nest-pas-gagnee-davance-60226"
			/>
			<LinkButton
				description="« Je ne souris pas parce-que je suis heureux ; je suis heureux parce-que je souris » et en
        plus, d’après les neurosciences cela rendrait plus intelligent."
				title="Management par le sourire : souriez, vous êtes un(e) manager ! - Managers"
				link="https://managers.tn/2019/11/19/management-par-le-sourire-souriez-vous-etes-une-manager/"
			/>
			<LinkButton
				description="Douter de ses compétences et une compétence ; en conservant l’estime de soi…c’est trouver le
        bon équilibre de l’égo."
				title="L'humilité du dirigeant, source de performance pour l'entreprise, Management (lesechos.fr)"
				link="https://business.lesechos.fr/entrepreneurs/management/0702851680022-l-humilite-du-dirigeant-source-de-performance-pour-l-entreprise-350471.php#:~:text=Les%20%C3%A9tudes%20montrent%20que%20lorsque,se%20renforcent%20dans%20leur%20%C3%A9quipe.&text=D%C3%A9montrer%20une%20humilit%C3%A9%20situationnelle%20passe,erreurs%20et%20de%20vos%20lacunes."
			/>
			<LinkButton
				description="L’accompagnement est pour faire progresser et va au-delà du contrôle pour le contrôle."
				title="Management : quand la confiance doit exclure le contrôle - Management (ampproject.org)"
				link="https://business-lesechos-fr.cdn.ampproject.org/c/s/business.lesechos.fr/amp/70/346270.php"
			/>
		</div>
	</div>
</div>
