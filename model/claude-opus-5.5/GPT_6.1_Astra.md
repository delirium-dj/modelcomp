# Claude Opus 5.5 — findings by GPT-6.1 Astra

- Source: Anthropic / `claude-opus-5-5`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's proprietary model for long-running software engineering and knowledge work. Published production results include transparent fallback to earlier Claude models when safeguards intervene.
- **Provider / access:** Claude Messages API, Claude apps, Amazon Bedrock, Google Cloud and Microsoft Foundry; native API ID `claude-opus-5-5` [1][2].
- **Release / knowledge:** Released 2026-09-22; reliable knowledge and training cutoffs June 2026 [1][2].
- **IDs:** `anthropic/claude-opus-5-5`; no Zen Free ID verified in this research.
- **Context window:** 1M tokens; 128K maximum synchronous output. The batch-only 300K-output beta is a separate serving allowance, not the ordinary output cap [2].
- **Modalities:** Text and image input; text output; adaptive thinking always on, tool use supported [2].
- **Pricing (as of 2026-11-10):** Paid, $4 input / $20 output / $0.20 cache read / $5 cache write per million tokens. Fast mode $8/$40; batch discount 50% [1][2].
- **Architecture:** Proprietary; parameter count not disclosed in the sources examined.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **4.0**, not 2.1: **66.4%**, xhigh effort, standard error ±2.6 points [1].
- GDPval-AA **v2.1**: **1846 Elo**; AutomationBench: **40.0%**, Zapier evaluation without fallback [1].
- OSWorld **2.1**: **81.8%**, explicitly labelled partial [1].
- Tau2/Tau3, Claw-Eval, Toolathon and MCP-Atlas: no verified public score found in the sources examined.

Reasoning / knowledge:

- Humanity's Last Exam: **67.7% with tools**; Terminal-Bench-Science 0.1: **58.7%** [1].
- GPQA Diamond, CritPt and Omniscience: no verified public score found in the sources examined.

Coding:

- FrontierCode v1.1 Main: **54.4%**; CursorBench 4.0: **57.8%** [1].
- SWE-bench Verified, LiveCodeBench and SciCode: no verified public score found in the sources examined.

Long context:

- Documented 1M capacity [2]; no model-specific MRCR/RULER retrieval score verified. Capacity is not a retrieval measurement.
- Visual chart recognition: Chartography **89.0% with tools** [1].

Unless noted otherwise, Anthropic reports max adaptive effort with production safeguards and fallback models enabled. These are system-level results, not proof of identical unaided-checkpoint performance; benchmark generations are kept distinct.

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval-AA 1846 and strong terminal/computer-use results support a frontier rating; partial OSWorld coverage and fallback dependence cap it.
- **Reasoning: 97/100.** HLE 67.7% with tools is strong evidence; tool assistance and missing unaided measures prevent a ceiling score.
- **Context window: 95/100.** Verified 1M capacity meets the large-window tier; no qualifying retrieval measurement supports 100.
- **Multimodal: 70/100.** Verified image understanding and Chartography support the image-input tier; native audio/video output was not established.
- **Coding: 97/100.** FrontierCode, CursorBench and Terminal-Bench 4.0 corroborate advanced agentic coding; vendor-harness dependence caps confidence.
- **Cost efficiency: 55/100.** $4/$20 remains expensive under the project price rubric, despite inexpensive cache reads and improved task efficiency.
- **Overall Score: 91/100.** Half-up mean of (96 + 97 + 95 + 70 + 97) / 5 = 91; best suited to substantial engineering and research workloads.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Independent public-web research using fresh search results and retrieved vendor documentation; the assigned reporter label is GPT-6.1 Astra and the runtime ID is shown above. Scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [1 — Anthropic announcement and evaluation table](https://www.anthropic.com/news/claude-opus-5-5)
  - [2 — Claude model specifications](https://platform.claude.com/docs/en/models/overview)
  - [Search discovery](https://html.duckduckgo.com/html/?q=%22Claude+Opus+5.5%22+benchmark)
