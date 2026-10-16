# Claude Sonnet 5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/sonnet-5/overview`), benchlm.ai/models/claude-sonnet-5, Artificial Analysis (`artificialanalysis.ai/models/claude-sonnet-5`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's legacy Sonnet-class model (released 30 Jun 2026, superseded by Claude Sonnet 5.5) for complex professional work; 1M context / 128K max output, adaptive thinking (default high), text+images→text, $2/$10 per MTok, knowledge cutoff Jan 2026.
- **Provider / access:** Claude API (`claude-sonnet-5`), Amazon Bedrock (`anthropic.claude-sonnet-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API. Legacy model (migration to Sonnet 5.5 recommended).
- **Release / knowledge:** Released 2026-06-30; legacy but active; knowledge cutoff Jan 2026; retirement not sooner than 2027-06-30.
- **IDs:** `claude-sonnet-5` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-sonnet-5` (Bedrock). No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking, default high effort); tool use yes; structured_outputs yes; JSON mode not separately advertised (temperature/top_p/top_k non-default returns 400).
- **Pricing (as of 2026-10-16):** Input $2/MTok, Output $10/MTok; 5m cache write $2.50/MTok, 1h cache write $4/MTok, cache read $0.20/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic system card; Vals AI 74.5%)
- Terminal-Bench 3.0: **14.6%** (frontierbench.ai)
- BrowseComp: **84.7%** (Anthropic system card)
- HLE w/ tools: **57.4%** (Anthropic system card)
- OSWorld-Verified: **81.2%** (Anthropic system card)
- GDPval-AA: **1603 Elo** (Anthropic system card; AA normalized 48.2%)
- AA Agentic Index: **44.3%** (Artificial Analysis)
- ApprenticeBench: **16%** (NeoCognition)

Reasoning / knowledge:

- HLE: **57.4%** (Anthropic system card); HLE w/o tools: **43.2%**; HLE-Verified **31.0%** (DeepMind card cross-ref); AA-HLE **41.3%**
- GPQA Diamond: **91.1%** (Artificial Analysis); **88.9%** (Vals AI)
- MMLU-Pro: **87.5%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **65.614%**; Tier 4: **29.268%** (Epoch AI)
- Artificial Analysis Intelligence Index: **38.2%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **82.0%** (Artificial Analysis)
- CritPt: **16.9%** (Artificial Analysis)
- AA-Omniscience Index **16.5%**; Accuracy **40.1%**; Hallucination rate **39.4%** (AA)
- IFBench: not found for this variant

Coding:

- SWE-bench Verified: **85.2%** (Anthropic system card)
- SWE-bench Pro: **63.2%** (Anthropic system card)
- SWE Multilingual: **78.3%**; SWE Multimodal: **28.1%** (Anthropic system card)
- LiveCodeBench Vals: **82.4%**; SWE-bench Vals: **79.6%** (Vals AI)
- FrontierCode 1.1 Main: **42.7%** (Cognition)
- CursorBench 3.2: **61.5%**; CursorBench 4.0: **34.1%** (Cursor evals)
- AA-SciCode: **54.3%** (Artificial Analysis)
- AA Coding Index: **71.5%** (Artificial Analysis)
- VulcanBench CII v1: **89.2%** (VulcanBench frontier results)

Multimodal & grounded:

- CharXiv: **88.3%**; CharXiv w/o tools: **77%** (Anthropic system card)
- AA-MMMU-Pro: **77.3%** (Artificial Analysis)
- Design Arena Website: **1276** (OpenRouter)

Long context:

- AA-LCR: **82.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Strong Terminal-Bench 2.1 (80.4), BrowseComp (84.7), OSWorld-Verified (81.2), GDPval-AA (1603 Elo); capped by weak Terminal-Bench 3.0 (14.6), ApprenticeBench (16%). Solid terminal/browse agent profile.
- **Reasoning: 72/100.** GPQA 91.1%, MMLU-Pro 87.5%, HLE 57.4%, AA-LCR 82.0%; capped by CritPt (16.9), AA-Omniscience accuracy (40.1%), HLE-Verified (31.0%), Intelligence Index (38.2%). Good knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M beyond AA-LCR.
- **Multimodal: 74/100.** Text+images→text; CharXiv 88.3%, AA-MMMU-Pro 77.3%; capped by text-only output.
- **Coding: 74/100.** SWE-bench Verified 85.2%, LiveCodeBench Vals 82.4%, VulcanBench CII v1 89.2%; capped by SWE-bench Pro (63.2), FrontierCode Main (42.7), CursorBench 4.0 (34.1). Strong verified coding, weaker agentic SWE-Pro.
- **Cost efficiency: 75/100.** $2/$10 with 50% batch discount; not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (78 + 72 + 88 + 74 + 74) / 5 = 77.2 → 77. Best-fit recommendation: solid legacy Sonnet coding/agent model; superseded by Sonnet 5.5 — prefer newer Sonnet for new work unless legacy pinning required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + benchlm.ai + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
