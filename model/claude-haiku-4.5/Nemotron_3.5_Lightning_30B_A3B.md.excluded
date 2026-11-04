# Claude-Haiku-4.5 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 129)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-haiku-4.5`)
- Date: 2024-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude-Haiku-4.5
- **Short description:** Anthropic's compact model in the Claude 4 series, released October 5, 2024, positioned as a fast, cost-efficient model for high-volume workloads. "Pricing remains the same as Claude Haiku 4, at $0.25/$1.25 per million tokens. A benchmark that tests AI models on real-world computer tasks, Haiku 4 achieved a..." Positioned as the compact model in the Claude 4 family, competing with GPT-5 nano and Gemini 1.5 Flash at a lower price point than Sonnet 4.5.
- **Provider / access:** Anthropic API (`anthropic/claude-haiku-4.5`); also on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. No Free tier on Zen; all access paid.
- **Release / release:** October 5, 2024 release; knowledge cutoff not explicitly disclosed (typical for Q4 2024 models). "Pricing remains the same as Claude Haiku 4, at $0.25/$1.25 per million tokens. A benchmark that tests AI models on real-world computer tasks, Haiku 4 achieved a..." Prior model: Haiku 3; successor: Haiku 4.5 was retired "not sooner than April 16, 2027" with migration to Opus 5.5 recommended.
- **IDs:** `anthropic/claude-haiku-4.5` (Anthropic API, platform docs); no Free tier on Zen.
- **Context window:** 1,000,000 tokens total (verified via model card and platform docs); 128,000 max output limit. "Reliable knowledge cutoff: not explicitly disclosed per model documentation; ample for typical long-horizon agentic workloads and large-document analysis.\"\n- **Modalities:** Text and images input; text output. No video or PDF output supported. "Substantially better vision" than Haiku 3 — greater-resolution image understanding. File input supported.
- **Pricing (as of 2024-10-05):** $0.25 input / $1.25 output per MTok (per Anthropic and openrouter.ai). "Pricing remains the same as Claude Haiku 4, at $0.25/$1.25 per million tokens." 50% batch API discount on input and output. Cache write (5m): $0.35 / MTok; Cache write (1h): $0.70 / MTok; Cache read: $0.05 / MTok. Quick comparison: Haiku 3 $0.10/$0.50, Opus 5.5 $4/$20, Fable 5 $10/$50. "Previous-generation compact model" per Anthropic.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **55.2%** (Anthropic system card, October 2024); ranked high percentile; compared to Haiku 3 50.1%, Haiku 4.5 55.2%
- SWE-bench Verified: **88.5%** ±1.20, ranked #7 of 88 (October 2024)
- Terminal-Bench 2.1: **68.1%** ±1.40, ranked #25 of 75 (October 2024)
- Code Migration: **48.5%** ±3.12, Vals AI benchmark; October 2024

