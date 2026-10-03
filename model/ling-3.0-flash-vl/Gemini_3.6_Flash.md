# Ling 3.0 Flash VL — findings by Gemini 3.6 Flash

- Source: inclusionAI (`ling-3.0-flash-vl`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** Native multimodal MoE model (125B total, 5.5B active) with image/video reasoning and 256K context.
- **Provider / access:** OpenCode Zen `opencode/ling-3.0-flash-vl` and inclusionAI Hugging Face `inclusionAI/Ling-3.0-flash-VL`.
- **Release / knowledge:** 2026-09-23 release; knowledge cutoff 2026-08.
- **IDs:** `opencode/ling-3.0-flash-vl`
- **Context window:** 256,000 tokens input (verified via SGLang / YaRN configuration).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-02):** $0.15 / 1M input tokens, $0.60 / 1M output tokens (estimated open-weights API tier).
- **Architecture:** 124B total parameter MoE with 5.5B active parameters per token, ViT visual encoder, VideoRoPE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.5%** (AA protocol)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1520 Elo**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **58.2%**
- HLE: **12.4%**
- LCR / MLCR: **76.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **42 / #28**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **41.2%**
- LiveCodeBench: **48.6%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256K tokens retrieval accuracy verified via VideoRoPE + YaRN scaling.

### Normalized scores (1–100)

- **Tool use: 62/100.** AA Terminal-Bench 2.1 protocol performance.
- **Reasoning: 68/100.** AA Intelligence Index v4.1.1 score of 42.
- **Context window: 88/100.** 256K context window with VideoRoPE and YaRN scaling.
- **Multimodal: 85/100.** Native text, image, and video understanding with visual reasoning.
- **Coding: 67/100.** Code and terminal task execution performance.
- **Cost efficiency: 85/100.** High inference efficiency with 5.5B active parameters per token.
- **Overall Score: 74/100.** Strong multimodal flash-tier model for image and video reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
