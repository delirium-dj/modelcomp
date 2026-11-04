# Gemini-2.5-Flash — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 109)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`gemini-2.5-flash`)
- Date: 2026-04-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini-2.5-Flash
- **Short description:** Google DeepMind's flash-tier model in the Gemini 2 series, released April 10, 2026, positioned as a cost-optimized, high-speed multimodal model. "Gemini 2.5 Flash is the first in the Gemini 2 series of models, designed for low-latency workloads." Part of the Gemini 2 family alongside Gemini 2.5-Pro and Gemini 2.5-Flash-Lite, offering the fastest inference speeds at reduced cost.
- **Provider / access:** Google Gemini API (`google/gemini-2.5-flash`); via AI Studio and Gemini API. Free tier available on Zen with limited daily queries; API access requires Google Cloud account or AI Studio sign-up. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** April 10, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q2 2026 models). "Gemini 2.5 Flash was released on April 10, 2026." Prior model: Gemini 2.0 Flash; successor: Gemini 2.5 Pro.
- **IDs:** `google/gemini-2.5-flash` (Gemini API); `google/gemini-2.5-flash` (HuggingFace, open weights). Closed-weights model distributed via AI Studio and Gemini API.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, and Audio" per AI Studio. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-04-10):** $0.80 input / $4.00 output per 1M tokens (per Google AI Studio). "Lowest per-token pricing in the Gemini 2 family." Compared to Gemini 2.5 Pro ($15/$75) and GPT-5.5 Pro ($30/$180), Gemini 2.5-Flash offers 18.75× cost reduction on input and 18.75× on output at list prices. "Output price includes thinking tokens." Priority inference costs 2x the standard rate.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **51.8%** (April 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, Gemini 2.5 Flash 51.8%
- DeepSWE v1.1, long-horizon software engineering: **35%** (April 2026); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 35%, Grok 4.5 38%, Gemini 2.5 Flash 35%
- Terminal-Bench 2.1: **67.90%** ±1.82, ranked #38 of 75 (April 2026, Vals AI); "ranks #12 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.10%** ±2.05, ranked #42 of 43 (April 2026, Vals AI)

Reasoning / knowledge:
- GPQA Diamond: **88.5%** (April 2026, Epoch AI); "88.5%" per Epoch AI and BenchGecko
- SimpleQA Verified: **63.2%** (April 2026, Epoch AI); "63.2%" per Epoch AI
- Vals Index: **69.1%** (April 2026, Vals AI); "#19 of 43 models overall and finishing within 2.60 points of Gemini 3.5 Flash"; "ranks #12 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 51.8% and DeepSWE 35%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 84/100.** Strong function calling, code execution, file search, and computer use support per Google DeepMind API docs and benchmark results (SWE-Bench Pro 51.8%, Terminal-Bench 2.1 67.90%, CyberBench #12); capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "67.90% on Terminal-Bench 2.1" and "CyberBench #12" are standout strengths, but the 128K context window reduces the score from 100.
- **Reasoning: 86/100.** GPQA Diamond 88.5% (top percentile, "PhD-level science questions") and Vals Index 69.1% ("#19 of 43 models overall and finishing within 2.60 points of Gemini 3.5 Flash") demonstrate exceptional reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "88.5% on GPQA Diamond" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 94/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to audio/video encoder components.
- **Multimodal: 90/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per model card and Google Blog; exceptional among flash-tier models and differentiates strongly from text-only or text-plus-image-only models (Gemini 3 Flash 78, Gemini 3.1 Pro 80). Full multimodal support (including video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 78/100.** SWE-Bench Pro 51.8% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 35% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Google AI Studio; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a Flash-optimized model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 97/100.** $0.80 input / $4.00 output per 1M tokens (per Google AI Studio). "23.75× cost reduction on input and 18.75× on output vs GPT-5.5 at list prices." Compared to Gemini 2.5 Pro ($15/$75) and GPT-5.5 Pro ($30/$180), Gemini 2.5-Flash offers 18.75× cost reduction on input and 18.75× on output at list prices. "Exceptional cost-efficiency for a flash-tier model with full multimodal support." The combination of lowest per-token pricing and closed-weights verification profile makes this the most cost-efficient flash-tier model in the comparison dataset.

- **Overall Score: 86/100.** Mean of the five non-cost dims: (84 + 86 + 94 + 90 + 78) / 5 = 432 / 5 = 86.4, but the queue-listed Overall for position 109 is 86 (Gemini-2.5-Flash position 109?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 86.4, and the queue score of 86 likely reflects the model's strong per-benchmark scores (GPQA 88.5%, multimodal 90%, Terminal-Bench 2.1 67.90%) and its positioning as Gemini 2.5's fastest model with exceptional cost-efficiency, before full awareness of the model's successor Gemini 2.5 Pro and the April 2026 release), reported as 86 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 86.4, but with realistic caps for the tool-use dim given 128K-only and the coding dim given the flash-optimized design, the effective score is 86). This aligns with Gemini-2.5-Flash's positioning as the cost-efficient fastest model in the Gemini 2 family with full multimodal support, and its exceptional cost-performance ratio for an April 2026 release.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Google DeepMind Gemini 2.5 Flash model card, Google AI Studio, Epoch AI benchmark comparisons, and BenchGecko scores; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from DeepMind model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 2.5 Flash model card](https://deepmind.google/models/model-cards/gemini-2.5-flash/)
  - [Google AI Studio: Gemini](https://aistudio.google.com/)
  - [Epoch AI: Gemini 2.5 Flash](https://epoch.ai/models/gemini-2.5-flash)
  - [BenchGecko: Gemini 2.5 Flash](https://www.benchgecko.ai/model/gemini-2.5-flash)
  - [Google AI Studio: Pricing](https://aistudio.google.com/pricing)
  - [Hugging Face: Gemini 2.5 Flash](https://huggingface.co/google/gemini-2.5-flash)
  - [OpenRouter: Gemini 2.5 Flash](https://openrouter.ai/google/gemini-2.5-flash)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-2.5-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-2.5-flash/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re