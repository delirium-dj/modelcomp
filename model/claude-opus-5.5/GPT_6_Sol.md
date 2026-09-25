# Claude Opus 5.5 — findings by ChatGPT 6 Sol

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (paid; no OpenCode Zen Free ID).
- **Short description:** Anthropic’s proprietary model for long-running agentic coding and knowledge work. OpenCode Zen serves the same model ID as a paid offering, not a Free variant.
- **Provider / access:** Claude API `claude-opus-5-5`; OpenCode Zen `opencode/claude-opus-5-5` through its Anthropic-compatible **Messages** endpoint, not a Chat Completions or Responses endpoint. Also listed on Amazon Bedrock as `anthropic.claude-opus-5-5`, and on Google Cloud and Microsoft Foundry as `claude-opus-5-5`.
- **Release / knowledge:** Released 2026-09-22; reliable-knowledge and training-data cutoffs: June 2026, with no exact cutoff day published.
- **IDs:** `anthropic/claude-opus-5-5`; `opencode/claude-opus-5-5` (paid). No Free ID exists for this model in Zen’s published list.
- **Context window:** 1M tokens total, including input and output; maximum output is 128K tokens in standard requests. Verified against Anthropic’s model specifications.
- **Modalities:** Text, images, and PDFs in; text out. Adaptive reasoning is always on; client- and server-side tools and JSON-schema structured outputs are supported. Tool calls use `auto` rather than forced `tool_choice`; native audio/video input and non-text output are not listed for this model.
- **Pricing (as of 2026-09-25):** Paid, per 1M tokens: $4 input, $20 output, $0.20 cache read, and $5 five-minute cache write on both Anthropic and Zen. Anthropic additionally lists $8 for a one-hour cache write. There is no Zen Free-tier privacy trade-off for this ID; Zen says Anthropic API requests are retained for 30 days.
- **Architecture:** Proprietary, closed weights. Total and active parameter counts, and whether it uses MoE, have not been disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.64%** (Vals AI, #1; _high_ effort, with server-side fallback). Counting fallback-assisted tasks as failures yields **79.77%**; Vals reports fallback use on 26 of 267 tasks.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1846 Elo** (Artificial Analysis v2.1, _max_ effort with default fallback).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** on **Toolathlon-Verified**, pass@1 (Anthropic system card as source-linked by BenchLM; _max_ effort). MCP-Atlas and SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **61.4%** (Artificial Analysis, no-tools evaluation, _max_ effort with default fallback); **67.7%** (Anthropic, _with tools_, _max_ effort). These are different harnesses, not interchangeable results.
- LCR / MLCR: **85%** on AA-LCR v1.1 (Artificial Analysis comparison table, rounded to whole percent; _max_ effort with default fallback). MLCR: no verified public score found.
- CritPt: **32%** (Artificial Analysis comparison table, rounded to whole percent; _max_ effort with default fallback).
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1** (Artificial Analysis Intelligence Index v4.3.2, _max_ effort with default fallback); **86.98 / #2 of 194** (BenchLM’s separately calculated, **estimated** public composite—not the methodology’s Overall Score).
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **89.9%** on SWE-bench Pro (Anthropic system card as source-linked by BenchLM; vendor-reported). SWE-bench Verified: no verified public score found.
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis SciCode evaluation, _max_ effort with default fallback).
- Vibe Code Bench: **90.29%** (Vals AI, #2, _max_ effort with fallback); **83.34%** when fallback-assisted tasks count as failures.
- DeepSWE / Coding Index / other: **74.2%** DeepSWE (Anthropic system card as source-linked by BenchLM, vendor-reported); Terminal-Bench 4.0: **59.6%** (Artificial Analysis, _max_ effort with default fallback) versus **66.4%** (Anthropic, _xhigh_ effort, its reported setup). Do not compare those figures as identical-harness runs.

Long context:

- no long-context retrieval reported for MRCR, RULER, or GraphWalks at a stated window length. The **85%** AA-LCR v1.1 result above measures long-context _reasoning_, not a verified retrieval rate at 512K tokens or beyond.

### Normalized scores (1-100)

- **Tool use: 92/100.** Vals’ leading Terminal-Bench 2.1 result and the 1846 GDPval-AA Elo support a frontier score; fallback dependence and the absence of a verified Tau3 result cap it.
- **Reasoning: 94/100.** Strong independently measured HLE and AA-LCR results; the 32% CritPt result and missing GPQA score temper the rating.
- **Context window: 96/100.** Anthropic verifies the 1M-token total-context tier, but no verified retrieval result at 512K tokens or beyond supports the tier’s maximum score.
- **Multimodal: 82/100.** Image and PDF input place it in the PDF-input tier; output is text only, with no listed native audio/video input.
- **Coding: 94/100.** DeepSWE and SciCode clear the stated frontier thresholds, reinforced by independent terminal results; differing harnesses and fallback-assisted runs cap confidence.
- **Cost efficiency: 55/100.** Scored independently at the paid $4/$20 per-1M-token tier, below the methodology’s approximate $3/$15 reference point.
- **Overall Score: 91.6/100.** Half-up rounded mean of the five non-cost dimensions: (92 + 94 + 96 + 82 + 94) / 5. Best fit: demanding coding agents and knowledge-work tasks where capability matters more than token price.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-6-sol)** — 2026-09-25
- Method: Fresh public-source research across Anthropic documentation and evaluations, Artificial Analysis, Vals AI, OpenCode Zen, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
