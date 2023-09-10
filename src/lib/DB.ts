export type Formule = {
	title: string;
	objective: string;
	description: string[];
	format: string;
	duration: string;
	image?: string;
};

export const formulesList: Formule[] = [
	{
		title: "S'initier",
		objective: 'Prendre du recul sur nos postures pourcréer l’engagement et faire face.',
		description: [
			'Le cadre d’organisation VS l’Humain',
			'Quelles CNT (Compétences Non Techniques) sont essentielles à la performance ?',
			'La responsabilité et la posture du manager',
			'Vos objectifs et le pilotage des moyens',
			'La force de l’objectif commun',
			'Être concret sur le sens',
			'Les leviers de la confiance',
			'Animer les défis en accompagnant les compétences/ressources',
			'L’approche par les compétences pour l’apprentissage par l’erreur',
			'Animer et entretenir les fiertés,'
		],
		format: 'Conférence séminaire',
		duration: '80 minutes'
	},
	{
		title: 'Approfondir',
		objective:
			'Travailler sur les postures, méthodes et outils pour repartir avec ses actions concrètes.',
		description: [
			'Prendre conscience de notre responsabilité sur l’engagement et la motivation par la posture du « chef », la compréhension des « autres » et les interactions pour construire un cadre relationnel de fonctionnement (Cadre de Relation et D.I.S.C)',
			'Comprendre pour mieux agir, comprendre « les leviers » de motivation et travailler sur les actions possibles, les contraintes et les enjeux (quelques approches sociologiques essentielles)',
			'Engager et accompagner : Analyser la situation pour décider des actions (S.O.I.E.C) et construire un objectif commun (O.C.P) en donnant du sens (S.E.C).',
			'Accompagner les performances (concept de Flow).',
			'Avoir une posture d’exigence bienveillante (T.H.E.O.R).',
			'Construire une « auto-évaluation » des collaborateurs sur leur engagement.',
			'Savoir communiquer avec assertivité (V.E.R.A). '
		],
		format: 'Formation groupe de 12 personnes maximum',
		duration: '12 heures'
	},
	{
		title: "S'entrainer",
		objective:
			'Réussir avec des mises en situation professionnelles et s’entrainer sur les postures et outils.',
		description: [
			'Utilisation de la méthode de l’approche par les compétences (APC) qui est apparue en 2013 chez les sapeurs-pompiers. Le manager est auteur de ses apprentissage grâce à des réelles mises en situation de travail sur des problématiques managériales. Pour valoriser et accompagner vers la progression, cela est suivi par des autoévaluations accompagnées qui engendrent des ateliers pédagogiques personnalisés',
			'Construire une décision et l’annoncer',
			'Recadrer',
			'Annoncer un objectif/une décision etc…)'
		],
		format: 'Formation renforcée groupe de 6 personnes maximum (en plus du parcours approfondir)',
		duration: '8 heures'
	}
];
