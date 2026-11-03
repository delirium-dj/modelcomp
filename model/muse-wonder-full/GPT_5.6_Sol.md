# Muse Wonder Full — findings by GPT-5.6 Sol

- Source: Meta/Muse Wonder Full (`muse-wonder-full-1.0`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's subscription-only frontier model for long-running agents, coding, and computer use; it leads several public agentic and coding evaluations but is not exposed through the Model API.
- **Provider / access:** Muse Code Power Usage ($50/month) and Maximum Usage ($200/month) plans; no pay-as-you-go Model API route.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not disclosed.
- **IDs:** `muse-wonder-full-1.0` in Muse Code; no Zen or public API ID.
- **Context window:** 1,048,576 (1M) tokens, verified in Meta's model card.
- **Modalities:** Text, image, video, and audio input; text output; reasoning, computer use, and long-running agent workflows.
- **Pricing (as of 2026-11-03):** Subscription-only: $50/month Power or $200/month Maximum; no per-token tariff. Contributor mode may allow Meta to train on submitted content and can be disabled.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **45.4%** (Meta launch evaluation; higher than standard Wonder's 39.1%).
- JobBench: **75.3** (Meta report; #1 among the launch comparison set).
- Terminal-Bench 4.0-AA: **57.1%** (Meta/Artificial Analysis); this conflicts with the stronger coding headline and places only 13/119 in a broader aggregation.
- Artificial Analysis Intelligence Index v4.3: **55.8/100, #4**; GDP.pdf **33.2** and CritPt **33%**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **56** rounded; Meta and Artificial Analysis agree on the aggregate result.
- ProofBench v1.1: **94%** (third-party aggregation of published evaluation).
- MASK factuality/alignment evaluation: **87.3%** (Meta model card).

Coding:

- DeepSWE 1.1: **79.0%** (Meta; independent leaderboard result cited by Meta).
- SWE-Marathon: **57.5%** at extra-high effort (Meta).
- Artificial Analysis Coding Agents Index: **68**, tied with Claude Code Sonnet 5.5 in the reported run.
- VulcanBench Frontier v4: **88.27 combined** at Medium, but only 23rd of 67 columns; higher effort did not improve results, contradicting a simple “more reasoning is better” assumption.

Long context:

- 1M advertised context; no independent full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 96/100.** Top-tier JobBench and AutomationBench results plus native computer use support; Terminal-Bench 4.0 variability prevents a perfect score.
- **Reasoning: 92/100.** AA Index 56/#4, CritPt leadership, and strong ProofBench evidence support frontier reasoning, with some benchmark spread.
- **Context window: 98/100.** Verified 1M window, capped slightly because no independent full-window retrieval result was found.
- **Multimodal: 93/100.** Broad text, image, video, and audio input with computer-use perception; output remains text-only.
- **Coding: 97/100.** DeepSWE 79, SWE-Marathon 57.5, and Coding Agents Index 68 are among the strongest public results, moderated by VulcanBench's middle placement.
- **Cost efficiency: 58/100.** No token API and access starts at $50/month; potentially useful for heavy users but costly and hard to meter.
- **Overall Score: 95/100.** Half-up mean of the five quality dimensions; best suited to demanding autonomous coding and computer-use workflows where subscription-only access is acceptable.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-11-03
- Method: public internet research across official Meta documentation/model card and independent Artificial Analysis, VulcanBench, and review sources; conflicting harness results were retained rather than averaged away.
- Reference URLs:
  - [Meta Muse Wonder model page](https://dev.meta.ai/models/muse-wonder)
  - [Meta Muse Wonder model card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Artificial Analysis launch analysis](https://artificialanalysis.ai/articles/muse-wonder)
  - [VulcanBench Muse Wonder Full](https://vulcanbench.com/models/muse-wonder-full.html)
  - [VulcanBench effort-level sweep](https://vulcanbench.com/benchmarks/swe-v4-musewonder-full-v326.html)
- Future sources: add a new file next to this one using the same headings.
