# Grok 4.1 — findings by Iceman

- Source: xAI/Grok 4.1
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI’s Grok 4.1 is a consumer chat/reasoning model release focused on improved usability, personality, emotional intelligence, creative writing, and reduced hallucinations, available in Thinking and non-thinking modes.
- **Provider / access:** xAI consumer surfaces (grok.com, X, iOS, Android apps) in Auto mode / model picker. Local metadata states no public API route and never on OpenCode Zen (`noFreeId`).
- **Release / knowledge:** Announced November 17, 2025 (xAI news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `grok-4.1` (product/model name; consumer-facing variants include Thinking/non-thinking modes per announcement).
- **Context window:** Not publicly documented by xAI in reviewed sources; local metadata cites BenchLM claim of 1,000,000 (unverified by xAI docs).
- **Modalities:** Text in/out in core chat; image input available via consumer app contexts per local metadata. Multimodal specs not fully documented in reviewed announcement.
- **Pricing (as of 2026-11-10):** Consumer Grok subscription access (no public API price per local metadata/reviewed sources).
- **Architecture:** Proprietary xAI model; architecture/parameter count not publicly disclosed. Post-trained with large-scale RL including reward modeling for style/personality/helpfulness/alignment (xAI announcement).

### Raw benchmarks found

> Verified figures below are from xAI’s “Grok 4.1” announcement unless noted.

Agent / tool use:

- Native tool/search capabilities not detailed as standardized benchmark numerics in announcement; focus was on chat usability/personality/alignment.
- Terminal-Bench 2.1: **no verified public score found**
- Tau2-Bench / Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- LMArena Text Arena (blind human preference, overall): Grok 4.1 Thinking (**code name `quasarflux`**) ranked **#1 with 1483 Elo**; Grok 4.1 non-thinking (**`tensor`**) ranked **#2 with 1465 Elo** (31-point margin over highest non-xAI model stated). Grok 4 previously ranked #33 (per announcement).
- EQ-Bench3 (emotional intelligence): evaluated and reported as improved (Elo/rubric charts shown; exact numeric values not clearly extractable from announcement text).
- Creative Writing v3: evaluated and reported as improved (Elo/rubric charts shown; exact numeric values not clearly extractable from announcement text).
- Silent rollout blind pairwise preference: Grok 4.1 preferred **64.78%** of the time vs previous production model.
- Hallucination reduction: significant reductions reported on sampled production info-seeking prompts and FActScore (charts shown; exact numeric values not clearly extractable from announcement text).
- GPQA Diamond / HLE / AIME / AA Index: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Context window not officially documented in reviewed sources (local metadata claim unverified).

Multimodal:

- Consumer app image input noted in metadata; no multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from limited verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are conservative due to limited standardized benchmark disclosure (LMArena/EQ-Bench are preference/behavioral evaluations rather than the template’s core technical benchmarks).

- **Tool use: 72/100.** Consumer chat focus with some tool/search capability implied in Grok products, but no verified standardized agent/tool benchmark numerics were extracted for this exact release.
- **Reasoning: 84/100.** Strong human-preference and conversational reasoning signals (LMArena Text Arena #1 Thinking 1483 Elo / #2 non-thinking 1465 Elo, 64.78% preference in silent rollout) suggest high general capability, but canonical technical reasoning benchmarks (GPQA/HLE/AIME) were not extracted.
- **Context window: 70/100.** No officially documented context window in reviewed sources; scored conservatively.
- **Multimodal: 70/100.** Limited verified multimodal evidence in reviewed sources (consumer image input noted in metadata) with no multimodal benchmark numerics.
- **Coding: 72/100.** No verified coding benchmark numerics extracted for this exact consumer release; scored conservatively.
- **Cost efficiency: 75/100.** Available via consumer subscription surfaces (no public API pricing); value depends on subscription, but not directly comparable to per-token API models.
- **Overall Score: 74/100.** Mean of the five non-cost dims (72, 84, 70, 70, 72) = 73.6 → 74. Best fit historically as a high-preference conversational/reasoning assistant (Thinking/non-thinking) rather than a documented API/tool/coding specialist; evidence is limited for standardized technical benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to xAI announcement; scores are conservative normalized 1–100 interpretations from verified/reported figures (including LMArena Elo/preference results), not official vendor scores.
- Reference URLs:
  - [Grok 4.1 announcement (xAI)](https://x.ai/news/grok-4-1)
  - Local repository metadata consulted: `model/grok-4.1/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
