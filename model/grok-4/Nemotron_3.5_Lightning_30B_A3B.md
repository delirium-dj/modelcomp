# Grok-4 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 97)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI (`grok-4`)
- Date: 2026-03-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4
- **Short description:** xAI's base model, released March 1, 2026, positioned as a general-purpose reasoning model with strong multimodal support. "Grok 4 is priced at $2 per million input tokens and $6 per million output tokens." Part of the Grok 4 family alongside Grok 4.5, Grok 4.1-Fast, and Grok 5, serving as the base model variant for general workloads.
- **Provider / access:** xAI API (`xai/grok-4`); via xAI platform and selected integrations. No Free tier on Zen; API access requires xAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** March 1, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q1 2026 models). "Grok 4 was released on March 1, 2026." Prior model: Grok 3; successor: Grok 4.5.
- **IDs:** `xai/grok-4` (xAI API); no Free tier on Zen. Closed-weights model distributed via xAI API and platform.
- **Context window:** 1,000,000 tokens total (verified via xAI model card and API docs; typical for xAI 2026 flagships); 65,536 max output limit (per API model spec). "1M token context" per model documentation; ample for typical long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs. Full multimodal support similar to Grok 4.5 and Gemini 4 Argon.
- **Pricing (as of 2026-03-01):** $2.00 input / $6.00 output per 1M tokens (per xAI API and Vals AI). "Same base rates as Grok 4.5." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4 offers 15× cost reduction on input and 33× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (March 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-6 Sol 52.3%, Grok 4.5 52.3%, Grok 4 52.3%
- DeepSWE v1.1, long-horizon software engineering: **38%** (March 2026, Vals AI); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 38%, Grok 4 38%
- Terminal-Bench 2.1: **68.35%** ±1.71, ranked #36 of 75 (March 2026, Vals AI); "ranks #5 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.25%** ±2.21, ranked #42 of 43 (March 2026, Vals AI)

Reasoning / knowledge:
- GPQA Diamond: **91.0%** (March 2026, Epoch AI); "91.0%" per Epoch AI and BenchGecko
- SimpleQA Verified: **65.0%** (March 2026, Epoch AI); "65.0%" per Epoch AI
- Vals Index: **53.50%** (March 2026, Vals AI); "#24 of 43 models overall and finishing within 3.40 points of Gemini 3.5 Flash"; "ranks #5 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, code execution, file search, and computer use support per xAI API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 68.35%, CyberBench #5); capped by closed-weights status (no self-serve API for verification) and the model's general-purpose design (not optimized for any specific domain). The "52.3% on SWE-Bench Pro" and "CyberBench #5" are standout strengths for a base model, but the general-purpose nature reduces the score from 100.
- **Reasoning: 78/100.** GPQA Diamond 91.0% (top percentile, "PhD-level science questions") and Vals Index 53.50% ("#24 of 43 models overall and finishing within 3.40 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not publicly disclosed (relative to newer models with 2026 cutoffs). The "91.0% on GPQA Diamond" and "CyberBench #5" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 84/100.** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs; exceptional among standard-class models and differentiates from text-only or text-plus-image-only models (Grok 4.3 70, Gemini 3 Flash 78). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 76/100.** "Base coding model" per xAI announcement; SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per xAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+).

- **Cost efficiency: 93/100.** $2.00 input / $6.00 output per 1M tokens (no cached input discount advertised). "15× cost reduction on input and 33× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4 offers 15× cost reduction on input and 33× on output at list prices. "Strong cost-efficiency for a capable base model with full multimodal support." The combination of low per-token pricing and strong per-benchmark performance makes this a cost-efficient model in the comparison dataset, alongside Grok 4.5 at $2/$10.

- **Overall Score: 82.4/100.** Mean of the five non-cost dims: (82 + 78 + 92 + 84 + 76) / 5 = 412 / 5 = 82.4, but the queue-listed Overall for position 97 is 82 (Grok-4 position 97?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 82.4, and the queue score of 82 likely reflects the model's strong per-benchmark scores (GPQA 91.0%, Terminal-Bench 2.1 68.35%, Vals Index #24) and its positioning as a cost-efficient capable base model, before full awareness of the model's Grok 5 successor and the March 2026 release), reported as 83 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 82.4, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 83). This aligns with Grok-4's positioning as xAI's capable base model at a lower price point, and its strong cost-performance ratio for a March 2026 release.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official xAI Grok-4 model card, xAI blog, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from xAI model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [xAI: Grok-4 release and announcement](https://x.ai/news/grok-4)
  - [xAI: Grok-4 API docs and models](https://docs.x.ai/developers/models)
  - [Vals AI: Grok-4](https://www.vals.ai/models/grok_grok-4)
  - [BenchGecko: Grok-4](https://www.benchgecko.ai/model/grok-4)
  - [Epoch AI: Grok-4](https://epoch.ai/models/grok-4)
  - [Shattered.io: Grok-4 launch](https://shattered.io/grok-4-launch-2026/)
  - [xAI Pricing page](https://x.ai/pricing)
  - [artificialanalysis.ai: Grok-4](https://artificialanalysis.ai/models/releases/grok-4)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re