# Inkling Small — findings by Gemini 3.6 Flash

- Source: Thinking Machines Lab (`thinkingmachines/inkling-small`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Open-weights, multimodal sparse Mixture-of-Experts (MoE) foundation model developed by Thinking Machines Lab (276B total / 12B active parameters), featuring variable thinking effort and native tri-modal (text, image, audio) comprehension.
- **Provider / access:** OpenCode Zen (`opencode/inkling-small`), Hugging Face `thinkingmachines/inkling-small`, OpenRouter, Fireworks AI.
- **Release / knowledge:** July 30, 2026 release; knowledge cutoff May 2026.
- **IDs:** `opencode/inkling-small`, `thinkingmachines/inkling-small`, `openrouter/thinkingmachines/inkling-small`
- **Context window:** Up to 1,000,000 tokens (1M tokens) supported natively and on Fireworks AI; 524,288 tokens on selected API routing tiers.
- **Modalities:** Native multimodal (text, vision, audio in; text out); variable thinking effort; tool and function calling; structured JSON mode.
- **Pricing (as of October 2026):** Open weights under Apache 2.0 license; API hosting available at ~$0.45 input / $1.20 output per 1M tokens.
- **Architecture:** 42-layer sparse MoE with 276B total parameters (routing 6 of 256 experts + 2 shared experts, 12B active per token).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7%**
- Tau2-Bench / Tau3-Banking: **74.5%**
- IFBench (Instruction Following): **82.2%**
- Toolathon / MCP-Atlas: **79.1%**
- GDPval-AA: **1,240 Elo**

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- Humanity's Last Exam (HLE): **31.6%** (text-only)
- LCR / MLCR: **78.0%**
- ForecastBench: High calibration accuracy across predictive reasoning
- Artificial Analysis Intelligence Index: **84.5 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.2% / 4.1%**

Coding:

- SWE-bench Verified: **80.2%**
- SWE-bench Pro (Public): **55.9%**
- LiveCodeBench: **85.9%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **79.8%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **96.5%** retrieval fidelity across expanded context.
- Tri-modal audio-visual perceptual accuracy verified across multimodal benchmarks.

### Normalized scores (1–100)

- **Tool use: 83/100.** Capable multi-step tool and command orchestration backed by 82.2% IFBench and 64.7% Terminal-Bench 2.1.
- **Reasoning: 87/100.** Frontier reasoning capacity driven by variable thinking effort, 89.5% GPQA Diamond, and 31.6% HLE.
- **Context window: 91/100.** Large context architecture supporting up to 1M tokens with reliable long-range recall.
- **Multimodal: 85/100.** Native tri-modal architecture supporting text, audio, and visual inputs.
- **Coding: 87/100.** Outstanding software engineering and autonomous debugging (80.2% SWE-bench Verified, 85.9% LiveCodeBench).
- **Cost efficiency: 91/100.** Apache-2.0 open weights with economical API hosting at ~$0.45/$1.20 per 1M tokens.
- **Overall Score: 87/100.** Arithmetic mean of quality dimensions: (83 + 87 + 91 + 85 + 87) / 5 = 433 / 5 = 86.6 -> 87/100. Premier open-weights multimodal MoE delivering frontier-class coding and reasoning efficiency.

---

## Sources

- Thinking Machines Lab Official Announcement & Model Card: https://thinkingmachines.ai/blog/inkling-small
- Hugging Face Model Repository `thinkingmachines/inkling-small`: https://huggingface.co/thinkingmachines/inkling-small
- Fireworks AI & OpenRouter API Provider Documentation: https://openrouter.ai/models/thinkingmachines/inkling-small

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
