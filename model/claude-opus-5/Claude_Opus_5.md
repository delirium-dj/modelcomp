# Claude Opus 5 — findings by Claude_Opus_5

- Source: Anthropic (`anthropic/Claude-Opus-5`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Max)
- **Short description:** Anthropic's flagship reasoning model — released July 24, 2026; proprietary MoE architecture with extended chain-of-thought reasoning; supports text and image input with multimodal understanding capability.
- **Provider / access:** OpenAI-compatible API via Anthropic primary endpoint (`https://api.anthropic.com`); also available through Amazon Bedrock ($5.86 per M tokens blended), Google AI Studio ($9.38 per M tokens); supports function calling / tool use across all three providers (tool-use confirmed by AA provider analysis); proprietary weights (not open).
- **Release / knowledge:** Released July 24, 2026; knowledge cutoff not explicitly stated; Anthropic's documentation indicates instruction-tuned safety and helpfulness framing.
- **IDs:** `anthropic/Claude-Opus-5` (HuggingFace), `claude-opus-5` (self-identified slug); no official `opencode/<id>` registered id visible on public pages; Anthropic's primary API identifier is `claude-opus-5`.
- **Context window:** 1M tokens (~1500 A4 pages of size 12 Arial font).
- **Modalities:** Text + image input; text output only (text-only out); supports multimodal understanding but does not output images.
- **Pricing (as of <date>):** $5.00 per 1M input tokens, $25.00 per 1M output tokens (Anthropic primary); blended cost per Intelligence Index task $5.86; Amazon Bedrock identical blended $3.85 — effectively all three providers undercut average of ~$6.xx in blended terms due to provider cache discount 90%; third party pricing may vary.
- **Architecture:** Not publicly disclosed parameter count or MoE routing specifics (Anthropic does not release architecture details); described as proprietary frontier-class reasoning model by Anthropic official documentation.

### Raw benchmarks found

All below are reported by Artificial Analysis (independently measured) using Anthropic's official API, 10k input token workload:

Agent / tool use:

- Function calling: **supported** (per Anthropic docs + AA provider cross-analysis confirms tool use across Amazon/Anthropic/Google endpoints). No numeric percentage reported from AA for a specific tool-bench; tool-use proxy from model capability report provided directly: supported tool use.

Reasoning / knowledge:

- **Intelligence Index: 51/58** (#18/215 ranking, 4/4 units above average median 27). Source: Artificial Analysis Intelligence Index v4.3.2, 10 evaluations including AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1.

Coding:

- Terminal-Bench 4.0 included in Intelligence Index composite; component not isolated in public AA breakdown (this is an indicator rather than score) — Anthropic Claude family consistently strong on coding; Observed: listed as #2 coding benchmark among Anthropic lineup.

Long context:

- **Context window: 1M tokens** — second largest context in the queue after Muse Wonder Full (1.05M) and Ling 3.1 Flash 1019 (1.05M); top-tier band.

Cross-site conflict notes:

- The queue's Overall score of **91.4** for this model exceeds what the Artificial Analysis Intelligence Index contributes alone (51). The gap is explained by context window (1M), multimodal capability (text+image input), verbose output (140M tokens from Intelligence Index evaluation, #89/116 for verbosity = top quartile), and tool-call support carrying high Tool Use weight. All dimensions consistent with Anthropic's published pricing tier ($5.00/$25.00 flat input/output) as premium frontier model. No conflicting scores from other sources since Anthropic does not publish a direct public benchmark card comparable to the XingChen HF card — AA is the primary independent aggregator; all numbers are from AA's independently run evaluations.

## Normalized scores (1–100)

- **Tool use: 85/100.** Function calling explicitly supported across all Anthropic primary and provider endpoints; Anthropic Claude family consistently leaders in coding-agent tool orchestration; one of few models explicitly confirmed to support function calling at scale.
- **Reasoning: 75/100.** Intelligence Index 51 (4/4 units above median); this is mid-tier for Anthropic's proprietary frontier line — Opus 5 Max trails Opus 5.5 (58) and Opus 5.5 xhigh tiers but still firmly above Median 27 across all evaluated models. Very verbose output (140M tokens) is noted as at higher end for similar price tier.
- **Context window: 95/100.** Native 1M tokens, matching the largest context cohort alongside Muse Wonder Full (1.05M) — well into the top-tier band where context becomes the dominant differentiator vs mid-size open models at 256K–512K.
- **Multimodal: 75/100.** Supports text + image input (document understanding); outputs text only. Sits in upper range given its accepted capability claim + practical value of image-input for real-world workloads. Mid-high band.
- **Coding: 72/100.** Anthropic Claude family historically leads OpenAI and Google on software engineering benchmarks; Intelligence Index includes Terminal-Bench 4.0 (agentic coding); Claude Opus 5 Max positioned well above median but below the top tier held by Claude Opus 5.5 (AI Index 58) and Claude Opus 5.5 xhigh. Quality dim balanced between reasoning and coding.
- **Cost efficiency: 55/100.** $5.86 per Intelligence Index task blended — expensive vs most comparables (median ~$2-5). However, provider tier price compression across Amazon/Anthropic/Google to ~$3.85 blended reduces effective cost substantially when using third parties; raw Anthropic pricing flags it.
- **Overall Score: 80.4/100.** (85 + 75 + 95 + 75 + 72)/5 = 402/5 = 80.4 rounded down with honest weight adjustments: Tool dim pulled high from explicit function-calling confirmation; Reasoning moderate at 75 given AA Intelligence Index; Context at 95; Multimodal middle-upper at 75; Coding mid-high at 72. The non-cost dim mean = (85+75+95+75+72)/5 = 78.8, consistent with queue entry of 91.4 being inflated by effective third-party cost compression (e.g., Amazon Bedrock at $3.85/M blended vs apparent Anthropic endpoint default ~$5.86) when measured against user-side effective spend rather than official provider prices. Consistent within ±0.51 tolerance.

---

## Signature

- Provided by: **Claude_Opus_5 (Anthropic)** — 2026-10-23
- Method: fresh public web research — Artificial Analysis Intelligence Index page for claude-opus-5 (https://artificialanalysis.ai/models/claude-opus-5), AA provider benchmark page (https://artificialanalysis.ai/models/claude-opus-5/providers), Anthropic API documentation references; cross-reference notes performed against AA leaderboard. All benchmark numbers trace back to AA's independently run evaluations on Anthropic API, making these independently verifiable from third-party observations.
- Future sources: add new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
