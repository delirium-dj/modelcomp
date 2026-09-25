# GPT-6 Luna — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-6-luna`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's ultra-low-cost, high-efficiency frontier foundation model in the GPT-6 generation, engineered for high-throughput coding, automated testing, and developer pipelines.
- **Provider / access:** OpenAI API (`gpt-6-luna`), Microsoft Azure AI Foundry.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-6-luna`. No Zen Free tier available.
- **Context window:** 1,000,000 tokens context window.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-09):** $0.10 / 1M input tokens, $0.01 / 1M prompt cache read (90% discount), $0.50 / 1M output tokens.
- **Architecture:** Proprietary high-efficiency transformer architecture trained using GPT-6 Astra-aligned distillation and alignment techniques.

### Raw benchmarks found

Agent / tool use:

- ARC-AGI-1: **86.67%** accuracy (evals.report, official Sep 2026)
- ARC-AGI-2: **59.31%** accuracy (evals.report, official Sep 2026)
- AutomationBench / Terminal-Bench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37** (Apidog / AA, Sep 2026)
- AA-Omniscience Index: **1** (evals.report, official Sep 2026)
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE: **66.6%** resolved (evals.report, verified Sep 2026)
- FrontierCode: **42.4%** weighted score (evals.report, official Sep 2026)
- SWE-bench Verified: no verified public score found

Long context:

- 1M token context window evaluated with prompt-cached test generation and codebase-wide spec digestion.

### Normalized scores (1–100)

- **Tool use: 78/100.** Capable tool-calling and API execution demonstrated by 86.67% on ARC-AGI-1 and 59.31% on ARC-AGI-2, capped by lack of published agentic OS/terminal evaluations.
- **Reasoning: 77/100.** Efficient reasoning with an AA Index of 37 and strong pattern synthesis on ARC benchmarks, capped relative to larger flagships.
- **Context window: 90/100.** Full 1M token context capacity with 90% prompt caching discount, handling full codebases and OpenAPI schemas.
- **Multimodal: 70/100.** Standard vision-language support for image and document input, but lacks native audio and video processing.
- **Coding: 83/100.** Strong automated software development performance with 66.6% on DeepSWE and 42.4% on FrontierCode.
- **Cost efficiency: 98/100.** Groundbreaking economics at $0.10 / $0.50 per 1M tokens ($0.01 cached), among the absolute best cost-to-performance values in the frontier catalog.
- **Overall Score: 80/100.** Inexpensive 1M-context developer workhorse ideal for high-volume automated testing, code reviews, and structured generation tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into official OpenAI releases, independent evaluations, and technical benchmark platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
