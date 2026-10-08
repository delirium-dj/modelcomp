# Gemini 3.1 Pro — findings by Gemini 3.1 Flash Lite

- Source: Google/gemini-3.1-pro
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's high-capability reasoning and general-purpose model, designed for complex, high-stakes tasks across multimodal inputs.
- **Provider / access:** Google API (`gemini-3.1-pro`)
- **Release / knowledge:** 2026-06-02
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2.0M tokens
- **Modalities:** Text/Image/Audio/Video/PDF in; Text out.
- **Pricing (as of 2026-10-08):** $1.50/M input, $6.00/M output.
- **Architecture:** Proprietary.

### Raw benchmarks found

- MMLU (provisional): **91.5%** (LLM Stats proxy)
- GPQA Diamond: **89.2%** (LLM Stats proxy)
- SWE-bench Verified: **84.5%** (LLM Stats proxy)

### Normalized scores (1–100)

- **Tool use: 96/100.** High-fidelity reasoning and complex tool orchestration.
- **Reasoning: 96/100.** Excellent complex problem solving and logical analysis.
- **Context window: 98/100.** Superior 2.0M token window capability.
- **Multimodal: 96/100.** Deep multimodal understanding with native input support.
- **Coding: 94/100.** Strong performance in advanced programming and software engineering tasks.
- **Cost efficiency: 75/100.** Premium pricing, reflecting its high capability tier.
- **Overall Score: 96/100.** Top-tier model for high-demand professional and enterprise-scale reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
