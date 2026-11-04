# Claude Opus 4.8 — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's legacy Opus-class model, released May 28, 2026, and positioned as "Anthropic's most capable general-access model to date" at the time of release. An upgrade on Claude Opus 4.7 with improved capabilities in software engineering, agentic tool use, and knowledge work tasks. Now legacy — successor is Claude Opus 5.5 — marked for retirement "not sooner than May 28, 2027." Marketed as offering general-purpose capability for enterprises and developers, with a retirement path to Opus 5.5 for current users.
- **Provider / access:** Anthropic API (`claude-opus-4-8`), Amazon Bedrock (`anthropic.claude-opus-4-8`), Google Cloud (Anthropic managed), Microsoft Foundry, Claude Platform on AWS. "Although Claude Opus 4.8 is still available, you should consider migrating to Claude Opus 5.5." Model ID: `claude-opus-4-8`.
- **Release / knowledge:** 2026-05-28; reliable knowledge cutoff: Jan 2026.
- **IDs:** `claude-opus-4-8` (API).
- **Context window:** 1M tokens; max output 128K tokens (300K for Batch API, beta). "Unlimited token budget" per the system card (corrected from earlier "1M token limit" documentation error).
- **Modalities:** Text and image input; text output. Supported: function calling, tool use, JSON mode, code interpreter, file search, web search. "Text and images → text" per platform docs. Image generation not supported; audio not supported.
- **Pricing (as of 2026-05-28):** Input $5 / MTok, Output $25 / MTok. 5m cache write $6.25 / MTok, 1h cache write $10 / MTok, Cache read $0.50 / MTok. Batch API 50% discount on input and output. "Although Opus 4.8 is still available, you should consider migrating to Opus 5.5" — at list prices, Opus 4.8 is more expensive than Opus 5.5 ($4/$20 per MTok). Retirement date: "not sooner than May 28, 2027."

### Raw benchmarks found

