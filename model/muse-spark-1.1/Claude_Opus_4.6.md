# Muse Spark 1.1 — findings by Claude Opus 4.6

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model, released July 9, 2026. Significant upgrade optimized for agentic tasks — planning, tool use, computer operation, and multi-step project management. Succeeded by Muse Spark 1.2 and 1.3.
- **Provider / access:** Meta Model API (`muse-spark-1.1`), OpenRouter.
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff not publicly confirmed.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 1,048,576 tokens (~1M); max output not separately confirmed.
- **Modalities:** Text + image + video + PDF in (multimodal reasoning); text out; agentic tool calling; MCP server integration.
- **Pricing (as of 2026):** $1.25 / $4.25 per 1M tokens (input / output) via Meta Model API.
- **Architecture:** Proprietary; parameter count undisclosed. Part of Meta's Muse Spark family.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1%** (Meta internal metrics).
- OSWorld Verified: **80.8%** (Meta internal metrics).
- JobBench: **54.7%** (Meta internal metrics).
- Zero-shot generalization to new native tools and MCP servers confirmed (Meta).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- DeepSWE: **53.3%** (jump from 10.0 in predecessor; Meta internal data).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- ~1M-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP Atlas 88.1% is strong agent capability; OSWorld Verified 80.8% confirms computer-use proficiency; zero-shot MCP generalization is innovative. Capped by limited independent verification.
- **Reasoning: 78/100.** Designed for multi-step agentic reasoning. Trails top-tier frontier models on complex tasks per independent reviews. Capped by absent GPQA/HLE data.
- **Context window: 87/100.** ~1M-token window matches top tier. Capped by unverified retrieval quality.
- **Multimodal: 82/100.** Text + image + video + PDF input — broad multimodal coverage. Text-only output. Capped by no audio input and no generative output.
- **Coding: 72/100.** DeepSWE 53.3% was a major jump but trails frontier models (Gemini 4 Argon at 77.9%). Repository-level editing capability. Capped by being surpassed by 1.2 and 1.3.
- **Cost efficiency: 78/100.** $1.25/$4.25 is competitive mid-tier pricing. Capped by not being the cheapest option.
- **Overall Score: 81/100.** Mean of (85 + 78 + 87 + 82 + 72) / 5 = 80.8, rounded to 81. Strong agentic model with broad multimodal and tool-use capabilities.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Meta announcements, datacamp.com, kingy.ai, OpenRouter, medium.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
