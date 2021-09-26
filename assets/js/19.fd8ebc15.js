(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{379:function(e,t,n){e.exports=n.p+"assets/img/process.edffa4eb.png"},434:function(e,t,n){"use strict";n.r(t);var s=n(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"la-pseudonymisation-par-l-ia-en-pratique"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#la-pseudonymisation-par-l-ia-en-pratique"}},[e._v("#")]),e._v(" La pseudonymisation par l'IA en pratique")]),e._v(" "),s("p",[e._v("Après avoir vu dans les grandes lignes les étapes d'un projet de pseudonymisation grâce à l'IA, nous revenons plus en détails dans cette partie sur ces différentes étapes pour présenter les choix, arbitrages et préconisations techniques que nous avons tirés de nos travaux pour la création d'un moteur de pseudonymisation pour les décisions du Conseil d'État. Ceux-ci sont disponibles "),s("a",{attrs:{href:"https://github.com/etalab-ia/pseudo_conseil_etat",target:"_blank",rel:"noopener noreferrer"}},[e._v("sur GitHub"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"formater-ses-donnees-annotees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formater-ses-donnees-annotees"}},[e._v("#")]),e._v(" Formater ses données annotées")]),e._v(" "),s("p",[e._v("Afin de pouvoir utiliser les données annotées pour l'entraînement d'un algorithme d'apprentissage, "),s("strong",[e._v("celles-ci doivent être converties dans un format spécifique")]),e._v(". Dans l'exemple ci-dessous, un document textuel (ici « Thomas CLAVIER aime beaucoup Paris. ») est alors structuré en un tableau, avec un mot par ligne, et deux colonnes, une pour le mot (ou "),s("em",[e._v("token")]),e._v(") et une pour l'annotation linguistique. Ce type de format s'appelle "),s("strong",[e._v("CoNLL")]),e._v(".")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Token")]),e._v(" "),s("th",[e._v("Label")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Thomas")]),e._v(" "),s("td",[e._v("B-PER")])]),e._v(" "),s("tr",[s("td",[e._v("CLAVIER")]),e._v(" "),s("td",[e._v("I-PER")])]),e._v(" "),s("tr",[s("td",[e._v("aime")]),e._v(" "),s("td",[e._v("O")])]),e._v(" "),s("tr",[s("td",[e._v("beaucoup")]),e._v(" "),s("td",[e._v("O")])]),e._v(" "),s("tr",[s("td",[e._v("Paris")]),e._v(" "),s("td",[e._v("B-LOC")])])])]),e._v(" "),s("p",[e._v("Plus particulièrement, nous utilisons le format IOB2, très commun pour les tâches d'apprentissage séquentiel comme la reconnaissance d'entités nommées, pour labéliser nos données. Ce format permet d'aider l'algorithme d'apprentissage à mieux repérer les entités. Le préfixe B- avant un label indique que le label est le début d'un groupe de mots, le préfixe I- indique que le label est à l'intérieur d'un groupe de mots, et le label O indique que le token n'a pas de label particulier. Il existe d'autres formats similaires à IOB2, tels que "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Inside%E2%80%93outside%E2%80%93beginning_(tagging)",target:"_blank",rel:"noopener noreferrer"}},[e._v("IOB/BIO, BILOU, et BIOES"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Le format CoNLL")]),e._v(" "),s("p",[e._v("CoNLL, pour « Conference on Natural Language Learning », est un format général, dont il existe de nombreuses versions, couramment employé pour les tâches de traitement du langage naturel, décrivant des données textuelles en colonne selon un nombre d'attributs (catégorie d'entité nommée, nature grammaticale, etc.). Le format IOB2 que nous utilisons est l'une des méthodes de labélisation du format CoNLL.")])]),e._v(" "),s("p",[e._v("Il existe de très "),s("strong",[e._v("nombreux logiciels ou solutions d'annotation de données textuelles")]),e._v(" et les données annotées en sortie peuvent donc avoir différents formats (il existe en effet de multiples formats de données annotées). Pour transformer vos données annotées, un développement spécifique sera probablement nécessaire afin de les convertir au format IOB2, le format des données d'entrée de l'algorithme de reconnaissance d'entités nommées que nous avons choisi. Plusieurs exemples de fonctions et de librairies développées pour le Conseil d'État constitueront néanmoins un point de départ dans le répertoire GitHub de notre projet.")]),e._v(" "),s("h2",{attrs:{id:"tokeniser-le-texte"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tokeniser-le-texte"}},[e._v("#")]),e._v(" Tokeniser le texte")]),e._v(" "),s("p",[e._v("Afin de mettre nos données sous format CoNLL, nous avons besoin d'abord d'identifier les mots individuels dans nos documents. Si l'on considère un document, composé de blocs de caractères, "),s("strong",[e._v("la tokenisation est la tâche qui consiste à découper ce document en éléments atomiques")]),e._v(", en gardant ou supprimant la ponctuation. Par exemple :")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Phrase")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Mes amis, mes enfants, l'avènement de la pseudonymisation automatique est proche.")])])])]),e._v(" "),s("p",[e._v("La phrase ci-dessus pourrait être tokenisée de cette manière :")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Token1")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token2")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token3")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token4")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token5")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token6")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token7")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token8")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token9")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token10")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token11")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token12")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token13")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token14")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token15")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Token16")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Mes")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("amis")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v(",")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("mes")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("enfants")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v(",")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("l")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("'")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("avènement")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("de")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("la")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("pseudonymisation")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("automatique")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("est")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("proche")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v(".")])])])]),e._v(" "),s("p",[s("strong",[e._v("Les tokens correspondent généralement aux mots")]),e._v(", mais il est important de comprendre qu'une autre unité peut être choisie, par exemple les caractères. D'autres choix dans la façon de tokeniser peuvent avoir un impact sur les résultats de l'algorithme. Par exemple, le choix de conserver ou non la ponctuation a son importance. De manière pratique, il est important de bien comprendre la méthode de tokenisation utilisée par les algorithmes, afin de prendre en compte ces choix lors de l'étape finale d'occultation d'éléments identifiants dans le texte.")]),e._v(" "),s("h2",{attrs:{id:"entrainer-son-modele"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entrainer-son-modele"}},[e._v("#")]),e._v(" Entraîner son modèle")]),e._v(" "),s("p",[e._v("Dans le code que nous avons développé, nous utilisons la librairie Open Source "),s("a",{attrs:{href:"https://github.com/flairNLP/flair",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flair"),s("OutboundLink")],1),e._v(". Celle-ci permet en effet d'utiliser de nombreux modèles de langage, par exemple les modèles "),s("a",{attrs:{href:"https://github.com/flairNLP/flair/blob/master/resources/docs/TUTORIAL_3_WORD_EMBEDDING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flair, Bert et CamemBERT"),s("OutboundLink")],1),e._v(" et même de combiner plusieurs de ces modèles. "),s("strong",[e._v("Un modèle de langage permet pour chaque mot d'obtenir une représentation vectorielle")]),e._v(" (ou "),s("em",[e._v("embedding")]),e._v("). Ces embeddings sont ensuite passés à un classificateur BiLSTM-CRF qui attribue à chaque mot une des classes du jeu de données d'entraînement.")]),e._v(" "),s("p",[e._v("L'entraînement d'un tel classificateur nécessite de choisir la valeur d'un certain nombre d'"),s("strong",[e._v("hyper-paramètres")]),e._v(". Les hyper-paramètres sont les paramètres de l'algorithmes qui sont fixés avant l'apprentissage, par opposition aux paramètres de l'algorithmes qui sont fixés de manière itérative au cours de l'apprentissage. Des exemples de configuration avec des explications des différents hyper-paramètres et de leur impact sont disponibles dans la section correspondante du répertoire GitHub.")]),e._v(" "),s("p",[e._v("Nous proposons un exemple de module permettant d'entraîner un algorithme de reconnaissance d'entités nommées via la librairie Flair à partir d'un corpus annoté. Enfin, pour aller plus loin, la librairie Flair propose "),s("a",{attrs:{href:"https://github.com/flairNLP/flair/blob/master/resources/docs/TUTORIAL_8_MODEL_OPTIMIZATION.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("un module très pratique permettant de fixer les valeurs optimales des hyper-paramètres optimaux pour l'apprentissage"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"valider-ses-resultats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#valider-ses-resultats"}},[e._v("#")]),e._v(" Valider ses résultats")]),e._v(" "),s("p",[e._v("La validation des performances du modèle et la mise en production est un double processus reposant sur "),s("strong",[e._v("l'analyse de métriques et sur l'expérience humaine")]),e._v(", comme nous l'avons vu dans la partie précédente. Comme illustré ci-dessous dans le cas de notre outil de pseudonymisation des décisions de justice, cette validation des résultats est charnière pour décider ou non du passage en production, c'est-à-dire du déploiement pour utilisation par les métiers.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(379),alt:"Le processus de conception de notre outil de pseudonymisation"}})]),e._v(" "),s("p",[e._v("Pour permettre cette double analyse métriques/métiers, notre module de génération de documents pseudonymisés permet de produire en sortie des fichiers labélisés, au format CoNLL, et ainsi :")]),e._v(" "),s("ul",[s("li",[e._v("d'utiliser des "),s("strong",[e._v("métriques permettant de comparer")]),e._v(", pour un document ayant été annoté manuellement, la pseudonymisation par l'algorithme à celle réalisée manuellement. On utilise généralement le "),s("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Pr%C3%A9cision_et_rappel",target:"_blank",rel:"noopener noreferrer"}},[e._v("score F1"),s("OutboundLink")],1),e._v(" pour mesurer la performance du modèle ;")]),e._v(" "),s("li",[e._v("de charger dans notre outil d'annotation basé sur Doccano un fichier "),s("strong",[e._v("mettant en avant les différences entre les annotations provenant de sources différentes")]),e._v(", indiquant en rouge les labels en désaccord et en vert les labels en accord.")])]),e._v(" "),s("h2",{attrs:{id:"pseudonymiser-de-nouveaux-documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pseudonymiser-de-nouveaux-documents"}},[e._v("#")]),e._v(" Pseudonymiser de nouveaux documents")]),e._v(" "),s("p",[e._v("Le modèle entraîné permet d'attribuer une catégorie à chaque token du document à pseudonymiser. "),s("strong",[e._v("Les sorties de l'algorithme de reconnaissance d'entités nommées ne permettent donc pas d'obtenir directement le document peudonymisé")]),e._v(", mais est nécessaire d'ajouter une brique pour "),s("strong",[e._v("remplacer les mots identifiés comme des données à caractère personnel par un alias")]),e._v(". Pour le bon fonctionnement de cette étape, il est très important de fournir à l'algorithme un document tokenisé selon une méthode identique à celle utilisée pour entraîner l'algorithme.")]),e._v(" "),s("h2",{attrs:{id:"quelles-ressources-disponibles-pour-pseudonymiser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quelles-ressources-disponibles-pour-pseudonymiser"}},[e._v("#")]),e._v(" Quelles ressources disponibles pour pseudonymiser ?")]),e._v(" "),s("h3",{attrs:{id:"les-librairies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#les-librairies"}},[e._v("#")]),e._v(" Les librairies")]),e._v(" "),s("p",[e._v("De nombreuses librairies open-source permettent d'entraîner et d'utiliser des algorithmes de reconnaissance d'entités nommées. Parmi celles-ci, Flair et SpaCy présentent l'avantage de proposer des algorithmes à l'état de l'art tout en facilitant l'expérience utilisateur.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/flairNLP/flair",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flair"),s("OutboundLink")],1),e._v(" est un framework simple pour le NLP. Il permet d'utiliser des modèles de NLP à l'état de l'art sur des textes de tout genre, en particulier des algorithmes de reconnaissance d'entité nommées et des embeddings pré-entraînés")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://spacy.io/usage/spacy-101",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpaCy"),s("OutboundLink")],1),e._v(" est un module Python à forte capacité d'industrialisation pour le NLP rédigée en Python et Cython. Il implémente les toutes dernières recherches dans le domaine du traitement du langage naturel et a été conçu pour être utilisé en production. Il possède des modèles statistiques et des embeddings pré-entraînés.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://stanfordnlp.github.io/stanza/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stanza"),s("OutboundLink")],1),e._v(" est une librairie Python de l'Université de Stanford qui utilise la très connue librairie "),s("a",{attrs:{href:"https://stanfordnlp.github.io/CoreNLP/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoreNLP"),s("OutboundLink")],1),e._v(" comme moteur NLP. Ses composants permettent un entraînement et une évaluation efficace avec vos propres données annotées. La boîte à outils est conçue pour être parallèle entre plus de 70 langues, en utilisant le "),s("a",{attrs:{href:"https://universaldependencies.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("formalisme des dépendances universelles"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("Si SpaCy est la librairie la plus rapide, Flair est celle que nous avons choisie pour le développement de notre outil de pseudonymisation, et ce pour la performance de son algorithme de reconnaissance d'entités.")]),e._v(" "),s("h3",{attrs:{id:"outils-d-annotation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outils-d-annotation"}},[e._v("#")]),e._v(" Outils d'annotation")]),e._v(" "),s("p",[e._v("Comme évoqué dans la partie précédente, il existe de nombreuses interfaces d'annotation, notamment en open source comme "),s("a",{attrs:{href:"https://github.com/doccano/doccano",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doccano"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://webanno.github.io/webanno/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebAnno"),s("OutboundLink")],1),e._v(" et "),s("a",{attrs:{href:"https://universaldatatool.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Universal Data Tool"),s("OutboundLink")],1),e._v(". Ces outils fournissent des fonctionnalités d'annotation pour la classification de texte, la labélisation de mots et d'autres tâches classiques de traitement du langage naturel. Il est ainsi possible de créer rapidement des données d'entraînement pour l'analyse des sentiments, la reconnaissance d'entités nommées, la synthèse de texte, etc.")]),e._v(" "),s("h2",{attrs:{id:"voir-la-pseudonymisation-en-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#voir-la-pseudonymisation-en-action"}},[e._v("#")]),e._v(" Voir la pseudonymisation en action")]),e._v(" "),s("p",[e._v("Vous pouvez explorer notre démo pseudonymisation "),s("a",{attrs:{href:"https://datascience.etalab.studio/pseudo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("en ligne"),s("OutboundLink")],1),e._v(" et retrouver le code de cet outil sur notre "),s("a",{attrs:{href:"https://github.com/etalab-ia/pseudo_app",target:"_blank",rel:"noopener noreferrer"}},[e._v("dépôt Git"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);