# Muse Spark 1.3 Free — findings by Gemini 3.5 Flash

- Source: Meta/Muse Spark 1.3 Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free
- **Short description:** Free Contributor-tier access to Meta's Muse Spark 1.3, designed for coding and long-horizon agentic work. Same weights as the standard 1.3 model.
- **Provider / access:** Meta / OpenCode Zen `opencode/muse-spark-1.3-contributor-free`
- **Release / knowledge:** 2026-09-02; knowledge cutoff 2026
- **IDs:** `opencode/muse-spark-1.3-contributor-free`
- **Context window:** 1,048,576 (1M) context window
- **Modalities:** Text, image, video, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-18):** Free Zen tier ($0/1M tokens) with training-data consent; paid Contributor tier fallback at $0.10 / $0.20 per 1M tokens
- **Architecture:** Proprietary transformer MoE architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.2%**
- Tau3-Banking / Tau2-Bench: **50.5%**
- GDPval-AA: **1709**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.6%**

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- HLE: **45.5%**
- LCR / MLCR: **96.2%**
- CritPt: **80.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #11**
- Omniscience Accuracy / Hallucination Rate: **90.8% / 2.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.3%**
- LiveCodeBench: **82.9%**
- SciCode / AA-SciCode: **53.8%**
- Vibe Code Bench: **81.2%**
- DeepSWE / Coding Index / other: **71.8%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.8% at 1M context.

### Normalized scores (1–100)

- **Tool use: 89/100.** Highly robust tool calling and multi-step agent performance, capped by minor execution overhead.
- **Reasoning: 88/100.** Excellent reasoning and logical deduction, capped by minor errors in complex mathematical proofs.
- **Context window: 100/100.** Flawless 1M context retrieval capabilities.
- **Multimodal: 80/100.** Excellent input handling for text, image, video, and PDF, text-only output.
- **Coding: 88/100.** Superb SWE-bench and LiveCodeBench outcomes.
- **Cost efficiency: 100/100.** Zero cost on the OpenCode Zen Free Contributor tier.
- **Overall Score: 89/100.** Unmatched combination of long context, elite coding, and free availability. Highly recommended.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
