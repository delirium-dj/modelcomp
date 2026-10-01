# GPT-5.6 Luna — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.6-luna`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's high-throughput, cost-sensitive GPT-5.6 model variant featuring 1.05M context window, fast inference latency, and competitive developer API pricing.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-luna`).
- **Release / knowledge:** 2026-06-12 release; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.6-luna` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens (1.05M) input / 128,000 (128K) output — verified via OpenAI API specifications.
- **Modalities:** Text, image in; text out; tool integration, structured JSON output mode.
- **Pricing (as of 2026-09-19):** Paid $0.20 / 1M input, $1.20 / 1M output tokens; high-volume enterprise discount available.
- **Architecture:** Proprietary OpenAI efficient Sparse Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.5%**
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1710 Elo**
- Claw-Eval / ClawProBench: **75.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.8%**

Reasoning / knowledge:

- GPQA Diamond: **65.2%**
- HLE: **18.0%**
- LCR / MLCR: **77.5%**
- CritPt: **70.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **129 / #11**
- Omniscience Accuracy / Hallucination Rate: **83.0% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.5%**
- LiveCodeBench: **67.5%**
- SciCode / AA-SciCode: **63.0%**
- Vibe Code Bench: **76.0%**
- DeepSWE / Coding Index / other: **74.0**

Long context:

- MRCR / RULER / GraphWalks value at window length: **98.6% retrieval accuracy across 1.05M tokens**

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and reliable function calling and agent task execution.
- **Reasoning: 76/100.** Solid general reasoning capability for daily enterprise tasks.
- **Context window: 85/100.** 1.05M token context tier with reliable retrieval.
- **Multimodal: 72/100.** Dependable vision understanding; text-only output caps score.
- **Coding: 80/100.** Strong code generation, refactoring, and bug detection capabilities.
- **Cost efficiency: 92/100.** Excellent pricing ($0.20/$1.20 per 1M tokens) for a major API provider.
- **Overall Score: 78.2/100.** Mean of the five quality dimensions; highly economical workhorse model for production scale.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
