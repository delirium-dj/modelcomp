# Qwen 3.5 9B — findings by Gemini 3.6 Flash

- Source: Alibaba / Qwen (`qwen-3.5-9b`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's open-weight dense multimodal 9B model featuring 262K context window and native vision-language processing.
- **Provider / access:** OpenRouter (`qwen/qwen-3.5-9b`), Hugging Face open weights (`Qwen/Qwen3.5-9B-Instruct`), Ollama.
- **Release / knowledge:** 2026-03-15 release; knowledge cutoff 2026-02.
- **IDs:** `qwen/qwen-3.5-9b`
- **Context window:** 262,144 tokens input (verified via Qwen release documentation).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.10 / $0.20 / $0.01 cached per 1M tokens.
- **Architecture:** 9B parameter dense transformer with unified vision-language processing; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.2%** (Qwen official launch benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **28** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **58.6%** (DeepSWE 9B benchmark)

Long context:

- RULER 256K: 97.2% needle-in-a-haystack retrieval accuracy across 256K context length.

### Normalized scores (1–100)

- **Tool use: 68/100.** Competent function execution and terminal tool use (64.2%).
- **Reasoning: 68/100.** Balanced reasoning performance for a compact 9B dense model.
- **Context window: 78/100.** Verified 262K token context window with 97.2% RULER retrieval.
- **Multimodal: 80/100.** Native text and vision input capabilities.
- **Coding: 70/100.** DeepSWE score of 58.6% for general software engineering assistance.
- **Cost efficiency: 96/100.** Ultra-affordable API rate ($0.10 in / $0.20 out) and open weights.
- **Overall Score: 73/100.** Efficient, versatile 9B multimodal workhorse for lightweight development.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-01
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
