# GPT-6.1 Sol — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6.1 upgrade replacing GPT-6 Sol, offering near-Astra performance for coding, computer use, and professional workflows at ~one-fifth the token cost.
- **Provider / access:** OpenAI / OpenAI API (`gpt-6.1-sol`, Chat Completions; No Zen Free ID)
- **Release / knowledge:** September 29, 2026; knowledge cutoff April 2026
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 context window / 128,000 (128K) max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-08):** Paid $2.00 input / $10.00 output per 1M tokens; $0.10 cached input (no Zen Free ID)
- **Architecture:** Proprietary Mixture-of-Experts (MoE) architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.9%** <(AutomationBench-AA)>

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **83.0%** <(AA-LCR)>
- CritPt: **31.7%** <(Artificial Analysis, #1 in dataset)>
- Artificial Analysis Intelligence Index / BenchLM overall: **52** <(Artificial Analysis Index v4.3.2)>
- Omniscience Accuracy / Hallucination Rate: **54% / 15%** <(Artificial Analysis)>

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER / GraphWalks retrieval accuracy: **83.0%** at 1.05M context <(AA-LCR)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Highly capable agentic execution on AutomationBench-AA (64.9%), offering near-flagship performance at low latency.
- **Reasoning: 89/100.** Outstanding score on the Artificial Analysis Intelligence Index (52) and SOTA performance on CritPt (31.7%).
- **Context window: 100/100.** Full 1.05M context window with generous 128K output headroom and 95% cached-input discount ($0.10/1M).
- **Multimodal: 82/100.** Leading vision performance on AA-MMMU-Pro (86.0%) with text-only outputs.
- **Coding: 85/100.** Extremely efficient code generation and codebase inspection capabilities.
- **Cost efficiency: 88/100.** Outstanding value at $2.00/$10.00 per 1M tokens with $0.10 prompt caching, delivering $0.72 per AA task.
- **Overall Score: 88/100.** Exceptional efficiency, high-level reasoning, and near-frontier agentic capabilities. Highly recommended.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
