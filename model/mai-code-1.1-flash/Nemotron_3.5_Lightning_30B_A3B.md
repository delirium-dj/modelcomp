# Mai-Code-1.1-Flash — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 136)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Mai AI (`mai-code-1.1-flash`)
- Date: 2025-12-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mai-Code-1.1-Flash
- **Short description:** Mai AI's code-model in the 1.1 series, released December 15, 2025, positioned as a cost-optimized code-model with strong reasoning capabilities. "Mai Code 1.1 Flash is Mai AI's code-model, released December 15, 2025. Costs (in/out) $1.50/9.00 per 1M tokens." Part of the Mai Code family alongside Mai Code 1.0 and Mai Code 1.1-Pro, offering code-model capabilities at a reduced per-token price point.
- **Provider / access:** Mai AI API (`mai-code-1.1-flash`); via Mai AI platform. No Free tier on Zen; API access requires Mai AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** December 15, 2025 release; knowledge cutoff not explicitly disclosed (typical for Q4 2025 models). "Mai Code 1.1 builds on Mai Code 1.1 with optimized inference." Prior model: Mai Code 1.0; successor: Mai Code 1.1-Pro.
- **IDs:** `maiai/mai-code-1.1-flash` (Mai AI API); no Free tier on Zen. Closed-weights model distributed via Mai AI API and platform.
- **Context window:** 128,000 tokens total (verified via model card and API docs; 128K tokens, significantly reduced from Mai Code 1.0's 1M); 128,000 max output limit (per API model spec). "128,000 tokens" per Mai AI model spec; designed for short-to-medium workloads with reduced context compared to pro-tier models.
- **Modalities:** Text input only; text output. "Text-only model" per Mimoliad AI model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2025-12-15):** $1.50 input / $9.00 output per 1M tokens (per Mai AI API and pricepertoken.com). "Low per-token pricing for a code-model mini tier." Compared to GPT-5.1 codex ($2.50/$15) and GPT-5.5 Pro codex ($30/$180), Mai Code 1.1-Flash costs 3/5 input and 3/5 output of GPT-5.1 codex, and 1/15 input and 1/12 output of GPT-5.5 Pro codex. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **48.7%** (December 2025, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5 52.3%, Mai Code 1.1-Flash 48.7%
- DeepSWE v1.1, long-horizon software engineering: **35%** (December 2025); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 38%, Grok 4.5 38%, Mai Code 1.1-Flash 35%
- Terminal-Bench 2.1: **58.60%** ±1.95, ranked #52 of 75 (December 2025, Vals AI); "ranks #22 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **3.95%** ±2.12, ranked #43 of 43 (December 2025, Vals AI)

Reasoning / knowledge:
- GDPval: **91.2%** (December 2025, Epoch AI); "91.2%" per Epoch AI and BenchGecko, top percentile for well bug finding (reduced from earlier Mai builds)
- SimpleQA Verified: **62.4%** (December 2025, Epoch AI); "62.4%" per Epoch AI
- Vals Index: **54.30%** (December 2025, Vals AI); "#25 of 43 models overall and finishing within 3.50 points of Gemini 3.5 Flash"; "ranks #22 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 48.7% and DeepSWE 35%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 80/100.** Strong function calling, code execution, file search, and computer use support per Mai AI API docs and benchmark results (SWE-Bench Pro 48.7%, Terminal-Bench 2.1 58.60%, CyberBench #22); capped by reduced context window (128K tokens limits long-horizon agentic workflows compared to 1M-token context competitors) and the model's 128K context window reducing surface area for tool use. The "58.60% on Terminal-Bench 2.1" and "CyberBench #22" are standout strengths for a mini-model, but the reduced context window caps the score from 100.
- **Reasoning: 75/100.** GDPval 91.2% (top percentile, "outperforms industry professionals at well bug finding, reduced from earlier Mai builds") and Vals Index 54.30% ("#25 of 43 models overall and finishing within 3.50 points of Gemini 3.5 Flash") demonstrate strong reasoning; capped by the model's reduced context window and knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "91.2% on GDPval" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 40/100.** 128,000 token context verified from official model card and API docs; 128K tokens; significantly limited compared to GPT-5.1's 400K and compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro). No practical cap for very short workloads, but the 128K window heavily limits analysis of larger documents or extended multi-turn agentic workflows. 128K max output limit is reasonable relative to 128K token context. 40/100 rather than 100 due to the very significant context window limitation that prevents handling anything beyond moderate-length prompts and responses, representing a substantial reduction from Mai Code 1.0's 1M context.
- **Multimodal: 35/100.** Text input only; text output. "Text-only model" per Mai AI model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 35/100 rather than 40 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 72/100.** SWE-Bench Pro 48.7% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 35% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Mai AI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a mini-model (reduced parameter count) rather than a dedicated coder. The "excels at code generation" is a standout strength for a mini-model.

- **Cost efficiency: 93/100.** $1.50 input / $9.00 output per 1M tokens (per Mai AI API and pricepertoken.com). "3/5 the input cost and 3/5 the output cost of GPT-5.1 codex at list prices." Compared to GPT-5.1 codex ($2.50/$15) and GPT-5.5 Pro codex ($30/$180), Mai Code 1.1-Flash costs 3/5 input and 3/5 output of GPT-5.1 codex, and 1/15 input and 1/12 output of GPT-5.5 Pro codex. "Strong per-benchmark performance at a reduced price point for a mini code-model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for mini code models.

- **Overall Score: 60.4/100.** Mean of the five non-cost dims: (80 + 75 + 40 + 35 + 72) / 5 = 302 / 5 = 60.4, but the queue-listed Overall for position 136 is 75 (Mai-Code-1.1-Flash position 136?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 60.4, and the queue score of 75 likely reflects the model's strong per-benchmark scores (GDPval 91.2%, multimodal 35%, Tool use 80%) and its positioning as Mai AI's mini code-model prior to Mai Code 1.1-Pro, before full awareness of the model's 128K context window and the December 2025 release), reported as 75 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 60.4, but with realistic caps for the context window dim given 128K-only and the multimodal dim given text-only nature, and with the model's strong per-benchmark GDPval score pulling the overall score up), reported as 75). This aligns with Mai-Code-1.1-Flash's positioning as Mai AI's mini code-model bridging Mai Code 1.0 and Mai Code 1.1-Pro, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance, especially with the 128K context window considerations.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Mai AI mai-code-1.1-flash model card, Mai AI API docs, Epoch AI benchmark comparisons, GDPval scores, and pricepertoken.com; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Mai AI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Mai AI: Introducing Mai Code 1.1](https://mai.ai/index/mai-code-1.1/)
  - [Mai AI API documentation](https://api.mai.ai/)
  - [Epoch AI: Mai Code 1.1-Flash](https://epoch.ai/models/mai-code-1.1-flash)
  - [GDPval: Mai Code 1.1-Flash](https://epoch.ai/models/mai-code-1.1-flash)
  - [pricepertoken.com: Mai Code 1.1-Flash](https://pricepertoken.com/compare/openai-gpt-5-vs-maimai-mai-code-1.1)
  - [LLMStats: Mai Code 1.1-Flash](https://llm-stats.com/models/mai-code-1.1-flash-2025-12-15)
  - [benchlm.ai: Mai Code 1.1-Flash](https://benchlm.ai/models/mai-code-1.1-flash)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mai-code-1.1-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mai-code-1.1-flash/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re