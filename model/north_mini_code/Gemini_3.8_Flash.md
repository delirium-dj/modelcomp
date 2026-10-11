# North Mini Code — findings by Gemini 3.8 Flash

- Source: Cohere (`cohere/north-mini-code`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's open-weights 30B total / 3B active sparse mixture-of-experts reasoning model for software engineering released under the Apache 2.0 license, optimized for sub-second generation latency, terminal code refactoring, and cost-free developer tier usage.
- **Provider / access:** Cohere API (`north-mini-code`), OpenCode Zen Free tier (`opencode/north_mini_code`), Hugging Face open weights.
- **Release / knowledge:** 2026-07-15 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/north_mini_code`. Free tier available.
- **Context window:** 256,000 tokens total (256K context window); max output 32,768 tokens.
- **Modalities:** Text in; text, code, structured JSON, and tool-calling output; integrated reasoning traces.
- **Pricing (as of 2026-07):** Free tier ($0.00 / 1M input and output tokens) on OpenCode Zen; Apache 2.0 open-weights license for local deployment.
- **Architecture:** 30B sparse Mixture-of-Experts (MoE) transformer with 3B active parameters per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.2%** (Cohere Technical Report, 2026)
- Tau2-Bench: **81.4%**
- GDPval-AA: **1,180** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **40.5%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%** (Artificial Analysis / Cohere, 2026)
- HLE: **18.0%** (Humanity's Last Exam without tools)
- LCR / MLCR: **71.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **33.5**
- Omniscience Accuracy / Hallucination Rate: **47% / 83%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.5%** (SWE-bench Verified) / **33.5%** (SWE-bench Pro)
- LiveCodeBench: **71.0%** pass@1
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **60.5%**

Long context:

- 256K context window evaluated across repository exploration with sub-second generation latency.

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and dependable tool execution evidenced by 81.4% on Tau2-Bench and 56.2% on Terminal-Bench 2.1.
- **Reasoning: 72/100.** Solid code-level logic and analytical reasoning with 74.0% on GPQA Diamond and 33.5 on the AA Intelligence Index.
- **Context window: 75/100.** 256K context window accommodates typical multi-file refactoring and dependency exploration.
- **Multimodal: 15/100.** Text-only architecture without native image or video processing, receiving the standard baseline score.
- **Coding: 73/100.** Strong open-weights coding throughput reflected in 64.5% on SWE-bench Verified and 71.0% on LiveCodeBench.
- **Cost efficiency: 100/100.** Completely free tier ($0.00) on OpenCode Zen and freely deployable under Apache 2.0.
- **Overall Score: 61/100.** Agile, zero-cost open-weights coding specialist for local development and rapid refactoring, with overall score capped by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Cohere technical releases, Apache 2.0 weight documentation, and benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
