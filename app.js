// 10 actes d'accusation distincts
const accusations = [
  "La France Insoumise est accusée d’être responsable de la montée de l’antisémitisme en France, en Europe, sur Terre, et sur Namek.",
  "La France Insoumise aurait tué Jésus pour gagner le vote des banlieux juives",
  "La France Insoumise serait sortie du cercle républicain pour rejoindre le cercle des poètes disparus, ce qui pose un problème institutionnel",
  "La France Insoumise serait à l’origine des frères musulmans et travaillerait actuellement sur la version Woke des \"soeurs musulmanes\"",
  "La France Insoumise est rendue coupable de bordéliser les debats, créant ainsi une surcharge de travail pour les services de nettoyage du débat public.",
  "La France Insoumise serait ambigüe sur les ambiguités de certains propos ambigües alors qu'il est clair que le débat était ambigüe depuis le debut",
  "La France Insoumise serait responsable d’un climat anxiogène, alors qu'il y a toujours eu des variations de climat bien avant l'apparition de la France Insoumise",
  "La France Insoumise est accusée d’avoir radicalisé les discussions familiales du dimanche midi.",
  "La France Insoumise serait coupable de diviser la société en dénonçant les divisions existantes.",
  "La France Insoumise est rendue coupable de polariser la société, y compris des personnes qui n’étaient pas polarisées avant d’en entendre parler."
  "La France Insoumise n'a pas condamner les violences, et c'est pas bien !"
  "La France Insoumise n'a pas eu de pensées pour les familles des vitrines"
  "La France Insoumise souhaite la révolution pour changer la politique, la société, la civilisation, le continuum espace temps et l’ordre naturel des choses."
  "La France Insoumise n'aime pas Michel Sardou, ce qui prouve qu'ils n'aiment pas ce que nous sommes"
  "La France Insoumise est accusée de provoquer la désunion à gauche, en rejetant l’Alliance au profit de la Horde, ce qui complique fortement le jeu."
];

const sources = [
  "Un extrait sorti de son contexte, relayé en boucle.",
  "Une séquence vidéo partielle, commentée sans nuance.",
  "Un éditorial au ton assuré, sans éléments vérifiables.",
  "Une capture d’écran recadrée plusieurs fois.",
  "Un thread affirmatif commençant par je ne dis pas que mais."
];

const preuves = [
  "Si beaucoup de gens en parlent, c’est que ce n’est pas un hasard.",
  "L’absence de preuve formelle renforce les soupçons.",
  "Le ressenti collectif vaut démonstration.",
  "Le simple doute justifie l’accusation.",
  "Le fait que cela choque prouve que c’est grave."
];

const conclusions = [
  "Il convient de s’indigner immédiatement.",
  "Une vigilance accrue s’impose, sans attendre davantage.",
  "Le débat doit être posé, même sans faits établis.",
  "Il est urgent de condamner moralement.",
  "La question mérite d’être posée avec gravité."
];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function genererActe() {
  document.getElementById("accusation").textContent = randomItem(accusations);
  document.getElementById("source").textContent = randomItem(sources);
  document.getElementById("preuve").textContent = randomItem(preuves);
  document.getElementById("conclusion").textContent = randomItem(conclusions);
}

document
  .getElementById("generateBtn")
  .addEventListener("click", genererActe);
