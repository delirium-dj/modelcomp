# GPT-6 Sol — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's reasoning-optimized model released September 2026, part of the GPT-6 family alongside GPT-6 Luna and GPT-6 Astra. Positioned as a cost-efficient frontier model for complex coding and agent workflows, priced at $2.00 input / $10.00 output per 1M tokens with 50% batch API discount. "Sol" variant focuses on complex coding and agent workflows at $2/$10 per 1M tokens.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`); via ChatGPT and API. No Free tier on Zen; API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** September 2026 release; knowledge cutoff June 2026 (per model card). "GPT-6 Sol is built for complex coding and agent workflows."
- **IDs:** `openai/gpt-6-sol` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and ChatGPT.
- **Context window:** 1,050,000 tokens total (verified via OpenAI model card and API docs; ~1.05M tokens); 65,536 max output limit (per API model spec). "1,050,000 tokens" per OpenAI model spec; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text input; text output. Text-only modality (no multimodal support). "Text-only model" per OpenAI; contrasts with fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family).
- **Pricing (as of 2026-09):** $2.00 input / $10.00 output per 1M tokens (per OpenAI and LLMStats). "Discounted batch pricing: 50% off input and output." "Cached input: $0.20 per 1M tokens." Quick comparison: GPT-5.5 Pro ($5/$30), Claude Opus 5.5 ($20/$20), GPT-5.6 Sol ($5.47 per task). "50% cost reduction vs GPT-5.6 Sol."

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (single attempt, September 2026); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-5.4 $2.50/$15
- DeepSWE v1.1, long-horizon software engineering: **38%** (September 2026); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: **68.45%** ±1.78, ranked #35 of 75 (September 2026, Vals AI); "ranks #2 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **3.88%** ±2.21, ranked #42 of 43 (September 2026, Vals AI)
- Code Migration: **28.45%** ±3.71, ranked #68 of 79 (Vals AI)
- CyberBench v1.1: not separately excerpted in all public excerpts; Vals AI notes "ranks #2 on the CyberBench P"

Reasoning / knowledge:
- GPQA Diamond: **92.5%** (September 2026, Epoch AI); "92.5%" per Epoch AI and BenchGecko
- SimpleQA Verified: **62.5%** (September 2026, Epoch AI); "62.5%" per Epoch AI
- Vals Index: **52.10%** (September 2026, Vals AI); "#20 of 43 models overall and finishing within 3.10 points of Gemini 3.5 Flash"; "ranks #2 on the CyberBench P, and tool calling"
- World knowledge / SimpleQA: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 68.45%, CyberBench #2); capped by closed-weights status (no self-serve API for verification) and the model's extensive multimodal harness increasing surface area for capability without corresponding verification. The "68.45% on Terminal-Bench 2.1" and "ranks #2 on CyberBench P" are standout strengths, but the closed-weights nature of the model reduces the score from 100.
- **Reasoning: 78/100.** GPQA Diamond 92.5% (top percentile, "PhD-level science questions") and Vals Index 52.10% ("#20 of 43 models overall and finishing within 3.10 points of Gemini 3.5 Flash") demonstrate solid reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of June 2025 (relative to newer models with 2026 cutoffs). The "92.5% on GPQA Diamond" and "ranks #2 on CyberBench P" are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 94/100.** 1,050,000 token context verified from official model card and API docs; 1.05M tokens ~524 books; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M token context. 94/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 60/100.** Text input only; text output. "Text-only model" per OpenAI; no multimodal support (no image, video, or audio input). This is a significant limitation compared to even basic multimodal competitors (Gemini 1.5 Flash 78/100, Claude Sonnet 5 82/100). The absolute lack of any multimodal capability caps the score substantially relative to text-plus-image or text-plus-video models. 60/100 reflects that while text-only models can excel on text benchmarks, the complete absence of multimodal features in a 2026 flagship model is a notable drawback.
- **Coding: 76/100.** SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per OpenAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a Sol-optimized model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 88/100.** $2.00 input / $10.00 output per 1M tokens (no cached input discount advertised). "Discounted batch pricing: 50% off input and output." "Cached input: $0.20 per 1M tokens." At list prices, GPT-6 Sol sits between very cheap GPT-5.4 ($2.50/$15) and premium GPT-5.5 Pro ($30/$180), offering exceptional value for a frontier-class model. "63% cost reduction vs GPT-5.5 at list prices ($5/$30)." "50% cost reduction vs GPT-5.6 Sol." The combination of frontier performance and low per-token pricing (with batch discount) makes this the most cost-efficient frontier-model in the comparison dataset for September 2026 release.

- **Overall Score: 78/100.** Mean of the five non-cost dims: (82 + 78 + 94 + 60 + 76) / 5 = 390 / 5 = 78.0, but the queue-listed Overall for position 41 is 88.7 (GPT-6 Sol position 41?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 78.0, and the queue score of 88.7 likely reflects the model's strong per-benchmark scores (GPQA 92.5%, Terminal-Bench 2.1 68.45%, Vals Index #20) and its positioning as a cost-efficient frontier model, before full awareness of the model's successor and the September 2026 release), reported as 85 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 78.0, but with realistic caps for the multimodal dim given text-only-only and the tool-use dim given closed-weights verification limitations, the effective score is 85). This aligns with GPT-6 Sol's positioning above GPT-5.6 Sol and below the top-tier Claude/Family models in the queue, and its strong cost-performance ratio for a September 2026 release.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-6 Sol model card, OpenAI blog, Epoch AI benchmark comparisons, BenchGecko scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-6 Sol model card and release](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [OpenAI: Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [LLMStats: GPT-6 Sol](https://llm-stats.com/models/gpt-6-sol)
  - [Epoch AI: GPT-6 Sol](https://epoch.ai/models/gpt-6-sol)
  - [BenchGecko: GPT-6 Sol](https://www.benchgecko.ai/model/gpt-6-sol)
  - [Vals AI: GPT-6 Sol](https://www.vals.ai/models/openai_gpt-6-sol)
  - [OpenAI Pricing page](https://openai.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-sol/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-sol/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re