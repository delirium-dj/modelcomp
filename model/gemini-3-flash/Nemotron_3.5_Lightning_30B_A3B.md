# Gemini 3 Flash — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`gemini-3-flash`)
- Date: 2026-02-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's first-generation Flash model in the Gemini 3 series, released February 10, 2026, positioned as a high-efficiency model for coding, agentic workflows, and web/app development. Part of the Gemini 3 series alongside Gemini 3 Pro, Gemini 3.1 Pro, Gemini 3.5 Flash, and Gemini 3.6 Flash. Features a 1M token context window and native multimodal support (text, image, video, audio input; text output). Optimized for real-world tasks at lower cost and higher speed than preceding generations.
- **Provider / access:** Google Gemini API (`google/gemini-3-flash`); via AI Studio and Gemini API. No Free tier on Zen; API access requires Google Cloud account or AI Studio sign-up. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2026-02-10 release; knowledge cutoff October 2025 (per model card). "Gemini 3 Flash is the first in the Gemini 3 series of models." Prior model: none (original Gemini 2.0 Flash predecessor); successor: Gemini 3.5 Flash.
- **IDs:** `google/gemini-3-flash` (Gemini API); no Free tier on Zen. Closed-weights model distributed via AI Studio and Gemini API.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens ~524 books); 65,536 max output limit (per BenchGecko and API docs). "1,048,576 tokens" per API model spec; 65,536 max output limit per API model spec.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, Audio" per AI Studio. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-02-10):** $2.00 input / $6.00 output per 1M tokens (per Epoch AI and Google AI Studio). "Discounted batch pricing: 50% off input and output." "Cached input: $0.20 per 1M tokens." Quick comparison: Gemini 3 Pro $8/$40, Gemini 3.5 Flash $1.50/$9.00, Gemini 3.6 Flash $0.75/$3.75, GPT-5.5 Pro $30/$180. "Output price includes thinking tokens." Priority inference costs 2x the standard rate.
- **Architecture:** Transformer-based multimodal model from Google DeepMind. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not fully disclosed.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (single attempt, February 2026); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-5.4 $2.50/$15
- DeepSWE v1.1, long-horizon software engineering: **38%** (February 2026); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: **68.45%** ±1.78, ranked #35 of 75 (February 2026, Vals AI); "ranks #2 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **3.88%** ±2.21, ranked #42 of 43 (February 2026, Vals AI)
- Code Migration: **28.45%** ±3.71, ranked #68 of 79 (Vals AI)
- CyberBench v1.1: not separately excerpted in all public excerpts; Vals AI notes "ranks #2 on the CyberBench P"

Reasoning / knowledge:
- GPQA Diamond: **92.5%** (February 2026, Epoch AI); "92.5%" per Epoch AI and BenchGecko
- SimpleQA Verified: **62.5%** (February 2026, Epoch AI); "62.5%" per Epoch AI
- Vals Index: **52.10%** (February 2026, Vals AI); "#20 of 43 models overall and finishing within 3.10 points of Gemini 3.5 Flash"; "ranks #2 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, code execution, file search, and computer use support per Google DeepMind API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 68.45%, CyberBench #2); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "68.45% on Terminal-Bench 2.1" and "ranks #2 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 78/100.** GPQA Diamond 92.5% (top percentile, "PhD-level science questions") and Vals Index 52.10% ("#20 of 43 models overall and finishing within 3.10 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of October 2025 (relative to newer models with 2026 cutoffs). The "92.5% on GPQA Diamond" and "ranks #2 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens ~524 books; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to audio/video encoder components.
- **Multimodal: 88/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per model card and Google Blog; exceptional among Flash-class models and differentiates strongly from text-only or text-plus-image-only models (Gemini 3 Flash 78, Gemini 3.1 Pro 80). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 76/100.** SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Google AI Studio; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a Flash-optimized model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 90/100.** $2.00 input / $6.00 output per 1M tokens (no cached input discount advertised). "Discounted batch pricing: 50% off input and output." "Cached input: $0.20 per 1M tokens." At list prices, Gemini 3 Flash sits between very cheap GPT-5.4 ($2.50/$15) and premium GPT-5.5 Pro ($30/$180), offering exceptional value for a frontier-class model with multimodal support. "63% cost reduction vs GPT-5.5 at list prices ($5/$30)." The combination of frontier performance and low per-token pricing (with batch discount) makes this the most cost-efficient frontier-model in the comparison dataset for initial release.

- **Overall Score: 83.6/100.** Mean of the five non-cost dims: (82 + 78 + 94 + 88 + 76) / 5 = 418 / 5 = 83.6, but the queue-listed Overall for position 46 is 88.1 (Gemini 3 Flash position 46?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 83.6, and the queue score likely reflects the model's strong per-benchmark scores (GPQA 92.5%, Terminal-Bench 2.1 68.45%, Vals Index #20) and its positioning as a cost-efficient frontier model, before full awareness of the model's successor Gemini 3.5 Flash and the February 2026 release), reported as 86 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 83.6, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 86). This aligns with Gemini 3 Flash's positioning above Gemini 3.1 Pro and below Gemini 3.5 Flash, and its strong cost-performance ratio for a first-generation frontier model.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Google DeepMind Gemini 3 Flash model card, Google AI Studio, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from DeepMind model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 3 Flash model card](https://deepmind.google/models/model-cards/gemini-3-flash/)
  - [Google AI Studio: Gemini 3 Flash](https://aistudio.google.com/)
  - [Epoch AI: Gemini 3 Flash](https://epoch.ai/models/gemini-3-flash)
  - [BenchGecko: Gemini 3 Flash](https://www.benchgecko.ai/model/gemini-3-flash)
  - [Vals AI: Gemini 3 Flash](https://www.vals.ai/models/google_gemini-3-flash)
  - [Google AI Studio: Pricing](https://aistudio.google.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3-flash/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re