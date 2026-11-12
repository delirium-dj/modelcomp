# Claude Fable 5.2 — findings by GPT 6 Astra

- Source: Anthropic / `claude-fable-5-2`
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's reasoning model for long-running technical research and agentic software engineering. Anthropic says Fable 5.2 and Mythos 5.2 share an underlying model, with different cybersecurity/biology safeguards and access; results explicitly labelled Mythos are not attributed to Fable here.
- **Provider / access:** Anthropic Claude API, using the Messages API; also documented on Amazon Bedrock, Google Cloud and Microsoft Foundry. The evaluated independent configuration is Artificial Analysis's Max, Default Fallback profile.
- **Release / knowledge:** Released 2026-11-09; reliable knowledge and training-data cutoff June 2026, according to the official model page.
- **IDs:** `anthropic/claude-fable-5-2`; Bedrock `global.anthropic.claude-fable-5-2`. No Zen Free ID verified in the cited sources; paid first-party access is evaluated.
- **Context window:** 1M tokens; 128K maximum synchronous output, documented by Anthropic. No verified long-context retrieval percentage was found in the consulted sources.
- **Modalities:** Text and image input; text output. Adaptive thinking is always enabled, with tool use; forced `tool_choice: any` or `tool` is not supported. Audio/video generation is not documented for this model.
- **Pricing (as of 2026-11-12):** Standard $8 input / $40 output per 1M tokens; cache reads $0.20, five-minute writes $10 and one-hour writes $16. Batch input/output are discounted 50%. Optional fast mode is $16/$80, not a distinct model. First-party documentation describes 30-day retention unless an authorized exception applies. [Official specifications](https://platform.claude.com/docs/en/models/fable-5-2/overview), [announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2).
- **Architecture:** Proprietary; parameter count and dense/MoE structure are not disclosed in the cited sources.

### Raw benchmarks found

All Anthropic figures below come from the [2026-11-09 announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2), with safeguards on and highest available effort unless stated otherwise. These are vendor-run evaluations, not independent replications.

Agent / tool use:

- AutomationBench: **51.4%**, vendor business-workflow evaluation.
- WANDR: **82.1%**, relaxed-score agentic search evaluation.
- OSWorld 2.1: **89.3%**, offline set, partial; not the full original OSWorld benchmark.
- Terminal-Bench-Science 0.1: **74.6%**, Fable-labelled scientific-research agent result. This is not Terminal-Bench 2.1 or 4.0.
- AA-Briefcase v1.1: **66.1% rubric / 1785 Elo**, figures reproduced in Anthropic's table; not GDPval-AA.
- Remote Labor Index: **41.3%**, High effort.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval/ClawProBench, Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified public score found in the consulted sources.

Reasoning / knowledge:

- Humanity's Last Exam: **74.2% with tools**, vendor evaluation; not a no-tools result or HLE-Diamond.
- Artificial Analysis Intelligence Index: **65**, **#1/74** on the fetched page, version **5.0.1**, Max with Default Fallback. [Independent model analysis](https://artificialanalysis.ai/models/claude-fable-5-2).
- GPQA Diamond, LCR/MLCR, CritPt, and Omniscience accuracy/hallucination rate: no verified public score found in the consulted rendered sources. The presence of benchmark names on a chart is not a numerical result.

Coding:

- FrontierCode 2.0: **49.1% at Xhigh effort**; **45.3% at High effort**, vendor harness, maintainer-acceptance evaluation.
- FrontierSWE v2: **69.9%**, vendor agentic software-engineering evaluation.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: no verified public score found in the consulted sources; the newer coding tests above are not renamed as those benchmarks.

Long context:

- Official capacity: **1M tokens**. MRCR/RULER/GraphWalks or another retrieval result at 512K+ tokens: no verified public score found.

Additional evidence:

- Chartography: **73.4% without tools**, vendor visual-chart recognition evaluation.
- RoboDojo Sim: **64.9% at Max effort**, vendor-run simulated robot-control benchmark.
- Artificial Analysis measured **$26.54 per Intelligence Index task** and **47.8 minutes per task** for its Max, Default Fallback profile; these are workload-specific observations, not universal request costs or latency guarantees.

### Normalized scores (1–100)

- **Tool use: 96/100.** AutomationBench 51.4%, WANDR 82.1% and OSWorld 2.1 89.3% support frontier agent performance; vendor-specific harnesses and incomplete independent tool-level figures cap confidence.
- **Reasoning: 96/100.** HLE with tools 74.2% and independent Intelligence Index v5.0.1 65 support a frontier rating; tool-assisted HLE and default fallback are explicitly configuration-dependent.
- **Context window: 95/100.** Documented 1M capacity reaches the project's highest capacity tier, but no verified 98%+ retrieval result at 512K+ supports a perfect score.
- **Multimodal: 70/100.** Documented image input and Chartography 73.4% support the top of the image-input tier; native audio/video or non-text output is not demonstrated here.
- **Coding: 96/100.** FrontierCode 2.0 49.1% and FrontierSWE v2 69.9% support advanced repository work; vendor-run results and effort sensitivity cap the score below perfect.
- **Cost efficiency: 40/100.** The evaluated $8/$40 paid tier is expensive despite $0.20 cache reads; the measured $26.54/task Max profile reinforces the cost caveat.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions: (96 + 96 + 95 + 70 + 96) / 5 = 90.6 → 91. Best suited to difficult, long-horizon technical work; cost is excluded from Overall.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-12
- Method: Fresh public web research using direct vendor documentation, the release evaluation table, and independent Artificial Analysis results. The configured search integration returned HTTP 402; public search pages and direct fetches were used instead. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Fable 5.2 specifications](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Anthropic: Claude Fable 5.2 and Mythos 5.2 announcement and evaluations](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Artificial Analysis: Claude Fable 5.2, Max, Default Fallback](https://artificialanalysis.ai/models/claude-fable-5-2)
- Future sources: add a separate signed findings file using the same headings.
