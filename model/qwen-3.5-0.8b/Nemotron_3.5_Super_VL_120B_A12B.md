# Qwen3.5-0.8B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B
- **Short description:** Smallest Qwen3.5 checkpoint (Qwen3.5 family), an open-weight multimodal model built for highly constrained local and edge deployments; compact reasoning and multimodal use cases rather than frontier general reasoning.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-0.8B`; open weights; Alibaba Cloud Qwen family.
- **Release / knowledge:** Released Feb 28, 2026 (BenchmarkList); Qwen3.5 family paper dated February 2026; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-0.8B` (Hugging Face); no Free ID confirmed on Zen.
- **Context window:** 262,144 tokens native (Qwen3.5 family supports up to 262K; RoPE scaling / YaRN supported for longer).
- **Modalities:** Text, image, and video input; text output; multimodal; reasoning yes (thinking mode configurable); tool calls supported via Qwen-Agent/MCP.
- **Pricing (as of 2026-10-27):** Not published (BenchmarkList: "Price not published"); open weights freely deployable.
- **Architecture:** 0.8B parameters; Qwen3.5 family architecture; open weights license.

### Raw benchmarks found

Official (Hugging Face model card): no numeric benchmark scores published on the card itself — the card documents capabilities, chat template, sampling parameters, and Qwen-Agent usage, not benchmark results.

Independent (BenchmarkList Qwen3.5-0.8B, 32 score rows — 17 first-party / 4 verified / 11 other sources, released Feb 28, 2026):
- Agentic: Tau2-Bench Telecom **65.2%** (rank 122/337), Tau3-Banking **1.2%** (rank 175/183), GDPval-AA **-80** (rank 352/358), Terminal-Bench Hard **0.0%** (rank 324/326), ScreenSpot-Pro **46.5** (rank 45/59), Agentick **0.094** (rank 5/6)
- General Knowledge: MMLU-ProX **34.6%** (rank 19/19), MMLU-Redux **59.5%** (rank 11/11)
- Intelligence: Humanity's Last Exam **5.1%** (rank 335/488), Artificial Analysis Intelligence Index **6.1** (rank 360/433), ERQA **34.5%** (rank 20/20)
- Multimodal: LVBench **45.1%** (rank 32/49), IDP Leaderboard **57.78** (rank 21/30), CC-OCR **63.2%** (rank 12/16), ParseBench **28.4** (rank 17/18), SVFSearch **34.1%** (rank 79/82), VideoMMMU **44.3%** (rank 10/10)
- Reasoning: StemBind **30.2%** (rank 16/27), GPQA Diamond **23.6%** (rank 468/478)
- Other: OpenUGI **16.53**, MedLayXPlain **58.2**, MedXpertQA **17.1%**, IFBench **21.0%**, AA-LCR **9.0%**, PolyMATH **8.2%**, IFMTBench **28.0%**, WMT24++ **27.2%**, PolicyShiftBench **1.8**, SceneFunRI **3.63**, BFCL-V4 **25.3%** (Tool Use)
- Coding: Terminal-Bench 2.1 **0.4%** (rank 192/196)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 25/100.** BFCL-V4 25.3% (Tool Use); terminal/agentic benchmarks near zero (Terminal-Bench Hard 0.0%, Terminal-Bench 2.1 0.4%); function calling supported but no strong agentic verification.
- **Reasoning: 25/100.** HLE 5.1%, GPQA Diamond 23.6%, MMLU-ProX 34.6% all very low; MMLU-Redux 59.5% is the brightest spot; edge-scale reasoning ceiling is low.
- **Context window: 70/100.** Native 262K context verified; no 1M window; no measured long-context retrieval score at full window (AA-LCR 9.0%).
- **Multimodal: 45/100.** Text/image/video input; LVBench 45.1%, VideoMMMU 44.3%, CC-OCR 63.2%; modest multimodal performance for an edge model.
- **Coding: 20/100.** Terminal-Bench Hard 0.0%, Terminal-Bench 2.1 0.4%; no SWE-bench/LiveCodeBench verification; coding capability minimal at this scale.
- **Cost efficiency: 95/100.** Open weights, smallest footprint, edge-deployable; no hosted pricing; cheapest to run. Not counted toward Overall.
- **Overall Score: 37/100.** Half-up mean of (25 + 25 + 70 + 45 + 20) / 5 = 37.0 → 37. Edge/deployment model; not a general-purpose assistant.

### Conflicts noted

- None significant — BenchmarkList marks most rows as first-party (Qwen self-reported) with only 4 verified / 11 other sources; no independent third-party contradiction found.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Hugging Face Qwen/Qwen3.5-0.8B official model card; BenchmarkList independent aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
