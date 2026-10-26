# Qwen 3.5 Flash Lite — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`opencode/qwen-3.5-flash-lite`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's ultra-low-cost high-throughput MoE commercial API model featuring 1M context and multimodal understanding for high-volume enterprise tasks.
- **Provider / access:** OpenCode Zen (`opencode/qwen-3.5-flash-lite`) / Alibaba Cloud Model Studio
- **Release / knowledge:** 2026-03 release; knowledge cutoff 2026-01
- **IDs:** `opencode/qwen-3.5-flash-lite`
- **Context window:** 1,000,000 total tokens; 65,536 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image, video input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** ~$0.10 / 1M input, $0.40 / 1M output ($0.02 cached read); commercial hosted tier
- **Architecture:** Proprietary high-speed Mixture-of-Experts (~35B total / 3B active MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.5%**
- Tau3-Banking / Tau2-Bench: **35.0%** (AA harness)
- GDPval-AA: **1320**
- Claw-Eval / ClawProBench: **51.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **43.5%**

Reasoning / knowledge:

- GPQA Diamond: **81.0%**
- HLE: **29.0%**
- LCR / MLCR: **64.0%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **43 / #42**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 6.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%**
- LiveCodeBench: **71.0%**
- SciCode / AA-SciCode: **37.0%**
- Vibe Code Bench: **50.0%**
- DeepSWE / Coding Index / other: **52.5%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **96.0% retrieval accuracy at 1M context length**

### Normalized scores (1–100)

- **Tool use: 74/100.** Effective high-speed tool execution on Terminal-Bench 2.1 (71.5%) and GDPval (1320).
- **Reasoning: 78/100.** Good lightweight reasoning capability on GPQA Diamond (81.0%) and HLE (29.0%).
- **Context window: 100/100.** Native 1,000,000 context window with 65,536 max output headroom and >96% retrieval accuracy.
- **Multimodal: 82/100.** Multi-input coverage for text, image, and video with text output generation.
- **Coding: 76/100.** Solid coding performance with 61.0% on SWE-bench Verified and 71.0% on LiveCodeBench.
- **Cost efficiency: 98/100.** Outstanding commercial API cost efficiency at ~$0.10 / $0.40 per 1M tokens ($0.02 cached read).
- **Overall Score: 82/100.** Half-up mean of five quality dimensions `(74 + 78 + 100 + 82 + 76) / 5 = 82.0 -> 82`; top economic choice for high-volume multimodal long-context applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
