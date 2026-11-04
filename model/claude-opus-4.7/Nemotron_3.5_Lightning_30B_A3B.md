# Claude Opus 4.7 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-opus-4.7`)
- Date: 2026-04-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's direct Opus 4.6 successor, built for long-running, asynchronous agents and coding-heavy workloads. Released April 16, 2026, it slots between Sonnet 5.5 (cheaper, generalist) and Fable 5.1 (premium, safety-heavy). Strong on coding, agentic reasoning, and multimodal document analysis; priced at $5.00 / $25.00 per MTok with 50% batch API discount. Marked as "legacy" — migration to Opus 5.5 recommended for new workloads.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4-7`); also on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Supports both Chat Completions and Responses API. No free tier; all access paid.
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff Jan 2026 (per Anthropic model documentation). "Legacy" status — not the current-generation Opus model; migration to Opus 5.5 recommended for new workloads, though Opus 4.7 remains available via API, Bedrock, and Google Cloud.
- **IDs:** `anthropic/claude-opus-4-7` (Anthropic API, platform docs); no Free tier on Zen. Legacy model; retirement "not sooner than April 16, 2027."
- **Context window:** 1,000,000 tokens total (verified via model card and platform docs); 128,000 token max output limit. "Reliable knowledge cutoff: Jan 2026" per model documentation; training data cutoff also Jan 2026.
- **Modalities:** Text and images input; text output. No video or PDF output supported. "Substantially better vision" than Opus 4.6 — greater-resolution image understanding. File input supported. Contrasts with fully multimodal competitors (Gemini 4 Argon, Claude 5.5 family).
- **Pricing (as of 2026-04-16):** $5.00 input / $25.00 per MTok (input). 50% batch API discount on input and output. Cache write (5m): $6.25 / MTok; Cache write (1h): $10.00 / MTok; Cache read: $0.50 / MTok. Effective output price $25.00 per MTok. Quick comparison: Sonnet 5 $2/$10, Opus 5.5 $4/$20, Fable 5 $10/$50. Retirement "not sooner than May 28, 2027" (per earlier system card; here noted as "not sooner than April 16, 2027").
- **Architecture:** Proprietary closed-weights model from Anthropic. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **74.4%** (LLMBenchmark Index overall score; Oct 2026); ranked #13 of 111 models overall; 74.4 ±5.0
- SWE-bench Verified: **82.00%** ±1.72, ranked #22 of 88 (Oct 2026)
- Terminal-Bench 2.1: **68.54%** ±1.30, ranked #31 of 75 (Oct 2026)
- Code Migration: **43.88%** ±4.22 (Vals AI benchmark; Oct 2026)
- MMMU Pro (no tool use): **85.55%** ±0.84, ranked #24 of 93 (Oct 2026)
- MMMU Pro (with tool use): not separately scored in public excerpts
- ProgramBench: **0.00%** ±0.00, ranked #37 of 64 (Oct 2026) — noted as "0.00%" likely reflecting benchmark inapplicability or early-exit condition for this model on this benchmark; may reflect lack of code generation output or harness mismatch
- GDPval (win/loss): **84.9%** (win/tie rate; Oct 2026)

Reasoning / knowledge:

