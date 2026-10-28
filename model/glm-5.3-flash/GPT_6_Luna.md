# GLM-5.3-Flash — findings by GPT-6 Luna

- Source: Z.ai/GLM-5.3-Flash
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's open-weight, multimodal GLM-5-series model designed for coding, tool-using agents, and professional workflows. This report covers the `glm-5.3-flash` model code, not the separately listed FlashX or FlashX-Legal routes.
- **Provider / access:** Z.ai Model API, Chat Completion API; also available as downloadable weights and through third-party inference providers. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) · [Hugging Face model card](https://huggingface.co/zai-org/GLM-5.3-Flash)
- **Release / knowledge:** Released August 26, 2026; no exact knowledge cutoff verified. [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3-flash) · [Vals AI](https://www.vals.ai/models/zai_glm-5.3-flash)
- **IDs:** Z.ai API model code `glm-5.3-flash`; Hugging Face weights `zai-org/GLM-5.3-Flash`. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) · [Hugging Face model card](https://huggingface.co/zai-org/GLM-5.3-Flash)
- **Context window:** 1M tokens; max output 128K. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- **Modalities:** Video, image, text, and file input; text output. Reasoning is enabled by default, with `reasoning_effort` levels `low`, `high`, and `max`; function calling and structured output are supported. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) · [Hugging Face model card](https://huggingface.co/zai-org/GLM-5.3-Flash)
- **Pricing (as of 2026-10-28):** Z.ai direct API: $0.15 input / $0.50 output per MTok; cached input $0.03/MTok, with cached-input storage listed as temporarily free. Artificial Analysis agrees with the direct API rate; Vals AI lists $0.07/$0.25, an unexplained provider-price difference, so the official direct rate is used for scoring. [Official Z.ai pricing](https://docs.z.ai/guides/overview/pricing) · [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3-flash) · [Vals AI](https://www.vals.ai/models/zai_glm-5.3-flash)
- **Architecture:** Open weights under the MIT license; 320B total / 18B active parameters, using a hybrid sparse- and linear-attention architecture and Manifold-Constrained Hyper-Connections. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) · [Hugging Face model card](https://huggingface.co/zai-org/GLM-5.3-Flash)

### Raw benchmarks found

> Official scores, independent provider runs, and benchmark composites are shown with their own versions and harness notes rather than treated as interchangeable.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** in Z.ai's release evaluation, run through Claude Code 2.1.207 with max output 65,536 and a six-hour timeout; BenchLM also attributes **84.3%** to the official run. BenchLM separately lists a Vals AI TB 2.1 result of **62.9%**, indicating a substantial run/harness discrepancy. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) · [BenchLM](https://benchlm.ai/models/glm-5-3-flash) · [Vals AI model page](https://www.vals.ai/models/zai_glm-5.3-flash)
- GDPval-AA v2: **1,773 Elo**; Toolathlon-Verified: **78.4% pass@1** averaged across three runs; AutomationBench v1.0.6: **48.8%**; Agents' Last Exam: **26.3% pass**. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) · [BenchLM](https://benchlm.ai/models/glm-5-3-flash)
- Tau3-Banking: **47.2%** in Artificial Analysis' leaderboard; AA ITBench: **51.2%**. [BenchLM](https://benchlm.ai/models/glm-5-3-flash)
- Claw-Eval / ClawProBench: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **86.36%** (Vals AI); MMLU-Pro: **86.06%** (Vals AI). [Vals AI](https://www.vals.ai/models/zai_glm-5.3-flash)
- Humanity's Last Exam with tools: **55.3%**; Z.ai says the full-set evaluation used a 300K maximum context, max generation of 163,840 tokens, and GPT-5.6 Luna (medium) as judge. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- Artificial Analysis Intelligence Index v4.1.1: **57** at release, with a discounted **$0.045 per task**, per Z.ai's launch documentation. Artificial Analysis' current page has retired legacy workloads and no refreshed v5 score displayed; the historic v4.1.1 figure is not a current v5 result. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) · [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3-flash)
- BenchLM aggregate: **58.65/100, rank #61 of 1,000**, based on 33 of its 716 tracked benchmarks (partial coverage; not the project's normalized score). No verified exact-model Omniscience accuracy / hallucination pair found. [BenchLM](https://benchlm.ai/models/glm-5-3-flash)

Coding:

- DeepSWE v1.1: **63.4%** (mini-swe-agent harness, 400K context, six-hour timeout); NL2Repo: **56.3%** under a 1M context; Terminal-Bench 2.1: **84.3%** as above. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- SWE-bench: **92.0%** (Vals AI's benchmark label; it does not label this as SWE-bench Pro); LiveCodeBench: **80.51%**; Vibe Code Bench v1.1: **30.76%**. [Vals AI](https://www.vals.ai/models/zai_glm-5.3-flash)
- SciCode: **no verified public score found**.

Multimodal:

- MMMU-Pro: **86.01%** (Vals AI); CharXiv: **89.4%**; Chartography with tools: **78.0%**; MMVU: **80.5%** (Z.ai release table). [Vals AI](https://www.vals.ai/models/zai_glm-5.3-flash) · [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)

Long context:

- Official API context window: **1M tokens**, but no verified MRCR, RULER, LCR, or GraphWalks retrieval score at 512K+ was located. Z.ai describes long-context quality as preserved by its hybrid attention design without publishing an exact-model retrieval figure on the accessible model page. [Z.ai model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1,773 Elo, Toolathlon-Verified 78.4%, and Terminal-Bench 2.1 at 84.3% are strong; the 62.9% Vals TB 2.1 result, 48.8% AutomationBench, and 26.3% Agents' Last Exam cap confidence and the rating.
- **Reasoning: 90/100.** GPQA Diamond 86.36%, HLE with tools 55.3%, and the historical AA Index 57 show strong reasoning; GPQA is below the methodology's 90% frontier reference and the refreshed AA v5 score is unavailable.
- **Context window: 95/100.** Officially supports 1M tokens, meeting the methodology's top context tier; no retrieval score at 512K+ was verified, so 100 is not justified.
- **Multimodal: 85/100.** Official docs list video, image, and file input with text output, placing it in the video/PDF range; no audio input or non-text output is documented.
- **Coding: 89/100.** Terminal-Bench 2.1 at 84.3%, DeepSWE 63.4%, and Vals SWE-bench 92.0% support a strong score; DeepSWE is below the 74% frontier reference and Vibe Code Bench v1.1 is 30.76%.
- **Cost efficiency: 96/100.** Official direct pricing of $0.15/$0.50 per MTok and $0.03 cached input is exceptionally low; the official rate is used despite Vals AI's unreconciled $0.07/$0.25 figures.
- **Overall Score: 90/100.** Half-up mean of quality dimensions: (90 + 90 + 95 + 85 + 89) / 5 = 89.8. A compelling low-cost option for multimodal coding and tool-driven work; benchmark harness spread and unverified million-token retrieval warrant caution.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public web searches, with Z.ai model/API/pricing docs and the Hugging Face model card cross-checked against Artificial Analysis, BenchLM, and Vals AI. Conflicting prices, benchmark harnesses, and index revisions are labeled. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
