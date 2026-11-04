# Gemini 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.8 Flash (`gemini-3.8-flash`; separate sibling `gemini-3.8-flash-cyber` and TTS variant are different models)
- Date: 2026-10-16 (UTC) — deep rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: BenchLM (`gemini-3-8-flash`, **63 rows**, **66.22/100, #27 of 1008** — was 58 rows, 69.01, #21 of 992), Google DeepMind model card, Artificial Analysis model page, Vals AI, Epoch AI, LlamaIndex snapshots.
> **Refreshed:** AA Intelligence Index **30.6** (was 40.9; the launch-vs-current rebase continues); AA-Omniscience **index 23.3 / accuracy 50.5% / hallucination 55.1%**; AA-Briefcase **1202**; Design Arena **1299**; ParseBench 71.50%.
> **Corrected:** **MLCR-AA 10.6%** — the 21.7% previously recorded is superseded.
> **Newly captured rows:** ScarfBench **66.0%**; cyber rows (AA Cyber Index 25.1, CWE-Bench-AA 52.5, DeepsecBench-AA 14.5, CyberGym-E2E-AA 8.4%); CharXiv w/o tools 86.2%.
> **Re-verified unchanged:** TB2.1 89.4% model card / 87.6% AA / 81.3% Vals; TB4.0 19.1–19.7% (weak spot); GDPval-AA 1545 Elo / 46.8% normalized; GPQA 94.4–95.3%; ARC-AGI-2 89.2%; AA-LCR 81.3%; FrontierSWE v2 19.6%; pricing schedule ($0.75/$3.75 intro through 2026-12-31, then $1.50/$7.50).
> **No score change:** the refreshed rows confirm the strong reasoning/multimodal, weak terminal-agent profile; scores held at 90.
> Sources this pass: https://benchlm.ai/models/gemini-3-8-flash · https://deepmind.google/models/model-cards/gemini-3-8-flash/ · https://artificialanalysis.ai/models/gemini-3-8-flash · https://www.vals.ai/models/google_gemini-3.8-flash · https://epoch.ai/benchmarks/frontiermath-tier-4-v2

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gemini-3-8-flash`) re-read on 2026-10-23 carried **58 source-displayable rows** (was 34 on 2026-10-18) and computed **69.01/100, #21 of 992** (was #21 of 228). Newly captured then: AA Terminal-Bench 2.1 87.6%, AA Agentic Index 41.1%, AA Tau3-Banking 44.9%, AA Briefcase 1203, AA AutomationBench 59.9%, AA ITBench 52.5%, AA TB4.0 19.7%, GDP.pdf 21.0%, AA-AnalystAgent 46.3%, Hermes 38.1/62.2, ApprenticeBench 24%, MazeBench 4%, FrontierSWE v2 19.6%, AA-LCR 81.3%, CritPt 18.3%, MLCR-AA 21.7%, AA-Omniscience 29.6/54.6/55.2, FrontierMath v2 68.421/21.951, AA-GPQA 95.3%, AA-HLE 47.8%, AA-MMMU-Pro 85.6%, ExtractBench 80.71%, ParseBench 72.08%, Design Arena 1300, Gray Swan IPI 5.5%. Scores adjusted that pass: Reasoning 90→89, Coding 89→88; Overall held at 90.

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-8-flash`, 34 rows) computed an overall **68.99/100 (#21 of 228)**. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Sourced numerics: Google model card / Cloud guide — Terminal-Bench 2.1 90.8%, SWE-Bench Pro 61.6%, SWE-Atlas 51.9%, τ³-bench Banking 38.1%, HLE 45.4%, HLE-Verified 54.9%; Google eval table — DeepSWE v1.1 73.7%, GDPval-AA v2 1545 Elo, Vals Finance Agent v2 61.4%, Harvey Legal Agent 10.0%, Terminal-Bench 4.0 19.1%, OSWorld-2.0 59.0%, GDP.PDF 35.0%, CharXiv 86.2%, LVBench 87.1–87.8%, BioMysteryBench 88.8%/56.5%, LABBench2 86.2%. Independent: Vals Index 54.83%, GPQA 94.4%, LiveCodeBench 89.5%, SWE-bench 80.0%, CursorBench 4.0 39.6%. Conflicts surfaced: TB2.1 90.8/89.4/81.3 spread; AA index rebase 59→40.9; pricing intro-vs-post-2027; GPQA 95.3 vs 94.4; TB4.0 weak spot.

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's production Flash upgrade (2026-09-02), built directly on Gemini 3.7 Flash — more test-time compute, more reasoning steps and more persistent tool use for long-horizon coding/agentic work at the cost of latency and tokens.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`, stable ID), AI Studio, Gemini app; relayed by gateways (OpenRouter, Vertex). Free tier available on AI Studio, and on OpenCode Zen. No `noFreeId`.
- **Release / knowledge:** 2026-09-02 (GA); knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `gemini-3.8-flash`.
- **Context window:** 1,048,576 input / 65,536 output tokens.
- **Modalities:** text, image, video, audio and PDF input; text output only; thinking levels low/medium(default)/high (MINIMAL not supported).
- **Pricing (as of 2026-11-04):** intro **$0.75 in / $3.75 out** per 1M (holds through 2026-12-31); **$1.50/$7.50** from 2027-01-01; cached input 90% off ($0.075 → $0.15); Batch/Flex $0.375/$1.875.
- **Architecture:** proprietary; 3.7-Flash foundation with more test-time compute.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **89.4%** (Google model card) / **90.8%** (Cloud doc) / **87.6%** (AA) / **81.3%** (Vals)
- Terminal-Bench 4.0 **19.1%** (Google) / **19.7%** (AA) — weak spot; τ³-bench Banking 38.1% (Google) / AA Tau3-Banking **44.9%**; OSWorld-2.0 59.0%
- Vals Finance Agent v2 **61.4%**; Harvey Legal Agent 10.0%; ApprenticeBench 24%; MazeBench 4%
- AA Agentic Index 41.1%; AA AutomationBench 59.9%; AA ITBench 52.5%; AA-AnalystAgent 46.3%; GDP.pdf 21.0%; AA Briefcase **1202**
- GDPval-AA v2 **1545 Elo** (self) / 46.8% (AA normalized); Hermes Index 38.1 / Bench 62.2; ScarfBench **66.0%**
- Cyber: AA Cyber Index 25.1, CWE-Bench-AA 52.5, DeepsecBench-AA 14.5, CyberGym-E2E-AA 8.4%

Reasoning / knowledge:

- GPQA Diamond **95.3%** (AA) / **94.4%** (Vals); HLE **45.4%** / HLE-Verified **54.9%** / AA-HLE 47.8%
- ARC-AGI-1 98.5%, ARC-AGI-2 **89.2%**, ARC-AGI-3 10.4% (provider adapter 35.0%); MMLU-Pro 90.2% (Vals)
- AA-LCR **81.3%**; **MLCR-AA 10.6% (corrected)**; CritPt 18.3%
- AA-Omniscience index **23.3** / accuracy **50.5%** / **hallucination 55.1%**
- FrontierMath v2 T1–3 68.421% / Tier-4 21.951% (Epoch AI)
- AA Intelligence Index **59 (launch v4.1.1) vs 30.6 (current v4.3.2)** — conflict; AA Coding Index 76.3%

Coding:

- DeepSWE v1.1 **73.7%** (Google) / 73.8% (leaderboard); SWE-Bench Pro **61.6%**; SWE-Atlas **51.9%**; SWE-bench (Vals) **80.0%**
- LiveCodeBench (Vals) **89.5%**; CursorBench 3.2 69.2%, CursorBench 4.0 39.6%; **FrontierSWE v2 19.6%**; Bug Hunt 18.0 fixes; AA-SciCode 56.6%

Multimodal / long context:

- CharXiv Reasoning **86.2%**; AA-MMMU-Pro **85.6%**; LVBench **87.1–87.8%**; GDP.PDF 35.0% (Google) / 21.0% (AA); BioMysteryBench 88.8%/56.5%; LABBench2 86.2%; ExtractBench 80.71%; ParseBench 71.50%; Design Arena **1299**
- 1M window; no model-specific MRCR reproduced — no verified retention value (AA-LCR 81.3% is the closest proxy)

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 81–91% and Finance Agent v2 61.4% make it a strong agentic pick; capped by GDPval 1545 (below the >1750 frontier ref), AA Agentic Index 41.1% and a weak Terminal-Bench 4.0 (19.1–19.7%).
- **Reasoning: 89/100.** GPQA 94–95%, ARC-AGI-2 89.2% and AA-LCR 81.3% are frontier-level; the rebased AA Index (59 → 30.6 across index versions), low CritPt (18.3%) and a 55.1% Omniscience hallucination rate pull it to 89.
- **Context window: 95/100.** 1,048,576 input (≥1M band) with a 65,536 output cap; no recall-at-depth benchmark for this checkpoint.
- **Multimodal: 90/100.** Text + image + video + audio + PDF input (audio band 90–100) with text-only output; AA-MMMU-Pro 85.6%.
- **Coding: 88/100.** DeepSWE 73.7%, SWE-Bench Pro 61.6% and LiveCodeBench 89.5% are strong; trimmed from 89 because FrontierSWE v2 19.6% and CursorBench 4.0 39.6% are weak on independent harnesses and no independent SWE-bench Pro was located.
- **Cost efficiency: 88/100.** $0.75/$3.75 intro with 90% cache discount sits in the low-90s band; rates double in Jan 2027.
- **Overall Score: 90/100.** (87 + 89 + 95 + 90 + 88) / 5 = 89.8 → 90. Best fit: autonomous coding agents, terminal tasks and finance/document workflows at Flash prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Google DeepMind model card, BenchLM re-read 2026-11-04 with 63 rows, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex snapshots). Refreshed AA rows (Index 30.6, Omniscience 23.3/50.5/55.1), corrected MLCR-AA, captured the new ScarfBench / cyber / CharXiv rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Gemini API — Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
  - [BenchLM — Gemini 3.8 Flash benchmark scores](https://benchlm.ai/models/gemini-3-8-flash)
  - [Artificial Analysis — Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [Vals AI — Gemini 3.8 Flash](https://www.vals.ai/models/google_gemini-3.8-flash)
  - [ARC Prize — Gemini 3.8 Flash results](https://arcprize.org/results/google-gemini-3-8-flash)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
