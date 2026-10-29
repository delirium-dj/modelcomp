# DeepSeek-V4-Flash-Vision-Exp — findings by GPT-6 Luna

- Source: DeepSeek AI/DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's experimental multimodal checkpoint built on the V4-Flash architecture with added visual modules and continued training. DeepSeek reports stronger multimodal-agent results than V4-Flash-0731 while retaining comparable text-agent performance.
- **Provider / access:** MIT-licensed weights are published at [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp). The former API ID `deepseek-v4-flash-vision-exp` is now documented as a retired legacy name; requests made with it are routed to DeepSeek-V4.1-Flash-1017 and billed at the current Flash price. This report's benchmark scores describe the distinct published Vision-Exp checkpoint, not that replacement route.
- **Release / knowledge:** The official Hugging Face repository was created 2026-08-31 and last modified 2026-09-01. No training-data or knowledge cutoff was verified.
- **IDs:** Checkpoint `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`; retired API alias `deepseek-v4-flash-vision-exp` (now routes to DeepSeek-V4.1-Flash-1017, per [DeepSeek API docs](https://api-docs.deepseek.com/guides/vision)).
- **Context window:** The published checkpoint configuration specifies 1,048,576 tokens with YaRN scaling from 65,536. The currently routed API alias uses the replacement Flash service; its serving limit should not be read as a separate live Vision-Exp deployment.
- **Modalities:** Image input and text output, per the official Hugging Face `image-text-to-text` model card and vision-module description. No official video or audio input support for this checkpoint was verified.
- **Pricing (as of 2026-10-29):** No active, standalone Vision-Exp API price was found. DeepSeek says requests to the retired alias are routed to V4.1-Flash-1017 and billed at the current Flash rate; that is replacement-route pricing, not a price measured for this checkpoint. Self-hosted inference cost depends on hardware and is not normalized here.
- **Architecture:** DeepSeek-V4-Flash base with added vision modules; configuration identifies a 43-layer DeepSeek V4 model with 256 routed experts, 6 selected per token, one shared expert, plus a 32-layer vision encoder. Total parameter count was not stated in the model card/configuration reviewed.

### Raw benchmarks found

Three independent public searches were followed by direct verification against DeepSeek's official [model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp), checkpoint configuration, and [API Vision documentation](https://api-docs.deepseek.com/guides/vision). The values below are the explicit DeepSeek-V4-Flash-Vision-Exp column in the model card; no results from the current V4.1-Flash-1017 API replacement are attributed to this checkpoint.

Agent / tool use:

- Terminal-Bench 2.1: **83.9%**; Toolathlon-Verified: **75.9%**; DSBench-Hard: **63.6%**; AutomationBench (Public): **25.7%** (official model card).
- Multimodal agent benchmarks: ApexBench Pass@1 **36.5%**; Agents' Last Exam **27.3%**; Chartography **64.3%**; ZeroBench Pass@5 **35.0%** (same source).
- DeepSeek says its text-agent benchmarks used minimal DeepSeek Harness, `max` reasoning effort, temperature 1.0, and top_p 0.95. It reports that the earlier V4-Flash-0731 comparator ignored multimodal input on ApexBench and Agents' Last Exam.

Reasoning / knowledge:

- Agents' Last Exam: **27.3%** in the model card's multimodal-agent section. This is not a standalone GPQA, HLE, or general reasoning result.
- No exact-checkpoint GPQA Diamond, HLE, AIME, or Intelligence Index score was found. Do not attribute V4 or V4.1-Flash results to Vision-Exp.

Coding / text-agent capability:

- Terminal-Bench 2.1: **83.9%**; NL2Repo: **57.7%**; DeepSWE: **59.3%**; Cybergym: **75.3%** (official model card).
- Toolathlon-Verified: **75.9%** and AutomationBench (Public): **25.7%** (same source). The model card says text-only agent performance is comparable to V4-Flash-0731; no exact-checkpoint SWE-bench Pro, SWE-bench Verified, LiveCodeBench, or SciCode result was found.

Vision:

- ApexBench Pass@1: **36.5%**; Chartography: **64.3%**; ZeroBench Pass@5: **35.0%** (official model card). Agents' Last Exam: **27.3%**.
- These results are multimodal-agent scores, not a full image-recognition suite. No MMMU-Pro, MathVista, or equivalent general vision score was found.

Long context:

- The published configuration advertises 1,048,576 tokens, but no exact-checkpoint MRCR/RULER retrieval score was found. The retired API alias currently routes to V4.1-Flash-1017, so this 1M configuration figure is for the open checkpoint, not a guarantee about that API route.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 83.9% and Toolathlon-Verified at 75.9% are near-frontier agent evidence; no exact-checkpoint Tau3/GDPval result was found.
- **Reasoning: 75/100.** The model card has no standalone GPQA/HLE/math result; Agents' Last Exam is an agent benchmark and is not used as a general-reasoning substitute. This score is conservative because of the evidence gap.
- **Context window: 95/100.** The checkpoint config supports 1M tokens, meeting the methodology's top context tier; there is no retrieval score to justify 100.
- **Multimodal: 68/100.** Verified image input places it in the image-input band; no video/audio input or non-text output was verified. Multimodal-agent scores support capability but do not change the modality tier.
- **Coding: 88/100.** Terminal-Bench 2.1 at 83.9% and DeepSWE at 59.3% are strong, though below the methodology's highest DeepSWE/TB reference levels and lacking exact-checkpoint SWE-bench evidence.
- **Cost efficiency: 15/100.** Evidence-insufficient placeholder only: no separate active price exists for the checkpoint, and the retired API alias's current replacement-route price cannot be attributed to Vision-Exp. This is not a claim that self-hosting is expensive.
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions (85, 75, 95, 68, 88), excluding cost; strongest evidence is agentic coding and image-conditioned tasks, with general-reasoning coverage and an independent live API route unverified.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries followed by primary-source checks of the model card/configuration and DeepSeek API docs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
