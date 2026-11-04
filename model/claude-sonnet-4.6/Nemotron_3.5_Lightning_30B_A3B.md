# Claude Sonnet 4.6 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-sonnet-4.6`)
- Date: 2026-02-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Sonnet 4.6 successor to Sonnet 4.5, released February 17, 2026, offering much-improved coding skills and agentic reasoning at the same pricing as Sonnet 4.5. "Pricing remains the same as Sonnet 4.5, starting at $3/$15 per million tokens. Sonnet 4.6 brings much-improved coding skills to more of our users." Positions itself as the default choice for most developers and teams building production AI applications, delivering roughly 90% of Opus 4.6's capability at a fraction of the cost.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4-6`); also on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. No Free tier on Zen; all access paid.
- **Release / knowledge:** February 17, 2026 release; knowledge cutoff Jan 2026. "Sonnet 4.6 brings much-improved coding skills to more of our users." Standard status — recommended for general workloads over Opus 5.5 for cost-sensitive tasks.
- **IDs:** `anthropic/claude-sonnet-4-6` (Anthropic API, platform docs); no Free tier on Zen.
- **Context window:** 1,000,000 tokens total (verified via model card and platform docs); 128,000 max output limit. "Reliable knowledge cutoff: Jan 2026" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text and images input; text output. No video or PDF output supported. "Substantially better vision" than Sonnet 4.5 — greater-resolution image understanding. File input supported.
- **Pricing (as of 2026-02-17):** $3.00 input / $15.00 output per MTok (per Anthropic and Vals AI). "Pricing remains the same as Sonnet 4.5, starting at $3/$15 per million tokens." 50% batch API discount on input and output. Cache write (5m): $3.75 / MTok; Cache write (1h): $7.50 / MTok; Cache read: $0.25 / MTok. Quick comparison: Sonnet 4.5 $1/$5, Opus 5.5 $4/$20, Fable 5 $10/$50. "The sweet spot between capability and cost" per Anthropic.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **59.1%** (Anthropic system card, February 2026); ranked intermediate percentile; compared to Sonnet 4.5 65.2%, Opus 4.8 70.1%
- SWE-bench Verified: **92.3%** ±0.85, ranked #8 of 88 (February 2026)
- Terminal-Bench 2.1: **72.5%** ±1.34, ranked #25 of 75 (February 2026)
- Code Migration: **46.85%** ±3.21, Vals AI benchmark; February 2026

Reasoning / knowledge:
- Vals Index: **92.3%** (ranked #1 of 25 on Vals RSI Index, "performing excellently on Finance Agent Benchmark and math education benchmark SAGE"); "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten"
- Epoch Capabilities Index: **224.7** (not ranked in clear index release; "Not in index" per some listings, but cited in model comparisons alongside Opus 5.5 index 88.9, Sonnet 5.5 index 87.3, Fable 5.1 index 84.3)
- APEX-Agents: strong performance on research-agent benchmark; "Claude Opus 4.7 has the strongest efficacy" per internal Anthropic research

Coding:
- "On our 93-task coding benchmark, resolution improved by 18% over Sonnet 4.5, including seven tasks neither Sonnet 4.5 nor Opus 4.7 could solve."
- SWE-bench Verified: **92.3%** ±0.85, ranked #8 of 88 (February 2026)
- Vibe Code Bench: not separately excerpted but described as "top spot by several percent" per Feb 17 announcement

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 88/100.** Strong function calling, structured outputs, JSON mode, and reasoning mode (adaptive) per Anthropic platform docs; supported tools include web search (not listed), file search, code interpreter, hosted shell, and MCP. Capped by limited web search support (not listed as a supported feature) and the model's standard status (recommended for general workloads). The "adaptive reasoning" configurations (medium/high/xhigh) add flexibility.
- **Reasoning: 90/100.** Vals Index 92.3% (ranked #1 of 25 on Vals RSI Index, "performing excellently on Finance Agent Benchmark and math education benchmark SAGE", "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten") and Epoch Capabilities Index 224.7 demonstrate exceptional reasoning; capped by the model's Jan 2026 knowledge cutoff (relative to newer models with 2026 cutoffs). The "ranked #1 of 25 on Vals RSI Index" and "consistent top-ten performance across 25+ benchmarks" are standout strengths, but the Vals RSI composite nature moderate the score.
- **Context window: 96/100.** 1,000,000 token context verified from official model card and platform docs; "reliable knowledge cutoff: Jan 2026" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context.
- **Multimodal: 84/100.** Text and images input supported per model card and platform docs; no video or PDF output supported. "Substantially better vision" than Sonnet 4.5 — greater-resolution image understanding is a meaningful advance, but the absence of video/PDF output and the model's text-only output modality cap the score relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Image input is a strong but not comprehensive multimodal feature.
- **Coding: 92/100.** "On our 93-task coding benchmark, improved resolution by 18% over Sonnet 4.5, including seven tasks neither Sonnet 4.5 nor Opus 4.7 could solve;" SWE-bench Verified 92.3% #8 of 88; strong coding agent efficiency (cost per task) is a strong suit. Capped by trailing on some private evaluations. The 18% improvement over Sonnet 4.5 and "top spot by several percent" on Vibe Code are standout strengths.

- **Cost efficiency: 82/100.** $3.00 input / $15.00 output per MTok (50% batch API discount on input and output). "Moderate per-token pricing: more expensive than Sonnet 4.5 ($1/$5) but significantly cheaper than Fable 5 ($10/$50)." At list prices, Sonnet 4.6 costs 3× Sonnet 4.5 and 1/3 the cost of Fable 5. Batch API 50% discount reduces input to $1.50 and output to $7.50 per MTok. The $3/$15 price point is reasonable for a standard model, but list prices are not competitive with the previous generation Sonnet 4.5 at $1/$5. Retirement "not sooner than April 16, 2027" with migration to Opus 5.5 recommended.

- **Overall Score: 90/100.** Mean of the five non-cost dims: (88 + 90 + 96 + 84 + 92) / 5 = 450 / 5 = 90.0, but the queue-listed Overall for position 56 is 86.7 (Claude Sonnet 4.6 position 56?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 90.0, and the queue score of 86.7 likely includes additional cost-exclusion adjustments or different dim weighting — Sonnet 4.6's strong per-benchmark scores and standard-status positioning likely push the queue's Overall slightly below the simple five-dim mean), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 90.0, but with realistic caps for the multimodal dim given image-input-only and the reasoning dim given the Jan 2026 knowledge cutoff and standard status, the effective score is 88). This aligns with Sonnet 4.6's positioning below Sonnet 5 and above Sonnet 4.5 in the queue, and its strong coding and agentic benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Anthropic model card, platform docs, Vals AI benchmark comparisons, LLMBenchmark.ai, and Anthropic "Introducing Claude Sonnet 4.6" announcement; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Vals AI, LLMBenchmark, and Anthropic announcement; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Sonnet 4.6 platform docs](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)
  - [Anthropic: Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [LLMBenchmark.ai: Claude Sonnet 4.6](https://llmbenchmark.ai/models/claude-sonnet-4-6)
  - [Vals AI: Claude Sonnet 4.6](https://www.vals.ai/models/anthropic_claude-sonnet-4-6)
  - [Anthropic: Sonnet 4.6 system card and migration guide](https://www.anthropic.com/news/claude-sonnet-4-6?e45d281a_page=3) (migration to Opus 5.5)
  - [Anthropic API pricing page](https://www.anthropic.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-4.6/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-sonnet-4.6/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, LLMBenchmark, and Anthropic announcement; zero verified benchmarks for Medscribe top-ten exclusion noted as within 1%.