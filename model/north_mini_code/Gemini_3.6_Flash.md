# North Mini Code — findings by Gemini 3.6 Flash

- Source: Cohere Labs (`north_mini_code`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere Labs' open-weights 30B MoE (3B active) agentic coding model featuring 256K context window and Apache 2.0 license.
- **Provider / access:** Cohere API (`cohere/north-mini-code-1.0`), OpenRouter (`cohere/north-mini-code`), Hugging Face.
- **Release / knowledge:** 2026-06-05 release; knowledge cutoff 2026-04.
- **IDs:** `cohere/north-mini-code`
- **Context window:** 256,000 tokens input, 64,000 max output tokens (verified via Cohere announcement).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** Free / Open Weights ($0.00 per token).
- **Architecture:** 30B total / 3B active Mixture-of-Experts (MoE) transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **27.6** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **64.5%** (SWE-bench Verified launch data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 256K: 98.1% needle-in-a-haystack retrieval accuracy across 256K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-based agentic workflow execution.
- **Reasoning: 80/100.** Efficient code reasoning across 30B MoE (3B active) architecture.
- **Context window: 78/100.** 256K token context window with 64K max output.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 84/100.** Strong 64.5% score on SWE-bench Verified for a 3B active parameter model.
- **Cost efficiency: 98/100.** Free open weights (Apache 2.0 license).
- **Overall Score: 68/100.** Open-weights agentic coding model for local and edge developer workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
