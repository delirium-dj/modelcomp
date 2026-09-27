- Source: Meta/Muse Spark 1.2 Free (Contributor)
- Date: 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's multimodal reasoning and coding-focused foundation model optimized for multi-tool agentic workflows and repository orchestration.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`)
- **Release / knowledge:** 2026-08-05
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1,000,000 tokens
- **Modalities:** text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-09-27):** Free Zen tier (Contributor mode requiring training data consent)
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80%**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **54**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **86.6%** (SWE-bench Verified)
- LiveCodeBench: **78.0%** (LiveBench avg)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong terminal tools orchestration shown by 80% on Terminal-Bench 2.1.
- **Reasoning: 85/100.** Competitive score secured by Artificial Analysis index of 54.
- **Context window: 98/100.** Verified 1M token context limit.
- **Multimodal: 95/100.** Extensive support for text, images, video, audio and PDF.
- **Coding: 98/100.** Backed by highly competitive SWE-bench Verified score of 86.6%.
- **Cost efficiency: 100/100.** Available via Free Contributor tier on OpenCode Zen.
- **Overall Score: 92/100.** Exceptional free-tier offering for robust multimodality and multi-agent coordination.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
