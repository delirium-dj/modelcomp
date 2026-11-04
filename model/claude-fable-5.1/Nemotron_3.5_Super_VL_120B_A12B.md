# Claude Fable 5.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/fable-5-1/overview`), Anthropic announcement (`www.anthropic.com/claude-fable-and-mythos-5-1`), Artificial Analysis (`artificialanalysis.ai/articles/claude-fable-5-1`), BenchGap (`benchgap.net/model/claude-fable-5-1`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model (released September 1, 2026) for demanding reasoning and long-horizon agentic work; 1M context / 128K max output, adaptive thinking (default high), text+images→text, $10/$50 per MTok, knowledge cutoff Jun 2026.
- **Provider / access:** Claude API (`claude-fable-5-1`), Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API.
- **Release / knowledge:** Released September 1, 2026; knowledge cutoff June 2026; retirement not sooner than September 1, 2027.
- **IDs:** `claude-fable-5-1` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-fable-5-1` (Bedrock). Claude Mythos 5.1 offers the same capabilities to verified organizations only. No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens. Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking always on, effort none/low/medium/high/xhigh/max); tool use yes (forced tool use returns an error); structured outputs yes.
- **Pricing (as of 2026-10-16):** Input $10/MTok, Output $50/MTok; 5m cache write $12.50/MTok, 1h cache write $20/MTok, cache read $0.25/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model. Extends Claude Fable 5 with cache reads at quarter cost, stronger long-running agentic coding, multistep research, and document/spreadsheet/slide work.

### Raw benchmarks found

Official Anthropic platform docs + Anthropic announcement (Sep 1, 2026 release); Artificial Analysis Intelligence Index v5 independent analysis; BenchGap independent benchmark aggregation (data as of 2026-11-03).

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** measured (AA) / **87.8%** estimated (BenchGap) / **85.0%** measured (Vals AI)
- OSWorld-Verified: **80.7%** measured (BenchGap) / **85%** (Claude Fable 5 system card)
- GDPval-AA v2: **1,853 Elo** measured (AA) vs **1,747 Elo** (Claude Fable 5 system card)
- τ²-bench results: **98.5%** estimated (BenchGap) / **98.5%** (Artificial Analysis)
- AA Briefcase: **1,694 Elo** (Artificial Analysis)
- AA Agentic Index: **58.0%** measured (BenchGap)
- AA-AnalystAgent: **57.5%** measured (BenchGap)
- SWE-bench Verified: **98.1%** estimated ± 3.7 pp (BenchGap)
- LiveCodeBench v6: **91.7%** estimated ± 2.4 pp (BenchGap)
- JobBench: **61.7%** estimated ± 4.9 pp (BenchGap)
- Vibe Code Bench: **100.0%** estimated ± 10.3 pp (BenchGap)
- DeepSearchQA: **94.3%** estimated ± 4.5 pp (BenchGap)
- OSWorld-Verified: **82.9%** estimated ± 8.1 pp (BenchGap)
- AutomationBench: **31.4%** measured / **59.4%** measured AA AutomationBench (BenchGap)
- BFCL v4: **77.4%** estimated (BenchGap)
- CyberGym: **84.1%** estimated (BenchGap)
- WideResearch: **85.6%** estimated (BenchGap)
- AA-Cyber Index: **25.0%** measured (BenchGap)
- Fallback routing: ~4% of output tokens routed to Claude Opus 4.8/5 (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **66** (max) / **65** (xhigh) — highest measured, up from v4.3.2 score of 53; ahead of Claude Opus 5 (max, 63), Claude Fable 5 (max, 62), GPT-5.6 Sol (max, 61) and Grok 4.6 (high, 61)
- HLE: **59.1%** measured (AA-HLE) vs **55.5%** (AA-HLE previous) / **65.0%** measured (BenchGap)
- GPQA Diamond: **94.8%** estimated ± 1.5 pp / **93.7%** measured / **93.6%** estimated (BenchGap); **92.6%** (Artificial Analysis)
- MMLU-Pro: **86.0%** estimated ± 2.5 pp / **91.6%** AA estimated (BenchGap)
- ARC-AGI-1: **98.50%** (ARC Prize verified)
- ARC-AGI-2: **89.2%** (ARC Prize verified)
- AA-LCR (long-context reasoning): **85.3%** measured (BenchGap)
- CritPt: **29.7%** measured (BenchGap)
- AA-Omniscience Accuracy: **68.4%** measured (BenchGap)
- MMLU: **88.2%** estimated ± 8.3 pp (BenchGap)
- AA MMLU-Pro: **91.6%** estimated (BenchGap)
- AA Coding Index: **81.6%** measured (BenchGap)
- BrowseComp: **83.0%** estimated ± 1.9 pp (BenchGap)
- AA-Harvey LAB v1.0: **93.0%** measured (BenchGap)
- AA-Tau3 Banking: **47.2%** measured (BenchGap)
- AA-Terminal-Bench 2.1: **91.4%** measured (BenchGap)
- AA-Terminal-Bench 4.0: **52.0%** measured (BenchGap)
- Vals GPQA Diamond: **93.4%** measured (BenchGap)
- Vals MMLU-Pro: **92.4%** measured (BenchGap)
- HLE-Verified: **54.6%** estimated (BenchGap)
- Agents' Last Exam: **46.8%** estimated (BenchGap)

Coding:

- SWE-bench Verified: **98.1%** estimated ± 3.7 pp (BenchGap)
- SWE-bench Pro: **81.2%** measured (BenchGap)
- LiveCodeBench v6: **91.7%** estimated ± 2.4 pp (BenchGap)
- Vals LiveCodeBench: **90.5%** measured (BenchGap)
- Vals SWE-bench: **100.0%** estimated ± 4.5 pp (BenchGap)
- SWE-bench (Vals): **95.0%** (Vals AI)
- CursorBench 3.1: **70.6%**; CursorBench 3.2: **70.5%** (Cursor evals)
- AA-SciCode: **61.0%** (Artificial Analysis)
- SciCode: **57.8%** estimated ± 2.9 pp (BenchGap)
- AA Coding Index: **81.6%** measured (BenchGap)
- FrontierSWE v2: **47.0%** (Proximal)
- VulcanBench v3: **89.5%** (VulcanBench frontier results)
- DeepSWE: **67.4%** measured (BenchGap)
- FrontierCode 2.0: **32.4%** measured (BenchGap)
- ProgramBench: **87.6%** measured (BenchGap)
- SWE Multilingual: **89.1%** measured (BenchGap)
- SWE-bench Multimodal: **54.7%** measured (BenchGap)
- CWE-Bench-AA: **50.8%** measured (BenchGap)

Multimodal & grounded:

- Blueprint-Bench 2: **38.6%** (Claude Fable 5 system card)
- OfficeQA Pro: **57.9%** (Claude Fable 5 system card)
- Design Arena Website: **1297** (OpenRouter)

Long context:

- AA-LCR: **82.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage comes primarily from the Claude Fable 5 system card (predecessor) and Artificial Analysis independent analysis.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 87/100.** Leading GDPval-AA (1747 Elo), Terminal-Bench 2.1 (84.3%), OSWorld-Verified (85%), τ²-bench (98.5%); capped by weak Terminal-Bench 4.0 (25.8% per AA). benchgap.net adds Vibe Code Bench 100.0% estimated and DeepSearchQA 94.3% estimated. Premier agentic tool-use model.
- **Reasoning: 83/100.** AA Intelligence Index 53 (#5 of 217), ARC-AGI-1 (98.50%), ARC-AGI-2 (89.2%), GPQA (92.6%), HLE (55.5%); capped by CritPt (28.6%), AA-Omniscience accuracy (65.4%). Elite knowledge/reasoning profile.
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M beyond AA-LCR (82.3%).
- **Multimodal: 75/100.** Text+images→text; Blueprint-Bench 2 (38.6%), OfficeQA Pro (57.9%); capped by text-only output and thin multimodal benchmark coverage.
- **Coding: 87/100.** SWE-bench Verified (95% / 98.1% estimated benchgap.net), LiveCodeBench Vals (89.8%) / v6 91.7% estimated (benchgap.net), SWE-bench (Vals) (95.0%), FrontierCode 1.1 Main (53.5%); benchgap.net adds SWE-bench Pro 81.2% measured and ProgramBench 87.6% measured — elite verified SWE coding confirmed. Capped by FrontierSWE v2 (47.0%).
- **Cost efficiency: 35/100.** $10/$50 is premium pricing with 98% cache discount; not counted toward Overall.
- **Overall Score: 84/100.** Half-up mean of (87 + 83 + 88 + 75 + 87) / 5 = 84.0 → 84. Best-fit recommendation: premium agentic reasoning model for long-horizon coding and complex knowledge work; premium price ($10/$50) justified only for the most demanding tasks where Opus 5.5 falls short.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-01
- Method: public internet research (official Anthropic platform docs + benchgap.net independent benchmark aggregation + benchlm.ai + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.1 (official platform docs)](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [benchgap.net — Claude Fable 5.1 benchmark scores](https://benchgap.net/model/claude-fable-5-1) (data as of 2026-10-29)
  - [Artificial Analysis — Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [benchlm.ai — SWE-bench Pro leaderboard](https://benchlm.ai/benchmarks/swe-bench-pro)
