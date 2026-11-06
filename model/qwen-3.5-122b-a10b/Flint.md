# Qwen3.5 122B A10B — findings by Flint

- Source: Qwen / Qwen3.5-122B-A10B
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 122B A10B (Qwen; Qwen3.5 family — MoE mid-tier).
- **Short description:** Qwen's Qwen3.5 unified vision-language foundation model with hybrid gated-delta-network + sparse MoE architecture; 122B total / 10B active parameters; multimodal (text, image, video), agentic and coding oriented.
- **Provider / access:** Open weights (Hugging Face `Qwen/Qwen3.5-122B-A10B`, Apache 2.0); Qwen API / Qwen Cloud / OpenRouter.
- **Release / knowledge:** Qwen3.5 announced February 2026 (Qwen blog); knowledge cutoff not stated in verified sources.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (Hugging Face); `qwen3.5-122b-a10b` (API slug).
- **Context window:** 262,144 tokens natively, extensible up to 1,010,000 tokens (Hugging Face model card; YaRN scaling for ultra-long).
- **Modalities:** Text, image, video input; text output; thinking mode default; tool use yes (TIR-Bench, V*, agentic tool calling).
- **Pricing (as of 2026-10-28):** Open weights Apache 2.0; self-hostable (vLLM / SGLang / KTransformers / Transformers).
- **Architecture:** Open-weight hybrid (Gated DeltaNet + sparse MoE); 122B total / 10B active; 48 layers; MTP training.

### Raw benchmarks found

- Reasoning / knowledge:
  - MMLU-Pro: **86.7**; MMLU-Redux: **94.0**; C-Eval: **91.9**; SuperGPQA: **67.1**.
  - IFEval: **93.4**; IFBench: **76.1**; MultiChallenge: **61.5**.
  - Long context: AA-LCR **66.9**, LongBench v2 **60.2**.
  - STEM & reasoning: HLE w/ CoT **25.3**, GPQA Diamond **86.6**, HMMT Feb 25 **91.4**, HMMT Nov 25 **90.3**.
- Coding:
  - SWE-bench Verified: **72.0**; Terminal Bench 2: **49.4**; LiveCodeBench v6: **78.9**; CodeForces: **2100**; FullStackBench en **62.6**, zh **58.7**.
- Agentic / tool use:
  - BFCL-V4: **72.2**; TAU2-Bench: **79.5**; VITA-Bench: **33.6**; DeepPlanning: **24.1**.
  - Search: HLE w/ tool **47.5**, Browsecomp **63.8**, Browsecomp-zh **69.9**, WideSearch **60.5%**, Seal-0 **44.1%**.
- Multimodal / vision:
  - MMMU: **83.9**; MMMU-Pro: **76.9**; MathVision: **86.2**; Mathvista: **87.4**; DynaMath: **85.9**; ZEROBench: **9**; VlmsAreBlind: **96.7**; RealWorldQA: **85.1**; ERQA: **62.0**; CountBench: **97.0**; VideoMME: **87.3**; ScreenSpot Pro: **70.4**.

### Cross-source comparison

- Official Qwen HF blog + eval tables vs independent coverage: benchmarks reported by Qwen (GPT-5-mini / GPT-OSS-120B / Qwen3-235B-A22B / Qwen3.5-27B / Qwen3.5-35B-A3B comparators) — Qwen3.5-122B-A10B led most knowledge/coding/agentic rows.

### Normalized scores (1-100)

- **Tool use: 72/100.** BFCL-V4 **72.2**, TAU2-Bench **79.5**, V* **93.2/90.1**, TIR-Bench **53.2** → strong agentic tier; capped below dedicated agentic models on all sub-bench splits.
- **Reasoning: 72/100.** GPQA Diamond **86.6**, HMMT Feb 25 **91.4**, HMMT Nov 25 **90.3%**, MMLU-Pro **86.7%** → strong open-weights reasoning; HLE w/ CoT **25.3%** moderate; capped below proprietary frontier reasoning.
- **Context window: 75/100.** 262K native / 1M extensible → mid-high context band; ultra-long via YaRN.
- **Multimodal: 78/100.** MMMU **83.9%**, MMMU-Pro **76.9%**, VlmsAreBlind **96.7%**, RealWorldQA **85.1%**, VideoMME **87.3%** → upper-mid multimodal band; strong unified VLM.
- **Coding: 70/100.** SWE-bench Verified **72.0%**, Terminal Bench 2 **49.4%**, LiveCodeBench v6 **78.9%**, CodeForces **2100** → mid-high coding band.
- **Cost efficiency: 80/100.** Open weights Apache 2.0, self-hostable → high open-weight value.

- **Overall Score: 73/100.** Mean of the five quality dims (Tool 72 + Reasoning 72 + Context 75 + Multimodal 78 + Coding 70) / 5 = 73.4 → half-up **73**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Qwen / Hugging Face Qwen3.5) plus independent benchmarks/reviews (Hugging Face eval leaderboards, Artificial Analysis) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
