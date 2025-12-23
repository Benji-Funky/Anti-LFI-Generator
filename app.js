const accusations = [
  `La France Insoumise est accusée d’être responsable de la montée de l’antisémitisme en France, en Europe, sur Terre, et sur Namek.`,
  `La France Insoumise aurait tué Jésus.`,
  `La France Insoumise serait sortie du cercle républicain pour rejoindre le cercle des poètes disparus.`,
  `La France Insoumise serait à l’origine des frères musulmans et serait en train de travailler sur la version woke des "soeurs musulmanes".`,
  `La France Insoumise est rendue coupable de bordéliser les débats, créant ainsi une surcharge de travail pour les services de nettoyage du débat public.`,
  `La France Insoumise serait ambigu sur les ambiguïtés de certains propos ambigus alors qu’il est clair que le débat était ambigu depuis le début.`,
  `La France Insoumise serait responsable d’un climat anxiogène, alors qu’il y a toujours eu des variations de climat bien avant l’apparition de la France Insoumise.`,
  `La France Insoumise est accusée d’avoir radicalisé les discussions familiales du dimanche midi.`,
  `La France Insoumise serait coupable de diviser la société en dénonçant les divisions existantes.`,
  `La France Insoumise est rendue coupable de polariser la société, y compris des personnes qui n’étaient pas polarisées avant d’en entendre parler.`,
  `La France Insoumise n’a pas condamné les violences, et c’est pas bien.`,
  `La France Insoumise n’a pas eu de pensées pour les familles des vitrines.`,
  `La France Insoumise souhaite la révolution pour changer la politique, la société, la civilisation, le continuum espace temps et l’ordre naturel des choses.`,
  `La France Insoumise n’aime pas Michel Sardou, ce qui prouve qu’ils n’aiment pas ce que nous sommes.`,
  `La France Insoumise est accusée de provoquer la désunion à gauche, en rejetant l’Alliance au profit de la Horde, ce qui complique fortement le jeu.`,
  `La France Insoumise serait sortie de l’arc républicain pour entrer dans l’arc narratif.`,
  `La France Insoumise est accusée d’avoir purgé des individus de leurs péchés.`,
  `La France Insoumise 1 PB.`,
  `La France Insoumise est accusé de trop défendre Hakim le fils du forgeron .`,
  `La France Insoumise serait contre la colonisation, ce qui prouve qu'elle n'aime pas ce que nous sommes.`,
  `La France Insoumise n'aime pas le Puy du fou, ce qui prouve qu'elle n'aime pas ce que nous sommes.`,
  `La France Insoumise n'aime McDonald, ce qui prouve qu'elle n'aime pas ce que nous sommes.`,
  `La France Insoumise n'aime pas Patrick Sebastien, ce qui prouve qu'elle n'aime pas ce que nous sommes..`,
  `La France Insoumise est accusée de trop défendre les palestiniens, alors qu'ils n'ont pas les mêmes voitures que nous.`,
  `La France Insoumise est accusée de refuser d’utiliser ses anneaux de pouvoir pour faire cesser les violences lors des révoltes urbaines.`,
  `La France Insoumise refuse les primaires pour éviter un amalgame avec les primeurs, selon des sources proches du marché.`,
  `La France Insoumise est accusée d’être une dictature, alors qu’elle est juste dirigée par quelqu’un qui a toujours raison.`,
  `La France Insoumise est accusée d’avoir inventé le mot “génocide” pour mettre mal à l’aise les génocidaires.`,
  `La France Insoumise est accusée d’avoir inventé le mot “islamophobie” pour mettre mal à l’aise les islamophobes.`,
  `La France Insoumise serait complaisante avec Jafar Lazhar.`,
  `La France Insoumise serait passée du champ républicain au champ lexical.`,
  `La France Insoumise ne menace pas seulement la République au sens institutionnel du terme, mais l’idée même que nous nous faisons de la République comme récit commun, lequel, dès lors qu’il est interrogé, fragilisé, déplacé ou simplement mal formulé, cesse d’être un socle pour devenir une inquiétude, inquiétude qui n’est pas sans rappeler que toute remise en question, lorsqu’elle émane d’un camp qui se dit populaire, finit toujours par ressembler à une attaque contre ce que nous croyions être immuable, et c’est précisément là que réside le danger, non pas dans ce qui est dit, mais dans le fait que cela puisse être pensé.`,
  `La France Insoumise est accusée de ne pas avoir tweeté le bon émoji le 7 octobre.`,
  `La France Insoumise est accusée de cliver le pays, notamment en parlant de choses qui clivent.`
];

const sources = [
  `Un extrait sorti de son contexte, relayé en boucle.`,
  `Une séquence vidéo partielle, commentée avec aplomb.`,
  `Un bandeau d’info très inquiet.`,
  `Une capture d’écran recadrée, puis recadrée encore.`,
  `Un thread commençant par "je ne dis pas que, mais".`,
  `Une chronique indignée, sans définition précise.`,
  `Un montage flouté avec des flèches rouges.`,
  `Une indignation collective en plusieurs épisodes.`,
  `Un expert auto-proclamé en plateau.`,
  `Une source proche du dossier, donc très sûre.`
];

const preuves = [
  `Si tout le monde le répète, c’est que c’est vrai.`,
  `Le ressenti collectif vaut démonstration.`,
  `L’absence de preuve est une preuve de plus.`,
  `On sait bien ce que ça veut dire, même si on ne sait pas l’expliquer.`,
  `Le simple doute suffit à conclure.`,
  `Ça choque, donc c’est grave.`,
  `C’est écrit en majuscules, donc c’est établi.`,
  `Ça a fait un segment de 12 minutes, donc c’est sérieux.`,
  `Tout le monde le pense tout bas, donc on va le dire très fort.`,
  `Si c’était faux, ça se saurait.`
];

const conclusions = [
  `Indignation immédiate recommandée.`,
  `La République est en danger, mais on ne sait pas laquelle.`,
  `Il convient de condamner moralement, puis de réfléchir éventuellement.`,
  `Le débat est clos, mais on va en reparler toute la semaine.`,
  `La question mérite d’être posée très fort.`,
  `Nous demandons une condamnation plus claire, plus ferme, plus longue.`,
  `C’est la preuve que tout se tient.`,
  `C’est préoccupant, donc c’est confirmé.`,
  `On ne peut plus rien dire, mais on va le dire quand même.`,
  `Dossier à suivre, surtout s’il n’y a rien de nouveau.`
];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function genererActe() {
  const accusationEl = document.getElementById("accusation");
  const sourceEl = document.getElementById("source");
  const preuveEl = document.getElementById("preuve");
  const conclusionEl = document.getElementById("conclusion");

  if (!accusationEl || !sourceEl || !preuveEl || !conclusionEl) return;

  accusationEl.textContent = randomItem(accusations);
  sourceEl.textContent = randomItem(sources);
  preuveEl.textContent = randomItem(preuves);
  conclusionEl.textContent = randomItem(conclusions);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateBtn");
  if (btn) btn.addEventListener("click", genererActe);

  // Génération automatique au chargement
  genererActe();
});
