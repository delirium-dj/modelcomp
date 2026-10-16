# Claude Opus 5.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/opus-5-5/overview`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/articles/claude-opus-5-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus-class flagship (released 2026-09-22) for long-running agentic coding and knowledge work; 1M context / 128K max output, adaptive thinking always on, text+images→text, $4/$20 per MTok, knowledge cutoff Jun 2026.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; OpenAI-compatible not used — Anthropic Messages API.
- **Release / knowledge:** Released 2026-09-22; reliable knowledge / training data cutoff Jun 2026; retirement not sooner than 2027-09-22.
- **IDs:** `claude-opus-5-5` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-opus-5-5` (Bedrock). No Free ID.
- **Context window:** 1M tokens (~555k words); max output 128K tokens synchronous (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking always on, effort low/medium/high/xhigh/max, default medium); tool use yes (forced tool use returns an error); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Input $4/MTok, Output $20/MTok; 5m cache write $5/MTok, 1h cache write $8/MTok, cache read $0.20/MTok; Batch API 50% off input+output. 20% price cut vs Opus 5 ($5/$25).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.40%** (Anthropic launch; AA independent 59.6%)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic launch)
- GDPval-AA v2: **1846 Elo** (Anthropic launch; AA leads on GDPval-AA v2.1)
- AutomationBench: **40.0%** (Anthropic); AA AutomationBench **69.5%**
- HLE w/ tools: **67.7%** (Anthropic launch)
- OSWorld 2.0: **48.7%** (Anthropic system card)
- Toolathlon-Verified: **77.8%**; Pass@3 **82.4%**; Pass³ **72.2%**; avg. turns **26.9** (Anthropic system card)
- AA-Briefcase Elo: **1805** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58** at max effort (#1 measured; benchlm lists 57.6%) (Artificial Analysis, independent)
- HLE w/o tools: **64.4%**; AA-HLE **61.4%** (Anthropic system card / AA)
- AA-Omniscience Index **46.4%**; Accuracy **66.2%**; Hallucination rate **58.6%** (AA)
- CritPt: **31.7%** (AA)
- AA-LCR (long-context reasoning): **84.7%** (AA)
- MLCR-AA: **66.7%** (AA)
- ARC-AGI-1: **97.50%**; ARC-AGI-2: **91.7%** (ARC Prize, verified)
- GraphWalks BFS 256K–1M: **66.8%**

Coding:

- FrontierCode 1.1 Main: **54.4%**; Extended **63.6%** (Anthropic launch / system card)
- AA-SciCode: **66.9%** (AA)
- CursorBench 4.0: **57.8%** (Cursor evals)
- SWE-bench Pro: **89.9%**; SWE Multilingual **93.9%**; SWE Multimodal **61.4%** (Anthropic system card)
- DeepSWE: **74.2%** (Anthropic system card)
- FrontierSWE v2: **62.3%** (Proximal)
- ProgramBench: **91.2%** (Anthropic system card)

Multimodal & grounded:

- Chartography (tools): **89.0%**; Chartography (no tools): **64.4%** (Anthropic launch / system card)
- AA-MMMU-Pro: **87.7%** (AA)
- OfficeQA: **78.9%**; OfficeQA Pro **67.7%** (Anthropic system card)
- Biomedical image analysis: **71.4%** (Anthropic system card)
- BenchCAD Vision2Code: **0.730** (no tools) / **0.962** (tools) (Anthropic system card)

Long context:

- AA-LCR: **84.7%**; MLCR-AA: **66.7%**; GraphWalks BFS 256K–1M: **66.8%**; declared 1M context with no public full-depth needle recall beyond these.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Leading on GDPval-AA (1846 Elo), AA-Briefcase (1805 Elo), Terminal-Bench 4.0 (66.40%), Toolathlon-Verified (77.8%); capped by OSWorld 2.0 (48.7%) and AutomationBench raw (40.0%). Top tier for agentic knowledge work.
- **Reasoning: 82/100.** AA Intelligence Index 58 (#1), ARC-AGI-1 97.50%, HLE 61.4–64.4%, AA-LCR 84.7%; capped by weak CritPt (31.7%) and AA-Omniscience accuracy (66.2%).
- **Context window: 92/100.** Verified 1M tokens with 128K max output (300K batch); capped because no public full-depth retrieval score at the full 1M window.
- **Multimodal: 78/100.** Text+images→text (no video); strong Chartography tools (89.0%), MMMU-Pro (87.7%), OfficeQA (78.9%); capped by absence of video input and moderate no-tools Chartography (64.4%).
- **Coding: 85/100.** SWE-bench Pro 89.9%, ProgramBench 91.2%, SWE Multilingual 93.9%, DeepSWE 74.2%; capped by modest FrontierCode 1.1 Main (54.4%) and FrontierSWE v2 (62.3%).
- **Cost efficiency: 65/100.** $4/$20 with 20% cut vs Opus 5 and 95% cache-read discount; not counted toward Overall.
- **Overall Score: 84/100.** Half-up mean of (85 + 82 + 92 + 78 + 85) / 5 = 84.4 → 84. Best-fit recommendation: leading frontier model for agentic coding and long-horizon knowledge work; justify the $4/$20 price against cheaper Opus 5 / Sonnet 5.5 alternatives.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + benchlm.ai + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
