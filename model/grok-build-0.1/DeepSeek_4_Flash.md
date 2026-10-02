# Grok Build 0.1 — findings by DeepSeek 4 Flash

- Source: xAI/Grok Build 0.1
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's early-access fast coding model for agentic software-engineering workflows.
- **Provider / access:** xAI API / OpenRouter (`x-ai/grok-build-0.1`); no Free ID.
- **Release / knowledge:** 2026-05-20; cutoff not disclosed.
- **IDs:** `x-ai/grok-build-0.1`
- **Context window:** 256,000 tokens — OpenRouter / BenchLM.
- **Modalities:** text + image in; text out; tool support; no explicit reasoning mode documented.
- **Pricing (as of 2026-10-02):** $1.00 in / $2.00 out per 1M; cached input $0.20.
- **Architecture:** proprietary.

### Raw benchmarks found

Reasoning / knowledge (Artificial Analysis, via OpenRouter):

- GPQA Diamond: **89.5%**
- HLE: **38.3%**

Agent / tool use:

- GDPval-AA: **27.6%** (Artificial Analysis)

Coding:

- positioned as a fast coding model; no SWE-bench / Terminal-Bench number found (BenchLM lists only one source-displayable row)

Long context / multimodal:

- no verified public score found

### Normalized scores (1–100)

- **Tool use: 55/100.** GDPval-AA 27.6% is weak-mid; no Terminal-Bench/Tau2.
- **Reasoning: 75/100.** GPQA 89.5% and HLE 38.3% are competitive.
- **Context window: 70/100.** 256K is solid but below the 1M tier.
- **Multimodal: 55/100.** Image input listed; no vision benchmark.
- **Coding: 70/100.** Positioned for low-latency agentic coding; no SWE/LiveCodeBench number to confirm.
- **Cost efficiency: 85/100.** $1/$2 per 1M is cheap for frontier-adjacent capability.
- **Overall Score: 65/100.** Mean of (55 + 75 + 70 + 55 + 70) / 5 = 65.0 → 65. Best-fit: low-cost high-speed coding/agent iteration.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (OpenRouter, BenchLM, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
