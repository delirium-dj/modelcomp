# Solar Pro 4 — findings by Big Pickle

- Source: Upstage AI (`solar-pro-4`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's closed commercial flagship (replacing Solar Pro 3 of April 2026) — a text-only "workhorse agent" play for enterprise document-heavy, long-context, and stable multi-step workflows at a fraction of frontier-model cost, tripling its predecessor's Intelligence Index score.
- **Provider / access:** Upstage first-party API and OpenRouter (`upstage/solar-pro4`); BYOK with Zero Data Retention (ZDR) enforcement for console keys. Closed/commercial (proprietary).
- **Release / knowledge:** Launched 2026-08-10/11 (announced via PR Newswire 2026-08-20); replaced Solar Pro 3. >370B tokens consumed on OpenRouter within the first week.
- **IDs:** `solar-pro-4` / `upstage/solar-pro4` (proprietary; no open weights)
- **Context window:** 524,288 tokens (524K); max output 131,072 (OpenRouter/ModelCap) or 256K (Artificial Analysis).
- **Modalities:** text input; text output (no vision, audio, or video).
- **Pricing (as of 2026-09-20):** OpenRouter list $0.09 in / $0.36 out per 1M ($0.018 cache read); first-party list $0.30/$1.20/$0.06; launch promo $0.03/$0.12 through 2026-09-10 (~90% off). Upstage positions ~90% lower cost per typical document workflow vs frontier models.
- **Architecture:** Undisclosed parameters/training details; reasoning model. ~43K output tokens per AA Index task (17% fewer than Solar Pro 3); 39-70 tokens/s output, first token ~2.1s.

### Raw benchmarks found

Agent / tool use (Artificial Analysis unless noted):

- Terminal-Bench v2.1: **57%** (up from 12% on Solar Pro 3); τ³-Banking: **23%** (from 9%).
- GDPval-AA v2: Elo **1277** (vs 498 on v3, human baseline 1000); GDPval-AA (AA): 33.6%.
- LMArena Agent leaderboard: **-15.5% (#46/46, last)**; Arena coding Elo **1449** (#144/397, default).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42** (Solar Pro 3: 14) — alongside Inkling (42), a point behind MiMo-V2.5-Pro (43).
- GPQA Diamond: **89.1%**; AIME 2026: **95.3%**; HLE: **29.2%** (#119/612); CritPt: **5.4%**; MMLU-Pro: **86.3%**; AA-Omniscience accuracy 18.9% / non-hallucination rate 75.6%.

Coding:

- Artificial Analysis Coding Index: **52.7**; SciCode: **44.6%**; SWE-bench Verified: **70.6%** and LiveCodeBench: **87.8%** (TPS launch coverage, not independently verified); Design Arena Elos ~1121-1207 across webapps/3D/code/data-viz/game/UI/website.

Long context:

- AA-LCR long-context comprehension: **71-74%** (2.3x over Solar Pro 3, which lost context mid-document); 524K window with no published lossless-context claim.

### Normalized scores (1–100)

- **Tool use: 40/100.** Huge agentic gains (Terminal-Bench 12%→57%, GDPval Elo 498→1277), but absolute levels are still low — τ³-Banking 23% and last-place LMArena Agent (-15.5%) show real-world agent reliability is a promise, not yet a leader.
- **Reasoning: 41/100.** AA Index 42 (3x v3) with strong GPQA Diamond 89.1% and AIME 2026 95.3%; HLE 29.2% and CritPt 5.4% reveal a genuine mid-tier ceiling on the hardest reasoning.
- **Context window: 50/100.** A 524K window with 131K output is session-friendly span, but AA-LCR 71% against that window (and no lossless claim) keeps it mid-pack rather than a long-context leader.
- **Multimodal: 26/100.** Strictly text-in / text-out with no vision, audio, or generation; AA-Omniscience accuracy (18.9%) confirms minimal omni capability.
- **Coding: 39/100.** AA Coding Index 52.7 and unreplicated SWE-bench Verified 70.6%/LiveCodeBench 87.8% read as solid workhorse coding, not specialist; SciCode 44.6% and no independent SWE leadership temper it.
- **Cost efficiency: 46/100.** Post-promo $0.09/$0.36 per 1M is cheap, but DeepSeek V4 Flash 0731 delivers a higher Index (52) at $0.14/$0.28, and first-party $0.30/$1.20 is mid-tier; modest 39-70 tok/s throughput eats into the savings.
- **Overall Score: 39/100.** Mean of the five quality dims (40+41+50+26+39)/5 = 39.2. A cheap, reliable document/agent workhorse from Upstage whose text-only scope and mid-tier reasoning keep it a solid niche player rather than a generalist.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (artificialanalysis.ai article, prnewswire.com, openrouter.ai, modelcap.ai, benchleader.com, thenewstack.io, tpsreport.news); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.