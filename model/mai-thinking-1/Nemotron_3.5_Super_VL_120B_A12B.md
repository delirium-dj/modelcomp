# MAI Thinking 1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/mai-thinking-1`, 11 measured + 52 estimated benchmarks as of 2026-10-21), modelbenchmark.io (`modelbenchmark.io/models/mai-thinking-1`, specs/pricing/lifecycle)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Thinking 1
- **Short description:** Microsoft's MAI-Thinking-1, a reasoning model; 256K context window, 64K max output; available from 2 hosts (aihubmix, azure_ai); proprietary (weights not public).
- **Provider / access:** Microsoft API (`mai-thinking-1`, Chat Completions); hosts aihubmix and azure_ai.
- **Release / knowledge:** Release date not stated; knowledge cutoff not stated.
- **IDs:** `mai-thinking-1` (Microsoft API). No Free ID confirmed on OpenCode Zen.
- **Context window:** 256,000 tokens declared (modelbenchmark.io); max output 64K tokens; no public long-context retrieval score.
- **Modalities:** Input/output modalities not specified in sources checked; tool calling not explicitly advertised; structured output/JSON not confirmed.
- **Pricing (as of 2026-10-20):** $2.00/1M input, $8.00/1M output, $0.20/1M cache read (modelbenchmark.io, via aihubmix/azure_ai). Paid API, no Free tier confirmed.
- **Architecture:** Proprietary (parameter count not disclosed); reasoning model.

### Raw benchmarks found

Agent / tool use:

- IFEval: **93.2% estimated ±3.3 pp, medium confidence** (benchgap.net)
- Terminal-Bench 2.1 (Vals AI): **40.2% estimated ±6.3 pp, medium confidence** (benchgap.net)

Reasoning / knowledge:

- GPQA Diamond: **84.2% measured** (benchgap.net); **82.6% estimated ±3.9 pp, high confidence** (benchgap.net AA)
- AA-GPQA Diamond: **82.6% estimated ±3.9 pp, high confidence** (benchgap.net)
- GPQA: **84.2% measured** (benchgap.net)
- MMLU: **90.6% estimated ±2.2 pp, medium confidence** (benchgap.net)
- MMLU-Pro: **85.0% measured** (benchgap.net)
- ARC-AGI-1: **79.0% estimated ±2.7 pp, medium confidence** (benchgap.net)
- ARC-AGI-2: **38.0% estimated ±10.1 pp, low confidence** (benchgap.net)
- HLE: **23.0% estimated ±6.8 pp, medium confidence** (benchgap.net)
- AA-HLE: **23.7% estimated ±3.7 pp, high confidence** (benchgap.net)
- CritPt: **1.3% estimated ±2.9 pp, high confidence** (benchgap.net)
- Artificial Analysis Intelligence Index: **19.5% estimated ±5.6 pp, medium confidence** (benchgap.net)
- AIME26: **94.5% measured** (benchgap.net)
- MATH-500: **99.4% estimated ±2.1 pp, medium confidence** (benchgap.net)
- HMMT Feb 2026: **84.9% measured** (benchgap.net)
- HMMT Nov 2025: **92.3% estimated ±2.8 pp, high confidence** (benchgap.net)

Coding:

- LiveCodeBench v6: **87.7% measured** (benchgap.net)
- Vals LiveCodeBench: **84.8% estimated ±2.0 pp, low confidence** (benchgap.net)
- SWE-bench Verified: **73.5% measured** (benchgap.net)
- Vals SWE-bench: **67.4% estimated ±6.8 pp, medium confidence** (benchgap.net)
- SWE-bench Pro: **52.8% measured** (benchgap.net)
- DeepSWE: **31.9% estimated ±12.7 pp, low confidence** (benchgap.net)
- AA Coding Index: **46.8% estimated ±5.3 pp, medium confidence** (benchgap.net)
- AA-SciCode: **46.6% estimated ±3.6 pp, high confidence** (benchgap.net)
- SciCode: **45.0% estimated ±3.4 pp, high confidence** (benchgap.net)
- FrontierCode 1.1 Main: **7.9% estimated ±2.7 pp, low confidence** (benchgap.net)
- FrontierSWE v2: **2.3% estimated ±9.0 pp, low confidence** (benchgap.net)

Long context:

- No dedicated long-context retrieval score beyond context window declaration.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** IFEval 93.2% is excellent; Terminal-Bench 2.1 40.2% moderate; no BrowseComp, OSWorld, MCP Atlas scores found.
- **Reasoning: 65/100.** Strong knowledge: GPQA Diamond 84.2%, MMLU 90.6%, MATH-500 99.4%, AIME26 94.5%, HMMT Feb 2026 84.9%; held down by very low HLE 23.0%, CritPt 1.3%, Intelligence Index 19.5%.
- **Context window: 65/100.** Declared 256K tokens; no LCR/MRCR/RULER retrieval score found.
- **Multimodal: 15/100.** Text-only in sources checked — no vision/audio confirmed; text-only floor applies.
- **Coding: 60/100.** LiveCodeBench v6 87.7%, SWE-bench Verified 73.5%, AA-SciCode 46.6%; FrontierCode Main 7.9% very weak. Strong competitive coding, very weak agentic coding.
- **Cost efficiency: 30/100.** $2.00 input / $8.00 output per 1M — expensive; paid API, no Free tier confirmed.
- **Overall Score: 52/100.** Half-up mean of (55 + 65 + 65 + 15 + 60) / 5 = 52.0 → 52. Best-fit recommendation: strong knowledge-reasoning model for math/science tasks; weak on multimodal and agentic coding.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net benchmark dataset + modelbenchmark.io specs/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.