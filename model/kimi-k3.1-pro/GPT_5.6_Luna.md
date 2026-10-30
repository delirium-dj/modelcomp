# Kimi K3.1 Pro — findings by GPT 5.6 Luna

- Source: Moonshot AI / Kimi K3.1 Pro
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's post-trained K3.1 flagship for long-horizon coding, 3D creation, financial research, and agentic work. It is the base Pro model; K3.1 Pro Highspeed is a faster serving profile of the same capability and is not scored as a separate checkpoint here.
- **Provider / access:** Kimi API at `https://api.moonshot.ai/v1/chat/completions` with the exact model ID `kimi-k3.1-pro`; also available in Kimi, Kimi Work, Kimi Code, and compatible third-party gateways. The API uses OpenAI-compatible Chat Completions and supports tools, structured output, and configurable reasoning effort.
- **Release / knowledge:** 2026-10-23 release; knowledge cutoff not disclosed. Moonshot said the full weights would be released by 2026-11-04, so the model was still primarily API/product access on the research date.
- **IDs:** `kimi-k3.1-pro` (Moonshot API); `moonshotai/kimi-k3.1-pro` (OpenRouter route). `kimi-k3.1-pro-highspeed` is a serving-speed variant, not a second model for this report.
- **Context window:** 1,048,576 total tokens; the official quickstart says default maximum completion is 131,072 and the API can be configured up to 1,048,576 within the total limit.
- **Modalities:** Text, image, and video input documented in the official quickstart; text output; thinking always enabled with `low`/`high`/`max` effort; function tools, official tools, JSON Schema structured output, and partial completion are supported.
- **Pricing (as of 2026-10-30):** $2 per 1M input tokens and $10 per 1M output tokens on the Moonshot API; the Highspeed serving profile is $4/$20. Kimi automatically bills context-cache writes and hits under separate 5-minute/1-hour tiers. Independent MindStudio reporting confirms the $2/$10 list price and warns that context rereading can make agent workloads materially more expensive.
- **Architecture:** Post-trained K3, described by Moonshot as a 3T-class model; Artificial Analysis lists approximately 2.8T parameters. The active-parameter count and final open-weight license were not verified from the K3.1 release page.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Moonshot's official technical blog, Claude-Code harness; GPT-6 Astra 58.2%, Claude Opus 5.5 66.4% in the same comparison).
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (Moonshot internal benchmark measuring multi-step execution, tool use, and end-to-end engineering; K3 was 55.95%).
- xdev-Bench-hard: **81.0% pass@3** (Moonshot's official cyber-capability evaluation after data filtering; not a general coding score).
- Artificial Analysis Intelligence Index v5.0: **46** (independent current measurement; the page places K3.1 Pro at #21/57 and reports $3.68 per Index task).

Reasoning / knowledge:

- OfficeQA Pro v2: **64.4** and Frontier Finance: **58.6** (Moonshot's official benchmark report).
- Kimi Hallu Bench claim-level hallucination rate: **8.3% with tools** and **5.4% without tools** in the reported hard evaluation (Moonshot; the test is a stress test, not a general population error rate).
- Artificial Analysis Intelligence Index v5.0: **46** (Artificial Analysis; current independent composite).
- MindStudio reports Moonshot's comparison table at **70% on Humanity's Last Exam**, but labels the vendor table and notes that the independent composite/coding results are less favorable; this is retained as vendor-reported context rather than a sole score anchor.

Coding:

- BenchCAD, 1,000-file subset: **92.7% with tools** and **72.8% without tools** (Moonshot's official report; visual/CAD code-generation evaluation).
- Terminal-Bench 4.0: **65.7%** and Kimi Code Bench 3.0 Long-horizon: **61.2%** (Moonshot official report).
- xdev-Bench-hard: **81.0% pass@3** (Moonshot official report; cyber-focused source-code exploitation tasks).
- KingBench: **53.7%** (MindStudio's independent coding comparison, placing K3.1 Pro behind several frontier models). This conflicts with Moonshot's more favorable Terminal-Bench and internal results because the harness and task mix differ.

Long context:

- Declared context: **1,048,576 tokens** (Kimi official pricing/quickstart documentation and Artificial Analysis).
- No independently reported MRCR/RULER retrieval curve for this exact K3.1 Pro API ID was found.

Multimodal:

- Kimi's official quickstart documents image and video uploads, and Artificial Analysis independently confirms image input; both specify text output. No audio input/output or non-text output was verified.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 4.0 at 65.7%, the official 61.2% long-horizon tool benchmark, and explicit tool/official-tool APIs support a high score; the independent AA Index 46 and harness variance keep it below the top band.
- **Reasoning: 86/100.** OfficeQA Pro 64.4, Frontier Finance 58.6, very low reported hallucination rates, and vendor HLE evidence are strong; the current independent Index 46 and lack of an independently reproduced GPQA/HLE table cap the score.
- **Context window: 98/100.** The 1M-token API limit is documented by Kimi and independently listed by Artificial Analysis, but no exact-model retrieval curve at that limit was found.
- **Multimodal: 88/100.** Image input is independently confirmed and Kimi documents video input, with text output; no audio or generated-media output was verified.
- **Coding: 88/100.** BenchCAD 92.7% with tools, Terminal-Bench 65.7%, and xdev-Bench-hard 81.0% show strong coding and debugging capability, while the independent KingBench 53.7% result prevents a frontier-max score.
- **Cost efficiency: 82/100.** $2/$10 list pricing is materially below premium frontier APIs, but MindStudio's six-task observation of roughly $32 from heavy context rereading shows that effective agent cost can be much higher than the headline rate.
- **Overall Score: 89/100.** Half-up mean of the five quality dimensions `(87 + 86 + 98 + 88 + 88) / 5 = 89.4 → 89`; a strong long-horizon coding and multimodal agent, especially when its native tool protocol is used.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-30
- Method: Three independent search tracks (Moonshot's official technical/API documentation, Artificial Analysis measurements, and independent MindStudio/third-party access reporting), with conflicting benchmark/harness results recorded rather than averaged as if identical; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
