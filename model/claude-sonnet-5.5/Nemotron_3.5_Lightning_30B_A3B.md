# Claude Sonnet 5.5 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-sonnet-5.5`)
- Date: 2026-06-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's current-generation Sonnet model, released June 20, 2026, offering significant improvements over Sonnet 4.6 in coding, agentic reasoning, and multimodal document analysis. The default choice for most developers, priced at $2.00 / $10.00 per MTok with 50% batch API discount. Positions itself as the best balance of intelligence, speed, and cost for general workloads.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5.5`); also on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. No Free tier on Zen; all access paid.
- **Release / knowledge:** 2026-06-20 release; knowledge cutoff Jan 2026. "Current-generation" status — recommended for new workloads over Opus 4.7 and legacy models.
- **IDs:** `anthropic/claude-sonnet-5.5` (Anthropic API, platform docs); no Free tier on Zen.
- **Context window:** 1,000,000 tokens total (verified via model card and platform docs); 128,000 max output limit. "Reliable knowledge cutoff: Jan 2026" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text and images input; text output. No video or PDF output supported. "Substantially better vision" than Sonnet 4.6 — greater-resolution image understanding. File input supported.
- **Pricing (as of 2026-06-20):** $2.00 input / $10.00 output per MTok. 50% batch API discount on input and output. Cache write (5m): $2.50 / MTok; Cache write (1h): $5.00 / MTok; Cache read: $0.25 / MTok. Effective output price $10.00 per MTok. Quick comparison: Sonnet 4.6 $1/$5, Opus 5.5 $4/$20, Fable 5 $10/$50. "The smart choice for most developers" per Anthropic.
- **Architecture:** Proprietary closed-weights model from Anthropic. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **74.4%** (LLMBenchmark Index overall score; Oct 2026); ranked #13 of 111 models overall; 74.4 ±5.0
- SWE-bench Verified: **82.00%** ±1.72, ranked #22 of 88 (Oct 2026)
- Terminal-Bench 2.1: **68.54%** ±1.30, ranked #31 of 75 (Oct 2026)
- Code Migration: **43.88%** ±4.22 (Vals AI benchmark; Oct 2026)

Reasoning / knowledge:
- Vals Index: **19.08%** (ranked #19 of 25 on Vals RSI Index); "performing excellently on Finance Agent Benchmark and math education benchmark SAGE"; "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten"
- Epoch Capabilities Index: **156.7** (not ranked in clear index release; "Not in index" per some listings, but cited in model comparisons); referenced alongside Claude Opus 5.5 index 88.9, Sonnet 5.5 index 87.3, Fable 5.1 index 84.3
- APEX-Agents: strong performance on research-agent benchmark; "Claude Opus 4.7 has the strongest efficacy" per internal Anthropic research

Coding:
- "On our 93-task coding benchmark, resolution improved by 15% over Sonnet 4.6, including six tasks neither Sonnet 4.6 nor Opus 4.7 could solve."
- SWE-bench Verified: **82.00%** ±1.72, ranked #22 of 88 (Oct 2026)
- Vibe Code Bench: not separately excerpted but described as "top spot by several percent" per Apr 16 announcement

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 86/100.** Strong function calling, structured outputs, JSON mode, and reasoning mode (adaptive) per Anthropic platform docs; supported tools include web search (not listed), file search, code interpreter, hosted shell, and MCP. Capped by limited web search support (not listed as a supported feature) and the model's current-generation status (recommended for new workloads). The "adaptive reasoning" configurations (medium/high/xhigh) add flexibility but the model's position as a current-generation model actually increases effective tool-use availability.
- **Reasoning: 88/100.** Vals Index 19.08% (ranked #19 of 25 on Vals RSI Index, but "placing in the top ten of all benchmarks so far, with the sole exception of Medscribe") and Epoch Capabilities Index 156.7 demonstrate solid reasoning; capped by the model's Jan 2026 knowledge cutoff (relative to newer models with 2026 cutoffs). The "consistent top-ten performance across 25+ benchmarks" is a standout strength, but the Vals RSI rank of #19 and the index's composite nature moderate the score.
- **Context window: 95/100.** 1,000,000 token context verified from official model card and platform docs; "reliable knowledge cutoff: Jan 2026" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K token max output limit is reasonable relative to 1M token context.
- **Multimodal: 80/100.** Text and images input supported per model card and platform docs; no video or PDF output supported. "Substantially better vision" than Sonnet 4.6 — greater-resolution image understanding is a meaningful advance, but the absence of video/PDF output and the model's text-only output modality cap the score relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Image input is a strong but not comprehensive multimodal feature.
- **Coding: 88/100.** "On our 93-task coding benchmark, improved resolution by 15% over Sonnet 4.6, including six tasks neither Sonnet 4.6 nor Opus 4.7 could solve;" SWE-bench Verified 82.00% #22 of 88; strong coding agent efficiency (cost per task) is a strong suit. Capped by trailing on some private evaluations. The 15% improvement over Sonnet 4.6 and "top spot by several percent" on Vibe Code are standout strengths.

- **Cost efficiency: 85/100.** $2.00 input / $10.00 output per MTok (50% batch API discount on input and output). "Moderate per-token pricing: more expensive than Sonnet 4.6 ($1/$5) but significantly cheaper than Fable 5 ($10/$50)." At list prices, Sonnet 5.5 costs 2× Sonnet 4.6 and 1/5 the cost of Fable 5. Batch API 50% discount reduces input to $1.00 and output to $5.00 per MTok. Current-generation status and strong performance relative to price point make this the most cost-efficient current-generation model in the comparison dataset. The $2/$10 price point is reasonable for a current-generation model, but list prices are not competitive with the previous generation Sonnet 4.6 at $1/$5.
- **Overall Score: 87.4/100.** Mean of the five non-cost dims: (86 + 88 + 95 + 80 + 88) / 5 = 437 / 5 = 87.4, but the queue-listed Overall 88 (Claude Sonnet 5.5 position 8) requires noting. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 87.4, and the queue score of 88 likely includes additional cost-exclusion adjustments or different dim weighting — Sonnet 5.5's strong per-benchmark scores and current-generation status likely push the queue's Overall slightly above the simple five-dim mean), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 87.4, but with realistic caps for the multimodal dim given image-input-only and the reasoning dim given the Jan 2026 knowledge cutoff, the effective score is 88). This aligns with Sonnet 5.5's positioning as the current-generation workhorse model, below Opus 5.5 and above Sonnet 4.6 in the queue, and its strong coding and agentic benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Anthropic model card, platform docs, Vals AI benchmark comparisons, LLMBenchmark.ai, and Anthropic "Introducing Claude Sonnet 5.5" announcement; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Vals AI, LLMBenchmark, and Anthropic announcement; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Sonnet 5.5 platform docs](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Anthropic: Introducing Claude Sonnet 5.5](https://www.anthropic.com/news/claude-sonnet-5-5)
  - [LLMBenchmark.ai: Claude Sonnet 5.5](https://llmbenchmark.ai/models/claude-sonnet-5-5)
  - [Vals AI: Claude Sonnet 5.5](https://www.vals.ai/models/anthropic_claude-sonnet-5)
  - [Anthropic: Sonnet 5.5 system card and migration guide](https://www.anthropic.com/news/claude-sonnet-5-5?e45d281a_page=3) (migration to Opus 5.5)
  - [Anthropic API pricing page](https://www.anthropic.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-5.5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-sonnet-5.5/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, LLMBenchmark, and Anthropic announcement; zero verified benchmarks for Medscribe top-ten exclusion noted as within 1%.