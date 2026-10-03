# Claude Sonnet 5.5 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-tier workhorse in the Claude 5.5 family, released September 28, 2026, optimized for everyday coding, debugging, and document tasks. Offers near-flagship intelligence at faster speed and lower cost than Opus 5.5.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5-5`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Messages API.
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** 1,000,000 tokens total; max output 128,000 tokens (verified via Anthropic docs and OpenRouter).
- **Modalities:** Text + image in; text out; adaptive thinking (default effort "High"); tool calls; JSON mode.
- **Pricing (as of 2026-10-03):** $2.00 / $10.00 per 1M tokens (input / output). Cache write $2.50 / cache read $0.20 per 1M.
- **Architecture:** Proprietary; parameter count undisclosed. Direct successor to Claude Sonnet 5.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **64–70.6%** (Artificial Analysis reports 64%; vellum.ai reports 70.6% at peak effort; outperforms Opus 5.5 at 60–66.4%).
- GDPval-AA v2.1: **1844 Elo** (professional knowledge; vellum.ai).
- Artificial Analysis Intelligence Index: **#2 rank** (just behind Opus 5.5, at Max effort; artificialanalysis.ai).
- CursorBench: within 2 points of Opus 5.5 (Anthropic blog).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- FrontierCode: 10 points higher than Sonnet 5 at same effort settings (Anthropic blog).
- SWE-bench Verified / SWE-bench Pro: no verified public score found specifically for Sonnet 5.5.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 1,000,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 4.0 at 64–70.6% outperforms even Opus 5.5; GDPval-AA 1844 Elo is strong; #2 on AA Intelligence Index. 30%+ faster than Sonnet 5. Capped by lack of Tau/Claw/Toolathon data.
- **Reasoning: 89/100.** #2 on Intelligence Index approaches Opus 5.5 flagship level; GDPval-AA confirms strong professional reasoning. Capped by absence of GPQA Diamond and HLE scores.
- **Context window: 87/100.** 1M-token window with 128K output matches top-tier 2026 models. No formal retrieval benchmarks. Capped by unverified long-context performance data.
- **Multimodal: 70/100.** Text + image input with solid document/chart interpretation. No audio/video input; text-only output. Capped by vision-only multimodal scope, narrower than some competitors.
- **Coding: 90/100.** Terminal-Bench 4.0 outperformance shows strong agentic coding; FrontierCode 10-point jump over Sonnet 5; CursorBench near Opus 5.5. Capped by absence of SWE-bench/LiveCodeBench specific scores.
- **Cost efficiency: 72/100.** $2/$10 per 1M is competitive mid-tier pricing, half the cost of Opus 5.5. Cache read at $0.20 is excellent. Higher token usage at Max effort partially offsets cost advantage.
- **Overall Score: 85/100.** Mean of (89 + 89 + 87 + 70 + 90) / 5 = 85.0. Excellent mid-tier model with near-flagship coding performance, constrained by vision-only multimodal.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Anthropic announcements, Artificial Analysis, vellum.ai, OpenRouter, independent evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
