# Qwen 3.8 Flash — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.8-Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Alibaba Qwen's multimodal Flash-tier flagship (released 2026-08-26): a vision-language reasoning model for visual reasoning, document processing, coding assistance, and agentic workflows, with native 1M context and video input at ~$0.15/$0.47.
- **Provider / access:** Qwen Cloud `qwen3.8-flash` (OpenAI/Anthropic-compatible), Alibaba Model Studio, plus 35 providers per models.dev (incl. OpenCode, OpenRouter, Vercel, Venice, Novita).
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not published.
- **IDs:** `qwen3.8-flash` (Qwen Cloud; `alibaba/qwen3.8-flash` canonical; thinking/non-thinking modes).
- **Context window:** 1,000,000 tokens (1M) total; max input 991K (983K thinking), max output 131K, max reasoning 262K.
- **Modalities:** text + image + video input, text output; reasoning (extended thinking); tool calls; structured outputs; built-in tools (code interpreter, web search/extract, PDF parsing, image search); context cache.
- **Pricing (as of 2026-11-03):** $0.15 input / $0.47 output per 1M tokens; implicit cache $0.016, explicit cache $0.20/$0.016; token-plan/free routes on some providers.
- **Architecture:** closed weights; parameter count undisclosed (Flash-tier MoE).

### Raw benchmarks found

Agent / tool use:

- No verified public benchmark rows found in sources reviewed (AA/BenchLM no page; Qwen Cloud publishes capability claims, not numbers)
- Positioned by vendor for coding assistance, agentic workflows, desktop-app operation (vendor claims)

Reasoning / knowledge:

- No verified public benchmark rows found in sources reviewed (sparse coverage — flagged)

Coding:

- No verified public benchmark rows found in sources reviewed (vendor claims only)

Long context:

- 1M context with 262K max reasoning; no verified retrieval figure.

Multimodal:

- text/image/video in (native vision incl. long video per vendor), text out; no verified video benchmark row found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Vendor-positioned for agentic workflows but zero verified public agentic benchmarks — capped by missing evidence.
- **Reasoning: 75/100.** Vendor claims powerful reasoning; no verified GPQA/HLE/ARC rows — capped by missing evidence.
- **Context window: 89/100.** 1M native with 262K reasoning budget; no verified retrieval figure at depth.
- **Multimodal: 88/100.** Image + video input (native vision, long video per vendor) — above the image-only band; text-only output.
- **Coding: 76/100.** Vendor-positioned for coding assistance; no verified SWE/TB rows — capped by missing evidence.
- **Cost efficiency: 96/100.** $0.15/$0.47 with $0.016 implicit cache — exceptional value.
- **Overall Score: 80/100.** Mean of (74+75+89+88+76)/5 = 80.4 → 80. Strong value profile but thin verified public evidence — flag for re-verification when third-party evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Qwen Cloud official model page, models.dev registry); scores are normalized 1–100 interpretations, not official vendor scores. No verified third-party benchmark rows found (AA/BenchLM do not list this model) — most evidence is vendor-published; flagged.
- Reference URLs:
  - [Qwen3.8-Flash — Qwen Cloud model page](https://www.qwencloud.com/models/qwen3.8-flash)
  - [Qwen3.8-Flash — models.dev registry (35 providers, $0.15/$0.47)](https://models.dev/models/alibaba/qwen3.8-flash)
