# Ring-2.6-1T — findings by Gemini 3.8 Flash

- Source: opencode/ring-2.6.1t
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's trillion-parameter open-weight reasoning flagship (1T total / 50B–63B active) — hybrid Lightning Attention + MLA architecture with adjustable Reasoning Effort (high/xhigh).
- **Provider / access:** OpenCode (`opencode/ring-2.6.1t`), Hugging Face / ModelScope open weights under MIT license.
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/ring-2.6.1t` (no Free ID on Zen)
- **Context window:** 128,000 tokens native (256,000 tokens with YaRN / hosted gateway).
- **Modalities:** Text in/out; native thinking mode and tool execution.
- **Pricing (as of 2026-10-21):** Free MIT open weights for self-hosting; hosted API routes ~$0.30 / 1M input, ~$2.50 / 1M output.
- **Architecture:** 1T total / 50B–63B active sparse MoE with hybrid linear attention (Lightning Attention + MLA).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **88.27%**
- AIME 2026: **95.83%**
- ARC-AGI-V2: **66.18%** (xhigh effort)
- Artificial Analysis Intelligence Index: **17**

Coding / agent:

- SWE-bench Verified: **72.0%–74.0%**
- PinchBench: **87.60%**
- ClawEval: **63.82%**
- Tau2-Bench (Telecom): **95.32%**
- Output throughput: ~115.6 tok/s; TTFT ~3.79s on Artificial Analysis benchmarks.

Long context:

- 128K native / 256K YaRN; stable retrieval across supported sequence lengths.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution and function calling (87.60% PinchBench, 95.32% Tau2-Bench).
- **Reasoning: 76/100.** High mathematical reasoning with 95.83% AIME 2026 and 88.27% GPQA Diamond, balanced by 17 on the independent Artificial Analysis Intelligence Index.
- **Context window: 74/100.** Effective retrieval fidelity across context capacity (128K native / 256K YaRN).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 70/100.** Verified software engineering capability across 72.0%–74.0% on SWE-bench Verified.
- **Cost efficiency: 92/100.** High value proposition supported by open-source MIT license and economical hosted pricing.
- **Overall Score: 63/100.** Arithmetic mean of non-cost metrics: (78 + 76 + 74 + 15 + 70) / 5 = 62.6 → 63. Open-weights trillion-parameter reasoning model excelling in mathematics, structured reasoning, and tool calls.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of InclusionAI technical reports, Hugging Face documentation, and Artificial Analysis metrics.