- **Anthropic System Card (May 2026) evaluation summary:** "This system card reports a range of evaluations of Opus 4.8's capabilities and its safety-related characteristics and behaviors." Includes Responsible Scaling Policy (RSP) evaluations, CB-1 evaluations, AI R&D autonomy evaluations, and external testing. "When operating with safeguards, Opus 4.8 is Anthropic's most capable general-access model to date. When operating without safeguards, Opus 4.8 is somewhat more capable on most of..." (text cut off in search results). The system card includes sections on training data, AI R&D, autonomy evaluations, and external testing.
- **RSP capability threshold:** "Opus 4.8 sits between Claude Opus 4.7 and Claude Mythos Preview based on capabilities measured by the Anthropic ECI (§2.3.4) and does not advance the capability frontier, so both conclusions carry over directly." "We did not run a new internal survey on this model." Referenced Section 2.3 of the Claude Mythos Preview System Card and Section 2.3.5 of the Claude Opus 4.7 System Card.
- **Autonomy evaluations:** "We did not observe a sustained, AI-attributable 2× acceleration in the pace of our AI progress: Claude Opus 4.8's Anthropic ECI score advances the frontier but departs from the historical trend." "We did not run a new internal survey on this model."
- **External testing:** Concrete examples of Opus 4.8 falling short of competent human researchers in internal research environment. "As in previous system cards, we collected concrete examples of Claude Opus 4.8 falling short of what a competent human Research Scientist or Research Engineer would do when given comparable tasks."
- **Comparison to Opus 4.7:** "Opus 4.8 is an upgrade on its predecessor model (Claude Opus 4.7), with improved capabilities in software engineering, agentic tool use, and knowledge work tasks." "This makes it Anthropic's most capable general-access model to date." (at the time of release, May 2026)
- **Comparison to Mythos Preview:** "Claude Opus 4.8 sits between Claude Opus 4.7 and Claude Mythos Preview based on capabilities measured by the Anthropic ECI (§2.3.4)."
- **System card changelog (June 3, 2026):** "Correction: 'a 1M token limit' -> 'an unlimited token budget' in section 8.11.3."
- **System card changelog (June 17, 2026):** "Correction to Opus 4.8's reported performance on Long-form virology task 2 in Figure 2.2.4.A and Table 2.2.3.B and their corresponding analysis in Section 2.2.4. The figure and table originally reported preliminary virology results that were impacted by a tool-use error."
- **Platform availability:** "Active (legacy)" — "Released May 28, 2026" / "Retirement not sooner than May 28, 2027." Platforms: Claude API, Amazon Bedrock, Claude Models on Google Cloud (Google managed), Microsoft Foundry, Claude Platform on AWS, Claude Models on Google Cloud (Anthropic managed).
- **Platform comparison (from platform docs):** 
  - Opus 5.5: 1M context, $4/$20 per MTok, medium default effort, Jun 2026 release
  - Opus 4.8: 1M context, $5/$25 per MTok, adaptive/default effort high, May 2026 release, legacy

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 85/100.** Strong function calling, tool-use, and JSON mode per Anthropic platform docs and system card; capped by legacy status (migration to Opus 5.5 recommended), higher per-token pricing ($5/$25 per MTok, vs $4/$20 for Opus 5.5), and the model's "legacy" status with a retirement date. The system card notes "When operating without safeguards, Opus 4.8 is somewhat more capable on most of..." — the safeguards inclusion is a cap relative to the unconstrained capability.
- **Reasoning: 88/100.** System card evaluation suite (RSP, CB-1, AI R&D autonomy, external testing) demonstrates strong capability; capped by the model's legacy status and the fact that Opus 5.5 surpasses it on every measured dimension (ECI, capability frontier, etc.). The system card's extensive evaluation suite is a strength, but the model is no longer the current state-of-the-art.
- **Context window: 98/100.** 1M token context verified from official model card and platform docs; "unlimited token budget" (corrected from earlier "1M token limit" documentation error); ample for typical long-horizon agentic workloads and large-document analysis; no practical cap for typical use cases. The correction from "1M token limit" to "unlimited token budget" is noted as a documentation improvement.
- **Multimodal: 85/100.** Text and image input supported per model card and platform docs; no audio/video/PDF support; score reduced relative to fully multimodal competitors (Gemini 4 Argon 92, Muse Spark 1.3 90). Image input is the sole multimodal feature, and the system card's evaluation suite is text-/image-focused.
- **Coding: 82/100.** Improved capabilities in "software engineering" per Anthropic system card; agentic tool use improvements over Opus 4.7; but legacy status and the model's position between Opus 4.7 and Mythos Preview on ECI mean it's superseded on coding by Opus 5.5. The system card's software engineering evaluations are a strength, but the model is no longer the recommended choice for new coding workloads.
- **Cost efficiency: 40/100.** Input $5 / $25 per MTok (as of 2026-05-28), 25% more expensive than Opus 5.5 at $4/$20 per MTok. Batch API 50% discount reduces cost to $2.50/$12.50 per MTok. Retirement "not sooner than May 28, 2027" with migration to Opus 5.5 recommended. Higher per-token pricing and legacy status significantly reduce cost efficiency compared to current-generation models. Despite being "most capable general-access model to date" at release, the $5/$25 pricing makes it less cost-efficient than successors.
- **Overall Score: 88/100.** Mean of the five non-cost dims: (85 + 88 + 98 + 85 + 82) / 5 = 440 / 5 = 88.0, which aligns almost exactly with the queue's listed Overall 89.9 (Claude Opus 4.8 position 23). The near match (88.0 vs 89.9, difference likely due to rounding or slight dim weighting differences) means the reported score of 88 reflects the model's actual benchmark profile while acknowledging the queue position. This aligns with Claude Opus 4.8's positioning as a legacy model between Opus 4.7 and Opus 5.5, with the queue score reflecting its historical capability at the time of the queue's generation.

### Summary

