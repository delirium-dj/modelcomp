# Claude Mythos 5.1 — findings by Gemini 3 Flash
- Source: Anthropic/Claude-Mythos-5.1
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Specialized configuration of Anthropic's frontier model weights (identical to Claude Fable 5.1), optimized for cybersecurity and biological research. Access is restricted to verified organizations through the Cyber Verification Program (CVP).
- **Provider / access:** Claude API `claude-mythos-5-1`; also available on Amazon Bedrock, Google Cloud, and Microsoft Foundry for verified customers.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff Jun 2026.
- **IDs:** `claude-mythos-5-1`
- **Context window:** 1,048,576 tokens (1M); 128K max output.
- **Modalities:** Text, image, video, and PDF input; text output. Supports "Adaptive" thinking mode (always on for Mythos class).
- **Pricing (as of 2026-11-04):** $10.00 / $50.00 / $0.25 (In / Out / Cache Read) per 1M tokens. 50% discount for Batch API.
- **Architecture:** Proprietary. Identical model weights to Claude Fable 5.1.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1 (Vals): **85.0%**
- aaTerminalBench21 (Artificial Analysis): **91.4%**
- Terminal-Bench 4.0: **60.9%** (Anthropic system card; exceeds Fable 5.1's 55.8% due to refined cyber safeguards)
- GDPval-AA v2: **1853** (Anthropic) / **1764** (Artificial Analysis)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Source: Fable 5.1 proxy)
- AutomationBench: **31.4%** (Source: Fable 5.1 proxy)
- Toolathon-Verified: **77.8%**

Reasoning / knowledge:
- GPQA Diamond (AA): **93.7%**
- GPQA Diamond (Vals): **93.4%**
- HLE (Humanity's Last Exam): **65%** (with tools)
- MMLU-Pro (Vals): **92.4%**
- AA Intelligence Index: **49.0%**

Coding:
- SWE-bench Pro: **81.2%**
- LiveCodeBench (Vals): **90.52%** (Rank 1 as of 2026-09-01)
- DeepSWE: **67.4%**
- AA-SciCode: **63.1%**
- Vibe Code Bench v1.1: **90.3%**
- ProgramBench: **87.6%**

Long context:
- MRCR: **98.5%** at 1M window reported for the underlying model class.

### Normalized scores (1–100)

- **Tool use: 95/100.** Exceptional performance on Terminal-Bench 2.1 (91.4% AA) and GDPval (1853), establishing it as a top-tier agentic model.
- **Reasoning: 95/100.** GPQA Diamond at 93.7% and strong HLE results place it at the absolute frontier of multidisciplinary reasoning.
- **Context window: 100/100.** Full 1M token window with high retrieval accuracy (MRCR 98.5%) and large 128K output capacity.
- **Multimodal: 85/100.** Robust support for image, video, and PDF inputs; scoring limited by lack of native audio/video output.
- **Coding: 94/100.** Top-of-leaderboard LiveCodeBench performance (90.5%) and high SciCode accuracy (63.1%).
- **Cost efficiency: 30/100.** Premium pricing at $10/$50 per 1M tokens, reflecting its specialized nature and restricted access.
- **Overall Score: 94/100.** A frontier-class model optimized for high-stakes research and complex agentic tasks where safeguards must be precise.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-04
- Method: Public internet research across official Anthropic documentation, Artificial Analysis, Vals AI, and BenchLM leaderboards.
- Reference URLs:
  - [Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/news/fable-mythos-access)
  - [Claude Mythos 5.1 Model Overview](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Artificial Analysis: Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Vals AI LiveCodeBench Leaderboard](https://www.vals-ai.com/benchmarks/lcb)
