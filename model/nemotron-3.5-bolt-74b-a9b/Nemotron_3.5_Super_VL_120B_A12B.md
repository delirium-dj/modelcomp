# Nemotron 3.5 Bolt 74B A9B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2 (`temperature2.com/models/nemotron-3-5-bolt-74b-a9b/`, Artificial Analysis data measured 2026-10-20)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's Nemotron 3.5 Bolt 74B-A9B, released October 2026; 74B-parameter agent model designed to fit in 24GB VRAM; text input, text output; free API; from NVIDIA.
- **Provider / access:** NVIDIA API (`nemotron-3.5-bolt-74b-a9b`, Chat Completions); NVIDIA NIM route likely available.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not stated.
- **IDs:** `nemotron-3.5-bolt-74b-a9b` (NVIDIA API). Free ID confirmed on OpenCode Zen (per temperature2 pricing $0.000).
- **Context window:** Not independently confirmed in sources checked; LongContext Reasoning 69.7% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.000/1M input, $0.000/1M output — free (temperature2). Free tier confirmed.
- **Architecture:** 74B parameters (per model name); proprietary training from NVIDIA; optimized to fit in 24GB VRAM for agent workloads.

### Raw benchmarks found

Reasoning / knowledge:

- LongContext Reasoning: **69.7%** (temperature2)
- SciCode: **39.7%** (temperature2)
- Humanity's Last Exam: **24.7%** (temperature2)

Agent / tool use:

- Terminal-Bench V4: **0%** (temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 20/100.** Terminal-Bench V4 0%; no other agent/tool benchmark scores found (no BrowseComp, OSWorld, MCP Atlas, etc.).
- **Reasoning: 35/100.** HLE 24.7% low-to-moderate; Intelligence Index 21.4 points; SciCode 39.7% provides coding-reasoning signal; LongContext Reasoning 69.7% moderate.
- **Context window: 55/100.** LongContext Reasoning 69.7% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 40/100.** SciCode 39.7% measured; no SWE-bench, LiveCodeBench, HumanEval, or other coding benchmark scores found.
- **Cost efficiency: 100/100.** Free API ($0.000/$0.000 per 1M) — maximum cost efficiency score.
- **Overall Score: 33/100.** Half-up mean of (20 + 35 + 55 + 15 + 40) / 5 = 33.0 → 33. Best-fit recommendation: free, compact (74B) agent model for 24GB VRAM deployment; not suitable for multimodal, complex reasoning, or heavy agentic workloads.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2/Artificial Analysis benchmark data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.