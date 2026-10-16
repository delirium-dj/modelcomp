# Claude Opus 5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/opus-5/overview`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/models/claude-opus-5`), ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-class flagship (released 24 July 2026, now legacy — superseded by Claude Opus 5.5) for agentic coding, computer use, and long-horizon knowledge work; 1M context / 128K max output, adaptive thinking (default high), text+images→text, $5/$25 per MTok, knowledge cutoff May 2026.
- **Provider / access:** Claude API (`claude-opus-5`), Amazon Bedrock (`anthropic.claude-opus-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API.
- **Release / knowledge:** Released 2026-07-24; legacy model (migration to Opus 5.5 recommended); knowledge/training cutoff May 2026; retirement not sooner than 2027-07-24.
- **IDs:** `claude-opus-5` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-opus-5` (Bedrock). No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking, default high effort); tool use yes; structured_outputs yes; JSON mode not separately advertised.
- **Pricing (as of 2026-10-16):** Input $5/MTok, Output $25/MTok; 5m cache write $6.25/MTok, 1h cache write $10/MTok, cache read $0.50/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.8%** (10-agent prerelease 93.6%) (Anthropic system card)
- HLE w/ tools: **64.7%** (Anthropic system card)
- DeepSearchQA: **95.0%** (Anthropic launch)
- DRACO: **88.6%** (Anthropic system card)
- OSWorld 2.0: **70.6%** (Anthropic system card)
- MCP Atlas: **85.8%**; claim coverage **89.1%** (Anthropic system card)
- GDPval-AA: **1862 Elo** (Anthropic system card; AA normalized 61.1%)
- Toolathlon-Verified: **80.6%**; Pass@3 **87.0%**; Pass³ **73.1%**; avg. turns **23.5** (Anthropic system card)
- AutomationBench: **26.0%** (Anthropic system card)
- AA Briefcase Elo: **1720** (Anthropic system card)
- Terminal-Bench 2.1: **84.6%** (Vals AI)
- AA Agentic Index: **56.2%** (Artificial Analysis)

Reasoning / knowledge:

- HLE: **64.7%**; HLE w/o tools: **56.3%**; HLE-Verified **54.4%** (Anthropic system card / DeepMind card cross-ref)
- GPQA Diamond: **93.2%** (Artificial Analysis); GPQA Diamond Vals **93.4%**
- MMLU-Pro: **91.6%** (Vals AI)
- ARC-AGI-1: **97.50%**; ARC-AGI-2: **90.4%**; ARC-AGI-3: **30.2%** (Anthropic system card)
- AA Intelligence Index: **50.8%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **79.3%** (Artificial Analysis)
- CritPt: **29.1%** (Artificial Analysis)
- MLCR-AA: **55.6%** (Artificial Analysis)
- AA-Omniscience Index **37.1%**; Accuracy **60.9%**; Hallucination rate **60.8%** (AA)

Coding:

- SWE-bench Verified: **96%** (Anthropic system card); SWE-bench (Vals): **97.0%** (Vals AI)
- SWE-bench Pro: **79.2%**; SWE Multilingual: **89.5%**; SWE Multimodal: **59.4%** (Anthropic system card)
- DeepSWE: **68.8%** (Anthropic system card)
- FrontierCode 1.1 Main: **53.4%**; Extended: **63.6%** (Anthropic system card)
- ProgramBench: **93.0%** (episode 1: 83.0%) (Anthropic system card)
- LiveCodeBench (Vals): **89.0%** (Vals AI)
- CursorBench 3.2: **70.0%**; CursorBench 4.0: **46.6%** (Cursor evals)
- AA-SciCode: **56.4%** (Artificial Analysis)
- AA Coding Index: **78.0%** (Artificial Analysis)
- FrontierSWE v2: **52.0%** (Proximal)

Multimodal & grounded:

- Chartography (tools): **83.0%**; Chartography (no tools): **29.6%** (Anthropic system card)
- GDP.pdf (tools): **85.5%**; GDP.pdf (no tools): **83.4%** (Anthropic system card)
- OfficeQA: **78.1%**; OfficeQA Pro: **66.9%** (Anthropic system card)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis)
- BenchCAD Vision2Code (tools): **0.821**; (no tools): **0.366** (Anthropic system card)
- Design Arena Website: **1310** (OpenRouter)

Long context:

- AA-LCR: **79.3%**; MLCR-AA: **55.6%** (Artificial Analysis); declared 1M context; no public MRCR/full-depth needle recall score for Opus 5 specifically.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 86/100.** Leading BrowseComp (90.8), DeepSearchQA (95.0), MCP Atlas (85.8), GDPval-AA (1862 Elo), Toolathlon (80.6); capped by weak AutomationBench (26.0). Premier agentic tool-use model.
- **Reasoning: 82/100.** ARC-AGI-1 97.50%, ARC-AGI-2 90.4%, GPQA 93.2%, IMO 2026 42/42, FrontierMath T1-3 85.6%; capped by CritPt (29.1), ARC-AGI-3 (30.2), AA-Omniscience accuracy (60.9%). Strong math/knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M for Opus 5 specifically.
- **Multimodal: 74/100.** Text+images→text; strong Chartography tools (83.0), GDP.pdf tools (85.5), MMMU-Pro (84.7); capped by very weak no-tools Chartography (29.6) and BenchCAD no-tools (0.366) — heavy tool dependence for vision.
- **Coding: 88/100.** SWE-bench Verified 96% / Vals 97.0%, ProgramBench 93.0%, LiveCodeBench Vals 89.0%, SWE Multilingual 89.5%; capped by FrontierCode Main (53.4), FrontierSWE v2 (52.0), CursorBench 4.0 (46.6). Elite verified SWE, weaker on extended agentic coding suites.
- **Cost efficiency: 55/100.** $5/$25 with 50% batch discount; not counted toward Overall.
- **Overall Score: 84/100.** Half-up mean of (86 + 82 + 88 + 74 + 88) / 5 = 83.6 → 84. Best-fit recommendation: top-tier agentic coding and tool-use model; superseded by Opus 5.5 ($4/$20, higher scores) — prefer Opus 5.5 for new work unless legacy pinning is required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
