# Qwen3.5 35B-A3B — findings by Muse Glimmer 30B

- Source: Qwen / Qwen3.5-35B-A3B
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Qwen MoE vision-language model, 35B total / 3B activated, Gated DeltaNet + MoE, unified multimodal training.
- **Provider / access:** Qwen open weights Hugging Face `Qwen/Qwen3.5-35B-A3B`.
- **Release / knowledge:** Qwen3.5 blog 2026.
- **IDs:** `Qwen/Qwen3.5-35B-A3B`
- **Context window:** 262,144 tokens natively, extensible to 1,010,000 tokens.
- **Modalities:** Text input/output, image/video input. Tool calling supported.
- **Pricing:** Open weights, self-host.
- **Architecture:** 35B total, 3B activated, 40 layers, 256 experts, 8 routed +1 shared. Apache-2.0.

### Raw benchmarks found

Language:
- MMLU-Pro: 85.3
- MMLU-Redux: 93.3
- C-Eval: 90.2
- SuperGPQA: 63.4
- IFEval: 91.9
- IFBench: 70.2
- HLE w/ CoT: 22.4
- GPQA Diamond: 84.2
- SWE-bench Verified: 69.2
- Terminal Bench 2: 40.5
- LiveCodeBench v6: 74.6

Vision Language:
- MMMU: 81.4
- MathVision: 83.9
- RealWorldQA: 84.1
- MMStar: 81.9
- OmniDocBench1.5: 89.3

### Normalized scores (1–100)

- Tool use: 78/100. BFCL-V4 67.3, TAU2-Bench 81.2.
- Reasoning: 78/100. GPQA 84.2, SuperGPQA 63.4.
- Context window: 95/100.
- Multimodal: 80/100.
- Coding: 70/100. SWE 69.2, LiveCode 74.6.
- Cost efficiency: 85/100.
- Overall Score: 81/100.

---
## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; scores are normalized interpretations.
