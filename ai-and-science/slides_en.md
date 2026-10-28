---
theme: seriph
background: https://unsplash.com/photos/tBvF46kmwBw/download?force=true&w=1280
title: AI and science, towards the automation of research?
info: |
  LAPP seminar, Thomas Vuillaume
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
layout: cover
aspectRatio: 16/9
download: true
---

# AI and the Future of Research

## Towards the automation of scientific research?

LAPP seminar · Thomas Vuillaume

<!--
20-30 min talk, then 30 min (or more) of discussion.
Non-technical, for everyone. This touches our values and identity: emotions are legitimate.
-->

---
layout: center
class: text-center
---

# Today's menu

<v-clicks>

1. **Situate**: what is agentic AI, where do we stand?
2. **Observe**: what these systems already do in research (and what is disputed)
3. **Question**: what this changes for us, individually and collectively
4. **Debate**

</v-clicks>

---
layout: section
---

# 1. AI, what is it?

---

# Four words to tell apart

<div class="grid grid-cols-4 gap-4 mt-10">
<div v-click class="card"><div class="text-4xl">🧠</div><h3>Model</h3>A network trained to predict the continuation of a text. It does nothing on its own.</div>
<div v-click class="card"><div class="text-4xl">💬</div><h3>Chatbot</h3>A model + a conversation interface. It answers.</div>
<div v-click class="card"><div class="text-4xl">🛠️</div><h3>Agent</h3>A model that uses <b>tools</b> (web, code, databases) in a loop, and decides what to do next.</div>
<div v-click class="card"><div class="text-4xl">🧰</div><h3>Harness</h3>The software around the model: tools, memory, permissions, checks.</div>
</div>

<div v-click class="mt-10 text-center text-xl">
Agent = model + harness + <b>a goal</b>
</div>

---
class: text-sm
---

# Five levels of autonomy

| Level                 | Initiative                | Verification                   | Example in research                                                                                      |
|-----------------------|---------------------------|--------------------------------|----------------------------------------------------------------------------------------------------------|
| 1. Built-in assistant | Human, the tool completes | Human, continuously            | Code or text autocompletion                                                                              |
| 2. Chatbot            | Human asks a question     | Human proofreads               | "Summarize this 500-page report"                                                                         |
| 3. Agent              | Human sets a goal         | At checkpoints                 | "Make a histogram of this data"                                                                          |
| 4. Proactive agent    | The agent triggers        | Variable                       | "Every week, search all papers in the field and let me know when you see one that is interesting for me" |
| 5. Team of agents     | An orchestrator           | Humans at the end of the chain | Zeros of ζ, Fermat, Navier–Stokes                                                                        |

<div v-click class="mt-4 text-center text-lg">
"I do" → "I direct" → "I judge"<br>
<b>The higher we go, the more verification is the limiting factor.</b>
</div>

<!--
Level 4: agent with a backlog of tasks or a long-term objective, and proactive. Little literature.
Level 5: highly parallelized problems requiring coordination of hundreds of agents or more.
-->

---
layout: section
---

# 2. And you?

---

# Poll

<img src="/qrcode-slido.png" class="mx-auto" style="height:280px">

<div class="text-center mt-2 text-xl">
Join at <b>slido.com</b><br>
<b>#1491 034</b>
</div>


---

# Where is AI used in research?

<div class="grid grid-cols-2 gap-6 items-center">
<img src="/illustrations/s_usage_by_activity.png" class="rounded shadow" style="height:360px">
<div class="card text-2xl">AI assistance concentrates on information- and text-intensive tasks, but its role diminishes where judgment is required.</div>
</div>

<div class="src">Springer Nature, Fudan University & Shanghai Academy of AI for Science, <i>The State of AI Use Among Researchers</i>, Jul 2026 (March 2026 survey: 10,480 respondents, 117 countries).</div>


---
layout: section
---

# 3. The rate of progress

---
layout: center
class: text-center
---

# Will Smith eating spaghetti

<div class="text-xl mt-6">2023 → 2026</div>

<div class="mt-4 flex justify-center">
<iframe src="https://www.youtube.com/embed/ygVLDfj2_F0" title="Will Smith eating spaghetti" width="248" height="440" class="rounded shadow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- Play the video. Three years. -->

---

# Translating 535,000 lines of code

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

<div class="big">535,000</div>
lines of **Zig** ported to **Rust**, almost entirely by Claude agents

</div>
<div v-click>

<div class="big" style="color:#2f855a">Bun 1.4</div>
first stable release in Rust, shipped to production on August 20, 2026

</div>
</div>

<div v-click class="mt-10 card">
But: <b>19 semantic regressions</b> introduced by the port (since fixed), and public criticism from Zig's creator: "unreviewed slop".
</div>

