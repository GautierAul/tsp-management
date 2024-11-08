export type Formule = {
	title: string;
	objective: string;
	description: string[];
	format: string;
	duration: string;
	image: string;
	imageAlt: string;
};

export type Article = {
	title: string;
	description?: string;
	link: string;
	year: number;
};

export type Review = {
	name: string;
	company: string;
	content: string;
	poste?: string;
};

export type Distinction = {
	title: string;
	description?: string;
	year?: number;
	link: string;
};

export type CoupDeCoeur = {
	title: string;
	description: string;
	link: string;
};

export const formulesList: Formule[] = [
	{
		title: "S'initier",
		objective: 'Prendre du recul pour faire réussir une équipe hétérogène dans un but commun.',
		description: [
			'LES CNT (Compétences Non Techniques) essentielles à la performance',
			'Le cadre d’organisation VS l’Humain',
			'Quelles postures managériales pour un impact positif l’engagement de moyens',
			'Le but fédérateur de l’engagement collectif',
			'Matérialiser le sens pour la motivation',
			'Le cadre de cohésion et d’appartenance des valeurs et la confiance',
			'Stimuler les défis en accompagnant les compétences',
			'Animer et entretenir les fiertés'
		],
		format: 'Conférence séminaire',
		duration: '80 minutes',
		image: '/initier.png',
		imageAlt: 'Hervé en conférence'
	},
	{
		title: 'Approfondir',
		objective:
			'Favoriser la mise en pratique grâce à la maîtrise des postures, méthodes et outils.',
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
		duration: '12 heures',
		image: '/approfondir.jpg',
		imageAlt: 'Des élèves en formation dans un cours de management'
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
		duration: '8 heures',
		image: '/entrainer.jpg',
		imageAlt: 'Hervé en train de se muscler en chemise'
	}
];

