# Inkling — findings by Gemini 3.6 Flash

- Source: Thinking Machines Lab (`thinkingmachines/inkling`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Flagship open-weights multimodal sparse Mixture-of-Experts (MoE) foundation model by Thinking Machines Lab (975B total / 41B active parameters), featuring controllable thinking effort and native tri-modal (text, image, audio) processing.
- **Provider / access:** Hugging Face (`thinkingmachines/inkling`), Tinker Platform, OpenRouter (`thinkingmachines/inkling`), Fireworks AI, Together AI.
- **Release / knowledge:** July 15, 2026 release; knowledge cutoff May 2026.
- **IDs:** `thinking-machines/inkling`, `thinkingmachines/inkling`
- **Context window:** Up to 1,000,000 tokens (1M tokens) natively supported on Tinker; 524,288 tokens on OpenRouter; 16,384 max output tokens.
- **Modalities:** Native multimodal (text, vision, audio in; text out); controllable thinking effort; function calling and structured JSON mode.
- **Pricing (as of October 2026):** Open weights under Apache 2.0 license; API hosting at $0.95 / 1M input, $4.05 / 1M output (free research endpoints available on OpenRouter for agentic harnesses).
- **Architecture:** 975B parameter sparse MoE with 41B active parameters per forward pass, integrated with native audio-visual projection layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%**
- Tau2-Bench: **68.2%**
- Toolathon / SWE Atlas Codebase QnA: **70.5%**
- GDPval-AA: **1,290**

Reasoning / knowledge:

- GPQA Diamond: **87.2%**
- Humanity's Last Exam (HLE): **24.5%**
- LCR / MLCR: **76.1%**
- Artificial Analysis Intelligence Index: **78 / #22**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 6.4%**

Coding:

- LiveCodeBench: **85.5%**
- SWE-bench Verified: **77.6%**
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **76.5%**
- DeepSWE / Coding Index: **76.2**

Long context & Multimodal:

- MMMU Pro: **73.5%**
- Needle-in-a-Haystack (NIAH): **98.1%** retrieval consistency across extended context window.
- Tri-modal comprehension across images, audio waveforms, and complex document PDFs.

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid agentic tool execution backed by 63.8% on Terminal-Bench 2.1 and reliable tool calling.
- **Reasoning: 87/100.** Frontier reasoning capacity driven by controllable thinking effort and 87.2% on GPQA Diamond.
- **Context window: 92/100.** Large context architecture supporting up to 1M tokens (524K standard on aggregators) with high retrieval stability.
- **Multimodal: 84/100.** Native tri-modal architecture supporting text, audio, and visual inputs (73.5% MMMU Pro).
- **Coding: 86/100.** Elite open-weights coding capabilities (77.6% SWE-bench Verified, 85.5% LiveCodeBench).
- **Cost efficiency: 88/100.** Apache-2.0 open weights with $0.95 / $4.05 hosted API rates and free research access tiers.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (82 + 87 + 92 + 84 + 86) / 5 = 431 / 5 = 86.2 -> 86/100. Premier open-weights trillion-parameter class foundation model delivering frontier-grade multimodal reasoning and code generation.

---

## Sources

- Thinking Machines Lab Official Inkling Announcement: https://thinkingmachines.ai/blog/inkling
- Hugging Face Model Repository `thinkingmachines/inkling`: https://huggingface.co/thinkingmachines/inkling
- OpenRouter & MLQ AI Model Evaluation: https://openrouter.ai/models/thinkingmachines/inkling

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
