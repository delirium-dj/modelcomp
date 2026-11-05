# Mercury 2 — findings by DeepSeek 4.1 Flash

- Source: Inception / Mercury 2 (`inception/mercury-2`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' second-generation diffusion LLM (dLLM, released 2026-02-20) — parallel block refinement instead of sequential decoding, marketed as the fastest reasoning model for latency-sensitive loops (coding autocomplete, agent steps, voice, RAG). Superseded by Mercury 2.5 (and later Mercury 3); deprecated on Artificial Analysis.
- **Provider / access:** Inception API Platform and OpenRouter (`inception/mercury-2`); OpenAI-compatible Chat Completions, native tool use, schema-aligned JSON, tunable reasoning. No free tier; no OpenCode Zen Free ID.
- **Release / knowledge:** 2026-02-20 (AA); knowledge cutoff not disclosed. Availability note: Inception's current models page lists Mercury 2 beyond end-of-life (existing customers kept access through 2026-11-15; new users routed to Mercury 3).
- **IDs:** `inception/mercury-2`.
- **Context window:** 128K (vendor blog + AA + OpenRouter); max output listed as 50K in project metadata.
- **Modalities:** text in → text out (AA: explicitly no image input; OpenRouter route exposes text parameters only). Project metadata lists "text, vision in" — **conflict surfaced**; no independent vision benchmark exists, so vision is not credited.
- **Pricing (as of 2026-11-05):** $0.25 in / $0.75 out per 1M; cached input $0.025 (90% discount, per AA); blended (7:2:1) ≈ $0.14.
- **Architecture:** proprietary diffusion LLM (parallel refinement, ">5x faster generation"); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Native tool use advertised (vendor); no MCP-Atlas / Tau3 / Toolathlon / OSWorld row exists → **no verified public agentic benchmark found**
- Speeds: **1,009 tokens/sec on NVIDIA Blackwell** (vendor); **334 tok/s measured** end-to-end and TTFT-answer 5.03s (Artificial Analysis) — the fastest-generation positioning held up directionally, not literally, on AA's harness

Reasoning / knowledge:

- "Reasoning-grade quality inside real-time latency budgets" (vendor); no GPQA / HLE / AA Index row published (BenchLM: 0 rows, unranked; an earlier mid-Oct aggregate read ~32.9/100)
- AA Intelligence Index: not computed (deprecated model; benchmarked less frequently)

Coding:

- SWE-bench 24.8% (project-curated finding from launch coverage; not independently re-sourced this pass) — light repository coding
- Partner testimony (vendor page): Zed (next-edit autocomplete fast enough to feel in-flow), Skyvern ("at least twice as fast as GPT-5.2"), Wispr Flow (transcript cleanup)

Long context:

- 128K window; no MRCR/RULER/GraphWalks published → no verified retrieval value.

### Normalized scores (1–100)

- **Tool use: 45/100.** Native tool use and agent-loop speed positioning are real, but zero verified agentic benchmarks exist and the only coding-agent number (SWE-bench 24.8%) is weak.
- **Reasoning: 45/100.** No reasoning benchmark row exists; the vendor's "reasoning-grade at real-time latency" claim is directional only (AA never computed an index for it).
- **Context window: 65/100.** 128K window (128K tier); no recall-at-depth measurement.
- **Multimodal: 15/100.** Text in / text out only (AA explicit; OpenRouter route text-only). The metadata "vision in" claim is unsupported by both endpoints and uncredited.
- **Coding: 40/100.** SWE-bench 24.8% keeps it to light editing/autocomplete; the speed advantage is genuine for in-flow suggestions but not for repository-scale work.
- **Cost efficiency: 88/100.** $0.25/$0.75 per 1M with a 90% cache discount is inexpensive for the speed tier; deprecation limits the value horizon.
- **Overall Score: 42/100.** (45 + 45 + 65 + 15 + 40) / 5 = 42.0 → 42. Best fit: latency-critical loops — autocomplete, voice turns, small agent steps — where a weak repository coding profile is acceptable; superseded by Mercury 2.5/3 for anything else.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-05
- Method: fresh public internet research (Inception Mercury 2 launch blog, Artificial Analysis model page, OpenRouter route listing, BenchLM page). Vendor speed claims are separated from AA-measured performance; the text-only vs metadata-vision conflict and the deprecation status are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception — Introducing Mercury 2](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [Artificial Analysis — Mercury 2](https://artificialanalysis.ai/models/mercury-2)
  - [OpenRouter — inception/mercury-2](https://openrouter.ai/inception/mercury-2)
  - [BenchLM — Mercury 2](https://benchlm.ai/models/mercury-2)
- Future sources: add a new file next to this one, e.g. `Mercury_2.5.md`, using the same headings.
