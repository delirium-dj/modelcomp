# Claude Fable 5.2 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-fable-5-2`), launched 2026-11-09
- Date: 2026-11-10 (UTC) — deep research pass (6 successful independent web searches + 3 primary-source fetches: the Anthropic launch post, BenchLM's model page and llm-stats, plus the vendor System Card benchmark tables)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2 (frontier tier; the same underlying model as Claude Mythos 5.2, with cybersecurity and biology safeguards added so it can ship to all users — Anthropic launch post).
- **Short description:** Anthropic's highest-capability public model, the Mythos-class successor to Fable 5.1, optimized for long-horizon agentic engineering, advanced codebase work and expert reasoning. It is a variant of the same base model as Claude Mythos 5.2 (Mythos = Fable minus the cyber/bio guardrails, gated through the Cyber and Life-Sciences Verification Programs).
- **Provider / access:** Anthropic first-party (`claude-fable-5-2` on the Claude Platform) plus Amazon Web Services, Google Cloud (Anthropic- and Google-managed) and Microsoft Azure / Microsoft Foundry. Vendor-confirmed Chat-completions/messages API; **no Free tier ID** (`noFreeId: true`) and no third-party stealth route.
- **Release / knowledge:** released **2026-11-09**; knowledge cutoff **June 2026** (llm-stats, confirmed on `platform.claude.com/docs/en/models/opus-5/overview`).
- **IDs:** `anthropic/claude-fable-5-2` (paid only — state explicitly: no `…-free` id exists on any gateway).
- **Context window:** **1,048,576 in / 131,072 max out** (verified against the Anthropic platform docs table and llm-stats `1.0M/128.0K`).
- **Modalities:** **text + image input, text output**; adaptive reasoning always on; tool calls, structured outputs. **No audio/video input** in the launch material (vision is the only non-text modality — see Multimodal).
- **Pricing (as of 2026-11-10):** **$8 / $40 per 1M in/out**, cached read **$0.20/1M** (Anthropic launch post + llm-stats + platform docs). Optional **fast mode** = $16 / $80 per 1M (up to 2.5× generation speed). ⚠️ **Conflict on record:** the folder `meta.json` still lists **$10 / $50** and cache **$0.25** — carried over from Fable 5.1; the **vendor's own pricing** for 5.2 is **$8 / $40 / $0.20** and that is what I score against. Curation should correct `meta.json`.
- **Architecture:** proprietary, closed weights; undisclosed parameter count. Safety classifiers route blocked cyber queries to Opus 4.8 and blocked biology queries to Opus 5; strongest-ever anti-distillation (harvested data reduced 90–99%).

### Raw benchmarks found

All rows are **exact-ID (claude-fable-5-2) measured numbers** from the vendor System Card / launch post or from independent trackers that reproduce them. Sources abbreviated: **SC** = Fable 5.2 & Mythos 5.2 System Card / Anthropic launch post; **BenchLM** = benchlm.ai/models/claude-fable-5-2; **AA** = artificialanalysis.ai; **llm-stats**; **Epoch** = epoch.ai FrontierMath.

Agent / tool use:

- Terminal-Bench 4.0: **67.60%** (SC, via BenchLM) · AA rerun **59.6%** (harness gap noted)
- Terminal-Bench-Science 0.1: **74.6%** (SC; Mythos 5.2 75.3%)
- OSWorld 2.1 (offline, partial): **89.3%** (SC)
- AutomationBench: **51.4%** (SC) · AA AutomationBench **76.4%** (AA leaderboard)
- WANDR (agentic search, relaxed): **82.1%** (SC)
- GDPval-AA: **1831 Elo** (BenchLM/SC) · AA-Briefcase **1785 Elo / 66.1% rubric** (SC)
- DRACO: **87.7%** (SC) · Remote Labor Index (RLI): **41.3%** high effort (SC)
- Harvey LAB-AA v1.1: **7.2%** (SC) · GDP.pdf **24.2%** (AA) · MKA **56.6%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (cometapi) — independent range **93.7–93.9%** (llmlearner 93.9; GPT-6 Astra leads at 96.0)
- HLE (with tools): **74.2%** (SC) · HLE w/o tools **73.2%** · AA-HLE **74.3%** · HLE-Diamond **75.8%** Xhigh / 73.8% High (AA)
- ARC-AGI-3: **65.7%** (SC) · ARC Prize Foundation verified **79.26%** (launch post) · ARC-AGI-3 Provider Adapter **94.9%** (SC)
- CritPt: **35.4%** (AA) · STEM Professor Bench **61.8%** (SC)
- Artificial Analysis Intelligence Index v5: **65, #1 of 103** — five points clear of Gemini 4 Carbon (60), Opus 5.5 (59) (AA)
- BenchLM overall: **92.05/100, #1** (60 of 812 benchmarks, "conservative" partial coverage) · Vals Index **#1 of 36, 71.31%**
- Omniscience (AA): Index **66.8%**, Accuracy **79.1%**, Hallucination Rate **59.3%**

Coding:

- SWE-bench Pro: **93%** (SC) · SWE Multilingual **96.6%** · SWE Multimodal **74.1%** (SC)
- FrontierSWE v2: **69.9%** (SC / frontierswe.com; Fable 5.1 56.3, Opus 5.5 62.3, GPT-6 Astra 65.5)
- FrontierCode 2.0: **49.1%** Xhigh — "highest of any released model we've tested"; High 45.3% ≈ Opus 5.5 best (Cognition)
- DeepSWE **74.3%** · ProgramBench **85.6%** (SC) · CursorBench 4.0 **60.0%** (Cursor) · AA-SciCode **67.7%** (AA)
- data-eng-bench (Snowflake, 103 tasks): "strongest model we have measured… passed every interactive coding task" (vendor quote)
- FrontierMath v2 (Epoch): Tiers 1–3 **95.088%**, Tier 4 **100.0%**

Long context:

- **No dedicated MRCR/RULER retrieval row found for the exact Fable 5.2 id** on this pass; measured long-context reasoning proxies are AA-LCR **83.3%** and MLCR-AA **43.9%** (BenchLM/AA). The 1M window itself is vendor-verified.

Multimodal / vision (input is text + image only):

- Chartography (no tools): **73.4%** · with tools **91.6%** (SC) · OfficeQA **83.4%**, OfficeQA Pro **72.9%** (SC) · BenchCAD 2.1 **75.4%** / tools **83.5%** (SC)
- HealthBench (raw) **58.8%** / length-adj **59.6%** · HealthBench Professional raw **71.1%** / length-adj **67.7%** · PhysicianBench **64.4%** (SC)
- Multilingual: GMMLU **96.0%**, MILU **94.1%** (SC)

Conflicts logged rather than smoothed: Terminal-Bench 4.0 67.6% (SC) vs 59.6% (AA rerun) — harness/effort gap; AutomationBench 51.4% (SC) vs 76.4% (AA) — task-set difference; GPQA 93.7 vs 93.9 across trackers. None change the top-tier picture; GPT-6 Astra leads GPQA (96.0) and Gemini 4 Carbon leads AutomationBench, so Fable 5.2 is #1 overall but not #1 on every single row.

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic record on the exact ID — OSWorld 2.1 89.3%, DRACO 87.7%, WANDR 82.1%, Terminal-Bench-Science 74.6%, GDPval-AA 1831 Elo — plus first-party OS-design/1,000-subagent demos. Capped below 95 by AutomationBench 51.4% and RLI 41.3% (weakest agentic rows) and the AA-vs-SC Terminal-Bench gap.
- **Reasoning: 93/100.** #1 on AA Intelligence Index v5 (65), GPQA Diamond 93.7%, HLE 74.2%, ARC-AGI-3 65.7%/79.26% verified, FrontierMath Tier-4 100%. Held under 95 by CritPt 35.4% and MLCR-AA 43.9% and by GPT-6 Astra's higher GPQA.
- **Context window: 92/100.** 1M in / 128K out is the top tier, with strong long-context reasoning (AA-LCR 83.3%); no exact-ID MRCR row found, so the retrieval depth is inferred from AA-LCR and vendor usage rather than a dedicated needle test — the reason it is not 95+.
- **Multimodal: 80/100.** Input is **text + image only** (no audio/video). Vision is very strong (Chartography 91.6% w/ tools, OfficeQA 83.4%, SWE-Multimodal 74.1%), but the modality ceiling — image-in/text-out — caps it below the 90s regardless of quality.
- **Coding: 95/100.** Best measured coding tier on the exact ID: SWE-bench Pro 93%, SWE Multilingual 96.6%, FrontierCode 2.0 49.1% (highest of any released model), DeepSWE 74.3%, ProgramBench 85.6%, data-eng-bench sweep. Capped at 95, not higher, by CursorBench 60.0% and FrontierSWE v2 69.9% (still #1-class but not clean sweeps).
- **Cost efficiency: 38/100.** $8 / $40 per 1M (fast mode $16 / $80), no free tier, 30-day safety retention for non-enterprise; premium frontier pricing at ~2× Opus 5.5's $4 / $20. Scored independently.
- **Overall Score: 90.4/100.** Half-up mean of the five quality dims (92+93+92+80+95)/5 = **90.4** (Cost excluded). Best fit: the most capable public model for high-complexity, long-horizon agentic engineering and expert reasoning where frontier pricing is justified; use Opus 5.5 as the daily driver for routine work.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-10 (new report; folder had `meta.json` + `average.md` + other raters' files but no `Qwen_3.8_Flash.md`, so this slug **was in `model-queue.md`** at Overall 90.9 and this file adds one more independent rater)
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. ≥6 successful independent searches plus 3 primary-source fetches; every score row is an exact-ID measured number (vendor System Card / AA / Epoch / BenchLM), never a lineage proxy from Fable 5.1 or Opus 5.5.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2 (launch post + benchmark table)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 & Mythos 5.2 System Card (PDF)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [Anthropic platform docs — model pricing/context table](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [BenchLM — Claude Fable 5.2 benchmark scores](https://benchlm.ai/models/claude-fable-5-2)
  - [llm-stats — Claude Fable 5.2 pricing & context](https://llm-stats.com/models/claude-fable-5-2)
  - [Artificial Analysis — Intelligence Index & model page](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Vals AI — real-world index](https://www.vals.ai/home)
- Future sources: add a new file next to this one using the same headings.
