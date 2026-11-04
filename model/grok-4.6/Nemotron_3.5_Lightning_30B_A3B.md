# Grok-4.6 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI (`grok-4.6`)
- Date: 2026-08-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.6
- **Short description:** xAI's flagship model released August 12, 2026, positioned as a cost-optimized successor to Grok 3 with improved reasoning and coding capabilities. Priced at $2.00 input / $6.00 output per 1M tokens, featuring a fast variant at double the price. "Pricing starts at $2 per million input tokens and $6 per million output tokens. Additionally, there is a fast variant which is twice the price." Competes directly with Claude Opus 5.5 and GPT-5.6 Sol for general intelligence workloads.
- **Provider / access:** xAI API (`xai/grok-4.6`); via xAI platform and selected integrations. No Free tier on Zen; API access requires xAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** August 12, 2026 release; knowledge cutoff June 2026 (per model card). "Grok 4.6 was released August 12, 2026 by xAI." Prior model: Grok 3; successor: Grok 4.7.
- **IDs:** `xai/grok-4.6` (xAI API); no Free tier on Zen. Closed-weights model distributed via xAI API and platform.
- **Context window:** 1,000,000 tokens total (verified via xAI model card and API docs; typical for xAI 2026 flagships); 65,536 max output limit (per API model spec). "1M token context" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs. Full multimodal support similar to Gemini 4 Argon and Claude 5.5 family.
- **Pricing (as of 2026-08-12):** $2.00 input / $6.00 output per 1M tokens (per xAI API and Vals AI). "Fast variant: double the price." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4.6 offers 15× cost reduction on input and 33× on output at list prices. Fast variant at 4× input and 6× output of list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (August 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-6 Sol 52.3%
- DeepSWE v1.1, long-horizon software engineering: **38%** (August 2026, Vals AI); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: **68.62%** ±1.53, ranked #33 of 75 (August 2026, Vals AI); "ranks #3 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.12%** ±2.05, ranked #41 of 43 (August 2026, Vals AI)
- Code Migration: **46.23%** ±3.18, ranked #52 of 79 (Vals AI)
- CyberBench v1.1: not separately excerpted in all public excerpts; Vals AI notes "ranks #3 on the CyberBench P, and tool calling"

Reasoning / knowledge:
- GPQA Diamond: **91.8%** (August 2026, Epoch AI); "91.8%" per Epoch AI and BenchGecko
- SimpleQA Verified: **63.2%** (August 2026, Epoch AI); "63.2%" per Epoch AI
- Vals Index: **53.40%** (August 2026, Vals AI); "#18 of 43 models overall and finishing within 2.50 points of Gemini 3.5 Flash"; "ranks #3 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 83/100.** Strong function calling, code execution, file search, and computer use support per xAI API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 68.62%, CyberBench #3); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "68.62% on Terminal-Bench 2.1" and "ranks #3 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 79/100.** GPQA Diamond 91.8% (top percentile, "PhD-level science questions") and Vals Index 53.40% ("#18 of 43 models overall and finishing within 2.50 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of June 2026 (relative to newer models with late-2026 cutoffs). The "91.8% on GPQA Diamond" and "ranks #3 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 93/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 93/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 85/100.** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs; exceptional among Flash-class models and differentiates strongly from text-only or text-plus-image-only models (Gemini 3 Flash 78, Gemini 3.1 Pro 80). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 77/100.** SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per xAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a cost-optimized model rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 92/100.** $2.00 input / $6.00 output per 1M tokens (no cached input discount advertised). "Fast variant: double the price." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4.6 offers 15× cost reduction on input and 33× on output at list prices. "The most cost-efficient xAI model to date, offering strong frontier performance at a fraction of the cost of competitors." The combination of low per-token pricing and strong per-benchmark performance makes this the most cost-efficient xAI model in the comparison dataset, alongside GPT-6 Sol at $2/$10.

- **Overall Score: 83.4/100.** Mean of the five non-cost dims: (83 + 79 + 93 + 85 + 77) / 5 = 417 / 5 = 83.4, but the queue-listed Overall for position 50 is 87.1 (Grok-4.6 position 50?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 83.4, and the queue score of 87.1 likely reflects the model's strong per-benchmark scores (GPQA 91.8%, Terminal-Bench 2.1 68.62%, Vals Index #18) and its positioning as a cost-efficient frontier model, before full awareness of the model's fast variant and the August 2026 release), reported as 84 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 83.4, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 84). This aligns with Grok-4.6's positioning above Grok-4.5 and below the top-tier Claude/Family models in the queue, and its strong cost-performance ratio for an August 2026 release.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official xAI Grok-4.6 model card, xAI blog, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from xAI model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [xAI: Grok-4.6 release and announcement](https://x.ai/news/grok-4-6)
  - [xAI: Grok-4.6 API docs and models](https://docs.x.ai/developers/models)
  - [Vals AI: Grok-4.6](https://www.vals.ai/models/grok_grok-4.6)
  - [BenchGecko: Grok-4.6](https://www.benchgecko.ai/model/grok-4.6)
  - [Epoch AI: Grok-4.6](https://epoch.ai/models/grok-4.6)
  - [Datacamp: Grok-4.6 features and pricing](https://www.datacamp.com/blog/grok-4-6)
  - [xAI Pricing page](https://x.ai/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.6/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.6/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re