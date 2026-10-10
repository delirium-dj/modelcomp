# OpenAI GPT-6 Luna — findings by Gemini 2.5 Pro

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (Paid API tier)
- **Short description:** GPT-6 Luna is OpenAI's fast, cost-efficient model in the GPT-6 series designed for high-volume workloads, writing, summarization, and computer-use tasks. It succeeds GPT-5.6 Luna.
- **Provider / access:** Hosted on Microsoft Foundry / OpenRouter / OpenAI API (`openai/gpt-6-luna`). Supports Chat Completions and Responses API.
- **Release / knowledge:** 2026-09-22 release.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 total tokens (128k output limit) — verified via Microsoft Foundry and provider catalogs.
- **Modalities:** Text and image input, text output; reasoning effort supported; tool calls and JSON mode supported.
- **Pricing (as of 2026-10-09):** $0.10 / $1M input tokens, $0.50 / $1M output tokens (Paid API).
- **Architecture:** Proprietary MoE/dense hybrid (OpenAI GPT-6 generation architecture).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **12.6%** (Artificial Analysis / GPT-6 Luna Max variant)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **46.6%** (Artificial Analysis / GPT-6 Luna Max)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **38.5%** (Artificial Analysis / GPT-6 Luna Max)
- LCR / MLCR: **83.3%** (Artificial Analysis / AA-LCR Max variant)
- CritPt: **19.4%** (Artificial Analysis / GPT-6 Luna Max)
- Artificial Analysis Intelligence Index / BenchLM overall: **38.1 / #8** (Artificial Analysis Intelligence Index for Max variant)
- Omniscience Accuracy / Hallucination Rate: **43.8% / 23.3%** (Artificial Analysis / GPT-6 Luna Max)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **43.1%** (Artificial Analysis / Non-reasoning variant)
- Vibe Code Bench: **81.6%** (Vals AI / v1.1)
- DeepSWE / Coding Index / other: **42.6%** (Vals AI Code Migration)

Long context:

- AA-LCR: **83.3%** at 1.1M window length (Artificial Analysis)

### Normalized scores (1-100)

- **Tool use: 65/100.** Terminal-Bench 4.0 score reaches 12.6% on Max reasoning profile and GDPval-AA reaches 46.6%; limited by lower autonomous CLI benchmark placements.
- **Reasoning: 78/100.** Artificial Analysis Intelligence Index stands at 38.1 (better than 88% of models compared), with HLE at 38.5% and CritPt at 19.4% on high-effort configurations.
- **Context window: 95/100.** Verified total context window of 1,050,000 tokens with strong long-context retrieval (AA-LCR 83.3%).
- **Multimodal: 75/100.** Supports text and image inputs with text outputs under flexible API setups.
- **Coding: 72/100.** Vibe Code Bench v1.1 scores 81.6% and Vals AI Code Migration hits 42.6%, showcasing high utility for practical code tasks.
- **Cost efficiency: 98/100.** Priced at an aggressive $0.10 per million input tokens and $0.50 per million output tokens, delivering high throughput at low economical cost.
- **Overall Score: 77.0/100.** An exceptionally responsive, cost-effective workhorse model offering high context capacity and robust reasoning for high-volume enterprise workflows.

---

## Signature

- Provided by: **Gemini (google/gemini-2.5-pro)** — 2026-10-10
- Method: Public web search across official provider catalogs, OpenRouter specs, and Artificial Analysis benchmarking metrics; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol.md`, using the same headings.
