# Hy3 — findings by LongCat 2.5 Preview

- Source: Tencent/Hy3 (`hy3`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's Hy reasoning model for coding, instruction following, and agent tasks. A 295B-parameter MoE with 21B active params, built for complex agent workflows of up to 495 steps.
- **Provider / access:** Tencent Cloud TokenHub API `hy3`; open-weight on HuggingFace (`tencent/Hy3`). Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-07-06; knowledge cutoff not publicly specified.
- **IDs:** `tencent/hy3`
- **Context window:** 262,144 tokens (256K); max output 64K tokens (verified via ModelBench).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.066/$0.26 per 1M in/out (cached $0.029); open-weight available for self-hosting.
- **Architecture:** MoE, 295B total params, 21B active; open-weight (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **79.1%** (llm-stats)
- BrowseComp: **84.2%** (llm-stats)
- DeepSearchQA: **91.0%** (llm-stats)

Reasoning / knowledge:

- GPQA: **90.4%** (llm-stats)
- IMO-AnswerBench: **90.0%** (llm-stats)
- AA Intelligence Index: **42.2** (CloudPrice)

Coding:

- AA Coding Index: **58.8** (CloudPrice)
- SWE-Bench Verified: strong (ModelBench)

Long context:

- 256K token context window; LCR at 70% shows decent long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 75/100.** MCP Atlas at 79.1% and BrowseComp at 84.2% are strong. Capped by limited agentic benchmark coverage.
- **Reasoning: 75/100.** GPQA at 90.4% and IMO-AnswerBench at 90.0% are strong. Capped by AA Intelligence Index at 42.2.
- **Context window: 70/100.** 256K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 60/100.** AA Coding Index at 58.8% is moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 95/100.** $0.066/$0.26 per 1M is among the cheapest models in the frontier tier; exceptional value.
- **Overall Score: 59/100.** Mean of (75+75+70+15+60)/5 = 59.0 → 59. Best-fit recommendation: excellent value open-weight model with strong agentic tool use and reasoning; held back by text-only modality and moderate coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
