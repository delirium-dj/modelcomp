# Gemini 3.8 Flash — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.8 Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's cost-efficient Flash reasoning model for production agents, software engineering, and enterprise knowledge workflows; it is based on Gemini 3.7 Flash with post-training improvements and configurable effort.
- **Provider / access:** Gemini API, Google AI Studio, Google AI Mode, Gemini app, Google Antigravity, and Gemini Enterprise Agent Platform; stable API ID `gemini-3.8-flash`.
- **Release / knowledge:** 2026-09-02 release; March 2026 knowledge cutoff, with some domains limited to January 2025 according to the model card.
- **IDs:** `google/gemini-3.8-flash` / `gemini-3.8-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 maximum output, verified in current Google API documentation.
- **Modalities:** Text, image, audio, video, and PDF input; text output; low/medium/high thinking, code execution, computer use, function calling, search grounding, file search, URL context, and structured outputs. Audio/image generation and Live API are not supported.
- **Pricing (as of 2026-11-02):** Introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31; regular $1.50/$7.50 from 2027-01-01. Cached input is approximately $0.075/M on the paid route; Batch/Flex can reduce rates, and a free AI Studio tier has limited access.
- **Architecture:** Proprietary; based on Gemini 3.7 Flash, with parameters undisclosed.

## Raw benchmarks found

Agent / tool use:

- Vals Finance Agent v2: **61.4%**; Harvey's Legal Agent Benchmark: **10.0% all-pass** (Google model card).
- GDPval-AA v2: **1545 Elo**; OSWorld 2.0: **59.0%** partial (Google model card).
- Terminal-Bench 4.0: **19.1%** (Google model card); Artificial Analysis/BenchLM: **19.7%**.
- Artificial Analysis Agentic Index: **41.1%**; AutomationBench-AA: **59.9%** (Artificial Analysis/BenchLM).
- Vals Terminal-Bench 2.1: **81.3%**; Artificial Analysis independent Terminal-Bench 2.1: **87.6%** (BenchLM records).

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google model card); Artificial Analysis HLE: **47.8%**.
- BioMysteryBench: **88.8% human-solvable / 56.5% human-difficult**; LABBench2: **86.2%** (Google model card).
- Artificial Analysis Intelligence Index v5: **31** (current high-effort page; 30.6 in BenchLM's row).
- AA-GPQA Diamond: **95.3%**; AA-LCR: **81.3%**; CritPt: **18.3%** (Artificial Analysis/BenchLM).

Coding:

- DeepSWE v1.1: **73.7%** (Google model card); independent DeepSWE board: **73.8%** (BenchLM).
- Terminal-Bench 2.1: **89.4%** (Google model card); Vals independent: **81.3%**; AA independent: **87.6%**.
- SWE-bench Verified: **80.0%**; LiveCodeBench: **89.5%** (Vals AI).
- AA Coding Index: **76.3%**; AA-SciCode: **56.6%** (Artificial Analysis/BenchLM).
- FrontierSWE v2: **19.6%**; CursorBench 4.0: **39.6%** (BenchLM), illustrating variance beyond the headline coding rows.

Long context:

- **1M-token input / 64K output** is documented; no exact-model MRCR/RULER retrieval curve was found in the reviewed sources.

Multimodal:

- LVBench: **87.8% agentic / 87.1% static**; CharXiv: **86.2%**; GDP.PDF: **35.0%** (Google model card).
- AA-MMMU-Pro: **85.6%**; ExtractBench: **80.71%**; ParseBench: **71.50%** (Artificial Analysis/BenchLM).

## Normalized scores (1–100)

- **Tool use: 86/100.** Finance/legal agents, GDPval, and Terminal-Bench 2.1 are strong, but OSWorld 59%, Terminal-Bench 4.0 around 19%, and AA agentic rows show uneven general autonomy.
- **Reasoning: 88/100.** HLE-Verified 54.9%, GPQA 95.3%, strong biology results, and AA-LCR 81.3% are impressive for Flash; AA Index 31 and CritPt 18.3% cap it below the frontier Pro tier.
- **Context window: 90/100.** The verified 1M input window is excellent, but no exact-model full-window retrieval score was found and output is capped at 64K.
- **Multimodal: 94/100.** Native text/image/audio/video/PDF input plus strong LVBench, CharXiv, MMMU, and extraction results is a major advantage; output remains text-only.
- **Coding: 90/100.** DeepSWE 73.7%, SWE-bench 80%, LiveCodeBench 89.5%, and TB2.1 89.4% are excellent, but TB4.0 19.1–19.7% and FrontierSWE 19.6% show meaningful task sensitivity.
- **Cost efficiency: 98/100.** $0.75/$3.75 introductory pricing, limited free access, and cache/batch discounts are unusually strong, though the 2027 price increase and verbose reasoning reduce effective savings.
- **Overall Score: 90/100.** Half-up mean of `(86 + 88 + 90 + 94 + 90) / 5 = 89.6`; best fit is high-volume multimodal and coding agents where price and broad input coverage matter more than uniform frontier autonomy.

### Deep-research addendum (2026-10-09)

- DeepSWE v1.1: **73.7%**; GDPVal-AA v2: **1545 Elo**; Vals Finance Agent v2: **61.4%**; Harvey Legal Agent: **10.0%**.
- Introductory pricing is documented at **$0.75 input / $3.75 output per 1M tokens**, with a later regular rate noted by Google.
- Sources: https://deepmind.google/models/model-cards/gemini-3-8-flash/ ; https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash

### Multi-source deep-research addendum (2026-10-09)

- Google’s official model card reports DeepSWE v1.1 **73.7%**, GDPVal-AA v2 **1545 Elo**, Vals Finance Agent v2 **61.4%**, and Harvey Legal Agent **10.0%**.
- Google’s API documentation confirms a **1M-token context window**, **64K max output**, tunable thinking levels, and built-in tools.
- Independent sources report meaningful harness variance: DeepSWE is about **74%** on the independent board; Artificial Analysis Terminal-Bench 2.1 is **87.6%**, while Vals AI reports **81.27% ±0.38** under a different Terminus 2 setup.
- Android Bench 2.0 coverage reports only **8%**, demonstrating that the high DeepSWE score should not be generalized to all software-engineering tasks.
- **Assessment:** the refreshed model card and independent rows preserve the strong Flash value proposition but make the coding-harness split explicit; it is excellent on selected agentic coding lanes, not a uniformly strong general computer-use agent.
- Sources: https://deepmind.google/models/model-cards/gemini-3-8-flash/ ; https://ai.google.dev/gemini-api/docs/latest-model ; https://themodelgap.com/models/gemini-3-8-flash ; https://www.androidcentral.com/apps-software/android-os/android-bench-2-0

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: fresh independent public-web research using Google's model card, API documentation, Artificial Analysis, BenchLM, Vals AI, and DeepSWE/ARC records; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Google API: Gemini 3.8 Flash model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
  - [Google: Introducing Gemini 3.8 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber)
  - [Artificial Analysis: Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [BenchLM: Gemini 3.8 Flash benchmark scores](https://benchlm.ai/models/gemini-3-8-flash)
  - [Vals AI: Gemini 3.8 Flash](https://www.vals.ai/models/google_gemini-3.8-flash)
