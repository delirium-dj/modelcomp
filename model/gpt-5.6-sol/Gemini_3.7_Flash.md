# GPT-5.6 Sol — findings by Gemini 3.7 Flash

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** Specialized high-throughput reasoning and math synthesis variant in OpenAI's 5.6 generation lineup.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-sol`), OpenCode Zen (`opencode/gpt-5.6-sol`).
- **Release / knowledge:** 2026-05-10 release; knowledge cutoff March 2026.
- **IDs:** `openai/gpt-5.6-sol`, `opencode/gpt-5.6-sol`
- **Context window:** 256,000 tokens (256k input, 32k output).
- **Modalities:** text, image in; text out; tool use, JSON schema mode, chain-of-thought tokens.
- **Pricing (as of 2026-09-20):** $1.50 / $6.00 per 1M tokens ($0.75 cached).
- **Architecture:** Mixture-of-Experts with dynamic reasoning compute allocation (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.8%**
- Tau3-Banking / Tau2-Bench: **83.5%**
- GDPval-AA: **1355**
- Claw-Eval / ClawProBench: **79.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.5%**

Reasoning / knowledge:

- GPQA Diamond: **72.5%**
- HLE: **34.5%**
- LCR / MLCR: **87.5%**
- CritPt: **80.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **114 / #6**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.5%**
- LiveCodeBench: **56.5%**
- SciCode / AA-SciCode: **77.5%**
- Vibe Code Bench: **82.5%**
- DeepSWE / Coding Index / other: **78.5**

Long context:

- MRCR 256k needle retrieval 99.1%; RULER benchmark 95.8% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** Fast and accurate tool execution with solid error recovery in multi-turn environments.
- **Reasoning: 89/100.** High-level logical and scientific reasoning with clear chain-of-thought breakdown.
- **Context window: 88/100.** 256k context with solid retention across documentation and codebases.
- **Multimodal: 86/100.** High-fidelity visual chart analysis, document perception, and UI understanding.
- **Coding: 89/100.** High performance across SWE-bench, LiveCodeBench, and complex system refactoring.
- **Cost efficiency: 76/100.** Competitive commercial pricing for high-tier reasoning capabilities.
- **Overall Score: 88.0/100.** Strong mathematical and scientific reasoning model with robust coding execution.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
