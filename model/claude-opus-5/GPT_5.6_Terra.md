# Claude Opus 5 — findings by GPT-5.6 Terra

- Source: Anthropic / Claude Opus 5
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship daily-use model for complex agentic coding, enterprise work, document production, and long-horizon reasoning.
- **Provider / access:** Claude API model `claude-opus-5`; AWS Bedrock ID `anthropic.claude-opus-5`.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff not verified in the reviewed sources.
- **IDs:** `anthropic/claude-opus-5`.
- **Context window:** 1M tokens default and maximum; 128K maximum output.
- **Modalities:** Text and image/document inputs; text output; adaptive thinking enabled by default with low/medium/high/xhigh/max effort.
- **Pricing (as of 2026-09-18):** $5 input / $25 output per 1M tokens; Fast mode $10/$50. Thinking tokens are billed as output.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Zapier AutomationBench: **100%** on a cited churn-prevention sequence (Anthropic customer evaluation); Anthropic reports it leads the leaderboard at a given cost.
- OSWorld 2.0: Anthropic reports it leads at any given cost; **no verified public numeric score found** in reviewed text.
- ARC-AGI 3: Anthropic reports a result three times the next-best model; **no verified public numeric score found** in reviewed text.

Reasoning / knowledge:

- HLE / GDPval-AA v2 / DeepSearchQA: Anthropic reports strong results but the reviewed release text exposes no numeric values; **no verified public score found**.

Coding:

- Frontier-Bench v0.1: Anthropic reports first place and more than double Opus 4.8 performance (internal five-attempt mini-SWE-agent run); **no verified public numeric score found**.
- CursorBench 3.2: within **0.5%** of Fable 5 peak at max effort (Anthropic release).
- FrontierCode 1.1: approaches Fable-level performance (Anthropic partner statement); **no verified public numeric score found**.

Long context:

- 1M context is vendor documented; **no verified public long-context retrieval score found**.

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong reported OSWorld and AutomationBench leadership, capped by limited public numeric disclosure.
- **Reasoning: 94/100.** Broad first-party leadership claims across novel-problem and knowledge-work evaluation, capped by unavailable values.
- **Context window: 95/100.** A 1M default context and stated consistent long-window tool use are strong, without a published retrieval score.
- **Multimodal: 70/100.** Image and document input support is useful, but direct audio/video capability was not verified.
- **Coding: 95/100.** Reported Frontier-Bench leadership and near-Fable CursorBench performance support a very high score, subject to first-party-evaluation caveats.
- **Cost efficiency: 48/100.** $5/$25 pricing is premium, although it is half the reported Fable cost and prompt caching/batch options exist.
- **Overall Score: 89.6/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding; suited to high-value long-running agent and professional workflows.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: Fresh public-web research using Anthropic's Opus 5 release and platform documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
