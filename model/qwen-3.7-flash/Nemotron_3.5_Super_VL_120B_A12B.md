# Qwen3.7-Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Alibaba Qwen (`qwen3.7-flash`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Flash
- **Short description:** Qwen3.7 native vision-language Flash model from Alibaba Qwen, enhancing multimodal understanding and agent execution vs 3.6-Flash; strengthened multimodal abilities, object recognition, real-world perception and spatial intelligence; multimodal agent scenarios (Search Agent, CI Agent) with stable end-to-end task execution; optimized multimodal coding / vibe coding.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.7-flash`; API-only.
- **Release / knowledge:** Released Jul 27, 2026 (BenchmarkList); Model Studio page last updated Oct 11, 2026; knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-flash` (Alibaba Cloud Model Studio); no Free ID confirmed on Zen.
- **Context window:** 1,000,000 tokens; Max input 991,808; Max output 131,072; Max Chain-of-Thought 262,144.
- **Modalities:** Input text, image, video; output text; function calling supported; structured outputs supported; web search supported; prefix completion supported; context caching supported.
- **Pricing (as of 2026-10-27):** China Beijing: input <=32k: $0.028/1M in, $0.11/1M out; 32k<Input<=256k: $0.083/$0.33 per 1M; 256k<Input<=1M: $0.165/$0.66 per 1M. BenchmarkList: $0.03 in / $0.006 cached / $0.13 out per 1M.
- **Architecture:** Qwen3.7 family (Alibaba Qwen); parameter count not publicly disclosed; proprietary API model.

### Raw benchmarks found

Official (Alibaba Cloud Model Studio qwen3.7-flash): no numeric benchmark scores published — the page documents capabilities, context limits, pricing, rate limits, and regional availability only.

Independent (BenchmarkList Qwen3.7 Flash, 3 benchmarks, released Jul 27, 2026):
- ObviousBench Answer pass³: **91.0%** (High mode, best reported) — reliability across repeated attempts, format compliance 100.0%; run cost $0.06, reasoning tokens 228,634, output tokens 231,711 (4 modes: none 47.2%, low 84.7%, medium 90.3%, high 91.0%)
- AIIQ Composite IQ: **94 iq_points** (rank 139/161, 14th percentile) — Abstract 93, Mathematical 101, Academic 100, Programmatic 88, Computer Use 93, Reliability 90
- Context Arena (GDM-MRCRv2): **45.8%** average (78th percentile), AUC 128K 52.5%, AUC 1M 26.0%; thinking mode: **58.1%** (59th percentile), AUC 1M 28.7%

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Function calling, structured outputs, web search, prefix completion all supported; multimodal agent scenarios (Search Agent, CI Agent); capped by no tau2/tau3/BrowseComp/OSWorld verification.
- **Reasoning: 75/100.** AIIQ IQ 94 (Mathematical 101, Academic 100), ObviousBench Answer pass³ 91.0%; capped by Programmatic IQ 88 and no standalone GPQA/HLE verification.
- **Context window: 90/100.** 1M tokens verified; Context Arena AUC 1M 26.0% (thinking 28.7%) shows measurable long-context retrieval at scale; no score at full 1M window.
- **Multimodal: 70/100.** Text, image, video input; text output; object recognition, real-world perception, spatial intelligence; no dedicated multimodal benchmark scores (V*, MathVision, CharXiv, OCRBench) verified.
- **Coding: 60/100.** Positioned for multimodal coding / vibe coding; AIIQ Programmatic IQ 88; no SWE-bench/LiveCodeBench/DeepSWE verification.
- **Cost efficiency: 80/100.** $0.03 input / $0.13 output per 1M is low-cost for a 1M-context Flash model; proprietary API model (not open weights). Not counted toward Overall.
- **Overall Score: 72/100.** Half-up mean of (65 + 75 + 90 + 70 + 60) / 5 = 72.0 → 72. Flash-tier multimodal agent model with 1M context and low pricing; limited independent benchmark verification (3 benchmarks) caps confidence.

### Conflicts noted

- **Pricing:** Alibaba Cloud Model Studio regional pricing ($0.028-$0.165 input / $0.11-$0.66 output per 1M) vs BenchmarkList ($0.03/$0.13 per 1M) — broadly consistent but not identical across tiers.
- **Context Arena thinking vs non-thinking:** 45.8% vs 58.1% — thinking mode improves long-context score by ~12 pp.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Alibaba Cloud Model Studio qwen3.7-flash official page; BenchmarkList independent aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
