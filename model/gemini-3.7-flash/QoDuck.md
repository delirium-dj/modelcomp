# Gemini 3.7 Flash — findings by QoDuck

- Source: Google DeepMind/Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's cost-optimized "workhorse" Flash model, released 2026-08-13 (GA). Improves ~4 Intelligence Index points over Gemini 3.6 Flash across software engineering, knowledge work, and web development. Powers Gemini Spark (Google AI Pro/Ultra, 160+ countries). Now **deprecated** — the Gemini API automatically routes `gemini-3.7-flash` to `gemini-3.8-flash` (which is based on 3.7 Flash, with better coding/agentic scores at the same price/context).
- **Provider / access:** Google Gemini API / AI Studio `gemini-3.7-flash` (auto-routed to `gemini-3.8-flash`); Vertex AI / Gemini Enterprise Agent Platform `gemini-3.7-flash`; OpenRouter `google/gemini-3.7-flash`. Retirement date 2027-01-28 (Google Cloud).
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff **March 2026** (official model card).
- **IDs:** `gemini-3.7-flash` (deprecated alias → `gemini-3.8-flash`).
- **Context window:** **1,048,576 input tokens** (~1M); **65,536 output tokens** (64K) — verified from official Gemini API docs.
- **Modalities:** **Text, image, video, audio, and PDF in → text out** (native multimodal input; official docs). Thinking/reasoning model with low / medium / high effort levels. Tool calling supported. No non-text output.
- **Pricing (as of 2026-11-10):** Introductory **$0.75 / 1M input, $3.75 / 1M output** (50% discount, through 2026-12-31); doubles to **$1.50 / $7.50** on 2027-01-01 (official model card). Same price as Gemini 3.8 Flash on OpenRouter.
- **Architecture:** Proprietary, closed weights (Gemini Flash family).

### Raw benchmarks found

