# Muse Wonder 1.0 — findings by MiniMax M3.1 Flash

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's proprietary frontier model for personal and professional agents, optimized for long-running work, coding, computer use, and tool-driven workflows. It is the API-paid member of the Muse Wonder family and is distinct from the subscription-only `muse-wonder-full-1.0` variant.
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, model `muse-wonder-1.0`; the documented agent surface is Responses API (`POST /v1/responses`), with Chat Completions (`POST /v1/chat/completions`) and Anthropic-compatible Messages (`POST /v1/messages`) also available ([Meta Model API overview](https://dev.meta.ai/docs/overview), [API reference](https://dev.meta.ai/docs/api-reference)). Also available in Meta Muse Code and through Cursor's Meta provider under the same model ID ([Cursor model docs](https://cursor.com/docs/models/muse-wonder)). No OpenCode Zen ID was verified in the sources reviewed.
- **Release / knowledge:** Released 2026-10-12 ([Meta research blog](https://research.meta.ai/blog/muse-wonder/), [official model card](https://research.meta.ai/static/muse-wonder-model-card/)); public knowledge cutoff not disclosed.
- **IDs:** `muse-wonder-1.0` (Meta Model API and Cursor) ([Meta model page](https://dev.meta.ai/models/muse-wonder), [Cursor model docs](https://cursor.com/docs/models/muse-wonder)). `muse-wonder-full-1.0` is a different, subscription-only variant and is not scored here.
- **Context window:** 1M tokens at inference in Meta's official model card and Model API; Cursor exposes 300K normally and 1M in Max Mode at the same token rates ([official model card](https://research.meta.ai/static/muse-wonder-model-card/), [Meta model page](https://dev.meta.ai/models/muse-wonder), [Cursor model docs](https://cursor.com/docs/models/muse-wonder)).
- **Modalities:** text, image, video, and audio input; text output. Reasoning is supported with configurable effort, including `max`; parallel and streamed tool calls, tool search, structured output, prompt caching, search grounding, and server-managed reasoning replay are documented ([official model card](https://research.meta.ai/static/muse-wonder-model-card/), [Meta Model API capabilities](https://dev.meta.ai/docs/overview)).
- **Pricing (as of 2026-10-23):** $4.00/M input, $0.20/M cached input, $20.00/M output on Meta Model API; no free API tier was verified. Cursor bills the same rates and applies no long-context multiplier or cache-write charge ([Meta model page](https://dev.meta.ai/models/muse-wonder), [Cursor model docs](https://cursor.com/docs/models/muse-wonder)).
- **Architecture:** proprietary; Meta has not disclosed parameter count, active parameters, or an open-weight license ([official model card](https://research.meta.ai/static/muse-wonder-model-card/)).

### Raw benchmarks found

Meta's published comparison table uses maximum reasoning effort and preserves the original third-party harness where available. Values below are the `Muse Wonder (max)` column, not the stronger `Muse Wonder Full (max)` column ([Meta model page](https://dev.meta.ai/models/muse-wonder), [official model card](https://research.meta.ai/static/muse-wonder-model-card/)).

Agent / tool use:

- Personal Superintelligence Index: **54.3** (internal seven-evaluation composite; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- Harvey LAB-AA: **10.0%** (Artificial Analysis legal-agent all-pass rate with hallucination checks; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- Vals Finance Agent V2: **56.6%** (Vals AI private-test accuracy; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- HealthBench Pro: **60.5** (length-normalized weighted rubric score; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- AutomationBench-AA: **39.1%** (strict pass@1 in Meta's table; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- GDP.pdf: **30.8** (Surge professional-document score; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- JobBench: **70.5** (mean reward over 65 professional tasks; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- OSWorld V2.1: **72.6 partial / 34.3 binary** (108 Ubuntu desktop workflows; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- MemoryBench: **85.6** (LLM-judged recall over 64K–100K-token multi-turn conversations; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- Terminal-Bench 4.0-AA: **52.0%** (Artificial Analysis harness; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no separately published Muse Wonder base-model Elo found; the Full variant's 1857 Elo must not be merged into this ID
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **52** (**#-not publicly specified**; max reasoning effort; [Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder))
- AA-Omniscience: **25** (higher is better; [Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder))
- Hallucination Rate: **27%** (lower is better; [Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder))
- GPQA Diamond: no verified public score found
- HLE: no separate public score found beyond its inclusion in the Artificial Analysis composite
- LCR / MLCR: no separately published public score found
- CritPt: no separately published public score found

Coding:

- DeepSWE 1.1: **78.8%** (113 tasks across 91 repositories and five languages; third-party Datacurve score used by Meta; [official model card](https://research.meta.ai/static/muse-wonder-model-card/), [Meta model page](https://dev.meta.ai/models/muse-wonder))
- SWE-Marathon: **53.1%** (ultra-long-horizon project pass@1; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- ProgramBench: **50.0%** (clean-room reconstruction using mini-swe-agent; [Meta model page](https://dev.meta.ai/models/muse-wonder))
- Artificial Analysis Coding Agents Index: **63** (max effort; [Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder))
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no separately published public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR, RULER, or GraphWalks retrieval result at 512K+ was found. MemoryBench's **85.6** is relevant to persistent conversational memory but only spans 64K–100K tokens, so it is not treated as proof of 1M-token retrieval quality ([official model card](https://research.meta.ai/static/muse-wonder-model-card/), [Meta model page](https://dev.meta.ai/models/muse-wonder)).

### Independent-source comparison and conflicts

- Artificial Analysis independently reproduces Meta's **52 Intelligence Index** and **52% Terminal-Bench 4.0** results, and reports **63** on its Coding Agents Index ([Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder)). This agreement supports the reasoning and coding scores despite the lack of a separately published GPQA or HLE result.
- AutomationBench conflicts: Meta's table reports **39.1%** strict pass@1, while Artificial Analysis's release analysis says Muse Wonder rose from 58% to **68%** on AutomationBench-AA ([Meta model page](https://dev.meta.ai/models/muse-wonder), [Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder)). The model card attributes AutomationBench to Artificial Analysis but does not reconcile versions or harnesses. The lower strict-pass figure is retained and the discrepancy caps tool use.
- Context access differs by host: Meta documents native **1M** inference, while Cursor exposes **300K** in its normal context and **1M** only in Max Mode ([official model card](https://research.meta.ai/static/muse-wonder-model-card/), [Cursor model docs](https://cursor.com/docs/models/muse-wonder)). The score therefore uses native capacity but does not assume flawless retrieval at the full limit.
- Knowledge reliability remains a weakness: Artificial Analysis reports **25** on AA-Omniscience and **27%** hallucination for the base model, versus 30 and 23% for Full ([Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder)). Strong agentic and coding results should not be read as frontier factual recall.
- Meta reports a $4.52 average cost per Artificial Analysis Intelligence Index task, higher than most similarly intelligent models; that measured price/usage combination, rather than token price alone, supports the cost score ([Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder)).

### Normalized scores (1–100)

- **Tool use: 76/100.** OSWorld partial 72.6, JobBench 70.5, MemoryBench 85.6, and Terminal-Bench 4.0 52.0 show strong real-world agent operation; Harvey LAB-AA 10.0, AutomationBench 39.1 in Meta's table, and the unresolved 39.1/68% Automation conflict cap the score.
- **Reasoning: 78/100.** Artificial Analysis Index 52 establishes strong-but-not-frontier general reasoning, while AA-Omniscience 25 and hallucination 27% expose a factual-recall weakness and no separate GPQA/HLE result was published.
- **Context window: 97/100.** Native 1M inference qualifies for the top context tier; the score is below 100 because Cursor normally exposes 300K and no 512K+ retrieval benchmark was found.
- **Multimodal: 95/100.** The model card confirms text, image, video, and audio input with text output; it loses points for lacking native non-text output from this model ID and for the model's documented visual/spatial-reasoning limitation.
- **Coding: 90/100.** DeepSWE 78.8 exceeds the project's frontier reference, SWE-Marathon 53.1 and Coding Agents Index 63 are strong, while Terminal-Bench 52.0 and ProgramBench 50.0 keep it below the very top coding tier.
- **Cost efficiency: 58/100.** Premium $4/M input and $20/M output pricing, plus $4.52 per Artificial Analysis Index task, make this materially less efficient than cheaper models with similar or lower intelligence.
- **Overall Score: 87.2/100.** Mean of Tool 76, Reasoning 78, Context 97, Multimodal 95, and Coding 90: a frontier-grade long-horizon coding and agent model whose expensive API and unresolved AutomationBench discrepancy keep it from the top overall tier.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/nvidia/minimaxai/minimax-m3.1-flash)** — 2026-10-23
- Method: Independent public-web research across Meta's research blog, model card, developer documentation and benchmark table; Artificial Analysis's independent evaluation; Cursor's integration documentation; and multiple web searches. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
