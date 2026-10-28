---
theme: seriph
background: https://unsplash.com/photos/tBvF46kmwBw/download?force=true&w=1280
title: IA et science, vers une automatisation de la recherche ?
info: |
  Séminaire LAPP, Thomas Vuillaume
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
aspectRatio: 16/9
download: true
---

# L'IA et l'avenir de la recherche

## Vers une automatisation de la recherche scientifique ?

Séminaire LAPP · Thomas Vuillaume

<!--
20-30 min de présentation, puis 30 min (ou plus) de discussion.
Non technique, pour tout le monde. Cela touche à nos valeurs et à notre identité : les émotions sont légitimes.
-->

---
layout: center
class: text-center
---

# Le menu du jour

<v-clicks>

1. **Situer** : qu'est-ce que l'IA agentique, où en est-on ?
2. **Constater** : ce que ces systèmes font déjà en recherche (et ce qui est contesté)
3. **Questionner** : ce que cela change pour nous, individuellement et collectivement
4. **Débattre**

</v-clicks>

---
layout: section
---

# 1. IA, kesako ?

---

# Quatre mots à distinguer

<div class="grid grid-cols-4 gap-4 mt-10">
<div v-click class="card"><div class="text-4xl">🧠</div><h3>Modèle</h3>Un réseau entraîné à prédire la suite d'un texte. Il ne fait rien tout seul.</div>
<div v-click class="card"><div class="text-4xl">💬</div><h3>Chatbot</h3>Un modèle + une interface de conversation. Il répond.</div>
<div v-click class="card"><div class="text-4xl">🛠️</div><h3>Agent</h3>Un modèle qui utilise des <b>outils</b> (web, code, bases de données) en boucle, et décide de la suite.</div>
<div v-click class="card"><div class="text-4xl">🧰</div><h3>Harnais</h3>Le logiciel autour du modèle : outils, mémoire, permissions, vérifications.</div>
</div>

<div v-click class="mt-10 text-center text-xl">
Agent = modèle + harnais + <b>un but</b>
</div>

---
class: text-sm
---

# Cinq niveaux d'autonomie

| Niveau               | Initiative               | Vérification              | Exemple en recherche                                                                                                 |
|----------------------|--------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------|
| 1. Assistant intégré | Humain, l'outil complète | Humain, en continu        | Autocomplétion de code ou de texte                                                                                   |
| 2. Chatbot           | Humain pose une question | Humain relit              | "Résume ce rapport de 500 pages"                                                                                     |
| 3. Agent             | Humain fixe un but       | Aux points de contrôle    | "Fais un histogramme de ces données"                                                                                 |
| 4. Agent proactif    | L'agent déclenche        | Variable                  | "Chaque semaine, cherche tous les articles du domaine et préviens-moi quand tu vois un article intéressant pour moi" |
| 5. Équipe d'agents   | Un orchestrateur         | Humains en bout de chaîne | Zéros de ζ, Fermat, Navier–Stokes                                                                                    |

<div v-click class="mt-4 text-center text-lg">
« je fais » → « je dirige » → « je juge »<br>
<b>Plus on monte, plus la vérification est le facteur limitant.</b>
</div>

<!--
Niveau 4 : agent avec un backlog de tâches ou un objectif de long terme, et proactif. Peu de littérature : remplir avec un exemple si j'en trouve un.
Niveau 5 : problèmes très parallélisés nécessitant la coordination de centaines d'agents ou plus.
-->

---
layout: section
---

# 2. Et vous ?

---

# Sondage

<img src="/qrcode-slido.png" class="mx-auto" style="height:280px">

<div class="text-center mt-2 text-xl">
Rejoindre sur <b>slido.com</b><br>
<b>#1491 034</b>
</div>


---

# Où l'IA est-elle utilisée en recherche ?

<div class="grid grid-cols-2 gap-6 items-center">
<img src="/illustrations/s_usage_by_activity.png" class="rounded shadow" style="height:360px">
<div class="card text-2xl">AI assistance concentrates on information- and text-intensive tasks, but its role diminishes where judgment is required.</div>
</div>

<div class="src">Springer Nature, Fudan University & Shanghai Academy of AI for Science, <i>The State of AI Use Among Researchers</i>, juil. 2026 (enquête de mars 2026 : 10 480 répondants, 117 pays).</div>


