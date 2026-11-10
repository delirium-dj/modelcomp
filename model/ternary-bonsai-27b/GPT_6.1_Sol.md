# Ternary Bonsai 27B — findings by GPT-6.1 Sol

- Source: Prism ML / `prism-ml/Ternary-Bonsai-27B-gguf`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** Prism ML's low-bit, Qwen3.6-27B-derived reasoning/vision model for laptop and single-GPU inference. It is not the newer **Ternary Bonsai 2 27B**, which the current gateway identifies as Qwen3.8-derived; that successor's prices and results are not transferred here.
- **Provider / access:** Official GGUF weights and Prism's llama.cpp CUDA/Metal/CPU runtime, including a documented self-hosted server. No current exact-model Zen or OpenRouter hosted route was verified; local API transport/tool formatting depend on the runtime.
- **Release / knowledge:** The official README's whitepaper citation is July 2026; an exact launch day and reliable knowledge cutoff were not verified. Parent-model dates are not substituted.
- **IDs:** `prism-ml/Ternary-Bonsai-27B-gguf`; official MLX companion `prism-ml/Ternary-Bonsai-27B-mlx-2bit`. No Zen Free ID verified. The current `prism-ml/ternary-bonsai-2-27b` route is a different generation.
- **Context window:** Advertised 262K. Publisher reports measured peak memory, not retrieval accuracy, at long contexts; no maximum output cap or full-window retention result verified.
- **Modalities:** Text and optional image inputs through the shipped vision projector; text output, thinking, reasoning, and tool calling. No native audio/video or non-text output verified.
- **Pricing (as of 2026-11-10):** No exact current hosted per-token tariff verified. Apache-licensed downloadable weights do not mean $0 inference: local hardware, memory, and power are required. The successor's $0.075/$0.50 gateway tariff is deliberately not used for this model.
- **Architecture:** Approximately 27.3B ternary language weights plus a 0.46B vision tower, 64-block hybrid attention with approximately 75% linear attention. Ternary values and per-group scales have an idealized 1.71-bit representation, but today's 2-bit slots yield approximately 7.2 GB deployed language weights, not the 5.9 GB ideal. Optional compact vision projector is approximately 0.63 GB; license Apache 2.0.

### Raw benchmarks found

All quality and resource results below come from the [official Prism model card](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf/raw/main/README.md). Quality tests use EvalScope + vLLM on NVIDIA H100, **thinking mode**, temperature 0.7, top-p 0.95, top-k 20; results are publisher-reported rather than independently reproduced.

Agent / tool use:

- BFCL **v3: 74.41**; Tau2-Bench **73.61** (reported percentage-scale scores, official per-benchmark table).
- Combined agentic/tool category **74.01**, not a third independent evaluation.
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas QnA: no verified public score found.

Reasoning / knowledge:

- MMLU-Redux **88.05**; MuSR **65.87**; GSM8K **96.06**; MATH-500 **99.20**; AIME25 **90.84**; AIME26 **87.50** (official table).
- Knowledge/reasoning category **76.96** and math category **93.40** are averages, not separate raw task suites.
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and Omniscience accuracy/hallucination rate: no verified public score found. Attempted AA original-model profiles returned HTTP 404; no AA index is inferred.

Coding:

- HumanEval+ **93.90**; MBPP+ **81.22**; LiveCodeBench **82.75**, version not specified in the table.
- Combined coding category **85.96**. SWE-bench Verified/SWE-Pro, SciCode, Vibe Code Bench, and DeepSWE: no verified public score found.
- Publisher explicitly says long-horizon agentic coding is not yet a strong target of this release; short-task results do not establish repository-repair reliability.

Long context:

- No MRCR/RULER/GraphWalks retrieval number found.
- Publisher's measured language-model peak memory is **14.7 GB at 100K context without KV compression**; it reports approximately **12.8 GB at the full 262K window with 4-bit KV cache**. These are resource observations, not task-correctness measurements.

Multimodal/resource evidence:

- MMMU-Pro **68.96**; OCR Bench **v2: 61.42**; vision-category average **65.19** (official table).
- Official 15-benchmark thinking average **80.49**, **94.6%** of the FP16 reference average; this vendor aggregate is not this report's five-dimension Overall.
- `llama-bench` **TG128/PP512**: Apple M5 Pro **26.2/393 tokens/s**, M5 Max **44.0/830**, H100 **98.0/2596**. These depend on hardware and workload.
- Optional DSpark on H100: **98 to 131.8 tokens/s**, publisher-reported **1.34×** speedup; not a universal laptop speedup or a different target model.

### Normalized scores (1–100)

- **Tool use: 78/100.** BFCL v3 74.41 and Tau2 73.61 support structured agents; missing terminal/MCP and long-horizon suites cap the grade.
- **Reasoning: 79/100.** Strong AIME/math results and MuSR 65.87 support useful reasoning; no verified GPQA/HLE/hard-science coverage supports a frontier maximum.
- **Context window: 72/100.** Advertised 262K reaches the 200K–500K tier and measured memory supports feasibility, but no retrieval accuracy establishes lossless use.
- **Multimodal: 69/100.** Exact MMMU-Pro 68.96 and OCR 61.42 support the image tier; optional projector requirements and absent audio/video/non-text output cap breadth.
- **Coding: 76/100.** LiveCodeBench 82.75 and HumanEval+/MBPP+ support algorithmic assistance, but no repository-repair suite and the publisher's agentic-coding caveat cap generalization.
- **Cost efficiency: 90/100.** Provisional self-host resource-efficiency interpretation based on measured 7.2 GB deployment and laptop throughput; no hosted tariff was verified, so this is not a $0-inference or dollar-per-task claim.
- **Overall Score: 75/100.** Half-up mean: (78 + 79 + 72 + 69 + 76) / 5 = 74.8, rounded to 75; cost excluded. Best fit is privacy-controlled local reasoning and coding assistance, not hard long-horizon engineering.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research, exact original-model card verification, and live catalog checks distinguishing the successor generation. No peer findings read. Publisher category averages, per-task results, ideal storage, actual deployment memory, and throughput harnesses are separated. Normalized scores are independent interpretations; configured search returned HTTP 402, so direct sources and a Bing lookup were used.
- Reference URLs:
  - [Official Ternary Bonsai 27B card and full benchmark table](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf/raw/main/README.md)
  - [Live OpenRouter catalog distinguishing Bonsai 2 27B](https://openrouter.ai/api/v1/models)
  - [Public provider/model catalog](https://models.dev/api.json)
- Future sources: Add a separately signed file and preserve this report; do not import successor or alternative-compression measurements silently.
