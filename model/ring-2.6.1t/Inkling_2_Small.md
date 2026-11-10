# Ring 2.6.1t — findings by Fledge Alpha

- Source: inclusionAI / Ant Group (`inclusionai/Ring-2.6-1T`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6.1t (Ring-2.6-1T)
- **Short description:** Ant Group's trillion-parameter open reasoning flagship — the thinking counterpart to Ling-2.6-1T with adjustable reasoning effort (high/xhigh), built for long-horizon agent workflows, coding, and scientific analysis. Beats GPT-5.4 xHigh and Gemini-3.1-Pro high on PinchBench/ClawEval per vendor.
- **Provider / access:** Hugging Face weights (MIT, FP8), OpenRouter `inclusionai/ring-2.6-1t` (free route seen), vLLM (≥0.20.2) / SGLang with `reasoning_effort` field; tool-call parser notes in SGLang docs. Chat Completions, `<think>` traces.
- **Release / knowledge:** 2026-05-14 (Ant Ling on X, Gigazine; arXiv 2606.15079 June 2026).
- **IDs:** `inclusionai/ring-2.6-1t` (also `opencode/ring-2.6.1t`)
- **Context window:** 128K native config (SGLang/vLLM; YaRN for 256K deployments); hosted routes list 262K; max output ~66K.
- **Modalities:** text in; text out with explicit reasoning traces; reasoning effort high/xhigh; tool calling; structured output. No vision.
- **Pricing (as of 2026-10-08):** official $0.30 input / $2.50 output per 1M, cache $0.06 (Ant Ling pricing); MIT open weights free.
- **Architecture:** 1T total / ~50–63B active BailingMoeV2_5 sparse MoE (80 layers, 256 routed experts, 8 active + shared), MLA + Lightning Linear hybrid; MIT license.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **87.60** (vendor, high mode; above GPT-5.4 xHigh and Gemini-3.1-Pro high)
- ClawEval: **63.82** (vendor, top of comparable models)
- Tau2-Bench Telecom: **95.32** (vendor, high); **92%** (AA via Opper)
- GAIA-2 Search: strong results (arXiv tech report, no exact value)
- Terminal-Bench Hard: **29%** (AA via Opper)
- IFBench: **45%** (AA via Opper)
- AA Agentic Index: **18.9** (BenchGecko)

Reasoning / knowledge:

- AIME 2026: **95.83** (vendor, xhigh; on par with DeepSeek-V4-Pro Max)
- GPQA Diamond: **88.27** (vendor, xhigh); **86%** (AA via Opper)
- ARC-AGI-2: **66.18** (vendor, xhigh; above Gemini-3.1-Pro high and Claude Opus 4.7 xhigh)
- HLE: **22%** (AA via Opper)
- AA Intelligence Index: **16.6** (AA via Opper); Quality Index 30.6 (BenchGecko)

Coding:

- AA Coding Index: **42.8** (BenchGecko/Opper)
- SciCode: **45%** (AA via Opper)
- Speed: 111 tok/s output, 2.20s TTFT (AA via Opper)

Long context:

- AA Long-context reasoning (LCR): **70%** (Opper); 128K native window.

### Normalized scores (1–100)

- **Tool use: 82/100.** PinchBench 87.6 (beats GPT-5.4/Gemini 3.1 Pro), ClawEval 63.8, Tau2 ~95 — agent execution is the design target; TB Hard 29% caps it.
- **Reasoning: 82/100.** AIME 95.8, GPQA 88.3, ARC-AGI-2 66.2 (xhigh) — genuine flagship-class reasoning; HLE 22% caps it.
- **Context window: 62/100.** 128K native (262K hosted) with LCR 70% — good retrieval, modest window.
- **Multimodal: 15/100.** Text-only.
- **Coding: 66/100.** Coding Index 42.8 and SciCode 45% are solid but behind coding specialists; no SWE-bench row for the Ring variant.
- **Cost efficiency: 70/100.** $0.30/$2.50 with xhigh reasoning burning tokens; free MIT weights balance it.
- **Overall Score: 61/100.** Mean of (82, 82, 62, 15, 66) = 61.4 → 61. Best fit: self-hosted deep-reasoning agent workflows (research, multi-step automation) needing MIT-licensed trillion-class thinking.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (HF model card, arXiv 2606.15079, Opper/Artificial Analysis, SGLang + vLLM docs, Gigazine, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
