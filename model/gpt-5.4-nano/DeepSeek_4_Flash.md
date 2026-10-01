# GPT 5.4 nano — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5.4-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's smallest/cheapest GPT-5.4-class reasoning model (March 2026), targeting low-cost, high-volume and edge-style workloads.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-nano`; OpenAI API. Paid only.
- **Release / knowledge:** 2026-03-17. Knowledge cutoff August 31, 2025.
- **IDs:** `opencode/gpt-5.4-nano`
- **Context window:** 400K total (Artificial Analysis).
- **Modalities:** text and image input; text output. Reasoning: yes (xhigh). Tool calls.
- **Pricing (as of 2026-03-17):** $0.20 per 1M input / $1.25 per 1M output (90% cached-input discount).
- **Architecture:** proprietary; parameter count undisclosed. Fast (163 t/s) but verbose.

### Raw benchmarks found

> No per-benchmark rows are published by Artificial Analysis for this exact model; verified public data is the composite AA Intelligence Index plus the performance/pricing profile.

- Artificial Analysis Intelligence Index: **21** (#42 / 175) — tested xhigh, estimated (well above the median of 12 for its price class)
- Agentic / tool / coding sub-evals (Terminal-Bench, SciCode, GDPval-AA): **not publicly available**
- Output speed: **163.5 tokens/s**; TTFT ~86s; Intelligence Index token use 190M (very verbose)
- SWE-bench / GPQA / HLE / LiveCodeBench / MRCR: no verified public per-eval score found

### Normalized scores (1–100)

> Derived from the composite AA Intelligence Index (21) and the 400K context / cheap profile; per-dimension evidence is thin, so these are conservative estimates.

- **Tool use: 66/100.** Tool support is present but no agentic benchmark is published; nano-tier accuracy limits multi-step reliability.
- **Reasoning: 69/100.** AA Intelligence Index 21 is above average for its price class but well below full-size frontier models.
- **Context window: 86/100.** 400K verified window is unusually large for a nano-tier model.
- **Multimodal: 70/100.** Text + image input, text output only; no published vision evals.
- **Coding: 68/100.** Capable for lightweight code tasks; no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 88/100.** $0.20/$1.25 per 1M with a 90% cache discount is very cheap, though verbosity inflates real cost.
- **Overall Score: 71.8/100.** Half-up mean of the five quality dims (66+69+86+70+68)/5 = 71.8. Best-fit recommendation: high-volume, budget-bound extraction/classification and simple agent steps.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Artificial Analysis GPT-5.4 nano model page — specs, composite Intelligence Index, pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
