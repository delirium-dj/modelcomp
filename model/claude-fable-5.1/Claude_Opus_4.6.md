# Claude Fable 5.1 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's frontier model for demanding reasoning, long-horizon agentic work, and complex coding. Most advanced model in the Claude ecosystem as of September 2026.
- **Provider / access:** Anthropic API (`claude-fable-5-1`), AWS Bedrock, Google Cloud, Microsoft Foundry. Pro/Max/Team/Enterprise plans. Messages API.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff estimated mid-2026.
- **IDs:** `anthropic/claude-fable-5-1` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out; extended thinking; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $10.00 / $50.00 per 1M tokens. Cache reads: $0.25 (75% reduction vs Fable 5, cutting typical workload costs ~25%, agentic ~45%).
- **Architecture:** Proprietary; Anthropic's most advanced model architecture. Sibling: Claude Mythos 5.1 (restricted access).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.9% ± 3.8%** (source: tbench.ai leaderboard)
- Terminal-Bench-Science 0.1: **52.6%** (source: plainenglish.io; >2× Fable 5's 24.7%)
- AutomationBench: **31.4%** (source: plainenglish.io; up from 17.1% in Fable 5)
- CursorBench: **73.4%** (source: plainenglish.io)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found
- HLE: no verified public score found
- Frontier-level reasoning inferred from TB-Science 52.6% and CursorBench 73.4%

Coding:

- SWE-bench Pro: **>80%** (source: community evaluations; leads Anthropic lineup)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 4.0 57.9% is near-leading (Astra 58.2% is top); TB-Science 52.6% is exceptional. AutomationBench 31.4% strong. Missing Tau3/GDPval.
- **Reasoning: 90/100.** TB-Science 52.6% demonstrates frontier scientific reasoning. CursorBench 73.4% shows complex multi-step capability. Missing explicit GPQA/HLE but positioned as most advanced Claude.
- **Context window: 95/100.** 1M verified. Same architecture as Opus 5.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio input. Text+image = 60–70 range.
- **Coding: 88/100.** SWE-bench Pro >80% leads Anthropic lineup. CursorBench 73.4% shows practical coding. Missing DeepSWE/SciCode prevents 95+.
- **Cost efficiency: 30/100.** $10/$50 is premium pricing. Per methodology: $10/$50 = ~30. Cache read discount helps but base rate is expensive.
- **Overall Score: 86/100.** Mean of (90 + 90 + 95 + 65 + 88) / 5 = 85.6 ≈ 86. Most capable Claude model; premium pricing is the trade-off.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Anthropic docs, tbench.ai, plainenglish.io, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