---
layout: section
---

# 3. Le rythme du progrès

---
layout: center
class: text-center
---

# Will Smith mange des spaghettis

<div class="text-xl mt-6">2023 → 2026</div>

<div class="mt-4 flex justify-center">
<iframe src="https://www.youtube.com/embed/ygVLDfj2_F0" title="Will Smith mange des spaghettis" width="248" height="440" class="rounded shadow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- Lancer la vidéo. Trois ans. -->

---

# Traduire 535 000 lignes de code

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

<div class="big">535 000</div>
lignes de **Zig** portées en **Rust**, presque entièrement par des agents Claude

</div>
<div v-click>

<div class="big" style="color:#2f855a">Bun 1.4</div>
première version stable en Rust, livrée en production le 20 août 2026

</div>
</div>

<div v-click class="mt-10 card">
Mais : <b>19 régressions sémantiques</b> introduites par le port (corrigées depuis), et une critique publique du créateur de Zig : « unreviewed slop ».
</div>

<div class="src">Jarred Sumner (Bun), 2026 · The Register, InfoQ, DevClass, 2026</div>

---

# Des logiciels entiers, à la demande

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="card"><h3>🎨 ArtCraft</h3>7 applications libres en Rust qui imitent Photoshop, Premiere, Lightroom, Illustrator, Acrobat, avec IA intégrée</div>
<div class="card"><h3>🎮 Jeux vidéo</h3>Génération de jeux complets</div>
<div class="card"><h3>🧊 Blender / 3D</h3>Modèles 3D et scènes générés</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-6">
<img src="https://raw.githubusercontent.com/storytold/gridcraft/main/docs/images/format-chart.png" class="rounded shadow">
<img src="https://raw.githubusercontent.com/storytold/photocraft/main/docs/images/photocraft-adjustments.jpg" class="rounded shadow">
</div>

<div class="src">ArtCraft, Storyteller.ai · github.com/storytold</div>

---

# La mesure METR : la durée des tâches qu'un agent réussit

<img src="/illustrations/s2_metr_headline_log.png" class="mx-auto" style="height:340px">

<div class="text-center mt-2 text-xl"><b>Progrès exponentiel</b> : l'horizon de tâche double environ tous les 7 mois (2019–2024)</div>

<div class="src">Kwa, West et al., METR, « Measuring AI Ability to Complete Long Tasks », arXiv 2503.14499, CC BY 4.0</div>

---

# …mais attention à ce que l'on mesure

<v-clicks>

- L'horizon à **80 %** de réussite est beaucoup plus court que celui à 50 %
- Tâches **logicielles vérifiables** uniquement
- Difficulté d'une tâche ≠ durée d'autonomie
- Saturation des benchmarks

</v-clicks>

<div v-click class="mt-8 card text-lg">
Croissance rapide et mesurable sur des tâches logicielles vérifiables, <b>forte incertitude sur la généralisation</b>.
</div>

---

# Un contre-exemple instructif : ScanCode

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### Annoncé
Un agent porte une base Python mature (ScanCode) en Rust.<br>
Benchmark : **10× à 100×** plus rapide.

</div>
<div v-click>

### Constaté par les mainteneurs (AboutCode)
- ScanCode optimisé de façon comparable : **aussi rapide, voire plus**
- Le port couvre **moins de tests**
- Correction des données sacrifiée pour paraître rapide

</div>
</div>

<div v-click class="mt-8 text-center text-xl">
Une traduction « réussie » peut cacher des <b>régressions silencieuses</b>.<br>
Exactitude et attribution (licences, copyright) sacrifiées.
</div>

---
layout: section
---

# 4. Industrialiser le travail intellectuel

---
layout: center
class: text-center
---

# L'artisanat du développement logiciel est mort

<div class="text-3xl mt-8">Nous entrons dans l'ère de l'<b>industrialisation</b> du logiciel</div>

<div class="mt-6 text-2xl opacity-80">Code factories</div>

---

# …et la recherche est du code

<v-clicks>

- Analyse de données, simulations, pipelines : du code
- Ce niveau d'industrialisation, appliqué à la recherche, est **sans précédent**
- Il ne s'arrête pas au code : lire, synthétiser, calculer, rédiger

</v-clicks>



---
layout: section
---

# 5. La recherche autonome, dernières nouvelles