> The Artificial Analysis Intelligence Index is independent; most other rows below are Google-reported (model card / developer blog, surfaced via emergent.sh's launch table) and reflect Google's harness. emergent.sh explicitly calls its figures a "launch baseline rather than independent confirmation," and notes 9 of its 10 table rows are vendor-reported. Effort level is noted where known.

Agent / tool use:

- Terminal-Bench 2.1 (**agentic**, Google model card via emergent): **85.8%** (Gemini 3.6 Flash 78.0%, Claude Sonnet 5 80.4%, GPT-5.6 Terra 87.4%). Conflicting: Google's developer guide (via intuitionlabs) cites **81.6%** for 3.7 Flash (and 90.8% for 3.8 Flash) — different harness/vintage.
- AutomationBench (**agentic**, Google): **30.4%** (3.6 Flash 17.0%, Sonnet 5 10.7%, Terra 23.6%) — a standout.
- GDP.pdf (**document/agentic**, Google): **34.0%** (3.6 Flash 22.0%, Sonnet 5 28.0%, Terra 24.7%).
- FrontierCode 1.1 Main (**agentic coding**, Google): **43.6%** (3.6 Flash 34.4%, Sonnet 5 42.7%, Terra 41.3%).
- OSWorld-2.0 (**computer use**, Google): **47.9%** (Terra 50.2%). Terminal-Bench 3.0: **14.9%** (Terra 20.8%). Agent's Last Exam: **26.3%** (Sonnet 5 33.3%).
- Artificial Analysis Coding Index (**independent**, Low effort): **71.0**.
- GDPval-AA Elo, Tau2/Tau3-Banking, Toolathon, MCP-Atlas, Claw-Eval: no verified public score found for this exact ID.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (**independent**, high effort): **56** — up 4 pts from Gemini 3.6 Flash (52), 1 ahead of Claude Sonnet 5 (55), 1 behind GPT-5.6 Terra (57). Reached the Intelligence-vs-Time-per-Task Pareto frontier (AA). The "high" label is the top thinking config, not the default.
- GPQA Diamond (**reasoning**, AA/OpenRouter, Low effort): **90.1%**.
- HLE-Verified (**Humanity's Last Exam**, Google via emergent): **53.6%** (3.6 Flash 51.2%, Sonnet 5 31.0%, Terra 51.1%) — strong.
- AIME 2026, FrontierMath, CritPt, ARC-AGI-2/3, LCR/MLCR, AA-Omniscience: no verified public score found for this exact ID in the sources reviewed.

Coding:

- DeepSWE v1.1 (**coding**, Google): **65.3%** — up 16.7 pts from 3.6 Flash (48.6%); below GPT-5.6 Terra (69.6%), above Sonnet 5 (53.8%).
- Code Arena (**coding Elo**, Google): **1588** (3.6 Flash 1538, Sonnet 5 1541, Terra 1523) — highest in the emergent cohort.
- FrontierCode 1.1 Main: **43.6%** (see Agent/tool use). Terminal-Bench 2.1: **85.8%** (or 81.6% dev-guide).
- SWE-bench Verified: no verified public score found — vals.ai notes the benchmark has saturated and stopped running it on new releases; Google headlines DeepSWE instead. (The older Gemini 3 Flash scored 78%.)
- LiveCodeBench, SciCode/AA-SciCode, Vibe Code Bench: no verified public score found for this exact ID.

Long context:

- GDM-MRCR v2 @ 128K (**retrieval**, Google): **97.0%** (3.6 Flash 91.8%, Sonnet 5 81.5%, Terra 93.5%). Native window **1,048,576 tokens**. No ≥98% retrieval figure at 512K+ published → 100/100 ceiling not demonstrated.

Multimodal:

- Native **text/image/video/audio/PDF input → text output** (official docs). No MMMU/Video-MMMU score confirmed for this exact ID in the sources reviewed; modality breadth is documented rather than benchmark-quantified.

### Conflicting-results notes

- **Terminal-Bench 2.1:** **85.8%** (model card via emergent) vs **81.6%** (developer guide via intuitionlabs) — both Google-reported, different harness/vintage. I cite 85.8% as the model-card figure and flag the 81.6% alternative.
- **Vendor vs independent:** only the AA Intelligence Index (56, high) and AA Coding Index (71.0, low) / GPQA (90.1%, low) are independent; the rest of the emergent table is Google-reported on Google's harness. The Index "high" effort is not the default config, so typical-use quality may be lower.
- **Mixed vs GPT-5.6 Terra:** 3.7 Flash wins FrontierCode, Code Arena, HLE-Verified, MRCR, GDP.pdf, AutomationBench; loses DeepSWE, TB2.1, TB3.0, OSWorld-2.0, and the AA Index (by 1 pt). Gains over 3.6 Flash are uneven (largest: DeepSWE +16.7).
- **Deprecated / legacy:** `gemini-3.7-flash` auto-routes to `gemini-3.8-flash` (based on 3.7, better coding/agentic, same $0.75/$3.75 price and 1M/64K context). Scores here describe the 3.7 Flash launch model, not the 3.8 successor.
- **Pricing cliff:** intro $0.75/$3.75 ends 2026-12-31, doubling to $1.50/$7.50 on 2027-01-01 — cost efficiency will drop materially after the promo.
- **SWE-bench Verified absent:** vals.ai stopped running it (saturation); no headline 3.7 Flash number, so DeepSWE/Code Arena/FrontierCode carry the coding evidence.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 86/100.** Strong AutomationBench 30.4%, GDP.pdf 34.0%, FrontierCode Main 43.6%, and TB2.1 85.8% evidence capable agentic tool use; but TB2.1 sits just under the ~88% anchor, OSWorld-2.0 47.9% / Agent's Last Exam 26.3% / TB3.0 14.9% are modest, and no GDPval-Elo/Tau3 is published — keeping it below the 90+ frontier band.
- **Reasoning: 87/100.** GPQA Diamond 90.1% (hits the 90% anchor) and HLE-Verified 53.6% (well above the 40% anchor) are strong for a Flash model; the AA Intelligence Index 56 (high effort) sits under the 60+ anchor and is the top thinking config rather than default, capping it below 90.
- **Context window: 95/100.** Native 1,048,576 tokens (≥1M tier = 95–100); GDM-MRCR v2 97.0% at 128K shows strong retrieval, but no ≥98% figure at 512K+ is published, so 100 is not awarded.
- **Multimodal: 85/100.** Native text/image/video/audio/PDF input → text output (rich multimodal understanding, no non-text output). Top of the +video/PDF/audio-in 75–90 band.
- **Coding: 87/100.** TB2.1 85.8% (hits the 85% anchor), Code Arena Elo 1588 and FrontierCode Main 43.6% (both cohort-leading) evidence strong coding/web-dev; DeepSWE 65.3% sits under the 74% anchor and no SWE-bench Verified/SciCode is published, capping it below 90.
- **Cost efficiency: 90/100.** Current intro $0.75 in / $3.75 out per 1M is cheaper than the ~$1.25/$4.25≈88 anchor; note it doubles to $1.50/$7.50 on 2027-01-01 (which would fall to ~80).
- **Overall Score: 88.0/100.** Half-up mean of (86 + 87 + 95 + 85 + 87) / 5 = 440 / 5 = 88.0. Best fit: high-volume multimodal (image/video/audio/PDF) and long-context knowledge-work at Flash-tier cost; choose it for cheap broadly-multimodal agents, but note it is deprecated (auto-routes to 3.8 Flash) and trails frontier flagships on raw reasoning/coding depth.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official Google DeepMind model card + Gemini API docs + launch blog (authoritative specs/modalities/pricing), cross-checked against independent Artificial Analysis (Intelligence Index, Coding Index, GPQA) and emergent.sh / OpenRouter / intuitionlabs benchmark tables. 5 successful independent web searches. Scores are normalized 1–100 interpretations, not official vendor scores; Google-reported vs independent measurements and thinking-effort levels are distinguished throughout.
- Reference URLs:
  - [Google DeepMind — Gemini 3.7 Flash Model Card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [Google — Introducing Gemini 3.7 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
  - [Gemini API docs — Gemini 3.7 Flash (specs, modalities, token limits)](https://aistudio.google.com/docs/models/gemini-3.7-flash)
  - [Artificial Analysis — Gemini 3.7 Flash (medium)](https://artificialanalysis.ai/models/gemini-3-7-flash-medium)
  - [Emergent — Gemini 3.7 Flash benchmarks (coding, reasoning, price)](https://emergent.sh/learn/gemini-3-7-flash-benchmarks)
  - [OpenRouter — Gemini 3.7 Flash pricing & benchmarks](https://openrouter.ai/google/gemini-3.7-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.