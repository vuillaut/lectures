<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

type Status = 'est' | 'ind' | 'pre' | 'dis'
const labels: Record<Status, string> = {
  est: 'ESTABLISHED',
  ind: 'INDUSTRY ANNOUNCEMENT',
  pre: 'PREPRINT',
  dis: 'DISPUTED',
}

const events = [
  { d: 'Oct 2022', t: 'AlphaTensor', s: 'est', x: 'DeepMind discovers new matrix multiplication algorithms, published in Nature.' },
  { d: 'Nov 2022', t: 'ChatGPT released', s: 'est', x: 'OpenAI opens a chat interface on GPT-3.5 to the general public. Start of mass chatbot usage.' },
  { d: 'Jul 2024', t: 'AlphaProof', s: 'est', x: 'Silver medal at the Math Olympiad, but statements were translated into Lean by humans and computations took several days.' },
  { d: 'Jul 2025', t: 'Olympiad gold', s: 'est', x: 'Gemini Deep Think (officially graded by the IMO) and OpenAI: gold medal in natural language, without tools.' },
  { d: 'Oct 2025', t: 'Erdős incident', s: 'dis', x: 'GPT-5 supposedly "solved" 10 Erdős problems. In fact: existing results that the website did not list.' },
  { d: 'Mar 2026', t: 'Vibe physics', s: 'pre', x: 'Schwartz (Harvard): a QCD paper in 2 weeks with Claude under supervision. Results tuned by the agent, documented by the author.' },
  { d: 'May 2026', t: 'Unit distance (Erdős)', s: 'est', x: 'Disproof of a conjecture open since 1946, verified and put in context by external mathematicians.' },
  { d: 'Aug 2026', t: 'Zeros of ζ', s: 'ind', x: 'Fraction of zeros on the critical line: 41.7% → more than 2/3. Verified by Anthropic mathematicians, then an independent new proof (Lamzouri). Not an advance toward Riemann in the strong sense.' },
  { d: 'Sep 4, 2026', t: 'Fermat in Lean', s: 'est', x: 'Formalization of a known proof (Wiles, 1995) by agents. Technically established, misleadingly titled.' },
  { d: 'Sep 8, 2026', t: 'Navier–Stokes', s: 'dis', x: 'Finite-time blow-up with smooth forcing (~10,000 agents, ~88 h, >$10M). Priority and formulation disputed.' },
  { d: 'Sep 11, 2026', t: '25 Fields medalists', s: 'dis', x: 'Statement "A Severe Misalignment of AI in Mathematics".' },
  { d: 'Sep 25, 2026', t: 'Nine loops', s: 'est', x: 'N=4 SYM amplitude at 9 loops (human record: 8), verified by L. Dixon. Known methods, more compute.' },
  { d: 'Oct 6, 2026', t: 'Mathapocalypse', s: 'dis', x: '722 manuscripts / 372 families of results, unreviewed; 162 with their main result checked in Lean. 3 withdrawn the next day, 14 revised.' },
] as { d: string; t: string; s: Status; x: string }[]

const sel = ref(0)
const cur = computed(() => events[sel.value])

// Flèches : parcourir la timeline. Aux extrémités, la touche rend la main à Slidev (slide précédente/suivante).
function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowRight' && sel.value < events.length - 1) {
    sel.value++
  } else if (e.key === 'ArrowLeft' && sel.value > 0) {
    sel.value--
  } else {
    return
  }
  e.preventDefault()
  e.stopImmediatePropagation()
}

onMounted(() => window.addEventListener('keydown', onKey, { capture: true }))
onUnmounted(() => window.removeEventListener('keydown', onKey, { capture: true }))
</script>

<template>
  <div class="tl">
    <div class="rail">
      <div
        v-for="(e, i) in events"
        :key="i"
        class="node"
        :class="[e.s, { on: i === sel }]"
        @click="sel = i"
      >
        <div class="dot" />
        <div class="lab">{{ e.d }}</div>
        <div class="ttl">{{ e.t }}</div>
      </div>
    </div>
    <div class="detail" :class="cur.s">
      <span class="badge" :class="cur.s">{{ labels[cur.s] }}</span>
      <b>{{ cur.d }} · {{ cur.t }}</b>
      <p>{{ cur.x }}</p>
    </div>
    <div class="legend">
      <span v-for="(l, k) in labels" :key="k"><i :class="k" />{{ l }}</span>
    </div>
  </div>
</template>

<style scoped>
.tl { --est:#2f855a; --ind:#b7791f; --pre:#2b6cb0; --dis:#c53030; }
.rail { display:flex; align-items:flex-start; position:relative; margin-top:1.2rem; }
.rail::before { content:''; position:absolute; left:0; right:0; top:0.55rem; height:3px; background:rgba(128,128,128,.4); }
.node { flex:1; cursor:pointer; text-align:center; position:relative; min-width:0; }
.dot { width:1.1rem; height:1.1rem; border-radius:50%; margin:0 auto; border:3px solid #fff; background:currentColor; transition:transform .15s; }
.node.on .dot { transform:scale(1.7); }
.node.est { color:var(--est) } .node.ind { color:var(--ind) } .node.pre { color:var(--pre) } .node.dis { color:var(--dis) }
.lab { font-size:.5rem; opacity:.7; margin-top:.3rem; color:inherit; font-weight:600; }
.ttl { font-size:.55rem; line-height:1.1; margin-top:.15rem; color:#333; padding:0 1px; }
.node:not(.on) .ttl { opacity:.55; }
.node.on .ttl { font-weight:700; }
.detail { margin-top:1.4rem; padding:.8rem 1.1rem; border-left:6px solid; border-radius:.4rem; background:rgba(128,128,128,.08); min-height:5.2rem; }
.detail.est { border-color:var(--est) } .detail.ind { border-color:var(--ind) } .detail.pre { border-color:var(--pre) } .detail.dis { border-color:var(--dis) }
.detail p { margin:.4rem 0 0; font-size:.95rem; }
.badge { display:inline-block; color:#fff; font-size:.6rem; font-weight:700; padding:.05rem .45rem; border-radius:.3rem; margin-right:.6rem; }
.badge.est,.legend i.est { background:var(--est) } .badge.ind,.legend i.ind { background:var(--ind) }
.badge.pre,.legend i.pre { background:var(--pre) } .badge.dis,.legend i.dis { background:var(--dis) }
.legend { display:flex; gap:1.2rem; margin-top:.8rem; font-size:.6rem; opacity:.8; }
.legend i { display:inline-block; width:.7rem; height:.7rem; border-radius:50%; margin-right:.3rem; vertical-align:middle; }
</style>
