# Claude Sonnet 5.5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-sonnet-5.5
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic’s high-performance Sonnet for coding, agents and everyday knowledge work. Fast, lower-cost complement to Opus 5.5 with 1M context and adaptive thinking.
- **Provider / access:** Anthropic Claude API `claude-sonnet-5-5`; also Amazon Bedrock `anthropic.claude-sonnet-5-5`, Google Cloud Vertex, Microsoft Foundry. Chat Completions / Messages API.
- **Release / knowledge:** 2026-09-28 release; reliable knowledge cutoff Jun 2026, training data cutoff Jun 2026.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** 1M total tokens; max output 128K tokens synchronous, up to 300K with beta header. Verified via Anthropic models overview.
- **Modalities:** text and image in; text out; adaptive reasoning; tool use; JSON mode. No audio/video input/output reported.
- **Pricing (as of 2026-10-20):** $2 / 1M input, $10 / 1M output; prompt cache read $0.10 / 1M, write $2.50 / 1M. Paid. Batch 50% off.
- **Architecture:** proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding**): **70.6%** (Anthropic Claude Sonnet 5.5 announcement 2026-09-28, Terminal-Bench 4.0 accuracy)
- CursorBench 4.0 (**agentic coding**): **55.5%** (Anthropic, Sonnet 5.5 vs Opus 5.5 57.8%)
- FrontierCode 1.1 Main (**agentic software engineering**): **46.2% Max** / **52.1% Xhigh** (Anthropic, Max effort 46.2%, Xhigh 52.1%)
- GDPval-AA v2.1 (**knowledge work**): **1844** Elo (Anthropic, GDPval-AA v2.1)
- AA-Briefcase v1.1 (**agentic knowledge work**): **1811** Elo (Anthropic)
- OSWorld 2.1 (**computer use**): **80.1%** partial (Anthropic)
- Chartography (**visual chart recognition**): **61.6%** no tools (Anthropic)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (**multidisciplinary reasoning**): **64.5%** with tools (Anthropic)
- Artificial Analysis Intelligence Index v4.3.2: **56** / #2 / 214 (Artificial Analysis model page 2026-10-20)
- GDPval-AA v2.1: **1844** Elo (see above)
- GPQA Diamond: no verified public score found
- HLE: see Humanity's Last Exam above
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Terminal-Bench 4.0: **70.6%** (see above)
- CursorBench 4.0: **55.5%** (see above)
- FrontierCode 1.1: **46.2% Max** / **52.1% Xhigh** (see above)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported for MRCR / RULER / GraphWalks at 1M window

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** Terminal-Bench 4.0 70.6% and CursorBench 55.5% show strong agentic terminal coding; capped by lack of SWE-Atlas / MCP-Atlas public numbers.
- **Reasoning: 68/100.** Humanity's Last Exam 64.5% with tools and Artificial Analysis Intelligence Index 56 indicate solid multidisciplinary reasoning; capped by missing GPQA Diamond / CritPt.
- **Context window: 85/100.** 1M total / 128K output verified; no measured long-context retrieval reported.
- **Multimodal: 35/100.** Image in / text out with vision capability; no audio/video, no multimodal output.
- **Coding: 72/100.** Terminal-Bench 70.6% and CursorBench 55.5% near Opus 57.8%; FrontierCode 46.2% Max limits score.
- **Cost efficiency: 62/100.** $2/$10 per 1M moderate pricing with 30%+ speed gain vs Sonnet 5; cache savings noted but above Haiku tier.
- **Overall Score: 68/100.** Mean of Tool 78, Reasoning 68, Context 85, Multimodal 35, Coding 72 = 67.6 → 68. Best fit for well-scoped coding/agents and knowledge work; not a top-tier long-horizon reasoning flagship.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
