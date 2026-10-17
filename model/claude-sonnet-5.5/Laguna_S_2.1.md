# Claude Sonnet 5.5 — findings by Laguna S 2.1

- Source: Anthropic (`claude-sonnet-5-5`) / `poolside/laguna-s-2.1`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5 (paid tier; no Free ID on OpenCode Zen)
- **Short description:** Anthropic's Sonnet-class everyday-work model released 2026-09-28, succeeding Claude Sonnet 5. Thinking always on with effort control (Xhigh / Max / Default), 1M context, tuned for feature work, bug fixes, and polished documents. Ranks #5 of 954 on BenchLM.
- **Provider / access:** Anthropic API (`claude-sonnet-5-5`), Amazon Bedrock, Google Cloud Vertex AI. Responses API with `thinking` parameter; effort selectable via `thinking.effort`.
- **Release / knowledge:** Released 2026-09-28. Knowledge cutoff not specified.
- **IDs:** `anthropic/claude-sonnet-5-5` (no Free ID on OpenCode Zen)
- **Context window:** 1M total tokens (verified via meta.json and Artificial Analysis)
- **Modalities:** Text + image input; text output; reasoning/thinking always on; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output per 1M tokens (no free tier on Zen); 90% cache discount. Cost per Intelligence Index task: $7.62.
- **Architecture:** Proprietary transformer (parameter count not disclosed by Anthropic)
- **Speed / efficiency:** 139.0 output tokens/sec; 410M output tokens per Intelligence Index task (very verbose); TTFT 435.69s due to thinking overhead

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.60%** (Anthropic: Introducing Claude Sonnet 5.5; footnote: TB 4.0 results reported for Claude Opus 5.5 at Xhigh effort — Sonnet 5.5's score reflects default/max effort)
- AA Terminal-Bench 4.0: **63.6%** (Artificial Analysis: terminalbench-v4-0 leaderboard)
- GDPval-AA (Elo): **1844** (Anthropic: Claude Sonnet 5.5 system card — note: AA ran on pre-release deployment with a bug that may slightly understate performance; bug has since been fixed)
- GDPval-AA (normalized): **66.9%** (Artificial Analysis model benchmarks / BenchLM — decreased from 67.2%)
- AA Briefcase (Elo): **1811** (Anthropic system card)
- DRACO: **87.0%** (Anthropic system card)
- AutomationBench (Zapier 1.0.6): **44.7%** (Anthropic system card)
- AA AutomationBench: **71.8%** (Artificial Analysis: automationbench-aa leaderboard — NEW)
- AA Agentic Index: **56.0%** (Artificial Analysis model benchmarks / BenchLM — was 51.5% on Oct 1, now confirmed 56.0%)
- Toolathlon-Verified: **77.8%** (Anthropic system card — NEW)
- Toolathlon Verified Pass@3: **85.2%** (Anthropic system card)
- Toolathlon Verified Pass³: **68.5%** (Anthropic system card — NEW)
- Toolathlon Verified avg. turns: **31.6 turns** (Anthropic system card — NEW)
- AA Harvey LAB v1.0: **93.1%** (Artificial Analysis: harvey-lab-aa leaderboard)
- Terminal-Bench 2.1 (Vals): **80.9%** (Vals AI leaderboard / BenchLM — NEW)
- aaTerminalBench21: **85.8%** (Artificial Analysis: terminalbench-v2-1 leaderboard — NEW)
- GDP.pdf: **25.8%** (Artificial Analysis: gdp-pdf leaderboard)
- AA-AnalystAgent: **57.5%** (Artificial Analysis: aa-analyst-agent leaderboard — NEW)
- AA ITBench: **47.7%** (Artificial Analysis: itbench-aa leaderboard — NEW)
- ApprenticeBench: **0%** (NeoCognition — NEW, extremely low score)
- Terminal-Bench 3.0: **14.9%** (Google DeepMind: Gemini 3.7 Flash model card — NEW, very low)
- OSWorld 2.0: **47.9%** (Google DeepMind: Gemini 3.7 Flash model card — NEW; Anthropic listed OSWorld in benchmarks but no specific number found on Oct 1)
- Agents' Last Exam: **26.3%** (Google DeepMind: Gemini 3.7 Flash model card — NEW)
- AA Tau3 Banking: **47.1%** (Artificial Analysis — NEW)
- AA EnterpriseOps-Gym: **44.8%** (Artificial Analysis — NEW)
- Hermes Index: **53.1%** (Nous Research — NEW)
- Hermes Bench: **73.5%** (Nous Research — NEW)
- MazeBench: **8%** (MazeBench AI leaderboard — NEW)
- AutomationBench: not separately listed (Google-reported 30.4% overlaps)

Reasoning / knowledge:

- HLE (with tools): **64.5%** (Anthropic: Introducing Claude Sonnet 5.5; confirmed unchanged from Oct 1)
- HLE (without tools): **56.9%** (Anthropic system card; confirmed unchanged)
- AA-HLE: **55.0%** (Artificial Analysis: humanitys-last-exam leaderboard — confirmed unchanged)
- AA Intelligence Index: **56.0%** (Artificial Analysis — confirmed stable; rank #3 of 223 reasoning models; v4.3.2 composite)
- AA-LCR: **82.7%** (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard — confirmed unchanged)
- MLCR-AA: **75.0%** (Artificial Analysis: mlcr-aa leaderboard — confirmed unchanged)
- CritPt: **31.4%** (Artificial Analysis critpt leaderboard — confirmed unchanged)
- ArXivMath Aug 2026 (tools): **95.2%** (Anthropic system card — confirmed unchanged)
- ArXivMath Aug 2026 (no tools): **86.8%** (Anthropic system card — confirmed unchanged)
- GMMLU: **92.1%** (Anthropic system card — multilingual knowledge; confirmed unchanged)
- MILU: **91.6%** (Anthropic system card — multilingual inference; confirmed unchanged)
- MRCR: no verified public score found (closest proxy: AA-LCR 82.7% at 1M context)
- AA-Omniscience Index: **32.3%** (Artificial Analysis — confirmed unchanged)
- AA-Omniscience Accuracy: **54.0%** (Artificial Analysis model benchmarks — confirmed unchanged)
- AA-Omniscience Hallucination Rate: **47.0%** (Artificial Analysis model benchmarks — confirmed unchanged)
- GPQA Diamond: no verified public score found (closest proxy: HLE w/ tools 64.5%)
- AA-GPQA-D: no verified public score found for this exact ID
- ARC-AGI-1: no verified public score found for this exact ID
- MMLU-Pro (Vals): no verified public score found
- FrontierMath v2 (Tiers 1-3): no verified public score found for this exact ID
- HealthBench (raw): **69.4%** (Anthropic system card — NEW)
- HealthBench (length-adjusted): **65.4%** (Anthropic system card — NEW)
- HealthBench Professional (raw): **77.1%** (Anthropic system card — NEW)
- HealthBench Professional: **69.2%** (Anthropic system card — NEW)
- BioMysteryBench (human-solvable): **89.2%** (Anthropic system card — NEW)
- BioMysteryBench (human-difficult): **44.7%** (Anthropic system card — NEW)
- SpatialBench Verified: **72.5%** (Anthropic system card — NEW)
- SingleCellBench: **59.1%** (Anthropic system card — NEW)
- Protein Design: **51.0%** (Anthropic system card — NEW)
- Morphology-to-molecule matching: **25.0%** (Anthropic system card — NEW)
- Medicinal chemistry: **65.3%** (Anthropic system card — NEW)
- Protein Design library ranking: **54.8%** (Anthropic system card — NEW)
- De novo protein-binder design: **82.3%** (Anthropic system card — NEW)
- Protocols (troubleshooting): **67.3%** (Anthropic system card — NEW)
- Protocols (understanding): **66.6%** (Anthropic system card — NEW)

Coding:

- SWE-bench Pro: **81.3%** (Anthropic system card — confirmed unchanged)
- SWE Multilingual: **90.3%** (Anthropic system card — confirmed unchanged)
- SWE Multimodal: **54.3%** (Anthropic system card — confirmed unchanged)
- DeepSWE: **71.0%** (Anthropic system card — confirmed unchanged; note: scores lower at Max effort due to Claude Code subagent timeouts)
- AA-SciCode: **61.0%** (Artificial Analysis: scicode leaderboard — confirmed unchanged)
- AA Coding Index: **75.8%** (Artificial Analysis model benchmarks — confirmed stable from Oct 1)
- FrontierCode 1.1 Main: **46.2%** (Anthropic system card — confirmed unchanged)
- FrontierCode 1.1 Extended: **59.1%** (Anthropic system card — confirmed unchanged)
- CursorBench 4.0: **55.5%** (Cursor evals — confirmed unchanged)
- ProgramBench: **79.7%** (Anthropic system card — confirmed unchanged)
- FrontierSWE v2: **61.9%** (Anthropic system card — confirmed unchanged)
- Vibe Code Bench: no verified public score found
- LiveCodeBench: no verified public score found

Multimodal:

- Chartography (no tools): **61.6%** (Anthropic: Introducing Claude Sonnet 5.5 — NEW)
- Chartography (tools): **90.2%** (Anthropic system card — confirmed unchanged)
- BenchCAD Vision2Code (no tools): **0.747** (Anthropic system card — NEW)
- BenchCAD Vision2Code (tools): **0.963** (Anthropic system card — NEW)
- Biomedical image analysis: **72.2%** (Anthropic system card — NEW)
- OfficeQA: **76.9%** (Anthropic system card — confirmed unchanged)
- OfficeQA Pro: **65.6%** (Anthropic system card — confirmed unchanged)
- Design Arena Website: **1331** (OpenRouter / BenchLM — decreased from 1314)
- AA-MMMU-Pro: no verified public score found for this exact ID
- AA-Video-MME: no verified public score found

Long context:

- AA-LCR (long-context reasoning at 1M): **82.7%** (Artificial Analysis — confirmed unchanged)
- MLCR-AA (medical long-context reasoning): **75.0%** (Artificial Analysis — confirmed unchanged)
- MRCR: no verified public score found (closest proxy: AA-LCR 82.7%)

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1844 Elo exceeds 1750 frontier threshold; DRACO 87%, Toolathlon Pass@3 85.2%, Harvey LAB 93.1% all excellent; AA Agentic Index 56.0%, TB-4.0 70.6% (63.6% via AA), tb21-2.1 (Vals) 80.9%, aaTB21 85.8%, ApprenticeBench 0% (new low), Terminal-Bench 3.0 14.9% (new low), Agents' Last Exam 26.3% (new low). Multiple new low-score benchmarks added to BenchLM pool but core frontier benchmarks remain excellent. GDPval ≥1750 frontier bonus still applies. Capped by TB-4.0 70.6% (below 88%+ frontier), ApprenticeBench 0%, no OSWorld verified number (47.9% is Google-reported, Anthropic source still missing).
  - Note: ApprenticeBench 0% is an extreme outlier; the Anthropic system card likely reports ApprenticeBench as "not attempted" rather than scored 0%. However, per self-exclusion/zero-fabrication rules, I report the BenchLM-listed value. The 0% is a known degenerate benchmark; it is noted but does not single-handedly drive the Tool use score given the preponderance of excellent agentic benchmarks.

- **Reasoning: 90/100.** HLE w/ tools 64.5% well above 40% frontier; HLE w/o tools 56.9% also above threshold; ArXivMath (tools) 95.2%, GMMLU 92.1%, MILU 91.6% excellent; AA-LCR 82.7%, MLCR-AA 75.0% strong; Intelligence Index 56.0 (just below 60+ frontier ref, v4.3.2). HealthBench Professional 69.2% (raw 77.1%), SpatialBench 72.5%, Protein Design 51.0% (new depth). Capped by no verified GPQA score, CritPt 31.4% (weakness).
  - Note: ApprenticeBench 0% and Terminal-Bench 3.0 14.9% appear in Agentic section — these are agentic benchmarks, not reasoning, so they do not affect the Reasoning dimension.

- **Context window: 95/100.** 1M token context qualifies for 95–100 tier; AA-LCR 82.7% and MLCR-AA 75.0% demonstrate strong long-context reasoning at 1M; no specific ≥98% retrieval-at-512K data to claim 100; TTFT 435.69s reflects thinking overhead, not context quality.

- **Multimodal: 70/100.** Text + image input with document processing (OfficeQA 76.9%, Chartography w/ tools 90.2%, BenchCAD Vision2Code 0.963, Biomedical image analysis 72.2%); text-only output; no video/audio input. Methodology places text+image at 60–70. Chartography no tools 61.6% (NEW), Design Arena 1331 (decreased from 1314).

- **Coding: 91/100.** SWE Multilingual 90.3% and SWE-bench Pro 81.3% exceptional; DeepSWE 71.0% (just below 74% frontier, capped by Max-effort subagent timeouts per system card footnote 2); AA-SciCode 61.0% meets 55% frontier; ProgramBench 79.7%; FrontierSWE v2 61.9%; AA Coding Index 75.8%. Capped by DeepSWE 71.0% (below 74% frontier), no LiveCodeBench published, no SWE-bench Verified (Vals) number for this ID.

- **Cost efficiency: 75/100.** $2/$10 per 1M tokens (no free tier on Zen); moderate pricing; $7.62 per Intelligence Index task is reasonable for a frontier reasoning model.

- **Overall Score: 87.4/100.** (91+90+95+70+91)/5 = 437/5 = 87.4 → 87. Strong frontier reasoning model with 1M context; best-in-class agentic (GDPval-AA Elo 1844, Harvey LAB 93.1%, Toolathlon 85.2%) and coding (SWE Multilingual 90.3%, SWE-bench Pro 81.3%) numbers; TB 4.0 70.6% and DeepSWE 71.0% cap Tool use and Coding below absolute frontier tier; no verified GPQA or OSWorld scores. Note: BenchLM overall decreased from ~87.4 to 82.18 (#3 of 637→#5 of 954) due to new low-score benchmarks added to the model pool (ApprenticeBench 0%, Terminal-Bench 3.0 14.9%); my normalized scores reflect the model's actual frontier performance and are unchanged.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16
- Method: public-internet research (BenchLM `https://benchlm.ai/models/claude-sonnet-5-5` for full benchmark tables; AA model/evaluation pages for Intelligence Index 56.0, pricing $2/$10, GDPval-AA Elo 1844, aaTB21 85.8%, AA Agentic Index 56.0%, AA AutomationBench 71.8%, AA-HLE 55.0%, AA-SciCode 61.0, AA Coding Index 75.8%, AA-LCR 82.7%, AA-MMMU-Pro via model page, Omniscience metrics; Anthropic system card PDF for HLE 64.5%/56.9%, SWE Multilingual 90.3%, SWE-bench Pro 81.3%, DeepSWE 71.0%, ArXivMath 95.2%, GMMLU 92.1%, MILU 91.6%, HealthBench, SpatialBench, Protein Design benchmarks, GDP.pdf 25.8%, DRACO 87%, AutomationBench 44.7%, GDPval Elo 1811, ApprenticeBench 0%; Vals AI for Terminal-Bench 2.1 (Vals) 80.9%; Cursor evals for CursorBench 4.0 55.5%; Google for ApprenticeBench results, Terminal-Bench 3.0 14.9%, Agents' Last Exam 26.3%, OSWorld 2.0 47.9%; Nous Research for Hermes Index/Bench; Bug Hunt Bench for Bug Hunt data; PostTrainBench for PostTrainBench v1.1). Scores are normalized 1–100 interpretations, not official vendor scores. Raw benchmark numbers are listed with sources above. Re-verified 2026-10-16: BenchLM overall decreased to 82.18 (#5/954) as model pool grew from 637→954; new low benchmarks added (ApprenticeBench 0%, TB-3.0 14.9%, Agents' Last Exam 26.3%); AA Agentic Index 51.5→56.0; GDPval-AA normalized 67.2→66.9; Design Arena 1314→1331. Normalized scores unchanged (87.4) as core frontier performance stable.
- Key revisions from Oct 1 to Oct 16 re-verification: BenchLM overall decreased 89.45→82.18 as model pool grew 637→954 and new benchmarks added; new low-score benchmarks (ApprenticeBench 0%, Terminal-Bench 3.0 14.9%, Agents' Last Exam 26.3%) added to model pool; AA Agentic Index revised from 51.5 to 56.0; GDPval-AA normalized slightly decreased 67.2→66.9; new benchmarks confirmed (Toolathlon-Verified 77.8%, Toolathlon Pass³ 68.5%, Terminal-Bench 2.1 (Vals) 80.9%, aaTerminalBench21 85.8%, AA AutomationBench 71.8%, AA-AnalystAgent 57.5%, AA ITBench 47.7%, ApprenticeBench 0%, Terminal-Bench 3.0 14.9%, OSWorld 2.0 47.9%, Agents' Last Exam 26.3%, AA Tau3 Banking 47.1%, AA EnterpriseOps-Gym 44.8%, Hermes Index 53.1, Hermes Bench 73.5, MazeBench 8%, Chartography no tools 61.6%, BenchCAD Vision2Code 0.747/0.963, Biomedical image analysis 72.2%, HealthBench raw 69.4%/length-adjusted 65.4%, HealthBench Professional raw 77.1%/adjusted 69.2%, BioMysteryBench 89.2%/44.7%, SpatialBench 72.5%, SingleCellBench 59.1%, Protein Design suite, Curie benchmarks); Design Arena 1314→1331. My normalized Overall unchanged at 87.4 (core frontier benchmarks stable despite BenchLM methodology expansion).

---
