# Gemini 3.7 Flash — findings by Kimi K3

- Source: Google / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-09-24; pricing, release date, and output limit now verified from the official model card)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash-tier model between 3.6 and 3.8 in the Gemini 3 family (based on 3.6 Flash), adding algorithmic improvements to core reasoning and agentic video understanding plus customizable thinking configurations (official model card, deepmind.google/models/model-cards/gemini-3-7-flash/).
- **Provider / access:** Google Gemini API, AI Studio, Gemini App (Spark surface), Gemini Enterprise App/Agent Platform, Google Antigravity (distribution list per official model card).
- **Release / knowledge:** Model card published 2026-08-13 ("August 2026"); knowledge cutoff March 2026 (some domains limited to January 2025, per Gemini 3 family lineage) (official model card).
- **IDs:** `google/gemini-3.7-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens input / **64K max output** (official model card — first pass could not verify output limit).
- **Modalities:** text/image/audio/video in; text out; reasoning yes (customizable thinking configs); tool calls; JSON mode (official model card).
- **Pricing (as of 2026-10-09):** $0.75/M input, $3.75/M output — **introductory, expires 2026-12-31; from 2027-01-01 it doubles to $1.50/$7.50** (official model card pricing table footnote — first pass had no verified price).
- **Architecture:** proprietary (Google DeepMind); params undisclosed; based on Gemini 3.6 Flash.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (official model card; Vals independent: 77.5%); Terminal-Bench 3.0: **14.9%** (official)
- GDPval-AA v2: **1525 Elo** (official model card; AA normalized **44.6%** — artificialanalysis.ai; first pass cited 43.6%, drifted +1.0)
- OSWorld 2.0: **47.9%** (official); AutomationBench: **30.4%** (official — best of its launch table vs Sonnet 5 17.0%, Terra 23.6%); Agents' Last Exam: **26.3%** (official)
- AA Harvey LAB: **90.7%** (official table-top); AA-AnalystAgent: **60.0%**; AA Agentic Index: **36.4%** (artificialanalysis.ai)
- ApprenticeBench (GUI, NeoCognition): **16%** — new this pass, weak GUI-agentic row (neocognition.io)
- Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA); 93.9% (Vals) (artificialanalysis.ai, vals.ai)
- HLE-Verified: **53.6%** (official table — listed on the 3.8 Flash card); AA-HLE: **47.9%** (artificialanalysis.ai)
- AA-LCR: **81.7%**; CritPt: **14.3%** (artificialanalysis.ai)
- ARC-AGI-1: **95.5%**; ARC-AGI-2: **84.6%** (ARC Prize verified results, arcprize.org)
- Artificial Analysis Intelligence Index: **CONFLICT** — official model card table claims **56** (vs 3.6 Flash 52, Sonnet 5 55, GPT-5.6 Terra 57); artificialanalysis.ai currently serves **39.1**. Apparent pre-/post-rebase (v4.3) scale mismatch; the independent current figure (39.1) governs scoring here.
- BenchLM overall: **67.56/100, #25 of 889** (benchlm.ai, 2026-10-09; first-pass snapshot 67.66 #19 of 507 — drifted as coverage widened)
- AA-Omniscience Accuracy / Hallucination Rate: **55.3% / 64.5%**; Omniscience Index 26.5 (artificialanalysis.ai)
- MMLU-Pro (Vals): **90.1%**; LABBench2: **82.1%** (official); BioMysteryBench: **87.1%** human-solvable / **43.5%** human-difficult (official)

Coding:

- SWE-bench (Vals): **80.8%** (vals.ai); LiveCodeBench (Vals): **88.7%** (vals.ai)
- AA-SciCode: **57.2%**; AA Coding Index: **76.1%** (artificialanalysis.ai)
- DeepSWE v1.1: **65.3%** (official — behind GPT-5.6 Terra 69.6%); FrontierSWE v2: **20.3%** (Proximal frontierswe.com); FrontierCode 1.1 Main: **43.6%** (official — tops its launch table vs Sonnet 5 42.7%, Terra 41.3%)
- Code Arena (web dev): **1588 Elo** (official — table-top vs Sonnet 5 1541, Terra 1523); Design Arena Website: **1310 Elo** (openrouter.ai)

Long context:

- MRCR v2 (8-needle) 64K–128K: **97.0%** (official); AA-LCR 81.7% at the 1M window; no 512K–1M MRCR row found.

Multimodal:

- CharXiv: **88.7%** tools / 84.5% no-tools (official); LVBench (long video): **85.4%** (official — best in launch table); AA-MMMU-Pro: **85.5%** (artificialanalysis.ai); GDP.pdf: **34.0%** (official — table-top).

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 85.8% official (77.5% Vals), GDPval-AA 1525 (AA 44.6% normalized), table-topping AutomationBench 30.4% and Harvey LAB 90.7%; capped by weak TB 3.0 (14.9%), Agents' Last Exam (26.3%), ApprenticeBench (16%) and Agentic Index 36.4%.
- **Reasoning: 82/100.** GPQA 94.5% (AA) / 93.9% (Vals), HLE-Verified 53.6%, ARC-AGI-2 84.6% ARC-verified; capped by CritPt 14.3% and the AA Intelligence Index conflict (independent 39.1 vs official 56 launch-scale — independent figure governs).
- **Context window: 85/100.** 1M input / 64K output now verified from the official card; MRCR v2 97% at 128K, LCR 81.7%; capped by missing max-window probes.
- **Multimodal: 86/100.** Broad input (text/image/audio/video official) with CharXiv 88.7%, MMMU-Pro 85.5%, LVBench 85.4% SOTA-ish; text-only output caps it.
- **Coding: 81/100.** LiveCodeBench (Vals) 88.7%, SWE-bench (Vals) 80.8%, Coding Index 76.1%, Code Arena 1588 table-top; capped by FrontierSWE v2 20.3% and DeepSWE 65.3% (behind Terra 69.6%).
- **Cost efficiency: 85/100.** Price now verified (was provisional at 82): $0.75/$3.75 intro through 2026-12-31 — cheapest credible Flash-tier quality; raised modestly but capped because the price doubles to $1.50/$7.50 on 2027-01-01.
- **Overall Score: 83/100.** Half-up mean of the five quality dims (80+82+85+86+81)/5 = 82.8 → 83 (unchanged vs first pass; cost never counts). Best fit: cost-sensitive multimodal coding assistance now that 3.8 Flash exists slightly above it.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (official DeepMind model card PDF page — 2026-08 publish, verified price/cutoff/64K output, benchlm.ai 42-row scorecard aggregating Vals AI / Artificial Analysis / ARC Prize / OpenRouter / NeoCognition, plus Bing/DDG query coverage). Conflicts flagged: AA Intelligence Index 56 (official launch table) vs 39.1 (artificialanalysis.ai current) — scale mismatch, independent figure used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
