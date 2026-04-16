export interface Question {
  question: string;
  options: { [key: string]: string };
  reponse: string;
  explication: string;
}

export interface QuizModule {
  title: string;
  questions: Question[];
}

export const allQuizzes: { [id: string]: QuizModule } = {
  'M01': {
    title: "MEO2-M01 : Etude de faisabilité d'opportunités",
    questions: [
      {
        question: "Comment est également appelée l'étude d'opportunité ?",
        options: { a: "Plan d'affaires", b: "Analyse de marché", c: "Business case", d: "Rapport annuel" },
        reponse: "c",
        explication: "L'étude d'opportunité, aussi appelée analyse d'opportunité ou note d'opportunité, est également connue sous le nom de 'business case'."
      },
      {
        question: "Quelle est la principale différence entre une étude d'opportunité et une étude de faisabilité ?",
        options: { a: "Il n'y a aucune différence", b: "L'étude d'opportunité évalue en plus les résultats attendus", c: "L'étude de faisabilité est plus courte", d: "L'étude d'opportunité ne concerne que les aspects financiers" },
        reponse: "b",
        explication: "L'étude d'opportunité va au-delà de la faisabilité (l'opportunité est-elle réalisable ?) en y ajoutant une évaluation des résultats attendus."
      },
      {
        question: "Lequel de ces éléments n'est PAS un objectif principal de l'étude de faisabilité ?",
        options: { a: "L'identification des ressources nécessaires", b: "La rédaction des statuts de l'entreprise", c: "L'établissement de différents scénarios", d: "La détermination des conditions de réussite" },
        reponse: "b",
        explication: "La rédaction des statuts intervient dans la phase de création juridique de l'entreprise, bien après l'étude d'opportunité qui vise à valider l'idée."
      },
      {
        question: "Combien d'étapes communes principales composent une étude d'opportunité pertinente ?",
        options: { a: "Deux étapes", b: "Trois étapes", c: "Cinq étapes", d: "Sept étapes" },
        reponse: "c",
        explication: "Les principales étapes sont : 1. Définition du problème, 2. Analyse de la situation, 3. Définition de l'état souhaité, 4. Etude des scénarios, 5. Choix de l'option."
      },
      {
        question: "Dans l'analyse de la situation, quel critère est décrit comme 'à satisfaire obligatoirement pour la résolution du problème' ?",
        options: { a: "Souhaitable", b: "Facultatif", c: "Optionnel", d: "Obligatoire/Requis" },
        reponse: "d",
        explication: "Le critère 'Obligatoire/Requis' doit impérativement être satisfait pour que la solution au problème soit viable."
      },
      {
        question: "Quel outil d'analyse N'est PAS cité pour l'analyse de la situation ?",
        options: { a: "Matrice SWOT", b: "Analyse PESTEL", c: "Diagramme de Gantt", d: "Diagramme d'Ishikawa" },
        reponse: "c",
        explication: "Le diagramme de Gantt est un outil de planification de projet, tandis que SWOT, PESTEL et Ishikawa sont des outils d'analyse de situation."
      },
      {
        question: "Lors de l'étude des scénarios possibles, combien d'options au minimum est-il recommandé de présenter ?",
        options: { a: "Une seule option", b: "Deux options", c: "Trois options", d: "Cinq options" },
        reponse: "c",
        explication: "Il est recommandé de présenter au moins trois options ou scénarios pour permettre un choix éclairé et comparatif."
      },
      {
        question: "Quelle analyse est considérée comme un excellent outil pour la définition des options ou scénarios ?",
        options: { a: "L'analyse financière", b: "L'analyse SWOT", c: "L'analyse des risques", d: "L'analyse concurrentielle" },
        reponse: "b",
        explication: "L'analyse SWOT (Forces, Faiblesses, Opportunités, Menaces) est un excellent outil pour définir et évaluer les différentes options stratégiques."
      },
      {
        question: "Laquelle de ces contraintes n'est pas directement citée comme une contrainte majeure de l'étude d'opportunités ?",
        options: { a: "Légales et règlementaires", b: "Techniques", c: "Managériales", d: "Financières" },
        reponse: "c",
        explication: "Le cours cite les contraintes légales, techniques, financières et économiques comme les principales à considérer dans une étude d'opportunités."
      },
      {
        question: "Quels sont les quatre critères essentiels pour l'évaluation des opportunités ?",
        options: { a: "Coûts, délais, qualité, ressources", b: "Marketing, ventes, finance, RH", c: "Coûts, bénéfices, cohérence stratégique, difficulté de mise en œuvre", d: "Technologie, innovation, concurrence, marché" },
        reponse: "c",
        explication: "Les quatre critères clés pour évaluer une opportunité sont les coûts, les bénéfices, la cohérence stratégique et les difficultés de mise en œuvre."
      },
      {
        question: "Selon le critère du rapport coûts-bénéfices, quel projet est généralement accepté ?",
        options: { a: "Un projet avec un rapport égal ou supérieur à 1", b: "Un projet avec un rapport inférieur à 1", c: "Un projet avec un rapport égal à 0", d: "Un projet avec un rapport négatif" },
        reponse: "a",
        explication: "Un projet est jugé acceptable si son rapport bénéfice-coût est égal ou supérieur à 1, signifiant que les bénéfices sont au moins égaux aux coûts."
      },
      {
        question: "Le développement d'opportunités sans lien avec la stratégie globale de l'entreprise aboutit généralement à quoi ?",
        options: { a: "Un succès rapide", b: "Des échecs", c: "Une croissance modérée", d: "Une réorientation stratégique" },
        reponse: "b",
        explication: "Le cours souligne que le développement d'opportunités sans concordance avec la stratégie globale de l'entreprise mène généralement à des échecs."
      },
      {
        question: "Qu'est-ce que la 'force motrice' d'une entreprise ?",
        options: { a: "Le capital financier de l'entreprise", b: "L'élément catalyseur qui oriente ses choix stratégiques", c: "Le nombre d'employés", d: "Le conseil d'administration" },
        reponse: "b",
        explication: "La force motrice est l'élément catalyseur propre à une entreprise qui oriente ses choix en matière de produits, clients et marchés futurs."
      },
      {
        question: "Une entreprise orientée 'concept de produit' se caractérise par quoi ?",
        options: { a: "Le ciblage d'un seul type de client", b: "La fourniture d'un seul produit avec des dérivés possibles", c: "L'utilisation d'un seul canal de distribution", d: "L'investissement massif en équipement" },
        reponse: "b",
        explication: "Une entreprise dont la force motrice est le concept de produit se concentre sur la fourniture d'un seul produit principal et ses futurs dérivés."
      },
      {
        question: "L'absence de similitude entre une opportunité et les domaines de l'entreprise traduit quoi ?",
        options: { a: "Une forte cohérence stratégique", b: "Une faible cohérence stratégique", c: "Un potentiel de diversification", d: "Une innovation de rupture" },
        reponse: "b",
        explication: "L'absence de similitude entre l'opportunité et l'activité actuelle de l'entreprise indique une faible cohérence stratégique."
      },
      {
        question: "Le degré de difficulté de mise en œuvre d'une opportunité croît en fonction de quoi ?",
        options: { a: "Du budget alloué", b: "Du nombre de changements à apporter", c: "De la taille de l'entreprise", d: "De la situation du marché" },
        reponse: "b",
        explication: "Le degré de difficulté de mise en œuvre augmente avec le nombre de changements nécessaires à la réalisation de l'opportunité."
      },
      {
        question: "Dans la grille d'analyse complète, comment est qualifiée une opportunité avec un coût réduit, un bénéfice élevé, une forte cohérence et une facilité de mise en œuvre ?",
        options: { a: "Probable", b: "Risqué", c: "Possible", d: "Excellent" },
        reponse: "d",
        explication: "Une opportunité présentant ces caractéristiques est classée dans la case A, qualifiée d'excellente, car elle est la meilleure possible."
      },
      {
        question: "Comment sont qualifiées les opportunités des cases G, H, et I de la grille d'analyse ?",
        options: { a: "Probables", b: "Possibles", c: "Risquées", d: "Mitigées" },
        reponse: "c",
        explication: "Les opportunités dans les cases G, H, I sont jugées risquées à mettre en œuvre en raison de leurs faibles niveaux de bénéfices et de cohérence stratégique."
      },
      {
        question: "Pour une opportunité qualifiée de 'mitigée' (case D), que peut-on envisager ?",
        options: { a: "L'abandonner immédiatement", b: "La lancer sans modification", c: "Des actions pour réduire les coûts et les difficultés", d: "Attendre une meilleure conjoncture" },
        reponse: "c",
        explication: "Pour les opportunités 'mitigées', des actions peuvent être envisagées pour réduire les coûts de réalisation et les difficultés de mise en œuvre."
      },
      {
        question: "La première étape du développement d'une opportunité consiste à faire quoi ?",
        options: { a: "Identifier les facteurs critiques", b: "Établir un plan de mise en œuvre", c: "Bâtir des scénarios (meilleur et pire des cas)", d: "Chercher le financement" },
        reponse: "c",
        explication: "La première étape du développement est de bâtir des scénarios en prévoyant les meilleurs et les pires résultats possibles pour l'opportunité."
      },
      {
        question: "Dans l'analyse du rapport risque/gain, un coefficient de +5 correspond à un gain de quel niveau ?",
        options: { a: "Faible", b: "Relatif", c: "Significatif", d: "Élevé" },
        reponse: "d",
        explication: "Selon la grille de pondération, un coefficient de +5 représente un niveau de gain 'Élevé'."
      },
      {
        question: "Dans l'analyse du rapport risque/gain, un coefficient de -5 correspond à un risque de quel niveau ?",
        options: { a: "Désastreux", b: "Considérable", c: "Significatif", d: "Faible" },
        reponse: "a",
        explication: "Selon la grille de pondération, un coefficient de -5 représente un niveau de risque 'Désastreux'."
      },
      {
        question: "Selon la technique d'interprétation du rapport risque/gain, que doit-on faire d'une opportunité avec une côte entre -1 et +1 ?",
        options: { a: "La mettre en œuvre prioritairement", b: "L'abandonner car son impact est minimal", c: "La revoir en profondeur", d: "Chercher plus de financement" },
        reponse: "b",
        explication: "Les opportunités avec une côte entre -1 et +1 ont un impact minimal et sont donc à abandonner."
      },
      {
        question: "Qu'est-ce qu'un facteur critique dans le développement d'une opportunité ?",
        options: { a: "Uniquement ce qui peut causer le pire scénario", b: "Uniquement ce qui peut causer le meilleur scénario", c: "Tout ce qui peut causer le meilleur ou le pire scénario", d: "Un membre important de l'équipe projet" },
        reponse: "c",
        explication: "Le facteur critique est tout élément qui peut influencer l'issue vers le meilleur ou le pire des scénarios envisagés."
      },
      {
        question: "Laquelle de ces propositions est un exemple de facteur critique technique ?",
        options: { a: "Permanence du marché", b: "Disponibilité des compétences techniques", c: "Impact sur les parts de marché", d: "Calcul du cash-flow" },
        reponse: "b",
        explication: "La disponibilité des compétences techniques ou scientifiques requises est un facteur critique appartenant à la catégorie 'Facteurs techniques'."
      },
      {
        question: "Lequel de ces éléments appartient aux 'Facteurs de stabilité' ?",
        options: { a: "Probabilité et effets des baisses du marché", b: "Potentiel de croissance à long terme", c: "Rendement prévu (ROI)", d: "Adéquation des ressources à la recherche" },
        reponse: "a",
        explication: "La probabilité et les effets des baisses du marché sont un facteur critique lié à la stabilité de l'opportunité."
      },
      {
        question: "La 'Possibilité d'obtenir un brevet' est un facteur critique de quelle catégorie ?",
        options: { a: "Facteurs financiers", b: "Facteurs de production", c: "Facteurs techniques", d: "Protection" },
        reponse: "d",
        explication: "La possibilité d'obtenir un brevet et le caractère unique du produit sont des facteurs liés à la 'Protection'."
      },
      {
        question: "Pour réussir la mise en œuvre, sur quoi l'accent doit-il être mis ?",
        options: { a: "Uniquement sur la réalisation du meilleur scénario", b: "Uniquement sur l'évitement du pire scénario", c: "Réunir les chances pour le meilleur et freiner la réalisation du pire", d: "Se concentrer sur la communication" },
        reponse: "c",
        explication: "La réussite de la mise en œuvre implique de travailler à la fois à maximiser les chances de succès (meilleur scénario) et à prévenir les causes d'échec (pire scénario)."
      },
      {
        question: "Quelle est la différence entre une action préventive et une action d'incitation ?",
        options: { a: "Aucune, ce sont des synonymes", b: "L'action préventive empêche une cause, l'action d'incitation assure sa réalisation", c: "L'action d'incitation coûte plus cher", d: "L'action préventive est pour le court terme, l'incitation pour le long terme" },
        reponse: "b",
        explication: "Contrairement aux actions préventives qui empêchent une cause négative, les actions d'incitation visent à assurer la réalisation effective de la cause d'une opportunité."
      },
      {
        question: "Utiliser des panneaux 'défense de fumer' est un exemple de quelle type d'action ?",
        options: { a: "Action corrective", b: "Action de secours", c: "Action préventive", d: "Action d'incitation" },
        reponse: "c",
        explication: "C'est une mesure préventive qui vise à éliminer une cause future d'un problème (incendie, maladies)."
      },
      {
        question: "Installer des extincteurs est un exemple de quelle type d'action ?",
        options: { a: "Action d'incitation", b: "Action de secours", c: "Action préventive", d: "Action corrective" },
        reponse: "b",
        explication: "C'est une action de secours qui vise à atténuer les effets futurs d'un problème (un départ de feu) sans en empêcher la cause."
      },
      {
        question: "Distribuer gratuitement des publications par des éditeurs est un exemple de quelle action ?",
        options: { a: "Action d'incitation", b: "Action préventive", c: "Action de secours", d: "Action d'exploitation" },
        reponse: "a",
        explication: "C'est une action d'incitation visant à assurer la réalisation d'une cause d'opportunité (faire connaître les auteurs pour générer des ventes futures)."
      },
      {
        question: "Que visent les actions d'exploitation ?",
        options: { a: "À empêcher la cause d'un problème", b: "À atténuer les effets d'un problème", c: "À augmenter les bénéfices provenant des effets d'une opportunité", d: "À assurer la réalisation de la cause d'une opportunité" },
        reponse: "c",
        explication: "Les actions d'exploitation ciblent l'augmentation des bénéfices découlant des effets potentiels d'une opportunité."
      },
      {
        question: "À quoi doit aboutir l'identification des actions à prendre ?",
        options: { a: "À un rapport financier", b: "À l'établissement d'une feuille de travail", c: "Au recrutement d'un chef de projet", d: "À une campagne marketing" },
        reponse: "b",
        explication: "L'identification des différentes actions doit aboutir à l'établissement d'une feuille de travail qui synthétise les facteurs critiques et les actions correspondantes."
      },
      {
        question: "Le plan de mise en œuvre est bâti essentiellement à partir de quoi ?",
        options: { a: "Du budget disponible", b: "Des facteurs critiques identifiés lors du développement", c: "De l'organigramme de l'entreprise", d: "De l'analyse de la concurrence" },
        reponse: "b",
        explication: "Le plan de mise en œuvre est une étape importante bâtie essentiellement à partir des facteurs critiques identifiés précédemment."
      },
      {
        question: "Lequel de ces éléments n'est pas cité comme faisant partie de l'élaboration du plan de mise en œuvre ?",
        options: { a: "Réalisation d'étude de faisabilité", b: "Réalisation de prototype et essaimage", c: "Audit comptable de l'entreprise", d: "Lancement, distribution et commercialisation" },
        reponse: "c",
        explication: "L'audit comptable n'est pas une étape du plan de mise en œuvre d'un nouveau produit/service, qui inclut la faisabilité, le prototypage et le lancement."
      },
      {
        question: "À qui est légué le livrable de l'étude d'opportunité en cas d'issue favorable ?",
        options: { a: "Au service marketing", b: "Aux actionnaires", c: "À l'équipe de gestion du projet", d: "Au service juridique" },
        reponse: "c",
        explication: "En cas de décision favorable, le livrable est transmis à l'équipe de gestion du projet qui s'en servira comme base pour la mise en œuvre."
      },
      {
        question: "Une entreprise orientée 'capacité de production' se caractérise par quoi ?",
        options: { a: "Un ciblage de clients âgés", b: "La vente en ligne", c: "Un gros investissement en matière d'équipement", d: "Une aptitude à inventer des technologies" },
        reponse: "c",
        explication: "La force motrice 'capacité de production' se traduit par un investissement majeur en équipement, comme dans une cimenterie par exemple."
      },
      {
        question: "Quelle est la conclusion d'une situation marquée par un risque élevé (ex: -5) et une légère amélioration (ex: +1) ?",
        options: { a: "Absence de risque et légère amélioration", b: "Risque relatif et légère amélioration", c: "Risque et amélioration significative", d: "Risque élevé et légère amélioration" },
        reponse: "d",
        explication: "Cette combinaison indique une situation finale où le risque encouru est très élevé pour un gain potentiel très faible."
      },
      {
        question: "L'évaluation de la cohérence stratégique se fait en l'absence d'une force motrice claire en faisant quoi ?",
        options: { a: "En demandant l'avis des clients", b: "En analysant les rapports financiers", c: "En répondant à des questions sur les composantes de base", d: "En copiant la stratégie des concurrents" },
        reponse: "c",
        explication: "En absence d'une force motrice claire, l'évaluation se fait en répondant à des questions sur les composantes de base (produit, marché, clients, etc.)."
      }
    ]
  },
  'M02': {
    title: 'MEO-M02 : Processus de recherche d\'opportunités',
    questions: [
      {
        question: "Selon le cours, à quelle conception de l'économie la notion d'opportunité est-elle principalement liée ?",
        options: { a: "La conception classique", b: "La conception marxiste", c: "La conception néoclassique", d: "La conception keynésienne" },
        reponse: "c",
        explication: "Le cours précise que la notion d'opportunité est un concept lié à la conception néoclassique de l'économie, caractérisée par l'asymétrie de l'information."
      },
      {
        question: "Parmi ces affirmations sur l'opportunité, laquelle est considérée comme inexacte par le cours ?",
        options: { a: "Elle doit correspondre à un besoin du marché", b: "Elle se trouve au cœur du processus entrepreneurial", c: "C'est une occasion de satisfaire un besoin nouveau ou insatisfait", d: "Elle est un concept lié à la conception classique de l'économie" },
        reponse: "d",
        explication: "L'affirmation inexacte est que l'opportunité est liée à la conception classique. Le cours la lie explicitement à la conception néoclassique."
      },
      {
        question: "Quelle approche considère l'opportunité comme une réalité objective qui existe indépendamment de l'individu ?",
        options: { a: "La perspective subjectiviste", b: "La perspective objectiviste", c: "La perspective constructiviste", d: "La perspective personnelle" },
        reponse: "b",
        explication: "La perspective objectiviste considère l'opportunité comme une reality objective, dont l'identification dépend de l'information disponible et de la vigilance de l'entrepreneur."
      },
      {
        question: "L'approche subjectiviste de l'opportunité dépend principalement de quels facteurs ?",
        options: { a: "De la disponibilité de l'information et des ressources", b: "Des lois du marché et de la concurrence", c: "De l'imagination, de la personnalité et des modes de vie de l'entrepreneur", d: "Des indicateurs économiques et financiers" },
        reponse: "c",
        explication: "L'approche subjectiviste considère l'opportunité comme une construction sociale qui dépend principalement de l'imagination et de la personnalité de l'entrepreneur."
      },
      {
        question: "Laquelle de ces dispositions n'est PAS citée comme favorable à la détection d'opportunités ?",
        options: { a: "L'esprit critique", b: "L'ouverture d'esprit", c: "La curiosité intellectuelle", d: "La rigueur financière" },
        reponse: "d",
        explication: "Le cours met l'accent sur trois dispositions essentielles : l'esprit critique, l'ouverture d'esprit et la curiosité intellectuelle."
      },
      {
        question: "Identifier les tendances avant les concurrents et juger des bienfaits des offres actuelles relève de quelle disposition ?",
        options: { a: "L'ouverture d'esprit", b: "La créativité", c: "L'esprit critique", d: "La curiosité intellectuelle" },
        reponse: "c",
        explication: "Ces actions relèvent de l'esprit critique, qui permet d'établir des constats et de repérer des besoins nouveaux ou insatisfaits."
      },
      {
        question: "Accepter les savoir-faire externes et être à l'écoute des collaborateurs, clients et fournisseurs relève de :",
        options: { a: "L'esprit critique", b: "L'ouverture d'esprit", c: "La curiosité intellectuelle", d: "L'analyse concurrentielle" },
        reponse: "b",
        explication: "Cela correspond à l'ouverture d'esprit, qui nécessite d'accepter les apports externes et de rester attentif aux autres."
      },
      {
        question: "Selon le cours, la détection des opportunités repose sur la vigilance dans combien de domaines clés ?",
        options: { a: "Un seul : la vie professionnelle", b: "Deux : la vie économique et sociale", c: "Trois : la vie économique, professionnelle et quotidienne", d: "Quatre : la technologie, la finance, le marketing et les RH" },
        reponse: "c",
        explication: "La détection des opportunités nécessite une vigilance régulière dans au moins trois domaines clés : la vie économique, professionnelle et quotidienne."
      },
      {
        question: "Laquelle de ces sources n'est PAS un moyen d'observation de la vie économique et sociale ?",
        options: { a: "Les médias et le Web", b: "La tendance des jeunes", c: "Les technologies numériques", d: "Les routines personnelles de travail" },
        reponse: "d",
        explication: "Les routines personnelles de travail relèvent de l'observation de la vie professionnelle, et non de la vie économique et sociale au sens large."
      },
      {
        question: "Qui constitue la première source pour générer des opportunités dans le cadre de la vie professionnelle ?",
        options: { a: "Les concurrents", b: "Le personnel salarié", c: "Les fournisseurs", d: "Les clients" },
        reponse: "d",
        explication: "Le cours est clair sur ce point : 'Les clients constituent la première source pour générer des opportunités'."
      },
      {
        question: "L'affirmation 'Les fournisseurs constituent les principaux détecteurs des carences des produits sur le marché' est-elle correcte ?",
        options: { a: "Vrai, ils ont la meilleure vue d'ensemble", b: "Faux, ce sont les clients qui sont la première source", c: "Vrai, car ils connaissent les matières premières", d: "Faux, ce rôle revient aux concurrents" },
        reponse: "b",
        explication: "Cette affirmation est fausse. Le cours identifie les clients comme la première source pour détecter les carences et les atouts des produits."
      },
      {
        question: "L'instauration d'un système de brainstorming avec les équipes est une pratique recommandée pour générer des idées à partir de quelle source ?",
        options: { a: "Des clients", b: "Des concurrents", c: "Du personnel salarié", d: "Des fournisseurs" },
        reponse: "c",
        explication: "L'implication de l'ensemble du personnel, par exemple via le brainstorming, est une pratique efficace pour faire générer d'importantes opportunités."
      },
      {
        question: "La détection des opportunités découle uniquement de l'observation de la vie économique, sociale et professionnelle.",
        options: { a: "Vrai, ce sont les seuls domaines pertinents", b: "Faux, il manque l'observation de la vie quotidienne", c: "Vrai, car la vie quotidienne est incluse dans la vie sociale", d: "Faux, il manque l'observation de la vie politique" },
        reponse: "b",
        explication: "Cette affirmation est fausse car elle est incomplète. Le cours insiste sur trois domaines d'observation, incluant explicitement la vie quotidienne."
      },
      {
        question: "Le processus de détection d'opportunités comporte trois étapes principales. Laquelle n'en fait PAS partie ?",
        options: { a: "La perception des besoins du marché", b: "La recherche de financement", c: "L'identification d'une adéquation entre besoins et solutions", d: "La création d'un concept commercial" },
        reponse: "b",
        explication: "Les trois étapes sont la perception des besoins, l'identification de l'adéquation, et la création du concept commercial. La recherche de financement vient plus tard."
      },
      {
        question: "À l'origine de chaque opportunité, qu'est-ce qui est considéré comme la première phase du processus de détection ?",
        options: { a: "La perception de l'idée", b: "L'étude de marché", c: "La rédaction du plan d'affaires", d: "La formation de l'équipe" },
        reponse: "a",
        explication: "À l'origine de chaque opportunité existe une idée, et sa perception correspond à la première phase du processus de détection."
      },
      {
        question: "L'environnement interne de l'entreprise est-il le seul pourvoyeur de potentielles solutions à un problème identifié ?",
        options: { a: "Oui, car les meilleures solutions viennent de l'intérieur", b: "Non, les solutions peuvent aussi venir de l'observation des concurrents ou des clients", c: "Oui, si l'entreprise dispose d'un bon service R&D", d: "Non, mais c'est la source la plus fiable" },
        reponse: "b",
        explication: "Cette affirmation est fausse. Les sources de solutions sont multiples et incluent l'environnement externe (clients, concurrence, technologies, etc.)."
      },
      {
        question: "En plus des besoins insatisfaits, qu'est-ce qui peut également conduire à l'émergence de nouvelles opportunités ?",
        options: { a: "La perception des ressources sous-utilisées", b: "Les directives gouvernementales", c: "La baisse des taux d'intérêt", d: "Les rapports annuels des concurrents" },
        reponse: "a",
        explication: "Le cours signale qu'une perception des ressources sous-utilisées (infrastructures, personnel, technologies) peut également conduire à d'excellentes opportunités."
      },
      {
        question: "L'histoire de la création d'Uber est utilisée pour illustrer une opportunité née de quel constat ?",
        options: { a: "D'une nouvelle technologie de géolocalisation", b: "D'une frustration et d'un besoin non satisfait (trouver un taxi)", c: "D'un excès de chauffeurs de taxi à Paris", d: "D'un modèle économique innovant venu d'Asie" },
        reponse: "b",
        explication: "Uber est né d'une grande frustration de ses fondateurs qui ne parvenaient pas à trouver facilement un taxi, illustrant une opportunité issue d'un besoin insatisfait."
      },
      {
        question: "Quelle est la deuxième étape du processus de détection, après la perception des besoins ?",
        options: { a: "Le lancement du produit", b: "L'évaluation des opportunités", c: "La création du concept commercial", d: "La recherche de l'adéquation entre besoins et ressources" },
        reponse: "d",
        explication: "Après la perception des besoins vient la recherche d'une adéquation entre ces besoins et les ressources d'un marché."
      },
      {
        question: "Dans la quête d'opportunités, sur quoi l'entrepreneur doit-il mettre l'accent pour se distinguer de la concurrence ?",
        options: { a: "Vendre à bas prix", b: "Copier les produits existants", c: "La création de valeur ajoutée supérieure", d: "Optimiser uniquement les ressources internes" },
        reponse: "c",
        explication: "L'entrepreneur doit mettre l'accent sur la création de valeur ajoutée supérieure pour distinguer son offre et la valoriser par rapport à la concurrence."
      },
      {
        question: "La transformation de l'opportunité en produit ou service nouveau se fait durant quelle étape ?",
        options: { a: "La perception des besoins", b: "La création de concept commercial", c: "L'évaluation des opportunités", d: "L'analyse des ressources" },
        reponse: "b",
        explication: "C'est lors de la création du concept commercial que l'opportunité se transforme en un produit ou service concret."
      },
      {
        question: "Quelle fonction de l'entreprise est principalement responsable de la détection des opportunités et de l'identification des besoins des consommateurs ?",
        options: { a: "La fonction Production", b: "La fonction Design", c: "La fonction Financière", d: "La fonction Marketing" },
        reponse: "d",
        explication: "La fonction Marketing permet la détection des opportunités, la définition du marché et l'identification des besoins du consommateur."
      },
      {
        question: "La planification du produit débute par quel processus ?",
        options: { a: "L'allocation des ressources", b: "La sélection des projets", c: "L'identification des opportunités par l'observation", d: "La formation d'une équipe pluridisciplinaire" },
        reponse: "c",
        explication: "La planification débute par le processus d'identification des opportunités à travers l'observation de la vie économique, sociale, professionnelle et quotidienne."
      },
      {
        question: "Qu'est-ce que la spécification d'un produit ?",
        options: { a: "La liste des prix de ses composants", b: "Son nom commercial et son logo", c: "La traduction des besoins du client en description précise de la valeur ajoutée", d: "Le manuel d'utilisation du produit" },
        reponse: "c",
        explication: "La spécification est la traduction des besoins du client en une description précise de ce que le produit peut apporter en termes de valeur ajoutée."
      },
      {
        question: "Le 'Produit Minimum Viable' (PMV) est un concept étudié lors de quelle phase du développement ?",
        options: { a: "L'émergence de l'idée", b: "La commercialisation", c: "Le prototypage et essais", d: "La planification du projet" },
        reponse: "c",
        explication: "Une attention particulière doit être portée sur le Produit Minimum Viable (PMV) durant la phase de prototypage et d'essais."
      },
      {
        question: "Selon le Grand Larousse, l'innovation est un processus qui va de la naissance d'une idée jusqu'à :",
        options: { a: "Son approbation par un comité", b: "Sa matérialisation (lancement d'un produit)", c: "L'obtention d'un brevet", d: "La première vente" },
        reponse: "b",
        explication: "La définition citée indique que le processus d'innovation va de la naissance de l'idée à sa matérialisation, comme le lancement d'un produit."
      },
      {
        question: "Lequel de ces éléments n'est PAS une innovation selon Schumpeter ?",
        options: { a: "Lancer de nouveaux produits", b: "Trouver de nouveaux moyens de vente", c: "Découvrir une loi scientifique fondamentale", d: "Organiser la production avec de nouvelles méthodes" },
        reponse: "c",
        explication: "L'innovation n'est pas la découverte scientifique elle-même, mais l'application industrielle et commerciale d'une idée ou d'une connaissance."
      },
      {
        question: "Un changement dans la manière d'utiliser un produit, comme le rasoir jetable, est une innovation de quel type ?",
        options: { a: "Innovation technologique", b: "Innovation sociale", c: "Innovation d'usage", d: "Innovation de procédé" },
        reponse: "c",
        explication: "C'est une innovation d'usage, car elle introduit une nouvelle facilité ou manière d'utiliser le produit pour répondre à un besoin."
      },
      {
        question: "Le commerce équitable est donné en exemple pour quel type d'innovation ?",
        options: { a: "L'innovation de produit", b: "L'innovation sociale", c: "L'innovation technologique", d: "L'innovation d'usage" },
        reponse: "b",
        explication: "Le commerce équitable est un exemple d'innovation sociale, car il élabore des réponses nouvelles à des besoins sociaux et répond à un intérêt collectif."
      },
      {
        question: "L'introduction d'une chaîne de montage ou de la vente sur Internet est une innovation de :",
        options: { a: "Procédé ou processus", b: "Produit", c: "Commercialisation", d: "Modèle d'affaires" },
        reponse: "a",
        explication: "Il s'agit d'une innovation de procédé, car elle améliore l'efficience des méthodes de production ou de distribution."
      },
      {
        question: "L'e-commerce ou le mobile money sont des exemples d'innovation de :",
        options: { a: "Produit", b: "Procédé", c: "Commercialisation", d: "Organisationnelle" },
        reponse: "c",
        explication: "Ce sont des innovations de commercialisation (ou marketing) car elles introduisent des changements majeurs dans la présentation, le conditionnement ou la promotion."
      },
      {
        question: "Les services de microcrédit sont un exemple d'innovation de :",
        options: { a: "Produit", b: "Modèle d'affaires", c: "Procédé", d: "Technologique" },
        reponse: "b",
        explication: "Le microcrédit est une innovation de modèle d'affaires car il réorganise la structure des revenus et des coûts, transformant radicalement un marché."
      },
      {
        question: "Comment est qualifiée une innovation qui modifie profondément les habitudes, comme l'imprimante 3D à tatouer ?",
        options: { a: "Incrémentale", b: "D'adaptation", c: "Majeure ou de rupture", d: "D'assemblage" },
        reponse: "c",
        explication: "Il s'agit d'une innovation majeure ou de rupture, car elle est révolutionnaire et change complètement les habitudes."
      },
      {
        question: "Une innovation qui consiste en des perfectionnements apportés à des produits existants, comme les différentes versions de la Golf de Volkswagen, est dite :",
        options: { a: "Radicale", b: "Incrémentale ou mineure", c: "De rupture", d: "Sociale" },
        reponse: "b",
        explication: "C'est une innovation incrémentale, car elle améliore simplement des produits existants sans révolutionner les habitudes."
      },
      {
        question: "L'utilisation de perfuseurs comme système de goutte à goutte en agriculture est un exemple d'innovation :",
        options: { a: "De rupture", b: "Incrémentale", c: "D'assemblage", d: "D'adaptation" },
        reponse: "d",
        explication: "C'est une innovation d'adaptation, car elle duplique ou adapte une solution connue d'un secteur (médical) vers un autre (agriculture)."
      },
      {
        question: "Un camping-car, qui associe une voiture et une maison, est un exemple d'innovation :",
        options: { a: "D'adaptation", b: "D'assemblage", c: "De rupture", d: "Sociale" },
        reponse: "b",
        explication: "C'est une innovation d'assemblage, car sie associe plusieurs offres ou composants existants pour en créer une nouvelle."
      },
      {
        question: "Selon l'enquête de CB Insight, quelle est la principale cause d'échec des startups ?",
        options: { a: "Le manque de financement", b: "Les problèmes d'équipe", c: "La non-concordance de leurs offres aux besoins du marché", d: "Une mauvaise stratégie marketing" },
        reponse: "c",
        explication: "L'enquête a révélé que 42% des startups échouent à cause de la non-concordance de leurs offres avec les besoins réels du marché."
      },
      {
        question: "D'après l'étude de Guenrich Alshuller sur 40 000 brevets, quelle est la part des inventions qui sont des améliorations de produits existants ?",
        options: { a: "Environ 4%", b: "Environ 32%", c: "Environ 45%", d: "Plus de 95%" },
        reponse: "d",
        explication: "L'étude révèle que plus de 95% des inventions sont des améliorations ou des évolutions de produits existants (45% amélioration + 32% changement qualitatif + 19% changement radical)."
      },
      {
        question: "Dans la typologie des processus d'innovation, comment est décrit le '1er type' de situation ?",
        options: { a: "Problème connu, solutions inconnues", b: "Problème et solutions inconnus", c: "Problème et solutions connus", d: "Problème inconnu, solutions connues" },
        reponse: "c",
        explication: "Le 1er type correspond à une situation où le problème à résoudre et les solutions à apporter sont connus, rendant le chemin direct et bien balisé."
      },
      {
        question: "Trouver un vaccin pour une nouvelle maladie comme le COVID-19 correspond à quel type de processus d'innovation ?",
        options: { a: "1er type : Problème et solutions connus", b: "2ème type : Problème connu, solutions inconnues", c: "3ème type : Problème inconnu, solutions connues", d: "4ème type : Problème et solutions inconnus" },
        reponse: "b",
        explication: "Cela correspond au 2ème type, où le problème (la maladie) est connu, mais les solutions (le vaccin) ne le sont pas et nécessitent de la créativité."
      },
      {
        question: "La télémédecine, où une technologie existe sans destination prédéfinie, correspond à quel processus d'innovation ?",
        options: { a: "1er type : Création d'entreprise", b: "2ème type : Résolution de problème", c: "3ème type : Transfert de technologie", d: "4ème type : Rêveurs" },
        reponse: "c",
        explication: "C'est le 3ème type : le problème n'est pas clairement identifié mais les capacités (technologie) existent. Cela correspond à un défi de transfert de technologie."
      },
      {
        question: "Dans le tableau de synthèse, que représente la situation où le problème est 'Inconnu' et la solution est 'Inconnue' ?",
        options: { a: "Création d'entreprise", b: "Résolution de problème", c: "Transfert de technologie", d: "Rêveurs" },
        reponse: "d",
        explication: "Cette situation, où problème et solution sont inconnus, est celle des 'rêveurs' et nécessite une forte dose de créativité pour créer quelque chose qui n'a jamais existé."
      },
      {
        question: "Le processus de développement d'un produit va de l'idéation initiale jusqu'à quelle étape finale ?",
        options: { a: "La validation du prototype", b: "La définition du produit", c: "Le lancement final sur le marché", d: "L'obtention du brevet" },
        reponse: "c",
        explication: "Le cours indique que ce processus va de l'idéation initiale du concept au lancement final sur le marché."
      },
      {
        question: "Laquelle de ces affirmations sur l'innovation est correcte selon le cours ?",
        options: { a: "L'innovation est synonyme d'invention", b: "L'innovation se limite uniquement à la technique", c: "L'innovation est un processus dynamique d'application d'une idée", d: "L'innovation est la même chose que la recherche-développement" },
        reponse: "c",
        explication: "Le cours précise que l'innovation est un processus dynamique se traduisant par l'application industrielle et commerciale d'une idée, et qu'elle n'est ni une invention, ni une découverte."
      },
      {
        question: "Quel est l'objectif principal de la phase de validation et de test d'un prototype ?",
        options: { a: "Vérifier la rentabilité du produit", b: "S'assurer qu'il répond aux exigences de départ", c: "Protéger l'idée avec un brevet", d: "Définir la stratégie de communication" },
        reponse: "b",
        explication: "Le prototype doit être soumis à une phase de validation et de test afin de s'assurer qu'il répond aux exigences et aspirations initialement définies."
      }
    ]
  },
  'M03': {
    title: 'MEO2-M03 : Innovation et Gestion de Projet',
    questions: [
      {
        question: "Lequel de ces éléments caractérise un projet par rapport aux activités courantes ?",
        options: { a: "La répétitivité", b: "L'absence de contrainte budgétaire", c: "Le caractère temporaire et unique", d: "La stabilité de l'équipe" },
        reponse: "c",
        explication: "Un projet est une entreprise temporaire initiée dans le but de créer un produit, un service ou un résultat unique."
      },
      {
        question: "Dans le triangle d'or de la gestion de projet, quels sont les trois sommets ?",
        options: { a: "Coût, Délai, Qualité", b: "Personnel, Argent, Temps", c: "Idée, Client, Marché", d: "Risque, Opportunité, Profit" },
        reponse: "a",
        explication: "Le triangle d'or (ou triple contrainte) représente l'équilibre entre les Coûts (budget), les Délais (planning) et la Qualité (périmètre)."
      },
      {
        question: "Qu'est-ce qu'un jalon (milestone) dans un planning ?",
        options: { a: "Un membre de l'équipe", b: "Un événement important marquant la fin d'une étape", c: "Une erreur de conception", d: "Le coût total du projet" },
        reponse: "b",
        explication: "Un jalon est une étape significative d'un projet, souvent sans durée, marquant une décision ou un livrable majeur."
      },
      {
        question: "Le diagramme de Gantt sert principalement à :",
        options: { a: "Calculer le ROI", b: "Visualiser le planning et l'enchaînement des tâches", c: "Recruter des développeurs", d: "Définir la stratégie marketing" },
        reponse: "b",
        explication: "Le diagramme de Gantt est l'outil standard pour représenter graphiquement le déroulement temporel d'un projet."
      },
      {
        question: "La 'Mise en œuvre' (MEO) commence généralement après quelle phase ?",
        options: { a: "Le lancement commercial", b: "La planification et l'étude d'opportunité", c: "La liquidation de l'entreprise", d: "La phase d'audit final" },
        reponse: "b",
        explication: "La mise en œuvre suit la phase de conception et de planification où le projet a été jugé opportun et faisable."
      }
    ]
  }
};