export const articlesList: Article[] = [
	{
		title:
			'[Tribune] Écouter et décider pour obtenir performance...et QVT - Green Business - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/leviers-gouvernance-adaptative-inspiree-environnement-386943.htm',
		year: 2024
	},
	{
		title:
			"5 leviers pour une gouvernance adaptative inspirée par l'environnement des Sapeurs-Pompiers (actionco.fr)",
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/leviers-gouvernance-adaptative-inspiree-environnement-386943.htm',
		year: 2024
	},
	{
		title: 'Le management au féminin existe-t-il ? (actionco.fr)',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Le-management-au-feminin-existe-t-il--386194.htm',
		year: 2023
	},
	{
		title: '[Tribune] Les 6 socles pour engager vraiment nos équipes - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/-Tribune-Les-6-socles-pour-engager-vraiment-nos-equipes-372117.htm',
		year: 2022
	},

	{
		title: '[Tribune] Être manager...oui ! Mais pour manager quoi ? (actionco.fr)',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Etre-manager-et-savoir-manager-377008.htm',
		year: 2022
	},
	{
		title:
			'[Tribune] Le diable ne serait-il pas caché dans la bienveillance ? - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-diable-serait-pas-cache-bienveillance-367115.htm',
		year: 2021
	},
	{
		title:
			'[Tribune] Négociation sous haute pression : les mots qui font la différence - Process de vente - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/process-vente-1216/Breves/Tribune-negociation-sous-haute-pression-mots-qui-font-difference-345582.htm',
		year: 2020
	},
	{
		title: "[Tribune] L'évolution managériale en période de Covid-19 - Management - Actionco.fr",
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-evolution-manageriale-periode-Covid-348184.htm',
		year: 2020
	},
	{
		title: '[Tribune] Covid-19 : les 5 postures managériales émergentes - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-Covid-postures-manageriales-emergentes-349037.htm',
		year: 2020
	},
	{
		title:
			'[Tribune] Les 7 conditions pour être un vendeur heureux et performant - Process de vente - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/rh-1217/Breves/Tribune-conditions-vendeur-heureux-performant-351931.htm',
		year: 2020
	},
	{
		title: '[Tribune] Les 4 actes pour mettre en mouvement sa stratégie - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-actes-mettre-mouvement-strategie-350453.htm',
		year: 2020
	},
	{
		title:
			'[Tribune] Pourquoi, face au feu, les pompiers y arrivent-ils toujours ? - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-Pourquoi-face-feu-pompiers-arrivent-toujours-339596.htm',
		year: 2019
	},
	{
		title: "[Tribune] Les 7 leviers de l'engagement - Management - Actionco.fr",
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-leviers-engagement-334588.htm',
		year: 2018
	},
	{
		title:
			"[Tribune] Pas d'engagement client sans engagement collaborateur ! - Management - Actionco.fr",
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-Pas-engagement-client-sans-engagement-collaborateur-334371.htm',
		year: 2018
	},
	{
		title:
			'Prise de décision : être en harmonie entre ses convictions et ses obligations de manager - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Prise-decision-harmonie-entre-ses-convictions-ses-obligations-manager-329259.htm',
		year: 2018
	},
	{
		title:
			"Récompenser les meilleurs commerciaux tout en motivant le reste de l'équipe? - Management - Actionco.fr",
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Recompenser-meilleurs-commerciaux-tout-motivant-reste-equipe-317895.htm',
		year: 2017
	},
	{
		title: "[Tribune] Il est urgent d'arrêter de manager ! - Management - Actionco.fr",
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-est-urgent-arreter-manager-322692.htm',
		year: 2017
	},
	{
		title:
			"Motivation commerciale : les secrets pour atteindre ses objectifs en fin d'année (beaboss.fr)",
		link: 'https://www.beaboss.fr/Thematique/marketing-vente-1027/Breves/Motivation-commerciale-secrets-atteindre-ses-objectifs-fin-annee-319776.htm',
		year: 2017
	},
	{
		title: '[Tribune] Les 7 mauvaises résolutions pour 2016 - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-mauvaises-resolutions-2016-300379.htm',
		year: 2016
	},
	{
		title: 'Entreprise libérée... du mythe à la réalité ! - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Entreprise-liberee-mythe-realite-305339.htm',
		year: 2016
	},
	{
		title:
			"7 chantiers pour réussir sa stratégie d'expérience client - Stratégie commerciale - Actionco.fr",
		link: 'https://www.actionco.fr/Thematique/strategie-commerciale-1218/Breves/chantiers-reussir-strategie-experience-client-306405.htm#PiEkfpKbH6JILGFg.97',
		year: 2016
	},
	{
		title: 'Et si on formait nos commerciaux différemment ? - Ressources humaines - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/rh-1217/Breves/-formait-nos-commerciaux-differemment-310508.htm',
		year: 2016
	},
	{
		title: 'Les commerciaux réinventent leur métier (lefigaro.fr)',
		link: 'https://www.lefigaro.fr/emploi/2015/01/19/09005-20150119ARTFIG00009-les-commerciaux-reinventent-leur-metier.php',
		year: 2015
	},
	{
		title: "[Tribune] S'inspirer du management des Sapeurs-Pompiers - Management - Actionco.fr",
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-inspirer-management-Sapeurs-Pompiers-258416.htm',
		year: 2015
	},
	{
		title:
			'[Tribune] Les incentives : levier de motivation et de performance ? - Management - Actionco.fr',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Tribune-incentives-levier-motivation-performance-256980.htm',
		year: 2015
	},
	{
		title:
			'Storytelling : 5 clés pour réussir à captiver votre public (cadre-dirigeant-magazine.com)',
		link: 'https://www.cadre-dirigeant-magazine.com/manager/storytelling-5-cles-captiver-public/',
		year: 2014
	},
	{
		title: 'Comment réussir l’entretien annuel d’évaluation (cadre-dirigeant-magazine.com)',
		link: 'https://www.cadre-dirigeant-magazine.com/manager/comment-reussir-lentretien-annuel-devaluation/',
		year: 2014
	}
];

