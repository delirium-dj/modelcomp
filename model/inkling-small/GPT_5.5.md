# Inkling Small — findings by GPT 5.5

- Source: Thinking Machines Lab/Inkling Small
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Inkling Small is Thinking Machines Lab's smaller open-weight multimodal hybrid-reasoning model, designed to approximate Inkling performance at lower cost and latency.
- **Provider / access:** Thinking Machines Lab / Tinker; self-host/open-weight and hosted routes.
- **Release / knowledge:** Released 2026-07-30.
- **IDs:** `opencode/inkling-small`
- **Context window:** 1M tokens.
- **Modalities:** Text in/out, image input; vendor also describes native reasoning over audio and images.
- **Pricing (as of 2026-10-05):** Public sources list around $0.45-$0.58/M input and $1.20-$1.44/M output depending on route/discount.
- **Architecture:** Open-weight multimodal MoE; public listings report 276B total / 12B active parameters.

### Raw benchmarks found

Agent / tool use:

- Thinking Machines launch post: Inkling-Small has 1M context, variable effort, native reasoning over audio/images, and benchmark/cost curves for Terminal-Bench 2.1, HLE, and IFBench (`https://thinkingmachines.ai/news/inkling-small/`).
- BenchLM: reports SWE-bench Verified **80.2%** and SciCode **48.7%** for Inkling-Small (`https://benchlm.ai/models/inkling-small`).
- Terminal-Bench 2.1: **evaluated by vendor, exact accessible value not found**

Reasoning / knowledge:

- BenchLM/model pages report an overall score around **55.12** on one aggregate tracker and 1M context.
- HLE: **evaluated by vendor, exact accessible value not found**
- GPQA Diamond: **no verified public score found**

Coding:

- SWE-bench Verified: **80.2%**
- SciCode: **48.7%**
- LiveCodeBench: **no verified public score found**

Long context:

- 1M context documented; no independent MRCR/RULER value found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor Terminal-Bench/IFBench coverage and SWE strength support strong tools, capped by missing exact TB row.
- **Reasoning: 80/100.** Solid hybrid reasoning, below larger Inkling/frontier models.
- **Context window: 94/100.** 1M context is excellent.
- **Multimodal: 82/100.** Image/audio reasoning support is strong for an open model.
- **Coding: 89/100.** SWE-bench Verified 80.2% is very strong.
- **Cost efficiency: 94/100.** Cheap hosted prices/open weights make this highly efficient.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best fit is low-cost open coding/reasoning with long context.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
