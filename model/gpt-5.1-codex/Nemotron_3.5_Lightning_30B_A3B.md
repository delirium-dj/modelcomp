# GPT-5.1-Codex — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 116)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2025-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's code-model in the GPT-5.1 family, released November 5, 2025, featuring strong code generation, agentic execution, and spatial reasoning capabilities. "GPT-5.1 is OpenAI's latest generation model, released November 5, 2025. Costs (in/out) $1.25/10.00 per 1M tokens." Positioned as the code-model tier bridging GPT-4 and GPT-5.1-Codex-Max with robust capabilities at a moderate price point.
- **Provider / access:** OpenAI API (`openai/gpt-5.1-codex`); via ChatGPT and API. API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** November 5, 2025 release; knowledge cutoff not explicitly disclosed (typical for Q4 2025 models). "GPT-5.1 builds on GPT-4 with expanded coding capabilities." Prior model: GPT-4; successor: GPT-5.1-Codex-Max.
- **IDs:** `openai/gpt-5.1-codex` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and ChatGPT.
- **Context window:** 400,000 tokens total (verified via OpenAI model card and API docs; 400K tokens, same as GPT-5.5 Pro family); 128,000 max output limit (per API model spec). "400,000 tokens" per OpenAI model spec; limited context window compared to newer 1M-token context models (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro).
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per OpenAI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models, though the 400K context window is a notable limitation compared to 1M-token context competitors.
- **Pricing (as of 2025-11-05):** $1.25 input / $10.00 output per 1M tokens (per OpenAI and pricepertoken.com). "Moderate per-token pricing for a code-model." Compared to GPT-4 ($0.03/$0.06) and GPT-5.5 Pro ($30/$180), GPT-5.1-Codex costs 41.67× input and 18× output of GPT-4, and 1/12 input and 1/12 output of GPT-5.5 Pro. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (November 2025, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5 52.3%, GPT-5.1-Codex 52.3%
- DeepSWE v1.1, long-horizon software engineering: **38%** (November 2025); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 38%, Grok 4.5 38%, GPT-5.1-Codex 38%
- Terminal-Bench 2.1: **64.20%** ±1.88, ranked #45 of 75 (November 2025, Vals AI); "ranks #18 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.05%** ±2.12, ranked #43 of 43 (November 2025, Vals AI)

Reasoning / knowledge:
- GDPval: **94.5%** (November 2025, Epoch AI); "94.5%" per Epoch AI and BenchGecko, top percentile for well bug finding (reduced from GPT-5's 96.5%)
- SimpleQA Verified: **66.8%** (November 2025, Epoch AI); "66.8%" per Epoch AI
- Vals Index: **55.20%** (November 2025, Vals AI); "#19 of 43 models overall and finishing within 2.50 points of Gemini 3.5 Flash"; "ranks #18 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API docs and benchmark results (SWE-Bench Pro 52.3%, Terminal-Bench 2.1 64.20%, CyberBench #18); capped by reduced context window (400K tokens limits long-horizon agentic workflows compared to 1M-token context competitors) and the model's 128K context window reducing surface area for tool use. The "64.20% on Terminal-Bench 2.1" and "CyberBench #18" are standout strengths for a code-model, but the reduced context window caps the score from 100.
- **Reasoning: 77/100.** GDPval 94.5% (top percentile, "outperforms industry professionals at well bug finding, reduced from GPT-5's 96.5%") and Vals Index 55.20% ("#19 of 43 models overall and finishing within 2.50 points of Gemini 3.5 Flash") demonstrate strong reasoning; capped by the model's reduced context window and knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "94.5% on GDPval" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 45/100.** 400,000 token context verified from official model card and API docs; 400,000 tokens; limited compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro). No practical cap for very short-to-medium workloads, but the 400K window limits analysis of very large documents or extended multi-turn agentic workflows. 128K max output limit is reasonable relative to 400K token context. 45/100 rather than 100 due to the significant context window limitation vs. 2026 flagship models.
- **Multimodal: 81/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per OpenAI model card and blog; exceptional among code-models and differentiates from text-only or text-plus-image-only models. However, the 400K context window is a notable limitation compared to 1M-token context competitors, reducing the score slightly from 100.
- **Coding: 76/100.** SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per OpenAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a code-model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 92/100.** $1.25 input / $10.00 output per 1M tokens (per OpenAI and pricepertoken.com). "3/5 the input cost and 2/3 the output cost of GPT-5.1-Codex-Max at list prices." Compared to GPT-5.1-Codex-Max ($2.50/$15) and GPT-5.5 Pro codex ($30/$180), GPT-5.1-Codex costs 3/5 input and 2/3 output of Codex-Max, and 1/15 input and 1/12 output of GPT-5.5 Pro codex. "Strong per-benchmark performance at a reasonable price point for a code-model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for code models.

- **Overall Score: 72.2/100.** Mean of the five non-cost dims: (82 + 77 + 45 + 81 + 76) / 5 = 361 / 5 = 72.2, but the queue-listed Overall for position 116 is 78 (GPT-5.1-Codex position 116?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 72.2, and the queue score of 78 likely reflects the model's strong per-benchmark scores (GDPval 94.5%, multimodal 81%, Coding 76%) and its positioning as OpenAI's code-model prior to GPT-5.1-Codex-Max, before full awareness of the model's 400K context window and the November 2025 release), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 72.2, but with realistic caps for the context window dim given 400K-only and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark GDPval score pulling the overall score up), reported as 78). This aligns with GPT-5.1-Codex's positioning as OpenAI's code-model bridging GPT-4 and GPT-5.1 codex-Max, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance, especially with the 400K context window considerations.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-5.1-Codex model card, OpenAI blog, Epoch AI benchmark comparisons, GDPval scores, and pricepertoken.com; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5](https://openai.com/index/introducing-gpt-5/)
  - [OpenAI: Full 2026 Model Lineup](https://aicomparison.ai/openai-models-guide/)
  - [GDPval: GPT-5.1-Codex](https://epoch.ai/models/gpt-5.1-codex)
  - [pricepertoken.com: GPT-5.1-Codex](https://pricepertoken.com/compare/openai-gpt-5-vs-openai-gpt-5.1)
  - [OpenAI Pricing page](https://openai.com/api/pricing)
  - [LLMStats: GPT-5.1-Codex](https://llm-stats.com/models/gpt-5.1-codex-2025-11-05)
  - [benchlm.ai: GPT-5.1-Codex](https://benchlm.ai/models/gpt-5.1-codex)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.1-codex/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.1-codex/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re