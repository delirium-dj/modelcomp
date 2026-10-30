# Muse Wonder Full — findings by GPT 6 Sol

- Source: Meta Superintelligence Labs / `muse-wonder-full-1.0` (Muse Code only)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's higher-capability Muse Wonder variant for long-running software engineering, personal agents, and professional knowledge work. Meta explicitly distinguishes it from regular Wonder: increasing regular Wonder's reasoning effort does not select Full ([model availability](https://dev.meta.ai/docs/models)).
- **Provider / access:** Muse Code Power Usage or Maximum Usage subscription only; **not on the Meta Model API** ([Meta models documentation](https://dev.meta.ai/docs/models)). Muse Code is an agent product, not a public Chat Completions or Responses API route for Full.
- **Release / knowledge:** 2026-10-12 release, per [Meta's model card](https://research.meta.ai/static/muse-wonder-model-card); knowledge cutoff not disclosed.
- **IDs:** Meta's [product page](https://dev.meta.ai/models/muse-wonder) labels the subscription variant `muse-wonder-full-1.0`; no public pay-as-you-go or verified Zen Free ID. Do not substitute API `muse-wonder-1.0`, which is the smaller, different variant.
- **Context window:** 1,048,576 tokens per [Meta documentation](https://dev.meta.ai/docs/models) and [model card](https://research.meta.ai/static/muse-wonder-model-card); [Vals AI](https://www.vals.ai/models/meta_muse-wonder-full) lists 131k max output, but the accessible Meta docs do not independently specify Full's output cap. No independently verified retrieval result at 512K+ found.
- **Modalities:** Text, image, video and audio in; text out per [Meta's model card](https://research.meta.ai/static/muse-wonder-model-card). Meta's [API docs](https://dev.meta.ai/docs/models) additionally list PDF input and tool/structured workflows for the series, although Full itself is Muse Code-only. Reasoning effort is configurable in the agent; no native audio/video generation claimed.
- **Pricing (as of 2026-10-30):** Full requires Muse Code Power **$50/month** or Maximum **$200/month** ([Meta product page](https://dev.meta.ai/models/muse-wonder)); no published Full per-token rate, so regular Wonder's **$4/$20 per million tokens** must **not** be assigned to Full. Muse Code subscriptions default to Contributor mode (content may train future Meta models); Standard mode can be selected instead ([Meta access docs](https://dev.meta.ai/docs/models)).
- **Architecture:** Proprietary, larger/different capability variant; no published parameter count or weights ([Meta model card](https://research.meta.ai/static/muse-wonder-model-card)).

### Raw benchmarks found

Agent / tool use:

- Meta's [model-card scorecard](https://research.meta.ai/static/muse-wonder-model-card) reports Personal Superintelligence Index **59.1** (internal seven-evaluation composite), AutomationBench-AA **45.4%**, JobBench **75.3%** and FocusBench **54.2%** as transcribed in [Coursiv's table](https://coursiv.io/blog/muse-wonder). PSI/FocusBench are not independent public leaderboards.
- OSWorld V2.1: **78.4 mean partial reward / 39.4% binary completion**, Meta's common internal harness ([model card](https://research.meta.ai/static/muse-wonder-model-card)); compare like with like: its cited Opus 5.5 **81.8 partial**, not a binary score. The different scales must not be collapsed.
- Independent [Vals AI Finance Agent v2.1](https://www.vals.ai/models/meta_muse-wonder-full): **67.58% ±1.98**, #3/35; [Vals EMB v1.1](https://www.vals.ai/models/meta_muse-wonder-full): **75.00% ±2.14**, #5/37. Meta's cited **59.1%** is Finance Agent **V2**, not the later v2.1 measure.
- [Vals Terminal-Bench 4.0](https://www.vals.ai/models/meta_muse-wonder-full): **58.08% ±3.31**, #7/59; Meta cites Artificial Analysis Terminal-Bench 4.0-AA **57.1%** in its [scorecard](https://dev.meta.ai/models/muse-wonder). Different independent operators, close results, not identical harnesses.
- Claw-Eval / ClawProBench and τ-bench for this exact Full variant: no verified public score found.

Reasoning / knowledge:

- [Meta scorecard](https://dev.meta.ai/models/muse-wonder): Artificial Analysis Intelligence Index **56** for the cited **v4.3** snapshot, against Opus 5.5 **58**; independent [Artificial Analysis model page](https://artificialanalysis.ai/models/muse-wonder-full) currently displays **50 on v5.0**. This is an **index version change**, not a six-point disagreement about one fixed evaluation; neither number is our normalized score.
- Independent [Vals ProofBench v1.1](https://www.vals.ai/models/meta_muse-wonder-full): **94.00% ±2.39**, #9/52. [Vals Legal Index](https://www.vals.ai/models/meta_muse-wonder-full) **77.86% ±1.82**, #1/33; its HLAB-Vals-1.1 **23.33% ±3.55**, #4/33 is **not** interchangeable with Meta's cited Artificial Analysis Harvey LAB-AA v1.1 **13.1%** ([model card](https://research.meta.ai/static/muse-wonder-model-card)).
- GPQA Diamond / HLE for Full under a directly attributable fixed harness: no verified public score found in the primary sources reviewed.

Coding:

- [Meta model-card scorecard](https://research.meta.ai/static/muse-wonder-model-card): DeepSWE v1.1 **79.0%** (attributed to Datacurve third-party results) and SWE-Marathon **57.5%** at **xhigh** effort (attributed to Abundant AI). The card explicitly says SWE-Marathon competitors used different products/harnesses, so its apparent lead is not a controlled cross-model experiment; the available public [DeepSWE leaderboard](https://deepswe.datacurve.ai/) had not yet provided an independently visible Full row in the inspected snapshot. Treat 79.0% as **Meta-reported, third-party-attributed**, not independently reproduced here.
- [Meta scorecard](https://dev.meta.ai/models/muse-wonder): ProgramBench **59.0%** (rollouts passing at least 95% of hidden tests using mini-swe-agent); [Vals AI ProgramBench](https://www.vals.ai/models/meta_muse-wonder-full) is **0.50% ±0.50**, #27/64. This unusually large disagreement demands task-set/harness/threshold reconciliation before treating either as a transferable coding rate; neither is silently averaged.
- Independent [Vals Vibe Code Bench v1.1](https://www.vals.ai/models/meta_muse-wonder-full): **86.00% ±1.93**, #14/123; [Vals Code Migration v1.1](https://www.vals.ai/models/meta_muse-wonder-full): **62.79% ±3.17**, #8/29.
- [Kingy's independent Muse Code trial](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison): Full passed **4/4** Flask maintenance jobs, as did Claude Code and Codex, but took **26:39** cumulative vs **8:53** for Claude Code. Four completed product-level jobs, one run each, do not isolate the model or prove a general speed ranking; earlier matched tiny utilities had **no quality benefit over regular Wonder**.

Long context and multimodal:

- Meta's internal MemoryBench: **85.5** for Full vs **85.6** for Wonder over **64K–100K**-token multi-turn conversations ([model-card methods](https://research.meta.ai/static/muse-wonder-model-card), [published table](https://dev.meta.ai/models/muse-wonder)); it does not establish retrieval fidelity over the whole 1M window or native persistent-memory gains.
- Independent multimodal-specific score for Full under a named same-version public test: no verified public score found; Meta's [model card](https://research.meta.ai/static/muse-wonder-model-card) explicitly notes visual/spatial, especially 3D, as a limitation.

### Normalized scores (1–100)

- **Tool use: 90/100.** Meta's OSWorld V2.1 partial 78.4 and independent Vals finance 67.58%, EMB 75.00% support broad agents; OSWorld's binary 39.4% and Vals TB4 58.08% limit the claim.
- **Reasoning: 88/100.** Strong independent Vals ProofBench 94% and Legal Index 77.86% contrast with the strict legal pass rate and no attributable GPQA/HLE result; the AA index snapshots use different versions.
- **Context window: 95/100.** Meta verifies 1M inference capacity, but its MemoryBench only spans 64K–100K and cannot justify the 100-point retrieval tier.
- **Multimodal: 90/100.** Meta verifies text, image, video and audio input and text output; missing independent full-variant visual scores and known 3D weakness prevent a higher score.
- **Coding: 90/100.** DeepSWE 79.0% is third-party-attributed by Meta, while independent Vals Vibe 86% and Code Migration 62.79% are persuasive; the ProgramBench disagreement and small external trial cap confidence.
- **Cost efficiency: 45/100.** Paid $50/month minimum for access to Full, no free or per-token API price and finite subscription allowances; the $4/$20 API rate belongs to regular Wonder and is not counted here.
- **Overall Score: 91/100.** Half-up mean of (90 + 88 + 95 + 90 + 90) / 5 = 90.6; evaluate for prolonged coding/agent work only if Muse Code's subscription and data terms fit.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-30 UTC
- Method: Three independent web searches (official identity/access, scorecard/methodology, outside evaluations), direct reading of Meta's model-card PDF and API docs, independent Vals/Artificial Analysis and a small reproducible coding review. Separated Full from regular Wonder and reconciled changing benchmark versions and incompatible harnesses; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Meta Muse Wonder family model card (PDF; evaluation definitions and scorecard)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Meta model availability, variants and data terms](https://dev.meta.ai/docs/models)
  - [Meta Muse Wonder product page, benchmark table and subscription prices](https://dev.meta.ai/models/muse-wonder)
  - [Vals AI independent Wonder Full evaluations](https://www.vals.ai/models/meta_muse-wonder-full)
  - [Artificial Analysis Wonder Full index and version](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Kingy independent matched Muse Code coding jobs and limitations](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison)
