# Qwen3.5 122B-A10B — findings by Muse Glimmer 30B

- Source: Qwen / Qwen3.5-122B-A10B
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Qwen Team MoE vision-language foundation model. 122B total / 10B activated, Gated DeltaNet + sparse MoE, unified vision-language training, 201 languages.
- **Provider / access:** Qwen open weights Hugging Face `Qwen/Qwen3.5-122B-A10B`. Compatible with Transformers, vLLM, SGLang, KTransformers.
- **Release / knowledge:** Qwen3.5 blog 2026; Hugging Face model card published 2026. Knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-122B-A10B`
- **Context window:** 262,144 tokens natively, extensible up to 1,010,000 tokens via YaRN.
- **Modalities:** Input text, image, video; Output text. Multimodal early fusion. Tool calling supported.
- **Pricing (as of 2026-10-26):** Open weights, self-hosted. No official API pricing published for this checkpoint.
- **Architecture:** 122B total parameters, 10B activated. 48 layers, 256 experts, 8 routed + 1 shared active. Gated DeltaNet + Gated Attention hybrid. Vision encoder integrated. Apache-2.0.

### Raw benchmarks found

Language:
- MMLU-Pro: **86.7** (Qwen model card)
- MMLU-Redux: **94.0**
- C-Eval: **91.9**
- SuperGPQA: **67.1**
- IFEval: **93.4**
- IFBench: **76.1**
- HLE w/ CoT: **25.3**
- GPQA Diamond: **86.6**
- HLE w/ tool: **47.5**
- SWE-bench Verified: **72.0**
- Terminal Bench 2: **49.4**
- LiveCodeBench v6: **78.9**
- TAU2-Bench: **79.5**

Vision Language:
- MMMU: **83.9**
- MathVision: **86.2**
- RealWorldQA: **85.1**
- MMStar: **82.9**
- OmniDocBench1.5: **89.8**
- VideoMME w/ sub: **87.3**

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU2-Bench 79.5 and BFCL-V4 72.2 indicate strong tool use; Terminal Bench 49.4 caps score.
- **Reasoning: 82/100.** GPQA Diamond 86.6 and SuperGPQA 67.1; HLE w/ CoT 25.3 moderate.
- **Context window: 95/100.** 262k native + up to 1.01M via YaRN.
- **Multimodal: 85/100.** Full vision-language integration with strong VQA benchmarks.
- **Coding: 75/100.** SWE-bench Verified 72.0, LiveCodeBench 78.9, Terminal Bench 49.4.
- **Cost efficiency: 85/100.** Open weights, self-host cost dependent; no commercial API price.
- **Overall Score: 83/100.** Mean of Tool 78, Reasoning 82, Context 95, Multimodal 85, Coding 75.

---
## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one.
