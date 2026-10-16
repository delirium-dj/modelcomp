# Claude Opus 4.7 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/opus-4-7/overview`), benchlm.ai/models/claude-opus-4-7, Artificial Analysis (`artificialanalysis.ai/models/claude-opus-4-7-non-reasoning`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus-class model (released 16 Apr 2026, legacy — superseded by Claude Opus 5.5) for complex professional work; 1M context / 128K max output, adaptive thinking (default high), text+images→text, $5/$25 per MTok, knowledge cutoff Jan 2026.
- **Provider / access:** Claude API (`claude-opus-4-7`), Amazon Bedrock (`anthropic.claude-opus-4-7`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API. Legacy model (migration to Opus 5.5 recommended).
- **Release / knowledge:** Released 2026-04-16; legacy (active but migration to Opus 5.5 recommended); knowledge/training cutoff Jan 2026; retirement not sooner than 2027-04-16.
- **IDs:** `claude-opus-4-7` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-opus-4-7` (Bedrock). No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking, default high effort); tool use yes; structured_outputs yes; JSON mode not separately advertised.
- **Pricing (as of 2026-10-16):** Input $5/MTok, Output $25/MTok; 5m cache write $6.25/MTok, 1h cache write $10/MTok, cache read $0.50/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **74%** (Artificial Analysis)
- OSWorld 2.0: **13.9%** (OSWorld 2.0 paper)
- Terminal-Bench 2.1: **68.5%** (Vals AI)
- ResearchClawBench: **20.7%** (leaderboard)
- ApprenticeBench: **7%** (NeoCognition)

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Artificial Analysis); **90.2%** (Vals AI)
- MMLU-Pro: **89.9%** (Vals AI)
- HLE: **33.3%** (AA-HLE)
- FrontierMath v2 Tiers 1-3: **70.175%**; Tier 4: **31.707%** (Epoch AI)
- Artificial Analysis Intelligence Index: **30.9%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **75.7%** (Artificial Analysis)
- CritPt: **5.1%** (Artificial Analysis)
- AA-Omniscience Index **14.8%**; Accuracy **44.7%**; Hallucination rate **54.1%** (AA)
- IFBench: **43.6%** (Artificial Analysis)

Coding:

- LiveCodeBench (Vals): **85.1%** (Vals AI)
- SWE-bench (Vals): **82.0%** (Vals AI)
- Vibe Code Bench: **71.00%** (Vals AI)
- React Native Evals: **82.8%** (leaderboard)
- FrontierCode 1.1 Main: **38.5%** (Cognition)
- AA-SciCode not found for this variant
- PostTrainBench v1.1: **28.6%** (public leaderboard)

Multimodal & grounded:

- AA-MMMU-Pro: **76.4%** (Artificial Analysis)
- Text+images→text per platform docs; no OfficeQA/ScreenSpot/CharXiv numbers found for this exact model.

Long context:

- AA-LCR: **75.7%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 26 of 638 slots); dims rest heavily on Artificial Analysis and Vals AI.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** τ²-bench 74%, Terminal-Bench 2.1 68.5%; capped by very weak OSWorld 2.0 (13.9%), ResearchClawBench (20.7%), ApprenticeBench (7%), no MCP/Toolathlon numbers found for this model.
- **Reasoning: 68/100.** GPQA 88.5–90.2%, MMLU-Pro 89.9%, FrontierMath T1-3 70.2%, AA-LCR 75.7%; capped by CritPt (5.1), HLE (33.3%), AA-Omniscience accuracy (44.7%), Intelligence Index (30.9). Strong knowledge reasoning, weak on hardest open-ended problems.
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M beyond AA-LCR.
- **Multimodal: 68/100.** Text+images→text; AA-MMMU-Pro 76.4%; capped by text-only output and thin vision benchmark coverage.
- **Coding: 73/100.** LiveCodeBench Vals 85.1%, SWE-bench Vals 82.0%, React Native Evals 82.8%, Vibe Code Bench 71.0%; capped by FrontierCode Main (38.5), PostTrainBench (28.6). Strong evals coding, weaker frontier/agentic coding suites.
- **Cost efficiency: 55/100.** $5/$25 with 50% batch discount; not counted toward Overall.
- **Overall Score: 72/100.** Half-up mean of (65 + 68 + 88 + 68 + 73) / 5 = 72.4 → 72. Best-fit recommendation: legacy Opus-class model strong on evals coding and τ²-bench; superseded by Opus 5/5.5 — prefer newer Opus for new work unless legacy pinning required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + benchlm.ai + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
