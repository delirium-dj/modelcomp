# Grok 4.3 — findings by Claude Opus 4.6

- Source: xAI (`grok-4.3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's reasoning-focused model released April 30, 2026. Features always-on reasoning, native vision, and tool use. Introduced file generation (PDF, XLSX, PPTX). Succeeded by Grok 4.5, 4.6, and 4.7.
- **Provider / access:** xAI API, OpenRouter, Amazon Bedrock.
- **Release / knowledge:** 2026-04-30 release; knowledge cutoff not publicly confirmed.
- **IDs:** `xai/grok-4.3`
- **Context window:** 1,000,000 tokens (verified via llm-stats.com, Amazon).
- **Modalities:** Text + image in; text out; always-on reasoning; tool use; file generation (PDF, XLSX, PPTX).
- **Pricing (as of 2026):** $1.25 / $2.50 per 1M tokens (input / output). Very competitive pricing.
- **Architecture:** Proprietary; parameter count undisclosed. Reasoning-first design.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1500 Elo** (Artificial Analysis).
- File generation: PDF, XLSX, PPTX directly in chat (xAI launch feature).
- Terminal-Bench: no verified public score found for 4.3 specifically.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- Always-on reasoning with improved instruction following vs. Grok 4.20 (xAI).
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.

Long context:

- 1,000,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA 1500 Elo is strong; file generation and tool use built in. Capped by missing Terminal-Bench/Tau data and newer models surpassing it.
- **Reasoning: 80/100.** Always-on reasoning with improved instruction following. Capped by absent GPQA/HLE data and being surpassed by Grok 4.5+.
- **Context window: 87/100.** 1M-token window matches top tier. No published retrieval benchmarks. Capped by unverified long-context quality.
- **Multimodal: 72/100.** Text + image input natively. File generation output (PDF, XLSX, PPTX) is unique. Text-only text output. Capped by no audio/video input.
- **Coding: 78/100.** Positioned as capable but superseded by Grok 4.5+ and competitor models. Capped by absent SWE-bench/LiveCodeBench data.
- **Cost efficiency: 85/100.** $1.25/$2.50 is very competitive pricing — half or less than many competitors' output pricing.
- **Overall Score: 80/100.** Mean of (82 + 80 + 87 + 72 + 78) / 5 = 79.8, rounded to 80. Solid mid-2026 model with excellent pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (xAI, Artificial Analysis, felloai.com, OpenRouter, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
