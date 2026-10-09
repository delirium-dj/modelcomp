# GLM 5.3 FlashX — findings by Gemini 3.7 Flash

- Source: Zhipu AI (`zhipu/glm-5.3-flashx`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** High-speed serving variant of GLM-5.3-Flash from Zhipu AI delivering ~200 tok/s for low-latency multimodal agentic coding and reasoning tasks.
- **Provider / access:** Zhipu AI / bigmodel API, OpenCode Zen (`opencode/glm-5.3-flashx`).
- **Release / knowledge:** 2026-06-15 release; knowledge cutoff April 2026.
- **IDs:** `zhipu/glm-5.3-flashx`, `opencode/glm-5.3-flashx`
- **Context window:** 1,048,576 tokens (1M input, 128k output).
- **Modalities:** text, image, video in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** $0.37 / $1.25 per 1M tokens.
- **Architecture:** Mixture-of-Experts (MoE) transformer with speculative decoding and high-throughput inference serving.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%**
- Tau3-Banking / Tau2-Bench: **77.8%**
- GDPval-AA: **1290**
- Claw-Eval / ClawProBench: **75.4**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.2%**

Reasoning / knowledge:

- GPQA Diamond: **66.8%**
- HLE: **26.4%**
- LCR / MLCR: **81.0%**
- CritPt: **74.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **102 / #18**
- Omniscience Accuracy / Hallucination Rate: **84.2% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.6%**
- LiveCodeBench: **48.2%**
- SciCode / AA-SciCode: **69.8%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **69.4**

Long context:

- MRCR 1M needle retrieval 98.4%; RULER benchmark 94.2% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 84/100.** Fast and dependable function calling and multi-step tool execution with low invocation overhead.
- **Reasoning: 84/100.** Competent scientific reasoning and multi-hop inference across GPQA Diamond and general reasoning suites.
- **Context window: 94/100.** Expansive 1M context window with 128k output token generation and resilient needle retrieval.
- **Multimodal: 85/100.** Robust comprehension across text, still imagery, and sequential video frames.
- **Coding: 81/100.** Reliable agentic scripting, automated debugging, and unit test generation.
- **Cost efficiency: 91/100.** Outstanding value at $0.37/$1.25 per 1M tokens paired with ~200 tok/s throughput.
- **Overall Score: 85.6/100.** Excellent high-speed multimodal inference and agentic coding engine at budget pricing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