<div class="src">Jarred Sumner (Bun), 2026 · The Register, InfoQ, DevClass, 2026</div>

---

# Entire software, on demand

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="card"><h3>🎨 ArtCraft</h3>7 free Rust applications imitating Photoshop, Premiere, Lightroom, Illustrator, Acrobat, with built-in AI</div>
<div class="card"><h3>🎮 Video games</h3>Generation of complete games</div>
<div class="card"><h3>🧊 Blender / 3D</h3>Generated 3D models and scenes</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-6">
<img src="https://raw.githubusercontent.com/storytold/gridcraft/main/docs/images/format-chart.png" class="rounded shadow">
<img src="https://raw.githubusercontent.com/storytold/photocraft/main/docs/images/photocraft-adjustments.jpg" class="rounded shadow">
</div>

<div class="src">ArtCraft, Storyteller.ai · github.com/storytold</div>

---

# The METR measure: the length of tasks an agent completes

<img src="/illustrations/s2_metr_headline_log.png" class="mx-auto" style="height:340px">

<div class="text-center mt-2 text-xl"><b>Exponential progress</b>: the task horizon doubles roughly every 7 months (2019–2024)</div>

<div class="src">Kwa, West et al., METR, "Measuring AI Ability to Complete Long Tasks", arXiv 2503.14499, CC BY 4.0</div>

---

# …but beware of what is being measured

<v-clicks>

- The horizon at **80%** success is much shorter than at 50%
- **Verifiable software** tasks only
- Task difficulty ≠ duration of autonomy
- Benchmark saturation

</v-clicks>

<div v-click class="mt-8 card text-lg">
Fast, measurable growth on verifiable software tasks, <b>high uncertainty on generalization</b>.
</div>

---

# An instructive counter-example: ScanCode

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### Announced
An agent ports a mature Python codebase (ScanCode) to Rust.<br>
Benchmark: **10× to 100×** faster.

</div>
<div v-click>

### Found by the maintainers (AboutCode)
- ScanCode optimized in a comparable way: **just as fast, or faster**
- The port covers **fewer tests**
- Data correctness sacrificed to look faster

</div>
</div>

<div v-click class="mt-8 text-center text-xl">
A "successful" translation can hide <b>silent regressions</b>.<br>
Correctness and attribution (licenses, copyright) sacrificed.
</div>

---
layout: section
---

# 4. Industrializing intellectual work

---
layout: center
class: text-center
---

# The craft of software development is dead

<div class="text-3xl mt-8">We are entering the era of software <b>industrialization</b></div>

<div class="mt-6 text-2xl opacity-80">Code factories</div>

---

# …and research is code

<v-clicks>

- Data analysis, simulations, pipelines: all code
- This level of industrialization, applied to research, is **unprecedented**
- It does not stop at code: reading, synthesizing, computing, writing

</v-clicks>



---
layout: section
---

# 5. Autonomous research, latest news

---

# Timeline 2021 → October 2026

<TimelineEn />

<div class="src">Click on a milestone. Dates and primary sources in <code>timeline.md</code>. Statuses: established = published/verified by external experts.</div>


---
layout: center
class: text-center
---

# Mathapocalypse, October 6

<div class="grid grid-cols-3 gap-8 mt-10">
<div><div class="big">722</div>manuscripts</div>
<div><div class="big">372</div>families of results</div>
<div><div class="big" style="color:#c53030">3 + 14</div>withdrawn the next day / revised</div>
</div>

<div class="mt-6 text-lg">Only <b>162</b> with their main result checked in Lean.</div>

<div class="mt-10 text-xl opacity-80">Nobody had time to read them.</div>

---
layout: section
---

# 6. Why math first?

---

# An ideal terrain

<div class="grid grid-cols-3 gap-6 mt-10">
<div v-click class="card text-center"><div class="text-4xl">📉</div><h3>No (or little) data</h3>It is easy to generate</div>
<div v-click class="card text-center"><div class="text-4xl">✅</div><h3>Formalizable proofs</h3>Lean checks them</div>
<div v-click class="card text-center"><div class="text-4xl">🔒</div><h3>Closed computations</h3>Verifiable</div>
</div>

<div v-click class="mt-10 text-center text-xl">
Verification is cheap → <b>agents can iterate</b>.<br>
Elsewhere (experiments, real data), it is expensive.
</div>

---

# What AI does particularly well

<v-clicks>

- **Very long-distance connections** between fields that do not talk to each other
- **Attacking without priors**: several problems were solved because the community thought it was not the right path
- Where data is abundant and progress measurable

</v-clicks>

<div class="src"><a href="https://www.youtube.com/watch?v=dsBXYAwQieI">youtube.com/watch?v=dsBXYAwQieI</a></div>

