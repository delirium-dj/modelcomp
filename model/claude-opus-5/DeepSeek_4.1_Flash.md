# Claude Opus 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: BenchLM (`claude-opus-5`, **104 rows**, **79.68/100, #10 of 1008** — was 80 rows, 79.95, #8 of 228), Artificial Analysis model page, Anthropic Opus 5 system card, Vals AI, Epoch AI, ARC Prize, Cognition.
> **Refreshed values:** GDPval-AA **1862 Elo** (was 1861); AA-GPQA 93.2% / Vals 93.4%; TB3.0 42.7% re-confirmed (#1).
> **Newly captured rows:** AA Intelligence Index **50.8**; **Terminal-Bench 2.1 84.6% (Vals) / 89.1% (AA)** — the previously missing anchor; AA-LCR **79.3%**; CritPt 29.1%; AA-Omniscience **index 37.1 / accuracy 60.9% / hallucination 60.8%**; FrontierMath v2 **85.614% T1–3 / 73.171% Tier-4**; FrontierCode 1.1 Main **53.4%** / Extended 63.6% / **FrontierCode 2.0 26.7%**; ScarfBench 69.8%; CursorBench 4.0 46.6%; ProgramBench 93.0; VulcanBench v3 87.0 / CII 96.4; PostTrainBench 35.0; AA Agentic Index 56.2%; AA-AnalystAgent 53.8%; EnterpriseOps-Gym 47.5%; DeepSearchQA 95.0; DRACO 88.6%; MCP-Atlas claim coverage 89.1%; LAB held-out 11.7/94.1; Toolathlon Pass³ 73.1% / 23.5 turns; OSWorld 2.1 74.0%; Gray Swan IPI 4.6%; **IMO 2026 42/42**; RiemannBench 60/79; ArXivMath Jun-2026 90.8/91.3; GMMLU 92.5 / MILU 92.1 / INCLUDE 89.8; HealthBench 67.1/57.8; biology suite (BioMystery 90.1/49.4, ProteinGym 47.7); Design Arena 1309; GDP.pdf 83.4/85.5; OfficeQA 78.1/66.9; AA-MMMU-Pro 84.7%.
> **No score change:** the added rows confirm the elite coding/reasoning profile (SWE-bench Verified 96–97%, IMO 42/42) with the same premium pricing; scores held at 92.
> Sources this pass: https://benchlm.ai/models/claude-opus-5 · https://artificialanalysis.ai/models/claude-opus-5 · https://www.vals.ai/models/anthropic_claude-opus-5 · https://arcprize.org/results/anthropic-claude-opus-5 · https://epoch.ai/benchmarks/frontiermath-tier-4-v2

> **Re-verified 2026-10-18.** BenchLM (`claude-opus-5`, 80 rows) computed an overall **79.95/100 (#8 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: SWE-bench Verified 96.0% (Anthropic, avg of 5 trials) / 97.0% (Vals, #1/88); SWE-bench Pro 79.2%; Frontier-Bench v0.1 43.3% (SOTA); CursorBench 3.2 70.0%; GDPval-AA v2 1861 Elo (#1); ARC-AGI-3 30.2%; ARC-AGI-2 90.4%; ARC-AGI-1 97.5%; GPQA 93.2–93.43%; MMMU-Pro 89.88% (Vals); MMLU-Pro 91.59% (Vals); LiveCodeBench 89.0% (Vals); Terminal-Bench 3.0 42.7% (#1); Terminal-Bench 4.0 52.3%; OSWorld 2.0 70.6%; BrowseComp 90.8%; HLE w/ tools 64.7%; DeepSWE 1.1 68.8%; SWE Multilingual 89.5%; SWE Multimodal 59.4%. Conflicts surfaced: GDPval-AA source-instability (~1932/1815/1861 Elo); release date Jul 24 vs Jul 22; modalities conflict; TB2.1 anchor unpublished at the time; provider price spread.

## Model card

- **Name:** Claude Opus 5 (API id `claude-opus-5`; no Free tier)
- **Short description:** Anthropic's Opus 5-generation flagship (2026-07-24), successor to Opus 4.8, built for the deepest reasoning and longest autonomous coding/research runs; new default on Claude Max. Superseded by Opus 5.5 (2026-09-22).
- **Provider / access:** Anthropic Claude API, AWS Bedrock, Google Vertex AI; closed, API-only.
- **Release / knowledge:** 2026-07-24 (Vals: Jul 22); knowledge cutoff not disclosed.
- **IDs:** `claude-opus-5`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; 128,000 max output (300,000 via Batch beta); standard pricing across the full window.
- **Modalities:** text, image and PDF in; text out; tool calling; extended thinking with effort low/medium/high/max (+ xhigh).
- **Pricing (as of 2026-11-04):** $5.00 in / $25.00 out per 1M; cache read $0.50; 5m cache write $6.25 / 1h $10; Fast Mode $10/$50; Batch $2.50/$12.50.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2 **1862 Elo** (#1-class); OSWorld 2.0 **70.6%** / OSWorld 2.1 74.0%; BrowseComp **90.8%** (93.6% with 10-agent prerelease config); DeepSearchQA **95.0%**; DRACO 88.6%
- Terminal-Bench 2.1 **84.6% (Vals) / 89.1% (AA)**; Terminal-Bench 3.0 **42.7%** (#1/17); Terminal-Bench 4.0 52.3%
- HLE w/ tools 64.7% (56.3% w/o); LAB all-pass 23.58% (Anthropic harness) / **11.7% held-out**; criterion-pass 93.74% / **94.1% held-out**
- Toolathlon 80.6% Pass@1 / 87.0% Pass@3 / 73.1% Pass³ (23.5 turns); OSWorld-Verified 83.4%; Tau3-Banking 44.7%; MCP Atlas 85.8% (coverage 89.1%); AA Harvey LAB 93.5%
- AA Agentic Index 56.2%; AA-AnalystAgent 53.8%; AA EnterpriseOps-Gym 47.5%; AutomationBench 26.0%; ApprenticeBench 36%; MazeBench 12%; Gray Swan IPI 4.6%
- DeepsecBench-AA 25.9%; Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA **93.2% (AA) / 93.4% (Vals)**; MMLU-Pro 91.6% (Vals); ARC-AGI-1 97.5%; ARC-AGI-2 **90.4%**; ARC-AGI-3 **30.2%**
- **IMO 2026: 42/42**; RiemannBench 60.0% / 79.0% with tools; ArXivMath Jun-2026 90.8% / 91.3% tools; FrontierMath v2 T1–3 **85.614%** / Tier-4 **73.171%**
- AA Intelligence Index **50.8**; AA-LCR **79.3%**; CritPt 29.1%; AA-HLE 54.9%
- AA-Omniscience **index 37.1 / accuracy 60.9% / hallucination 60.8%**; HLE-Verified 54.4%; LABBench2 84.2%
- GMMLU 92.5 / MILU 92.1 / INCLUDE 89.8; HealthBench 67.1 raw / 57.8 length-adj (Professional 59.8 / 73.4 raw); bio suite (BioMystery 90.1/49.4; ProteinGym Hard 47.7; SingleCell 60.6)

Coding:

- SWE-bench Verified **96.0%** (Anthropic) / **97.00% (#1/88)** (Vals); SWE-bench Pro **79.2%**; SWE Multilingual 89.5%; SWE Multimodal 59.4%
- FrontierCode 1.1 Main **53.4%** / Extended 63.6%; **FrontierCode 2.0 26.7%** (Cognition); VulcanBench v3 87.0 / CII 96.4
- CursorBench 3.2 70.0% / 4.0 46.6%; LiveCodeBench 89.0% (Vals); DeepSWE 1.1 68.8%; Vibe Code Bench 88.4%; ProgramBench 93.0; ScarfBench 69.8%; PostTrainBench 35.0%
- Output speed ~53.5 tok/s (prior AA pass) — slow for interactive chat

Long context / multimodal:

- 1M window; AA-LCR 79.3%; no model-specific MRCR/RULER/GraphWalks reproduced
- MMMU-Pro 84.7% (AA) / 89.88% (Vals); Chartography 29.6% no-tools / 83.0% tools; BenchCAD 0.366 / 0.821 tools; GDP.pdf 83.4% / 85.5% tools; OfficeQA 78.1% / Pro 66.9%; Design Arena 1309

### Normalized scores (1–100)

- **Tool use: 92/100.** Rank-1 GDPval-AA 1862, OSWorld 2.0 70.6%, BrowseComp 90.8%, TB3.0 42.7% (#1) and TB2.1 84.6–89.1% are frontier; capped below 95 by AutomationBench 26% and the Apprentice/Maze assistant-style rows.
- **Reasoning: 94/100.** GPQA 93.3%, ARC-AGI-2 90.4%, ARC-AGI-3 30.2% and a perfect IMO 2026 (42/42) are frontier-leading; AA Index 50.8 and a 60.8% Omniscience hallucination rate keep it under 95.
- **Context window: 96/100.** 1M as default and ceiling (128K / 300K batch output) at standard pricing, ≥1M band; no published recall-at-depth measurement (AA-LCR 79.3% is the closest proxy).
- **Multimodal: 82/100.** Text, image and PDF in with MMMU-Pro 84.7–89.9%; text-only output, no audio/video.
- **Coding: 95/100.** SWE-bench Verified 96–97% (#1), SWE-bench Pro 79.2%, LiveCodeBench 89.0% and VulcanBench 87.0 are elite; SWE Multimodal 59.4% and FrontierCode 2.0 26.7% are the soft spots.
- **Cost efficiency: 45/100.** $5/$25 per 1M (above the $3/$15 ≈ 60 anchor), worsened by verbosity; caching/batch are the only relief.
- **Overall Score: 92/100.** (92 + 94 + 96 + 82 + 95) / 5 = 91.8 → 92. Best fit: long autonomous coding/research where the #1 SWE-bench Verified and million-token recall justify the highest per-token spend.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic Opus 5 system card, BenchLM re-read 2026-11-04 with 104 rows, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Google model card rows). Refreshed GDPval-AA, captured the missing TB2.1 anchor, the IMO 42/42, FrontierMath/FrontierCode 2.0, agentic-index and biology-suite rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 system card](https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf)
  - [BenchLM — Claude Opus 5 benchmark scores](https://benchlm.ai/models/claude-opus-5)
  - [Artificial Analysis — Claude Opus 5](https://artificialanalysis.ai/models/claude-opus-5)
  - [Vals AI — Claude Opus 5](https://www.vals.ai/models/anthropic_claude-opus-5)
  - [ARC Prize — Claude Opus 5 results](https://arcprize.org/results/anthropic-claude-opus-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
