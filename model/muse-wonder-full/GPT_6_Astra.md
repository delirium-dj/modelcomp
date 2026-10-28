# Muse Wonder Full — findings by GPT 6 Astra

- Source: Meta / `muse-wonder-full-1.0`
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

[Meta's October 12 launch](https://research.meta.ai/blog/muse-wonder) introduces Wonder and Wonder Full as separate models built on stronger base models. Full is not merely the standard model's subscription/reasoning-effort label. Proprietary; parameter count, detailed architecture and knowledge cutoff undisclosed. [Official product page](https://dev.meta.ai/models/muse-wonder) gives Full **1M context**; maximum output not separately verified. [Independent launch analysis](https://artificialanalysis.ai/articles/muse-wonder) confirms text/image/video/audio input and text output. Native non-text generation is not established.

Access is **Muse Code subscription only**, Power Usage **$50/month** or Maximum Usage **$200/month**, per the product page. There is **no public Full API token price or verified Zen Free ID**. The standard Wonder model's $4/$0.20/$20 token rates do not apply to Full. Chat Completions/Responses API access is not publicly offered for Full. [Official pricing policy](https://dev.meta.ai/docs/pricing-rate-limits) says Muse Code subscriptions default to Contributor mode, allowing training on submitted content, and this can be turned off in settings; usage allowances depend on plan/mode. Subscription limits preclude interpreting the plan as unlimited inference.

### Raw benchmarks found

[Meta's exact Full column](https://dev.meta.ai/models/muse-wonder), max effort except indicated: Personal Superintelligence Index **59.1** (internal composite), Harvey LAB-AA **13.1**, Vals Finance Agent v2 **59.1**, HealthBench Pro **62.3**, AutomationBench-AA **45.4**, GDP.pdf **33.2**, JobBench **75.3**, OSWorld v2.1 **78.4 partial / 39.4 binary**, MemoryBench **85.5**, Terminal-Bench 4.0-AA **57.1**, DeepSWE **1.1 79.0**, SWE-Marathon **57.5 (xhigh)**, ProgramBench **59.0**, AA index **56**. OSWorld partial credit is not binary task completion; newer DeepSWE/terminal versions are not substituted for older suites.

[Artificial Analysis's independent October 12 analysis](https://artificialanalysis.ai/articles/muse-wonder): **Intelligence Index v4.3 56**, GDPval-AA **v2.1 1857 Elo**, AA-Briefcase **1729 Elo**, AutomationBench-AA **71%**, GDP.pdf **33%**, CritPt **33%**, SciCode **63%**, Terminal-Bench **4.0 57%**, Coding Agents Index **68 in Muse Code at max effort**. The provider table's AutomationBench **45.4** and AA's **71%** are materially inconsistent without a shared version/harness specification; retain both and do not average them. GDPval's apparent rank-two advantage overlaps confidence intervals of nearby models. These are launch-era v4.3 results, not the subsequently introduced v5 index.

AA reports Omniscience **30** and hallucination rate **23%**, making factual breadth a relative weakness despite selective answering. Full uses approximately **54K output / 6.44M input tokens per index task**; this is evaluation workload usage, not context length or a billable price. AA explicitly provides **no Full cost-per-task figure**.

No verified exact-Full GPQA, HLE, Tau3-Banking, Claw-Eval or full-1M MRCR retrieval score recovered in this review. MemoryBench and active memory are not proof of near-perfect needle retrieval at a million tokens. Coding Agents Index measures the model-plus-Muse-Code system. Native modality coverage is independently documented, but a standalone exact-Full vision/audio test was not recovered.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval v2.1 1857, strong professional tasks and computer use support frontier agents; binary OSWorld 39.4 and AutomationBench disagreement limit certainty.
- **Reasoning: 92/100.** Independent CritPt 33%, SciCode 63% and v4.3 index 56 support strong scientific reasoning; Omniscience 30 caps breadth.
- **Context window: 95/100.** Verified 1M tier; no near-perfect full-window retrieval bonus.
- **Multimodal: 95/100.** Text/image/video/audio input with text output; score reflects breadth, with limited recovered exact-Full modality evaluations.
- **Coding: 94/100.** DeepSWE 1.1 79%, SWE-Marathon 57.5 and AA Coding Agents 68 support excellent long-horizon work; ProgramBench 59% leaves a substantial failure rate.
- **Cost efficiency: 60/100.** Provisional subscription-value judgment for $50/$200 monthly plans with usage limits, not a fabricated token-price conversion.
- **Overall Score: 94/100.** Mean of (94 + 92 + 95 + 95 + 94)/5 = 94; strong subscription-access long-running coding and professional agents.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-28 UTC
- Method: Three fresh searches, primary product/research/pricing pages and independent AA launch measurements; normalized interpretations with version and harness boundaries.