---
layout: section
---

# 7. The mathematicians' reaction

---

# Between horror and enthusiasm

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="card" style="border-color:#c53030">
<h3>😨 Horrified</h3>
25 Fields medalists: "A Severe Misalignment of AI in Mathematics"<br>
<blockquote class="mt-2 pl-3 border-l-4 border-current"><i>"They have annihilated my field of research."</i><br><span class="text-sm">— Hugo Duminil-Copin</span></blockquote>
</div>
<div class="card" style="border-color:#2f855a">
<h3>🤩 Excited</h3>
Mathematicians who seize the tools, verify, and publish with AI<br>
<blockquote class="mt-2 pl-3 border-l-4 border-current"><i>"This is obviously the most significant moment in mathematical history"</i><br><span class="text-sm">— Alpöge</span></blockquote>
</div>
</div>

<div class="src">mathandai.org · Le Monde, Sep 11, 2026, "La mise en garde de 25 médailles Fields"</div>

---

# Three problems

<v-clicks>

1. **Theft of research?** The models have sucked up all our knowledge.
2. **Paper dumps** without review, hard to read, without citations of previous work.
   → it is up to the community to **clean up, digest, understand, transmit**.
3. **Teleportation**:

</v-clicks>

<div v-click class="mt-6 text-xl italic text-center">
"AI teleports us to a point in the reasoning, but without having made the journey. And in the end, we miss a lot.", Terence Tao
</div>

---
layout: center
class: text-center
---

# Is there nothing left for mathematicians to do?

<div v-click class="text-2xl mt-8">There is. But proving a theorem may no longer be<br>the exercise to ask for.</div>

<div v-click class="text-2xl mt-6"><b>Understand · translate · transmit · teach</b></div>

<div class="src">If you feel depressed: <a href="https://www.youtube.com/watch?v=LKrwhjOI8Nc">youtube.com/watch?v=LKrwhjOI8Nc</a> · S. Wolfram, <i>What's the Future for Pure Math Research in the Age of AI?</i> (2026)</div>

---
layout: section
---

# 8. The individual impact

---

# What we gain, what we lose

<div class="grid grid-cols-2 gap-8 mt-6">
<div v-click class="card" style="border-color:#2f855a">

### ➕ Gain
- Productivity
- Quality of work (sometimes)
- Learning (an AI "teacher")

</div>
<div v-click class="card" style="border-color:#c53030">

### ➖ Lose
- Know-how
- Skills, mastery
- Understanding
- Joy
- Identity, craftsmanship, profession

</div>
</div>


---

# What researchers say (2026)

<div class="grid grid-cols-2 gap-6 items-center">
<img src="/illustrations/s_hopes.png" class="rounded shadow">
<img src="/illustrations/s_concerns.png" class="rounded shadow">
</div>

<div class="mt-4 text-center text-lg">Hope #1: productivity. Concern #1: accuracy and hallucinations.</div>

<div class="src">Springer Nature, Fudan University & Shanghai Academy of AI for Science, <i>The State of AI Use Among Researchers</i>, Jul 2026 (10,480 respondents, 117 countries).</div>


---
layout: section
---

# 9. The collective impact

---

# The Hao et al. paradox

<div class="text-sm opacity-70">41.3 million papers, natural sciences</div>

<div class="grid grid-cols-4 gap-4 mt-6 text-center">
<div><div class="big" style="color:#2f855a">×3</div>publications for AI users</div>
<div><div class="big" style="color:#2f855a">×4.8</div>citations (total)</div>
<div v-click><div class="big" style="color:#c53030">−4.63%</div>of topics studied collectively</div>
<div v-click><div class="big" style="color:#c53030">−22%</div>of engagement between researchers</div>
</div>

<div v-click class="mt-10 text-center text-xl">Everyone wins. <b>Science, collectively, shrinks.</b></div>

<div class="mt-4 text-center text-sm opacity-70">Correlations, not causation. "AI" = machine-learning methods, not only LLMs.</div>

<div class="src">Hao, Xu, Li, Evans, <i>Nature</i> 649, 2026 · arXiv 2412.07727</div>

---
layout: image-right
image: /illustrations/s4_deep_thought.jpg
---

# Will we know how to ask the right questions?

<div class="mt-10 text-xl">

Are we going to build **Deep Thought**…

<div v-click class="mt-4">…and get <b>42</b>?</div>

</div>


---

# A few personal reflections

<div style="font-size:.70em">

