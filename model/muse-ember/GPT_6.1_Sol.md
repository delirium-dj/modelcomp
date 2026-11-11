# Muse Ember — findings by GPT 6.1 Sol

- Source: Meta / `muse-ember-1.0`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest hosted multimodal reasoning model for repeated coding subtasks, tool calls, routing, extraction, and document processing. Meta positions larger Muse models for harder planning tasks; “Max” in evaluations is a reasoning-effort setting, not another model.[1][2]
- **Provider / access:** Meta Model API and Muse Code, plus OpenRouter and paid OpenCode Zen serving. Meta explicitly documents Responses support; Zen's inspected entry uses the OpenAI Responses provider. Catalog inspection is not an authenticated inference test.[1][2][4][5]
- **Release / knowledge:** Official launch **2026-11-09**. No exact training knowledge cutoff verified.[1]
- **IDs:** Native `muse-ember-1.0`; OpenRouter `meta/muse-ember`; Zen `opencode/muse-ember-1.0`. Historical identity resolution belongs to the project's [canonical identity roster](../../model-aliases.generated.md); this report scores new measurements explicitly labeled Muse Ember, not transferred anonymous-model results.
- **Context window:** Meta advertises **1M total / up to 512K output**. The inspected Zen entry lists **1,048,576 / 270,000**; OpenRouter lists **1,048,576 / 943,718**. Output allowances conflict across sources, so the gateway values are recorded as provider-specific catalog claims, not silently promoted to the native maximum. No full-window retrieval score verified.[1][4][5]
- **Modalities:** Native text, image, audio, video in; text out. Meta explicitly confirms all four input modalities. AA's evaluated profile describes text/image, while Zen lists text/image/video/PDF but not audio: do not assume every host exposes the full native media set. Reasoning, tool calls, and structured output are documented/listed.[1][2][3][4][5]
- **Pricing (as of 2026-11-11):** Native and Zen standard prompts up to 200K tokens: **$0.10 input / $0.50 output / $0.004 cached input per 1M**. Longer prompts: **$0.30 / $1.50 / $0.012**. OpenRouter's inspected base entry additionally lists **$0.125/M cache write** and **$0.0025 per search**; those are gateway claims, not universal native tool tariffs. No current exact Zen Free ID was found.[1][2][4][5]
- **Architecture:** Proprietary/closed weights; parameter and active-parameter counts undisclosed. Meta says this is its first specialized model trained using Muse Wonder Full, which does not establish a shared architecture or identical weights.[1][3]

### Raw benchmarks found

Unless noted otherwise, the following are Meta's **2026-11-09 launch table at max reasoning effort**, directly inspected on the official research and developer pages. Meta distinguishes its internal tests from attributed Artificial Analysis results; duplicate publication of one result is not independent replication.[1][2]

Agent / tool use:

- AutomationBench-AA, **strict pass@1: 37.8%** — official launch snapshot. BenchLM separately displays **68.1%** under its general AA AutomationBench row; its provenance/aggregation was not reconciled here, so the two values are not averaged or treated as identical definitions.[1][6]
- Agents' Last Exam, **Linux subset: 61.6%** — Meta internal evaluation.[1]
- OSWorld 2.1: **69.5% partial-credit reward / 33.8% binary success** — official developer table. Partial credit is not the all-or-nothing completion rate.[1][2]
- Personal Superintelligence Index: **46.8** — Meta internal composite, not 46.8% task completion or an independent intelligence index.[1]
- Terminal-Bench 2.1, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: **no verified public score found** in the inspected exact-model sources.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36**, directly confirmed on AA's exact-model page, currently **v5.0.1**. Meta's launch plot gives the less-rounded high-effort point **35.8** at **$0.136/task**, and another effort point **33.9** at **$0.116/task**. Do not compare these v5 values directly with older v4 or v1 index thresholds.[1][3]
- AA reports approximately **$0.14 per Intelligence Index task** for the inspected max configuration. This is a workload-specific inference cost, not a monthly subscription.[3]
- BenchLM secondarily transcribes Omniscience **21.1% accuracy / 17.4% hallucination rate** and MLCR-AA **18.3%**. Original per-benchmark values were not exposed in the readable AA charts, so these remain secondary, version-sensitive evidence.[6]
- GPQA Diamond, HLE, exact CritPt, and LCR: **no verified public score found**. Inclusion of a benchmark in an index definition is not an individual score.

