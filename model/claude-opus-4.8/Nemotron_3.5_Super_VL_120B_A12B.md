# Claude Opus 4.8 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/claude-opus-4-8 (Anthropic system card), llm-stats.com, Artificial Analysis, ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus-class model (released 28 May 2026) for agentic and tool-use work, long-context reasoning, math, and biology QA; 1M context / max output per Anthropic API, multimodal input, $5/$25 per MTok, knowledge cutoff not stated in fetched sources.
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API. Legacy model (succeeded by Opus 5 / Opus 5.5).
- **Release / knowledge:** Released 2026-05-28; Fast mode 3x cheaper than Opus 4.7 per codersera launch guide.
- **IDs:** `claude-opus-4-8` (API); no Free ID confirmed.
- **Context window:** 1M tokens (llm-stats + benchlm.ai).
- **Modalities:** Multimodal input (text + images); text out; reasoning yes (adaptive thinking / max-effort); tool use yes (MCP Atlas, dynamic workflows); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Input $5/MTok, Output $25/MTok; cached input $0.500/M; unchanged from Opus 4.7.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic system card; Vals AI 71.9%)
- Terminal-Bench 3.0: **21.1%** (frontierbench.ai)
- BrowseComp: **84.3%** (Anthropic system card)
- DeepSearchQA: **93.1%** (Anthropic system card)
- OSWorld-Verified: **83.4%** (Anthropic system card); OSWorld 2.0 **20.6%** (arxiv paper)
- Finance Agent v2: **53.9%** (Anthropic system card)
- MCP Atlas: **82.2%** (Anthropic system card)
- Toolathlon: **59.9%** (Anthropic system card)
- GDPval-AA: **1593 Elo** (Anthropic system card; AA normalized 47.7%)
- AA Agentic Index: **42.6%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA: **93.6%**; GPQA-D: **93.6%** (Anthropic system card); AA-GPQA Diamond **92.0%**; Vals **92.4%**
- HLE: **57.9%**; HLE w/o tools **49.8%** (Anthropic system card); AA-HLE **48.7%**
- MMLU-Pro: **89.6%** (Vals AI)
- USAMO 2026: **96.7%** (Anthropic system card)
- ARC-AGI-1: **92.50%** (Max, ARC Prize); ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (ARC Prize)
- Artificial Analysis Intelligence Index: **41.8%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **77.7%** (Artificial Analysis)
- CritPt: **20.9%** (Artificial Analysis)
- AA-Omniscience Index **28.8%**; Accuracy **48.8%**; Hallucination rate **39.3%** (AA)
- FrontierMath v2 Tiers 1-3: **80.000%**; Tier 4: **56.098%** (Epoch AI)

Coding:

- SWE-bench Verified: **88.6%** (Anthropic system card; Vals AI 88.6%)
- SWE-bench Pro: **69.2%** (Anthropic system card)
- SWE Multilingual: **84.4%**; SWE Multimodal: **38.4%** (Anthropic system card)
- LiveCodeBench (Vals): **87.8%** (Vals AI)
- CursorBench 3.1: **58.4%**; CursorBench 3.2: **62.3%** (Cursor evals)
- AA-SciCode: **54.4%** (Artificial Analysis)
- FrontierCode 1.1 Main: **46.5%** (Cognition)
- AA Coding Index: **74.3%** (Artificial Analysis)
- PostTrainBench v1.1: **32.9%** (public leaderboard)

Multimodal & grounded:

- ScreenSpot Pro: **87.9%** (Anthropic system card)
- CharXiv: **89.9%**; CharXiv w/o tools: **80.5%** (Anthropic system card)
- OfficeQA Pro: **66.2%** (Anthropic system card)
- Design Arena Website: **1260** (OpenRouter)

Long context:

- AA-LCR: **77.7%**; MLCR-AA not found; τ²-bench results **94.4%** (Artificial Analysis); declared 1M context.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 83/100.** Leading OSWorld-Verified (83.4), DeepSearchQA (93.1), BrowseComp (84.3), GDPval-AA (1593 Elo); capped by weak AutomationBench-class results and Agents'-style agent tasks not reported.
- **Reasoning: 80/100.** USAMO 2026 96.7%, GPQA 93.6%, ARC-AGI-1 92.50%, FrontierMath T1-3 80%; capped by ARC-AGI-3 (1.5%), CritPt (20.9), AA-Omniscience accuracy (48.8%). Elite math/science reasoning, brittle on hardest open-ended problems.
- **Context window: 88/100.** Verified 1M tokens; AA-LCR 77.7% and τ²-bench 94.4% show strong long-context reasoning; capped because no public full-depth needle-recall score at 1M.
- **Multimodal: 84/100.** Multimodal input; ScreenSpot Pro 87.9%, CharXiv 89.9%, OfficeQA Pro 66.2%; capped by text-only output.
- **Coding: 87/100.** SWE-bench Verified 88.6% / Vals 88.6%, LiveCodeBench Vals 87.8%, SWE Multilingual 84.4%; capped by FrontierCode 1.1 Main (46.5), PostTrainBench (32.9), SWE Multimodal (38.4). Elite verified SWE.
- **Cost efficiency: 60/100.** $5/$25 premium pricing; not counted toward Overall.
- **Overall Score: 84/100.** Half-up mean of (83 + 80 + 88 + 84 + 87) / 5 = 84.4 → 84. Best-fit recommendation: elite coding + science/math reasoning model; superseded by Opus 5/5.5 ($4/$20, higher scores) — prefer newer Opus for new work unless legacy pinning required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Anthropic system card + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
