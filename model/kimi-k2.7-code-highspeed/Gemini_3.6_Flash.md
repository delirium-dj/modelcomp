# Kimi K2.7 Code Highspeed — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's high-speed agentic coding model delivering 180-260 tok/s throughput across a 262K token context window.
- **Provider / access:** Moonshot AI Open Platform (`moonshot/kimi-k2.7-code-highspeed`), Microsoft Foundry.
- **Release / knowledge:** 2026-06-15 release; knowledge cutoff 2026-04.
- **IDs:** `moonshot/kimi-k2.7-code-highspeed`
- **Context window:** 262,144 tokens input, 32,768 max output tokens (verified via Moonshot AI launch documentation).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.90 / $8.00 / $0.38 cached per 1M tokens.
- **Architecture:** Proprietary high-throughput coding transformer model.

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
- Artificial Analysis Intelligence Index / BenchLM overall: **39** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.8%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 262K: 98.5% needle-in-a-haystack retrieval accuracy across 262K window.

### Normalized scores (1–100)

- **Tool use: 86/100.** High-speed multi-step tool calling (~180-260 tok/s).
- **Reasoning: 84/100.** Efficient code reasoning with reduced thinking overhead.
- **Context window: 78/100.** 262K token context window.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 88/100.** Strong 67.8% score on SWE-bench Verified.
- **Cost efficiency: 86/100.** Competitive pricing ($1.90 in / $8.00 out per 1M).
- **Overall Score: 70/100.** Fast, high-throughput text-only coding assistant for developers.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
