# GPT 5 nano — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's nano-tier model from the original August 2025 GPT-5 family — the cheapest, fastest GPT-5 variant, intended for lightweight, latency-sensitive tasks.
- **Provider / access:** OpenCode Zen `opencode/gpt-5-nano`; OpenAI API. Paid only.
- **Release / knowledge:** 2025-08-07. Knowledge cutoff May 30, 2024.
- **IDs:** `opencode/gpt-5-nano`
- **Context window:** 400K total (Artificial Analysis).
- **Modalities:** text and image input; text output. Reasoning: yes (high). Tool calls.
- **Pricing (as of 2025-08-07):** $0.05 per 1M input / $0.40 per 1M output (90% cached-input discount).
- **Architecture:** proprietary; parameter count undisclosed. Fast (148 t/s).

### Raw benchmarks found

> No per-benchmark rows are published by Artificial Analysis for this exact model; verified public data is the composite AA Intelligence Index plus the performance/pricing profile.

- Artificial Analysis Intelligence Index: **13** (#14 / 59) — tested high, estimated (above the median of 8 for its price class)
- Agentic / tool / coding sub-evals (Terminal-Bench, SciCode, GDPval-AA): **not publicly available**
- Output speed: **147.8 tokens/s**; TTFT ~93s
- SWE-bench / GPQA / HLE / LiveCodeBench / MRCR: no verified public per-eval score found

### Normalized scores (1–100)

> Derived from the composite AA Intelligence Index (13) and the cheap/fast 400K-context profile; per-dimension evidence is thin, so these are conservative estimates.

- **Tool use: 60/100.** Basic tool support; nano-tier reasoning makes long multi-tool chains unreliable.
- **Reasoning: 63/100.** AA Intelligence Index 13 is good for the price class but far below frontier.
- **Context window: 86/100.** 400K verified window is large even for this tier (though effective use at length is unproven).
- **Multimodal: 66/100.** Text + image input, text output only; no published vision scores.
- **Coding: 60/100.** Suitable only for trivial code tasks; no published coding benchmarks.
- **Cost efficiency: 95/100.** $0.05/$0.40 per 1M with a 90% cache discount is among the cheapest API options.
- **Overall Score: 67.0/100.** Half-up mean of the five quality dims (60+63+86+66+60)/5 = 67.0. Best-fit recommendation: ultra-cheap classification, routing, extraction, and simple latency-critical calls.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Artificial Analysis GPT-5 nano model page — specs, composite Intelligence Index, pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
