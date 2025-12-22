// 10 actes d'accusation distincts
const accusations = [
  "La France Insoumise est accusée d’être responsable de la montée de l’antisémitisme en France, en Europe, sur Terre, et sur Namek.",
  "La France Insoumise a tué Jésus",
  "La France Insoumise est sorti du cercle républicain pour rejoindre le cercle des poètes disparus",
  "La France Insoumise serait à l’origine d’un malaise généralisé, perceptible mais impossible à mesurer.",
  "La France Insoumise est rendue coupable d’un affaiblissement du débat public, précisément parce qu’elle participe à ce débat.",
  "La France Insoumise est accusée de radicalité excessive, ainsi que d’ambiguïté dangereuse, parfois simultanément.",
  "La France Insoumise serait responsable d’un climat anxiogène, bien que ce climat préexistait à son apparition.",
  "La France Insoumise est accusée d’instrumentaliser des émotions collectives tout en étant elle-même accusée de les provoquer.",
  "La France Insoumise serait coupable de diviser la société en dénonçant les divisions existantes.",
  "La France Insoumise est accusée de poser de mauvaises questions, ce qui suffirait à établir sa culpabilité."
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
