# GPT-5.6 Sol — findings by Gemini 2.5 Flash

- Source: OpenAI / `openai/gpt-5.6-sol`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (No direct free-tier access; served as flagship tier in paid ChatGPT/Codex plans and API)
- **Short description:** OpenAI's flagship GPT-5.6 series reasoning model designed for complex multi-step coding, scientific research, and agentic workflows. Succeeded GPT-5.5 with enhanced persistence, command-line proficiency, and tool-use autonomy.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, `gpt-5.6`), OpenCode Zen (`opencode/openai/gpt-5.6-sol`), Microsoft Azure (`gpt-5.6-sol`), OpenRouter (`openai/gpt-5.6-sol`). Uses Chat Completions and Responses API.
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.6-sol` (no free-tier ID exists on OpenCode Zen)
- **Context window:** 1,050,000 total tokens (1,050K in / 128K max out) — verified via OpenAI API model specs and Artificial Analysis.
- **Modalities:** Text, image, document/PDF in; text out; configurable reasoning (effort levels: none, low, medium, high, xhigh, max); function/tool calling; JSON / structured outputs.
- **Pricing (as of 2026-09-25):** $4.00 / 1M input tokens ($0.40 cached), $20.00 / 1M output tokens; prompts >272K input tokens billed at 2x input rate. No free tier available.
- **Architecture:** Proprietary Mixture-of-Experts (MoE) with configurable test-time reasoning compute.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI official max reasoning / Artificial Analysis rank #1)
- Tau3-Banking / Tau2-Bench: **81.0%** ($\tau^2$-Bench Telecom at medium effort via Artificial Analysis)
- GDPval-AA: **49.0%** (Artificial Analysis high effort)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Artificial Analysis max effort)
- HLE: **42.2%** (Artificial Analysis medium effort) / **46.0%** (high effort)
- LCR / MLCR: **81.7%** (AA-LCR high effort)
- CritPt: **32.3%** (Artificial Analysis rank #1)
- Artificial Analysis Intelligence Index / BenchLM overall: **47.0 / #1** (Artificial Analysis max effort index); **80.4 / #5** on BenchLM overall
- Omniscience Accuracy / Hallucination Rate: **59.4% / 92.2%** (59.4% accuracy, 7.8% non-hallucination rate on AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: **64.6%** (SWE-bench Pro)
- LiveCodeBench: **56.5%** (vals.ai run, provider default)
- SciCode / AA-SciCode: **57.8%** (Artificial Analysis high effort)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **77.4** (Artificial Analysis Coding Index) / **73.0%** (DeepSWE long-horizon)

Long context:

- 1,050,000 tokens total limit; 81.7% on AA-LCR (Long Context Retrieval)

### Normalized scores (1-100)

- **Tool use: 95/100.** Reaches frontier status with 88.8% on Terminal-Bench 2.1, 81.0% on Tau2-Bench, and top performance in agentic workflows. Capped below 100 due to GDPval-AA score of 49.0%.
- **Reasoning: 92/100.** Scores 94.1% on GPQA Diamond (max effort) and 42.2% on HLE, with an Artificial Analysis Intelligence Index of 47.0.
- **Context window: 96/100.** Mapped to >=1M tier (1,050,000 tokens total) with 81.7% long-context retrieval score on AA-LCR.
- **Multimodal: 75/100.** Supports text, image, and PDF/document inputs; capped at 75 due to lack of native audio processing and non-text output streams.
- **Coding: 88/100.** Strong coding suite featuring 73.0% on DeepSWE, 88.8% on Terminal-Bench 2.1, and 77.4 on AA Coding Index; pulled down by a lower 56.5% score on LiveCodeBench and 64.6% on SWE-bench Pro.
- **Cost efficiency: 60/100.** Priced at $4.00 / $20.00 per 1M tokens ($8.00 / $30.00 for context >272K), placing it directly in the $3/$15 - $5/$20 tier (~60/100).
- **Overall Score: 89.2/100.** Half-up rounded mean of five non-cost dimensions $(95 + 92 + 96 + 75 + 88) / 5 = 89.2$. Best fit for high-stakes agentic coding, command-line operations, and complex multi-step technical research.

---

## Signature

- Provided by: **Gemini (google/gemini-2.5-flash)** — 2026-09-25
- Method: Public internet research across Artificial Analysis, OpenAI launch publications, OpenRouter, and independent benchmark trackers; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
