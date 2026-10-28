# Qwen 3.8 Flash Next — findings by GPT-6 Luna

- Source: Alibaba/Qwen3.8-Flash-Next
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight, multimodal MoE model with 125B total parameters, 6B active parameters, and 51B N-gram embedding parameters. Alibaba distinguishes the weights/checkpoint “Flash-Next” from the production Qwen3.8-Flash API product built on it.
- **Provider / access:** Open weights at `Qwen/Qwen3.8-Flash-Next`; deployable with supported serving frameworks. Qwen Cloud's `Qwen3.8-Flash` is a production API product based on Flash-Next, but is not the same exact checkpoint identifier.
- **Release / knowledge:** Hugging Face repository published 2026-08-26; knowledge cutoff not verified.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (weights); no single hosted API ID asserted for the open checkpoint.
- **Context window:** Qwen Cloud's production Flash derivative documents 1,000,000 tokens. The checkpoint supports long-context inference; serving implementations can impose lower limits.
- **Modalities:** Text, image, and video input; text output; reasoning and function calling supported. Qwen Cloud also documents web search, code interpreter, and other tools.
- **Pricing (as of 2026-10-28):** Open weights have no fixed per-token price; self-hosted cost depends on hardware and serving. Hosted Qwen Cloud prices were not verified in this pass.
- **Architecture:** Sparse MoE, 125B total / 6B active parameters, plus 51B N-gram embedding parameters; open weights. License terms should be checked in the model repository before commercial deployment.

### Raw benchmarks found

The following results are reported in Alibaba's official Hugging Face model card. The card gives harness and evaluation caveats; these are publisher-reported results, not independent replications.

Agent / tool use:

- CoWorkBench: **73.9**.
- JobBench: **55.7**.
- Toolathlon Verified: **73.5%** pass@1.
- Agents' Last Exam: **24.3%** pass@1; score **51.2**.

Reasoning / knowledge:

- GPQA Diamond: **91.7%**.
- Humanity's Last Exam: **35.9%**.
- IFBench: **81.3%**.

Coding:

- DeepSWE 1.1: **58.7%** (Alibaba notes the best score came from mini-SWE-agent; other baseline evaluations used different settings).
- SWE-bench Pro: **62.5%**.
- SWE-bench Multilingual: **81.0%**.
- LiveCodeBench v6: **91.9%**.
- NL2Repo-Bench: **48.1%**.

Long context:

- Qwen Cloud documents 1M context for the production Flash model based on this checkpoint; no MRCR/RULER/GraphWalks retrieval score was found for Flash-Next.

### Normalized scores (1–100)

- **Tool use: 90/100.** Toolathlon 73.5%, CoWorkBench 73.9, and Agents' Last Exam support strong agentic ability; capped for publisher-reported and benchmark-specific evidence.
- **Reasoning: 87/100.** GPQA 91.7% is strong, while HLE 35.9% and lack of independently verified broad-suite results cap the score.
- **Context window: 90/100.** The production derivative supports 1M-token context, but no retrieval accuracy result justifies 95–100.
- **Multimodal: 90/100.** Image and video input are documented; no audio input or non-text output was verified.
- **Coding: 90/100.** SWE-bench Pro 62.5%, DeepSWE 58.7%, and LiveCodeBench 91.9% are strong, though benchmark harnesses and reported settings differ.
- **Cost efficiency: 75/100.** Open weights permit cost control through self-hosting, but the hardware and operating cost for a 125B MoE was not calculated; no hosted price was verified.
- **Overall Score: 89/100.** Half-up mean of the five quality dimensions; strong open-weight option for multimodal coding and tool workflows, subject to serving-resource requirements.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research; benchmark values are attributed to Alibaba's card and retain its harness caveats. Hosted production-model specs are not silently presented as checkpoint-specific measurements.
- Sources: [Alibaba Qwen3.8-Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next); [Qwen Cloud latest model documentation](https://docs.qwencloud.com/developer-guides/getting-started/latest-model); [Alibaba Cloud architecture article](https://www.alibabacloud.com/blog/qwen-3-8-flash-next-a-new-architecture-towards-ultimate-cost-efficiency_603501).
