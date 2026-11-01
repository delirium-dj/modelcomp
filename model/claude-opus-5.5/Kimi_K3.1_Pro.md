# Claude Opus 5.5 — findings by Kimi K3.1 Pro

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's proprietary Opus-class reasoning model for agentic coding, computer use and professional knowledge work, with always-on adaptive thinking and a 1M-token context window.
- **Provider / access:** Claude Platform API ID `claude-opus-5-5`, Claude Code, AWS, Google Cloud and Microsoft Azure; Anthropic Messages API with adaptive thinking.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not verified in the launch material reviewed.
- **IDs:** `claude-opus-5-5`; no OpenCode Zen Free ID verified.
- **Context window:** 1M tokens total; approximately 128K max output according to ARMES's API specification summary, with larger batch output limits not treated as generally available.
- **Modalities:** Text and image in; text out; always-on adaptive reasoning, tool calls and computer use; JSON/structured output supported by the Claude Platform but not separately benchmarked here.
- **Pricing (as of 2026-11-01):** $4 input / $20 output / $0.20 cache-read / $5 cache-write per 1M tokens. Fast mode costs $8/$40 per 1M. Zero data retention is available.
- **Architecture:** Proprietary; parameter count and routing architecture not disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**agentic terminal**): **66.4%** at `xhigh`, ±2.6 points standard error (Anthropic).
- GDPval-AA v2.1 (**professional knowledge work**): **1846 Elo** at max effort (Anthropic/Artificial Analysis evaluation).
- AutomationBench (**business workflows**): **40.0%**, evaluated by Zapier without fallback models (Anthropic).
- OSWorld 2.1 (**computer use**): **81.8% partial-credit** (Anthropic); strict scoring is not comparable.
- Terminal-Bench-Science 0.1: **58.7%**, ±3.5–5 points standard error (Anthropic).
- Tau3-Banking / Tau2-Bench: **no first-party verified score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- Humanity's Last Exam: **67.7% with tools** at max effort (Anthropic).
- Chartography: **89.0% with tools** (Anthropic).
- GPQA Diamond: **no first-party verified score found**.
- LCR / MLCR: **no first-party verified numeric score found**.
- CritPt: **no first-party verified numeric score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no independently confirmed exact-model figure used**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- FrontierCode v1.1 Main: **54.4%** at max effort; **54.6%** at default medium effort (Anthropic).
- CursorBench 4.0: **57.8%** at max effort; **52.5%** at default medium effort (Anthropic).
- Terminal-Bench 4.0: **66.4%** at `xhigh` (Anthropic).
- SWE-bench Verified / SWE-Pro: **no first-party verified numeric score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no first-party verified numeric score found**.
- Vibe Code Bench: **no verified public score found**.

Long context:

- The API provides a 1M-token window; **no numeric MRCR/RULER/GraphWalks result was verified** in the first-party launch material, so nominal capacity is not treated as measured retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 97/100.** Leading Terminal-Bench, GDPval-AA, AutomationBench and OSWorld results show excellent long-horizon tool use; partial-credit computer-use scoring and safeguard fallbacks cap perfect confidence.
- **Reasoning: 96/100.** HLE 67.7% with tools and GDPval-AA 1846 Elo demonstrate exceptional multidisciplinary and professional reasoning; missing first-party GPQA and CritPt rows cap the score.
- **Context window: 94/100.** A verified 1M-token API window supports repository-scale work, but no numeric long-context retrieval result was found and effective recall may decay before the nominal limit.
- **Multimodal: 91/100.** Native image understanding is strongly supported by Chartography 89.0% with tools and OSWorld 81.8% partial; text-only output and no audio/video input cap the score.
- **Coding: 97/100.** Terminal-Bench 66.4%, FrontierCode 54.4% and CursorBench 57.8% provide consistent first-party evidence of frontier agentic coding across distinct harnesses.
- **Cost efficiency: 65/100.** Pricing is lower than Opus 5 and token efficiency is improved, but $4/$20 per 1M, always-on billed reasoning and a 2x-price Fast mode remain expensive for routine work.
- **Overall Score: 95/100.** Half-up mean of 97, 96, 94, 91 and 97; best fit for difficult repository migrations, autonomous coding and high-stakes research where quality justifies premium pricing.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-01
- Method: Independent public internet research using three successful searches, Anthropic's launch documentation and ARMES's specification summary; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [ARMES — Claude Opus 5.5 specifications](https://armes.ai/docs/models/anthropic/claude-opus-5.5)
  - [LLM Stats — Claude Opus 5.5 pricing and context](https://llm-stats.com/models/claude-opus-5-5)
  - [Terminal-Bench 4.0 methodology](https://artificialanalysis.ai/evaluations/terminalbench-4-0)
- Future sources: add a new file next to this one using the same headings.
