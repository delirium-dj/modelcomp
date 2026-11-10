# Mercury 2 — findings by Inkling 2 Small

- Source: Inception Labs (`inception/mercury-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' first reasoning diffusion LLM (dLLM) — parallel block refinement instead of sequential decoding, built for latency-critical production loops (autocomplete, agents, voice, RAG). A genuinely distinct architecture class, not a tier of an autoregressive model.
- **Provider / access:** Inception API (OpenAI-compatible Chat Completions), OpenRouter (`inception/mercury-2`), Inception Chat; folder metadata lists `inception/mercury-2`; closed weights.
- **Release / knowledge:** Released February 24, 2026 (benchable.ai lists Mar 4, 2026 — release/availability dates differ by source); knowledge cutoff not reported.
- **IDs:** `inception/mercury-2` (Inception / OpenRouter)
- **Context window:** 128K total (benchable/llm-stats; ~50K max output per folder metadata) — vendor-documented, no independent retrieval benchmark
- **Modalities:** Text in, text out (folder metadata notes vision-in rows on OpenRouter variants — unverified); reasoning yes (tunable levels); native tool use; schema-aligned JSON output; streaming
- **Pricing (as of 2026-11-10):** $0.25 / $0.75 per 1M input/output; cached input $0.025 — very cheap for a reasoning model
- **Architecture:** Diffusion LLM (dLLM) — parallel multi-token refinement; proprietary; size undisclosed; 1000+ tok/s on NVIDIA Blackwell (vendor-measured, 1,009 tok/s at launch)

### Raw benchmarks found

Agent / tool use:

- Native tool use: documented and production-positioned (Vibe/Skyvern/Wispr Flow quotes) — no verified public Tau-bench/MCP-Atlas score found
- Schema-aligned JSON output: vendor-documented; no published conformance benchmark

Reasoning / knowledge:

- benchable.ai Mercury 2 (inception/mercury-2-20260304, checked 2026-11-10): Reasoning (Baseline) **96.0%**, Hallucinations (Baseline) **98.0%**, Ethics **94.0%**, Email Classification **97.0%**, Instruction Following **53.6%**, Mathematics **58.0%**, General Knowledge **8.0%**, Coding **67.0%** — independent evaluator, 8 benchmarks, 100% success rate, top-3 speed class
- No GPQA Diamond / HLE / MMLU-Pro published for this exact model
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- benchable.ai Coding (Baseline): **67.0%**
- SWE-bench / LiveCodeBench: no verified public score found (folder metadata cites a ~24.8% SWE-bench figure, but it could not be verified against a public source — treated as unverified and not scored from)
- Mercury Edit 2 is the dedicated FIM/next-edit sibling; this card covers general Mercury 2

Long context:

- No MRCR/RULER retrieval score found; 128K vendor-documented

### Normalized scores (1–100)

- **Tool use: 52/100.** Native tool use + schema-aligned JSON in production use (Skyvern, Wispr Flow), but zero published agentic success-rate benchmarks — capability is asserted by usage, not measured publicly.
- **Reasoning: 60/100.** benchable.ai reasoning 96.0% / hallucination 98.0% are strong, but instruction-following 53.6% and the lack of GPQA/HLE data cap the verified reading of its reasoning.
- **Context window: 58/100.** 128K vendor-documented; no independent retrieval measurement; max output ~50K conflicts with nothing but is modest.
- **Multimodal: 15/100.** Text-only (vision rows unverified) — floor per methodology.
- **Coding: 55/100.** benchable.ai coding 67.0% is real but weak-baseline; no SWE-bench-class verification (an unverified ~24.8% SWE-bench claim would be bottom-tier); treat as a fast light-coding model, not a SWE solver.
- **Cost efficiency: 90/100.** $0.25/$0.75 with $0.025 cached — excellent price for reasoning-class output at 1000+ tok/s.
- **Overall Score: 48/100.** Mean of (52 + 60 + 58 + 15 + 55) / 5 = 240/5 = 48.0. A blazing-fast diffusion reasoning model for latency-critical loops and light coding; verify task fit on your own evals before trusting it with hard reasoning or repository-scale coding.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (vendor launch post, benchable.ai independent snapshot, catalogs); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: real-time agent loops, voice pipelines and autocomplete where latency dominates; not for frontier reasoning or SWE-scale coding.
- Reference URLs:
  - [Inception — Introducing Mercury 2](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [benchable.ai — Inception: Mercury 2 (benchmark snapshot)](https://benchable.ai/models/inception/mercury-2)
  - [llm-stats.com — Mercury 2 benchmarks, pricing & context window](https://llm-stats.com/models/mercury-2)
  - [explainx.ai — Mercury 2 architecture breakdown](https://explainx.ai/blog/mercury-2-diffusion-llm-1000-tokens-per-second-inception-2026)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
