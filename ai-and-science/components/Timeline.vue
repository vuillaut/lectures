<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

type Status = 'est' | 'ind' | 'pre' | 'dis'
const labels: Record<Status, string> = {
  est: 'ÉTABLI',
  ind: 'ANNONCE INDUSTRIELLE',
  pre: 'PREPRINT',
  dis: 'CONTESTÉ',
}

const events = [
  { d: 'Oct. 2022', t: 'AlphaTensor', s: 'est', x: 'DeepMind découvre de nouveaux algorithmes de multiplication de matrices, publiés dans Nature.' },
  { d: 'Nov. 2022', t: 'Sortie de ChatGPT', s: 'est', x: 'OpenAI ouvre au grand public une interface de conversation sur GPT-3.5. Début de l’usage massif des chatbots.' },
  { d: 'Juil. 2024', t: 'AlphaProof', s: 'est', x: 'Médaille d’argent aux Olympiades de maths, mais énoncés traduits en Lean par des humains, calculs de plusieurs jours.' },
  { d: 'Juil. 2025', t: 'Or aux Olympiades', s: 'est', x: 'Gemini Deep Think (notation officielle IMO) et OpenAI : médaille d’or en langage naturel, sans outil.' },
  { d: 'Oct. 2025', t: 'Incident Erdős', s: 'dis', x: 'GPT-5 aurait « résolu » 10 problèmes d’Erdős. En fait : des résultats existants que le site ne répertoriait pas.' },
  { d: 'Mars 2026', t: 'Vibe physics', s: 'pre', x: 'Schwartz (Harvard) : un article de QCD en 2 semaines avec Claude, sous supervision. Résultats ajustés par l’agent, documentés par l’auteur.' },
  { d: 'Mai 2026', t: 'Distance unité (Erdős)', s: 'est', x: 'Réfutation d’une conjecture ouverte depuis 1946, vérifiée et contextualisée par des mathématiciens externes.' },
  { d: 'Août 2026', t: 'Zéros de ζ', s: 'ind', x: 'Fraction de zéros sur la droite critique : 41,7 % → plus des 2/3. Vérifié par des mathématiciens d’Anthropic, puis nouvelle preuve indépendante (Lamzouri). Ce n’est pas une avancée vers Riemann au sens fort.' },
  { d: '4 sept. 2026', t: 'Fermat en Lean', s: 'est', x: 'Formalisation d’une preuve connue (Wiles, 1995) par des agents. Établi techniquement, mal titré.' },
  { d: '8 sept. 2026', t: 'Navier–Stokes', s: 'dis', x: 'Explosion en temps fini avec forçage lisse (~10 000 agents, ~88 h, >10M$). Priorité et formulation contestées.' },
  { d: '11 sept. 2026', t: '25 médaillés Fields', s: 'dis', x: 'Déclaration « A Severe Misalignment of AI in Mathematics ».' },
  { d: '25 sept. 2026', t: 'Neuf boucles', s: 'est', x: 'Amplitude N=4 SYM à 9 boucles (record humain : 8), vérifiée par L. Dixon. Méthodes connues, plus de calcul.' },
  { d: '6 oct. 2026', t: 'Mathapocalypse', s: 'dis', x: '722 manuscrits / 372 familles de résultats, non relus ; 162 avec le résultat principal vérifié en Lean. 3 retirés le lendemain, 14 révisés.' },
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
