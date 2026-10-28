# Qwen3.8 Max — findings by GPT-6 Luna

- Source: Alibaba/Qwen3.8 Max
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's API-hosted Qwen3.8 flagship for coding, professional work, research, and long-horizon agents. The API version adds vision input, non-thinking mode, and built-in tools to the publicly released Qwen3.8-2.4T-A95B checkpoint; these are related but not identical deployment/evaluation configurations. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- **Provider / access:** Alibaba Cloud Model Studio API, model ID `qwen3.8-max`; regional deployments differ. The API alias has a `qwen3.8-max-0902` snapshot. [Alibaba Cloud model reference](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- **Release / knowledge:** API model announced August 3, 2026; upgraded `0902` snapshot listed by Model Studio for September 2, 2026. No exact-model knowledge cutoff found. [Alibaba Cloud launch post](https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-8-max-its-largest-and-most-capable-flagship-model-to-date_603420) · [Model Studio model reference](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- **IDs:** API alias `qwen3.8-max`; pinned snapshot `qwen3.8-max-0902` / `qwen3.8-max-2026-09-02`. The released base checkpoint is `Qwen/Qwen3.8-2.4T-A95B`. [Model Studio model reference](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max) · [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- **Context window:** 1,000,000 tokens in Model Studio; maximum input 991,808 and output 131,072, with a 262,144-token chain-of-thought limit. The official base checkpoint has 262,144 native context, extensible to approximately 1,010,000; this is a genuine API-vs-checkpoint specification difference. [Model Studio model reference](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max) · [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- **Modalities:** API model accepts text, image, and video input and returns text; it supports function calling and structured outputs. The released checkpoint is text-only and requires thinking mode. [Model Studio model reference](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max) · [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- **Pricing (as of 2026-10-28):** Model Studio rates vary by region: $1.65 input / $4.951 output per MTok for global regions such as Germany and global Virginia, and $2/$6 for Singapore and the US-scoped Virginia endpoint. Implicit cache costs $0.206 or $0.25 per MTok respectively. [Model Studio model reference](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- **Architecture:** The released base checkpoint is a 2.4T-parameter sparse MoE with 95B activated parameters and Apache-2.0/Qwen3.8-Max model licensing; its repository details 512 experts and a hybrid attention layout. Alibaba says the API Max model is based on this checkpoint with additional serving features. [Alibaba Cloud launch post](https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-8-max-its-largest-and-most-capable-flagship-model-to-date_603420) · [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)

### Raw benchmarks found

> The August launch/model-card results, external provider runs, and September API snapshot are not interchangeable. The Qwen model card explicitly notes that it reports best-published results across harnesses for some benchmarks.

Agent / tool use:

- OSWorld-Verified: **86.1%**; CoWorkBench: **74.8%**; Toolathlon-Verified: **72.5%**; Agents' Last Exam: **27.0% pass / 52.4 score**; JobBench: **53.4%**. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- Terminal-Bench 2.1: **86.6%** in Qwen's release table; it says this is the best published score across harnesses, rather than a uniform Qwen-run comparison. Vals AI instead reports Terminal-Bench 4.0 at **34.34%**, a different benchmark version. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [Vals AI](https://www.vals.ai/models/alibaba_qwen3.8-max)
- Artificial Analysis' September API snapshot reports Intelligence Index **34** (rank **34/51** in its comparison class) and **$10.02** per Intelligence Index task; this uses the newer `0902` snapshot and a different composite than Qwen's release benchmark table. [Artificial Analysis model page](https://artificialanalysis.ai/models/qwen3-8-max)
- Claw-Eval / ClawProBench: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **92.6%**; HLE: **43.6%** without tools and **56.2%** with tools; IFBench: **82.8%**. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- MRCR v2 8-needle (256K): **92.9%**; LongBench v2: **66.3%**. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- Independent Vals AI runs report GPQA Diamond **93.69%**, MMLU-Pro **88.60%**, and Legal Research Bench **47.60%**. [Vals AI](https://www.vals.ai/models/alibaba_qwen3.8-max)

Coding:

- SWE-bench Pro: **67.7%**; DeepSWE 1.1: **56.6%**; FrontierSWE: **73.5%**; PaperBench: **93.0%**; NL2Repo: **55.9%**. Qwen reports the SWE-Pro score from its Claude Code harness and selects the best of two harnesses for DeepSWE. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- Independent Vals AI results include SWE-bench **85.60%** and LiveCodeBench **87.85%**; Vals' page labels the former SWE-bench, not SWE-bench Pro. [Vals AI](https://www.vals.ai/models/alibaba_qwen3.8-max)

Multimodal:

- MMMU-Pro: **82.3%**; Video-MME (with subtitles): **90.4%**; VideoMMMU: **88.7%**; OmniDocBench 1.5: **92.1%**. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)

Long context:

- MRCR v2 8-needle at 256K: **92.9%** and LongBench v2: **66.3%**. These are checkpoint/release-card results at the stated tests; no comparable 512K–1M retrieval score was verified. [Qwen official model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld-Verified 86.1%, CoWorkBench 74.8%, and Toolathlon-Verified 72.5% support a strong agent rating; Qwen's 86.6% Terminal-Bench 2.1 is explicitly a best-published-harness result, while AutomationBench is only 27.3% and the newer AA snapshot is much less strong on its distinct composite.
- **Reasoning: 93/100.** GPQA Diamond 92.6%, HLE 43.6% without tools / 56.2% with tools, and MRCR v2 92.9% at 256K are frontier results; the separate AA Intelligence Index v5 score of 34 on the updated API snapshot and no verified 512K+ retrieval score cap the rating.
- **Context window: 95/100.** Model Studio documents a 1M-token API window, meeting the ≥1M tier; the 92.9% MRCR result is at 256K, with no verified ≥512K retrieval result to justify a higher score.
- **Multimodal: 85/100.** Official API documentation confirms image and video input, and release results include MMMU-Pro 82.3% and Video-MME 90.4%; output is text, so it remains in the video-input band rather than the audio-output tier.
- **Coding: 88/100.** Terminal-Bench 2.1 at 86.6%, SWE-Pro 67.7%, and FrontierSWE 73.5% are strong; DeepSWE 56.6% is below the methodology's 74% frontier reference, and the headline Terminal-Bench figure is not a uniform-harness result.
- **Cost efficiency: 83/100.** Region-specific $1.65/$4.951 or $2/$6 per MTok is competitive but above the methodology's $1.25/$4.25 high-value reference; Artificial Analysis' $10.02 per Index task on the newer snapshot reinforces the cost cap.
- **Overall Score: 90/100.** Half-up mean of the quality dimensions: (87 + 93 + 95 + 85 + 88) / 5 = 89.6. Best fit is high-end multimodal coding and tool use; users should select the API or downloadable checkpoint with awareness that their context, image, video, and reasoning capabilities differ.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public searches, with Alibaba Cloud deployment documentation and Qwen's model card checked against BenchLM, Artificial Analysis, and Vals AI. Model/API snapshots, checkpoint differences, benchmark variants, and harness differences are called out rather than conflated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