---

# Chronologie 2021 → octobre 2026

<Timeline />

<div class="src">Cliquer sur un jalon. Dates et sources primaires dans <code>timeline.md</code>. Statuts : établi = publié/vérifié par des experts externes.</div>


---
layout: center
class: text-center
---

# Mathapocalypse, 6 octobre

<div class="grid grid-cols-3 gap-8 mt-10">
<div><div class="big">722</div>manuscrits</div>
<div><div class="big">372</div>familles de résultats</div>
<div><div class="big" style="color:#c53030">3 + 14</div>retirés le lendemain / révisés</div>
</div>

<div class="mt-6 text-lg">Seulement <b>162</b> avec le résultat principal vérifié en Lean.</div>

<div class="mt-10 text-xl opacity-80">Personne n'a eu le temps de les lire.</div>

---
layout: section
---

# 6. Pourquoi les maths d'abord ?

---

# Terrain idéal

<div class="grid grid-cols-3 gap-6 mt-10">
<div v-click class="card text-center"><div class="text-4xl">📉</div><h3>Pas (ou peu) de données</h3>Elles se génèrent facilement</div>
<div v-click class="card text-center"><div class="text-4xl">✅</div><h3>Preuves formalisables</h3>Lean vérifie</div>
<div v-click class="card text-center"><div class="text-4xl">🔒</div><h3>Calculs fermés</h3>Vérifiables</div>
</div>

<div v-click class="mt-10 text-center text-xl">
La vérification est bon marché → <b>les agents peuvent itérer</b>.<br>
Ailleurs (expériences, données réelles), elle coûte cher.
</div>

---

# Ce que l'IA fait particulièrement bien

<v-clicks>

- **Liens à très longue distance** entre domaines qui ne se parlent pas
- **Attaquer sans a priori** : plusieurs problèmes résolus parce que la communauté pensait que ce n'était pas la bonne voie
- Là où les données sont abondantes et les progrès mesurables

</v-clicks>

<div class="src"><a href="https://www.youtube.com/watch?v=dsBXYAwQieI">youtube.com/watch?v=dsBXYAwQieI</a></div>

---
layout: section
---

# 7. La réaction des mathématiciens

---

# Entre horreur et enthousiasme

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="card" style="border-color:#c53030">
<h3>😨 Horrifiés</h3>
25 médaillés Fields : « A Severe Misalignment of AI in Mathematics »<br>
<blockquote class="mt-2 pl-3 border-l-4 border-current"><i>« Ils ont annihilé mon domaine de recherche ».</i><br><span class="text-sm">— Hugo Duminil-Copin</span></blockquote>
</div>
<div class="card" style="border-color:#2f855a">
<h3>🤩 Excités</h3>
Des mathématiciens qui s'emparent des outils, vérifient, publient avec l'IA<br>
<blockquote class="mt-2 pl-3 border-l-4 border-current"><i>« This is obviously the most significant moment in mathematical history »</i><br><span class="text-sm">— Alpöge</span></blockquote>
</div>
</div>

<div class="src">mathandai.org · Le Monde, 11 sept. 2026, « La mise en garde de 25 médailles Fields »</div>

---

# Trois problèmes

<v-clicks>

1. **Vol de la recherche ?** Les modèles ont aspiré tout notre savoir.
2. **Dump de papiers** sans relecture, difficiles à lire, sans citations des travaux précédents.
   → c'est à la communauté de **nettoyer, digérer, comprendre, transmettre**.
3. **La téléportation** :

</v-clicks>

<div v-click class="mt-6 text-xl italic text-center">
« Les réflexions sur l'IA nous téléportent à un endroit de la réflexion, mais sans avoir fait le cheminement. Et finalement, on rate beaucoup de choses. », Terence Tao
</div>

---
layout: center
class: text-center
---

# Il n'y a plus rien à faire pour les mathématiciens ?

<div v-click class="text-2xl mt-8">Si. Mais démontrer un théorème n'est peut-être plus<br>l'exercice à demander.</div>

<div v-click class="text-2xl mt-6"><b>Comprendre · traduire · transmettre · enseigner</b></div>

<div class="src">Si vous déprimez : <a href="https://www.youtube.com/watch?v=LKrwhjOI8Nc">youtube.com/watch?v=LKrwhjOI8Nc</a> · S. Wolfram, <i>What's the Future for Pure Math Research in the Age of AI?</i> (2026)</div>

