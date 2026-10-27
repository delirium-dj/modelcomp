# Qwen3.5-Flash-Lite — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen / Alibaba (`qwen/qwen3.5-flash-02-23`, mapped to Qwen3.5-Flash-Lite)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Flash-Lite (reported under Qwen3.5-Flash alias `qwen/qwen3.5-flash-02-23`)
- **Short description:** Production-optimized API version of Qwen3.5 (35B-A3B), a Flash-tier model for low-latency agentic workflows; no distinct "Flash-Lite" model found in public sources — mapped to Qwen3.5-Flash.
- **Provider / access:** Alibaba Cloud Qwen via Puter.js AI API `qwen/qwen3.5-flash-02-23` (OpenAI-compatible); also served by Alibaba Cloud Model Studio / DashScope.
- **Release / knowledge:** Released Feb 25, 2026 (Puter); '02-23' suffix = February 23, 2026 snapshot; knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.5-flash-02-23` (Puter provider ID); `Qwen3.5-Flash` (Alibaba); no Free ID confirmed on Zen.
- **Context window:** 1M tokens default (Puter); Max output 66K tokens.
- **Modalities:** Input text, image, video; output text; tool use / function calling yes; multimodal.
- **Pricing (as of 2026-10-27):** Input $0.07 / 1M tokens, Output $0.26 / 1M tokens (Puter); free to try with Puter account; Alibaba Cloud Model Studio pricing not separately disclosed for this variant.
- **Architecture:** 35B total / 3B active parameters (35B-A3B MoE); production-optimized API variant of Qwen3.5; proprietary (open-weight base, API-served).

### Raw benchmarks found

Official (Puter developer page, Qwen3.5-Flash): no numeric benchmark scores published — the page documents specs, pricing, context window, modalities, and tool use support only.

Independent (Benchmark Atlas, Qwen3.5-Flash, source unspecified — preserves evaluations reported under Qwen3.5-Flash or provider alias):
- AIME 2024 (avg@8): **93.3**
- AIME 2024-2025: **92.5**
- AIME 2025 (avg@8): **91.7**
- ALE-Bench: **826**
- Arena Code WebDev (Brand & Marketing): **1285**
- Arena Code WebDev (Consumer Product): **1225**
- Arena Code WebDev (Content Creation Tools): **1192**
- Arena Code WebDev (Data & Analytics): **1235**
- Arena Code WebDev (Frontend): **1243**
- Arena Code WebDev (Gaming): **1199**
- Arena Code WebDev (HTML): **1291**
- Arena Code WebDev (React): **1229**
- Arena Code WebDev (Reference-Based Design): **1241**
- Arena Code WebDev (Simulations): **1183**
- Arena Text — Business, Management & Financial Ops: **1394**
- Arena Text — Chinese: **1446**
- Arena Text — Creative Writing: **1343**
- Arena Text — English: **1404**
- Arena Text — Entertainment, Sports & Media: **1347**
- Arena Text — Exclude Ties: **1376**
- Arena Text — Expert: **1407**
- Arena Text — French: **1413**
- Arena Text — German: **1391**
- Arena Text — Hard Prompts: **1403**
- Arena Text — Hard Prompts English: **1409**
- Arena Text — Instruction Following: **1375**
- Arena Text — Japanese: **1369**
- Arena Text — Korean: **1344**

Note: Benchmark Atlas describes this as "source unspecified" — evaluations reported under Qwen3.5-Flash or a provider alias without an established dated checkpoint; not independently re-measured.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Tool use / function calling supported (Puter); no tau2/tau3/BrowseComp verification; Arena WebDev coding scores strong but not tool-specific.
- **Reasoning: 80/100.** AIME 2024 (avg@8) 93.3, AIME 2025 (avg@8) 91.7 — very strong mathematical reasoning; Arena Text scores across 20+ categories all 1344-1446 (high Elo-range arena ratings).
- **Context window: 90/100.** 1M tokens default verified (Puter); no measured long-context retrieval score at the full 1M window.
- **Multimodal: 70/100.** Text, image, video input; text output; no dedicated multimodal benchmark scores (V*, MathVision, CharXiv, OCRBench) verified.
- **Coding: 70/100.** Arena Code WebDev scores across 10+ categories (1183-1291); no SWE-bench/LiveCodeBench/DeepSWE verification; strong arena coding but not benchmark-verified agentic coding.
- **Cost efficiency: 85/100.** $0.07 input / $0.26 output per 1M is low-cost for a 1M-context Flash model; proprietary API model (not open weights). Not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (60 + 80 + 90 + 70 + 70) / 5 = 74.0 → 74. Low-latency Flash model with strong reasoning (AIME 93+) and 1M context; limited independent benchmark verification caps confidence.

### Conflicts noted

- **Variant identity:** No distinct "Qwen3.5-Flash-Lite" model found in public sources (BenchmarkList returns 404 for qwen-qwen3.5-flash-lite; Model Studio lists qwen3.5-omni-plus but not flash-lite). Mapped to Qwen3.5-Flash (`qwen/qwen3.5-flash-02-23`) per Puter developer docs.
- **Benchmark provenance:** Benchmark Atlas scores are "source unspecified" — not independently re-measured; may overlap with Alibaba's own published figures.
- **Pricing:** Puter lists $0.07/$0.26 per 1M; Alibaba Cloud Model Studio does not publish a separate price for this variant — possible inconsistency.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Puter developer Qwen3.5-Flash page; Benchmark Atlas independent aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
