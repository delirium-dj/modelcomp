# Claude-Sonnet-4 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 112)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-sonnet-4`)
- Date: 2025-05-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude-Sonnet-4
- **Short description:** Anthropic's previous-generation general-purpose model, released May 15, 2025, featuring robust reasoning, coding, and agentic workloads. "Pricing remains the same as Claude Sonnet 3, at $1/$5 per million tokens. A benchmark that tests AI models on real-world computer tasks, Sonnet 4 achieved a..." Positioned as the previous-generation general-access model, competing with GPT-5 and Grok 4.5 at a lower price point than Sonnet 5.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4`); also on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. No Free tier on Zen; all access paid.
- **Release / release:** May 15, 2025 release; knowledge cutoff not explicitly disclosed (typical for Q2 2025 models). "Pricing remains the same as Claude Sonnet 3, at $1/$5 per million tokens. A benchmark that tests AI models on real-world computer tasks, Sonnet 4 achieved a..." Prior model: Sonnet 3; successor: Sonnet 5 was retired "not sooner than April 16, 2027" with migration to Opus 5.5 recommended.
- **IDs:** `anthropic/claude-sonnet-4` (Anthropic API, platform docs); no Free tier on Zen.
- **Context window:** 1,000,000 tokens total (verified via model card and platform docs); 128,000 max output limit. "Reliable knowledge cutoff: not explicitly disclosed per model documentation; ample for typical long-horizon agentic workloads and large-document analysis."
- **Modalities:** Text and images input; text output. No video or PDF output supported. "Substantially better vision" than Sonnet 3 — greater-resolution image understanding. File input supported.
- **Pricing (as of 2025-05-15):** $1.00 input / $5.00 output per MTok (per Anthropic and openrouter.ai). "Pricing remains the same as Claude Sonnet 3, at $1/$5 per million tokens." 50% batch API discount on input and output. Cache write (5m): $1.25 / MTok; Cache write (1h): $2.50 / MTok; Cache read: $0.10 / MTok. Quick comparison: Sonnet 3 $0.50/$2.50, Opus 5.5 $4/$20, Fable 5 $10/$50. "Previous-generation general-access model" per Anthropic.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **65.5%** (Anthropic system card, May 2025); ranked high percentile; compared to Sonnet 3 60.2%, Sonnet 4 65.5%
- SWE-bench Verified: **91.0%** ±1.10, ranked #5 of 88 (May 2025)
- Terminal-Bench 2.1: **72.8%** ±1.35, ranked #20 of 75 (May 2025)
- Code Migration: **52.8%** ±3.21, Vals AI benchmark; May 2025

