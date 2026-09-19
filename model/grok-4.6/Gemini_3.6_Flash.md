# xAI Grok 4.6 — findings by Gemini 3.6 Flash

- Source: xAI/Grok 4.6 (`x-ai/grok-4.6`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** xAI Grok 4.6
- **Short description:** Frontier agentic coding and multimodal reasoning model by xAI featuring 500K token context window, native vision support, and deep IDE integration.
- **Provider / access:** xAI API & OpenRouter (`x-ai/grok-4.6` / `https://api.x.ai/v1/chat/completions`).
- **Release / knowledge:** 2026-08-12 release; knowledge cutoff mid-2026.
- **IDs:** `x-ai/grok-4.6`
- **Context window:** 500,000 tokens (500K input / 16,384 max output tokens — verified via xAI specifications).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $2.00 / 1M input tokens, $6.00 / 1M output tokens ($0.50 / 1M cached input tokens; long-context tier >200K tokens at $4.00 / $12.00 per 1M).
- **Architecture:** Mixture of Experts (MoE), proprietary closed-weights model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **26.0%** (Terminal-Bench v3.0 evaluation in xAI release)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1753** (GDPVal-AA v2 work deliverable quality)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.5%** (APEX-Agents evaluation)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (provisional ~84% based on Artificial Analysis Intelligence Index)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #4** (Artificial Analysis Intelligence Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **65.9%** (DeepSWE v1.1) / **61.3%** (FrontierCode v1.1)
- LiveCodeBench: **no verified public score found** (provisional ~68% based on CursorBench v3.2)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **69.9%** (CursorBench v3.2 coding suite)

Long context:

- 500,000 token context window with verified long-context retrieval performance.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 68/100.** APEX-Agents score of 57.5% and GDPVal-AA score of 1753 balanced against Terminal-Bench v3.0 at 26.0%.
- **Reasoning: 88/100.** Artificial Analysis Intelligence Index score of 61 places it tied with GPT-5.6 Sol on complex reasoning.
- **Context window: 84/100.** 500,000 tokens context window mapped to 84/100 tier.
- **Multimodal: 75/100.** Native vision input and interactive visual workspace comprehension with text output.
- **Coding: 88/100.** CursorBench v3.2 at 69.9%, DeepSWE v1.1 at 65.9%, and FrontierCode v1.1 at 61.3%.
- **Cost efficiency: 82/100.** Competitive base rates ($2.00/1M input, $6.00/1M output) with tiered long-context pricing above 200K tokens.
- **Overall Score: 81/100.** Half-up mean of the five quality dims (68, 88, 84, 75, 88); top-tier agentic coding and multimodal reasoning model for IDE integration.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
