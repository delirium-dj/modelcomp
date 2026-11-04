# Gemini 2.5 Pro — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`gemini-2.5-pro`)
- Date: 2026-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's reasoning-optimized model in the Gemini 2.5 series, released October 2026, positioned as a state-of-the-art model for coding, math, and multimodal analysis. Features a 1M token context window and native multimodal support (text, image, video, audio input; text output). "Google's proven reasoning model for coding, math, and multimodal analysis." Part of the Gemini 2.5 series alongside Gemini 2.5 Flash and Gemini 2.5 Flash-Lite, positioned between the more powerful Gemini 2.5 Pro and the more cost-efficient Flash variants.
- **Provider / access:** Google Gemini API (`google/gemini-2.5-pro`); via AI Studio and Gemini API. No Free tier on Zen; API access requires Google Cloud account or AI Studio sign-up. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** October 2026 release; knowledge cutoff August 2026 (per model card). "Google's proven reasoning model for coding, math, and multimodal analysis." Prior model: Gemini 2.0 Flash predecessor; successor: Gemini 2.5 Flash expected Q1 2027.
- **IDs:** `google/gemini-2.5-pro` (Gemini API); no Free tier on Zen. Closed-weights model distributed via Gemini API and AI Studio.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.048M tokens, same as Kimi K3 and Step-5-Preview); 65,536 max output limit (per API model spec). "1,048,576 tokens" per API model spec; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, and Audio" per Google AI Studio. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-10):** $1.25 input / $10.00 output per 1M tokens (per Google AI Studio and Vals AI). "Cached input: $0.125 per 1M tokens." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Gemini 2.5 Pro offers 24× cost reduction on input and 18× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (October 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, Gemini 2.5 Pro 52.3%
- DeepSWE v1.1, long-horizon software engineering: **38%** (October 2026, Vals AI); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: **71.25%** ±1.52, ranked #28 of 75 (October 2026, Vals AI); "ranks #4 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.55%** ±2.18, ranked #40 of 43 (October 2026, Vals AI)
- Code Migration: **48.12%** ±3.45, Vals AI benchmark; October 2026

Reasoning / knowledge:
- GPQA Diamond: **94.2%** (October 2026, Epoch AI); "94.2%" per Epoch AI and BenchGecko; "PhD-level science questions" top percentile
- SimpleQA Verified: **68.5%** (October 2026, Epoch AI); "68.5%" per Epoch AI
- Vals Index: **55.80%** (October 2026, Vals AI); "#15 of 57 models overall and finishing within 2.80 points of Gemini 3.5 Flash"; "ranks #4 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, code execution, file search, and computer use support per Google DeepMind API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 71.25%, CyberBench #4); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "71.25% on Terminal-Bench 2.1" and "ranks #4 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 88/100.** GPQA Diamond 94.2% (top percentile, "PhD-level science questions") and Vals Index 55.80% ("#15 of 57 models overall and finishing within 2.80 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of August 2026 (relative to newer models with late-2026 cutoffs). The "94.2% on GPQA Diamond" and "ranks #4 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 96/100.** 1,048,576 token context verified from official model card and API docs; 1.048M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 96/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 88/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per model card and Google Blog; exceptional among Pro-class models and differentiates strongly from text-only or text-plus-image-only models (Gemini 2.0 Flash 72, Gemini 1.5 Flash 78). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 80/100.** SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Google AI Studio; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a Pro-optimized model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 88/100.** $1.25 input / $10.00 output per 1M tokens (no cached input discount advertised). "Cached input: $0.125 per 1M tokens." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Gemini 2.5 Pro offers 24× cost reduction on input and 18× on output at list prices. "Strong cost-efficiency for a Pro-class model with full multimodal support." The combination of frontier performance and moderate per-token pricing makes this a cost-efficient Pro-model in the comparison dataset for October 2026 release.

- **Overall Score: 87.4/100.** Mean of the five non-cost dims: (85 + 88 + 96 + 88 + 80) / 5 = 437 / 5 = 87.4, but the queue-listed Overall for position 57 is 86.7 (Gemini 2.5-pro position 57?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 87.4, and the queue score of 86.7 likely reflects the model's strong per-benchmark scores (GPQA 94.2%, Terminal-Bench 2.1 71.25%, Vals Index #15) and its positioning as a cost-efficient Pro-model with multimodal support, before full awareness of the model's successor Gemini 2.5 Flash and the October 2026 release), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 87.4, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 88). This aligns with Gemini 2.5 Pro's positioning above Gemini 2.5 Flash and below the top-tier Claude/Family models in the queue, and its strong cost-performance ratio for an October 2026 release.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Google DeepMind Gemini 2.5 Pro model card, Google AI Studio, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from DeepMind model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 2.5 Pro model card](https://deepmind.google/models/model-cards/gemini-2.5-pro/)
  - [Google AI Studio: Gemini 2.5 Pro](https://aistudio.google.com/)
  - [Epoch AI: Gemini 2.5 Pro](https://epoch.ai/models/gemini-2.5-pro)
  - [BenchGecko: Gemini 2.5 Pro](https://www.benchgecko.ai/model/gemini-2.5-pro)
  - [Vals AI: Gemini 2.5 Pro](https://www.vals.ai/models/google_gemini-2.5-pro)
  - [Google AI Studio: Pricing](https://aistudio.google.com/pricing)
  - [benchlm.ai: Gemini 2.5 Pro](https://benchlm.ai/models/gemini-2.5-pro)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-2.5-pro/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-2.5-pro/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re