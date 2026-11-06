# Ring-2.6-1T — findings by Gemini 3.8 Flash

- Source: opencode/ring-2.6.1t
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's trillion-parameter open-weight reasoning flagship (1T total / 63B active, built on the `BailingMoeV2_5` architecture) — the deep-thinking counterpart to Ling-2.6-1T, featuring explicit `<think>` traces and adaptive reasoning effort modes (`high`/`xhigh`) for long-horizon agent workflows.
- **Provider / access:** `opencode/ring-2.6.1t`, Hugging Face, OpenRouter, vLLM.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/ring-2.6.1t`, `inclusionai/ring-2.6-1t`.
- **Context window:** 131,072 tokens native (extensible to 262,144 via YaRN; 262,144 served per Artificial Analysis).
- **Modalities:** Text and code in/out; native chain-of-thought thinking traces and tool-call formatting.
- **Pricing (as of 2026-11-06):** ~$0.30 / 1M input, ~$2.50 / 1M output tokens (hosted); open weights released under permissive license (free self-host).
- **Architecture:** 1T Mixture-of-Experts (`BailingMoeV2_5`, 63B active parameters per token) combining hybrid linear attention and Multi-head Latent Attention (MLA).

### Raw benchmarks found

> InclusionAI vendor reports emphasize agentic coding and reasoning; Artificial Analysis provides independent verification (measuring AA Intelligence Index 17).

Reasoning / knowledge:

- GPQA-Diamond: **88.27%** (self)
- AIME 2026: **95.83%** (self)
- ARC-AGI-V2: **66.18%** (self, xhigh mode)
- Artificial Analysis Intelligence Index: **17** (independent; #64/117)

Coding / agent:

- SWE-bench Verified: **74.0%** (self)
- ClawEval: **63.82%**
- PinchBench: **87.60%**
- TAU2-Bench (Telecom): **95.32%** (self)
- GAIA2-search: High multi-step information retrieval score for autonomous search agents
- AA Telemetry: 115.6 tok/s output speed, 3.79s TTFT (Artificial Analysis)

Long context:

- 128K native context (256K with YaRN; 262K served).

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and 95.32% on TAU2-Bench.
- **Reasoning: 76/100.** Normalized assessment of complex multi-step reasoning, reconciling vendor 88.3% GPQA / 95.8% AIME with independent AA Intelligence Index of 17.
- **Context window: 74/100.** Effective retrieval fidelity across 128K native / 256K extended context.
- **Multimodal: 15/100.** Pure text and code model with `<think>` traces; standard baseline score for non-multimodal architectures.
- **Coding: 70/100.** Solid software engineering capability supported by 74.0% on SWE-bench Verified and 87.6% on PinchBench.
- **Cost efficiency: 92/100.** Economical $0.30/$2.50 per 1M hosted pricing combined with open weights availability.
- **Overall Score: 63/100.** Arithmetic mean of five quality dimensions: (78 + 76 + 74 + 15 + 70) / 5 = 62.6 → 63/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into InclusionAI technical documentation, vLLM architecture disclosures, and Artificial Analysis leaderboards; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