export const reviewList: Review[] = [
	{
		name: 'Celal KARABAY',
		company: 'Nova Home et Idea Construction',
		poste: 'Président Directeur Général',
		content: `Les principales sociétés de notre groupe, Nova Home et Idea Construction ayant évolué très fortement, j’ai été amené à multiplier par 3 les cadres en moins de 3 ans. <br />
J’ai rapidement ressenti le besoin de prendre du recul sur nos process afin de préserver et améliorer nos performances humaines et organisationnelles. <br />
Hervé nous a accompagné dans l’analyse de certains processus et dans le fonctionnement de notre collectif, il nous a proposé et accompagné dans des plans d’actions pertinents et concret. <br />
Il a également accompagné en coaching 3 membres du CODIR. <br />
Hervé nous a organisé un séminaire (avec sa conférence) pour célébrer nos réussites et démontrer à nouveau la force d’un vrai collectif où chacun se sent co-responsable de la réussite du groupe. <br />
L’accompagnement, les coachings et le séminaire ont été très efficaces et ont fait du bien à notre collectif. <br />
Les approches atypiques d’Hervé nous ont invité et nous invitent encore à devenir meilleur en co-construction.`
	},
	{
		name: 'Cyrielle Brunetti',
		company: 'APEC',
		poste: 'Consultante Développement Professionnel',
		content: `Pour bien aborder la rentrée avec les cadres accompagnés par l’APEC, nous avons organisé au centre Apec de Metz une intervention avec pour thème : « Renforcer sa posture de réussite par la compréhension de soi en faisant le lien avec le monde des sapeurs pompiers »

 <br />Et tout ça dans la bonne humeur ! <br />

Encore Merci Hervé AULNER pour cette journée enrichissante notamment avec l’apport des méthodes de préparation mentale et des leviers de performance inspirés du monde des sapeurs pompiers.
`
	},
	{
		name: 'Y.A',
		company: 'CODIR IDEA CONSTRUCTION-NOVAHOMES',
		content: `« Au début de l'année, j'ai demandé un coaching pour renforcer ma confiance en moi, mon leadership et mon assertivité ; mon directeur général a confié cette mission à Hervé.
Nous avons abordé des méthodes, mais Hervé m'a d'abord aidé à réfléchir sur mon identité, mes croyances limitantes, mes atouts et ma résilience face à des situations complexes.
J'avais déjà tenté de travailler sur ces aspects par le passé, sans succès. Le coaching avec Hervé a été extrêmement fructueux, m'amenant à une réelle prise de conscience de mes capacités. Désormais, je sais gérer les situations en acceptant mes émotions, ce qui me permet d'utiliser les méthodes et outils de manière optimale. Cet accompagnement m'a véritablement permis de progresser et de m'améliorer ! Merci Hervé pour ton écoute, ton professionnalisme et ton soutien »`
	},
	{
		name: 'Fabien Lucron',
		company: 'Primeum',
		content:
			'Primeum a fait appel à Hervé pour consolider les aptitudes du Codir et de nos managers. Sa capacité d’adaptation au contexte de l’entreprise ainsi qu’aux besoins individuels nous ont été précieux. Une formation au management nous en avons tous vécu au préalable, celle que Hervé nous a donnée est pleine d’humanité et de techniques appliquables rapidement, je l’en remercie encore au nom de toute notre équipe de direction.',
		poste: 'CODIR'
	},
	{
		name: 'Julie Misère',
		company: 'CHU Sainte Justine',
		content:
			"La conférence Team Spirit & Performance a été une expérience extraordinaire qui m'a profondément inspiré. Hervé Aulner a su captiver mon attention et transmettre des enseignements précieux, renforçant ainsi ma conviction en l'importance de l'esprit d'équipe pour atteindre l'excellence.",
		poste: 'Coordinatrice de recherche'
	},
	{
		name: 'Stéphanie C',
		company: 'Entreprise de conseils Paris',
		content:
			"Un grand merci pour tout ce que tu nous as apporté au cours de ces 2 jours passés ensemble. Nous avions besoin d'être secoués, challengés, d'apprendre des techniques concrètes, c'était parfait ! Je crois que chacun a beaucoup appris et s'est remis en question.		",
		poste: 'Directrice RH Admin et Finances'
	},
	{
		name: 'Yves Morby',
		company: 'CIPA Haaptmann’s Schlass',
		content:
			"J'ai eu la chance de participer à une conférence de Hervé Aulner au sujet de l'expérience client dans le cadre de mon Master 2 en qualité et innovation.Hervé Aulner a présenté le sujet d'une manière à captiver mon attention dès les premiers instants.La conférence était riche en contenu avec un nombre important d'éléments directement transposables dans ma pratique professionnelle.armi les nombreux intervenants que j'ai rencontrés lors du Master, Hervé Aulner a été le conférencier qui m'a le plus marqué tant pour la qualité de son exposé que pour les nombreux échanges très agréables et enrichissants lors de sa présentation.Je suis très content d'avoir rencontré Hervé Aulner et je recommanderai ses conférences à tout un chacun, sans hésitation.",
		poste: 'Directeur'
	},
	{
		name: 'Holger BRACKER',
		company: 'Groupe ZITHA',
		content:
			'Hervé Aulner, un vrai pro et passionné dans le contexte de ses fonctions au groupe POST et en tant qu’officier chef des sapeurs-pompiers, arrive facilement à vous captiver quant à la promotion de l’engagement en entreprise. Sa façon de générer le team spirit et la performance est basée sur 7 leviers permettant d’impacter de manière positive et importante la motivation de l’individu. Avec sa personnalité emphatique et charismatique, Hervé Aulner enflamme l’inspiration de son entourage de vouloir marcher dans ses traces. Je garde en bon souvenir une rencontre enrichissante et d’une plus-value extraordinaire',
		poste: 'Secrétaire Général, Coordinateur Qualité et Responsable RSE'
	},
	{
		name: 'Anny BUBOIS',
		company: 'Garderie préscolaire des petits pieds Québec',
		content:
			'Une rencontre marquante lors de ma visite dans le cadre de l’école d’été MBA-UQTR 2023. Des valeurs professionnelles partagées, un océan sépare nos réalités, mais une vision commune nous unis. Merci Hervé AULNER de comprendre les gens et de bien vulgariser ce qui est essentiel à la réussite en gestion. Une belle conférence, de loin l’une des meilleurs à mon avis',
		poste: 'Directrice Générale'
	},
	{
		name: 'Siham VICINI',
		company: 'Total Energies Proxi Nord',
		content:
			"Hervé incarne la passion du management de l'humain conjuguée à la performance commerciale. Sa dévotion envers ces sphères est une véritable source d'inspiration pour moi.  Son énergie contagieuse et sa capacité à inspirer la cohésion de groupe sont tout simplement remarquables",
		poste: 'Chef de marché gaz et Électricité'
	},
	{
		name: 'David DORKEL',
		company: 'Croix Rouge Luxembourgeoise',
		content:
			'Introduction accrocheuse, scénario passionnant et une conclusion inspirante. La rémanence de son intervention se fait encore sentir dans mon management au quotidien. Hervé est une personne qui « fait grandir',
		poste: 'Responsable département prélèvement'
	},

	{
		name: 'Bruno Trompette',
		company: 'Sapeurs-Pompiers de la Moselle',
		content:
			'Une belle découverte, Hervé sait transmettre son expérience et sa compréhension de l’humain. Sa maitrise du sujet est palpable et lui permet une vulgarisation technique dans des échanges décomplexés.',
		poste: 'Chef d’une Unité Opérationnelle'
	},
	{
		name: 'Julie Bélisle-Gauthier',
		company: 'Investissement Québec',
		content:
			'Hervé nous présente sa vision de la gestion empreinte de bienveillance, et nous inspire à devenir de meilleurs leaders en des mots simples, clairs et qui touchent au cœur. Merci pour ce beau moment !',
		poste: 'Directrice de comptes principales'
	}
];