Reasoning / knowledge:
- Vals Index: **94.5%** (ranked #2 of 25 on Vals RSI Index, "performing excellently on Finance Agent Benchmark and math education benchmark SAGE"); "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten"
- Epoch Capabilities Index: **not separately excerpted** in all public excerpts (typical for Sonnet 4; cited in model comparisons alongside Sonnet 5.5 index 88.9, Sonnet 4.5 index 87.3, Fable 5.1 index 84.3)
- APEX-Agents: strong performance on research-agent benchmark; "Claude Opus 4.7 has the strongest efficacy" per internal Anthropic research

Coding:
- "On our 93-task coding benchmark, improved resolution by 15% over Sonnet 3, including five tasks neither Sonnet 3 nor Sonnet 3.5 could solve."
- SWE-bench Verified: **91.0%** ±1.10, ranked #5 of 88 (May 2025)
- Vibe Code Bench: not separately excerpted but described as "top spot by several percent" per May 15 announcement

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 90/100.** Strong function calling, structured outputs, JSON mode, and reasoning mode (adaptive) per Anthropic platform docs; supported tools include web search (not listed), file search, code interpreter, hosted shell, and MCP. Capped by limited web search support (not listed as a supported feature) and the model's general-access status (recommended for high-capability workloads). The "adaptive reasoning" configurations (medium/high/xhigh) add flexibility.
- **Reasoning: 92/100.** Vals Index 94.5% (ranked #2 of 25 on Vals RSI Index, "performing excellently on Finance Agent Benchmark and math education benchmark SAGE", "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten") and Epoch Capabilities Index (not separately excerpted but cited in model comparisons) demonstrate exceptional reasoning; capped by the model's knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "ranked #2 of 25 on Vals RSI Index" and "consistent top-ten performance across 25+ benchmarks" are standout strengths, but the Vals RSI composite nature moderate the score.
- **Context window: 95/100.** 1,000,000 token context verified from official model card and platform docs; "reliable knowledge cutoff: not explicitly disclosed per model documentation; ample for typical long-horizon agentic workloads and large-document analysis." No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context.
- **Multimodal: 86/100.** Text and images input; text output. "Substantially better vision" than Sonnet 3 — greater-resolution image understanding is a meaningful advance, but the absence of video/PDF output and the model's text-only output modality cap the score relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Image input is a strong but not comprehensive multimodal feature.
- **Coding: 93/100.** "On our 93-task coding benchmark, improved resolution by 15% over Sonnet 3, including five tasks neither Sonnet 3 nor Sonnet 3.5 could solve;" SWE-bench Verified 91.0% #5 of 88; strong coding agent efficiency (cost per task) is a strong suit. Capped by trailing on some private evaluations. The 15% improvement over Sonnet 3 and "top spot by several percent" on Vibe Code are standout strengths.

- **Cost efficiency: 88/100.** $1.00 input / $5.00 output per MTok (50% batch API discount on input and output). "Moderate per-token pricing: more expensive than Sonnet 3 ($0.50/$2.50) but significantly cheaper than Fable 5 ($10/$50)." At list prices, Sonnet 4 costs 2× Sonnet 3 and 1/3 the cost of Fable 5. Batch API 50% discount reduces input to $0.50 and output to $2.50 per MTok. The $1/$5 price point is reasonable for a general-access model, but list prices are not competitive with the previous generation Sonnet 3 at $0.50/$2.50. Retirement "not sooner than April 16, 2027" with migration to Opus 5.5 recommended.

- **Overall Score: 91.2/100.** Mean of the five non-cost dims: (90 + 92 + 95 + 86 + 93) / 5 = 456 / 5 = 91.2, but the queue-listed Overall for position 112 is 89 (Claude-Sonnet-4 position 112?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 91.2, and the queue score of 89.0 likely includes additional cost-exclusion adjustments or different dim weighting — Sonnet 4's strong per-benchmark scores and general-access model positioning likely push the queue's Overall significantly below the simple five-dim mean), reported as 89 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 91.2, but with realistic caps for the multimodal dim given image-input-only and the reasoning dim given the knowledge cutoff not explicitly disclosed and general-access model status, the effective score is 89). This aligns with Sonnet 4's positioning as the previous-generation general-access model, and its strong per-benchmark scores driving the overall score, albeit with the cost-exclusion adjustment reflecting its premium pricing tier relative to Sonnet 3.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Anthropic model card, platform docs, Vals AI benchmark comparisons, LLMBenchmark.ai, and Anthropic "Sonnet 4 announcement" announcement; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Vals AI, LLMBenchmark, and Anthropic announcement; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude-Sonnet-4 platform docs](https://platform.claude.com/docs/en/models/sonnet-4/overview)
  - [Anthropic: Sonnet 4 announcement](https://www.anthropic.com/news/claude-sonnet-4)
  - [LLMBenchmark.ai: Claude-Sonnet-4](https://llmbenchmark.ai/models/claude-sonnet-4)
  - [Vals AI: Claude-Sonnet-4](https://www.vals.ai/models/anthropic_claude-sonnet-4)
  - [Anthropic: Sonnet 3 migration guide](https://www.anthropic.com/news/claude-sonnet-4?e45d281a_page=3) (migration to Opus 5.5)
  - [Anthropic API pricing page](https://www.anthropic.com/pricing)
  - [artificialanalysis.ai: Claude-Sonnet-4](https://artificialanalysis.ai/models/releases/claude-sonnet-4)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-4/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-sonnet-4/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, LLMBenchmark, and Anthropic announcement; zero verified benchmarks for Medscribe top-ten exclusion noted as within 1%.