Coding:

- Terminal-Bench **4.0: 40.9%**, Muse Ember in **mini-swe-agent**, max reasoning. Meta compares each model in its best published harness, not a shared harness. This is not Terminal-Bench 2.1.[1]
- Coding Agent Index-AA: **46**; FrontierCode **2.0-AA: 27.2%**, both attributed to AA in Meta's launch publication.[1][2]
- SWE-bench Verified / Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found** for the exact model in the inspected sources.

Long context:

- No verified MRCR, RULER, or GraphWalks result at a stated token length. GDP.pdf-AA **22.8%** is professional document-task all-pass performance, not million-token needle retrieval.[1][3]

Multimodal evidence:

- PerceptionBench with tools: **80.6%**, Meta internal fine-grained visual-perception evaluation. Tool assistance is part of the configuration.[1]
- Native audio/video support is a verified capability, but no exact audio/video quality benchmark was independently verified in this research.[1][2]

### Normalized scores (1–100)

- **Tool use: 68/100.** Strict workflow pass@1 of 37.8%, Linux agent performance of 61.6%, and OSWorld binary success of 33.8% support useful repeated agent work, not frontier autonomous reliability.[1][2]
- **Reasoning: 68/100.** Independently confirmed AA v5 index 36 supports useful general reasoning; missing GPQA/HLE and limited exact knowledge evidence cap the score, without applying old index scales to v5.[1][3]
- **Context window: 95/100.** Verified 1M capacity meets the top tier, but no measured high-retention result supports 100 and provider output caps disagree.[1][4][5]
- **Multimodal: 92/100.** Native image/audio/video input and tool-assisted PerceptionBench 80.6% meet the audio-input tier; missing media-specific evaluation, text-only output, and host restrictions cap it.[1][2]
- **Coding: 66/100.** TB4.0 40.9%, Coding Agent Index 46, and FrontierCode 2.0 27.2% support economical coding subtasks, while harder software-engineering completion remains limited.[1][2]
- **Cost efficiency: 98/100.** $0.10/$0.50 base pricing and approximately $0.14 per evaluated AA task make high-volume inference inexpensive; long prompts cost three times more and no current free API tier is verified.[1][3][5]
- **Overall Score: 78/100.** Half-up mean of (68 + 68 + 95 + 92 + 66) / 5 = 77.8; cost is excluded. Best suited to inexpensive repeated multimodal agent steps rather than the hardest autonomous engineering work.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-11
- Method: Independent fresh public search, primary launch/developer tables, live exact-model catalogs, AA's evaluated model profile, and explicitly labeled secondary checks. The excluded own twin was opened only after drafting; its historical no-benchmark conclusion is superseded by genuinely new revealed-model evidence. No peer findings read; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [1 — Meta's Muse Ember launch, benchmark definitions, harnesses, limits, and long-context pricing](https://research.meta.ai/blog/muse-ember)
  - [2 — Official model page, native modalities and benchmark table](https://developer.meta.com/ai/models/muse-ember/)
  - [3 — Artificial Analysis Muse Ember max profile and index version](https://artificialanalysis.ai/models/muse-ember)
  - [4 — OpenRouter public exact-model catalog](https://openrouter.ai/api/v1/models)
  - [5 — OpenCode Zen live catalog, exact Responses route and pricing overrides](https://opencode.ai/zen/v1/models)
  - [6 — BenchLM exact-model transcriptions, secondary definitions kept separate](https://benchlm.ai/models/muse-ember)
- Future sources: preserve independent reports and add a separate signed file using the same headings.
