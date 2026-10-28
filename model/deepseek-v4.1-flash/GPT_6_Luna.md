# DeepSeek V4.1 Flash — findings by GPT-6 Luna

- Source: DeepSeek (`DeepSeek-V4.1-Flash`, original September 2026 checkpoint)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's open-weight multimodal reasoning model for agentic coding and long-context work. This report covers the original September release, not the separately tracked October `DeepSeek-V4.1-Flash-1017` update.
- **Provider / access:** The original checkpoint is published on Hugging Face as `deepseek-ai/DeepSeek-V4.1-Flash` under MIT and can be self-hosted. DeepSeek's current API ID `deepseek-flash` serves the newer `DeepSeek-V4.1-Flash-1017`; the older API names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` also route to 1017. No current DeepSeek API route that pins the original checkpoint was verified. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) · [DeepSeek API models and pricing](https://api-docs.deepseek.com/quick_start/pricing)
- **Release / knowledge:** Released September 10, 2026, according to Vals AI and Artificial Analysis. No exact-model knowledge cutoff found. [Vals AI](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash) · [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
- **IDs:** Official weights repository `deepseek-ai/DeepSeek-V4.1-Flash`. DeepSeek's current `deepseek-flash` API ID is explicitly versioned as 1017 and is not treated as this original checkpoint. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) · [DeepSeek API models and pricing](https://api-docs.deepseek.com/quick_start/pricing)
- **Context window:** 1M tokens. The technical report recommends `max_tokens` of at least 256K for local inference but does not state a hard maximum output limit. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
- **Modalities:** Text and image input; text output. Reasoning effort is configurable; no video or audio support verified. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) · [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
- **Pricing (as of 2026-10-28):** Artificial Analysis' archived page for this older model lists $0.30 input / $1.20 output per MTok. The current DeepSeek price page instead lists the `deepseek-flash` successor route at $0.15/$0.60 off-peak and $0.30/$1.20 peak; those active rates are for 1017, not a verified current price for the original checkpoint. The original weights are MIT-licensed for self-hosting. [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash) · [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing)
- **Architecture:** Open-weight MIT-licensed, 552B-backbone multimodal MoE; 8B active parameters per token during prefill and 16B during decode. The technical report describes a 40-layer causal encoder-decoder design. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)

### Raw benchmarks found

> The source values below are for the original DeepSeek V4.1 Flash checkpoint. The October 17 1017 update has separate numbers and is not substituted. DeepSeek's model card and Vals AI disagree substantially on Terminal-Bench 2.1; the harness/source is retained with each result.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** in DeepSeek's model-card table using DeepSeek Harness Minimal; the card's scaffold study reports **88.0%** with Claude Code, **85.0%** with OpenCode, and **90.6%** with DeepSeek Harness Minimal. Vals AI reports **74.53%** across three full trials on its independent evaluation. These are not matched harness runs. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) · [Vals AI](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
- Terminal-Bench 4.0: **31.2%** in the October 17 1017 card's explicit comparison column for the older `DeepSeek-V4.1-Flash`; AutomationBench: **54.8%**; Agents' Last Exam: **31.8%**. [DeepSeek V4.1 Flash 1017 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
- GDPval-AA: **1,600 Elo** on BenchmarkList's record; Vals Finance Agent v2: **65.43%**. [BenchmarkList](https://benchmarklist.com/models/deepseek-v4.1-flash/) · [Vals AI](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
- Claw-Eval / ClawProBench and Tau3-Banking: **no verified exact-model result found**.

Reasoning / knowledge:

- GPQA Diamond: **90.9%** in DeepSeek's model-card comparison table for the original checkpoint. HLE without tools: **36.8%** (text-only subset **39.1%**); HLE with tools: **51.5%** in the model-card evaluation. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
- Vals AI reports a **57.86% Vals Index** (#1 among open-weight models, #15/56 overall) for its September 10 evaluation. This is Vals' composite, not an Artificial Analysis index or project score. [Vals AI](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
- The current BenchLM page under this family name describes the **1017** update (65.98/100, #36/1,001); it is not used as a score for the original checkpoint. [BenchLM](https://benchlm.ai/models/deepseek-v4-1-flash)
- CritPt / AA Intelligence Index: **no verified current result for the original checkpoint found**; the available current index page is deprecated and does not provide a refreshed score. [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash)

Coding:

- DeepSWE v1.1: **74.2%** in the official comparison results; the model card's scaffold study reports **74.2%** on mini-SWE and lower results from other harnesses (65.5–72.6%). [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) · [DeepSeek V4.1 Flash 1017 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
- Vibe Code Bench v1.1: **84.74%**; Code Migration v1.1: **58.94%**; SkillsBench: **69.80%** with skills (Vals reports **61.66%** without skills). [Vals AI](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
- ProgramBench: **20.3%**; NL2Repo-Bench: **65.4%**; Terminal-Bench 4.0: **31.2%** in the 1017 card's explicit original-model comparison column. These results are much weaker than the official Terminal-Bench 2.1 score and show strong benchmark/harness variance. [DeepSeek V4.1 Flash 1017 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)

Multimodal:

- DeepSeek's base-model evaluation gives MMMU-Pro **56.5%** (4-shot), CVBench **77.9%**, DocVQA **95.6%**, and RefCOCO average **86.0%**. These are base-model tests; the instruct model's verified public capability is image input with text output. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)

Long context:

- The official context limit is **1M tokens**; LongBench-V2 is **45.2%** in the original model card's base-model evaluation. No exact-checkpoint MRCR/RULER needle-retrieval result at 512K or 1M was verified. [Original model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)

### Normalized scores (1–100)

- **Tool use: 87/100.** DeepSeek reports 90.6% on Terminal-Bench 2.1 and Vals reports 74.53%; GDPval-AA is 1,600 Elo and the later-edition Terminal-Bench 4.0 is 31.2%, with harness and benchmark variance limiting confidence.
- **Reasoning: 86/100.** GPQA Diamond at 90.9% is excellent and HLE with tools reaches 51.5%, but HLE without tools is 36.8% and the current Intelligence Index evidence belongs to the newer 1017 update.
- **Context window: 95/100.** The 1M-token window meets the methodology's ≥1M tier; LongBench-V2 at 45.2% is not a 1M needle-retrieval result, so no retrieval premium is added.
- **Multimodal: 65/100.** Image input is verified, but no audio/video or non-text output is documented; image benchmarks support the capability claim without raising it beyond the image-input band.
- **Coding: 88/100.** DeepSWE v1.1 at 74.2% and Vibe Code Bench v1.1 at 84.74% are strong, but Terminal-Bench 4.0 at 31.2% and ProgramBench at 20.3% materially cap the rating.
- **Cost efficiency: 95/100.** The archived exact-model listing is inexpensive at $0.30/$1.20 per MTok; current DeepSeek API pricing applies to the separately identified 1017 route, so this is a historical price assessment rather than a claim of current access to the older checkpoint.
- **Overall Score: 84/100.** Half-up mean of the five quality dimensions: (87 + 86 + 95 + 65 + 88) / 5 = 84.2. Best suited to cost-sensitive, image-aware coding and agent experiments where the original weights can be pinned/self-hosted; use caution when extrapolating from the unusually strong DeepSeek Harness TB2.1 result to other harnesses or later benchmark editions.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent Bing web searches, then checked DeepSeek's official API documentation and Hugging Face model cards against Artificial Analysis, BenchmarkList, and Vals AI. The separate 1017 update and API rerouting are called out; conflicting Terminal-Bench results retain their benchmark editions and harnesses. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
