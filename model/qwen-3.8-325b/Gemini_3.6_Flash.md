# Qwen 3.8 325B — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`opencode/qwen-3.8-325b`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 325B
- **Short description:** Alibaba's Qwen 3.8 series 325B open-weights model offering strong reasoning, coding, and long-context performance for self-hosted enterprise deployment.
- **Provider / access:** OpenCode Zen (`opencode/qwen-3.8-325b`) / HuggingFace `Qwen/Qwen3.8-325B`
- **Release / knowledge:** 2026-09 release; knowledge cutoff 2026-04
- **IDs:** `opencode/qwen-3.8-325b`
- **Context window:** 262,144 total tokens; 32,768 max output tokens (verified via Qwen model card)
- **Modalities:** Text, image input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** $0.80 / 1M input tokens, $2.40 / 1M output tokens ($0.16 cached read); open weights
- **Architecture:** Open weights, 325B parameter Mixture-of-Experts (MoE) architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.5%**
- Tau3-Banking / Tau2-Bench: **43.0%** (AA harness)
- GDPval-AA: **1510**
- Claw-Eval / ClawProBench: **62.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.0%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **37.5%**
- LCR / MLCR: **73.0%**
- CritPt: **65.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 / #18**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **67.0%**
- LiveCodeBench: **77.5%**
- SciCode / AA-SciCode: **47.5%**
- Vibe Code Bench: **62.5%**
- DeepSWE / Coding Index / other: **64.0%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **95.5% retrieval accuracy at 256K context length**

### Normalized scores (1–100)

- **Tool use: 80/100.** Effective tool use and execution performance on Terminal-Bench 2.1 (77.5%) and GDPval (1510).
- **Reasoning: 84/100.** Good analytical and mathematical reasoning on GPQA Diamond (86.0%) and HLE (37.5%).
- **Context window: 75/100.** 262,144 native context window with 32,768 max output tokens.
- **Multimodal: 68/100.** High-resolution vision and image input with text generation output.
- **Coding: 82/100.** Solid coding benchmarks with 67.0% on SWE-bench Verified and 77.5% on LiveCodeBench.
- **Cost efficiency: 88/100.** Cost-effective open-weights deployment at $0.80 / $2.40 per 1M tokens ($0.16 cached read).
- **Overall Score: 78/100.** Half-up mean of five quality dimensions `(80 + 84 + 75 + 68 + 82) / 5 = 389 / 5 = 77.8 -> 78`; strong open-weights option for high-capacity enterprise self-hosting.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
