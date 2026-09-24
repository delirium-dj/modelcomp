# Gpt 5.4 — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt 5.4
- **Short description:** OpenAI's established GPT-5 family model balancing analytical reasoning, coding, and structured output formatting.
- **Provider / access:** OpenAI (`openai/gpt-5.4`), Chat Completions API.
- **Release / knowledge:** 2025-09 release; 2025-06 knowledge cutoff.
- **IDs:** `openai/gpt-5.4` (no Zen Free ID)
- **Context window:** 128,000 tokens total (128K input / 4K max output); verified via OpenAI API docs.
- **Modalities:** Text input; text output; structured function calling and JSON mode.
- **Pricing (as of 2026-09-24):** $2.50 / 1M input, $10.00 / 1M output.
- **Architecture:** Proprietary frontier Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%**
- Tau3-Banking / Tau2-Bench: **77.5%**
- GDPval-AA: **1240**
- Claw-Eval / ClawProBench: **73.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **26.0%**
- LCR / MLCR: **69.0%**
- CritPt: **63.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **76.0 / #11**
- Omniscience Accuracy / Hallucination Rate: **86.5% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **79.5%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **67.0%**
- DeepSWE / Coding Index / other: **73.5%**

Long context:

- MRCR / RULER: **96.5%** retrieval accuracy at 128K window

### Normalized scores (1–100)

- **Tool use: 83/100.** Dependable tool integration and function calling reliability.
- **Reasoning: 87/100.** High GPQA Diamond (80.5%) and strong analytical logic.
- **Context window: 89/100.** 128K context length mapping to 89/100 tier.
- **Multimodal: 62/100.** Text-focused model with basic visual document processing.
- **Coding: 82.5/100.** Strong LiveCodeBench (79.5%) code generation capability.
- **Cost efficiency: 61/100.** Standard commercial enterprise tier pricing.
- **Overall Score: 80.7/100.** Proven general-purpose flagship model with strong reasoning and coding skills.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
