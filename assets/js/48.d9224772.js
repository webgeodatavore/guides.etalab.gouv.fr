(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{433:function(e,s,t){"use strict";t.r(s);var n=t(43),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"les-etapes-d-un-projet-de-pseudonymisation-grace-a-l-ia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#les-etapes-d-un-projet-de-pseudonymisation-grace-a-l-ia"}},[e._v("#")]),e._v(" Les étapes d'un projet de pseudonymisation grâce à l'IA")]),e._v(" "),t("p",[e._v("Nous proposons dans cette partie de passer en revue les différentes étapes d'un projet de pseudonymisation de documents textuels. À ce stade, nous faisons l'hypothèse que nous disposons déjà de données nettoyées, prêtes à l'emploi. Le pré-traitement des données brutes évoqué plus tôt (OCR, conversion en format standard, etc.) n'est pas détaillé ici.")]),e._v(" "),t("h2",{attrs:{id:"annoter-ses-donnees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#annoter-ses-donnees"}},[e._v("#")]),e._v(" Annoter ses données")]),e._v(" "),t("p",[e._v("Nous l'avons vu plus tôt, le premier prérequis pour mener une pseudonymisation automatique de données textuelles par l'IA est de "),t("strong",[e._v("disposer de données annotées")]),e._v(", qui serviront « d'exemples » de pseudonymisation correcte à l'algorithme. Si vous ne disposez pas de telles données en l'état, il sera nécessaire que vous les annotiez à la main. "),t("strong",[e._v("C'est un processus assez long")]),e._v(", surtout si l'on cherche à disposer de plusieurs milliers de documents ! Il faudra donc rassembler deux éléments :")]),e._v(" "),t("ul",[t("li",[e._v("un logiciel d'annotation, comme nous l'avons déjà vu, comme les outils open source "),t("a",{attrs:{href:"http://doccano.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doccano"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://webanno.github.io/webanno/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebAnno"),t("OutboundLink")],1),e._v(" ou "),t("a",{attrs:{href:"https://universaldatatool.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Universal Data Tool"),t("OutboundLink")],1),e._v(" ;")]),e._v(" "),t("li",[e._v("une équipe d'annotateurs dévoués et patients, qui disposent d'une expertise métier adéquate si vous travaillez sur des documents spécifiques, comme par exemple des décisions de justice.")])]),e._v(" "),t("p",[e._v("Gardez à l'esprit que l'annotation est un processus chronophage et peut "),t("strong",[e._v("nécessiter plusieurs mois de travail pour des documents complexes")]),e._v(". Ceux-ci sont en effet long et fastidieux à lire puis à annoter et il sera donc impossible de procéder d'une traite. Une solution alternative est de procéder "),t("strong",[e._v("par séances courtes mais fréquentes, et rassemblant de nombreux annotateurs")]),e._v(". L'évaluation précise du temps d'annotation nécessaire ne peut se faire qu'"),t("strong",[e._v("après quelques séances d'annotation")]),e._v(", afin de pouvoir évaluer la vitesse moyenne d'annotation d'un document.")]),e._v(" "),t("p",[e._v("L'annotation se devra d'être de qualité pour garantir de bonnes performances de l'algorithme. "),t("strong",[e._v("Une annotation de mauvaise qualité se caractérise par des omissions fréquentes d'entités nommées, ou l'attribution de la mauvaise catégorie d'entité à des mots")]),e._v(", etc. La phase d'entraînement d'un algorithme d'IA consiste en effet à « mimer » la labélisation qu'on lui présente, et de mauvaises annotations vont logiquement conduire l'algorithme à mal prédire les catégories sémantiques dans de nouveaux documents. De plus, une autre partie des données annotées va servir à évaluer la performance de l'algorithme, en comparant les labels prédits par l'algorithme à ceux déterminés « manuellement ». "),t("strong",[e._v("Si les labels issus de l'annotation par des humains ne sont pas fiables, l'évaluation de la performance de l'algorithme ne sera pas non plus fiable.")]),e._v(" La qualité des annotations doit donc être vérifiée par des experts métiers tout au long de la campagne d'annotation.")]),e._v(" "),t("h2",{attrs:{id:"organiser-ses-donnees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#organiser-ses-donnees"}},[e._v("#")]),e._v(" Organiser ses données")]),e._v(" "),t("p",[e._v("Dans le cas de la pseudonymisation, les données sont constituées de l'ensemble des documents (texte libre) desquels il faut occulter des éléments identifiants. Dans un projet d'apprentissage supervisé, on distingue deux grands ensembles de données : les "),t("strong",[e._v("données annotées")]),e._v(", que l'on consacre à la phase d'apprentissage du modèle, et les "),t("strong",[e._v("données à labéliser")]),e._v(" (ou non annotées) sur lesquelles on appliquera le modèle une fois celui-ci entraîné.")]),e._v(" "),t("p",[e._v("Les données annotées sont elles-mêmes séparées par la suite en deux groupes, souvent aléatoirement, entre "),t("strong",[e._v("données d'entraînement")]),e._v(" et "),t("strong",[e._v("données de test")]),e._v(". Les données d'entraînement vont permettre à l'algorithme "),t("strong",[e._v("d'apprendre à reproduire la tâche de reconnaissance des labels de chacun des mots du texte")]),e._v(". Afin d'évaluer la performance de l'algorithme, il est nécessaire d'utiliser d'autres données annotées, que l'algorithme n'a pas « vu » en entraînement. C'est le rôle du jeu de données de test.")]),e._v(" "),t("h2",{attrs:{id:"formater-ses-donnees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#formater-ses-donnees"}},[e._v("#")]),e._v(" Formater ses données")]),e._v(" "),t("p",[e._v("Certains arbitrages doivent être effectués à cette étape, afin de "),t("strong",[e._v("choisir quels prétraitements vont être appliqués au texte")]),e._v(". Par exemple, dois-je transformer toutes les majuscules en minuscules ? Dois-je conserver la ponctuation ? Et quid des « stop words », ces mots peu porteurs de sens comme « et », « ou », « mais » ? Le but de ces prétraitements est de supprimer l'information inutile, mais d'en conserver assez pour que l'algorithme atteigne son but.")]),e._v(" "),t("p",[e._v("Une fois le texte prétraité, il est "),t("strong",[e._v("transformé grâce à un modèle de langage")]),e._v(", qui permet, pour faire simple, d'obtenir pour chaque mot une représentation sous forme vectorielle. C'est en effet ce type d'input qu'utilisent les algorithmes d'apprentissage automatique, et de nombreux modèles de langages peuvent être utilisés en fonction de la tâche ou de la langue, comme par exemple "),t("a",{attrs:{href:"https://camembert-model.fr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CamemBERT"),t("OutboundLink")],1),e._v(" pour le français.")]),e._v(" "),t("h2",{attrs:{id:"entrainer-son-modele"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entrainer-son-modele"}},[e._v("#")]),e._v(" Entraîner son modèle")]),e._v(" "),t("p",[e._v("Une fois les données formatées et mises sous forme de vecteurs, elles peuvent être utilisées pour entraîner l'algorithme dont la tâche sera de reconnaître le label de chacun des mots du texte. Là encore, "),t("strong",[e._v("de nombreux arbitrages sont possibles pour choisir l'architecture à utiliser")]),e._v(". Les solutions les plus performantes aujourd'hui s'appuient sur des réseaux de neurones profonds. L'un des modèles le plus utilisé pour la tâche qui nous intéresse porte par exemple le nom un peu barbare de "),t("a",{attrs:{href:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bidirectional Long Short Term Memory - Conditional Random Fields (ou BiLSTM-CRF)"),t("OutboundLink")],1),e._v(". Une fois l'architecture définie, "),t("strong",[e._v("l'apprentissage consiste à « donner à voir » à l'algorithme les données d'entraînement")]),e._v(", souvent de nombreuses fois d'affilée, afin que celui-ci ajuste ses paramètres pour effectuer au mieux la tâche de reconnaissance du label correspondant à chaque mot.")]),e._v(" "),t("h2",{attrs:{id:"valider-ses-resultats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#valider-ses-resultats"}},[e._v("#")]),e._v(" Valider ses résultats")]),e._v(" "),t("p",[e._v("La validation des performances du modèle est un double processus qui repose à la fois sur l'analyse de métriques statistiques et sur l'expérience humaine. Les métriques statistiques, souvent communes à tous les modèles et indifférentes au type de projet concerné, "),t("strong",[e._v("permettront d'obtenir un résumé synthétique des performances générales de l'algorithme")]),e._v(" et d'apprécier par exemple ses progrès au cours du projet. Cependant, "),t("strong",[e._v("l'appréciation humaine sera indispensable")]),e._v(" pour vérifier dans le détail que les résultats sont réellement satisfaisants sur la tâche particulière que l'on cherche à automatiser. Par exemple, pour la pseudonymisation des décisions de justice, une métrique « métier » consistera à calculer le ratio « nombre de décisions avec au moins une erreur » sur « nombre de décisions analysées ».")]),e._v(" "),t("p",[e._v("D'autres critères "),t("strong",[e._v("plus « matériels » peuvent entrer en jeu")]),e._v(" dans la validation du modèle. Par exemple pour la pseudonymisation, combien de temps faut-il pour pseudonymiser entièrement un document ? Combien de temps faut-il pour réentraîner le modèle avec de nouvelles données annotées ? Quelles ressources de calcul et de stockage cela nécessite-t-il ? Si les réponses à ces questions semblent à chaque fois trop élevées, il est peut-être nécessaire de "),t("strong",[e._v("questionner les choix de modèles réaliser et de chercher un meilleur compromis")]),e._v(" entre performance et exigences matérielles.")]),e._v(" "),t("h2",{attrs:{id:"pseudonymiser-de-nouveaux-documents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pseudonymiser-de-nouveaux-documents"}},[e._v("#")]),e._v(" Pseudonymiser de nouveaux documents")]),e._v(" "),t("p",[e._v("Une fois que vous estimez les résultats de votre algorithme convaincants, le tour est joué ! Vous pouvez maintenant lui présenter de nouveaux documents, "),t("strong",[e._v("que vous n'avez pas annotés")]),e._v(". Si votre algorithme est bien entraîné, il sera capable de reconnaître seul le label de chaque mot. Ainsi, si vous "),t("strong",[e._v("ajoutez la règle simple de remplacer par un alias tous les mots dont le label est une donnée à caractère personnel")]),e._v(" (par exemple les noms par X, Y ou Z, les prénoms par A, B ou C, etc.), vous obtenez un outil de pseudonymisation automatique !")]),e._v(" "),t("p",[e._v("Cette méthode de pseudonymisation par l'IA n'est évidemment jamais exempte d'erreurs. Il est donc nécessaire de prévoir, avant toute ouverture au grand public, une étape de vérification voire de reprise manuelle pour s'assurer que l'ensemble des documents est bien pseudonymisé. Il n'est pas forcément nécessaire de relire l'intégralité des documents, mais plutôt de convenir d'un protocole de contrôle à appliquer avant toute publication. Celui-ci peut par exemple prendre la forme de l'échantillonage d'un sous-ensemble représentatif des documents à publier, sur lequel la relecture se limitera. Ce protocole permettra en particulier de s'assurer que la qualité de la pseudonymisation automatique ne décroit pas au cours du temps.")])])}),[],!1,null,null,null);s.default=r.exports}}]);