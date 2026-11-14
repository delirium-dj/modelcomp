# Egg Alpha — findings by MiniMax M3.1 Flash

- Source: TokenRhythm / 基元律动 (`egg-alpha`; upstream model owner undisclosed)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha
- **Short description:** An anonymous general-purpose model exposed by TokenRhythm in a November 2026 grey release. Independent evaluations show strong reasoning, browser-interface generation, SVG work, and multi-application coding, although the underlying developer, architecture, and parameter count remain undisclosed.
- **Provider / access:** TokenRhythm (基元律动), base URL `https://tokenrhythm.studio/v1`, exact model ID `egg-alpha`. The official announcement lists Completions, Messages, and Responses protocols; access was initially limited to eligible paid accounts.
- **Release / knowledge:** ModelDial dates the evaluated release to 2026-11-02, and TokenRhythm announced the grey release on 2026-11-03. Knowledge cutoff not publicly disclosed.
- **IDs:** `egg-alpha` on TokenRhythm. No upstream vendor ID, public weights, or verified OpenCode model ID was found.
- **Context window:** 1,000,000 total tokens and 128,000 maximum output tokens, as listed in TechGogogo's November 2026 model catalogue; TokenRhythm's public static documentation confirms that its model catalogue exposes sequence length, modalities, and maximum output but does not publish Egg Alpha's row without an authenticated session.
- **Modalities:** Text, image, and video input; text output; optional reasoning; function/tool calls; streaming; cached reads. TechGogogo reports no audio input, embeddings, or image-editing support for this model.
- **Pricing (as of 2026-11-14):** Input and output are temporarily free for the preview/grey release; no durable list price is published. ModelDial's cost field is `N/A`, which denotes missing evaluation API cost rather than a measured price.
- **Architecture:** Undisclosed. The upstream developer, weights, architecture, parameter count, and training details are not public.

### Raw benchmarks found

Agent / tool use:

- ModelDial Backend engineering: **65/100** (default configuration, snapshot published 2026-11-13): contracts and boundaries **10/20**, retries and failures **14/20**, CI and adversarial review **15/20**, transactions and consistency **17/20**, and caching and regression **9/20**.
- ModelDial Overall: **76.4/100**, rank **20/52**, in **32m 52s** of evaluation time (default configuration; the page's current result set exposes backend, frontend, and knowledge dimensions).
- Terminal-Bench, Tau2/Tau3, GDPval-AA, Claw-Eval, and other exact-model agent benchmarks: **no verified public score found**.
- TokenRhythm's official announcement confirms function calling, but no public source measured tool-call accuracy or efficiency for the exact model.

Reasoning / knowledge:

- ModelDial Knowledge & reasoning: **90/100** (default configuration, snapshot published 2026-11-13).
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and other exact-model reasoning benchmarks: **no verified public score found**.
- TechGogogo's V2.2 evaluation passed the strict ten-sentence instruction test only partly: the fifth sentence did not end in a Chinese numeral, and the seventh and ninth sentences were awkward. This is qualitative, not a numeric score.

Coding:

- ModelDial Frontend interaction: **78/100** (default configuration, snapshot published 2026-11-13).
- TechGogogo V2.2 six-task evaluation: the pelican-on-Saturn-rings bicycle SVG was nearly defect-free; the browser operating system, 3D racing game, and dependency-free Trello board were functional with polished UI; the compound-bow SVG had an incorrect upward trajectory spike after release; the racing car looked insufficiently race-like; and the browser OS used an elliptical calendar-date highlight. The article publishes no numeric total.
- SWE-bench, LiveCodeBench, SciCode, Vibe Code Bench, and other exact-model coding benchmarks: **no verified public score found**.

Long context:

- Context window: **1,000,000 tokens**, with **128,000 maximum output** (TechGogogo model catalogue; not independently retrieval-tested).
- No MRCR, RULER, or other long-context retrieval result: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 65/100.** ModelDial's backend-engineering evaluation gives Egg Alpha 65/100, including 17/20 for transactions and consistency, while TokenRhythm confirms native function calling; the lack of an exact-model agent benchmark caps confidence.
- **Reasoning: 90/100.** ModelDial's Knowledge & reasoning score is 90/100, but the strict-instruction test exposed specific failures and no GPQA, HLE, or LCR result is public.
- **Context window: 96/100.** The catalogued 1,000,000-token context is in the top tier; no published long-context retrieval benchmark prevents a top score.
- **Multimodal: 85/100.** TokenRhythm confirms image and video input with text output, but TechGogogo reports no audio input.
- **Coding: 78/100.** ModelDial's frontend-interaction score is 78/100, and TechGogogo reports successful browser-OS, racing-game, Trello, and SVG generation with several visual or physical-detail defects; no standard repository-level coding score is public.
- **Cost efficiency: 100/100.** Input and output are currently free, though the preview is temporary and the durable post-preview price is unknown.
- **Overall Score: 82.8/100.** A free, million-context anonymous model with unusually strong verified reasoning and frontend-generation results, best treated as a promising but still opaque preview rather than a benchmark-proven general-purpose leader.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimaxai/minimax-m3.1-flash)** — 2026-11-14
- Method: Fresh public-web research using direct `webfetch` of TokenRhythm's official update, quick-start, and API-integration documentation; ModelDial's current model result and methodology; TechGogogo's model catalogue and six-task evaluation; after web search was unavailable (HTTP 402). ModelDial's published values are kept as its own composite and dimension results rather than copied into the project rubric; its current three-dimension model page is used even though the visible methodology page still documents an older five-axis weighting. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [TokenRhythm — official update log, Egg Alpha grey release](https://tokenrhythm.studio/docs/updates)
  - [TokenRhythm — quick start and model-catalogue fields](https://tokenrhythm.studio/docs/overview)
  - [TokenRhythm — API integration and protocol support](https://tokenrhythm.studio/docs/api-integration)
  - [ModelDial — Egg Alpha evaluation results](https://modeldial.com/en/models/egg-alpha)
  - [ModelDial — evaluation methodology](https://modeldial.com/en/method)
  - [ModelDial — benchmark snapshot index](https://modeldial.com/data/benchmark-snapshots/index.json)
  - [TechGogogo — Egg Alpha model catalogue](https://www.techgogogo.com/ai-tools/egg-alpha/)
  - [TechGogogo — Egg Alpha six-task evaluation report](https://www.techgogogo.com/2026/11/03/egg-alpha-evaluation-report-mystery-model/)
  - [TechGogogo — LLM V2.2 benchmark methodology](https://www.techgogogo.com/llm-benchmark/)
