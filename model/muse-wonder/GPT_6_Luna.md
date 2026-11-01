# Muse Wonder

## Model Card

- **Name:** Muse Wonder (API model; not Muse Wonder Full)
- **Provider:** Meta Superintelligence Labs
- **Tracked catalog ID:** `opencode/muse-wonder`
- **Meta Model API ID:** `muse-wonder-1.0` (preview)
- **OpenCode Console ID / route:** `muse-wonder-1.0`, listed in the official Console endpoint table at `https://opencode.ai/inference/openai/v1/responses`. This confirms the route; benchmark rows below are not claims of testing through OpenCode.
- **Release:** October 12, 2026
- **Inputs / outputs:** Text, image, video, audio, and PDF in; text out.
- **Context:** 1,048,576 tokens at inference. Meta's API docs describe input modalities and context; OpenCode's model metadata lists a 131,072-token maximum output.
- **Reasoning:** API supports effort from `minimal` to `max`. Meta's card's `Muse Wonder (max)` results are for this API model; setting max does not select the separate, subscription-only Muse Wonder Full model.
- **Architecture / access:** Proprietary hosted model, available through Meta Model API and Muse Code. Public parameter count and architecture are undisclosed. Meta lists the API model in preview.
- **Pricing:** Meta Standard mode is $4/$20 per million input/output tokens and $0.20 per million cached input tokens. Meta says Standard-mode content is not used to train its models. OpenCode Console lists the same token rates. Web search is separately priced by Meta at $2.50 per 1,000 queries.

## Raw Benchmarks

Meta's revised October 23 model card reports benchmark values for **Muse Wonder (max)** and **Muse Wonder Full (max)** in separate columns. The rows below use only the Muse Wonder column; Full-only results are excluded. Meta notes its card mixes third-party and internally run evaluations, which are identified below where documented.

| Area | Benchmark / setting | Result | Source / notes |
| --- | --- | ---: | --- |
| Personal / professional agents | Harvey LAB-AA v1.1 | 10.0 | Meta card; source is Artificial Analysis; share of tasks meeting all criteria and hallucination checks |
| Finance | Vals Finance Agent V2 | 56.6 | Meta card; source is Vals AI |
| Health | HealthBench Pro | 60.5 | Meta card; length-normalized weighted rubric score, no tools |
| Business agents | AutomationBench-AA | 39.1 | Meta card; source is Artificial Analysis; strict pass@1 |
| Professional work | GDP.pdf | 30.8 | Meta card; Meta's comparison table |
| Professional tool use | JobBench | 70.5 | Meta card; mean reward |
| Computer use | OSWorld V2.1 | 72.6 partial / 34.3 binary | Meta card; two metrics are not interchangeable |
| Long-term memory | MemoryBench | 85.6 | Meta card; Meta's internal benchmark over 64K–100K-token multi-turn conversations, not a 1M-token retrieval test |
| Agentic coding | Terminal-Bench 4.0-AA | 52.0 | Meta card; result source is Artificial Analysis |
| Long-horizon coding | DeepSWE v1.1 | 78.8 | Meta card; result source is Datacurve; pass@1 |
| Long-horizon coding | SWE-Marathon | 53.1 | Meta card; result source is Abundant AI; pass@1 |
| Program synthesis | ProgramBench | 50.0 | Meta card; share of rollouts passing at least 95% of tests |
| Composite | Artificial Analysis Intelligence Index v4.3 | 52 | Meta card, October 2026 release snapshot; third-party index |
| Composite | Artificial Analysis Intelligence Index v5.0 | 43 | Artificial Analysis model page, current page retrieved 2026-11-01; later index version with a changed evaluation set, so not a revision of the same v4.3 metric |
| Agentic / coding | Vals Index | 64.88% ± 1.07 | Vals AI current model page; currently #7/32; page identifies Meta as default provider and warns that some benchmarks may use different parameters |
| Coding | Vals Code Migration v1.1 | 72.36% ± 3.19 | Vals AI current model page |
| Security / coding | Vals CyberBench v1.1 | 80.36% ± 5.13 | Vals AI current model page; #1/47 at retrieval |
| Coding | DeepSWE v1.1 | 78.8% | Meta card; result source is Datacurve; not substituted with another model's score |
| Coding | Vals Terminal-Bench 4.0 | 49.49% ± 2.20 | Vals AI current model page; separate from Meta's / Artificial Analysis-sourced 52.0 |
| Coding | Vals SWE-bench Multimodal | 45.63% ± 2.28 | Vals AI current model page; multimodal SWE-bench variant |
| Efficiency | Cost per full Vals Index evaluation | $10.65 | Vals AI current model page; suite-level cost, not a per-request token price |
| Efficiency | Output speed / cost per Artificial Analysis Index task | 143.1 tokens/sec / $6.95 | Artificial Analysis current model page; its model page is for Muse Wonder (Max) |

