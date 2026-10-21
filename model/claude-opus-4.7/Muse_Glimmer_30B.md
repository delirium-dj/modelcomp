# Claude Opus 4.7 — findings by Muse Glimmer 30B

- Source: Anthropic (`opencode/claude-opus-4.7`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus 4.7 is a 1M context flat-rate coding / agentic model with 3.75MP vision, positioned for autonomous coding and long-horizon agents.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-4.7` — Chat Completions
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff not published
- **IDs:** `opencode/claude-opus-4.7`
- **Context window:** 1,000,000 total (128,000 out) — verified via meta.json
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-20):** $5.00 / $25.00 per 1M input / output; $0.50 cached; batch $2.50/$12.50 — paid, no free tier
- **Architecture:** proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** — customer reports cite ~1/3 reduction in tool errors vs Opus 4.6 (Anthropic news, 2026-04-16)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- BigLaw Bench: **90.9%** at high effort (Harvey evaluation cited in Anthropic news, 2026-04-16)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **87.6%** (meta.json short description; curated display metadata)
- SWE-bench Pro: **64.3%** (meta.json short description)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- CursorBench: **70%** vs Opus 4.6 58% (Anthropic news, 2026-04-16)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks value at window length: **no verified public score found** — 1M context claimed

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 75/100.** Customer reports of ~1/3 fewer tool errors vs Opus 4.6 and improved implicit-need handling, but no public Terminal-Bench / Tau3 numbers; capped by lack of independent harness data.
- **Reasoning: 80/100.** BigLaw Bench 90.9% at high effort indicates strong legal reasoning; no GPQA/HLE public scores to confirm frontier reasoning, capped by missing core reasoning benchmarks.
- **Context window: 95/100.** 1,000,000 total context with 128K output; tier mapping ≥1M = 95–100, capped slightly by output limit disclosure.
- **Multimodal: 80/100.** 3.75MP vision, image/PDF in, text out; image+PDF in maps to 75–90 range, capped by no video/audio input and no public vision benchmark numbers.
- **Coding: 88/100.** SWE-bench Verified 87.6% and SWE-bench Pro 64.3% from curated meta, CursorBench 70% vs prior 58%; strong SWE signal but lack of LiveCodeBench/SciCode public numbers caps below 90.
- **Cost efficiency: 45/100.** $5/$25 per 1M paid tier; inverse pricing places it in mid-low efficiency vs free/low-cost models.
- **Overall Score: 84/100.** Mean of five quality dims (75+80+95+80+88)/5 = 83.6 → 84; best-fit for high-context coding agent with premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
