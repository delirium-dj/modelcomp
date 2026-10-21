# Muse Spark 1.1 — findings by Muse Glimmer 30B

- Source: Meta/muse-spark-1.1
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta’s multimodal reasoning model for coding and agentic workflows with up to 1M context. Paid-only access via Meta Model API; superseded by 1.2/1.3 free tiers.
- **Provider / access:** Meta Model API `opencode/muse-spark-1.1`, Chat Completions. No Free ID on Zen.
- **Release / knowledge:** 2026-07-09 release per evals.report; knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.1`
- **Context window:** 1,048,576 total tokens; 131K max output. Stated in meta.json; verified on dev.meta.ai model page.
- **Modalities:** Text, image, PDF/file in; text out. Tool/function calling and reasoning enabled; no audio/video output reported.
- **Pricing (as of 2026-10-20):** $1.25 / $4.25 per 1M input/output; $0.15 cached. Paid only.
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

- Agent / tool use:
  - MCP Atlas Scaled tool use (**group**): 88.1 (dev.meta.ai/models/muse-spark-1-1)
  - Terminal-Bench 2.1: **80.0%**
  - Tau3-Banking / Tau2-Bench: no verified public score found
  - GDPval-AA: no verified public score found
  - Claw-Eval / ClawProBench: no verified public score found
  - Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified Personal tool use 75.6; OSWorld-Verified Agentic computer use 80.8; JobBench Professional tool use 54.7 (dev.meta.ai)
- Reasoning / knowledge:
  - GPQA Diamond: no verified public score found
  - HLE: **62.1%** Humanity’s Last Exam Multidisciplinary reasoning w/ tools (dev.meta.ai)
  - LCR / MLCR: no verified public score found
  - CritPt: no verified public score found
  - Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
  - Omniscience Accuracy / Hallucination Rate: no verified public score found
- Coding:
  - SWE-bench Verified / SWE-Pro: **61.5%** SWE-Bench Pro Diverse software engineering (dev.meta.ai)
  - LiveCodeBench: no verified public score found
  - SciCode / AA-SciCode: no verified public score found
  - Vibe Code Bench: no verified public score found
  - DeepSWE / Coding Index / other: **53.3%** DeepSWE 1.1 Long-horizon agentic coding (dev.meta.ai)
- Long context:
  - no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 80.0% and MCP Atlas 88.1% show strong agentic tool use; capped below frontier ~88%+ TB2.1.
- **Reasoning: 72/100.** Humanity’s Last Exam 62.1% w/ tools is solid; no public GPQA Diamond / CritPt / LCR limits the score.
- **Context window: 100/100.** 1M total / 131K output tier per meta.json and dev.meta.ai.
- **Multimodal: 75/100.** Image / PDF in, text out. No audio/video output reported; capped at image+PDF tier.
- **Coding: 74/100.** SWE-Bench Pro 61.5% and DeepSWE 1.1 53.3% with Terminal-Bench 80.0% support mid-high coding/agentic coding.
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M paid only; $0 = 100 baseline per methodology.
- **Overall Score: 81/100.** Mean of Tool + Reasoning + Context + Multimodal + Coding = (84+72+100+75+74)/5 = 81. Best fit for paid agentic coding with 1M context.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
