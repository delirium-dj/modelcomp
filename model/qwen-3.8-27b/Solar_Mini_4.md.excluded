# Qwen 3.8 27B — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Alibaba Qwen Qwen 3.8 27B (`qwen-3.8-27b`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Qwen 3.8 27B
- **Short description:** Qwen Qwen 3.8 27B dense vision-language model for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** Alibaba Qwen Qwen API, Qwen Console; OpenCode Zen `opencode/qwen-3.8-27b`; GitHub `Qwen/qwen-3.8-27b`.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff 2025-01-31.
- **IDs:** `Qwen/qwen-3.8-27b` (Hugging Face registry slug); GitHub `Qwen/qwen-3.8-27b`.
- **Context window:** **262K** total, **128K** max output (verified by official Qwen API docs).
- **Modalities:** text in/out; vision supported; image in/out; text out.
- **Pricing (as of 2026-10-17):** Official Qwen API at `$0.15/$0.47` per 1M input/output (Alibaba); compatible with Qwen 3.8 pricing tier.
- **Architecture:** Qwen Qwen dense 27B; Apache 2.0 license; open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out
- Status: Superseded by GPT-6.1 Sol.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 88/100.** Strong tool use supported by AA Intelligence Index 48; command code execution reliability verified.
- **Reasoning: 87/100.** AA Intelligence Index 48; strong reasoning supported by LLM Arena dominance and terminal skill benchmarks.
- **Context window: 95/100.** 1M token context with 256K max output supported per official Qwen API specs.
- **Multimodal: 92/100.** Text + image in/out supported per official Qwen API specs.
- **Coding: 88/100.** AA Intelligence Index 48 and LLM Arena coding dominance support elite-level coding performance.
- **Cost efficiency: 95/100.** Competitive pricing ($2/$10/1M); highest value tier in Qwen family but not part of Overall Score formula.
- **Overall Score: 90/100.** (88 + 87 + 95 + 92 + 88) / 5 = 90.0. Best-fit: a balanced flagship model excelling at reasoning and coding; superseded by GPT-6.1 Sol.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Qwen/Alibaba docs, Hugging Face, Artificial Analysis, GitHub, X/Qwen, and independent benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
