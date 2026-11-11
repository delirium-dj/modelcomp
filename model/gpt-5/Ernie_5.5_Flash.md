# GPT-5 — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5 (`gpt-5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** The original GPT-5 workhorse (released 2025-08-07) for reasoning, coding, writing and tool workflows — the model that opened the GPT-5 generation, now five generations old.
- **Provider / access:** OpenAI API/Responses (`gpt-5`), Azure OpenAI, plus ~30 gateway routes (FastRouter, AI/ML API, LLM Gateway, Vercel, Prime, LowRouter).
- **Release / knowledge:** 2025-08-07; knowledge cutoff 2024-09-30 (models.dev).
- **IDs:** `gpt-5`, `openai/gpt-5`, `azure/gpt-5`, `opencode/gpt-5`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $10.00 per 1M input/output; cache read $0.125.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM has no profile for this exact ID (404); the rows below are third-party/independent measurements labelled with their source.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows found for GPT-5 (2025-08)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- AIME 2025: **99.6%** (independent benchmark summary, binaryverseai)
- Artificial Analysis Intelligence Index: **68** (AA, high reasoning effort; MMLU-Pro, GPQA Diamond, HLE, LiveCodeBench, SciCode, AIME, IFBench, AA-LCR composite)
- HLE / GPQA Diamond / ARC-AGI: no verified public rows found in the sources reached

Coding:

- SWE-bench Verified: **74.9%** (independent benchmark summary, binaryverseai; consistent with OpenAI's launch-era reporting)
- LiveCodeBench / SWE-bench Pro / DeepSWE: no verified public rows found

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 60/100.** No terminal/OSWorld/Toolathlon row was found for this checkpoint; the score is a conservative inference from its family — low confidence.
- **Reasoning: 78/100.** AIME 2025 99.6% and an AA Intelligence Index of 68 were frontier for August 2025 but are now mid-pack; no HLE/GPQA figure was reached.
- **Context window: 85/100.** 400,000 tokens with 272,000 input — below the 1M frontier.
- **Multimodal: 65/100.** Text and image in only (no PDF); MMMU 84.2% was strong in 2025 per independent summaries.
- **Coding: 72/100.** SWE-bench Verified 74.9% was strong for 2025 but is now well behind the 85%+ frontier.
- **Cost efficiency: 82/100.** $1.25/$10 per 1M — mid, and above GPT-5.6 Luna by 6×.
- **Overall Score: 72.0/100.** Best fit for legacy GPT-5 integrations; every successor tier beats it at a lower price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, independent GPT-5 benchmark summaries, Artificial Analysis, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5 — OpenAI](https://openai.com/index/introducing-gpt-5/)
  - [Independent GPT-5 benchmarks — binaryverseai](https://binaryverseai.com/gpt-5-benchmarks/)
  - [GPT-5 benchmarks and analysis — Artificial Analysis](https://artificialanalysis.ai/articles/gpt-5-benchmarks-and-analysis)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5_v2.md`, using the same headings.