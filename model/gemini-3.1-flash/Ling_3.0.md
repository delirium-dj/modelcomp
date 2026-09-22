# Gemini 3.1 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemini-3.1-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.1 Flash
- **Short description:** Google's fast, cost-efficient Gemini 3-tier model with 1M-token context, designed for high-volume production workloads.
- **Provider / access:** Google — `gemini-3.1-flash` on Gemini API, Google AI Studio, Vertex AI
- **Release / knowledge:** April 20, 2026; knowledge cutoff Jan 2025
- **IDs:** google/gemini-3.1-flash
- **Context window:** 1,000,000 tokens
- **Modalities:** Text and image in; text out (code support; no native audio/video output)
- **Pricing (as of 2026-09-23):** $0.25/M input tokens, $1.50/M output tokens (Google AI Studio); batch at $0.125/$0.75
- **Architecture:** Sparse mixture-of-experts (Gemini family); parameter counts undisclosed; 1M context with configurable thinking budget

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **34.1%** (third-party benchmarklist.com, thinking mode high)
- Terminal-Bench Hard: **24.2%** (Artificial Analysis)
- MCP Atlas: **57.1%** (third-party)
- Tool-use accuracy (llmdb.app): **86/100** (vendor-reported)

Reasoning / knowledge:
- GPQA Diamond: **60.5%** (llmdb.app, vendor-reported)
- MMLU-Pro: **86.8%** (llmdb.app)
- MATH: **78.2%** (llmdb.app)
- Humanity's Last Exam: **16.0%** (Google model card, no tools)
- MMMLU: **88.9%** (Google model card)

Coding:
- LiveCodeBench: **72.0%** (Google model card)
- HumanEval: **88.5%** (llmdb.app)
- SWE-bench: Not officially published; third-party estimates ~35% (UseRightAI)

Long context:
- MRCR v2 (128K): **60.1%** (Google model card)
- MRCR v2 (1M): **12.3%** (Google model card; recall degrades at extreme context)

### Normalized scores (1-100)
- **Tool use: 73/100.** Tool-use accuracy at 86/100 (vendor-reported) and MCP Atlas at 57.1% show mixed agentic capability; Terminal-Bench 2.1 at 34.1% is below the frontier agentic tier; however, the model supports function calling and structured output reliably for short loops.
- **Reasoning: 79/100.** GPQA Diamond at 60.5% is moderate for the tier; MMLU-Pro at 86.8% and MATH at 78.2% show strong general knowledge and math reasoning; HLE at 16.0% is low for frontier but appropriate for a Flash-tier model; LiveCodeBench at 72.0% confirms adequate coding reasoning.
- **Context window: 95/100.** Full 1M-token context window is a standout feature for this price tier; however, long-context recall degrades significantly beyond 128K (MRCR v2 drops from 60.1% at 128K to 12.3% at 1M).
- **Multimodal: 76/100.** Text and image input supported; no native audio/video output; MMMU-Pro 76.8% (from related Flash-Lite model) suggests solid but not leading multimodal capability; image understanding confirmed.
- **Coding: 78/100.** LiveCodeBench at 72.0% and HumanEval at 88.5% indicate solid coding reasoning; SWE-bench not officially published; the model is positioned for production coding tasks rather than frontier coding benchmarks.
- **Cost efficiency: 85/100.** At $0.25/$1.50 per Mtok, among the most cost-efficient reasoning-capable models; batch pricing at $0.125/$0.75 further reduces cost; excellent price-to-intelligence ratio for the tier.
- **Overall Score: 80/100.** Strong context (95), good reasoning (79), adequate coding (78), and low cost (85) combine with moderate tool use (73) and multimodal (76); cost efficiency excluded from Overall per methodology.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemini-3.1-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-3.1-flash/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