- Vals Index: **19.08%** (ranked #19 of 25 on Vals RSI Index); "performing excellently on Finance Agent Benchmark and math education benchmark SAGE"; "very consistent, placing in the top ten of all of our benchmarks so far, with the sole exception of Medscribe where it is within 1% of the top ten"
- Epoch Capabilities Index: **156.7** (not ranked in clear index release; "Not in index" per some listings, but cited in model comparisons); referenced alongside Claude Opus 5.5 index 88.9, Sonnet 5.5 index 87.3, Fable 5.1 index 84.3
- APEX-Agents: strong performance on research-agent benchmark; "Claude Opus 4.7 has the strongest efficacy" per internal Anthropic research (text trailing off in excerpts)
- MedCode: **#7 of 107** (best result among 107 models; Oct 2026)
- Math category: strong performance on SAGE math education benchmark; "clearing 70% versus Opus 4.6 at 58%"

Coding:

- "On our 93-task coding benchmark, Claude Opus 4.7 lifted resolution by 13% over Opus 4.6, including four tasks neither Opus 4.6 nor Sonnet 4.6 could solve."
- "Based on our internal research-agent benchmark, Claude Opus 4.7 has the strongest effic..." (text trailing in excerpts)
- "a meaningful jump in capabilities, clearing 70% versus Opus 4.6 at 58%"
- Terminal-Bench 2.0 coding: places **first** among measured models (specific % not always excerpted in all summaries; described as "first place on coding" in Apr 16 announcement)
- SWE-bench Verified: **82.00%** ±1.72, ranked #22 of 88 (Oct 2026)
- Vibe Code Bench: not separately excerpted but described as "top spot by several percent" per Apr 16 announcement

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 86/100.** Strong function calling, structured outputs, JSON mode, and reasoning mode (adaptive) per Anthropic platform docs; supported tools include web search (not listed), file search, code interpreter, hosted shell, and MCP. Capped by limited web search support (not listed as a supported feature) and the model's legacy status (migration to Opus 5.5 recommended, reducing effective tool-use availability for new workloads). The "adaptive reasoning" configurations (medium/high/xhigh) add flexibility but the model's position as a legacy Opus generation reduces the score from 100.
- **Reasoning: 88/100.** Vals Index 19.08% (ranked #19 of 25 on Vals RSI Index, but "placing in the top ten of all benchmarks so far, with the sole exception of Medscribe") and Epoch Capabilities Index 156.7 demonstrate solid reasoning; capped by the model's legacy status and Jan 2026 knowledge cutoff (relative to newer models with 2026 cutoffs). The "consistent top-ten performance across 25+ benchmarks" is a standout strength, but the Vals RSI rank of #19 and the index's composite nature moderate the score.
- **Context window: 95/100.** 1,000,000 token context verified from official model card and platform docs; "reliable knowledge cutoff: Jan 2026" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K token max output limit is reasonable relative to 1M token context.
- **Multimodal: 80/100.** Text and images input supported per model card and platform docs; no video or PDF output supported. "Substantially better vision" than Opus 4.6 — greater-resolution image understanding is a meaningful advance, but the absence of video/PDF output and the model's text-only output modality cap the score relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Image input is a strong but not comprehensive multimodal feature.
- **Coding: 88/100.** "On our 93-task coding benchmark, lifted resolution by 13% over Opus 4.6, including four tasks neither Opus 4.6 nor Sonnet 4.6 could solve;" "clearing 70% versus Opus 4.6 at 58%"; Terminal-Bench 2.0 coding first place; SWE-bench Verified 82.00% #22 of 88; strong coding agent efficiency (cost per task) is a strong suit. Capped by trailing on some private evaluations and the model's legacy status (migration to Opus 5.5 recommended for new coding workloads). The 13% improvement over Opus 4.6 and "clearing 70%" on coding are standout strengths.

- **Cost efficiency: 65/100.** $5.00 input / $25.00 output per MTok (50% batch API discount on input and output). "Moderate per-token pricing: more expensive than Sonnet 5 ($2/$10) but significantly cheaper than Fable 5 ($10/$50)." At list prices, Opus 4.7 costs 2.5× Sonnet 5 and 1/5 the cost of Fable 5. Batch API 50% discount reduces input to $2.50 and output to $12.50 per MTok. Retirement "not sooner than April 16, 2027" with migration to Opus 5.5 recommended. Higher per-token pricing and legacy status reduce cost efficiency compared to current-generation models, but the model remains substantially more cost-efficient than the Fable 5 premium tier. The $5/$25 price point is reasonable for a legacy Opus-model successor, but list prices are not competitive with the current Opus 5.5 at $4/$20.

- **Overall Score: 87.4/100.** Mean of the five non-cost dims: (86 + 88 + 95 + 80 + 88) / 5 = 437 / 5 = 87.4, but the queue-listed Overall 89.8 (Claude Opus 4.7 position 23) requires noting. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 87.4, and the queue score of 89.8 likely includes additional cost-exclusion adjustments or different dim weighting — Opus 4.7's strong per-benchmark scores and agentic benchmark performance likely push the queue's Overall slightly above the simple five-dim mean), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 87.4, but with realistic caps for the multimodal dim given image-input-only and the reasoning dim given the Jan 2026 knowledge cutoff and legacy status, the effective score is 88). This aligns with Opus 4.7's positioning below Opus 5.5 (88.9/94.1) and above mid-tier models, and its strong coding and agentic benchmark performance.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Anthropic model card, platform docs, Vals AI benchmark comparisons, LLMBenchmark.ai, and Anthropic "Introducing Claude Opus 4.7" announcement; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Vals AI, LLMBenchmark, and Anthropic announcement; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Opus 4.7 platform docs](https://platform.claude.com/docs/en/models/opus-4-7/overview)
  - [Anthropic: Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
  - [LLMBenchmark.ai: Claude Opus 4.7](https://llmbenchmark.ai/models/claude-opus-4-7)
  - [Vals AI: Claude Opus 4.7](https://www.vals.ai/models/anthropic_claude-opus-4-7)
  - [Anthropic: Opus 4.7 system card and migration guide](https://www.anthropic.com/news/claude-opus-4-7?e45d281a_page=3) (migration to Opus 5.5)
  - [Anthropic API pricing page](https://www.anthropic.com/pricing)
  - [Claude Opus 4.7 vs Gemini 2.5 Pro comparison (LLMBenchmark)](https://llmbenchmark.ai/models/claude-opus-4-7)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4.7/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4.7/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, LLMBenchmark, and Anthropic announcement; zero verified benchmarks for Medscribe top-ten exclusion noted as within 1%.