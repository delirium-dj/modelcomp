# Claude Sonnet 5.5 - findings by Flint

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's second model of the Claude 5.5 family (after Claude Opus 5.5), framed as a faster, lower-cost complement to the flagship - strongest at well-scoped everyday tasks, bug fixes, polished documents, and design work, and a clear upgrade over Claude Sonnet 5. Released 2026-09-28.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5-5`); Amazon Bedrock (`anthropic.claude-sonnet-5-5`); Google Cloud Vertex AI / Google-managed (`claude-sonnet-5-5`); Microsoft Foundry (`claude-sonnet-5-5`); AWS Claude Platform (`claude-sonnet-5-5`). Messages API surfaces (Chat Completions + Responses).
- **Release / knowledge:** Released 2026-09-28; reliable knowledge cutoff 2026-06; training data cutoff 2026-06.
- **IDs:** `claude-sonnet-5-5`, `anthropic.claude-sonnet-5-5`.
- **Context window:** 1M tokens (approx. 555k words / 2.5M chars on the current tokenizer); max output 128K (300K with `output-300k-2026-03-24` beta on Message Batches); text + image in -> text out.
- **Modalities:** Text + image in -> text out; reasoning via adaptive thinking (default effort `high`); tool use supported (server-side and client-side tools); JSON mode not verified.
- **Pricing (as of 2026-10-23):** input $2 / MTok, output $10 / MTok; cache write (5m) $2.50 / MTok, (1h) $4 / MTok; cache read $0.10 / MTok; Batch API 50% off. Paid tier (no zero-cost access lane).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agentic coding:

- Terminal-Bench 4.0: **70.6%** (Anthropic; agentic coding eval). Claude Sonnet 5: 10.3%; Claude Opus 5.5: 66.4% (reported at Xhigh = its highest). OpenAI did not report GPT-6 Sol publicly; Anthropic reported GPT-5.6 Sol at 66.4%.
- Independent corroboration: Artificial Analysis measured **64%** on a pre-release deployment; Anthropic flagged that AA's pre-release deployment carried a structured-output bug (since fixed) and that AA's GDPval-AA / AA-Briefcase figures may not yet reflect the final version - reconciled reading approx. 65%.

- FrontierCode 1.1 (Main): Claude Sonnet 5.5 **52.1%** (xhigh), **46.2%** (max); Claude Opus 5.5: **54.4%**. At High effort Sonnet 5.5 scored 10 points above Claude Sonnet 5.
- CursorBench 4.0: Claude Sonnet 5.5 **55.5%**; Claude Opus 5.5 **57.8%**; Claude Sonnet 5 **34.1%**; GPT-6 Sol not reported.

Knowledge work / reasoning:

- GDPval-AA v2.1: Claude Sonnet 5.5 **1844 Elo**; approx. 2 below Claude Opus 5.5; approx. 400 above Claude Sonnet 5 (approx. 1449).
- AA-Briefcase v1.1: Claude Sonnet 5.5 **1811 Elo**.
- Humanity's Last Exam: Claude Sonnet 5.5 **64.5%** with tools; Claude Sonnet 5 54.9%; GPT-6 Sol 67.7%.

Computer use:

- OSWorld 2.1: Claude Sonnet 5.5 **80.1%**; Claude Opus 5.5 81.8% (partial); GPT-5.6 Sol 57.0% (partial).

Vision:

- Chartography visual chart recognition: Claude Sonnet 5.5 **61.6%** (no tools); Claude Sonnet 5 15.6%; GPT-5.6 Sol 64.4%.

Independent composite / cross-source comparison:

- Artificial Analysis Intelligence Index v4.3.2: Claude Sonnet 5.5 **56** (rank #2 / 215 models, approx. 1% top-tier); composite over AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. Speed 132.0 tok/s (#33/186); cost $2 / $10 per MTok with 95% cache discount; $5.46 per Intelligence-Index task (#4/4 for cost); 420M output tokens (#116/116 for verbosity - i.e. very verbose).
- Independent third-party comparison (DataCamp, 2026-09-30): Artificial Analysis Intelligence Index 56.0 (Sonnet) vs 51.8 (GPT-6.1 Sol); Terminal-Bench 4.0 - Anthropic **70.6%** vs Artificial Analysis **64%**.

Conflicts and resolutions:

- Terminal-Bench 4.0: Anthropic **70.6%** vs Artificial Analysis **64%**. Attribution conflict (AA pre-release deployment + structured-output bug; AA caveat that GDPval-AA / AA-Briefcase figures may not yet reflect the final version). Resolution: Anthropic's 70.6% treated as primary vendor figure, AA's 64% as independent pre-release measurement; reconciled reading approx. 65%.
- FrontierCode / CursorBench: Claude Sonnet 5.5 trails Claude Opus 5.5 (52.1% vs 54.4%; 55.5% vs 57.8%) - same-vendor comparison, not a vendor-vs-independent conflict; interpretation differs (Anthropic: Sonnet at High effort beats Sonnet 5 by 10 pts; Opus scored higher on FrontierCode at max effort).

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** - scored independently.

- **Tool use: 85/100.** Agentic terminal work measured at Terminal-Bench 4.0 **70.6%** and merge-worthiness at FrontierCode 1.1 **52.1%** (xhigh); Anthropic reports Sonnet 5.5 batched tool calls ~3x fewer with fewer shell runs than Sonnet 5. Cap: FrontierCode's stricter merge criterion and the absence of an independent tool-use index for this snapshot.
- **Reasoning: 88/100.** Humanity's Last Exam **64.5%** (with tools), GDPval-AA **1844 Elo** ~= Claude Opus 5.5 (2 Elo apart), Artificial Analysis Intelligence Index top-tier composite. Cap: no independent GPQA Diamond figure for this exact snapshot; reasoning picture is vendor-heavy.
- **Context window: 88/100.** Native 1M-token context with knowledge cutoff 2026-06; Multimodal/long-context retrieval (AA-LCR etc.) not independently reported for this snapshot. Cap: long-context retrieval specifically unverified.
- **Multimodal: 80/100.** Text + image in -> text out; Chartography visual chart recognition **61.6%** (vs Claude Sonnet 5 **15.6%**). Cap: single vision eval; text-only output.
- **Coding: 84/100.** Terminal-Bench 4.0 **70.6%** (Artificial Analysis: 64%), CursorBench 4.0 **55.5%**, FrontierCode 1.1 **52.1%** (xhigh) / **46.2%** (max); below Claude Opus 5.5 on FrontierCode and CursorBench but far above Claude Sonnet 5. Cap: vendor-reported FrontierCode / CursorBench figures vs. fewer independent coding rows.
- **Cost efficiency: 80/100.** $2 / $10 per MTok, cache read $0.10, up to 30% less per task than Claude Sonnet 5; Batch API 50% off. Paid tier.
- **Overall Score: 85/100.** (85 + 88 + 88 + 80 + 84) / 5 = **85** (half-up mean of the five quality dims; Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (anthropic/claude-sonnet-5-5)** - 2026-10-23
- Method: public-internet research (official Anthropic release + docs, Artificial Analysis, third-party comparison coverage); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.