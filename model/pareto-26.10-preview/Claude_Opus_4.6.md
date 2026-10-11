# Pareto 26.10 Preview — findings by Claude Opus 4.6

- Source: Unbiased AI / Pareto 26.10 Preview
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's composite multimodal model (Oct 2026). A "blended system" that routes requests to or synthesizes outputs from multiple frontier models, optimizing for quality across coding, research, and agentic workflows.
- **Provider / access:** Unbiased AI API (`pareto`), OpenRouter, aimlapi. Chat Completions API.
- **Release / knowledge:** 2026-10-01 release (replaced previous Pareto version under same API string).
- **IDs:** `unbiased/pareto-26.10-preview` (OpenRouter: `unbiased/pareto`)
- **Context window:** 1,048,576 tokens (1M); 131,072 max output tokens.
- **Modalities:** Text, image in; text out; tool/function calling; prompt caching; vision.
- **Pricing (as of 2026-10-11):** $0.80 / $3.20 per 1M tokens (input/output). Cache read: $0.03/1M.
- **Architecture:** Composite/blended model system — not a single checkpoint but a multi-model synthesis pipeline. Proprietary (Unbiased AI).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (source: puter.com vendor report)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (source: puter.com vendor report)
- HLE (Humanity's Last Exam, text only): **49.9%** (source: puter.com vendor report)
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- DeepSWE v1.1: **69.9%** (source: puter.com vendor report)
- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1,048,576 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB 4.0 50.8% is moderate (ref: TB 4.0 is harder than 2.1; 50% = mid-70s range). Composite architecture may introduce latency for agentic loops. Missing GDPval/Tau3 data.
- **Reasoning: 90/100.** GPQA Diamond 92.4% is near-frontier. HLE 49.9% is very strong (ref: 45%+ = 90+ range). Composite synthesis likely aggregates best reasoning across underlying models.
- **Context window: 93/100.** 1M verified with 131K output. Production-grade context. Composite routing may handle long context differently across underlying models.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic vision capability = 50–60 range.
- **Coding: 83/100.** DeepSWE v1.1 69.9% is strong (ref: 65–75% = 82–88 range). Composite approach likely leverages strongest coding model in pipeline. Missing SWE-bench Verified/LiveCodeBench data.
- **Cost efficiency: 90/100.** $0.80/$3.20 is very competitive for composite frontier performance. Cache read at $0.03 is excellent. Good value given multi-model synthesis.
- **Overall Score: 79/100.** Mean of (76 + 90 + 93 + 55 + 83) / 5 = 79.4, rounded to 79. Innovative composite model with strong reasoning; constrained by moderate tool use and limited multimodal coverage.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (puter.com, openrouter.ai, benchlm.ai, aimlapi.com, nano-gpt.com, orcarouter.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
