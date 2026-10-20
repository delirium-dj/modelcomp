# Qwen 3.5 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/qwen3-5-flash`, 5 measured + 36 estimated benchmarks as of 2026-10-19), benchmarklist.com (`benchmarklist.com/models/qwen-qwen3.5-flash-02-23/`, 38 benchmarks), Qwen (`qwenlm.github.io`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba Qwen's open-weight Flash model, released February 2026; dense (non-MoE) flash model optimized for speed and cost; text input, text output; open weights; very low pricing.
- **Provider / access:** Qwen API (`qwen3.5-flash`, Chat Completions); OpenRouter route (`qwen/qwen3.5-flash`); available via multiple providers.
- **Release / knowledge:** Released February 25, 2026; knowledge cutoff not stated.
- **IDs:** `qwen3.5-flash` (Qwen API), `qwen/qwen3.5-flash` (OpenRouter). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; Qwen Flash models typically ship 128K–1M context; state as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.065/1M input, $0.26/1M output (benchmarklist.com) — among the cheapest frontier models; paid API, no Free tier confirmed.
- **Architecture:** Open weights (parameter count not disclosed in sources checked); dense flash model (non-MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **24.7%** (benchmarklist.com)
- OpenHands Index: **38.1%** (benchmarklist.com)

Reasoning / knowledge:

- GPQA Diamond: **86.6% estimated ±1.7 pp, medium confidence** (benchgap.net); **82.8%** (benchmarklist.com)
- AA-GPQA Diamond: **84.1% estimated ±4.2 pp, high confidence** (benchgap.net)
- GPQA: **88.0% estimated ±1.6 pp, high confidence** (benchgap.net)
- MMLU Pro: **84.1%** (benchmarklist.com)
- Vals MMLU-Pro: **84.1% measured** (benchgap.net)
- ARC-AGI-1: **75.1% estimated ±5.9 pp, medium confidence** (benchgap.net)
- ARC-AGI-2: **29.8% estimated ±12.6 pp, low confidence** (benchgap.net)
- HLE: **35.4% estimated ±9.4 pp, low confidence** (benchgap.net)
- AA-HLE: **25.7% estimated ±7.4 pp, medium confidence** (benchgap.net)
- CritPt: **4.0% estimated ±6.6 pp, medium confidence** (benchgap.net)
- Artificial Analysis Intelligence Index: **22.3% estimated ±7.9 pp, medium confidence** (benchgap.net)
- AIME26: **91.7% estimated ±1.4 pp, medium confidence** (benchgap.net); **92.5%** (benchmarklist.com)
- HMMT Nov 2025: **88.3% estimated ±1.5 pp, low confidence** (benchgap.net)
- HMMT Feb 2026: **82.0% estimated ±3.3 pp, medium confidence** (benchgap.net)

Coding:

- LiveCodeBench v6: **87.6% estimated ±2.4 pp, low confidence** (benchgap.net); **83.3%** (benchmarklist.com)
- Vals LiveCodeBench: **83.3% measured** (benchgap.net)
- SWE-bench Verified: **76.3% estimated ±4.4 pp, high confidence** (benchgap.net); **64.4%** (benchmarklist.com)
- Vals SWE-bench: **64.4% measured** (benchgap.net)
- SWE-bench Pro: **57.0% estimated ±4.8 pp, high confidence** (benchgap.net)
- DeepSWE: **56.3% estimated ±7.2 pp, low confidence** (benchgap.net)
- AA Coding Index: **45.3% estimated ±5.8 pp, medium confidence** (benchgap.net)
- AA-SciCode: **45.2% estimated ±4.3 pp, medium confidence** (benchgap.net)
- SciCode: **43.3% estimated ±2.9 pp, low confidence** (benchgap.net)
- FrontierCode 1.1 Main: **16.6% estimated ±5.2 pp, low confidence** (benchgap.net)
- FrontierSWE v2: **5.0% estimated ±9.5 pp, low confidence** (benchgap.net)

Long context:

- Context Arena: **27.2%** (benchmarklist.com)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 30/100.** Terminal-Bench 2.0 24.7% and OpenHands Index 38.1% are weak; no BrowseComp, MCP Atlas, or OSWorld scores found.
- **Reasoning: 60/100.** Strong knowledge: GPQA Diamond 86.6%, MMLU Pro 84.1%, AIME26 91.7%, ARC-AGI-1 75.1%; held down by low HLE 35.4%, CritPt 4.0%, Intelligence Index 22.3%.
- **Context window: 45/100.** Context Arena 27.2%; no confirmed context window size or long-context retrieval score (LCR, MRCR, RULER) found in sources checked.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio input confirmed; text-only floor applies.
- **Coding: 65/100.** LiveCodeBench v6 87.6%, SWE-bench Verified 76.3%, AA Coding Index 45.3%; strong competitive coding, weaker agentic coding (FrontierCode Main 16.6%).
- **Cost efficiency: 95/100.** $0.065 input / $0.26 output per 1M — among the cheapest frontier models; near-free pricing but not actually free.
- **Overall Score: 43/100.** Half-up mean of (30 + 60 + 45 + 15 + 65) / 5 = 43.0 → 43. Best-fit recommendation: ultra-cheap open-weight model for high-volume coding and knowledge tasks; not suitable for multimodal, agentic, or long-context workloads.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net benchmark dataset + benchmarklist.com + Qwen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.