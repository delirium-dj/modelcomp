# Mercury 2.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2 (`temperature2.com/models/mercury-2-5/`, Artificial Analysis data measured 2026-10-20)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's Mercury 2.5, released September 2026; high-throughput model optimized for instant response at 706 tokens/sec; text input, text output; proprietary (weights not public).
- **Provider / access:** Inception API (`mercury-2.5`, Chat Completions).
- **Release / knowledge:** Released 2026-09-08; knowledge cutoff not stated.
- **IDs:** `mercury-2.5` (Inception API). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 71.7% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.250/1M input, $0.750/1M output, $0.375 blended per 1M (temperature2). Paid API, no Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); optimized for high output speed (706 t/s).

### Raw benchmarks found

Reasoning / knowledge:

- LongContext Reasoning: **71.7%** (temperature2)
- SciCode: **38.5%** (temperature2)
- Humanity's Last Exam: **11.8%** (temperature2)

Agent / tool use:

- Terminal-Bench V4: **0%** (temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 20/100.** Terminal-Bench V4 0%; no other agent/tool benchmark scores found (no BrowseComp, OSWorld, MCP Atlas, etc.).
- **Reasoning: 30/100.** HLE 11.8% very low; Intelligence Index 12.3 points; SciCode 38.5% provides some coding-reasoning signal; LongContext Reasoning 71.7% moderate.
- **Context window: 55/100.** LongContext Reasoning 71.7% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 40/100.** SciCode 38.5% measured; no SWE-bench, LiveCodeBench, HumanEval, or other coding benchmark scores found.
- **Cost efficiency: 65/100.** $0.250/1M input, $0.750/1M output is cheap; 706 t/s output speed is excellent; paid API, no Free tier confirmed; strong value per dollar but not free.
- **Overall Score: 32/100.** Half-up mean of (20 + 30 + 55 + 15 + 40) / 5 = 32.0 → 32. Best-fit recommendation: ultra-fast, low-cost model for high-throughput text tasks; not suitable for multimodal, agentic, or complex reasoning workloads.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.