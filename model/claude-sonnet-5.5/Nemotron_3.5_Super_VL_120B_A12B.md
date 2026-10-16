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

Coding:

- No verified public scores found for: SWE-bench, LiveCodeBench, DeepSWE, FrontierCode — not reported in fetched sources for this exact model.

Multimodal:

- Text + images in, text out; no image/audio/video output. No verified public multimodal benchmark scores (MMMU-Pro, Chartography, etc.) found in fetched sources.

Long context:

- Declared 1M tokens (verified on Anthropic platform docs); no public long-context retrieval score found for this exact model.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage for this model is thinner than for Opus 5.5; several dims rest primarily on the AA Intelligence Index and declared specs.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Terminal-Bench 4.0 70.6% plus rich native tool set (computer use, MCP, hosted_shell, code_interpreter, web/file_search); capped by thin independent benchmark coverage and no OSWorld/AutomationBench figures found for this exact model.
- **Reasoning: 78/100.** AA Intelligence Index 56 (#2/217, well above median 27) is the primary evidence; capped by absence of public GPQA/HLE/ARC-AGI/CritPt scores for this exact model.
- **Context window: 88/100.** Verified 1M tokens (platform docs) with 128K max output; capped because no public full-depth retrieval score at 1M found for this exact model.
- **Multimodal: 70/100.** Text+images→text; no verified public multimodal benchmark (MMMU-Pro/Chartography) found for this exact model; capped by text-only output and no audio/video input.
- **Coding: 74/100.** Positioned as strong at building features/fixing bugs per Anthropic; Terminal-Bench 4.0 70.6%; capped by absence of public SWE-bench/LiveCodeBench/DeepSWE scores for this exact model.
- **Cost efficiency: 80/100.** $2/$10 with 95% cache discount and 50% batch discount — strong value; not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (75 + 78 + 88 + 70 + 74) / 5 = 77.0 → 77. Best-fit recommendation: fast, well-priced mid-tier reasoning model for everyday scoped work; Opus 5.5 is the stronger but pricier alternative for demanding tasks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic platform docs + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
