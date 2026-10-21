# Ling-2.6-1T — findings by Gemini 3.8 Flash

- Source: opencode/ling-2.6.1t
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's (Ant Group) trillion-parameter instruct flagship — 1T total / 63B active sparse MoE with hybrid MLA + linear attention and fast-thinking compressed CoT under MIT open weights.
- **Provider / access:** InclusionAI API, [OpenRouter](https://openrouter.ai/models/inclusionai/ling-2.6-1t) (`inclusionai/ling-2.6-1t`), Hugging Face.
- **Release / knowledge:** Mid 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/ling-2.6.1t`, `inclusionai/ling-2.6-1t`, `ling-2.6.1t`
- **Context window:** 262,144 tokens (256K context window).
- **Modalities:** Text in / text out only; advanced tool and function calling.
- **Pricing (as of 2026-10-21):** Hosted ~$0.30 / 1M input tokens, ~$2.50 / 1M output tokens; MIT open weights for free self-hosting.
- **Architecture:** 1T total / 63B active sparse MoE with hybrid Multi-Head Latent Attention (MLA) and linear attention.

### Raw benchmarks found

> Rows are InclusionAI's tech report / HF card (self-reported); Artificial Analysis Intelligence Index is the only independent composite.

Coding / agent:

- SWE-bench Verified: **72.20%**; LiveCodeBench-v6: 65.58%; Terminal-Bench 2.0: 40.45%
- PinchBench: 85.24; ClawEval: 51.00; BFCL-v4: 70.64; Tau2-Bench: 78.36

Reasoning / knowledge:

- GPQA Diamond: **76.17%**; SuperGPQA: 58.32%; C-SimpleQA: 76.53%; SimpleQA-Verified: 31.50%; HLE: 10.06%
- AIME 2026: **87.40%**; HMMT Nov25: 81.93%; IMO-AnswerBench: 65.81%; ARCPrize: 50.94%
- IFBench: 57.62; LongBenchV2: 48.31
- Artificial Analysis Intelligence Index: **17** (AA, non-reasoning) — conflict: 34 (self-reported card, likely reasoning variant)

Long context:

- 262K window; MRCR (16K–256K): **80.37%**.

### Normalized scores (1–100)

- **Tool use: 72/100.** Normalized assessment of autonomous tool execution and function calling (70.64 BFCL-v4, 78.36 Tau2-Bench).
- **Reasoning: 65/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (76.17% GPQA Diamond, 87.4% AIME 2026).
- **Context window: 75/100.** Effective retrieval fidelity across context capacity (262,144 tokens).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 72/100.** Verified software engineering and code generation capability (72.2% SWE-bench Verified).
- **Cost efficiency: 92/100.** Value proposition relative to performance, open weights, and hosted rates.
- **Overall Score: 60/100.** Arithmetic mean of non-cost metrics: (72 + 65 + 75 + 15 + 72) / 5 = 59.8 → 60. High-throughput trillion-parameter open-weights instruct MoE for general enterprise and software workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of InclusionAI technical reports, OpenRouter endpoints, and Artificial Analysis leaderboards.