---
layout: section
---

# 8. L'impact individuel

---

# Ce que l'on gagne, ce que l'on perd

<div class="grid grid-cols-2 gap-8 mt-6">
<div v-click class="card" style="border-color:#2f855a">

### ➕ Gagner
- Productivité
- Qualité du travail (parfois)
- Apprendre (un « prof » IA)

</div>
<div v-click class="card" style="border-color:#c53030">

### ➖ Perdre
- Savoir-faire
- Compétences, maîtrise
- Compréhension
- Plaisir
- Identité, artisanat, métier

</div>
</div>


---

# Ce que disent les chercheurs (2026)

<div class="grid grid-cols-2 gap-6 items-center">
<img src="/illustrations/s_hopes.png" class="rounded shadow">
<img src="/illustrations/s_concerns.png" class="rounded shadow">
</div>

<div class="mt-4 text-center text-lg">Espoir n°1 : la productivité. Crainte n°1 : l'exactitude et les hallucinations.</div>

<div class="src">Springer Nature, Fudan University & Shanghai Academy of AI for Science, <i>The State of AI Use Among Researchers</i>, juil. 2026 (10 480 répondants, 117 pays).</div>


---
layout: section
---

# 9. L'impact collectif

---

# Le paradoxe de Hao et al.

<div class="text-sm opacity-70">41,3 millions d'articles, sciences naturelles</div>

<div class="grid grid-cols-4 gap-4 mt-6 text-center">
<div><div class="big" style="color:#2f855a">×3</div>publications pour les utilisateurs de l'IA</div>
<div><div class="big" style="color:#2f855a">×4,8</div>citations (au total)</div>
<div v-click><div class="big" style="color:#c53030">−4,63 %</div>de sujets étudiés collectivement</div>
<div v-click><div class="big" style="color:#c53030">−22 %</div>d'engagement entre chercheurs</div>
</div>

<div v-click class="mt-10 text-center text-xl">Chacun gagne. <b>La science, collectivement, se rétrécit.</b></div>

<div class="mt-4 text-center text-sm opacity-70">Corrélations, pas causalité. « IA » = méthodes d'apprentissage automatique, pas seulement les LLM.</div>

<div class="src">Hao, Xu, Li, Evans, <i>Nature</i> 649, 2026 · arXiv 2412.07727</div>

---
layout: image-right
image: /illustrations/s4_deep_thought.jpg
---

# Saurons-nous poser les bonnes questions ?

<div class="mt-10 text-xl">

Allons-nous construire **Deep Thought**…

<div v-click class="mt-4">…et obtenir <b>42</b> ?</div>

</div>


---

# Quelques réflexions personnelles

<div style="font-size:.70em">

|                                                                |                                                                                                                                                            |                                                                                                                                                             |
|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A.** La production n'est plus la bonne métrique de promotion | Le coût marginal d'un article baisse                                                                                                                       | Métrique déjà critiquée avant l'IA (DORA 2012, Manifeste de Leiden 2015)                                                                                               |
| **B.** Recrutement et formation des jeunes menacés             | Si l'IA peut faire un travail de thèse, prend-on encore un(e) étudiant(e) ? Avec une ANR ou une ERC, paye-t-on une armée d'agents plutôt qu'un doctorant ? | Former des jeunes est-il valorisé ?                                                                                                                         |
| **C.** Les appels à projets n'ont plus de sens                 | Proposals écrits et relus par des IA ; production proportionnelle au capital investi ?                                                                     | Défauts connus depuis longtemps ; la physique des hautes énergies est déjà « proportionnelle aux capitaux » ; coûts d'inférence en baisse ; modèles ouverts |
| **D.** Le choix des sujets est en jeu                          | Hao et al. : −4,63 % de sujets ; « Claude-shaped science », M. Schwartz                                                                                    | l'IA peut abaisser le coût d'entrée de sujets de niche ; le goût humain est lui aussi biaisé (effet de mode)                                                |

</div>

<div v-click class="mt-10 text-sm">Quel sujet de thèse proposer en prenant le risque qu'il soit résolu en 10 minutes par une IA avant la fin de la thèse ? (V. Reverdy)
 - Quelles motivations et quelles incitations donner aux jeunes chercheurs ?</div>


