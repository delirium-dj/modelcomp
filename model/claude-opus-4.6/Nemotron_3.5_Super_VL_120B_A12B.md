# Claude Opus 4.6 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/opus-4-6/overview`), benchlm.ai/models/claude-opus-4-6, Artificial Analysis (`artificialanalysis.ai/models/claude-opus-4-6`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's legacy Opus-class model (released 5 Feb 2026, superseded by Claude Opus 5.5) for complex professional work; 1M context / 128K max output, adaptive thinking (default high, extended thinking deprecated), text+images→text, $5/$25 per MTok, knowledge cutoff May 2025.
- **Provider / access:** Claude API (`claude-opus-4-6`), Amazon Bedrock Legacy (`anthropic.claude-opus-4-6-v1` via InvokeModel), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API. Legacy model (migration to Opus 5.5 recommended).
- **Release / knowledge:** Released 2026-02-05; legacy but active; knowledge/training cutoff May 2025 / Aug 2025; retirement not sooner than 2027-02-05.
- **IDs:** `claude-opus-4-6` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-opus-4-6-v1` (Bedrock Legacy). No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking, default high effort, extended thinking deprecated); tool use yes; structured_outputs yes; JSON mode not separately advertised.
- **Pricing (as of 2026-10-16):** Input $5/MTok, Output $25/MTok; 5m cache write $6.25/MTok, 1h cache write $10/MTok, cache read $0.50/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (Anthropic system card)
- BrowseComp: **83.7%** (Claude Mythos Preview system card)
- OSWorld-Verified: **72.7%** (Anthropic system card)
- τ²-bench results: **84.8%** (Artificial Analysis)
- AndroidWorld: **62.0%** (Qwen3.8-27B model card comparison)
- Claw-Eval: **70.4%** (leaderboard)
- DeepSearchQA: **73.7%** (Meta AI Muse Spark chart)
- CyberGym: **66.6%** (leaderboard)
- JobBench: **36.7%** (paper)
- ResearchClawBench: **19.9%** (leaderboard)
- ApprenticeBench: **5%** (NeoCognition)

Reasoning / knowledge:

- GPQA: **91.3%**; GPQA-D: **89.2%** (Arcee comparison); AA-GPQA Diamond **84.0%**
- HLE: **53%** (Anthropic system card); HLE w/o tools: **40%** (Meta AI chart); AA-HLE **19.1%**
- MMLU-Pro: **89.1%** (Arcee); **82%** (Qwen3.6-Plus chart)
- SuperGPQA: **95%** (Qwen3.6-Plus chart)
- AIME25 (Arcee): **99.8%** (Arcee comparison)
- FrontierMath v2 Tiers 1-3: **65.965%**; Tier 4: **26.829%** (Epoch AI)
- Artificial Analysis Intelligence Index: **26.4%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **67.0%** (Artificial Analysis)
- CritPt: **2.8%** (Artificial Analysis)
- AA-Omniscience Index **2.4%**; Accuracy **45.8%**; Hallucination rate **80.1%** (AA)
- IFBench: **44.6%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **80.8%** (Anthropic system card); **75.6%** (Arcee comparison)
- SWE-bench Pro: **53.4%** (Meta AI Muse Spark chart)
- SWE-Rebench: **65.3%** (leaderboard)
- LiveCodeBench Pro: **70.7%** (Meta AI Muse Spark chart)
- React Native Evals: **84.1%** (leaderboard)
- Terminal-Bench 2.0: **65.4%** (Anthropic system card)
- Vibe Code Bench: **57.57%** (Vals AI)
- FrontierCode 1.1 Main: **26.9%** (Cognition)
- PostTrainBench v1.1: not found for this variant

Multimodal & grounded:

- MMMU-Pro: **77.3%** (Anthropic system card); AA-MMMU-Pro **72.5%**
- ERQA: **51.6%**; ScreenSpot Pro: **83.1%**; MedXpertQA MM: **64.8%** (Meta AI chart)
- Design Arena Website: **1293** (OpenRouter)

Long context:

- AA-LCR: **67.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is moderate (benchlm 48 of 638 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Strong τ²-bench (84.8), BrowseComp (83.7), OSWorld-Verified (72.7), Claw-Eval (70.4), DeepSearchQA (73.7); capped by weak JobBench (36.7), ResearchClawBench (19.9%), ApprenticeBench (5%), no MCP/Toolathlon numbers found for this model.
- **Reasoning: 66/100.** GPQA 91.3%, MMLU-Pro 89.1%, AIME25 99.8%, FrontierMath T1-3 66.0%, AA-LCR 67.0%; capped by CritPt (2.8), HLE (40–53%), AA-Omniscience accuracy (45.8%), Intelligence Index (26.4). Strong math knowledge, weakest on HLE-style open-ended reasoning.
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M beyond AA-LCR.
- **Multimodal: 72/100.** Text+images→text; MMMU-Pro 77.3%, ScreenSpot Pro 83.1%, ERQA 51.6%; capped by text-only output and thin vision coverage.
- **Coding: 68/100.** SWE-bench Verified 80.8%, React Native Evals 84.1%, LiveCodeBench Pro 70.7%; capped by FrontierCode Main (26.9), SWE-bench Pro (53.4), Vibe Code Bench (57.57). Strong evals coding, weaker frontier coding suites.
- **Cost efficiency: 55/100.** $5/$25 with 50% batch discount; not counted toward Overall.
- **Overall Score: 73/100.** Half-up mean of (70 + 66 + 88 + 72 + 68) / 5 = 72.8 → 73. Best-fit recommendation: legacy Opus model strong on τ²-bench and evals coding; superseded by Opus 5/5.5 — prefer newer Opus for new work unless legacy pinning required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + benchlm.ai + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
