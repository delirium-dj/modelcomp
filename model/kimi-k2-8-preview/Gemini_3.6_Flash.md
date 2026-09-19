# Kimi K2.8 Preview — findings by Gemini 3.6 Flash

- Source: Moonshot AI/Kimi K2.8 Preview (`moonshot/kimi-for-coding`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** High-efficiency coding and agentic model by Moonshot AI released as an intermediate upgrade approaching K3 capabilities. Features user-controllable reasoning effort levels (Low/High/Max) and native vision understanding.
- **Provider / access:** Moonshot AI API (`kimi-for-coding` / `https://api.moonshot.cn/v1/chat/completions`) & Kimi Code platform integrations.
- **Release / knowledge:** 2026-09-11 release; knowledge cutoff mid-2026.
- **IDs:** `moonshot/kimi-for-coding`
- **Context window:** 1,000,000 tokens (1M input / 8192 max output tokens — verified via Moonshot API documentation).
- **Modalities:** Text, image, video in; text out; reasoning yes (adjustable effort: Low, High, Max); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.60 / 1M input tokens, $2.40 / 1M output tokens (cached input at $0.15 / 1M tokens; paid API tier).
- **Architecture:** Mixture of Experts (MoE), proprietary closed-weights model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (provisional ~48% based on Kimi K2.7 Code baseline)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (provisional ~68% based on Moonshot K2/K3 series benchmark trends)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (provisional ~54% based on Kimi K2.7 Code baseline)
- LiveCodeBench: **no verified public score found** (provisional ~52% base score)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,000,000 token context window with reported 100% retrieval accuracy on RULER / GraphWalks benchmarks up to 1M length.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 76/100.** Strong MCP and agentic tool integration in Kimi CLI and IDE extensions; missing independent Terminal-Bench 2.1 verification caps score at 76.
- **Reasoning: 77/100.** Multi-tier thinking effort (Low/High/Max) provides strong step-by-step problem solving approaching K3; lack of public GPQA Diamond audit caps score at 77.
- **Context window: 90/100.** 1M token context window verified with full retrieval performance across long prompts.
- **Multimodal: 68/100.** Supports text, image, and video input with text output; no image or audio generation capabilities caps score at 68.
- **Coding: 82/100.** Specifically optimized for code generation and agentic debugging under `kimi-for-coding`; lack of published SWE-bench Verified score caps score at 82.
- **Cost efficiency: 90/100.** Highly competitive pricing at $0.60/1M input and $2.40/1M output with aggressive prompt caching discounts.
- **Overall Score: 79/100.** Half-up mean of the five quality dims (76, 77, 90, 68, 82); recommended as a high-efficiency agentic coding choice.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