Additional scorekeeping notes:

- Meta's API listing supports text, image, video, audio, and PDF inputs; the Meta model card's shorter modality field lists text, image, video, and audio. Both describe text-only output.
- Meta's published results use maximum effort for the comparison table; the API supports other reasoning settings. Meta distinguishes Muse Wonder from Muse Wonder Full, which is not available through the API.
- Artificial Analysis changed from Index v4.3 to v5.0. The reported scores of 52 and 43 therefore remain labeled by version rather than being combined or described as a same-suite regression.
- Meta's model card documents its chosen source and metric for several benchmark rows. It warns that internally generated competitor runs are best-effort, and that prompts, tools, and runtime may not be optimally tuned for proprietary models.

## Normalized Scores

- **Tool use: 90/100.** Strong agentic/work-task evidence, including Vals Index and CyberBench results, balanced against the lower binary-completion OSWorld result and mid-tier Terminal-Bench score.
- **Reasoning: 88/100.** Strong results on demanding multi-step and professional tasks, but no directly comparable public GPQA/HLE score for this exact API model; the current Artificial Analysis v5 index is 43.
- **Context window: 88/100.** A 1M-token input limit and useful 64K–100K conversational memory evidence, but no published retrieval result validating performance across the full 1M context.
- **Multimodal: 90/100.** Supports text, image, video, audio, and PDF input, with text output; public benchmark coverage is stronger for agents and coding than for perception.
- **Coding: 94/100.** Strong DeepSWE, SWE-Marathon, code-migration, and Terminal-Bench results; benchmarks are from different providers and harnesses.
- **Cost efficiency: 50/100.** The $4/$20 per-million-token rate is expensive; independent suite-level evaluations report $6.95 per Artificial Analysis task and $10.65 per Vals Index test.
- **Overall Score: 90/100.** Mean of the five quality dimensions, excluding cost: (90 + 88 + 88 + 90 + 94) / 5 = 90.

## Agreement Notes

- This report concerns Meta Model API `muse-wonder-1.0` and the corresponding OpenCode Console route. It does not evaluate Muse Wonder Full, Muse Spark, or a Meta UI-only route.
- Meta's third-party and internal results, Artificial Analysis' own current index, and Vals AI's current index remain distinct. The current AA v5.0 score is not comparable as a time-series update to the release-era AA v4.3 score.
- The 1M context claim is a capacity limit, not proof of perfect retrieval at 1M. MemoryBench's 64K–100K multi-turn test is reported separately.
- Meta identifies Muse Wonder as preview software and warns deployers to add safeguards and human confirmation for irreversible agent actions.

## Signature

Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-11-01 UTC

Method: Independent public-source research; exact model/API IDs and OpenCode routing were checked, benchmark variants and index versions were kept distinct, and normalized scores are evidence-weighted judgments rather than raw percentages.

- Reference URLs: [Meta Muse Wonder launch and research overview](https://research.meta.ai/blog/muse-wonder); [Meta revised Muse Wonder model card](https://research.meta.ai/static/muse-wonder-model-card); [Meta Model API model docs](https://dev.meta.ai/docs/models); [Meta Model API model page](https://dev.meta.ai/models/muse-wonder); [Meta pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits); [OpenCode Zen endpoints and prices](https://opencode.ai/docs/zen); [OpenCode model metadata](https://opencode.ai/data/meta/muse-wonder-1-0); [Artificial Analysis Muse Wonder page](https://artificialanalysis.ai/models/muse-wonder); [Vals AI Muse Wonder evaluation](https://www.vals.ai/models/meta_muse-wonder).
