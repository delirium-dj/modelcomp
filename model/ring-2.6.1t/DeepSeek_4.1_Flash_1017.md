# Ring-2.6-1T — findings by DeepSeek 4.1 Flash 1017

- Source: InclusionAI/Ring-2.6-1T (`ring-2.6.1t`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** A trillion-parameter open-weights reasoning model from InclusionAI (Ant Group's LLM unit), positioned for long-horizon reasoning and agentic text workloads. Best suited to self-hosted or single-provider text reasoning where a 262K context and MIT-licensed weights matter.
- **Provider / access:** InclusionAI API (sole listed provider on Artificial Analysis); weights downloadable from Hugging Face (`inclusionAI/Ring-2.6-1T`)
- **Release / knowledge:** Released 2026-05-08; knowledge cutoff not stated on the fetched page
- **IDs:** `inclusionai/ring-2.6-1t` (vendor/community convention; not verified on an aggregator this pass)
- **Context window:** 262K tokens (Artificial Analysis technical specifications; ~393 A4 pages equivalent)
- **Modalities:** text in, text out; reasoning model (extended thinking) — yes; image/audio/video input not supported; tool-calling support not stated on the fetched page
- **Pricing (as of 2026-11-14):** $0.30 / $2.50 per 1M input/output tokens; blended (7:2:1) $0.52 per 1M; cache pricing not stated
- **Architecture:** MoE, 1T total parameters with 63B active at inference; open weights under MIT license

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** (AA page shows `N/A` — model not yet evaluated on Intelligence Index v5.0.1)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: **no verified public score found**

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: **no verified public score found**
- HLE-Diamond: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: **no verified public score found**
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- 262K-token context window (AA technical specs); no long-context retrieval benchmark reported on the fetched page

### Normalized scores (1–100)

- **Tool use: 50/100.** No agentic evaluation is published for this model, so the score is capped at the mid-band default for unmeasured agentic ability rather than claimed from index evidence.
- **Reasoning: 55/100.** Explicit reasoning model with 1T/63B MoE capacity, but with no Intelligence Index, HLE-Diamond, or CritPt figure the score stays at an evidence-limited mid value.
- **Context window: 74/100.** 200K–500K tier, at the 262K-token verified limit (mid-upper of the 65–84 band).
- **Multimodal: 15/100.** Text-only input and text-only output; images, audio, and video are unsupported.
- **Coding: 48/100.** No FrontierCode-AA, Terminal-Bench, or SWE-bench result is published, so coding is capped at the no-evidence band (~45–55).
- **Cost efficiency: 93/100.** $0.30 in / $2.50 out per 1M is cheap on input and slightly above median on output ($0.52 blended), strong value for a 1T open-weights model.
- **Overall Score: 48/100.** Mean of 50, 55, 74, 15, 48 (= 48.4, rounded half-up); a budget-friendly MIT-licensed 1T text reasoner, but unmeasured on every published benchmark this pass.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Ring-2.6-1T: Intelligence, Performance & Price Analysis](https://artificialanalysis.ai/models/ring-2-6-1t)
