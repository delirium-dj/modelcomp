# GPT-5.1 — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's mid-cycle flagship update in the GPT-5 generation, offering refined multi-step reasoning, improved agent persistence, and multimodal input.
- **Provider / access:** OpenAI API (`gpt-5.1`) / OpenCode Zen API (`openai/gpt-5.1`), Responses and Chat completions APIs.
- **Release / knowledge:** 2026-04-15 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.1`
- **Context window:** 500,000 tokens (500k context window; 32k max output tokens).
- **Modalities:** Text, image, and audio input; text and structured JSON output; function calling, code interpreter, and web search tools.
- **Pricing (as of 2026-10-02):** $1.80 / $7.20 per 1M tokens ($0.45 cached input).
- **Architecture:** Frontier Mixture-of-Experts (MoE) transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **47.5%**
- Tau3-Banking / Tau2-Bench: **80.4%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **76.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.2%**
- HLE: **32.8%**
- LCR / MLCR: **78.5%**
- CritPt: **46.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.0 / #9**
- Omniscience Accuracy / Hallucination Rate: **85.4% / 7.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **69.2%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **76.0%**
- DeepSWE / Coding Index / other: **80.5**

Long context:

- MRCR at 500K: **93.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 87/100.** Robust tool calling and agentic task execution (Tau2-Bench 80.4%, Terminal-Bench 47.5%).
- **Reasoning: 88/100.** High-level general reasoning and math capability (GPQA Diamond 71.2%, Intelligence Index 89.0).
- **Context window: 88/100.** 500K context window with 93.0% retrieval consistency.
- **Multimodal: 82/100.** Native text, image, and audio stream input comprehension.
- **Coding: 88/100.** Strong software engineering performance across benchmarks (SWE-bench Verified 62.0%, LiveCodeBench 69.2%).
- **Cost efficiency: 76/100.** Balanced pricing for a frontier model at $1.80/$7.20 per 1M tokens.
- **Overall Score: 87/100.** Mean of the five non-cost quality dimensions (87+88+88+82+88)/5 = 86.6 → 87; well-rounded frontier workhorse for general reasoning and software workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