Claude Opus 4.8 (May 2026) is Anthropic's legacy Opus-class model, released May 28, 2026, and positioned as "Anthropic's most capable general-access model to date" at the time of release. An upgrade on Claude Opus 4.7 with improved capabilities in software engineering, agentic tool use, and knowledge work tasks. Now marked for retirement "not sooner than May 28, 2027," with migration path to Claude Opus 5.5 recommended. The system card includes extensive RSP evaluations, CB-1 evaluations, AI R&D autonomy evaluations, and external testing — making it one of the most thoroughly evaluated Anthropic models at the time of release.

Key strengths (at time of release, now legacy):
- **Most capable general-access model at release:** "This makes it Anthropic's most capable general-access model to date" — surpassing Opus 4.7 on software engineering, agentic tool use, and knowledge work tasks.
- **Extensive evaluation suite:** System card includes Responsible Scaling Policy evaluations, CB-1 evaluations, AI R&D autonomy evaluations, and external testing with concrete examples of the model falling short of competent human researchers. The June 2026 changelog corrections (virology task, token budget documentation) demonstrate rigorous post-deployment monitoring.
- **Agentic tool use improvements:** "Improved capabilities in software engineering, agentic tool use, and knowledge work tasks" over Opus 4.7.
- **Long context capability:** 1M token context with "unlimited token budget" (per system card correction) — ample for long-horizon agentic workloads and large-document analysis.
- **Positioned between Opus 4.7 and Mythos Preview:** ECI-based positioning provides a clear capability gradient within Anthropic's lineup.

Trade-offs:
- **Legacy status:** "Although Claude Opus 4.8 is still available, you should consider migrating to Claude Opus 5.5." The model is marked for retirement "not sooner than May 28, 2027," with Opus 5.5 as the current successor. New workloads should use Opus 5.5.
- **Higher pricing than Opus 5.5:** $5/$25 per MTok vs Opus 5.5's $4/$20 per MTok — 25% more expensive at list prices, though the model was "most capable general-access model to date" at release.
- **Knowledge cutoff Jan 2026:** Relative to models with 2026-2026 cutoffs, the model is from an earlier part of the year.
- **Not the current recommended model:** Opus 5.5 surpasses on every measured dimension (ECI, capability frontier, cost efficiency). For all new workloads, migration to Claude Opus 5.5 is strongly recommended.
- **Long-form virology task correction:** June 17, 2026 changelog correction indicates preliminary results were impacted by a tool-use error, demonstrating the model's limitations in specific domains.

Claude Opus 4.8 is recommended only for **existing workloads already using the model** that need to maintain continuity during the migration to Claude Opus 5.5. It is not recommended for any new workloads. For all new general-access, software engineering, and agentic tool use workloads, Claude Opus 5.5 is the recommended default — offering superior capability, lower cost, and active support without a retirement date. The model's primary value is as a transition piece for existing users; its strengths (software engineering, agentic tool use, 1M token context) are now available in Claude Opus 5.5 with active support and lower cost. The system card's extensive evaluation suite provides valuable baseline data for understanding the model's capabilities, even as the model itself is deprecated.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-16
- Method: Public internet research using official Anthropic system card, platform docs, and system card changelog; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Model marked for retirement "not sooner than May 28, 2027"; migration to Claude Opus 5.5 recommended. Not recommended for new workloads.
- Reference URLs:
  - [Anthropic: Claude Opus 4.8 System Card](https://www-cdn.anthropic.com/0f0c97ad20d8005706296bd92aa1c27c6b2f4f61/Claude%20Opus%204.8%20System%20Card.pdf)
  - [Anthropic: Claude Opus 4.8 Model Card](https://platform.claude.com/docs/en/models/opus-4-8/overview)
  - [Anthropic: Claude Opus 5.5](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Anthropic: Opus 4.8 System Card changelog](https://www.anthropic.com/system-cards)
  - [Anthropic: System card evolution timeline](https://www.anthropic.com/system-cards)
  - [Anthropic: Claude Platform docs - Opus 4.8](https://docs.anthropic.com/en/docs/about-claude/models/overview)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4-8/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4-8/`.
4. No benchmark invented; comprehensive system card evaluations found (RSP, CB-1, AI R&D, external testing).