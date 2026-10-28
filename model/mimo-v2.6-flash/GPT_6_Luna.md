# MiMo-V2.6-Flash — findings by GPT-6 Luna

- Source: Xiaomi (`MiMo-V2.6-Flash-RL`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficiency-focused, open-weight reasoning model in the MiMo-V2.6 family, tuned for coding and agent workflows. This is the Flash checkpoint/service, not MiMo-V2.6-Pro or Pro-UltraSpeed.
- **Provider / access:** Xiaomi MiMo Open Platform API and self-hostable Hugging Face weights `XiaomiMiMo/MiMo-V2.6-Flash-RL`; also available through OpenRouter as `xiaomi/mimo-v2.6-flash`. The OpenRouter route uses Chat Completions; local serving examples are OpenAI-compatible vLLM/SGLang endpoints. [Xiaomi release post](https://mimo.xiaomi.com/mimo-v2-6) · [official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [OpenRouter API reference](https://openrouter.ai/xiaomi/mimo-v2.6-flash)
- **Release / knowledge:** Released September 22, 2026. No exact-model knowledge cutoff found. [Xiaomi release post](https://mimo.xiaomi.com/mimo-v2-6/article.html)
- **IDs:** Official weights ID `XiaomiMiMo/MiMo-V2.6-Flash-RL`; Xiaomi API product name `MiMo-V2.6-Flash`; OpenRouter API ID `xiaomi/mimo-v2.6-flash`. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [OpenRouter](https://openrouter.ai/xiaomi/mimo-v2.6-flash)
- **Context window:** 1,048,576 tokens. No separate maximum output-token limit verified. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- **Modalities:** Xiaomi describes the checkpoint as natively omnimodal, supporting text, image, video, and audio input. Artificial Analysis' evaluated hosted profile lists text and image input with text output; generated audio was not verified. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
- **Pricing (as of 2026-10-28):** Xiaomi API: $0.14 input / $0.28 output per MTok; cached input $0.0028/MTok. Xiaomi's release page says cache writes are temporarily free. [Xiaomi release post](https://mimo.xiaomi.com/mimo-v2-6/article.html)
- **Architecture:** Open weights under MIT; sparse MoE with 309B total and 15B activated parameters, 256 routed experts (8 active per token), 48 transformer layers, and separate vision and audio encoders. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)

### Raw benchmarks found

> Xiaomi's technical report provides exact Flash-column results; these are vendor-reported and the launch post does not fully specify benchmark harnesses. Artificial Analysis independently evaluates the hosted profile. BenchmarkList indicates that much of the wider public coverage still comes from Xiaomi's report, so independent validation remains limited.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report); Terminal-Bench 4.0: **28.8%**; AutomationBench v1.0.6: **52.3%**; Toolathlon-Verified: **73.6%**; OSWorld-Verified: **80.8%**; JobBench: **61.2%**; Agents' Last Exam: **27.6%**. These are Xiaomi's release results, not independent reproductions. [Xiaomi release post](https://mimo.xiaomi.com/mimo-v2-6/article.html) · [official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- AA-Briefcase: **1,491 Elo**; GDPval-AA 2.1: **no Flash result reported** in Xiaomi's comparison table. [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-flash/) · [official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- Claw-Eval / ClawProBench and Tau3-Banking: **no verified exact-model result found**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **27 points** on the current AA page; HLE: **35.1%**; CritPt: **12.0%**; AA-LCR: **74.3%**. Artificial Analysis' current page describes its v5.0 index. [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
- BenchmarkList and BenchLM report an AA Intelligence Index value of **37.9** in their indexed results. This differs from the current AA page's **27**; these appear to reflect different index snapshots/revisions, and should not be treated as a matched-score change. [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-flash/) · [BenchLM](https://benchlm.ai/models/mimo-v2-6-flash)
- BenchLM aggregate: **64.81/100**, rank **#40/1,002**, covering 24/716 benchmarks. This is BenchLM's partial-coverage composite, not the project's normalized score. [BenchLM](https://benchlm.ai/models/mimo-v2-6-flash)
- GPQA Diamond: **no verified exact-model score found** in the model card and evaluation pages reviewed.

Coding:

- DeepSWE v1.1: **67.9%**; ProgramBench: **26.0%**; MiMo Code Bench: **61.2%**; Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0: **28.8%**. These exact Flash results are listed in Xiaomi's technical-report table. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- SciCode: **51.3%** on Artificial Analysis' evaluated profile. [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
- SWE-bench Verified / SWE-Pro and LiveCodeBench: **no verified exact-model result found**.

Multimodal:

- MiMo VisualCoding: **71.5%** in Xiaomi's report. Artificial Analysis reports MMMU-Pro **73.1%** for its evaluated profile. The official checkpoint card supports image/video/audio input, while the AA profile currently lists text/image input; video/audio performance has not been independently verified here. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-flash/)

Long context:

- The official context limit is **1M tokens**; Artificial Analysis' AA-LCR result is **74.3%**. No exact-model MRCR/RULER needle-retrieval result at 512K or 1M was verified, so the 1M limit alone does not establish retrieval reliability. [Official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)

### Normalized scores (1–100)

- **Tool use: 85/100.** The vendor reports 87.6% on Terminal-Bench 2.1, 73.6% on Toolathlon, and 80.8% on OSWorld, but Terminal-Bench 4.0 is 28.8%, AutomationBench 52.3%, and Claw/Tau3 results are absent.
- **Reasoning: 77/100.** HLE is 35.1% and AA-LCR 74.3%, with CritPt at 12%; the current AA Index is 27, while older indexed sources show 37.9, and GPQA is unverified.
- **Context window: 95/100.** The documented 1M-token limit meets the ≥1M tier; no 512K/1M retrieval score supports a higher rating.
- **Multimodal: 90/100.** The official checkpoint supports text, image, video, and audio input, but independent platform coverage only confirms text/image and no non-text output was verified.
- **Coding: 84/100.** DeepSWE v1.1 at 67.9% and Terminal-Bench 2.1 at 87.6% are strong, while Terminal-Bench 4.0 at 28.8%, ProgramBench at 26%, and SciCode at 51.3% cap the score.
- **Cost efficiency: 98/100.** Xiaomi's $0.14/$0.28 per MTok and $0.0028 cache-hit pricing are exceptionally low; cache writes are temporarily free.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions: (85 + 77 + 95 + 90 + 84) / 5 = 86.2. A strong low-cost choice for coding and agent work; independently validate the target harness, and confirm video/audio availability on the API route if those modalities are required.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent Bing searches for official model information, exact Flash benchmark results, and independent evaluations; checked Xiaomi's September 22 release post and Hugging Face model card against Artificial Analysis, BenchmarkList, and BenchLM. Vendor-reported and independently measured results are labeled; the AA index snapshot discrepancy and modality-profile difference are called out. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
