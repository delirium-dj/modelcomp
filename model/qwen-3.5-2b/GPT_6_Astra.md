# Qwen3.5-2B — findings by GPT 6 Astra

- Source: Alibaba Qwen / `Qwen/Qwen3.5-2B`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

[Official post-trained checkpoint](https://huggingface.co/Qwen/Qwen3.5-2B/raw/main/README.md): **2B dense language model with vision encoder**, Apache-2.0, 24 layers mixing Gated DeltaNet and full attention in a 3:1 pattern. Family-level MoE marketing does not describe this dense checkpoint. Native **262,144 context**; no universal independent maximum output established. Text/image/video-frame input, text output, tool calls and optional thinking; **non-thinking is default**. Knowledge cutoff unverified. Gateway lists March 2, 2026 release; BenchmarkList lists February 28, so exact initial publication date is not reconciled.

Local vLLM/SGLang support OpenAI-compatible Chat Completions. [Requesty's exact deployment](https://www.requesty.ai/models/deepinfra/qwen-qwen3.5-2b), `deepinfra/Qwen/Qwen3.5-2B`, lists **$0.02 input/$0.10 output per million tokens**, no caching, 262K context and unspecified output cap. The gateway claims no retention/training for that deployment; this is not a universal checkpoint policy. Direct DeepInfra model-page retrieval returned 404, so pricing is attributed to Requesty. No Zen Free ID verified; open weights incur local compute costs.

### Raw benchmarks found

Publisher thinking results: **GPQA 51.6%**, MMLU-Pro **66.5%**, SuperGPQA **37.5%**, HMMT February/November 2025 **22.9%/19.6%**, IFEval **78.6%**, IFBench **41.3%**, BFCL-v4 **43.6%**, Tau2 **48.8%**, AA-LCR **25.6%**, LongBench v2 **38.7%**. Non-thinking MMLU-Pro is **55.3%**, IFEval **61.2%**; modes must not be conflated. Tau2 applies airline fixes; language evaluations use temperature 1/top-p .95/top-k 20/presence penalty 1.5.

Publisher vision **thinking/non-thinking** pairs: MMMU **64.2/64.2**, MMMU-Pro **50.3/47.7**, MathVista mini **76.7/73.9**, OCRBench **84.5/85.4**, OmniDocBench 1.5 **79.8/80.9**, MMLongBench-Doc **45.4/38.8**. VideoMME **75.6% with subtitles / 69.0% without**, VideoMMMU **62.1%**; ScreenSpot Pro **54.5** is non-thinking. Video uses temperature 1; other thinking vision .6 and non-thinking .7. Textual phoneme conversion is not native audio capability.

[BenchmarkList independent aggregation](https://benchmarklist.com/models/qwen-qwen3.5-2b/): GPQA Diamond **45.6%**, SciCode **2.8%**, TB2.1 **3.0%**, Tau3-Banking **2.5%**, AA-LCR **23.7%**, CritPt **0.0%**, Omniscience **−47.48**. Composite snapshot HLE **2.1%**, GDPval **198.86 Elo**, index **7.64** differ from standalone HLE **5.0%** and GDPval **219 Elo**. Requesty separately records index **6.9**; do not average snapshot indices. Historical Terminal Hard **3.8%** and Tau2 Telecom **81.6%** measure different tasks from TB2.1/Tau3. AgentFloor **44%** with its longest-horizon E tier **0%** corroborates limited sustained planning.

No verified exact-model SWE-bench, Vals Vibe, Claw-Eval or full-262K MRCR result found. Strong OCR and narrow telecom results cannot compensate for near-floor scientific coding and difficult terminal performance.

### Normalized scores (1–100)

- **Tool use: 30/100.** BFCL 43.6% and Tau2 48.8% support basic calls, but Tau3 2.5%, TB2.1 3% and low GDPval constrain complex agents.
- **Reasoning: 43/100.** Independent GPQA 45.6%, low HLE and LCR 23.7% support modest reasoning despite stronger publisher knowledge results.
- **Context window: 72/100.** Native 262K tier with explicit weak long-context reasoning evidence and no full-window retrieval guarantee.
- **Multimodal: 77/100.** Broad measured image, document and video understanding; text-only output and limited difficult visual reasoning.
- **Coding: 20/100.** SciCode 2.8% and TB2.1 3% establish severe limits on complex coding; no large-model coding scores borrowed.
- **Cost efficiency: 99/100.** Verified gateway $0.02/$0.10 pricing is exceptionally inexpensive; local hosting is not costless.
- **Overall Score: 48/100.** Half-up mean of (30 + 43 + 72 + 77 + 20)/5 = 48.4; suited to constrained local multimodal tasks rather than autonomous engineering.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three fresh searches, official checkpoint table inspection, gateway pricing and independent-result reconciliation; normalized interpretations.
