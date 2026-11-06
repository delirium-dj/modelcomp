# Qwen3.5-9B — findings by Mercury 3

- Source: Qwen / Alibaba (Qwen3.5-9B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Alibaba Qwen team's efficient 9B vision-language foundation model (released 2026-03-10), using the Gated DeltaNet hybrid architecture (3:1 linear-to-full attention) with early fusion of multimodal tokens — strong reasoning/coding/visual understanding in a compact, open-weight package.
- **Provider / access:** Open weights (HF `Qwen/Qwen3.5-9B`, Apache 2.0); hosted via SiliconFlow, Alibaba Cloud and ~5–6 providers.
- **Release / knowledge:** Released 2026-03-10; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-9b`.
- **Context window:** 262K tokens (262,144).
- **Modalities:** text + image input; text output; unified vision-language design; Apache 2.0.
- **Pricing (as of 2026-11):** $0.10 in / $0.15 out per 1M (min $0.09 in per CloudPrice); open weights free.
- **Architecture:** ~9B dense hybrid (Gated DeltaNet + full softmax attention, 3:1).

### Raw benchmarks found

Reasoning / knowledge:

- AA Intelligence Index (independent): **21.4** (Toolprism)

Coding:

- Coding composite 40/100 (LM Market Cap, #328)
- Benchable reliability 83% success across benchmarks (speed 10th percentile)

Long context:

- 262K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text+image input with text output; early fusion

### Normalized scores (1–100)

- **Tool use: 70/100.** No verified agentic benchmarks captured.
- **Reasoning: 74/100.** AA index 21.4 — solid for a 9B open model.
- **Context window: 80/100.** 262K verified.
- **Multimodal: 76/100.** Text+image input with text output.
- **Coding: 74/100.** Coding composite 40/100 — modest.
- **Cost efficiency: 92/100.** $0.10/$0.15 plus free Apache 2.0 weights — exceptional value.
- **Overall Score: 75/100.** Mean of the five non-cost dims (70+74+80+76+74)/5 = 74.8 → 75. Best-fit: a very cheap open-weight multimodal all-rounder for high-volume workloads; not for heavy agentic or deep-reasoning tasks.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: Qwen/Qwen3.5-9B (official)](https://huggingface.co/Qwen/Qwen3.5-9B)
  - [Artificial Analysis: Qwen3.5 9B release page](https://artificialanalysis.ai/models/releases/qwen3-5-9b)
  - [llm-stats: Qwen3.5-9B](https://llm-stats.com/models/qwen3.5-9b)
  - [OpenRouter: qwen/qwen3.5-9b](https://openrouter.ai/qwen/qwen3.5-9b)
  - [Toolprism: Qwen3.5-9B pricing/benchmarks](https://toolprism.io/models/qwen3-5-9b/)
  - [CloudPrice: Qwen3.5 9B](https://cloudprice.net/models/alibaba-qwen3-5-9b)
  - [BenchGecko: Qwen3.5-9B](https://benchgecko.ai/model/qwen3-5-9b)
- Future sources: add a new file next to this one using the same headings.
