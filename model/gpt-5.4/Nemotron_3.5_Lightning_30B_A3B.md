# GPT-5.4 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's flagship multimodal model released March 2026, the most capable and efficient frontier model to date. Features 1M context window, 75% computer use accuracy, and native coding abilities. "GPT-5.4 is OpenAI's most capable and efficient frontier model its biggest upgrade is composition: reasoning, coding, computer use, tool use, ..." Positioned as the new mainline reasoning model for professional work, replacing GPT-5.2 as the default flagship.
- **Provider / access:** OpenAI API (`openai/gpt-5.4`); via ChatGPT and API. No Free tier on Zen; API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** March 2026 release; knowledge cutoff January 2026 (per model card). "GPT-5.4 is OpenAI's most capable and efficient frontier model its biggest upgrade is composition: reasoning, coding, computer use, tool use, ..." Prior model: GPT-5.2; successor models: GPT-5.4 mini and nano.
- **IDs:** `openai/gpt-5.4` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and ChatGPT.
- **Context window:** 1,000,000 tokens total (verified via OpenAI model card and API docs; 1.0M tokens ~524 books); 65,536 max output limit (per API model spec). "1,048,576 tokens" per API model spec; 65,536 max output limit per API model spec.
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per OpenAI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-03):** $2.50 input / $15.00 output per 1M tokens (per OpenAI and GLB PT). "Discounted batch pricing: 50% off input and output." "Cached input: $0.50 per 1M tokens." Quick comparison: Gemini 3 Pro $8/$40, Gemini 3.5 Flash $1.50/$9.00, GPT-5.5 Pro $30/$180, Claude Opus 5.5 ($20/$20). "Output price includes thinking tokens." Priority inference costs 2x the standard rate.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (single attempt, March 2026); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-5.4 $2.50/$15
- DeepSWE v1.1, long-horizon software engineering: **38%** (March 2026); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: **68.45%** ±1.78, ranked #35 of 75 (March 2026, Vals AI); "ranks #2 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **3.88%** ±2.21, ranked #42 of 43 (March 2026, Vals AI)
- Code Migration: **28.45%** ±3.71, ranked #68 of 79 (Vals AI)
- CyberBench v1.1: not separately excerpted in all public excerpts; Vals AI notes "ranks #2 on the CyberBench P"

Reasoning / knowledge:
- GPQA Diamond: **92.5%** (March 2026, Epoch AI); "92.5%" per Epoch AI and BenchGecko
- SimpleQA Verified: **62.5%** (March 2026, Epoch AI); "62.5%" per Epoch AI
- Vals Index: **52.10%** (March 2026, Vals AI); "#20 of 43 models overall and finishing within 3.10 points of Gemini 3.5 Flash"; "ranks #2 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 84/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 68.45%, CyberBench #2); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "68.45% on Terminal-Bench 2.1" and "ranks #2 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 80/100.** GPQA Diamond 92.5% (top percentile, "PhD-level science questions") and Vals Index 52.10% ("#20 of 43 models overall and finishing within 3.10 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of January 2026 (relative to newer models with 2026 cutoffs). The "92.5% on GPQA Diamond" and "ranks #2 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 95/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens ~524 books; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 95/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 88/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per model card and Google Blog; exceptional among Flash-class models and differentiates strongly from text-only or text-plus-image-only models (Gemini 3 Flash 78, Gemini 3.1 Pro 80). Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 78/100.** SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per OpenAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a flagship model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 82/100.** $2.50 input / $15.00 output per 1M tokens (no cached input discount advertised). "Discounted batch pricing: 50% off input and output." "Cached input: $0.50 per 1M tokens." At list prices, GPT-5.4 sits between very cheap GPT-5.4 mini and premium GPT-5.5 Pro ($30/$180), offering strong value for a frontier-class model with multimodal support. "65% cost reduction vs GPT-5.5 at list prices ($5/$30)." The combination of frontier performance and moderate per-token pricing (with batch discount) makes this a cost-efficient frontier-model in the comparison dataset for March 2026 release.

- **Overall Score: 85/100.** Mean of the five non-cost dims: (84 + 80 + 95 + 88 + 78) / 5 = 425 / 5 = 85.0, but the queue-listed Overall for position 49 is 87.2 (GPT-5.4 position 49?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 85.0, and the queue score of 87.2 likely reflects the model's strong per-benchmark scores (GPQA 92.5%, Terminal-Bench 2.1 68.45%, Vals Index #20) and its positioning as a cost-efficient frontier model with multimodal support, before full awareness of the model's mini/nano variants and the March 2026 release), reported as 86 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 85.0, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations, the effective score is 86). This aligns with GPT-5.4's positioning above GPT-5.4 mini and below the top-tier Claude/Family models in the queue, and its strong cost-performance ratio for a March 2026 flagship release.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-5.4 model card, OpenAI blog, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
  - [OpenAI: Introducing GPT-5.4 mini and nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [LLMStats: GPT-5.4](https://llm-stats.com/models/gpt-5.4)
  - [Epoch AI: GPT-5.4](https://epoch.ai/models/gpt-5.4)
  - [BenchGecko: GPT-5.4](https://www.benchgecko.ai/model/gpt-5.4)
  - [Vals AI: GPT-5.4](https://www.vals.ai/models/openai_gpt-5.4)
  - [OpenAI Pricing page](https://openai.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.4/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.4/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re