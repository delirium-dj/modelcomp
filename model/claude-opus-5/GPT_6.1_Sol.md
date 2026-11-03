# Claude Opus 5 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-opus-5`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Proprietary reasoning and agentic coding model, now an active legacy model superseded by Opus 5.5. Research concerns this exact route, not the newer release.
- **Provider / access:** Anthropic Messages API; Bedrock, Google Cloud and Microsoft Foundry. Consumer Claude and Claude Code availability was documented at launch; current subscription entitlements can change.
- **Release / knowledge:** Official July 24, 2026 release, May 2026 reliable/training cutoff. Vals records July 22 and a July 23 update, apparently an earlier evaluation record; official availability date takes precedence.
- **IDs:** `claude-opus-5`; Bedrock `anthropic.claude-opus-5`; publisher-qualified `anthropic/claude-opus-5`. No Zen Free route verified.
- **Context window:** 1M tokens; 128K synchronous output, 300K on Message Batches with the documented output beta header. Larger batch output is not the default synchronous limit.
- **Modalities:** Text/image input, text output; adaptive reasoning, high API effort default, tool use and computer-use workflows. No native audio/video output established.
- **Pricing (as of 2026-11-03):** Official $5 input / $25 output / $0.50 cache read per million; five-minute cache write $6.25, one-hour $10; batch input/output half price. Launch Fast mode is twice base price. No data-retention requirement for general access per launch; provider contracts still apply.
- **Architecture:** Proprietary; parameter count and detailed architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals independent current: Terminal-Bench 4.0 **53.53% ±1.34**, CUA-bench **9.00%**, SRE Bench **12.21% ±2.03**, Finance Agent v2 **58.63% ±0.08**, Legal Research Bench **55.29% ±3.46**, SkillsBench **60.44% ±4.58**.
- Vals July snapshot: Terminal-Bench 2.1 **84.64%**, or **81.27%** when fallback-assisted tasks count as failures. Most runs max effort, terminal 2.1 high, temperature 1 where configurable; Opus 4.8 serves as fallback.
- Anthropic launch's numerical aggregate charts are embedded images; no values were inferred from chart positions. Its customer account-health example at 100% is a selected workflow, not the AutomationBench aggregate.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Vals GPQA **93.43% ±1.24**, MMLU Pro **91.59% ±0.28**, ProofBench v1.1 **99.00% ±1.00**, MysteryMechanism **37.39% ±3.25**, Terminal-Bench-Science **27.14% ±5.35**, BioMysteryBench **79.26% ±2.06**.
- Vals launch Vals Index **67.21%**; the same update's fallback paragraph instead says **74.82% / 74.47%**. This within-page aggregate inconsistency is unresolved, so the contradictory totals are not averaged or used to anchor normalization. Current header accuracy **62.09%** is not assigned a version it does not name.
- HLE, CritPt and exact hallucination rate: no verified public score found in this model's directly retrieved source set.

Coding:

- Vals SWE-bench Verified, identified in its launch update: **97.00% ±0.76**; LiveCodeBench **89.03% ±0.91**, Code Migration **57.47% ±4.37**, Vibe Code Bench v1.1 **88.40% ±3.00**, IOI current **84.33% ±9.96**, ProgramBench **3.00% ±1.21** fully resolved.
- Vals launch IOI v1 **91.67%** is a different version from the current IOI row. ProofBench launch **78.00%** is not v1.1's current 99.00%.
- No verified SWE-Pro score retrieved. A near-saturated Verified result does not imply near-perfect harder engineering or ProgramBench completion.

Long context / multimodal:

- Official 1M capacity; no exact-model MRCR/RULER result verified in this source set. Vals MMMU Pro **89.88% ±0.72**, launch Vals Multimodal Index **73.90%**, or **73.58%** without fallback credit.

### Conflicts and limitations

Official documentation and launch agree on July 24 and the $5/$25 price, while Vals dates the evaluation earlier. The current official overview recommends migration to cheaper Opus 5.5; launch-era “state of the art” language is historical. The Deep View's July report broadly supports the efficiency positioning but contains a sentence naming Fable as more aligned than itself; this editorial error is not evidence about Opus alignment. Prefer Anthropic's actual text, which names Opus 5 as its best-tested model at that time.

Independent Vals confirms strong coding and medical/legal knowledge but exposes much lower long-horizon operational completion. Fallback-assisted scores describe a routed product, not exclusively Opus 5 weights. Anthropic states consumer cyber refusals fall back by default; API fallback can be enabled, not assumed. Its Frontier-Bench chart uses mini-SWE-agent, five attempts and Opus 4.8 fallback. Neither chart claims nor anecdotes should be silently compared to single-attempt independent scores. Current privacy/access contracts and safeguards still govern real deployments.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong terminal and professional agents, capped by low CUA/SRE completion and fallback dependence.
- **Reasoning: 92/100.** Strong independent GPQA and proof evidence; weaker mechanism and scientific-terminal performance limit generality.
- **Context window: 95/100.** Documented 1M capacity and long output, but no verified edge-window retrieval measure retrieved.
- **Multimodal: 87/100.** Strong visual understanding, limited to text/image input and text output.
- **Coding: 93/100.** Strong independent Verified, migration and LiveCodeBench, with saturation and low full ProgramBench resolution preventing higher confidence.
- **Cost efficiency: 70/100.** Better launch value than Fable, but substantial output/cache costs and a cheaper recommended successor weaken current value.
- **Overall Score: 91/100.** Half-up mean of 90, 92, 95, 87 and 93 is 91.4; best fit is validated legacy coding workflows with explicit evaluation before migration.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful independent search queries; official model reference and corrected launch URL compared with independent Vals and The Deep View. Initial guessed announcement URL returned 404 and was not evidence. No peer reports read; normalized scores are interpretations.
- Search queries: `"Claude Opus 5" Anthropic launch benchmarks official`; `"Claude Opus 5" independent benchmarks Snorkel Vals Artificial Analysis`; `"Claude Opus 5" pricing context output limitations model`.
- Reference URLs:
  - [Official launch and safeguard notes](https://www.anthropic.com/news/claude-opus-5)
  - [Official current legacy specifications](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [Vals independent results, historical updates and fallback caveats](https://www.vals.ai/models/anthropic_claude-opus-5)
  - [The Deep View independent launch reporting](https://www.thedeepview.com/newsletter/claude-gets-more-frugal-and-confusing-with-opus-5)
