# Solar Mini 4 — findings by DeepSeek 4.1 Flash

- Source: Upstage / Solar Mini 4 (`solar-mini4-260922`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's small, cheap, proprietary MoE (released 2026-09-22), a 35B/3B-active text model with a 512K context, adjustable reasoning effort off by default, and the strongest AA Intelligence Index in its size class (~24, above Qwen3.6 35B / Nemotron 3.5 Lightning). EN/KO/JA.
- **Provider / access:** Upstage Console, Solar Chat, OpenRouter, on-prem; `solar-mini4-260922`. Proprietary (weights not released).
- **Release / knowledge:** 2026-09-22 (Console version / AA); blog 2026-10-01; training cutoff Feb 2026.
- **IDs:** `solar-mini4-260922`.
- **Context window:** 512K tokens (Upstage Console/docs/blog); 128K max output. Artificial Analysis lists 1M (conflict).
- **Modalities:** text in; text out. Reasoning off by default with adjustable `reasoning_effort`; tool calling + parallel tools; JSON / JSON-Schema structured outputs. EN/KO/JA.
- **Pricing (as of 2026-10-09):** **$0.10 in / $0.40 out per 1M**, **$0.01 cached** (Upstage); 70% launch discount through 2026-10-10; free on Hermes Agent from Oct 5 (limited time).
- **Architecture:** MoE, **35B total / 3B active**, pretrained from scratch; quantized runs on 1×H100 80GB; >70 tok/s/request at 32 concurrent on 2×H100 (in-house).

### Raw benchmarks found

> The AA Intelligence Index and speed/latency/cost metrics are independent (Artificial Analysis); the sub-benchmark rows are quoted by Upstage as self-reported.

- Artificial Analysis Intelligence Index v4.3.2: **24** (independent, #36/182) / 24.1 (Upstage)
- HLE **25.8%**; SciCode 47.6%; AA-LCR **83.3%**; AutomationBench-AA 22.3%; τ³-Banking 47.2 (Upstage)
- AA output speed 75.4 tok/s; TTFT 1.98 s; cost/Index task **$0.36**; verbosity 370M output tokens (AA)
- Size-class comparison (AA Index): Qwen3.6 35B A3B 18; Nemotron 3.5 Lightning 13; Nemotron 3 Ultra (55B active) 1.1 below

Long context:

- 512K–1M window; AA-LCR 83.3% (self-reported); **no MRCR/RULER published**.

### Normalized scores (1–100)

- **Tool use: 62/100.** AutomationBench-AA 22.3% and τ³-Banking 47.2 are modest; no OSWorld/MCP suite.
- **Reasoning: 66/100.** AA Index 24 (independent) is the best in its size class; HLE 25.8% and no GPQA cap it.
- **Context window: 88/100.** 512K (AA: 1M) is the 500K–1M band; AA-LCR 83.3% supports it, but no 512K+ retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 60/100.** SciCode 47.6% only; no SWE-bench/LiveCodeBench published.
- **Cost efficiency: 97/100.** $0.10/$0.40 per 1M with $0.01 cached is very cheap; AA cost/Index task $0.36.
- **Overall Score: 58/100.** (62 + 66 + 88 + 15 + 60) / 5 = 58.2 → 58. Best fit: cheap high-throughput long-context text/reasoning and Korean/Japanese work; not a vision or heavy-coding model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across Upstage's blog and Console docs and the Artificial Analysis model page. Independent AA metrics are separated from Upstage self-reported sub-benchmarks; the context-window conflict (512K vs 1M) is surfaced. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
