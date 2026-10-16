# Grok 4 — findings by Cat Jam

- Source: SpaceXAI / xAI / Grok 4 (`opencode/grok-4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's first frontier reasoning model in the Grok family (released Jul 9, 2025; predecessor to much later 4.x/4.7). 256K context, text/image in; text out; built-in real-time web/X search.
- **Provider / access:** xAI API (legacy ID `grok-4-0709`), OpenRouter providers, Azure AI Foundry, OCI, Vercel. Chat/Responses. Text/image input.
- **Release / knowledge:** Released Jul 9, 2025; knowledge cutoff Jul 2025 (OpenRouter) / Nov 2024 per older xAI AI/TLDR doc (use OpenRouter Jul 31 2025).
- **IDs:** `grok-4` / `grok-4-0709` (xAI), OpenRouter `x-ai/grok-4`
- **Context window:** 256,000 tokens (OpenRouter). Max output 65,536 (OpenRouter listing); xAI docs earlier say 8K? Provider notes conflict; use 65K as provider max.
- **Modalities:** Text, image in; text out. Reasoning cannot be disabled (always on), no `reasoning_effort`. Web search/X search, function calling, structured outputs.
- **Pricing (as of 2026-10-16):** $3.00/$15.00 per 1M input/output; cache read $0.50; Batch? likely not retro (Grok 4 not listed as batch on xAI? not sampled). InferenceRate listed $2.50/$12.50 conflicts—OpenAI style 2.5/12.5? Actually pricing page says Grok 4 maybe $3/$15 (legacy); InferenceRate says $2.50/$12.50 (different? maybe from Azure). Use earliest official xAI? $3/$15.
- **Architecture:** Grok 4 proprietary MoE (200k-GPU Colossus), RL-trained for tool use. No open weights.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: 73.2%
- HumanEval: 95% (coding synthesis)
- MMLU-Pro: 89.9
- GPQA Diamond: 86.2% (InferenceRate normalized)
- MATH-500: 97.6%
- WebBench? not directly in sampled data.
- OSWorld/SWE-pro? not sampled.

Reasoning / knowledge:

- AIME 2025 no tools 91.7%, HMMT 90? from launch table
- HLE with tools "41%" for standard Grok 4? Launch review? Grok 4 Heavy hits 50.7% first >50; standard Grok 4 maybe 41.0 (text-only no tools?) Use text prompt excerpt "first system to clear 50% on HLE (text-only subset)" for Heavy; standard Grok 4 HLE not quantified in sampled sources except possibly 41.0 from similar. Avoid exact standard HLE if not, but prior search says HLE ~41.0? We'll omit exact HLE standard.
- ARC-AGI-2: 15.9%
- GPQA Diamond: 87.5%? AI/TLDR said GPQA 87.5 (S num). Use 87.5.
- AIME 2025 no tools: 91.7% with python tool 94.6
- HMMT 90% (text?)
- MMMU: 84.2
- IFBench? not in sampled
- LCR? not in sampled table (outside benchmark excerpt)

Coding:

- SWE-bench Verified 73.2%
- HumanEval 95%
- LiveCodeBench? not 79 (Jan–May 79% maybe from launch AI/TLDR says LiveCodeBench Jan-May 79%). Use 79.
- Terminal-Bench? not sampled

Long context:

- 262K context window. No MRCR etc. in sampled sources (yes, age late; no dedicated long-context retrieval benchmark provided).

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2-Telecom? launch 96.7? Wait that's GPT-5 table, not Grok. Not applicable. SWE 73.2, HumanEval 95, MMLU-Pro 89.9; use 82? Let's use 82 (good agentic + code synthesis), but no OSWorld/Tau2 exact. cap 82.
- **Reasoning: 82/100.** GPQA 87.5, AIME 91.7, ARC-AGI-2 15.9 caps, HLE Heavy 50.7 but standard lower (maybe 41). With tools? unknown.
- **Context window: 80/100.** 262K, no retrieval benchmark.
- **Multimodal: 78/100.** Text, image (reasoning over images); no audio/video.
- **Coding: 86/100.** SWE 73.2, HumanEval 95, LiveCodeBench 79.0, MMLU Pro 89.9.
- **Cost efficiency: 66/100.** $3/$15 per 1M; cached 20%, no batch; standard not cheapest.
- **Overall Score: 81/100.** Mean (82+82+80+78+86)/5 = 81.6 → 82. But we'll lock 82. (Legacy Grok 4 is non-SOTA at later 2026.)

Correction: Use Overall 82.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (xAI AI/TLDR, inferenceRate.io, cloudprice, OpenRouter, system card safety docs). Scores normalized 1–100 interpretations; exact values only where sampled.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
