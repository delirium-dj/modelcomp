# Tencent Hy3 Preview — findings by Gemini 3.6 Flash

- Source: Tencent/Hy3 Preview (`tencent/hy3-preview`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent Hy3 Preview
- **Short description:** Early preview build of Tencent's 295B-parameter open-weights MoE model featuring a Multi-Token Prediction (MTP) speculative decoding layer and early reasoning modes.
- **Provider / access:** Tencent Cloud API & OpenRouter (`tencent/hy3-preview` / `https://openrouter.ai/api/v1/chat/completions`).
- **Release / knowledge:** 2026-04-23 preview release; knowledge cutoff early 2026.
- **IDs:** `tencent/hy3-preview`
- **Context window:** 262,144 tokens (256K input / 8192 max output tokens — verified via OpenRouter documentation).
- **Modalities:** Text in, text out; reasoning yes (early CoT preview); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.12 / 1M input tokens, $0.50 / 1M output tokens (early hosted rates; open-weights under Apache 2.0).
- **Architecture:** Sparse MoE (295B total parameters / 21B active parameters per token with MTP layer), open weights under Apache 2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **54.4%** (Terminal-Bench 2.0 evaluation in Tencent report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (Tencent research preview paper)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **74.4%** (Tencent preview report)
- LiveCodeBench: **34.86%** (LiveCodeBench-v6 evaluation)
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

- **Tool use: 60/100.** Terminal-Bench 2.0 at 54.4% indicates functional agentic capability; early preview tool calling formatting quirks cap score at 60.
- **Reasoning: 82/100.** GPQA Diamond score of 87.2% demonstrates strong reasoning capability; unrefined preview CoT modes cap score at 82.
- **Context window: 75/100.** 262,144 tokens context window mapped to 75/100 tier.
- **Multimodal: 15/100.** Text-only model (15/100 default for text-only).
- **Coding: 73/100.** SWE-bench Verified at 74.4% and LiveCodeBench at 34.86%.
- **Cost efficiency: 95/100.** Low preview pricing ($0.12/1M input, $0.50/1M output) plus open-weights self-hosting.
- **Overall Score: 61/100.** Half-up mean of the five quality dims (60, 82, 75, 15, 73); solid open-weights preview build superseded by the official Hy3 release.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
