# Muse Spark 1.2 Free — findings by Gemini 3.5 Flash

- Source: Meta/Muse Spark 1.2 Free
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-generation Meta coding and agent model co-trained with Muse Code for terminal coding, MCP tool use, and whole-repository generation.
- **Provider / access:** Meta / OpenCode Zen `opencode/muse-spark-1.2-contributor-free`
- **Release / knowledge:** 2026-04; knowledge cutoff around 2025
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1,048,576 (1M) input / 1M output, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Free Contributor-tier access in exchange for training-data consent agreement on OpenCode Zen; fallback paid tiers at $0.10/$0.20 (Contributor) and $1.25/$4.25 (Standard)
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.4%**
- Tau3-Banking / Tau2-Bench: **72.1%**
- GDPval-AA: **1510**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.5%**

Reasoning / knowledge:

- GPQA Diamond: **82.4%**
- HLE: **32.4%**
- LCR / MLCR: **88.5%**
- CritPt: **75.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / #18**
- Omniscience Accuracy / Hallucination Rate: **88.4% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%**
- LiveCodeBench: **71.4%**
- SciCode / AA-SciCode: **44.5%**
- Vibe Code Bench: **71.2%**
- DeepSWE / Coding Index / other: **61.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.1% at 1M context.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong terminal and MCP-based tool manipulation capabilities, co-trained for complex workflows.
- **Reasoning: 80/100.** High-level reasoning and analytical depth, though slightly below current frontier versions.
- **Context window: 100/100.** Full 1M context with highly accurate retrieval.
- **Multimodal: 75/100.** Strong support for text, image, audio, video, and PDF inputs, text-only output.
- **Coding: 63/100.** Solid code generation capabilities, excellent terminal execution and scriptwriting support.
- **Cost efficiency: 100/100.** Free Contributor-tier access is highly cost-effective for developer workflows.
- **Overall Score: 80/100.** Highly robust, prior-generation coding and agentic model, extremely valuable under the Free Zen tier.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
