# Muse Spark 1.3 — findings by Kimi K3.1 Pro

- Source: Meta/Muse Spark 1.3 (`muse-spark-1.3`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary reasoning model for long-horizon agentic and coding work, with a 1M-token context window and multimodal input. The Contributor route is a data-rights pricing tier of the same checkpoint, not a separate model.
- **Provider / access:** Meta Model API and Muse Code; Responses API is preferred for multi-step agent loops because it can replay encrypted reasoning, while Chat Completions cannot do so for external keys.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not publicly verified.
- **IDs:** `muse-spark-1.3` (Standard), `muse-spark-1.3-contributor` (Contributor); no OpenCode Zen Free ID verified.
- **Context window:** 1,048,576 tokens total; documentation examples permit 131,072 max output, verified against Meta API documentation as reported by MyClaw and independently tracked by Artificial Analysis.
- **Modalities:** Text, image, video, PDF and degraded/limited audio in; text out; reasoning with configurable effort; tool calls and agent workflows supported. JSON mode was not independently verified.
- **Pricing (as of 2026-11-01):** Standard $1.25 input / $4.25 output / $0.15 cached input per 1M tokens. Contributor $0.10 / $0.20 / $0.002 respectively, but prompts and completions may be used to train future Meta models. Web-search grounding is $2.50 per 1,000 queries.
- **Architecture:** Proprietary; parameter count and architecture details not disclosed, weights unavailable.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**agentic terminal/coding**): **89.2%** at `xhigh`; **88.8%** at `max` (Meta evaluation table reproduced by MyClaw; matched-effort comparison is important).
- GDPval-AA v2 (**professional agentic work**): **1709 Elo** at `xhigh`; human baseline 1000 (Meta evaluation table reproduced by MyClaw).
- OSWorld 2.0 (**computer use**): **57.2%** at `xhigh`, version 08.08 (Meta evaluation table reproduced by MyClaw).
- DeepSearchQA (**agentic research**): **89.4%** at `xhigh` (Meta evaluation table reproduced by MyClaw).
- SWE-Atlas Codebase QnA: **54.0%** at `xhigh` (Meta evaluation table reproduced by MyClaw).
- JobBench: **61.2%** at `xhigh` (Meta evaluation table reproduced by MyClaw).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **36**, ranked **#30 of 583** for the Max variant (independent Artificial Analysis release page).
- GPQA Diamond: **no verified public score found**.
- HLE / HLE-Diamond: **no separately verified numeric score found**; it is one component of AA Intelligence Index v5.0.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no separately verified numeric score found**; CritPt v2 Hard is one component of AA Intelligence Index v5.0.
- Omniscience Accuracy / Hallucination Rate: **no separately verified numeric score found**.

Coding:

- DeepSWE v1.1: **75.4%** at `max`, using mini-swe-agent; the `xhigh` cell was not reported (Meta evaluation table reproduced by MyClaw).
- Terminal-Bench 2.1: **89.2%** at `xhigh` (Meta evaluation table reproduced by MyClaw).
- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR 256K–512K: **97.6%** at `xhigh`; MRCR 512K–1M: **93.1%** at `xhigh` (Meta evaluation table reproduced by MyClaw).

### Normalized scores (1–100)

- **Tool use: 96/100.** Terminal-Bench 89.2%, GDPval-AA 1709 Elo and DeepSearchQA 89.4% demonstrate excellent tool and agent performance; OSWorld 57.2% and missing Tau/Toolathon results cap the score.
- **Reasoning: 88/100.** AA Intelligence Index 36 provides independent evidence of strong general reasoning, but separate GPQA, HLE and CritPt numbers were not available for direct verification.
- **Context window: 98/100.** The full 1M window is backed by exceptional measured MRCR results of 97.6% at 256K–512K and 93.1% at 512K–1M.
- **Multimodal: 86/100.** Text, image, video and PDF input give broad coverage, but text-only output, degraded audio support and the absence of a verified multimodal benchmark number cap the score.
- **Coding: 95/100.** DeepSWE 75.4%, Terminal-Bench 89.2% and SWE-Atlas Codebase QnA 54.0% support top-tier agentic coding; missing SWE-bench Verified and LiveCodeBench results prevent a higher confidence score.
- **Cost efficiency: 86/100.** Contributor pricing is exceptionally inexpensive at $0.10/$0.20 per 1M but requires training-data consent; Standard pricing is a moderate $1.25/$4.25 with an 88% cache discount.
- **Overall Score: 92.6/100.** Half-up mean of 96, 88, 98, 86 and 95; best fit for long-horizon coding, research and tool-using agents where very long context matters.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-01
- Method: Independent public internet research using three searches, Meta's launch and evaluation materials, Artificial Analysis, LLM Stats and MyClaw; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Introducing Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Meta — Muse Spark 1.3 Evaluation Report](https://research.meta.ai/static/muse-spark-1-3-evaluation-report)
  - [Artificial Analysis — Muse Spark 1.3 release](https://artificialanalysis.ai/models/releases/muse-spark-1-3)
  - [MyClaw — Muse Spark 1.3 specifications and evaluation table](https://myclaw.ai/blog/muse-spark-1-3)
  - [LLM Stats — Muse Spark 1.3 pricing and specifications](https://llm-stats.com/models/muse-spark-1.3)
- Future sources: add a new file next to this one using the same headings.
