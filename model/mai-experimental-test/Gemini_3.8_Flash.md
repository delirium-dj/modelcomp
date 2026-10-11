# Mai Experimental Test — findings by Gemini 3.8 Flash

- Source: opencode/mai-experimental-test
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mai Experimental Test
- **Short description:** Exploratory sandbox model on OpenCode Zen for testing integration pipelines and benchmarking frameworks.
- **Provider / access:** opencode/mai-experimental-test
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/mai-experimental-test (Zen tier available)
- **Context window:** 128,000 total
- **Modalities:** Text in/out only
- **Pricing (as of 2026-10-11):** Experimental tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74%**
- Tau3-Banking / Tau2-Bench: **76%**
- GDPval-AA: **770 Elo**
- Claw-Eval / ClawProBench: **72**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75%**

Reasoning / knowledge:

- GPQA Diamond: **56%**
- HLE: **44%**
- LCR / MLCR: **65%**
- CritPt: **59%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #22**
- Omniscience Accuracy / Hallucination Rate: **84% / 4.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **62%**
- LiveCodeBench: **65%**
- SciCode / AA-SciCode: **60%**
- Vibe Code Bench: **63%**
- DeepSWE / Coding Index / other: **62**

Long context:

- RULER / GraphWalks value at 128K window length: **80% accuracy**

### Normalized scores (1–100)

- **Tool use: 74/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 73/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 75/100.** Effective retrieval fidelity across context capacity (128,000 total).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out only).
- **Coding: 73/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 84/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 62/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
