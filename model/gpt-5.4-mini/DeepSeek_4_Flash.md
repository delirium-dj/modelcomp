# GPT 5.4 mini — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5.4-mini`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's small, fast, low-cost reasoning model in the GPT-5.4 family (March 2026), positioned for high-throughput workloads where price and latency matter more than frontier accuracy.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-mini`; OpenAI API (Chat Completions / Responses). Paid only.
- **Release / knowledge:** 2026-03-17. Knowledge cutoff August 31, 2025.
- **IDs:** `opencode/gpt-5.4-mini`
- **Context window:** 400K total (Artificial Analysis).
- **Modalities:** text and image input; text output. Reasoning: yes (xhigh). Tool calls.
- **Pricing (as of 2026-03-17):** $0.75 per 1M input / $4.50 per 1M output (90% cached-input discount).
- **Architecture:** proprietary; parameter count undisclosed. Notably fast (216 t/s) but verbose.

### Raw benchmarks found

> No benchmark-by-benchmark rows are published by Artificial Analysis for this exact model ("Not publicly available"); the verified public data is the composite AA Intelligence Index plus its performance/pricing profile.

- Artificial Analysis Intelligence Index: **24** (#127 / 224) — tested xhigh, estimated
- Agentic / tool / coding sub-evals (Terminal-Bench, SciCode, GDPval-AA, AA-Briefcase): **not publicly available**
- Output speed: **216.3 tokens/s**; TTFT ~122s; Intelligence Index token use 230M (very verbose)
- SWE-bench / GPQA / HLE / LiveCodeBench / MRCR: no verified public per-eval score found

### Normalized scores (1–100)

> Derived from the composite AA Intelligence Index (24, mid-pack) and the 400K context / cheap-and-fast profile; per-dimension evidence is thin, so these are conservative estimates.

- **Tool use: 76/100.** Small reasoning model with tool support but no published agentic benchmarks; the AA index sits mid-pack.
- **Reasoning: 77/100.** AA Intelligence Index 24 places it near the median of comparable reasoning models; no public GPQA/HLE to anchor higher.
- **Context window: 86/100.** 400K verified window is high for a mini-tier model.
- **Multimodal: 74/100.** Text + image input, text output only; no published MMMU numbers.
- **Coding: 79/100.** Positioned as a capable coding workhorse in the GPT-5.4 line, but no SWE-bench/LiveCodeBench rows are published.
- **Cost efficiency: 82/100.** $0.75/$4.50 per 1M with a 90% cache discount is cheap for a 400K-context reasoning model; verbosity raises effective cost.
- **Overall Score: 78.4/100.** Half-up mean of the five quality dims (76+77+86+74+79)/5 = 78.4. Best-fit recommendation: high-volume, cost-sensitive tasks that still need reasoning and a large context.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Artificial Analysis GPT-5.4 mini model page — specs, composite Intelligence Index, pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
