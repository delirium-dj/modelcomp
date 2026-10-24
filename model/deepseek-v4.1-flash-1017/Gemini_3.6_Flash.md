# DeepSeek V4.1 Flash 1017 — findings by Gemini 3.6 Flash

- Source: DeepSeek (`opencode/deepseek-v4.1-flash-1017`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's updated 2026-10-17 open-weights (MIT) Conditional MoE flash model offering 1M context and 384K output tokens at ultra-low cost and high throughput.
- **Provider / access:** OpenCode Zen (`opencode/deepseek-v4.1-flash-1017`) / DeepSeek API
- **Release / knowledge:** 2026-10-17 release; knowledge cutoff 2026-06
- **IDs:** `opencode/deepseek-v4.1-flash-1017`
- **Context window:** 1,000,000 total tokens; 384,000 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** $0.30 / 1M input tokens, $1.20 / 1M output tokens ($0.15 / $0.60 off-peak; $0.03 cached read)
- **Architecture:** Open weights (MIT license), 552B total / 16B active Conditional MoE (CED MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.4%**
- Tau3-Banking / Tau2-Bench: **42.5%** (AA harness)
- GDPval-AA: **1520**
- Claw-Eval / ClawProBench: **61.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.8%**

Reasoning / knowledge:

- GPQA Diamond: **86.4%**
- HLE: **38.2%**
- LCR / MLCR: **74.5%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **54 / #16**
- Omniscience Accuracy / Hallucination Rate: **89.8% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%**
- LiveCodeBench: **78.2%**
- SciCode / AA-SciCode: **48.6%**
- Vibe Code Bench: **64.2%**
- DeepSWE / Coding Index / other: **65.0%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **96.2% retrieval accuracy at 1M context length**

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool invocation and execution with Terminal-Bench 2.1 (78.4%) and GDPval (1520).
- **Reasoning: 85/100.** Solid general reasoning performance on GPQA Diamond (86.4%) and HLE (38.2%).
- **Context window: 100/100.** Native 1,000,000 context window with an impressive 384,000 max output token limit.
- **Multimodal: 68/100.** Text and visual image input processing with text output generation.
- **Coding: 83/100.** Good software engineering performance with 68.5% on SWE-bench Verified and 78.2% on LiveCodeBench.
- **Cost efficiency: 94/100.** Outstanding open-weights price efficiency at $0.30 / $1.20 peak ($0.15 / $0.60 off-peak).
- **Overall Score: 84/100.** Half-up mean of five quality dimensions `(82 + 85 + 100 + 68 + 83) / 5 = 83.6 -> 84`; ideal high-throughput long-context choice for high-volume agent pipelines.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
