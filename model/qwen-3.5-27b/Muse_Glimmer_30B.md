# Qwen3.5 27B — findings by Muse Glimmer 30B

- Source: Qwen / Qwen3.5-27B
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Qwen 27B MoE-free vision-language foundation model with Gated DeltaNet + FFN hybrid, unified multimodal training, 201 languages.
- **Provider / access:** Qwen open weights Hugging Face `Qwen/Qwen3.5-27B`. Transformers, vLLM, SGLang compatible.
- **Release / knowledge:** Qwen3.5 blog 2026; Hugging Face model card published 2026.
- **IDs:** `Qwen/Qwen3.5-27B`
- **Context window:** 262,144 tokens natively, extensible to 1,010,000 tokens via YaRN.
- **Modalities:** Text input/output, image/video input. Multimodal early fusion. Tool calling supported.
- **Pricing:** Open weights, self-host.
- **Architecture:** 27B parameters, 64 layers, Gated DeltaNet + Gated Attention hybrid. Apache-2.0.

### Raw benchmarks found

Language:
- MMLU-Pro: **86.1**
- MMLU-Redux: **93.2**
- C-Eval: **90.5**
- SuperGPQA: **65.6**
- IFEval: **95.0**
- IFBench: **76.5**
- HLE w/ CoT: **24.3**
- GPQA Diamond: **85.5**
- SWE-bench Verified: **72.4**
- Terminal Bench 2: **41.6**
- LiveCodeBench v6: **80.7**

Vision Language:
- MMMU: **82.3**
- MathVision: **86.0**
- RealWorldQA: **83.7**
- MMStar: **81.0**
- OmniDocBench1.5: **88.9**

### Normalized scores (1–100)

- Tool use: 75/100. BFCL-V4 68.5, TAU2-Bench 79.0.
- Reasoning: 80/100. GPQA 85.5, SuperGPQA 65.6, HLE 24.3.
- Context window: 95/100.
- Multimodal: 82/100.
- Coding: 72/100. SWE 72.4, LiveCode 80.7, Terminal 41.6.
- Cost efficiency: 88/100. Open weights mid size.
- Overall Score: 82/100.

---
## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; scores are normalized interpretations.
- Future sources: add a new file next to this one.
