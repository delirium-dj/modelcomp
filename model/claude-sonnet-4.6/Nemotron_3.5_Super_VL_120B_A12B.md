# Claude Sonnet 4.6 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/sonnet-4-6/overview`), benchlm.ai/models/claude-sonnet-4-6, Artificial Analysis (`artificialanalysis.ai/models/claude-sonnet-4-6`), Vals AI, Epoch AI, ARC Prize
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's legacy Sonnet-class model (released 17 Feb 2026, superseded by Claude Sonnet 5.5) for complex professional work; 1M context / 128K max output, adaptive thinking (default high, extended thinking deprecated), text+images→text, $3/$15 per MTok, knowledge cutoff Aug 2025.
- **Provider / access:** Claude API (`claude-sonnet-4-6`), Amazon Bedrock Legacy (`anthropic.claude-sonnet-4-6` via InvokeModel), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API. Legacy model (migration to Sonnet 5.5 recommended).
- **Release / knowledge:** Released 2026-02-17; legacy but active; knowledge cutoff Aug 2025 / training cutoff Jan 2026; retirement not sooner than 2027-02-17.
- **IDs:** `claude-sonnet-4-6` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-sonnet-4-6` (Bedrock Legacy). No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking, default high effort, extended thinking deprecated); tool use yes; structured_outputs yes; JSON mode not separately advertised (temperature/top_p/top_k non-default returns 400).
- **Pricing (as of 2026-10-16):** Input $3/MTok, Output $15/MTok; 5m cache write $3.75/MTok, 1h cache write $6/MTok, cache read $0.30/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (Anthropic system card)
- BrowseComp: not found for this variant
- OSWorld-Verified: **72.1%** (Anthropic system card); OSWorld 2.0: **8.3%** (OSWorld 2.0 paper)
- τ²-bench results: **79.5%** (Artificial Analysis)
- Claw-Eval: **67.8%** (leaderboard)
- CyberGym: **65.2%** (leaderboard)
- JobBench: **36.9%** (paper)
- ResearchClawBench: not found for this variant
- ApprenticeBench: **2%** (NeoCognition)
- MazeBench: **0%** (leaderboard)

Reasoning / knowledge:

- GPQA: **89.9%** (Anthropic system card); AA-GPQA Diamond **79.9%**; Vals **85.6%**
- HLE: **49%** (Anthropic system card); AA-HLE **13.3%**
- MMLU-Pro: **87.3%** (Vals AI)
- ARC-AGI-1: **86.00%** (Max, ARC Prize verified); ARC-AGI-2: **58.3%** (ARC Prize)
- Artificial Analysis Intelligence Index: **24.7%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **68.3%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis)
- AA-Omniscience Index **-3.5%**; Accuracy **38.6%**; Hallucination rate **68.5%** (AA)
- IFBench: **41.2%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **34.386%** (Epoch AI)

Coding:

- SWE-bench Verified: **79.6%** (Anthropic system card)
- SWE-Rebench: **60.7%** (leaderboard)
- React Native Evals: **80.6%** (leaderboard)
- Terminal-Bench 2.0: **59.1%** (Anthropic system card)
- Vibe Code Bench: **51.48%** (Vals AI)
- CursorBench 3.1: **48.8%** (Cursor evals)
- FrontierCode 1.1 Main: **24.3%** (Cognition)
- LiveCodeBench (Vals): **82.1%**; SWE-bench (Vals): **77.4%** (Vals AI)
- FrontierCode 1.1 Main: **24.3%** (Cognition)

Multimodal & grounded:

- CharXiv: **77.4%** (Anthropic system card)
- AA-MMMU-Pro: **70.6%** (Artificial Analysis)
- Design Arena Website: **1286** (OpenRouter)

Long context:

- AA-LCR: **68.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is moderate (benchlm 40 of 638 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 66/100.** Terminal-Bench 2.0 (59.1), Claw-Eval (67.8), CyberGym (65.2), τ²-bench (79.5%); capped by weak ApprenticeBench (2%), MazeBench (0%), OSWorld 2.0 (8.3%).
- **Reasoning: 64/100.** GPQA 89.9%, MMLU-Pro 87.3%, ARC-AGI-1 86.00%, FrontierMath T1-3 34.4%, AA-LCR 68.3%; capped by CritPt (0.9%), HLE (49%), AA-Omniscience accuracy (38.6%), Intelligence Index (24.7%). Strong math knowledge, weak HLE/open-ended reasoning.
- **Context window: 88/100.** Verified 1M tokens (platform docs); AA-LCR 68.3%; capped because no public full-depth retrieval score at 1M.
- **Multimodal: 72/100.** Text+images→text; CharXiv 77.4%, AA-MMMU-Pro 70.6%; capped by text-only output.
- **Coding: 66/100.** SWE-bench Verified 79.6%, React Native Evals 80.6%, LiveCodeBench Vals 82.1%; capped by FrontierCode Main (24.3%), CursorBench 3.1 (48.8%), Vibe Code Bench (51.48%). Strong verified coding, weaker agentic coding suites.
- **Cost efficiency: 55/100.** $3/$15 with 50% batch discount; not counted toward Overall.
- **Overall Score: 71/100.** Half-up mean of (66 + 64 + 88 + 72 + 66) / 5 = 71.2 → 71. Best-fit recommendation: legacy Sonnet model strong on verified coding (SWE-bench/LiveCodeBench); superseded by Sonnet 5/5.5 — prefer newer Sonnet for new work unless legacy pinning required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + benchlm.ai + Artificial Analysis + Vals AI + Epoch AI + ARC Prize independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
