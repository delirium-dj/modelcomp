# GPT-6 Astra — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship frontier model above GPT-5.6 Sol with 1.05M context window, engineered for complex multi-step reasoning and deep tool integration.
- **Provider / access:** OpenAI (`openai/gpt-6-astra`), Responses API & Chat Completions API.
- **Release / knowledge:** 2026-04 release; 2026-01 knowledge cutoff.
- **IDs:** `openai/gpt-6-astra` (no Zen Free ID)
- **Context window:** 1,050,000 tokens total (1M input / 128K max output); verified via vendor documentation.
- **Modalities:** Text and image input; text output; structured reasoning and function calling.
- **Pricing (as of 2026-09-18):** $10.00 / 1M input, $50.00 / 1M output (Paid tier).
- **Architecture:** Proprietary multi-agent MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.4%**
- Tau3-Banking / Tau2-Bench: **88.6%**
- GDPval-AA: **1480**
- Claw-Eval / ClawProBench: **86.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.2%**
- HLE: **38.5%**
- LCR / MLCR: **76.0%**
- CritPt: **72.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.5 / #2**
- Omniscience Accuracy / Hallucination Rate: **91.2% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.8%**
- LiveCodeBench: **91.5%**
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **82.0%**
- DeepSWE / Coding Index / other: **86.4%**

Long context:

- MRCR / RULER: **98.6%** retrieval accuracy across 1M context window

### Normalized scores (1–100)

- **Tool use: 94/100.** Industry-leading function calling and terminal execution performance.
- **Reasoning: 96/100.** Top-tier GPQA Diamond and HLE scores representing state-of-the-art reasoning.
- **Context window: 90/100.** 1.05M token context window mapping to 90/100 tier.
- **Multimodal: 75/100.** Advanced vision and image processing capabilities.
- **Coding: 93/100.** Exceptional SWE-bench Verified score (82.8%) and LiveCodeBench performance.
- **Cost efficiency: 33/100.** Premium frontier pricing ($10/$50 per 1M tokens).
- **Overall Score: 89.6/100.** Exceptional frontier reasoning and agentic model for demanding enterprise applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations.
