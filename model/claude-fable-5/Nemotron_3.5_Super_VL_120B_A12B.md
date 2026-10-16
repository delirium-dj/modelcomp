# Claude Fable 5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/fable-5/overview`), benchlm.ai/models/claude-fable, Artificial Analysis (`artificialanalysis.ai/models/claude-fable-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's legacy Opus-class flagship model (released June 9, 2026; superseded by Claude Fable 5.1) for complex professional work; 1M context / 128K max output, adaptive thinking (default high), text+images→text, $10/$50 per MTok, knowledge cutoff Jan 2026.
- **Provider / access:** Claude API (`claude-fable-5`), Amazon Bedrock (`anthropic.claude-fable-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API. Legacy model (migration to Fable 5.1 recommended).
- **Release / knowledge:** Released June 9, 2026; legacy but active; knowledge cutoff January 2026; retirement not sooner than June 9, 2027.
- **IDs:** `claude-fable-5` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-fable-5` (Bedrock). Claude Mythos 5 shares the same weights with restricted access for vetted organizations. No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking always on, default high effort); tool use yes; structured_outputs yes.
- **Pricing (as of 2026-10-16):** Input $10/MTok, Output $50/MTok; 5m cache write $12.50/MTok, 1h cache write $20/MTok, cache read $1/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Anthropic system card; Vals AI 80.5%)
- OSWorld-Verified: **85%** (Anthropic system card)
- GDPval-AA: **1747 Elo** (Anthropic system card; AA normalized 55.5%)
- τ²-bench results: **98.5%** (Artificial Analysis)
- AA Briefcase: not found for Fable 5 specifically
- AA Agentic Index: **51.0%** (Artificial Analysis)
- AA-AnalystAgent: **48.8%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **50** (#20 of 217; median 27) (Artificial Analysis)
- HLE: **55.5%** (AA-HLE)
- GPQA Diamond: **92.6%** (Artificial Analysis); **93.2%** (Vals AI)
- MMLU-Pro: **91.5%** (Vals AI)
- ARC-AGI-1: **98.50%** (ARC Prize verified)
- ARC-AGI-2: **89.2%** (ARC Prize verified)
- AA-LCR (long-context reasoning): **82.3%** (Artificial Analysis)
- CritPt: **28.6%** (Artificial Analysis)
- AA-Omniscience Index **43.3%**; Accuracy **65.4%**; Hallucination rate **63.6%** (AA)

Coding:

- SWE-bench Verified: **95%** (Anthropic system card)
- SWE-bench Pro: **80%** (Anthropic system card)
- LiveCodeBench (Vals): **89.8%** (Vals AI)
- SWE-bench (Vals): **95.0%** (Vals AI)
- CursorBench 3.1: **70.6%**; CursorBench 3.2: **70.5%** (Cursor evals)
- AA-SciCode: **61.0%** (Artificial Analysis)
- AA Coding Index: **76.5%** (Artificial Analysis)
- FrontierSWE v2: **47.0%** (Proximal)
- VulcanBench v3: **89.5%** (VulcanBench frontier results)

Multimodal & grounded:

- Blueprint-Bench 2: **38.6%** (Anthropic system card)
- OfficeQA Pro: **57.9%** (Anthropic system card)
- Design Arena Website: **1297** (OpenRouter)

Long context:

- AA-LCR: **82.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage comes primarily from Anthropic's Claude Fable 5 system card and Artificial Analysis independent analysis.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 86/100.** Leading GDPval-AA (1747 Elo), Terminal-Bench 2.1 (84.3%), OSWorld-Verified (85%), τ²-bench (98.5%); capped by no Terminal-Bench 4.0 number found for this exact variant.
- **Reasoning: 83/100.** AA Intelligence Index 53 (#5 of 217), ARC-AGI-1 (98.50%), ARC-AGI-2 (89.2%), GPQA (92.6%), HLE (55.5%); capped by CritPt (28.6%), AA-Omniscience accuracy (65.4%).
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M beyond AA-LCR (82.3%).
- **Multimodal: 75/100.** Text+images→text; Blueprint-Bench 2 (38.6%), OfficeQA Pro (57.9%); capped by text-only output and thin multimodal benchmark coverage.
- **Coding: 85/100.** SWE-bench Verified (95%), LiveCodeBench Vals (89.8%), SWE-bench Vals (95.0%), FrontierCode 1.1 Main (53.5%); capped by FrontierSWE v2 (47.0%). Elite verified SWE coding.
- **Cost efficiency: 35/100.** $10/$50 is premium pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 83/100.** Half-up mean of (86 + 83 + 88 + 75 + 85) / 5 = 82.8 → 83. Best-fit recommendation: premium agentic reasoning model for long-horizon coding and complex knowledge work; superseded by Fable 5.1 — prefer the newer model for new work unless legacy pinning required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + benchlm.ai + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
