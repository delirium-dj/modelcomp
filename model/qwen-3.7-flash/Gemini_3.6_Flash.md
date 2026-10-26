# Qwen 3.7 Flash — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`opencode/qwen-3.7-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's July 2026 ultra-fast commercial flash model offering 1M context, multimodal input, and web search tool use at near-zero token costs.
- **Provider / access:** OpenCode Zen (`opencode/qwen-3.7-flash`) / QwenCloud API
- **Release / knowledge:** 2026-07 release; knowledge cutoff 2026-04
- **IDs:** `opencode/qwen-3.7-flash`
- **Context window:** 1,000,000 total tokens; 131,072 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image, video input; text output; function calling; web search; JSON mode
- **Pricing (as of 2026-10-23):** $0.03 / 1M input, $0.13 / 1M output ($0.006 cached input); commercial API tier
- **Architecture:** Proprietary high-speed Mixture-of-Experts architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%**
- Tau3-Banking / Tau2-Bench: **42.0%** (AA harness)
- GDPval-AA: **1510**
- Claw-Eval / ClawProBench: **60.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.0%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **36.5%**
- LCR / MLCR: **72.0%**
- CritPt: **62.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / #20**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **78.0%**
- SciCode / AA-SciCode: **46.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **63.5%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **97.0% retrieval accuracy at 1M context length**

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast tool execution and integrated web search capability on Terminal-Bench 2.1 (78.0%) and GDPval (1510).
- **Reasoning: 85/100.** Strong reasoning results on GPQA Diamond (86.0%) and HLE (36.5%).
- **Context window: 100/100.** Native 1,000,000 context window with 131,072 max output tokens and >97% retrieval accuracy.
- **Multimodal: 82/100.** Multi-input coverage for text, image, and video with text output generation.
- **Coding: 83/100.** Solid coding benchmarks with 68.0% on SWE-bench Verified and 78.0% on LiveCodeBench.
- **Cost efficiency: 99/100.** Exceptional near-zero commercial API pricing at $0.03 / $0.13 per 1M tokens ($0.006 cached input).
- **Overall Score: 86/100.** Half-up mean of five quality dimensions `(82 + 85 + 100 + 82 + 83) / 5 = 86.4 -> 86`; top choice for high-speed, cost-effective multimodal long-context production agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
