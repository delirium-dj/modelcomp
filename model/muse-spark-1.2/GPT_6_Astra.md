# Muse Spark 1.2 — findings by GPT 6 Astra

- Source: Meta / Muse Spark 1.2
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Muse Spark 1.2; Contributor is a pricing/data-use tier of this model.
- **Short description:** Proprietary reasoning model focused on coding and sustained tool workflows.
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, supporting Chat Completions, Responses and Messages-compatible protocols; also OpenRouter.
- **Release / knowledge:** August 5, 2026 release; cutoff unverified.
- **IDs:** `muse-spark-1.2`, `muse-spark-1.2-contributor`; no verified Free Zen ID.
- **Context window:** 1,048,576 tokens; maximum output unverified.
- **Modalities:** Text, images and video understanding; text output, reasoning, parallel tool calls and structured JSON. Separate Muse Image/Voice products are not native Spark output. [API documentation](https://dev.meta.ai/docs/overview).
- **Pricing (as of 2026-10-03):** Standard $1.25 input / $4.25 output / $0.15 cached per million; Contributor $0.10 / $0.20 / $0.002. Contributor data is used to improve Meta products; standard is not. [Official model card](https://dev.meta.ai/models/muse-spark-1-2).
- **Architecture:** Proprietary; parameter counts and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- AA launch evaluation, xhigh: Terminal-Bench 2.1 **80%**, Tau3-Banking **27%**, GDPval-AA v2 **1631 Elo**, then **#5**. Historical August harness/rank, not current v2.1 Elo. [AA research](https://artificialanalysis.ai/articles/muse-spark-1-2).
- Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found in reviewed text.

Reasoning / knowledge:

- HLE **44%**, CritPt **18%**, AA Intelligence Index **54** at launch; Omniscience **38% accuracy / 28% hallucination rate**, index **22**. Same [AA evaluation](https://artificialanalysis.ai/articles/muse-spark-1-2). Index version differs from today's v4.3.2; historical values are not directly comparable.
- GPQA, LCR/MLCR and BenchLM: no verified public score found.

Coding:

- SciCode **56%**, same AA source; Terminal-Bench provides additional agentic coding evidence.
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and DeepSWE: no verified public numeric score found in reviewed accessible sources.

Long context:

- No verified full-window retrieval measurement found; advertised size alone does not establish retrieval reliability.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench and GDPval are strong; Tau3-Banking 27% shows uneven tool reliability.
- **Reasoning: 88/100.** HLE and CritPt support strong reasoning; Omniscience accuracy limits confidence in factual breadth.
- **Context window: 95/100.** Verified million-token capacity meets the top size tier, without evidence for perfect retrieval.
- **Multimodal: 85/100.** Image/video/document workflows exceed image-only scope; native audio and nontext output are unverified.
- **Coding: 89/100.** SciCode 56% and terminal 80% show substantial coding capability; missing repository benchmarks cap the estimate.
- **Cost efficiency: 89/100.** Standard $1.25/$4.25 offers strong value; Contributor is cheaper but has materially different data-use terms.
- **Overall Score: 88/100.** Half-up mean of 85, 88, 95, 85 and 89 is 88; a cost-effective long-context coding option.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Historical benchmark version and tier distinctions retained.
- Future sources: Add a separate signed findings file alongside this report.