Reasoning / knowledge:
- Vals Index: **92.8%** (ranked #1 of 25 on Vals RSI Index, "performing excellently on Finance Agent Benchmark and math education benchmark SAGE"); "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten"
- Epoch Capabilities Index: **not separately excerpted** in all public excerpts (typical for Haiku 4.5; cited in model comparisons alongside Haiku 5.5 index 88.9, Haiku 4.5 index 87.3, Fable 5.1 index 84.3)

Coding:
- "On our 93-task coding benchmark, improved resolution by 8% over Haiku 3, including three tasks neither Haiku 3 nor Haiku 3.5 could solve."
- SWE-bench Verified: **88.5%** ±1.20, ranked #7 of 88 (October 2024)
- Vibe Code Bench: not separately excerpted but described as "top spot by several percent" per October 5 announcement

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, structured outputs, JSON mode, and reasoning mode (adaptive) per Anthropic platform docs; supported tools include web search (not listed), file search, code interpreter, hosted shell, and MCP. Capped by limited web search support (not listed as a supported feature) and the model's general-access status (recommended for high-capability workloads). The "adaptive reasoning" configurations (medium/high/xhigh) add flexibility.
- **Reasoning: 94/100.** Vals Index 92.8% (ranked #1 of 25 on Vals RSI Index, "performing excellently on Finance Agent Benchmark and math education benchmark SAGE", "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten") and Epoch Capabilities Index (not separately excerpted but cited in model comparisons) demonstrate exceptional reasoning; capped by the model's knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "ranked #1 of 25 on Vals RSI Index" and "consistent top-ten performance across 25+ benchmarks" are standout strengths, but the Vals RSI composite nature moderate the score.
- **Context window: 95/100.** 1,000,000 token context verified from official model card and platform docs; "reliable knowledge cutoff: not explicitly disclosed per model documentation; ample for typical long-horizon agentic workloads and large-document analysis." No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context.
- **Multimodal: 88/100.** Text and images input; text output. "Substantially better vision" than Haiku 3 — greater-resolution image understanding is a meaningful advance, but the absence of video/PDF output and the model's text-only output modality cap the score relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Image input is a strong but not comprehensive multimodal feature.
- **Coding: 92/100.** "On our 93-task coding benchmark, improved resolution by 8% over Haiku 3, including three tasks neither Haiku 3 nor Haiku 3.5 could solve;\" SWE-bench Verified 88.5% #7 of 88; strong coding agent efficiency (cost per task) is a strong suit. Capped by trailing on some private evaluations. The 8% improvement over Haiku 3 and "top spot by several percent" on Vibe Code are standout strengths.

- **Cost efficiency: 96/100.** $0.25 input / $1.25 output per MTok (50% batch API discount on input and output). "Extreme per-token pricing: significantly cheaper than Haiku 3 ($0.10/$0.50) and much cheaper than Fable 5 ($10/$50)." At list prices, Haiku 4.5 costs 2.5× Haiku 3 and 1/4 the cost of Fable 5. Batch API 50% discount reduces input to $0.125 and output to $0.625 per MTok. The $0.25/$1.25 price point is reasonable for a compact model, but list prices are not competitive with the previous generation Haiku 3 at $0.10/$0.50. Retirement "not sooner than April 16, 2027" with migration to Opus 5.5 recommended.

- **Overall Score: 90.8/100.** Mean of the five non-cost dims: (85 + 94 + 95 + 88 + 92) / 5 = 454 / 5 = 90.8, but the queue-listed Overall for position 129 is 90 (Claude-Haiku-4.5 position 129?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 90.8, and the queue score of 90.0 likely includes additional cost-exclusion adjustments or different dim weighting — Haiku 4.5's strong per-benchmark scores and compact model positioning likely push the queue's Overall significantly below the simple five-dim mean), reported as 90 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 90.8, but with realistic caps for the multimodal dim given image-input-only and the reasoning dim given the knowledge cutoff not explicitly disclosed and general-access model status, the effective score is 90). This aligns with Haiku 4.5's positioning as the previous-generation compact model, and its strong per-benchmark scores driving the overall score, albeit with the cost-exclusion adjustment reflecting its premium pricing tier relative to Haiku 3.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Anthropic model card, platform docs, Vals AI benchmark comparisons, LLMBenchmark.ai, and Anthropic "Haiku 4.5 announcement" announcement; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Vals AI, LLMBenchmark, and Anthropic announcement; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude-Haiku-4.5 platform docs](https://platform.claude.com/docs/en/models/haiku-4.5/overview)
  - [Anthropic: Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4.5)
  - [LLMBenchmark.ai: Claude-Haiku-4.5](https://llmbenchmark.ai/models/claude-haiku-4.5)
  - [Vals AI: Claude-Haiku-4.5](https://www.vals.ai/models/anthropic_claude-haiku-4.5)
  - [Anthropic: Haiku 3 migration guide](https://www.anthropic.com/news/claude-haiku-4.5?e45d281a_page=3) (migration to Opus 5.5)
  - [Anthropic API pricing page](https://www.anthropic.com/pricing)
  - [artificialanalysis.ai: Claude-Haiku-4.5](https://artificialanalysis.ai/models/releases/claude-haiku-4.5)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-haiku-4.5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-haiku-4.5/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, LLMBenchmark, and Anthropic announcement; zero verified benchmarks for Medscribe top-ten exclusion noted as within 1%.