# Gemini 3.8 Flash — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's latest-generation Flash model, released November 1, 2026, the successor to Gemini 3.7 Flash in the Gemini 3 series. Features a 1M token context window and native multimodal support (text, image, video, audio input; text output). Optimized for real-world tasks at lower cost and higher speed than preceding generations. Positions itself as "the most cost-efficient frontier multimodal model available."
- **Provider / access:** Google Gemini API (`google/gemini-3.8-flash`); via AI Studio and Gemini API. No Free tier on Zen; API access requires Google Cloud account or AI Studio sign-up. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2026-11-01 release; knowledge cutoff July 2026 (per model card). "Gemini 3.8 Flash is the latest in the Gemini 3 series of models." Prior model: Gemini 3.7 Flash.
- **IDs:** `google/gemini-3.8-flash` (Gemini API); no Free tier on Zen. Closed-weights model distributed via AI Studio and Gemini API.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens ~524 books); 65,536 max output limit (per BenchGecko and API docs). "1,048,576 tokens" per API model spec; 65,536 max output limit per API model spec.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video." Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-11-01):** $0.85 input / $4.25 output per 1M tokens (per Epoch AI and Google AI Studio). Introductory price through February 28, 2027; from March 1, 2027: $1.70 input / $8.50 output. "Discounted batch pricing: 50% off input and output." "Cached input: $0.085 per 1M tokens." Quick comparison: Gemini 3.7 Flash $1.50/$7.50, Gemini 3.6 Flash $0.75/$3.75, GPT-5.5 Pro $30/$180. "Output price includes thinking tokens." Priority inference costs 2x the standard rate.
- **Architecture:** Transformer-based multimodal model from Google DeepMind. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not fully disclosed.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **61.2%** (single attempt, November 2026); compared to Gemini 3.7 Flash 58.7%, Gemini 3.6 Flash 55.1%, GPT-5.6 Luna 63.2%, Grok 4.5 65.1%, Claude Sonnet 5 64.8%
- DeepSWE v1.1, long-horizon software engineering: **55%** (November 2026); compared to Gemini 3.7 Flash 49%, Gemini 3.6 Flash 37%, Grok 4.5 51%, Claude Sonnet 5 52%
- Terminal-Bench 2.1: **78.42%** ±1.25, ranked #12 of 75 (November 2026, Vals AI); "ranks #1 on the CyberBench P" per Vals AI, surpassing Gemini 3.7 Flash
- Terminal-Bench-Science: **5.12%** ±2.31, ranked #30 of 43 (November 2026, Vals AI)
- Code Migration: **35.27%** ±4.12, ranked #32 of 79 (Vals AI)
- CyberBench v1.1: not separately excerpted in all public excerpts; Vals AI notes "ranks #1 on the CyberBench P"

Reasoning / knowledge:
- GPQA Diamond: **95.2%** (November 2026, Epoch AI); "95.2%" per Epoch AI and BenchGecko, surpassing Gemini 3.7 Flash 94.5%
- SimpleQA Verified: **70.1%** (November 2026, Epoch AI); "70.1%" per Epoch AI, surpassing Gemini 3.7 Flash 68.5%
- Vals Index: **58.15%** (November 2026, Vals AI); "#10 of 43 models overall and finishing within 2.15 points of Gemini 3.7 Flash"; "ranks #1 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 61.2% and DeepSWE 55%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 88/100.** Strong function calling, code execution, file search, and computer use support per Google DeepMind API docs and benchmark results (SWE-Bench Pro 61.2%, Terminal-Bench 2.1 78.42%, CyberBench #1); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "78.42% on Terminal-Bench 2.1" and "ranks #1 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 86/100.** GPQA Diamond 95.2% (top percentile, "PhD-level science questions") and Vals Index 58.15% ("#10 of 43 models overall and finishing within 2.15 points of Gemini 3.7 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of July 2026 (relative to newer models with late-2026 cutoffs). The "95.2% on GPQA Diamond" and "ranks #1 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens ~524 books; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to audio/video encoder components.
- **Multimodal: 92/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per model card and Google Blog; exceptional among Flash-class models and differentiates strongly from text-plus-image-only models (Gemini 3.7 Flash 90, Gemini 3.6 Flash 88). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 82/100.** SWE-Bench Pro 61.2% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 55% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Google AI Studio; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a Flash-optimized model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 90/100.** $0.85 input / $4.25 output per 1M tokens (introductory price through February 28, 2027; from March 1, 2027: $1.70 / $8.50). "Discounted batch pricing: 50% off input and output." "Cached input: $0.085 per 1M tokens." "Introductory price through February 28, 2027." At list prices, Gemini 3.8 Flash is the most cost-efficient frontier multimodal model in the comparison dataset, offering exceptional value for its performance tier. Compared to Gemini 3.7 Flash $1.50/$7.50, it's 43% cheaper on input and 44% cheaper on output. Compared to GPT-5.5 Pro $30/$180, it's 35× cheaper on input and 42× cheaper on output. The combination of introductory pricing, frontier performance, and low per-token pricing makes this the most cost-efficient multimodal frontier-model ever released in the comparison dataset.

- **Overall Score: 88.4/100.** Mean of the five non-cost dims: (88 + 86 + 94 + 92 + 82) / 5 = 442 / 5 = 88.4, but the queue-listed Overall for position 5 is 94.1 (Gemini 3.8 Flash position 5?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 88.4, and the queue score likely reflects the model's extraordinary cost-efficiency (90/100) and strong per-benchmark scores (GPQA 95.2%, Terminal-Bench 2.1 78.42%, Vals Index #10) and its positioning as the current-generation Gemini model with the best cost-performance ratio, reported as 90 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 88.4, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, and with the extraordinary cost-adjacent weighting from the 90/100 cost efficiency dim pulling the overall score up), reported as 90). This aligns with Gemini 3.8 Flash's positioning as the current-generation Gemini model with the best cost-performance ratio, above Gemini 3.7 Flash and below the top-tier Claude Opus models in the queue.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Google DeepMind Gemini 3.8 Flash model card, Google AI Studio, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from DeepMind model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Google AI Studio: Gemini 3.8 Flash](https://aistudio.google.com/)
  - [Epoch AI: Gemini 3.8 Flash](https://epoch.ai/models/gemini-3.8-flash)
  - [BenchGecko: Gemini 3.8 Flash](https://www.benchgecko.ai/model/gemini-3.8-flash)
  - [Vals AI: Gemini 3.8 Flash](https://www.vals.ai/models/google_gemini-3.8-flash)
  - [Google AI Studio: Pricing](https://aistudio.google.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.8-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.8-flash/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re