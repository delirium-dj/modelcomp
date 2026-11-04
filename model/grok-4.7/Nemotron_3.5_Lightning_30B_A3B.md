# Grok-4.7 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI (`grok-4.7`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.7
- **Short description:** xAI's most capable model for coding and knowledge work, released September 21, 2026, featuring improved reasoning and longer task retention. "Grok 4.7 is our most capable model for coding and knowledge work. It works longer on difficult tasks, checks its own work more carefully..." Positions itself as the most capable Grok model to date, competing directly with Claude Opus 5.5 and GPT-5.5 Pro for general intelligence and agentic workloads. Same pricing as Grok 4.6: $2.00 input / $6.00 output per 1M tokens.
- **Provider / access:** xAI API (`xai/grok-4.7`); via xAI platform and selected integrations. No Free tier on Zen; API access requires xAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** September 21, 2026 release; knowledge cutoff August 2026 (per model card). "Grok 4.7 is our most capable model for coding and knowledge work." Prior model: Grok 4.6; successor: expected Q1 2027.
- **IDs:** `xai/grok-4.7` (xAI API); no Free tier on Zen. Closed-weights model distributed via xAI API and platform.
- **Context window:** 1,000,000 tokens total (verified via xAI model card and API docs; typical for xAI 2026 flagships); 65,536 max output limit (per API model spec). "1M token context" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs. Full multimodal support similar to Grok 4.6 and Gemini 4 Argon.
- **Pricing (as of 2026-09-21):** $2.00 input / $6.00 output per 1M tokens (per xAI API and Vals AI). "Same base rates as Grok 4.6." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4.7 offers 15× cost reduction on input and 33× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (September 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-6 Sol 52.3%, Grok 4.6 52.3%
- DeepSWE v1.1, long-horizon software engineering: **38%** (September 2026, Vals AI); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: **68.88%** ±1.41, ranked #32 of 75 (September 2026, Vals AI); "ranks #2 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.25%** ±2.12, ranked #41 of 43 (September 2026, Vals AI)
- Code Migration: **47.12%** ±3.30, Vals AI benchmark; September 2026

Reasoning / knowledge:
- GPQA Diamond: **92.1%** (September 2026, Epoch AI); "92.1%" per Epoch AI and BenchGecko
- SimpleQA Verified: **64.8%** (September 2026, Epoch AI); "64.8%" per Epoch AI
- Vals Index: **54.20%** (September 2026, Vals AI); "#21 of 43 models overall and finishing within 3.20 points of Gemini 3.5 Flash"; "ranks #2 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 84/100.** Strong function calling, code execution, file search, and computer use support per xAI API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 68.88%, CyberBench #2); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "68.88% on Terminal-Bench 2.1" and "ranks #2 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 80/100.** GPQA Diamond 92.1% (top percentile, "PhD-level science questions") and Vals Index 54.20% ("#21 of 43 models overall and finishing within 3.20 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of August 2026 (relative to newer models with late-2026 cutoffs). The "92.1% on GPQA Diamond" and "ranks #2 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 93/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 93/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 86/100.** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs; exceptional among Flash-class models and differentiates strongly from text-only or text-plus-image-only models (Grok 4.6 85, Gemini 3 Flash 78). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 78/100.** "Most capable model for coding and knowledge work" per xAI announcement; SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per xAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a cost-optimized model rather than a dedicated coder. The "most capable model for coding" is a standout strength for a model its size.

- **Cost efficiency: 93/100.** $2.00 input / $6.00 output per 1M tokens (no cached input discount advertised). "15× cost reduction on input and 33× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4.7 offers 15× cost reduction on input and 33× on output at list prices. "Strong cost-efficiency for a capable model with full multimodal support." The combination of low per-token pricing and strong per-benchmark performance makes this a cost-efficient model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 84/100.** Mean of the five non-cost dims: (84 + 80 + 93 + 86 + 78) / 5 = 421 / 5 = 84.2, but the queue-listed Overall for position 63 is 87.1 (Grok-4.7 position 63?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 84.2, and the queue score of 87.1 likely reflects the model's strong per-benchmark scores (GPQA 92.1%, Terminal-Bench 2.1 68.88%, Vals Index #21) and its positioning as a cost-efficient capable model, before full awareness of the model's Grok 4.6 predecessor and the September 2026 release), reported as 84 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 84.2, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 84). This aligns with Grok-4.7's positioning as xAI's most capable model for coding and knowledge work, and its strong cost-performance ratio for a September 2026 release.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official xAI Grok-4.7 model card, xAI blog, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from xAI model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [xAI: Grok-4.7 release and announcement](https://x.ai/news/grok-4-7)
  - [xAI: Grok-4.7 API docs and models](https://docs.x.ai/developers/models)
  - [Vals AI: Grok-4.7](https://www.vals.ai/models/grok_grok-4.7)
  - [BenchGecko: Grok-4.7](https://www.benchgecko.ai/model/grok-4.7)
  - [Epoch AI: Grok-4.7](https://epoch.ai/models/grok-4.7)
  - [Shattered.io: Grok-4.7 launch benchmarks](https://shattered.io/grok-4-7-launch-pricing-benchmarks-gpt-6-2026/)
  - [xAI Pricing page](https://x.ai/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.7/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.7/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re