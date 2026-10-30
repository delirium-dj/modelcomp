# Muse Wonder 1.0 — findings by GPT 6 Sol

- Source: Meta Superintelligence Labs / `muse-wonder-1.0`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's API-accessible Muse Wonder model for agentic programming, tool-driven knowledge work, and multimodal document understanding. **Wonder Full is a separate, subscription-only higher-capability variant**, not a max-effort setting of this ID ([Meta docs](https://dev.meta.ai/docs/models)).
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, supporting Responses, Chat Completions and Messages, plus Muse Code on pay-as-you-go/every plan ([Meta models documentation](https://dev.meta.ai/docs/models)); OpenRouter routes the same public offering as `meta/muse-wonder` ([OpenRouter model route](https://openrouter.ai/meta/muse-wonder)). These are provider IDs for Wonder, not distinct evidence of a second checkpoint.
- **Release / knowledge:** Released 2026-10-12 ([Meta model card](https://research.meta.ai/static/muse-wonder-model-card)); knowledge cutoff not published.
- **IDs:** Meta `muse-wonder-1.0`; OpenRouter `meta/muse-wonder`. No verified separate Zen Free ID; the bare `muse-wonder` route is the same model identity, **not** another Wonder release.
- **Context window:** 1,048,576 total tokens ([Meta docs](https://dev.meta.ai/docs/models)); [Vals AI model profile](https://www.vals.ai/models/meta_muse-wonder) lists 131k maximum output, but a Meta first-party output cap was not confirmed in the reviewed docs. No >512K retrieval result verified.
- **Modalities:** Text, image, video, audio and PDF in; text out, reasoning effort `minimal` through `max`, tool calls, structured output and search grounding ([Meta docs](https://dev.meta.ai/docs/models), [model card](https://research.meta.ai/static/muse-wonder-model-card)). No native audio/image/video output claimed.
- **Pricing (as of 2026-10-30):** Standard pay-as-you-go **$4 input / $20 output / $0.20 cached input per million tokens**, no long-context surcharge ([Meta pricing](https://dev.meta.ai/docs/pricing-rate-limits)). API Standard mode does not use submitted content for model training; there is no Wonder Contributor API discount. Muse Code subscriptions default to Contributor mode, which permits training use of content unless disabled ([Meta access docs](https://dev.meta.ai/docs/models)).
- **Architecture:** Proprietary; parameter count and weights undisclosed ([Meta model card](https://research.meta.ai/static/muse-wonder-model-card)).

### Raw benchmarks found

Agent / tool use:

- [Artificial Analysis's launch-day v4.3 evaluation](https://artificialanalysis.ai/articles/muse-wonder): AutomationBench-AA **68%** and Terminal-Bench 4.0-AA **52%** at max effort. The [Meta model-card scorecard](https://research.meta.ai/static/muse-wonder-model-card) instead shows AutomationBench-AA **39.1%** and Terminal-Bench 4.0-AA **52.0%**: **68% vs 39.1% is an unresolved metric/configuration disagreement**, not two identical measurements to average. We rely on the operator's version-specific disclosure, and discount tool confidence.
- Independent [Vals AI Terminal-Bench 4.0](https://www.vals.ai/models/meta_muse-wonder): **49.49% ±2.20**, #12/59; [Vals EMB v1.1](https://www.vals.ai/models/meta_muse-wonder): **72.50% ±2.41**, #10/37; [Vals Finance Agent v2.1](https://www.vals.ai/models/meta_muse-wonder): **65.55% ±2.03**, #7/35. Meta's Finance Agent **56.6** comes from the earlier V2 scorecard, not Vals v2.1.
- [Vals CyberBench v1.1](https://www.vals.ai/models/meta_muse-wonder): **80.36% ±5.13**, #1/47; [Meta OSWorld V2.1](https://dev.meta.ai/models/muse-wonder): **72.6 partial reward / 34.3% binary completion** in Meta's common framework, below the scorecard's Opus 5.5 **81.8 partial**. Partial and binary scores measure different outcomes.
- Claw-Eval / ClawProBench / τ-bench: no verified public score found for this exact Meta ID.

Reasoning / knowledge:

- [Artificial Analysis's dated launch evaluation](https://artificialanalysis.ai/articles/muse-wonder): Intelligence Index **52 (v4.3)**, Omniscience Index **25**, hallucination rate **27%** (same max-effort evaluation); it says knowledge is weaker than Opus 5.5 (**46 Omniscience**) and Astra (**43**). [Current model page](https://artificialanalysis.ai/models/muse-wonder) displays **43 on v5.0**, a redesigned index: **do not treat 43 versus 52 as a same-test regression**.
- [Meta scorecard](https://dev.meta.ai/models/muse-wonder): internal Personal Superintelligence Index **54.3** versus Full **59.1**, HealthBench Pro **60.5%** versus Opus 5.5 **65.6%**, Harvey LAB-AA v1.1 **10.0%**. Independent [Vals ProofBench v1.1](https://www.vals.ai/models/meta_muse-wonder) **84.00% ±3.69**, #13/52, and [Vals Legal Index](https://www.vals.ai/models/meta_muse-wonder) **75.26% ±1.83**, #4/33. These are different tests, not proof that a legal deliverable will pass strict criteria.
- GPQA Diamond and HLE on a named, attributable Wonder 1.0 harness: no verified public score found in the sources reviewed.

Coding:

- [Meta model card](https://research.meta.ai/static/muse-wonder-model-card): DeepSWE 1.1 **78.8%** (Meta attributes to Datacurve), SWE-Marathon **53.1%** (Abundant AI results, cross-product harness caveats), and ProgramBench **50.0%** (mini-swe-agent, rollouts passing ≥95% of hidden tests); **these are Wonder values, not Full's 79.0/57.5/59.0**.
- Independent [Vals AI Vibe Code Bench v1.1](https://www.vals.ai/models/meta_muse-wonder): **83.09% ±2.49**, #22/123; Code Migration v1.1 **72.36% ±3.19**, #5/29; Terminal-Bench 4.0 **49.49% ±2.20**. The strong migration result and weaker terminal result argue against a universal coding rank.
- [Kingy's independent API test](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison): regular `muse-wonder-1.0` passed **85/96** first-answer, executable whole-program submissions from six reused synthetic task families under medium effort; GPT-6.1 Sol **94/96**, Gemini 4 Argon **86/96**. Samples are correlated and one-shot (no repair loop); the test did **not** evaluate Full or million-token contexts.

Long context and multimodal:

- Meta's internal [MemoryBench](https://research.meta.ai/static/muse-wonder-model-card) gives Wonder **85.6** across 64K–100K multi-turn conversations, Full **85.5**, not evidence of 1M-token retrieval or superiority of either memory system. [Kingy's recall checks](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison) yielded **1,152/1,152** known facts and **384/384** appropriately unknowns for Wonder, GPT and Argon; the external test reached a ceiling and cannot establish a native Active Memory advantage.
- [Vals SWE-bench Multimodal](https://www.vals.ai/models/meta_muse-wonder) **45.63% ±2.28**, #7/20, while Meta's [model card](https://research.meta.ai/static/muse-wonder-model-card) warns visual/spatial and especially 3D reasoning remain weak.

### Normalized scores (1–100)

- **Tool use: 87/100.** Vals CyberBench 80.36%, finance 65.55% and EMB 72.50% support agents; Vals TB4 49.49% and the AA/Meta AutomationBench discrepancy cap confidence.
- **Reasoning: 86/100.** AA v4.3 index 52 and Vals ProofBench 84% are strong, but Omniscience 25 and a strict legal 10% limit reliability claims; no comparable GPQA/HLE result.
- **Context window: 95/100.** Meta verifies 1M tokens; MemoryBench reaches only 64K–100K, so no 100-point long-retrieval bonus.
- **Multimodal: 90/100.** Text, image, video, audio and PDF input offer broad coverage, but only text output and the 3D limitation cap the score.
- **Coding: 88/100.** Vals Vibe 83.09% / Code Migration 72.36%, Kingy's 85/96 narrow API submissions and the vendor-attributed DeepSWE 78.8% are promising; TB4 49.49% counsels caution.
- **Cost efficiency: 55/100.** Paid $4/$20 per million tokens (no API free/Contributor lane); Artificial Analysis measured **$4.52 per task** on its v4.3 suite against $0.72 for GPT-6.1 Sol, despite cheaper cached input.
- **Overall Score: 89/100.** Half-up mean of (87 + 86 + 95 + 90 + 88) / 5 = 89.2; use the verified API ID for multimodal agents, not Full-only benchmark claims or the bare-route duplicate.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-30 UTC
- Method: Three independent web searches focused on canonical model ID/alias, API access and benchmark evidence; cross-checked Meta's PDF/docs with Artificial Analysis's dated independent evaluation, Vals AI and a published executable-code test. Preserved variant, index version, harness and conflicting AutomationBench results; normalized scores are interpretations, not official scores.
- Reference URLs:
  - [Meta Wonder family model card (PDF)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Meta model variants and API availability](https://dev.meta.ai/docs/models)
  - [Meta Wonder API price and rate limits](https://dev.meta.ai/docs/pricing-rate-limits)
  - [OpenRouter's bare-name provider route](https://openrouter.ai/meta/muse-wonder)
  - [Artificial Analysis launch-day v4.3 evaluation and task costs](https://artificialanalysis.ai/articles/muse-wonder)
  - [Vals AI independent Wonder benchmarks](https://www.vals.ai/models/meta_muse-wonder)
  - [Kingy's Wonder 1.0 executable-code comparison and methodology](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison)
