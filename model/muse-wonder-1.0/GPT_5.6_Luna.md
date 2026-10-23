# Muse Wonder 1.0 - findings by GPT 5.6 Luna

- Source: Meta (`muse-wonder-1.0`; OpenCode Zen `opencode/muse-wonder-1.0`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's frontier agent model for complex coding, long-running agents, and computer use. It is the API-served Muse Wonder model, distinct from the subscription-only Muse Wonder Full variant.
- **Provider / access:** Meta Model API with model ID `muse-wonder-1.0`; OpenCode Zen `opencode/muse-wonder-1.0` through the OpenAI-compatible Responses API. Meta's API supports OpenAI-compatible access and the OpenCode route is documented as Responses API.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not announced.
- **IDs:** `meta/muse-wonder-1.0` (gateway/catalog form), `muse-wonder-1.0` (Meta API), `opencode/muse-wonder-1.0` (OpenCode Zen). No separately verified Free ID on Zen.
- **Context window:** 1,048,576 total tokens; 131,072 max output. Verified by Meta's model page and the OpenCode-compatible model listing.
- **Modalities:** Text, image, audio, and video in; text out; reasoning on; tool calls supported. Artificial Analysis independently lists the four input modalities; PDF input is not treated as verified here because the first-party model page does not specify it.
- **Pricing (as of 2026-10-23):** Paid only; $4.00 input / $20.00 output / $0.20 cached input per 1M tokens. Verified by Meta and independent pricing coverage.
- **Architecture:** Proprietary closed model; parameter count and license are undisclosed.

### Raw benchmarks found

> The Meta table compares maximum reasoning effort for the exact Muse Wonder API model against Muse Wonder Full and other frontier models. Muse Wonder Full figures are not used as evidence for this report. The independent Artificial Analysis result is also for Muse Wonder at max reasoning effort, not Full.

Agent / tool use:

- JobBench: **70.5** mean reward (Meta model page / model card, exact Muse Wonder)
- OSWorld V2.1: **72.6** partial-credit score; **34.3** binary score (Meta model page / model card, exact Muse Wonder)
- AutomationBench-AA: **39.1** (Meta model page / model card)
- Harvey LAB-AA: **10.0** all-pass score (Meta model page / model card)
- GDP.pdf: **30.8** all-pass score (Meta model page / model card)
- Terminal-Bench 4.0-AA: **52.0%** (Meta model page / model card; independently repeated in VentureBeat's launch coverage)
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this exact model ID.
- GDPval-AA: **no verified public score found** for this exact model ID.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- MemoryBench: **85.6** (Meta model page / model card, exact Muse Wonder)
- Personal Superintelligence Index: **54.3** (Meta model page / model card, Meta composite)
- Vals Finance Agent V2: **56.6** (Meta model page / model card)
- HealthBench Pro: **60.5** (Meta model page / model card)
- Artificial Analysis Intelligence Index v4.3.2: **52**, #10/215 on the live Artificial Analysis model page (independent evaluation, max reasoning)
- GPQA Diamond: **no verified public score found** for this exact model ID.
- HLE: **no verified public score found** for this exact model ID.
- LCR / MLCR: **no verified public score found** for this exact model ID.
- CritPt: **no verified public score found** for this exact model ID.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** for this exact model ID.

Coding:

- DeepSWE 1.1: **78.8%** (Meta model page / model card; also reported in VentureBeat's comparison of the exact standard Wonder model)
- SWE-Marathon: **53.1%** (Meta model page / model card, exact Muse Wonder)
- ProgramBench: **50.0** (Meta model page / model card, exact Muse Wonder)
- LiveCodeBench: **no verified public score found** for this exact model ID.
- SciCode / AA-SciCode: **no verified public score found** for this exact model ID.
- Vibe Code Bench: **no verified public score found** for this exact model ID.
- SWE-bench Verified / SWE-Pro: **no verified public score found** for this exact model ID.

Long context:

- 1,048,576-token advertised context window; no verified MRCR, RULER, GraphWalks, or other long-context retrieval score found for the exact API model.

### Normalized scores (1-100)

- **Tool use: 80/100.** JobBench 70.5 and OSWorld V2.1 partial credit 72.6 show useful agentic execution, while AutomationBench-AA 39.1, Harvey LAB-AA 10.0, and Terminal-Bench 52.0 cap this below the frontier range; no exact-model Tau3 or GDPval result was found.
- **Reasoning: 80/100.** The independent Artificial Analysis Intelligence Index score of 52 and Meta's MemoryBench 85.6 support strong reasoning and memory, but the lack of exact-model GPQA, HLE, LCR, or CritPt results prevents a frontier-top score.
- **Context window: 96/100.** The verified 1,048,576-token window is in the highest tier, but no exact-model retrieval study demonstrates near-perfect performance at the advertised limit; the 131,072-token output cap is also a practical constraint.
- **Multimodal: 93/100.** Independent Artificial Analysis coverage verifies text, image, speech, and video input with text output; the model has broad input coverage but no verified non-text output and conflicting secondary listings omit some inputs.
- **Coding: 84/100.** DeepSWE 1.1 at 78.8% is frontier-level, but SWE-Marathon 53.1%, Terminal-Bench 52.0%, and ProgramBench 50.0 show uneven performance across sustained and terminal coding tasks.
- **Cost efficiency: 58/100.** The $4/$20 paid price is competitive with premium frontier APIs and cached input is $0.20, but it is not free and output pricing is high; Artificial Analysis reports $4.54 per Intelligence Index task.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions `(80 + 80 + 96 + 93 + 84) / 5 = 86.6`, rounded to 87; best suited to long-context coding and agent workflows where its one-million-token window matters more than uniformly top benchmark scores.

### Source URLs and conflict notes

- Official Meta model page and exact-model benchmark table: https://dev.meta.ai/models/muse-wonder
- Official Meta launch post: https://research.meta.ai/blog/muse-wonder
- Official Meta model card: https://research.meta.ai/static/muse-wonder-model-card
- Independent Artificial Analysis evaluation: https://artificialanalysis.ai/models/muse-wonder
- Independent VentureBeat benchmark and pricing review: https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api
- Independent TechCrunch launch coverage: https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/
- Independent GenAIWiki model reference: https://genaiwiki.com/models/muse-wonder-1-0
- Independent Nano AI technical review: https://nanoai.run/muse-wonder
- ZenMux provider and pricing record: https://zenmux.ai/meta/muse-wonder-1.0
- Pi/OpenCode model configuration record: https://pi.dev/models/opencode/muse-wonder-1-0

The secondary GenAIWiki page reports OSWorld as 70.5, but the official model-specific table reports 72.6 partial credit and separately reports JobBench as 70.5; this appears to be a copied or mislabeled secondary value, so the official rows are retained. GenAIWiki and Pi also list fewer input modalities than Artificial Analysis; the report records the broader modality claim but does not treat PDF as verified.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-23
- Method: At least seven independent fresh public web searches, followed by direct review of official Meta documentation, the official model card, independent benchmark coverage, Artificial Analysis, and provider listings; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
