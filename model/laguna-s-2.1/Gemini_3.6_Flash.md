# Poolside Laguna S 2.1 — findings by Gemini 3.6 Flash

- Source: Poolside/Laguna S 2.1 (`poolside/laguna-s-2.1`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Poolside Laguna S 2.1
- **Short description:** Open-weight 118B-parameter Mixture-of-Experts (MoE) model by Poolside specialized for long-horizon agentic software engineering, repository-level coding, and local NVFP4 execution.
- **Provider / access:** Poolside API & OpenRouter (`poolside/laguna-s-2.1` / `https://openrouter.ai/api/v1/chat/completions`).
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff mid-2026.
- **IDs:** `poolside/laguna-s-2.1`
- **Context window:** 1,000,000 tokens (1M input / 16,384 max output tokens — verified via OpenRouter specifications).
- **Modalities:** Text in, text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.10 / 1M input tokens, $0.20 / 1M output tokens (OpenRouter rates; free API tier available on OpenRouter; OpenMDW-1.1 license for self-hosting).
- **Architecture:** Sparse MoE (118B total parameters / 8B active parameters per token across 256 routed experts), open weights under OpenMDW-1.1 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Poolside technical report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **49.7%** (Toolathon Verified) / **46.2%** (SWE Atlas)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (provisional ~70% based on agentic reasoning baseline)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59.4%** (SWE-bench Pro) / **78.5%** (SWE-bench Multilingual)
- LiveCodeBench: **no verified public score found** (provisional ~42% based on DeepSWE benchmark)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **40.4%** (DeepSWE evaluation suite)

Long context:

- 1,000,000 token context window with verified long-context retrieval across repository analysis tasks.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 72/100.** Terminal-Bench 2.1 at 70.2% and Toolathon Verified at 49.7% demonstrate strong tool interaction.
- **Reasoning: 70/100.** Focused agentic reasoning and step-by-step problem solving; lack of formal GPQA Diamond audit caps score at 70.
- **Context window: 90/100.** 1M token context window mapped to 90/100 tier.
- **Multimodal: 15/100.** Text-only model (15/100 default for text-only).
- **Coding: 79/100.** SWE-bench Multilingual at 78.5% and SWE-bench Pro at 59.4%.
- **Cost efficiency: 98/100.** Extremely low API pricing ($0.10/1M input, $0.20/1M output), free API tier on OpenRouter, and open weights for self-hosting.
- **Overall Score: 65/100.** Half-up mean of the five quality dims (72, 70, 90, 15, 79); exceptional open-weights agentic coding model for local and cloud deployment.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
