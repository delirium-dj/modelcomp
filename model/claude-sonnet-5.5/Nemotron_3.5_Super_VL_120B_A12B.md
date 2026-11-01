# Claude Sonnet 5.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`platform.claude.com/docs/en/models/sonnet-5-5/overview`), Artificial Analysis (`artificialanalysis.ai/models/claude-sonnet-5-5`), Anthropic announcement (`anthropic.com/claude-sonnet-5-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class mid-tier model (released 28 Sept 2026) offering the best combination of speed and intelligence; runs 30%+ faster and up to 30% cheaper than Sonnet 5; 1M context / 128K max output, adaptive thinking (default high), text+images→text, $2/$10 per MTok, knowledge cutoff Jun 2026.
- **Provider / access:** Claude API (`claude-sonnet-5-5`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; Anthropic Messages API; available via 9 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-28; active (latest); knowledge/training cutoff Jun 2026; retirement not sooner than 2027-09-28.
- **IDs:** `claude-sonnet-5-5` (Claude API, Vertex, Foundry, AWS); `anthropic.claude-sonnet-5-5` (Bedrock). No Free ID confirmed.
- **Context window:** 1M tokens; max output 128K tokens (300K on Batch API beta). Verified on Anthropic platform docs.
- **Modalities:** Text and images in; text out; reasoning yes (adaptive thinking on by default, `between_tools` lowest setting turns off up-front thinking, works at high effort or below); tool use yes (forced tool use returns an error); structured_outputs yes; temperature/top_p/top_k non-default returns 400.
- **Pricing (as of 2026-10-16):** Input $2/MTok, Output $10/MTok; 5m cache write $2.50/MTok, 1h cache write $4/MTok, cache read $0.10/MTok; Batch API 50% off.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** (#2 of 217 models; median 27) (Artificial Analysis, independent)
- Speed: **137.7 output tokens/sec** (#34 of 186) (Artificial Analysis)
- TTFT: **379.59s** (high — reflects thinking time) (Artificial Analysis)
- Verbosity: **420M output tokens** on Intelligence Index (very verbose vs 87M median) (Artificial Analysis)

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (third-party report, digitalapplied.com)
- Cache discount: **95%** (Artificial Analysis)
- Cost per Intelligence Index task: **$5.46** (Artificial Analysis)

Reasoning / knowledge (additional, independent):

- No verified public scores found for: GPQA Diamond, HLE, ARC-AGI, MMLU-Pro, CritPt, AA-Omniscience, AA-LCR — not reported in fetched sources for this exact model.
- SWE-bench Verified: **88.3%** estimated ± 0.8 pp (benchgap.net)
- SWE-bench Pro: **81.3%** measured (benchgap.net)
- LiveCodeBench v6: **97.3%** estimated ± 2.7 pp (benchgap.net)
- JobBench: **74.4%** estimated ± 8.7 pp (benchgap.net)
- GDPval-AA: **66.9%** measured (benchgap.net)
- HLE: **64.7%** estimated ± 6.6 pp (benchgap.net)
- MMLU-Pro: **86.0%** estimated ± 2.5 pp / AA MMLU-Pro **89.0%** estimated (benchgap.net)
- OSWorld-Verified: **83.0%** estimated ± 8.1 pp (benchgap.net)
- Terminal-Bench 2.1: **87.4%** estimated ± 5.2 pp (benchgap.net)
- DeepSearchQA: **89.7%** estimated ± 9.6 pp (benchgap.net)
- OSWorld 2.1: **80.1%** measured (benchgap.net)
- Toolathlon-Verified: **77.8%** measured (benchgap.net)
- Vibe Code Bench: **75.0%** estimated ± 5.6 pp (benchgap.net)
- ProgramBench: **79.7%** measured (benchgap.net)
- AA Intelligence Index: **54.2%** measured (benchgap.net)
- AA Coding Index: **83.0%** estimated ± 1.0 pp (benchgap.net)
- BrowseComp: **90.1%** estimated ± 3.9 pp (benchgap.net)

Coding:

- No verified public scores found for: SWE-bench, LiveCodeBench, DeepSWE, FrontierCode — not reported in fetched sources for this exact model.
- DeepSWE: **71.0%** measured (benchgap.net)
- CursorBench 4.0: **55.5%** estimated ± 1.6 pp (benchgap.net)
- FrontierCode 1.1 Main: **46.2%** measured (benchgap.net)
- FrontierSWE v2: **61.9%** measured (benchgap.net)

Multimodal:

- Text + images in, text out; no image/audio/video output. No verified public multimodal benchmark scores (MMMU-Pro, Chartography, etc.) found in fetched sources.

Long context:

- Declared 1M tokens (verified on Anthropic platform docs); no public long-context retrieval score found for this exact model.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage for this model is thinner than for Opus 5.5; several dims rest primarily on the AA Intelligence Index and declared specs.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 4.0 70.6% plus rich native tool set (computer use, MCP, hosted_shell, code_interpreter, web/file_search); benchgap.net adds Terminal-Bench 2.1 87.4% estimated, OSWorld-Verified 83.0% estimated, DeepSearchQA 89.7% estimated — strong confirmation of agentic capability. Capped by thin independent OSWorld/AutomationBench figures for this exact model.
- **Reasoning: 78/100.** AA Intelligence Index 56 (#2/217, well above median 27) is the primary evidence; capped by absence of public GPQA/HLE/ARC-AGI/CritPt scores for this exact model.
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M found for this exact model.
- **Multimodal: 70/100.** Text+images→text; no verified public multimodal benchmark (MMMU-Pro/Chartography) found for this exact model; capped by text-only output and no audio/video input.
- **Coding: 78/100.** Positioned as strong at building features/fixing bugs per Anthropic; Terminal-Bench 4.0 70.6%; benchgap.net adds SWE-bench Verified 88.3% estimated, LiveCodeBench v6 97.3% estimated, DeepSWE 71.0% measured, FrontierCode 1.1 Main 46.2% measured, FrontierSWE v2 61.9% measured — strong coding evidence across multiple suites. Capped by absence of public SWE-bench/LiveCodeBench/DeepSWE scores in official Anthropic sources for this exact model (third-party estimates only).
- **Cost efficiency: 80/100.** $2/$10 with 95% cache discount and 50% batch discount — strong value; not counted toward Overall.
- **Overall Score: 78/100.** Half-up mean of (78 + 78 + 88 + 70 + 78) / 5 = 78.4 → 78. Best-fit recommendation: fast, well-priced mid-tier reasoning model for everyday scoped work; Opus 5.5 is the stronger but pricier alternative for demanding tasks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-01
- Method: public internet research (official Anthropic platform docs + benchgap.net independent benchmark aggregation + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Sonnet 5.5 (official platform docs)](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [benchgap.net — Claude Sonnet 5.5 benchmark scores](https://benchgap.net/model/claude-sonnet-5-5) (data as of 2026-10-29)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [benchlm.ai — SWE-bench Pro leaderboard](https://benchlm.ai/benchmarks/swe-bench-pro)
