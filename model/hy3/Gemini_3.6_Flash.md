# Tencent Hy3 — findings by Gemini 3.6 Flash

- Source: Tencent/Hy3 (`tencent/hy3`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent Hy3 (Hunyuan 3)
- **Short description:** 295B-parameter open-weights Mixture-of-Experts (MoE) flagship model by Tencent designed for reasoning, agentic workflows, and long-context processing.
- **Provider / access:** Tencent Cloud API & OpenRouter (`tencent/hy3` / `https://openrouter.ai/api/v1/chat/completions`).
- **Release / knowledge:** 2026-07-06 official release; knowledge cutoff early 2026.
- **IDs:** `tencent/hy3`
- **Context window:** 262,144 tokens (262K input / 8192 max output tokens — verified via OpenRouter specifications).
- **Modalities:** Text in, text out; reasoning yes (configurable CoT effort); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.14 / 1M input tokens, $0.58 / 1M output tokens (OpenRouter rates; Apache 2.0 open-weights license for self-hosting).
- **Architecture:** Sparse MoE (295B total parameters / 21B active parameters per token), open weights under Apache 2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **54.4%** (Tencent research report / OpenRouter benchmark harness)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (OpenRouter / Tencent technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **74.4%** (Tencent benchmark release)
- LiveCodeBench: **34.9%** (OpenRouter evaluation suite)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window with reported 100% retrieval accuracy on Needle-In-A-Haystack / RULER.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 62/100.** Terminal-Bench 2.1 at 54.4% shows solid agentic tool execution; lack of complex multi-harness agent benchmarks caps score at 62.
- **Reasoning: 84/100.** GPQA Diamond score of 87.2% demonstrates strong reasoning capabilities; lower zero-shot complex math scores cap score at 84.
- **Context window: 75/100.** 262,144 tokens context window mapped to 75/100 tier.
- **Multimodal: 15/100.** Text-only model (15/100 default for text-only).
- **Coding: 74/100.** SWE-bench Verified at 74.4% balanced against LiveCodeBench at 34.9%.
- **Cost efficiency: 95/100.** Extremely low pricing at $0.14/1M input and $0.58/1M output plus Apache 2.0 open weights.
- **Overall Score: 62/100.** Half-up mean of the five quality dims (62, 84, 75, 15, 74); highly economical open-weights model for reasoning and coding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
