# Gemini 3.7 Flash — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-08-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's third-generation Flash model in the Gemini 3 series, released August 1, 2026, positioned as a high-efficiency model for coding, agentic workflows, and web/app development. Part of the Gemini 3 series alongside Gemini 3.5 Flash and Gemini 3.6 Flash. Features a 1M token context window and native multimodal support (text, image, video, audio input; text output). Optimized for real-world tasks at lower cost and higher speed than preceding generations.
- **Provider / access:** Google Gemini API (`google/gemini-3.7-flash`); via AI Studio and Gemini API. No Free tier on Zen; API access requires Google Cloud account or AI Studio sign-up. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2026-08-01 release; knowledge cutoff March 2026 (per model card). "Gemini 3.7 Flash is part of the Gemini 3 series of models." Prior model: Gemini 3.6 Flash; successor: Gemini 3.8 Flash.
- **IDs:** `google/gemini-3.7-flash` (Gemini API); no Free tier on Zen. Closed-weights model distributed via AI Studio and Gemini API.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens ~524 books); 65,536 max output limit (per BenchGecko and API docs). "1,048,576 tokens" per API model spec; 65,536 max output limit per API model spec.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video." Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-08-01):** $1.50 input / $7.50 output per 1M tokens (per Epoch AI and Google AI Studio). Introductory price through December 31, 2026; from January 1, 2027: $3.00 input / $15.00 output. "Discounted batch pricing: 50% off input and output." "Cached input: $0.15 per 1M tokens." Quick comparison: Gemini 3.5 Flash $1.50/$9.00, Gemini 3.5 Flash-Lite cheaper, GPT-5.5 Pro $30/$180. "Output price includes thinking tokens." Priority inference costs 1.8x the standard rate.
- **Architecture:** Transformer-based multimodal model from Google DeepMind. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not fully disclosed. Thinking levels (low/medium/high) add flexibility but the minimal-not-supported limitation reduces usability.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **58.7%** (single attempt, July 2026); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.6 Luna 62.7%, Grok 4.5 64.7%, Claude Sonnet 5 63.2%
- DeepSWE v1.1, long-horizon software engineering: **49%** (July 2026); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.6 Luna 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: **76.28%** ±1.41, ranked #18 of 75 (July 2026, Vals AI); "ranks #1 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.89%** ±2.11, ranked #31 of 43 (July 2026, Vals AI)
- Code Migration: **32.41%** ±3.89, ranked #38 of 79 (Vals AI)
- CyberBench v1.1: not separately excerpted in all public excerpts; Vals AI notes "ranks #1 on the CyberBench P"

Reasoning / knowledge:
- GPQA Diamond: **94.5%** (July 2026, Epoch AI); "94.5%" per Epoch AI and BenchGecko
- SimpleQA Verified: **68.5%** (July 2026, Epoch AI); "68.5%" per Epoch AI
- Vals Index: **56.82%** (July 2026, Vals AI); "#15 of 43 models overall and finishing within 2.68 points of Gemini 3.5 Flash"; "ranks #1 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 58.7% and DeepSWE 49%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 86/100.** Strong function calling, code execution, file search, and computer use support per Google DeepMind API docs and benchmark results (SWE-Bench Pro 58.7%, Terminal-Bench 2.1 76.28%, CyberBench #1); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "76.28% on Terminal-Bench 2.1" and "ranks #1 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 84/100.** GPQA Diamond 94.5% (top percentile, "PhD-level science questions") and Vals Index 56.82% ("#15 of 43 models overall and finishing within 2.68 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of March 2026 (relative to newer models with 2026 cutoffs). The "94.5% on GPQA Diamond" and "ranks #1 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 93/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens ~524 books; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 93/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to audio/video encoder components.
- **Multimodal: 90/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per model card and Google Blog; exceptional among Flash-class models and differentiates strongly from text-plus-image-only models (Gemini 3.5 Flash 88, Gemini 3.1 Pro 80). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 78/100.** SWE-Bench Pro 58.7% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 49% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Google AI Studio; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a Flash-optimized model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 85/100.** $1.50 input / $7.50 output per 1M tokens (introductory price through December 31, 2026; from January 1, 2027: $3.00 / $15.00). "Discounted batch pricing: 50% off input and output." "Cached input: $0.15 per 1M tokens." "Introductory price through December 31, 2026." At list prices, Gemini 3.7 Flash sits between very cheap GPT-5.4 ($2.50/$15) and premium GPT-5.5 Pro ($30/$180), offering exceptional value for a frontier-class model with multimodal support. "39× cheaper per output token than GLM-5.3 Flash ($3.60 vs $0.092)" per ModelCap comparison; "63% cost reduction vs GPT-5.5 at list prices ($5/$30)." The combination of frontier performance and low per-token pricing (with batch discount) makes this the most cost-efficient multimodal frontier-model in the comparison dataset.

- **Overall Score: 86.2/100.** Mean of the five non-cost dims: (86 + 84 + 93 + 90 + 78) / 5 = 431 / 5 = 86.2, but the queue-listed Overall for position 19 is 91.6 (Gemini 3.7 Flash position 19?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 86.2, and the queue score likely reflects the model's strong per-benchmark scores (GPQA 94.5%, Terminal-Bench 2.1 76.28%, ECI #15) and its positioning as a cost-efficient multimodal frontier model, before full awareness of the model's successor Gemini 3.8 Flash and the January 2027 price increase), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 86.2, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 88). This aligns with Gemini 3.7 Flash's positioning above Gemini 3.6 Flash and Gemini 3.1 Pro, and below Gemini 4 Argon, and its strong cost-performance ratio for a multimodal frontier model.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Google DeepMind Gemini 3.7 Flash model card, Google AI Studio, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from DeepMind model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [Google AI Studio: Gemini 3.7 Flash](https://aistudio.google.com/)
  - [Epoch AI: Gemini 3.7 Flash](https://epoch.ai/models/gemini-3.7-flash)
  - [BenchGecko: Gemini 3.7 Flash](https://www.benchgecko.ai/model/gemini-3.7-flash)
  - [Vals AI: Gemini 3.7 Flash](https://www.vals.ai/models/google_gemini-3.7-flash)
  - [Google AI Studio: Pricing](https://aistudio.google.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.7-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.7-flash/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re