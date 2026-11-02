# Gemini 3.7 Flash — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft sat on a mostly Google-run table with **GPQA blank** and only the AA Index (56) as neutral cross-check. The 2026-11-02 pass finds AA has **deprecated this id** (superseded by Gemini 3.8 Flash — "consider it instead"; composite Index/Speed/Cost/Verbosity now N/A), so the launch-vintage **56 is a pre-v5.0, non-comparable figure**, while AA's *individual* eval cells (via BenchLM) still populate. Independent data **raises raw reasoning**: **GPQA Diamond 94.5% (AA) / 93.9% (Vals)** — essentially at the Pro tier (Gemini 3.1 Pro 94.3%) — and **ARC-AGI-2 84.6% (ARC Prize)**; **AA-MMMU-Pro 85.5%** closes the multimodal cap, and **SWE-bench 80.8% (Vals)** + **AA Coding Index 76.1%** corroborate the coding story. It **trims agentic optimism**: independent **AA Agentic 36.4%**, **OSWorld 2.0 47.9% (vendor)**, **Terminal-Bench 3.0 14.9%**, and no current-gen Terminal-Bench 4.0 row, plus **Vals TB 2.1 77.5% vs the card's 85.8%**. Two honesty/relevance caps: **AA-Omniscience hallucination 64.5%** and deprecation (this tier is superseded). **Provenance guard:** the draft's HLE-Verified 53.6% and LABBench2 82.1% trace to the **Gemini 3.8 Flash model card** on BenchLM — a **sibling leak**, quarantined; the independent **AA-HLE 47.9%** is used instead. Net dims move (Reasoning 88→90, Multimodal 91→92, Coding 89→90 up; Tool 89→88 down) but the **Overall holds at 91** (mean 91.2).

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's fast, low-cost Flash-tier workhorse for coding and agentic workflows — the most capable Flash release at its launch, an algorithmic refinement of 3.6 Flash (reasoning-core changes, not a new base model) with its biggest gains in coding, agents and document comprehension. Superseded by 3.8 Flash three weeks later.
- **Provider / access:** Gemini API (`gemini-3.7-flash`), Google AI Studio, Vertex AI, Gemini CLI. OpenRouter `google/gemini-3.7-flash`.
- **Release / knowledge:** Released 2026-08-13 (three weeks after 3.6 Flash); knowledge cutoff not published.
- **IDs:** `google/gemini-3.7-flash`.
- **Context window:** 1,048,576 (1M) tokens input; 65,536 (64K) tokens output (Google model documentation).
- **Modalities:** text + image + video + audio + PDF in → text out; reasoning yes (Low/medium/high thinking levels); tool calls yes (function calling, code execution, computer use preview, Search/Maps grounding, structured outputs); no image/audio generation.
- **Pricing (as of 2026-10-20):** $0.75 / 1M input, $3.75 / 1M output introductory through 2026-12-31, then $1.50 / $7.50 from 2027-01-01; caching supported.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-bench 2.1: **85.8%** (Google model card; leads Claude Sonnet 5 80.4%, 3.6 Flash 78.0%; behind GPT-5.6 Terra 87.4%)
- AutomationBench: **30.4%** (leads tier — Sonnet 5 10.7%, GPT-5.6 Terra 23.6%; nearly double 3.6 Flash's 17.0%)
- GDP.pdf (expert PDF comprehension): **34.0%** (leads tier; Sonnet 5 28.0%, Terra 24.7%)
- AA Agentic Index (independent): **36.4%** — well below the vendor's tier-leading framing.
- Terminal-Bench 3.0: **14.9%** (card) vs Terminal-Bench 2.1 **85.8%** (card) / **77.5%** (Vals AI, independent) — a harness-generation cliff; the 4.0 row (the v5.0 basket's terminal eval) is unpublished for this deprecated id.
- OSWorld 2.0 (computer use): **47.9%** (card) — mediocre; GDPval-AA **1525** Elo (card) / **44.6%** (AA normalized).

Reasoning / knowledge:

- HLE-Verified: **53.6%** (leads tier — Sonnet 5 31.0%, GPT-5.6 Terra 51.1%; up from 3.6 Flash 51.2%). **Provenance flag (2026-11-02):** BenchLM attributes this cell to the **Gemini 3.8 Flash model card**, not 3.7 — treated as a **sibling leak** and not relied on; the independent **AA-HLE 47.9%** is used instead.
- AA-HLE (Artificial Analysis, independent): **47.9%**
- ARC-AGI-1: **95.50%** / ARC-AGI-2: **84.6%** (ARC Prize, independent Semi-Private) — elite fluid reasoning.
- Artificial Analysis Intelligence Index: **56** at high thinking (launch-vintage, pre-v5.0 — **not comparable**; AA has since **deprecated** the id with composite N/A). BenchLM separately carries a 39.1 AI-Index cell of uncertain vintage; neither is used to drive the score given deprecation.
- GPQA Diamond: **94.5% (Artificial Analysis) / 93.9% (Vals AI)** — draft had "no verified public score found"; gap **closed**, near the Pro tier (Gemini 3.1 Pro 94.3%).
- AA-Omniscience: Accuracy **55.3%**, **Hallucination rate 64.5%** (independent) — the honesty cap on reasoning.
- FrontierMath v2: **71.6%** (Tiers 1–3) / **36.6%** (Tier 4) (Epoch AI, independent).

Coding:

- DeepSWE v1.1 (long-horizon SWE): **65.3%** (leads Sonnet 5 53.8%, 3.6 Flash 48.6%; behind GPT-5.6 Terra 69.6%)
- SWE-bench: **80.8%** (Vals AI, independent) — closes a coding gap the draft left on vendor data.
- LiveCodeBench: **88.7%** (Vals AI, independent); AA Coding Index **76.1%**, AA-SciCode **57.2%** (independent).
- FrontierSWE v2: **20.3%** (Proximal, independent) — weak on current-gen long-horizon repo work; the coding cap.
- FrontierCode 1.1 (Main): **43.6%** (leads tier — Sonnet 5 42.7%, Terra 41.3%; up from 3.6 Flash 34.4%)
- Code Arena (Elo, web development): **1588** (leads tier — Sonnet 5 1541, Terra 1523)
- Terminal-bench 2.1: **85.8%** (see tool use)

Multimodal:

- LVBench (long video understanding): **85.4%** (leads tier — Sonnet 5 68.5%, Terra 78.9%)
- AA-MMMU-Pro (visual reasoning, independent): **85.5%** — closes the draft's "no independent MMMU-Pro" cap.
- CharXiv Reasoning (no tools, chart synthesis): **84.5%** (a hair behind 3.6 Flash 85.2% and Terra 85.9%); CharXiv with tools 88.7% (card). ParseBench **70.66%** (LlamaIndex, independent).

Long context:

- GDM-MRCR v2 (128k, 8-needle): **97.0%** (leads tier — Terra 93.5%, 3.6 Flash 91.8%, Sonnet 5 81.5%).
- AA-LCR (long-context reasoning, independent): **81.7%** — corroborates the vendor MRCR from a neutral instrument.

> Provenance: all percentages except the AA Intelligence Index are Google-run on Google's harness (model card, Aug 2026), not independently audited; the AA Index (56) is the neutral cross-check.

### Normalized scores (1–100)

- **Tool use: 88/100.** *(89 → 88 — the vendor-led agentic story is trimmed by independent measurement.)* Terminal-Bench 2.1 85.8% and AutomationBench 30.4% lead its price tier **on Google's own harness**, but independent signals are softer: **AA Agentic 36.4%**, **Vals TB 2.1 77.5%** (below the card's 85.8%), **OSWorld 2.0 47.9%**, **TB 3.0 14.9%**, and no current-gen TB 4.0. Genuine full-stack tooling (function calling, code exec, computer-use preview) keeps it high; it is no longer scored as if the vendor table were neutral.
- **Reasoning: 90/100.** *(88 → 90 — the draft's "absent GPQA" cap is removed by independent data.)* **GPQA Diamond 94.5% (AA) / 93.9% (Vals)** is essentially the Pro tier, and **ARC-AGI-2 84.6% (ARC Prize)** + **FrontierMath v2 Tier-4 36.6% (Epoch)** are elite for a Flash-class model. Held below the frontier Pro by the honesty profile (**AA-Omniscience hallucination 64.5%**, accuracy 55.3%) and a moderate **AA-HLE 47.9%**.
- **Context window: 96/100.** 1M-token input with best-in-tier GDM-MRCR v2 97.0% at 128k; discounted for the 64K output cap.
- **Multimodal: 92/100.** *(91 → 92 — independent MMMU-Pro closes the draft's cap.)* LVBench 85.4% (long video), **AA-MMMU-Pro 85.5% (independent)**, CharXiv 84.5% (88.7% w/ tools), and native text/image/video/audio/PDF input — genuinely broad multimodality; capped by no image/audio **generation** and ParseBench 70.66% on dense documents.
- **Coding: 90/100.** *(89 → 90 — independent corroboration removes the vendor-only discount.)* **SWE-bench 80.8% (Vals)**, **LiveCodeBench 88.7% (Vals)** and **AA Coding Index 76.1%** back the vendor DeepSWE 65.3% / FrontierCode 43.6% / Code Arena 1588. Capped by **FrontierSWE v2 20.3%** — weak on the hardest current-gen long-horizon repo work, where pricier frontier models lead.
- **Cost efficiency: 90/100.** *(93 → 90.)* $0.75/$3.75 introductory is genuinely elite value (AA confirms "very competitive": median $2/$10), but the intro price **doubles on 2027-01-01**, and the id is now **deprecated in favour of 3.8 Flash**, so long-horizon value assumes migration. Not counted in the Overall mean.
- **Overall Score: 91/100.** *(unchanged at 91 — the reasons are now independently established rather than vendor-asserted.)* Mean of Tool 88 + Reasoning 90 + Context 96 + Multimodal 92 + Coding 90 = 456 / 5 = 91.2 → 91. The refresh reshapes the profile: **raw reasoning and multimodal are stronger than the vendor table implied** (GPQA 94.5%, ARC-AGI-2 84.6%, MMMU-Pro 85.5%), while **agentic tool use is softer** once neutral instruments replace the Google-run cells. Two standing caveats: **Omniscience hallucination 64.5%** (do not trust unverified claims) and **AA deprecation** (superseded by 3.8 Flash — this tier is not current-gen). Best fit: high-volume, cost-sensitive coding/agent/document and multimodal (video/PDF) parsing where per-token price dominates; the hardest fully-autonomous agentic work still favors pricier frontier models.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20, re-researched 2026-11-02
- Method: public internet research (Emergent's Gemini 3.7 Flash guide compiling Google's model-card benchmark table and specs; Artificial Analysis Intelligence Index via the same source); the 2026-11-02 pass adds **Artificial Analysis** (`gemini-3-7-flash`, High — now **deprecated**, composite N/A) and the **BenchLM.ai** aggregator (updated 2026-10-29) as the route to independent cells from **Vals AI**, **ARC Prize**, **Epoch AI**, **Cognition/Proximal**, **LlamaIndex ParseBench** and **AA's per-evaluation leaderboards**. Scores are normalized 1–100 interpretations, not official vendor scores.
- **Conflict handling (explicit, not averaged):** (1) *GPQA* — draft "none found" vs AA 94.5 / Vals 93.9 → **gap closed on independent data**, drives Reasoning 88→90. (2) *Agentic* — vendor TB 2.1 85.8 / AutomationBench tier-lead vs independent AA Agentic 36.4, Vals TB 2.1 77.5, OSWorld 47.9 → **independent governs**, Tool 89→88. (3) *HLE-Verified 53.6 / LABBench2 82.1* — sourced to the **3.8 Flash card** on BenchLM → **sibling leak, quarantined**; AA-HLE 47.9 used. (4) *AA Index* 56 (pre-v5 launch) vs deprecated composite N/A vs BenchLM's 39.1 (uncertain vintage) → non-comparable; none used to rescore. (5) *Cost* — list price vs imminent 2027-01-01 doubling + deprecation → 93→90.
- **Guards applied:** (a) **sibling quarantine** — no Gemini 3.8 / 3.6 / 3.5 / 3.1 / 4 Argon / 4 Carbon figure used as 3.7 evidence (the 3.8-card HLE/LABBench rows are excluded); (b) **harness discipline** — Terminal-Bench 2.1 vs 3.0 vs (missing) 4.0 kept separate; CharXiv w/ and w/o tools separated; (c) **deprecation noted** — AA flags this id superseded by 3.8 Flash; per-token cells persist, composite does not; (d) **Cost efficiency and Speed excluded from the Overall mean** (mean of the five quality dims only); (e) BenchLM's partial-coverage caveat (47 of 724, "overall score is conservative") recorded, not treated as verdict; (f) never read peer raters' findings files (zero-influence). Remaining gaps: a current-gen Terminal-Bench 4.0 / FrontierCode 2.0 row (unpublished for this deprecated id).
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
