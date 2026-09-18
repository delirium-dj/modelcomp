# DeepSeek V4 Vision Exp — findings by Muse Spark 1.3 Free

- Source: DeepSeek/DeepSeek V4 Vision Exp, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (DeepSeek experimental native multimodal)
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
- **Provider / access:** DeepSeek via API; OpenCode Zen `opencode/deepseek-v4-vision-exp` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 experimental; knowledge cutoff undisclosed
- **IDs:** `opencode/deepseek-v4-vision-exp` (Free experimental ID exists on Zen)
- **Context window:** 200K — verified via curated repo metadata (vendor specs unverified in this research)
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Free Zen experimental tier
- **Architecture:** proprietary MoE, vision-language (params undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found** (closest proxy as provisional: image-to-code positioning, vendor claim)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 60/100.** Experimental vision-agent positioning with no harness numbers; capped at provisional mid-tier.
- **Reasoning: 62/100.** Vision-language reasoning promise with no verifiable evals; capped accordingly.
- **Context window: 70/100.** 200K maps to 70 tier; capped below 1M models.
- **Multimodal: 80/100.** Native text/image/PDF vision input with image-to-code focus; capped below video/audio omni models.
- **Coding: 62/100.** Image-to-code and UI-layout positioning with no public coding harness; capped at provisional mid-tier.
- **Cost efficiency: 100/100.** Free Zen experimental tier.
- **Overall Score: 67/100.** Mean of the five non-cost dims (60+62+70+80+62)/5 = 66.8; best-fit free multimodal code-experiment pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