|                                                               |                                                                                                                                             |                                                                                                                                        |
|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **A.** Output is no longer the right metric for promotion     | The marginal cost of a paper drops                                                                                                          | The metric was already criticized before AI (DORA 2012, Leiden Manifesto 2015)                                                                 |
| **B.** Hiring and training of young researchers is threatened | If AI can do a thesis work, do we still hire a student? With an ANR or an ERC grant, do we pay an army of agents rather than a PhD student? | Is training young people rewarded?                                                                                                     |
| **C.** Funding calls no longer make sense                     | Proposals written and reviewed by AIs; output proportional to the capital invested?                                                         | Known flaws for a long time; high-energy physics is already "proportional to capital"; inference costs are dropping; open models exist |
| **D.** The choice of topics is at stake                       | Hao et al.: −4.63% of topics; "Claude-shaped science", M. Schwartz                                                                          | AI can lower the entry cost of niche topics; human taste is itself biased (fashion effect)                                             |

</div>

<div v-click class="mt-10 text-sm">What thesis topic to propose, taking the risk that it will be solved in 10 minutes by an AI before the end of the thesis? (V. Reverdy)
 - What motivations and incentives to give young researchers?</div>


---
layout: section
---

# 10. What is left of research?

---

# Why do we do research?

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div v-click class="card"><div class="text-4xl">🔭</div><h3>Discover</h3></div>
<div v-click class="card"><div class="text-4xl">⚙️</div><h3>Develop technologies</h3></div>
<div v-click class="card"><div class="text-4xl">💡</div><h3>Understand</h3></div>
</div>

<div v-click class="mt-10 text-center text-2xl">
AI can discover in our place.<br><b>It will not understand in our place.</b>
</div>

---

# Wolfram: narratives that fit in a human mind

<div class="text-xl leading-relaxed mt-6 italic">

"We can see physics, or indeed natural science in general, as an effort to take the complexities of the natural world and find aspects that can be described by <b>narratives that fit in finite human minds</b>."

</div>

<div v-click class="text-xl leading-relaxed mt-6 italic">

"In other words, the problem of advancing pure mathematics is at some level not so much about pushing back some raw metamathematical frontier as about <b>finding human ways to represent what's there</b>."

</div>

<div class="src">S. Wolfram, <i>What's the Future for Pure Math Research in the Age of AI?</i>, 2026 · writings.stephenwolfram.com</div>


---
layout: section
---

# 11. Ethics and capture

---

# Three costs

<div class="grid grid-cols-3 gap-6 mt-8">
<div v-click class="card"><div class="text-4xl">🌍</div><h3>Ecology</h3>Carbon footprint, energy, resources to train and run the models</div>
<div v-click class="card"><div class="text-4xl">📚</div><h3>Knowledge</h3>AIs have sucked up the knowledge accumulated across the planet</div>
<div v-click class="card"><div class="text-4xl">🧲</div><h3>Process</h3>A few companies are now sucking up our research directions, reasoning and ongoing approaches</div>
</div>

<div v-click class="mt-8 text-center text-lg">
Risk: the whole <b>implicit</b> part of research (method, problem framing, intuition) infused into <b>proprietary</b> models, for the benefit of private actors.
</div>

---

# What humans still bring

<div class="text-3xl leading-loose mt-8">

<v-clicks>

- **Accountability**
- Long-term **goals and choices**
- **Relationships and trust**
- ~~Unwritten know-how~~ → <span style="color:#c53030">being captured as we speak</span>

</v-clicks>

</div>

---
layout: center
class: text-center
---

# Discussion

<div class="text-2xl mt-10 leading-loose">

What does "doing research" mean today?<br>
What future for juniors? for seniors?<br>
What do I **not** want to delegate?

</div>

---

<iframe src="https://www.youtube.com/embed/zONGVaONKe8?start=10&end=102" title="Video excerpt" width="100%" height="400" class="rounded shadow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Version for developers: https://www.youtube.com/watch?v=3TNpOD6bov8&t=2s

---

# Resources

<div style="font-size:.7em; line-height:1.5">

- Anthropic, *Claude-shaped science*: anthropic.com/research/claude-shaped-science
- Anthropic, *Yes, Claude can do nine loops*: anthropic.com/research/yes-claude-can-do-nine-loops
- METR, *Measuring AI ability to complete long tasks*: metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks
- ReplicationBench: arxiv.org/abs/2510.24591
- Hao et al.: arxiv.org/abs/2412.07727 · Shen & Tamkin: arxiv.org/abs/2601.20245
- Springer, *AI & Society*: link.springer.com/article/10.1007/s00146-025-02190-4
- Fields medalists' statement: mathandai.org
- S. Wolfram, *What's the Future for Pure Math Research in the Age of AI?*: writings.stephenwolfram.com
- Aschenbrenner, *Situational Awareness*: situational-awareness.ai
- Videos: youtube.com/watch?v=LKrwhjOI8Nc · dsBXYAwQieI · zONGVaONKe8 · (devs) 3TNpOD6bov8

</div>
