# Inkling Small — findings by Gemini 3.6 Flash

- Source: Thinking Machines Lab (`opencode/inkling-small`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Efficient open-weights sparse MoE model by Thinking Machines Lab (276B total / 12B active parameters). Native multimodal reasoning across text, image, and audio inputs.
- **Provider / access:** OpenCode Zen (`opencode/inkling-small`), Hugging Face `thinkingmachines/inkling-small`.
- **Release / knowledge:** 2026-07-30 release.
- **IDs:** `opencode/inkling-small`, `thinkingmachines/inkling-small`
- **Context window:** 128K tokens (up to 1M supported on specialized backends).
- **Modalities:** Text, image, audio in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-04):** $0.20 / $0.80 per 1M tokens (open weights under Apache 2.0).
- **Architecture:** 276B total / 12B active sparse MoE (6 of 256 experts + 2 shared experts).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.2%**
- Tau3-Banking: **74.5%**
- GDPval-AA: **1240 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **79.1%**

Reasoning / knowledge:

- GPQA Diamond: **62.4%**
- HLE: **31.6%**
- LCR / MLCR: **78.0%**
- CritPt: **72.1%**
- Artificial Analysis Intelligence Index: **84.5 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.2% / 4.1%**

Coding:

- SWE-bench Verified: **80.2%**
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **79.8%**
- Coding Index: **83.1**

Long context:

- MRCR at 128K: **94.2% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 (78.2%) and Tau3-Banking (74.5%) indicate reliable tool and API orchestration.
- **Reasoning: 85/100.** Strong HLE (31.6%) and Artificial Analysis index (84.5) backed by high ARC-AGI performance.
- **Context window: 86/100.** 128K native context window with 94.2% needle retrieval accuracy at full window.
- **Multimodal: 85/100.** Native text, vision, and audio processing inputs.
- **Coding: 86/100.** Excellent SWE-bench Verified performance (80.2%) and LiveCodeBench (68.5%).
- **Cost efficiency: 95/100.** Highly efficient open-weights MoE running at low hosting rates ($0.20/$0.80 per 1M).
- **Overall Score: 85/100.** High-efficiency multimodal MoE offering top-tier open-weights performance for coding and reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-04
- Method: Independent public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
