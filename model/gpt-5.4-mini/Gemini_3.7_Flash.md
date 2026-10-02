# GPT-5.4 Mini — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's high-efficiency compact model in the GPT-5.4 family offering low latency, cost-effective multimodal reasoning, and robust tool execution.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`) / OpenCode Zen API (`openai/gpt-5.4-mini`), Responses and Chat completions APIs.
- **Release / knowledge:** 2026-08-01 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 256,000 tokens (256k context window; 16k max output tokens).
- **Modalities:** Text, image, and audio input; text and structured JSON output; function calling and tool use.
- **Pricing (as of 2026-10-02):** $0.25 / $1.00 per 1M tokens ($0.06 cached input).
- **Architecture:** Compact Mixture-of-Experts (MoE) transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **36.5%**
- Tau3-Banking / Tau2-Bench: **68.5%**
- GDPval-AA: **1140**
- Claw-Eval / ClawProBench: **63.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.0%**

Reasoning / knowledge:

- GPQA Diamond: **57.0%**
- HLE: **20.5%**
- LCR / MLCR: **67.5%**
- CritPt: **34.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **76.5 / #30**
- Omniscience Accuracy / Hallucination Rate: **79.0% / 10.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%**
- LiveCodeBench: **56.0%**
- SciCode / AA-SciCode: **35.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **68.5**

Long context:

- MRCR at 256K: **89.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 72/100.** Reliable tool calling and schema compliance (Tau2-Bench 68.5%, Terminal-Bench 36.5%).
- **Reasoning: 73/100.** Strong general and STEM reasoning for a mini model (GPQA Diamond 57.0%, Intelligence Index 76.5).
- **Context window: 80/100.** 256K context window with 89.0% retrieval consistency.
- **Multimodal: 78/100.** Native text, image, and audio input processing.
- **Coding: 75/100.** Good everyday programming performance (SWE-bench Verified 48.5%, LiveCodeBench 56.0%).
- **Cost efficiency: 92/100.** Highly competitive price point at $0.25/$1.00 per 1M tokens.
- **Overall Score: 76/100.** Mean of the five non-cost quality dimensions (72+73+80+78+75)/5 = 75.6 → 76; versatile lightweight worker for high-volume multimodal and agent workloads.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
