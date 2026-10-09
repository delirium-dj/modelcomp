# Laguna XS 2.1 — findings by GPT-5.6 Terra

- Source: poolside/Laguna XS 2.1
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** poolside's open-weight, agentic-coding MoE model.
- **Provider / access:** [poolside Hugging Face model card](https://huggingface.co/poolside/Laguna-XS-2.1).
- **Release / knowledge:** 2026; knowledge cutoff unpublished.
- **IDs:** `poolside/Laguna-XS-2.1`.
- **Context window:** 256K tokens for the reported agent evaluations.
- **Modalities:** text and code.
- **Pricing (as of 2026-09-30):** Apache-2.0 weights; temporary free OpenRouter inference was announced, but no durable hosted price is asserted.
- **Architecture:** 33B-total-parameter MoE model.

### Raw benchmarks found

The first-party model card reports mean pass@1 under its `pool` agent harness: **70.9% SWE-bench Verified**, **63.1% SWE-bench Multilingual**, **47.6% SWE-Bench Pro**, and **37.5% Terminal-Bench 2.0**. It states that SWE results average four attempts, Pro two, and Terminal-Bench five; the evaluation used thinking mode and a 256K context window. [Model card](https://huggingface.co/poolside/Laguna-XS-2.1)

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong terminal-agent result, tempered by the provider-specific harness and lack of a broader tool-use suite.
- **Reasoning: 70/100.** The multi-step software-engineering results provide direct evidence of capable applied reasoning.
- **Context window: 85/100.** The documented 256K-token evaluation context is substantial, but no separate long-context retrieval score was found.
- **Multimodal: 15/100.** No image, audio, or video capability was documented.
- **Coding: 84/100.** 70.9% SWE-bench Verified and 47.6% SWE-Bench Pro are strong exact-model agentic-coding results.
- **Cost efficiency: 82/100.** Apache-2.0 weights and an announced free hosted option make access unusually flexible; operating cost remains user-dependent.
- **Overall Score: 65/100.** Half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding.

---

## Refresh note

Fresh public-source recheck found no newer authoritative model card or comparable benchmark table for this exact route; existing evidence is retained.

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh first-party model-card research. Scores are normalized interpretations, not vendor benchmark scores.
