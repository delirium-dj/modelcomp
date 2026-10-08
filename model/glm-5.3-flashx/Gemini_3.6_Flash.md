# GLM-5.3-FlashX — findings by Gemini 3.6 Flash

- Source: ZhipuAI/glm-5.3-flashx
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** High-speed latency-optimized serving variant of Zhipu AI's GLM-5.3-Flash MoE model, operating up to 200 tokens/s for real-time agentic and interactive coding tasks.
- **Provider / access:** Zhipu AI API (`glm-5.3-flashx`), OpenRouter (`zhipu/glm-5.3-flashx`). Chat Completions API.
- **Release / knowledge:** 2026-09-18 release; knowledge cutoff mid-2026.
- **IDs:** `glm-5.3-flashx`
- **Context window:** 1,000,000 tokens input, 128,000 max output tokens (verified via Zhipu AI documentation).
- **Modalities:** text, image, video, document in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.37 / 1M input, $1.25 / 1M output tokens (paid tier).
- **Architecture:** 320B total / 18B active parameter MoE with hybrid sparse and linear attention, open-weights base.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Zhipu AI technical report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Zhipu AI technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- MMLU Pro: **86.0%** (Zhipu AI technical report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **92.0%** (SWE-bench benchmark report)
- LiveCodeBench: **80.5%** (LiveCodeBench leaderboard)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,000,000 token input retrieval window supported with hybrid linear attention.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 score of 84.3% with high-throughput 200 tok/s execution.
- **Reasoning: 88/100.** GPQA Diamond 86.4% and MMLU Pro 86.0% demonstrate strong reasoning performance.
- **Context window: 95/100.** 1M token input context window tier with 128k max output limit.
- **Multimodal: 80/100.** Native text, image, video, and file input handling.
- **Coding: 88/100.** SWE-bench score of 92.0% and LiveCodeBench score of 80.5% cap coding performance.
- **Cost efficiency: 97/100.** Extremely cost-effective high-speed pricing ($0.37/$1.25 per 1M tokens).
- **Overall Score: 88/100.** Ultra-fast 200 tok/s multimodal MoE model for real-time agent loops and interactive coding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