---
layout: section
---

# 10. Que reste-t-il de la recherche ?

---

# Pourquoi fait-on de la recherche ?

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div v-click class="card"><div class="text-4xl">🔭</div><h3>Découvrir</h3></div>
<div v-click class="card"><div class="text-4xl">⚙️</div><h3>Développer des technologies</h3></div>
<div v-click class="card"><div class="text-4xl">💡</div><h3>Comprendre</h3></div>
</div>

<div v-click class="mt-10 text-center text-2xl">
L'IA peut découvrir à notre place.<br><b>Elle ne comprendra pas à notre place.</b>
</div>

---

# Wolfram : des récits qui tiennent dans un esprit humain

<div class="text-xl leading-relaxed mt-6 italic">

« We can see physics, or indeed natural science in general, as an effort to take the complexities of the natural world and find aspects that can be described by <b>narratives that fit in finite human minds</b>. »

</div>

<div v-click class="text-xl leading-relaxed mt-6 italic">

« In other words, the problem of advancing pure mathematics is at some level not so much about pushing back some raw metamathematical frontier as about <b>finding human ways to represent what's there</b>. »

</div>

<div class="src">S. Wolfram, <i>What's the Future for Pure Math Research in the Age of AI?</i>, 2026 · writings.stephenwolfram.com</div>


---
layout: section
---

# 11. Éthique et captation

---

# Trois coûts

<div class="grid grid-cols-3 gap-6 mt-8">
<div v-click class="card"><div class="text-4xl">🌍</div><h3>Écologie</h3>Empreinte carbone, énergie, ressources pour entraîner et faire tourner les modèles</div>
<div v-click class="card"><div class="text-4xl">📚</div><h3>Savoir</h3>Les IA ont aspiré le savoir accumulé à l'échelle de la planète</div>
<div v-click class="card"><div class="text-4xl">🧲</div><h3>Processus</h3>Quelques entreprises aspirent maintenant nos directions de recherche, raisonnements et démarches en cours</div>
</div>

<div v-click class="mt-8 text-center text-lg">
Risque : toute la part <b>implicite</b> de la recherche (méthode, problématisation, intuition) infusée dans des modèles <b>propriétaires</b>, au profit d'acteurs privés.
</div>

---

# Ce que les humains apportent encore

<div class="text-3xl leading-loose mt-8">

<v-clicks>

- **Responsabilité** (accountability)
- **Buts et choix** à long terme
- **Relation et confiance**
- ~~Savoir-faire implicite~~ → <span style="color:#c53030">en cours de captation, en ce moment même</span>

</v-clicks>

</div>

---
layout: center
class: text-center
---

# Discussion

<div class="text-2xl mt-10 leading-loose">

Que signifie « faire de la recherche » aujourd'hui ?<br>
Quel avenir pour les juniors ? pour les seniors ?<br>
Qu'est-ce que je ne veux **pas** déléguer ?

</div>

---

<iframe src="https://www.youtube.com/embed/zONGVaONKe8?start=10&end=102" title="Extrait vidéo" width="100%" height="400" class="rounded shadow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Version pour développeurs: https://www.youtube.com/watch?v=3TNpOD6bov8&t=2s

---

# Ressources

<div style="font-size:.7em; line-height:1.5">

- Anthropic, *Claude-shaped science* : anthropic.com/research/claude-shaped-science
- Anthropic, *Yes, Claude can do nine loops* : anthropic.com/research/yes-claude-can-do-nine-loops
- METR, *Measuring AI ability to complete long tasks* : metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks
- ReplicationBench : arxiv.org/abs/2510.24591
- Hao et al. : arxiv.org/abs/2412.07727 · Shen & Tamkin : arxiv.org/abs/2601.20245
- Springer, *AI & Society* : link.springer.com/article/10.1007/s00146-025-02190-4
- Déclaration des médaillés Fields : mathandai.org
- S. Wolfram, *What's the Future for Pure Math Research in the Age of AI?* : writings.stephenwolfram.com
- Aschenbrenner, *Situational Awareness* : situational-awareness.ai
- Vidéos : youtube.com/watch?v=LKrwhjOI8Nc · dsBXYAwQieI · zONGVaONKe8 · (devs) 3TNpOD6bov8

</div>