export const distinctionsList: Distinction[] = [
	{
		title: 'Trophée Action Co - 2019',
		link: 'https://www.actionco.fr/Thematique/strategie-commerciale-1218/Diaporamas/tac2019-qui-sont-laureats-2019-345382/animation-commerciale-points-vente-poste-remporte--345383.htm'
	},
	{
		title: 'Trophée Action Co - 2014',
		link: 'https://www.actionco.fr/Thematique/management-1214/Breves/Trophees-2014-Managers-annee-decouvrez-podium-247901.htm'
	}
];

export let coupDeCoeurList: CoupDeCoeur[] = [
	{
		title: "Coopération en entreprise VS bureaucratie : une bataille loin d'être gagnée d'avance.",
		description: 'Un impératif ! Faire réussir une équipe hétérogène dans un but commun',
		link: 'https://www.hbrfrance.fr/organisation/cooperation-en-entreprise-une-bataille-contre-la-bureaucratie-qui-nest-pas-gagnee-davance-60226'
	},
	{
		title: 'Management par le sourire : souriez, vous êtes un(e) manager ! - Managers',
		description:
			'« Je ne souris pas parce-que je suis heureux ; je suis heureux parce-que je souris » et en plus, d’après les neurosciences cela rendrait plus intelligent.',
		link: 'https://managers.tn/2019/11/19/management-par-le-sourire-souriez-vous-etes-une-manager/'
	},
	{
		title:
			"L'humilité du dirigeant, source de performance pour l'entreprise, Management (lesechos.fr)",
		description:
			'Douter de ses compétences et une compétence ; en conservant l’estime de soi…c’est trouver le bon équilibre de l’égo.',
		link: 'https://business.lesechos.fr/entrepreneurs/management/0702851680022-l-humilite-du-dirigeant-source-de-performance-pour-l-entreprise-350471.php#:~:text=Les%20%C3%A9tudes%20montrent%20que%20lorsque,se%20renforcent%20dans%20leur%20%C3%A9quipe.&text=D%C3%A9montrer%20une%20humilit%C3%A9%20situationnelle%20passe,erreurs%20et%20de%20vos%20lacunes.'
	},
	{
		title: 'Management : quand la confiance doit exclure le contrôle - Management (ampproject.org)',
		description:
			'L’accompagnement est pour faire progresser et va au-delà du contrôle pour le contrôle.',
		link: 'https://business-lesechos-fr.cdn.ampproject.org/c/s/business.lesechos.fr/amp/70/346270.php'
	}
];
