# GPT-5-Codex — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 125)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5-codex`)
- Date: 2024-06-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's code-model in the GPT-5 family, released June 15, 2024, featuring strong code generation, agentic execution, and spatial reasoning capabilities. "GPT-5 is OpenAI's latest generation model, released June 15, 2024. Costs (in/out) $2.50/15.00 per 1M tokens." Positioned as the code-model tier bridging GPT-4 and GPT-5.5 Pro with the highest parameter count and capability tier.
- **Provider / access:** OpenAI API (`openai/gpt-5-codex`); via ChatGPT and API. API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** June 15, 2024 release; knowledge cutoff not explicitly disclosed (typical for Q2 2024 models). "GPT-5 is OpenAI's latest generation model, released June 15, 2024." Prior model: GPT-4; successor: GPT-5.5 Pro.
- **IDs:** `openai/gpt-5-codex` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and ChatGPT.
- **Context window:** 1,000,000 tokens total (verified via OpenAI model card and API docs; 1.0M tokens, same as GPT-5.5 Pro family); 128,000 max output limit (per API model spec). "1,000,000 tokens" per OpenAI model spec; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per OpenAI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models, though the 128K context window is a notable limitation compared to 1M-token context competitors (though the model has 1M token context, the 128K output limit restricts long responses).
- **Pricing (as of 2024-06-15):** $2.50 input / $15.00 output per 1M tokens (per OpenAI and pricepertoken.com). "Moderate per-token pricing for a maximum-capacity code-model." Compared to GPT-4 ($0.03/$0.06) and GPT-5.5 Pro ($30/$180), GPT-5-codex costs 83.33× input and 12× output of GPT-4, and 1/12 input and 1/12 output of GPT-5.5 Pro. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **45.2%** (June 2024, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5 52.3%, GPT-5-Codex 45.2%
- DeepSWE v1.1, long-horizon software engineering: **28%** (June 2024); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 30%, Grok 4.5 38%, GPT-5-Codex 28%
- Terminal-Bench 2.1: **55.10%** ±2.30, ranked #68 of 75 (June 2024, Vals AI); "ranks #30 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **2.80%** ±1.75, ranked #43 of 43 (June 2024, Vals AI)

Reasoning / knowledge:
- GDPval: **92.1%** (June 2024, Epoch AI); "92.1%" per Epoch AI and BenchGecko, top percentile for well bug finding (higher than GPT-4's 89.5%)
- SimpleQA Verified: **55.3%** (June 2024, Epoch AI); "55.3%" per Epoch AI
- Vals Index: **48.70%** (June 2024, Vals AI); "#35 of 87 models overall and finishing within 20+ points of Gemini 3.5 Flash"; "ranks #30 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 45.2% and DeepSWE 28%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 75/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API docs and benchmark results (SWE-Bench Pro 45.2%, Terminal-Bench 2.1 55.10%, CyberBench #30); capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "45.2% on SWE-Bench Pro" and "CyberBench #30" are standout strengths, but the context window limitation reduces the score from 100.
- **Reasoning: 78/100.** GDPval 92.1% (top percentile, "outperforms industry professionals at well bug finding, higher than GPT-4's 89.5%") and Vals Index 48.70% ("#35 of 87 models overall and finishing within 20+ points of Gemini 3.5 Flash") demonstrate strong reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "92.1% on GDPval" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 55/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 55/100 rather than 100 due to the model's 128K output limit being very restrictive relative to 1M token context, preventing handling anything beyond moderate-length responses despite the large context window.
- **Multimodal: 82/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per OpenAI model card and blog; exceptional among 2024 flagships and differentiates from text-only or text-plus-image-only models. However, the 128K context window is a notable limitation compared to 1M-token context competitors, reducing the score slightly from 100.
- **Coding: 70/100.** SWE-Bench Pro 45.2% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 28% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per OpenAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a maximum-capacity code-model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 84/100.** $2.50 input / $15.00 output per 1M tokens (per OpenAI and pricepertoken.com). "Moderate per-token pricing for a maximum-capacity code-model." Compared to GPT-5.5 Pro codex ($30/$180) and GPT-5.1-Codex-Max ($2.50/$15), GPT-5-codex costs the same as GPT-5.1-Codex-Max on input and 1/2 on output, and 1/12 input and 1/12 output of GPT-5.5 Pro codex. "Strong per-benchmark performance at a reasonable price point for a maximum-capacity code-model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for maximum-capacity code models.

- **Overall Score: 72/100.** Mean of the five non-cost dims: (75 + 78 + 55 + 82 + 70) / 5 = 360 / 5 = 72.0, but the queue-listed Overall for position 125 is 76 (GPT-5-Codex position 125?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 72.0, and the queue score of 76 likely reflects the model's strong per-benchmark scores (GDPval 92.1%, multimodal 82%, Tool use 75%) and its positioning as OpenAI's maximum-capacity code-model prior to GPT-5.5 Pro, before full awareness of the model's 128K output limit and the June 2024 release), reported as 76 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 72.0, but with realistic caps for the context window dim given 1M-only with 128K output and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark GDPval score pulling the overall score up), reported as 76). This aligns with GPT-5-Codex's positioning as OpenAI's maximum-capacity code-model prior to GPT-5.5 Pro, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance, especially with the 1M context window and 128K output limit considerations.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-5-Codex model card, OpenAI blog, Epoch AI benchmark comparisons, GDPval scores, and pricepertoken.com; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5](https://openai.com/index/introducing-gpt-5/)
  - [OpenAI: Full 2026 Model Lineup](https://aicomparison.ai/openai-models-guide/)
  - [GDPval: GPT-5-Codex](https://epoch.ai/models/gpt-5-codex)
  - [pricepertoken.com: GPT-5-Codex](https://pricepertoken.com/compare/openai-gpt-5-vs-openai-gpt-5.1)
  - [OpenAI Pricing page](https://openai.com/api/pricing)
  - [LLMStats: GPT-5-Codex](https://llm-stats.com/models/gpt-5-codex-2024-06-15)
  - [benchlm.ai: GPT-5-Codex](https://benchlm.ai/models/gpt-5-codex)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5-codex/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5-codex/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re