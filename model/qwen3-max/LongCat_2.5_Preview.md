# Qwen3 Max — findings by LongCat 2.5 Preview

- Source: Alibaba Qwen/Qwen3-Max
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's flagship proprietary reasoning model in the Qwen3 series, with thinking/non-thinking mode integration. Specialized upgrades in agent programming and tool invocation. Being retired October 10, 2026 in favor of Qwen3.7 Max and Qwen3.8 Max.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3-max`), QwenCloud, DeepInfra, Novita, OpenRouter, Vercel AI Gateway. OpenAI-compatible API.
- **Release / knowledge:** 2025-09-23; knowledge cutoff June 30, 2025.
- **IDs:** `alibaba/qwen3-max` (also `qwen3-max-2026-01-23` snapshot)
- **Context window:** 262,144 tokens (256K) — verified via QwenCloud, CloudPrice, LLM Stats; up to 65,536 output tokens (32,768 in thinking mode).
- **Modalities:** Text input; Text output (base model). Qwen3 Max Thinking variant supports vision. Reasoning: yes (thinking mode with 81K max reasoning budget). Tool calling: yes (function calling, web search, code interpreter, web extractor).
- **Pricing (as of 2026-10-09):** $0.78/1M input, $3.90/1M output (Alibaba). DeepInfra: $1.20/$6.00. Novita: $0.50/$5.00. Tiered pricing: $1.2/$6.0 (≤32K), $2.4/$12.0 (32K-128K), $3/$15.0 (128K-256K).
- **Architecture:** ~1T parameters (LLM Stats), proprietary MoE. Snapshot version qwen3-max-2026-01-23 integrates thinking and non-thinking modes.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **83.6%** (Requesty)
- TerminalBench Hard: **24.2%** (Requesty) / **0.2 / #153** (CloudPrice)
- Function calling: supported (QwenCloud)
- Web search, code interpreter, web extractor: supported (QwenCloud built-in tools)
- Agents (LLM Stats): **5.0 / #150** (1 eval)

Reasoning / knowledge:

- Intelligence Index (CloudPrice): **15.6 / #207**
- Intelligence Index (Requesty): **21.3**
- GPQA Diamond: **86.1%** (Requesty) / **76.4%** (PricePerToken)
- MMLU Pro: **83.8%** (PricePerToken) / **0.8 / #49** (CloudPrice)
- Math Index (CloudPrice): **80.7 / #80** / **75.0%** (PricePerToken)
- HLE (CloudPrice): **0.1 / #198**
- IFBench (CloudPrice): **0.4 / #224**
- Reasoning (LLM Stats): **21.9 / #177** (6 evals)

Coding:

- LiveCodeBench (CloudPrice): **0.8 / #47**
- Coding (PricePerToken): **65.1**
- Coding (LLM Stats): **11.4 / #160** (1 eval)
- SciCode (CloudPrice): **0.4 / #200**

Long context:

- Context window: **262,144 tokens** (256K) — verified via QwenCloud, CloudPrice, LLM Stats
- LCR (CloudPrice): **0.5 / #238**

Multimodal:

- Text input only (base model, CloudPrice)
- Qwen3 Max Thinking variant supports vision (separate model)

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling + web search + code interpreter + web extractor. τ²-Bench 83.6%. Good tool use with built-in tools, but Agents #150 is below average.
- **Reasoning: 62/100.** Intelligence Index 15.6-21.3, GPQA 86.1%, MMLU Pro 83.8%. Below average reasoning for a flagship model, trails peers like DeepSeek V3.2 and GLM-4.7.
- **Context window: 82/100.** 256K token context. Good long-context capability, though LCR (#238) is below average.
- **Multimodal: 30/100.** Text-only input/output on base model. Qwen3 Max Thinking variant supports vision but is a separate model.
- **Coding: 65/100.** LiveCodeBench #47, Coding 65.1. Moderate coding, below frontier.
- **Cost efficiency: 78/100.** $0.78/$3.90 per 1M tokens — affordable for a 1T model. Tiered pricing above 32K tokens.
- **Overall Score: 62/100.** Mean of Tool (72), Reasoning (62), Context (82), Multimodal (30), Coding (65) = 311/5 = 62.2 → 62. Aging flagship (Sept 2025) being retired, with below-average reasoning and coding but good tool use and cost efficiency.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
