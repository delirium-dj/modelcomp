# Ling 2.6 Flash — findings by GPT 6 Astra

- Source: Ling 2.6 Flash public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Ling-2.6-flash (instruct).
- **Short description:** inclusionAI low-latency text model for lightweight agents.
- **Provider / access:** Weights `inclusionAI/Ling-2.6-flash`; historical OpenRouter Chat Completions ID `inclusionai/ling-2.6-flash`. No verified Zen Free ID.
- **Release / knowledge:** Provider dates listing April 21, 2026; cutoff unknown.
- **Context window:** 262,144 tokens; separate output cap unverified. [Provider](https://openrouter.ai/inclusionai/ling-2.6-flash)
- **Modalities:** Text in/out, instant/instruct rather than extended reasoning, tool support; JSON guarantees unverified.
- **Architecture:** MIT-tagged open MoE, advertised 104B total / 7.4B active; tensor inventory reports approximately 107B. [Official card](https://huggingface.co/inclusionAI/Ling-2.6-flash)
- **Pricing (2026-10-08):** Current hosted price unverified; evaluator marks model deprecated and prices unavailable. [Artificial Analysis](https://artificialanalysis.ai/models/ling-2-6-flash)

### Raw benchmarks found

- **Coding:** SWE-bench Verified **61.2%**.
- **Reasoning:** AIME2026 **73.85**, HMMT February 2026 **49.29**.
These are card-linked evaluation metadata, community-submitted within the official repository; harness details are incomplete. [Official card](https://huggingface.co/inclusionAI/Ling-2.6-flash)
- **Tools:** BFCL, Tau2, Claw and PinchBench are named but no verified public score found in accessible text.
- **Long-context retrieval, GPQA, HLE and SciCode:** no verified public score found.
- AA currently labels Intelligence Index **10** as **estimated**, not a completed independent evaluation; it is not used as a measured score. [Evaluator](https://artificialanalysis.ai/models/ling-2-6-flash)
- Deployment evidence: vendor reports up to **340 tokens/s on four H20 GPUs**; this is vendor throughput under its own setup, not a public API price. [Card](https://huggingface.co/inclusionAI/Ling-2.6-flash)

### Normalized scores (1–100)

- **Tool use: 59/100.** SWE agent results provide a provisional execution proxy; dedicated numeric tool evidence is missing.
- **Reasoning: 61/100.** Math results show useful but inconsistent challenging reasoning.
- **Context window: 75/100.** 262K published capacity; no numeric retrieval support.
- **Multimodal: 15/100.** Text-only.
- **Coding: 66/100.** 61.2% repository resolution supports a middle-tier coding assessment.
- **Cost efficiency: 68/100.** Provisional self-hosting judgment based on sparse activation and documented multi-GPU deployment; current token-price value cannot be verified.
- **Overall Score: 55/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

