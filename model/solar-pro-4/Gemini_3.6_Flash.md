# Upstage Solar Pro 4 — findings by Gemini 3.6 Flash

- Source: Upstage/Solar Pro 4 (`upstage/solar-pro4`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Upstage Solar Pro 4
- **Short description:** Agent-first enterprise model by Upstage optimized for multi-step tool use, long-context reasoning (524K context window), and high-throughput coding tasks.
- **Provider / access:** Upstage API & OpenRouter (`upstage/solar-pro4` / `https://openrouter.ai/api/v1/chat/completions`).
- **Release / knowledge:** 2026-08-10 release; knowledge cutoff mid-2026.
- **IDs:** `upstage/solar-pro4`
- **Context window:** 524,288 tokens (524K input / 131,072 max output tokens — verified via OpenRouter specifications).
- **Modalities:** Text in, text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.30 / 1M input tokens, $1.20 / 1M output tokens ($0.06 / 1M cached input tokens).
- **Architecture:** Proprietary dense architecture.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (Upstage benchmark audit)
- Tau3-Banking / Tau2-Bench: **23.0%** ($\tau^3$-Banking multi-turn tool-use harness)
- GDPval-AA: **38.8** (GDPval-AA v2 work deliverable evaluation)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Upstage technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **71.0%** (AA-LCR long-context reasoning)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **87.8%** (LiveCodeBench September 2026 leaderboard ranking)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 524,288 token context window with 71.0% score on AA-LCR long-context reasoning harness.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 64/100.** Terminal-Bench 2.1 at 57.0% and $\tau^3$-Banking at 23.0%; strong function calling efficiency.
- **Reasoning: 86/100.** GPQA Diamond at 89.0% and AA-LCR at 71.0% show solid reasoning ability.
- **Context window: 85/100.** 524,288 tokens context window mapped to 85/100 tier.
- **Multimodal: 15/100.** Text-only model (15/100 default for text-only).
- **Coding: 88/100.** LiveCodeBench score of 87.8% demonstrates top-tier code synthesis capabilities.
- **Cost efficiency: 92/100.** Affordable pricing at $0.30/1M input and $1.20/1M output with prompt caching.
- **Overall Score: 68/100.** Half-up mean of the five quality dims (64, 86, 85, 15, 88); highly effective agentic coding workhorse model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
