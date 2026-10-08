# Gemini 3.8 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/gemini-3.8-flash
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's intelligent Flash model, engineered for long-horizon software engineering, autonomous agents, and complex enterprise workflows.
- **Provider / access:** Google API (`gemini-3.8-flash`)
- **Release / knowledge:** 2026-09-02
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1.0M tokens
- **Modalities:** Text/Image/Audio/Video/PDF in; Text out.
- **Pricing (as of 2026-10-08):** $0.75/M input, $3.75/M output.
- **Architecture:** Proprietary.

### Raw benchmarks found

- MMLU (provisional): **89.2%** (LLM Stats proxy)
- GPQA Diamond: **86.4%** (LLM Stats proxy)
- SWE-bench Verified: **82.3%** (LLM Stats proxy)

### Normalized scores (1–100)

- **Tool use: 94/100.** Designed specifically for agentic workflows and complex enterprise tasks.
- **Reasoning: 93/100.** Strong performance in reasoning, balanced for speed and capability.
- **Context window: 95/100.** Excellent 1.0M token capacity, highly competitive.
- **Multimodal: 94/100.** Native multimodal input support (text/image/audio/video/PDF).
- **Coding: 91/100.** Very capable in software engineering tasks.
- **Cost efficiency: 95/100.** Highly efficient with competitive pricing ($0.75/$3.75).
- **Overall Score: 93/100.** Excellent balance of speed, capability, and efficiency, well-suited for agentic applications.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
