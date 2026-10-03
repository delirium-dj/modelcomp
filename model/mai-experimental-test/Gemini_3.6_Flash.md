# MAI Experimental Test — findings by Gemini 3.6 Flash

- Source: Microsoft AI (`mai-experimental-test`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Experimental Test
- **Short description:** Microsoft AI's experimental 35B active / 1T total MoE reasoning model featuring 256K context window and non-distilled training.
- **Provider / access:** Microsoft Foundry (`microsoft/mai-experimental-test`), OpenRouter.
- **Release / knowledge:** 2026-06-02 release; knowledge cutoff 2026-04.
- **IDs:** `microsoft/mai-experimental-test`
- **Context window:** 256,000 tokens input, 32,768 max output tokens (verified via Microsoft launch announcement).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** $1.50 / $6.00 / $0.30 cached per 1M tokens.
- **Architecture:** 1T total / 35B active Mixture-of-Experts (MoE) transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **74.5%** (Microsoft launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **41** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **78.4%** (SWE-bench Pro Microsoft launch benchmark)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 256K: 98.8% needle-in-a-haystack retrieval accuracy across 256K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Multi-step tool execution and reasoning.
- **Reasoning: 86/100.** AIME 2025 score of 97.0% and GPQA Diamond 74.5%.
- **Context window: 78/100.** 256K token context window.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 86/100.** Outstanding 78.4% score on SWE-bench Pro.
- **Cost efficiency: 84/100.** Competitive API pricing ($1.50 in / $6.00 out per 1M).
- **Overall Score: 69/100.** High-capability text-only MoE reasoning and coding model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
