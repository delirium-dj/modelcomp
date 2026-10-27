# Qwen-3.5-2B — findings by Muse Glimmer 30B

- Source: Qwen Team / Alibaba
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen3.5-2B
- **Short description:** 2B-parameter causal language model with vision encoder, hybrid Gated DeltaNet + Gated Attention architecture, unified vision-language foundation with 262k native context, intended for prototyping, fine-tuning and research.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-2B`, Apache-2.0 license. Transformers, vLLM, SGLang, KTransformers compatible. Open weight.
- **Release / knowledge:** Public release 2026-03-02 per QwenLM GitHub news; Qwen3.5 series announcement 2026-02-16. Knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.5-2B`
- **Context window:** 262,144 tokens natively per Hugging Face model card Model Overview.
- **Modalities:** Input text and image; output text. Vision-language multimodal, function calling supported, tool use supported in agentic setups.
- **Pricing (as of 2026-10-27):** Open weight; no official vendor pricing, community hosted.
- **Architecture:** 2B parameters, hidden dimension 2048, 24 layers, Hidden Layout 6 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)), Gated DeltaNet 16 heads V/QK head dim 128, Gated Attention 8 Q / 2 KV heads head dim 256 RoPE dim 64, FFN intermediate 6144, MTP trained.

### Raw benchmarks found

> Sources: Hugging Face model card Qwen/Qwen3.5-2B Benchmark Results section 2026-03-02, QwenLM GitHub Qwen3.8 repo README Qwen3.5 description, Hugging Face model page metadata.

Agent / tool use:

- BFCL-V4 thinking: **43.6** (Hugging Face model card, General Agent Thinking)
- TAU2-Bench thinking: **48.8** (Hugging Face model card, General Agent Thinking)
- Terminal-Bench / Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- MMLU-Pro non-thinking: **55.3**, thinking: **66.5** (Hugging Face model card Language)
- MMLU-Redux non-thinking: **69.2**, thinking: **79.6**
- C-Eval non-thinking: **65.2**, thinking: **73.2**
- SuperGPQA non-thinking: **30.4**, thinking: **37.5**
- GPQA thinking: **51.6**
- IFEval non-thinking: **61.2**, thinking: **78.6**
- IFBench thinking: **41.3**
- MultiChallenge thinking: **33.7**

Long context:

- AA-LCR thinking: **25.6**
- LongBench v2 thinking: **38.7**

Multimodal / Vision-Language:

- MMMU thinking/non-thinking: **64.2/64.2**
- MMMU-Pro thinking/non-thinking: **50.3/47.7**
- MathVista mini thinking/non-thinking: **76.7/73.9**
- DynaMath thinking/non-thinking: **73.6/69.6**
- MMStar thinking/non-thinking: **71.7/68.0**
- MMBenchEN-DEV-v1.1 thinking/non-thinking: **83.3/81.3**
- RealWorldQA thinking/non-thinking: **74.5/71.2**
- MMLongBench-Doc thinking/non-thinking: **45.4/38.8**

Coding:

- No verified public coding-specific benchmark score found in official model card for Qwen3.5-2B; coding capability is claimed in series description but not quantified with SWE-bench/LiveCodeBench public numbers.

### Normalized scores (1–100)

- **Tool use: 55/100.** BFCL-V4 43.6 and TAU2-Bench 48.8 from official table provide moderate agentic signal; lack of independent Terminal-Bench/Claw/Toolathon verification caps score.
- **Reasoning: 68/100.** MMLU-Pro thinking 66.5, MMLU-Redux thinking 79.6, GPQA 51.6 and IFEval thinking 78.6 show solid small-model reasoning; SuperGPQA remains modest.
- **Context window: 85/100.** 262k native context verified; AA-LCR 25.6 and LongBench v2 38.7 indicate usable long-context but not frontier retrieval.
- **Multimodal: 70/100.** Vision-language suite ranges ~64-83 on MMMU/MMBench/MMStar/RealWorldQA with thinking/non-thinking parity; no video/audio benchmark numbers published.
- **Coding: 50/100.** No verified public SWE-bench/LiveCodeBench score found for this size; series claims coding improvements but quantification absent.
- **Cost efficiency: 85/100.** Open weight 2B model with hybrid architecture for high-throughput inference; no vendor pricing, suitable for prototyping and fine-tuning.
- **Overall Score: 66/100.** Mean of five quality dims (55+68+85+70+50)/5 = 65.6 → 66. Best-fit: small multimodal foundation with strong context and reasonable reasoning, limited public tool/coding verification.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
