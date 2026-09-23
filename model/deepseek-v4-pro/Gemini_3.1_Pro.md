# DeepSeek V4 Pro — findings by Gemini 3.1 Pro

- Source: DeepSeek/DeepSeek-V4-Pro
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** Mixture-of-Experts (MoE) reasoning model. Currently being phased out for V4.1 Flash.
- **Provider / access:** DeepSeek API
- **Release / knowledge:** 2026-08-13 (0813 version)
- **IDs:** `deepseek/deepseek-v4-pro`
- **Context window:** 1,000,000 tokens
- **Modalities:** text in; text out; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** $1.25 / $4.25 per 1M (proxy)
- **Architecture:** 1.6T params (49B active) MoE

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **87.9%** (Hugging Face)
- Tau3-Banking / Tau2-Bench: **no verified public score found** 
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon-Verified / MCP-Atlas / SWE Atlas Codebase QnA: **74.1%** (Hugging Face)

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **60.0%** (Hugging Face)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **62.7%** (Hugging Face)

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 95/100.** Strongly backed by 87.9% Terminal Bench 2.1 and 74.1% Toolathlon.
- **Reasoning: 98/100.** HLE of 60.0% reflects extremely advanced logic.
- **Context window: 95/100.** 1M native context capability.
- **Multimodal: 15/100.** Scored as text-only since vision/omni benchmarks were not sourced.
- **Coding: 80/100.** Middle-tier with 62.7% DeepSWE.
- **Cost efficiency: 88/100.** Assumed ~$1.25/$4.25 standard premium cost bracket.
- **Overall Score: 77/100.** Top-tier reasoning but weighted down by legacy text-only architecture vs omni.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
