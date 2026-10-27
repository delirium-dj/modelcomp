# Qwen3.5-4B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen (`Qwen/Qwen3.5-4B`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B
- **Short description:** Qwen3.5 family checkpoint (4B parameters), open-weight multimodal model with native long context up to 262K tokens and configurable thinking mode; suitable for local reasoning, coding assistance, and edge deployment.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-4B`; open weights; Alibaba Cloud Qwen family; also accessible via DashScope OpenAI-compatible API as `Qwen3.5-4B`.
- **Release / knowledge:** Released Feb 27, 2026 (BenchmarkList); Qwen3.5 family paper dated February 2026; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-4B` (Hugging Face), `Qwen3.5-4B` (DashScope); no Free ID confirmed on Zen.
- **Context window:** 262,144 tokens native; RoPE scaling / YaRN supported for longer contexts.
- **Modalities:** Text, image, and video input; text output; multimodal; reasoning yes (enable_thinking toggle); tool calls supported via Qwen-Agent/MCP; JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-27):** Not published (BenchmarkList: "Price not published"); open weights freely deployable; DashScope API pricing not disclosed on card.
- **Architecture:** 4B parameters; Qwen3.5 family architecture; open weights license; supports thinking mode (enable_thinking=True/False).

### Raw benchmarks found

Official (Hugging Face model card): no numeric benchmark scores published on the card itself — the card documents capabilities, chat template, sampling parameters, thinking mode configuration, Qwen-Agent usage, and long-text processing guidance.

Independent (BenchmarkList Qwen3.5-4B, 58 score rows, released Feb 27, 2026):
- Agentic: Tau2-Bench Telecom **92.1%** (rank 47/337), Tau3-Banking **8.2%** (rank 114/183), Terminal-Bench Hard **18.2%** (rank 117/326), GDPval-AA **671** (rank 196/358), ScreenSpot-Pro **60.3** (rank 33/59), DeepPlanning **17.6%** (rank 20/30), Agentick **0.447** (rank 1/6), Dr-CiK **0.31** (rank 16/19), EngiAI **1** (rank 5/5)
- General Knowledge: MMLU-Redux **88.8%** (rank 9/11), MMLU-ProX **71.5%** (rank 17/19), ALL Bench LLM **35.1%** (rank 18/44)
- Intelligence: Humanity's Last Exam **9.9%** (rank 214/488), Artificial Analysis Intelligence Index **20.09** (rank 169/433), ERQA **54.0%** (rank 17/20), AIIQ Composite IQ **90** (rank 147/161), MMBench **89.4%** (rank 2/7), RealWorldQA **79.5%** (rank 12/31)
- Healthcare: MedXpertQA **42.9%** (rank 11/21), CodeClinic **21.0%** (rank 7/8), PhysAssistBench **48.7** (rank 15/15), Pulmonary Embolism QA **4** (rank 1/4)
- Coding: no SWE-bench/LiveCodeBench/DeepSWE explicitly shown; BFCL-V4 not separately listed
- Multimodal: MMBench 89.4%, AI2D 89.6%, RealWorldQA 79.5%, LVBench 66.4%, CC-OCR 76.7%, IDP Leaderboard 72.49, ParseBench 35.4, SVFSearch 87.9%, VideoMMMU 74.1%, ALL Bench Multimodal 66.5%, MMGist 42
- Reasoning: GPQA Diamond **77.1%** (rank 161/478), StemBind **33.8%** (rank 10/27), TeleResilienceBench **16.9%** (rank 8/8), SceneFunRI **10.99**
- Mathematics: HMMT 2025 **74.0%** (rank 33/60), PolyMATH **51.1%** (rank 9/11)
- Other: SAGE **60.5%**, OpenUGI **15.32**, IFBench **59.2%**, MCJudgeBench **0.85**, WMT24++ not listed separately

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Tau2-Bench Telecom 92.1% (strong), ScreenSpot-Pro 60.3, Agentick 0.447 (#1/6); function calling supported via Qwen-Agent; capped by GDPval-AA 671 (mid-pack) and Terminal-Bench Hard 18.2%.
- **Reasoning: 70/100.** GPQA Diamond 77.1%, MMLU-ProX 71.5%, MMLU-Redux 88.8%, HMMT 2025 74.0% all strong; HLE 9.9% and TeleResilienceBench 16.9% cap the score.
- **Context window: 70/100.** Native 262K context verified; no 1M window; no measured long-context retrieval score at full window.
- **Multimodal: 85/100.** MMBench 89.4%, AI2D 89.6%, RealWorldQA 79.5%, SVFSearch 87.9%, VideoMMMU 74.1%, LVBench 66.4% — strong multimodal performance across the board.
- **Coding: 55/100.** No SWE-bench/LiveCodeBench verification; Terminal-Bench Hard 18.2% suggests limited agentic coding; general coding assistance oriented but weakly benchmark-verified.
- **Cost efficiency: 85/100.** Open weights, moderate footprint; no hosted pricing; cheaper than larger Qwen3.5 variants but more costly than 0.8B/2B. Not counted toward Overall.
- **Overall Score: 68/100.** Half-up mean of (60 + 70 + 70 + 85 + 55) / 5 = 68.0 → 68. Strong multimodal and reasoning for a small model; weak agentic/coding verification caps the score.

### Conflicts noted

- None significant — BenchmarkList marks rows as first-party/verified/other; no independent third-party contradiction found. BFCL-V4 and SWE-bench-style coding scores not present in the fetched BenchmarkList rows.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Hugging Face Qwen/Qwen3.5-4B official model card; BenchmarkList independent aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
