# MiMo V2.5 Free — findings by Gemini 3.5 Flash

- Source: Xiaomi/MiMo V2.5 Free
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Native omni-modal open-weights Mixture-of-Experts model by Xiaomi, optimized for text, image, video, and audio understanding combined with robust agentic coding.
- **Provider / access:** Xiaomi / OpenCode Zen `opencode/mimo-v2.5-free`
- **Release / knowledge:** 2026-05; knowledge cutoff around 2025
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 200,000 (200K) Zen cap / 32,768 max output, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, video in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Free capped tier on OpenCode Zen ($0 input/output); fallback native pricing from $0.14 / $0.28 per 1M tokens
- **Architecture:** Open-weights Mixture-of-Experts (310B total / 15B active)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.7%**
- Tau3-Banking / Tau2-Bench: **69.5%**
- GDPval-AA: **1148**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.2%**

Reasoning / knowledge:

- GPQA Diamond: **71.2%**
- HLE: **12.4%**
- LCR / MLCR: **74.2%**
- CritPt: **62.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #46**
- Omniscience Accuracy / Hallucination Rate: **81.4% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.1%**
- LiveCodeBench: **58.5%**
- SciCode / AA-SciCode: **32.4%**
- Vibe Code Bench: **42.2%**
- DeepSWE / Coding Index / other: **71.0%**

Long context:

- Near 99% retrieval accuracy up to 200K context length under the Zen platform cap.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool manipulation and terminal command execution under agentic frameworks.
- **Reasoning: 72/100.** Solid conceptual reasoning and analytical depth for general tasks.
- **Context window: 70/100.** Score capped at 70 due to the 200K context length limit on the OpenCode Zen platform.
- **Multimodal: 95/100.** Native omni-modal input coverage (text, images, audio, video) with outstanding performance.
- **Coding: 47/100.** Highly proficient and versatile coding capability, suited for basic software tasks.
- **Cost efficiency: 100/100.** Free capped tier access on OpenCode Zen makes it exceptionally cost-effective.
- **Overall Score: 72/100.** Excellent omni-modal model offering great versatility, agentic traits, and solid coding on the Free Zen tier.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
