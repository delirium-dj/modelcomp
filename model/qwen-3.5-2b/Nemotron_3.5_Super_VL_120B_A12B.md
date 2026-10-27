# Qwen3.5-2B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen (`Qwen/Qwen3.5-2B`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B
- **Short description:** Small open-weight multimodal model in the Qwen3.5 family for local reasoning, coding assistance, and edge agents; middle ground between the 0.8B edge checkpoint and larger Qwen3.5 models.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-2B`; open weights; Alibaba Cloud Qwen family.
- **Release / knowledge:** Released Feb 28, 2026 (BenchmarkList); Qwen3.5 family paper dated February 2026; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-2B` (Hugging Face); no Free ID confirmed on Zen.
- **Context window:** 262,144 tokens native (Qwen3.5 family supports up to 262K).
- **Modalities:** Text, image, and video input; text output; multimodal; reasoning yes (thinking mode configurable); tool calls supported via Qwen-Agent/MCP.
- **Pricing (as of 2026-10-27):** Not published (BenchmarkList: "Price not published"); open weights freely deployable.
- **Architecture:** 2B parameters; Qwen3.5 family architecture; open weights license.

### Raw benchmarks found

Official (Hugging Face model card): no numeric benchmark scores published on the card itself — the card documents capabilities, chat template, sampling parameters, and Qwen-Agent usage.

Independent (BenchmarkList Qwen3.5-2B, 39 score rows — 22 first-party / 5 verified / 12 other sources, released Feb 28, 2026):
- Agentic: Tau2-Bench Telecom **81.6%** (rank 88/337), AgentFloor **44.0%** (rank 10/24), Agentick **0.133** (rank 4/6), ScreenSpot-Pro **54.5** (rank 36/59), Terminal-Bench Hard **3.8%** (rank 233/326), Tau3-Banking **2.5%** (rank 172/183), GDPval-AA **219** (rank 343/358)
- General Knowledge: MMLU-Redux **79.6%** (rank 10/11), MMLU-ProX **52.3%** (rank 18/19)
- Intelligence: Humanity's Last Exam **5.0%** (rank 345/488), Artificial Analysis Intelligence Index **7.64** (rank 328/433), ERQA **43.8%** (rank 18/20), AIIQ Composite IQ **83** (rank 159/161)
- Mathematics: HMMT 2025 **22.9%** (rank 52/60), PolyMATH **26.1%** (rank 10/11), ArxivMath **10.6%** (rank 35/35)
- Multimodal: SVFSearch **68.5%** (rank 27/82), LVBench **57.1%** (rank 28/49), CC-OCR **72.9%** (rank 10/16), IDP Leaderboard **62.57** (rank 20/30), VideoMMMU **62.1%** (rank 9/10), ParseBench **27.3** (rank 18/18)
- Reasoning: StemBind **35.9%** (rank 7/27), GPQA Diamond **45.6%** (rank 360/478)
- Other: Avalon-ToM-Bench **60.2** (rank 19/19), EgoArgus **0.19** (rank 6/6), PolicyShiftBench **0** (rank 11/11), OpenUGI **25.94**, MedLayXPlain **63.7**, MedXpertQA **26.9%**, IFBench **41.3%**, AA-LCR **23.7%**, IFMTBench **43.1%**, WMT24++ **45.8%**, Benchmarking Japanese G2P **87.3%** (Speech)
- Coding: BFCL-V4 **43.6%** (Tool Use, rank 44/102), Terminal-Bench 2.1 **3.0%** (rank 179/196)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** BFCL-V4 43.6% (Tool Use); Tau2-Bench Telecom 81.6% is strong but ScreenSpot-Pro 54.5 and Terminal-Bench Hard 3.8% are weak; function calling supported.
- **Reasoning: 40/100.** GPQA Diamond 45.6%, MMLU-ProX 52.3%, MMLU-Redux 79.6% show modest reasoning; HLE 5.0% and AIIQ IQ 83 (1st percentile) cap the score.
- **Context window: 70/100.** Native 262K context verified; no 1M window; no measured long-context retrieval at full window (AA-LCR 23.7%).
- **Multimodal: 55/100.** Text/image/video input; SVFSearch 68.5%, CC-OCR 72.9%, VideoMMMU 62.1%, LVBench 57.1%; moderate multimodal performance.
- **Coding: 30/100.** Terminal-Bench 2.1 3.0%, Terminal-Bench Hard 3.8%; no SWE-bench/LiveCodeBench verification; coding assistance oriented but weakly verified.
- **Cost efficiency: 90/100.** Open weights, compact deployment profile; no hosted pricing; cheaper than larger Qwen3.5 variants. Not counted toward Overall.
- **Overall Score: 48/100.** Half-up mean of (45 + 40 + 70 + 55 + 30) / 5 = 48.0 → 48. Edge/local model; modest capability floor but not frontier quality.

### Conflicts noted

- None significant — BenchmarkList marks most rows as first-party; no independent third-party contradiction found.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Hugging Face Qwen/Qwen3.5-2B official model card; BenchmarkList independent aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
