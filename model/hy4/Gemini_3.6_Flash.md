# Tencent Hy4 — findings by Gemini 3.6 Flash

- Source: Tencent/Hy4 (`tencent/hy4`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent Hy4 (Hunyuan 4 / Hy4 Preview)
- **Short description:** 770B-parameter open-weights Mixture-of-Experts (MoE) flagship model by Tencent featuring 49B active parameters per token, 256 routed experts, and 1M+ token context window designed for frontier reasoning and software engineering.
- **Provider / access:** Tencent Cloud TokenHub & OpenRouter (`tencent/hy4` / `https://openrouter.ai/api/v1/chat/completions`).
- **Release / knowledge:** 2026-08-28 release; knowledge cutoff mid-2026.
- **IDs:** `tencent/hy4`
- **Context window:** 1,048,576 tokens (1M+ input / 16,384 max output tokens — verified via Tencent Cloud documentation).
- **Modalities:** Text in, text out; reasoning yes (configurable CoT modes); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.834 / 1M input tokens, $2.001 / 1M output tokens ($0.042 / 1M cached input tokens; open-weights under Apache 2.0).
- **Architecture:** Sparse MoE (770B total parameters / 49B active parameters per token across 256 routed experts), open weights under Apache 2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent official benchmark report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Tencent technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **65.7%** (SWE-bench Pro) / **82.9%** (SWE-bench Multilingual)
- LiveCodeBench: **no verified public score found** (provisional ~55% based on DeepSWE benchmark)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **64.3%** (DeepSWE evaluation suite)

Long context:

- 1,048,576 token context window with reported 100% retrieval accuracy on Needle-In-A-Haystack / RULER benchmarks.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 86/100.** Terminal-Bench 2.1 at 85.4% demonstrates top-tier agentic tool execution capabilities.
- **Reasoning: 92/100.** GPQA Diamond score of 92.3% puts it among top frontier reasoning open-weights models.
- **Context window: 90/100.** 1M+ token context window mapped to 90/100 tier.
- **Multimodal: 15/100.** Text-only model (15/100 default for text-only).
- **Coding: 84/100.** SWE-bench Pro at 65.7%, SWE-bench Multilingual at 82.9%, and DeepSWE at 64.3%.
- **Cost efficiency: 88/100.** Highly reasonable API pricing ($0.834/1M input, $2.001/1M output) and Apache 2.0 open-weights license for self-hosting.
- **Overall Score: 73/100.** Half-up mean of the five quality dims (86, 92, 90, 15, 84); top-tier open-weights model for software engineering and long-context agentic reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
