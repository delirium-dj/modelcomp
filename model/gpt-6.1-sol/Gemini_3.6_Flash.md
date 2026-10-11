# GPT-6.1 Sol — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-6.1-sol`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6 series workhorse model providing near-Astra performance for agentic coding, computer use, and professional document synthesis at 20% of the cost.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), Microsoft Foundry, and ChatGPT Work / Codex.
- **Release / knowledge:** 2026-09-29 release; April 2026 knowledge cutoff.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens input / 128,000 max output tokens — verified via OpenAI official documentation.
- **Modalities:** text, image in; text out; reasoning yes (configurable: low, medium, high, xhigh, max); tool calls yes (Responses API); JSON mode yes
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output per 1M tokens ($0.10 cached input).
- **Architecture:** Proprietary transformer architecture with optimized inference-time compute scaling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0: **58.2% ± 3.1%** Codex agent, tied with GPT-6 Astra)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **88.9%** (OpenAI internal benchmark report)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / Max** (Artificial Analysis Intelligence Index v4.3.2)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **77.5%** (DeepSWE v1.1, matches GPT-6 Astra)

Long context:

- RULER 1M: 99.0% needle-in-a-haystack retrieval accuracy across 1,050,000-token window.

### Normalized scores (1–100)

- **Tool use: 93/100.** Matches flagship Astra with 58.2% on Terminal-Bench 4.0 and 88.9% on GDPval-AA for CLI and multi-step environment interaction.
- **Reasoning: 94/100.** Near-Astra analytical and professional reasoning demonstrated by 52 on the Artificial Analysis Intelligence Index v4.3.2.
- **Context window: 92/100.** 1.05M token context capacity with 128K max output generation depth.
- **Multimodal: 81/100.** High-fidelity image and technical document understanding with text output.
- **Coding: 93/100.** 77.5% on DeepSWE v1.1 matches flagship GPT-6 Astra at 80% lower cost.
- **Cost efficiency: 82/100.** $2.00/$10.00 per 1M tokens with $0.10 cached reads provides outstanding production value.
- **Overall Score: 91/100.** Superior cost-efficiency frontier workhorse model for production agentic coding, CLI orchestration, and multi-file codebases.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across OpenAI release documentation, Artificial Analysis indexes, and benchmark comparisons; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
