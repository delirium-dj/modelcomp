# GPT-6.1 Terra — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`opencode/gpt-6.1-terra`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's October 2026 fast visual-reasoning and computer-use model (1.05M context, $1/$5 per M) for high-volume professional work, screen interaction, image understanding, and writing.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`), Responses API with computer-use tooling; no verified free tier on Zen.
- **Release / knowledge:** 2026-10 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `opencode/gpt-6.1-terra`, `gpt-6.1-terra` (OpenAI Responses API).
- **Context window:** 1,050,000 tokens combined (922,000 max input / 128,000 max output).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-08):** Standard: $1.00 per 1M input, $0.05 per 1M cached input, $5.00 per 1M output; prompts over 272K input charged 2x input/cache, 1.5x output; Batch/Flex at half standard; Fast mode at 2x standard.
- **Architecture:** Visual-reasoning optimized transformer with computer-use capabilities; ~1T parameters estimated.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **78.2%** (computer-use and terminal automation)
- OSWorld: **64.7%** (GUI automation and desktop control)
- WebShop: **82.1%** (web navigation and interaction)

Reasoning / knowledge:

- GPQA Diamond: **76.8%**
- MMLU-Pro: **87.4%**
- Artificial Analysis Intelligence Index: **55** (#4 global rank)
- V*Bench (visual reasoning): **73.4%**

Coding:

- SWE-bench Verified: **61.3%**
- LiveCodeBench v5: **66.9%**
- HumanEval+: **93.7%**
- FrontierSWE 2: **55.2%**

Long context / vision:

- 1,050,000 token context with strong visual reasoning at scale.
- Native image input for computer-use, document analysis, and visual code understanding.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong computer-use and terminal automation with 78.2% on Terminal-Bench 4.0 and 64.7% on OSWorld.
- **Reasoning: 86/100.** Solid reasoning with 76.8% on GPQA Diamond and #4 AA Intelligence Index rank (score 55); V*Bench at 73.4% for visual reasoning.
- **Context window: 95/100.** 1.05M token context with strong long-context performance; capped by 922K max input.
- **Multimodal: 79/100.** Text and image input with computer-use tooling; no native audio/video support.
- **Coding: 85/100.** Competent coding with 61.3% on SWE-bench Verified and 66.9% on LiveCodeBench v5; HumanEval+ at 93.7%.
- **Cost efficiency: 88/100.** Very competitive $1/$5 base pricing with 95% cache discount; Batch/Flex at 50% improves value for batch workloads.
- **Overall Score: 86/100.** Arithmetic mean of five quality dimensions: (86 + 86 + 95 + 79 + 85) / 5 = 431 / 5 = 86.2 → 86. OpenAI's visual-computer-use specialist with excellent pricing, strong at screen interaction and image-driven workflows.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across OpenAI announcements, Responses API documentation, OSWorld/Terminal-Bench leaderboards, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [OpenAI Developers — GPT-6.1 Terra Docs](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [OSWorld Benchmark](https://osworld.xyz)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---