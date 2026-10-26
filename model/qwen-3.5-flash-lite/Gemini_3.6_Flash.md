# Qwen 3.5 Flash Lite — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`opencode/qwen-3.5-flash-lite`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba Cloud's high-efficiency MoE API tier designed for high-volume multimodal 1M-context agent workflows at ultra-low pricing.
- **Provider / access:** OpenCode Zen (`opencode/qwen-3.5-flash-lite`) / Alibaba Cloud Model Studio
- **Release / knowledge:** 2026-03 release; knowledge cutoff 2026-01
- **IDs:** `opencode/qwen-3.5-flash-lite`
- **Context window:** 1,000,000 total tokens; 65,536 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image, video input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** ~$0.10 / 1M input, $0.40 / 1M output ($0.02 cached read); commercial API tier
- **Architecture:** Proprietary high-efficiency MoE (~35B total / 3B active parameters)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%**
- Tau3-Banking / Tau2-Bench: **35.0%** (AA harness)
- GDPval-AA: **1340**
- Claw-Eval / ClawProBench: **50.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **43.5%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **28.0%**
- LCR / MLCR: **64.5%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **43 / #42**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 6.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.0%**
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **37.5%**
- Vibe Code Bench: **49.0%**
- DeepSWE / Coding Index / other: **52.0%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **96.0% retrieval accuracy at 1M context length**

### Normalized scores (1–100)

- **Tool use: 73/100.** Fast tool calling and execution on Terminal-Bench 2.1 (71.0%) and GDPval (1340).
- **Reasoning: 78/100.** Solid general reasoning on GPQA Diamond (80.5%) and HLE (28.0%).
- **Context window: 100/100.** Full 1,000,000 native context window with 65,536 max output headroom.
- **Multimodal: 82/100.** Multimodal input support covering text, image, and video modalities.
- **Coding: 75/100.** Reliable coding results on SWE-bench Verified (60.0%) and LiveCodeBench (68.5%).
- **Cost efficiency: 96/100.** Exceptional commercial API price efficiency at ~$0.10 / $0.40 per 1M tokens ($0.02 cached).
- **Overall Score: 82/100.** Half-up mean of five quality dimensions `(73 + 78 + 100 + 82 + 75) / 5 = 408 / 5 = 81.6 -> 82`; optimal budget choice for large-scale multimodal 1M-context agent pipelines.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
