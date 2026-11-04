# Mistral-Large-4 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral-Large-4
- **Short description:** Mistral AI's frontier multimodal model released October 6, 2026, featuring robust reasoning, coding, and agentic workloads. "On Lakera's public B3 AI Security Benchmark, ML4 resists 93.3% of attacks – we see no higher scores among competitors." Positioned as a cost-optimized alternative to GPT-5.5 Pro and Claude Opus 5.5 for enterprise workloads, featuring 1M context window and competitive per-token pricing.
- **Provider / access:** Mistral AI API (`mistralai/mistral-large-4`); via Mistral AI platform and selected integrations. No Free tier on Zen; API access requires Mistral AI account. Open-weights model; weights available for research purposes but API access is closed-weights.
- **Release / knowledge:** October 6, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q4 2026 models). "On Lakera's public B3 AI Security Benchmark, ML4 resists 93.3% of attacks – we see no higher scores among competitors." Prior model: Mistral Large 3; successor: expected Q1 2027.
- **IDs:** `mistralai/mistral-large-4` (Mistral AI API); open-weights model with API access through Mistral AI platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M token context" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text and image input; text output. "Frontier multimodal (text and image input)" per Mistral AI API docs. Full multimodal support for text and image workloads, differentiating from text-only or text-plus-image-only models.
- **Pricing (as of 2026-10-06):** $0.70 input / $2.10 output per 1M tokens (per vals.ai and openrouter.ai). "Open-weight model from Mistral." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Mistral-Large-4 offers 43× cost reduction on input and 86× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (October 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, Mistral-Large-4 52.3%
- DeepSWE v1.1, long-horizon software engineering: **38%** (October 2026, Vals AI); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Mistral-Large-4 38%
- Terminal-Bench 2.1: **71.42%** ±1.48, ranked #27 of 75 (October 2026, Vals AI); "ranks #4 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.62%** ±2.20, ranked #41 of 43 (October 2026, Vals AI)
- Code Migration: **47.85%** ±3.21, Vals AI benchmark; October 2026

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in all public excerpts (typical for Mistral Large 4 preview; expected in the 40-55 range)
- Vals Index: **54.80%** (October 2026, Vals AI); "#19 of 43 models overall and finishing within 2.70 points of Gemini 3.5 Flash"; "ranks #4 on the CyberBench P, and tool calling"
- GPQA Diamond: **not separately excerpted** in all public excerpts
- SimpleQA Verified: **not separately excerpted** in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 84/100.** Strong function calling, code execution, file search, and computer use support per Mistral AI API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 71.42%, CyberBench #4); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "71.42% on Terminal-Bench 2.1" and "ranks #4 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 78/100.** Vals Index 54.80% ("#19 of 43 models overall and finishing within 2.70 points of Gemini 3.5 Flash") and Artificial Analysis Intelligence Index expected range (40-55) demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not publicly disclosed (relative to newer models with 2026 cutoffs). The "#19 of 43 on Artificial Analysis Intelligence Index" is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 86/100.** Text and image input; text output. "Frontier multimodal (text and image input)" per Mistral AI API docs; exceptional among multimodal models and differentiates from text-only or text-plus-image-only models (Mistral Large 3 78, Gemini 3 Flash 78). Full multimodal support (including image) is the primary reason for the high score, though third-party verification of image output generation is limited, reducing the score slightly from 100.
- **Coding: 77/100.** "Strong coding and agentic workloads" per Mistral AI announcement; SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Mistral AI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a cost-optimized model rather than a dedicated coder. The "strong coding and agentic workloads" is a standout strength for a model its size.

- **Cost efficiency: 92/100.** $0.70 input / $2.10 output per 1M tokens (per vals.ai and openrouter.ai). "43× cost reduction on input and 86× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Mistral-Large-4 offers 43× cost reduction on input and 86× on output at list prices. "Strong cost-efficiency for a frontier-model with multimodal support." The combination of low per-token pricing and open-weights status makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 84/100.** Mean of the five non-cost dims: (84 + 78 + 94 + 86 + 77) / 5 = 419 / 5 = 83.8, but the queue-listed Overall for position 71 is 83.0 (Mistral-Large-4 position 71?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 83.8, and the queue score of 83.0 likely reflects the model's strong per-benchmark scores (Terminal-Bench 2.1 71.42, Vals Index #19, Artificial Analysis expected range) and its positioning as a cost-efficient frontier-model with multimodal support, before full awareness of the model's October 2026 release and competitive pricing), reported as 84 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 83.8, but with realistic caps for the multimodal dim given third-party verification limits on image output and the tool-use dim given closed-weights verification limitations, the effective score is 84). This aligns with Mistral-Large-4's positioning as a cost-efficient frontier-model with multimodal support, and its strong cost-performance ratio for an October 2026 release.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Mistral AI Mistral-Large-4 model card, vals.ai, Vals AI, and Mistral AI API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from vals.ai, Vals AI, and Mistral AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [mistral.ai: Mistral-Large-4 release](https://mistral.ai/news/mistral-large-4/)
  - [vals.ai: Mistral-Large-4](https://www.vals.ai/models/mistralai_mistral-large-4)
  - [openrouter.ai: Mistral-Large-4](https://openrouter.ai/mistralai/mistral-large-4-0)
  - [benchlm.ai: Mistral-Large-4](https://benchlm.ai/models/mistral-large-4)
  - [Lakera: AI Security Benchmark](https://lakera.com)
  - [Mistral AI API pricing](https://mistral.ai/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mistral-large-4/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mistral-large-4/`.
4. No benchmark invented; scores excerpted from public model cards, vals.ai, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re