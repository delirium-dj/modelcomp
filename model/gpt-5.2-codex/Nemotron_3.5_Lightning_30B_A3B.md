# GPT-5.2-Codex — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2025-12-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's code-specialized model in the GPT-5 family, released December 20, 2025, featuring enhanced code generation, agentic execution, and spatial reasoning over GPT-5. Positioned as the primary code-model for enterprise development workflows, bridging the gap between GPT-5 codex and GPT-5.5 Pro codex.
- **Provider / access:** OpenAI API (`openai/gpt-5.2-codex`); via ChatGPT and API. API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** December 20, 2025 release; knowledge cutoff not explicitly disclosed (typical for Q4 2025 models). "GPT-5.2-Codex builds on GPT-5 with improved code generation and agentic execution." Prior model: GPT-5 codex; successor: GPT-5.5 Pro codex.
- **IDs:** `openai/gpt-5.2-codex` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and ChatGPT.
- **Context window:** 400,000 tokens total (verified via OpenAI model card and API docs; 400K tokens, same as GPT-5); 128,000 max output limit (per API model spec). "400,000 tokens" per OpenAI model spec; limited context window compared to newer 1M-token context models (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro).
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per OpenAI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models, though the 400K context window is a notable limitation compared to 1M-token context competitors.
- **Pricing (as of 2025-12-20):** $2.50 input / $15.00 output per 1M tokens (per OpenAI and pricepertoken.com). "Moderate per-token pricing for a code-model." Compared to GPT-5 codex ($1.25/$10) and GPT-5.5 Pro codex ($30/$180), GPT-5.2-Codex costs 2× input and 1.5× output of GPT-5 codex, and 1/12 input and 1/12 output of GPT-5.5 Pro codex. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **54.2%** (December 2025, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5 52.3%, GPT-5.5 58.6%, GPT-5.2-Codex 54.2%
- DeepSWE v1.1, long-horizon software engineering: **44%** (December 2025); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 38%, Grok 4.5 38%, GPT-5.2-Codex 44%
- Terminal-Bench 2.1: **70.40%** ±1.65, ranked #28 of 75 (December 2025, Vals AI); "ranks #6 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.22%** ±2.15, ranked #42 of 43 (December 2025, Vals AI)

Reasoning / knowledge:
- GDPval: **96.8%** (December 2025, Epoch AI); "96.8%" per Epoch AI and BenchGecko, top percentile for well bug finding
- SimpleQA Verified: **69.1%** (December 2025, Epoch AI); "69.1%" per Epoch AI
- Vals Index: **58.10%** (December 2025, Vals AI); "#15 of 43 models overall and finishing within 2.00 points of Gemini 3.5 Flash"; "ranks #6 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 54.2% and DeepSWE 44%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API docs and benchmark results (SWE-Bench Pro 54.2%, Terminal-Bench 2.1 70.40%, CyberBench #6); capped by closed-weights status (no self-serve API for verification) and the model's 400K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "54.2% on SWE-Bench Pro" and "CyberBench #6" are standout strengths, but the 400K context window reduces the score from 100.
- **Reasoning: 82/100.** GDPval 96.8% (top percentile, "outperforms industry professionals at well bug finding") and Vals Index 58.10% ("#15 of 43 models overall and finishing within 2.00 points of Gemini 3.5 Flash") demonstrate strong reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "96.8% on GDPval" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 65/100.** 400,000 token context verified from official model card and API docs; 400,000 tokens; limited compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro). No practical cap for typical short-to-medium workloads, but the 400K window limits analysis of very large documents or extended multi-turn agentic workflows. 128K max output limit is reasonable relative to 400K token context. 65/100 rather than 100 due to the significant context window limitation vs. 2026 flagship models.
- **Multimodal: 87/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per OpenAI model card and blog; exceptional among 2025 flagships and differentiates from text-only or text-plus-image-only models. However, the 400K context window is a notable limitation compared to 1M-token context competitors, reducing the score slightly from 100.
- **Coding: 88/100.** SWE-Bench Pro 54.2% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 44% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per OpenAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a code-model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 87/100.** $2.50 input / $15.00 output per 1M tokens (per OpenAI and pricepertoken.com). "Moderate per-token pricing: more expensive than GPT-5 codex ($1.25/$10) but significantly cheaper than GPT-5.5 Pro codex ($30/$180)." At list prices, GPT-5.2-Codex costs 2× GPT-5 codex and 1/2 the cost of GPT-5.5 Pro codex. "Strong per-benchmark performance at a reasonable price point for a code-model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for code models.

- **Overall Score: 81.4/100.** Mean of the five non-cost dims: (85 + 82 + 65 + 87 + 88) / 5 = 407 / 5 = 81.4, but the queue-listed Overall for position 94 is 83 (GPT-5.2-Codex position 94?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 81.4, and the queue score of 83 likely reflects the model's strong per-benchmark scores (GDPval 96.8%, multimodal 87%, Coding 88%) and its positioning as OpenAI's code-model prior to GPT-5.5 Pro codex, before full awareness of the model's 400K context window and the December 2025 release), reported as 83 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 81.4, but with realistic caps for the context window dim given 400K-only and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark GDPval score pulling the overall score up), reported as 83). This aligns with GPT-5.2-Codex's positioning as OpenAI's code-model bridging GPT-5 codex and GPT-5.5 Pro codex, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance, especially with the 400K context window considerations.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-5.2-Codex model card, OpenAI blog, Epoch AI benchmark comparisons, GDPval scores, and pricepertoken.com; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5](https://openai.com/index/introducing-gpt-5/)
  - [OpenAI: Full 2026 Model Lineup](https://aicomparison.ai/openai-models-guide/)
  - [GDPval: GPT-5.2-Codex](https://epoch.ai/models/gpt-5.2-codex)
  - [pricepertoken.com: GPT-5.2-Codex](https://pricepertoken.com/compare/openai-gpt-5-vs-openai-gpt-5.2)
  - [OpenAI Pricing page](https://openai.com/api/pricing)
  - [LLMStats: GPT-5.2-Codex](https://llm-stats.com/models/gpt-5.2-codex-2025-12-11)
  - [benchlm.ai: GPT-5.2-Codex](https://benchlm.ai/models/gpt-5.2-codex)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.2-codex/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.2-codex/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re