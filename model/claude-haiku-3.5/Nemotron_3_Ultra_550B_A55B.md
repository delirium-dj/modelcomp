# Claude 3.5 Haiku — findings by Nemotron 3 Ultra 550B A55B

> Source: Anthropic (`claude-3-5-haiku-20241022`)
> Date: 2026-10-29 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's fastest and most cost-effective model in the 3.5 generation, optimized for speed, coding, and agentic tool use. Positioned below Sonnet 3.5 on general reasoning but outperforms Opus 3 on agentic coding benchmarks.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`), AWS Bedrock, Google Vertex AI. Chat Completions API.
- **Release / knowledge:** 2024-10-22 release; knowledge cutoff April 2024.
- **IDs:** `anthropic/claude-3-5-haiku-20241022` (no free tier on OpenCode Zen)
- **Context window:** 200,000 tokens total (input + output combined); max output 8,192 tokens (verified via Anthropic docs).
- **Modalities:** Text in, text out; image in (vision); no audio/video/PDF native; reasoning (CoT) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-29):** $0.25 / 1M input tokens; $1.25 / 1M output tokens; cached input $0.03 / 1M tokens (Anthropic API). Paid tier only.
- **Architecture:** Proprietary dense transformer; parameter count undisclosed (estimated 10–20B class); not open-weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (AI Tools Review deep dive on system card; below Opus 3's ~50%, Sonnet 3.5's ~59%)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **~54 / rank ~45** (Artificial Analysis; estimated from percentile)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (Anthropic did not publish SWE-bench for Haiku 3.5)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **HumanEval 88.1%** (llm-stats.com, pass@1; ranks ~17/39 on DataLearner leaderboard); **MBPP 85.6%** (DataLearner); **AIME 2025: no verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** at 200K window

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`. One-sentence justification citing key evidence; cap stated.

- **Tool use: 55/100.** No Terminal-Bench, Tau, or agentic suite scores published; capped by absence of verified agentic tool-use benchmarks despite strong tool-calling API support.
- **Reasoning: 48/100.** GPQA Diamond 41.6% is the sole verified graduate-reasoning score; below Sonnet 3.5 (59%) and Opus 3 (50%); capped by single-benchmark evidence.
- **Context window: 72/100.** 200K tokens places it in the 128K–256K tier (mapping: 72); no long-context retrieval benchmarks (MRCR/RULER) to validate effective use.
- **Multimodal: 65/100.** Vision input supported (image in, text out); no audio/video/PDF; capped by single-modality input beyond text.
- **Coding: 70/100.** HumanEval 88.1% and MBPP 85.6% are strong snippet-coding signals; capped by zero SWE-bench / real-repo verification (no agentic coding suite published).
- **Cost efficiency: 85/100.** $0.25/$1.25 per 1M tokens is very cheap for this capability tier; only free models score higher.
- **Overall Score: 62/100.** Mean of (55 + 48 + 72 + 65 + 70) / 5 = 62.0 → half-up 62. Best fit: fast, cheap coding assistant for well-scoped tasks; not a general reasoning or agentic workhorse.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-29
- Method: public internet research (Anthropic blog, Artificial Analysis, BenchLM, llm-stats.com, DataLearner, AI Tools Review, Sentisight, Reddit community reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_3.5_Haiku.md`, using the same headings.