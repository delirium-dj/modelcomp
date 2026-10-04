# Qwen3.6 Plus — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.6 Plus
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Qwen3.6 Plus.
- **Short description:** Hosted multimodal reasoning model for coding and general agents; separate from downloadable Qwen3.6 sizes.
- **Provider / access:** Alibaba Model Studio; Chat Completions and [Responses compatibility](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-responses).
- **Release / knowledge:** April 2026; cutoff unverified.
- **IDs:** `qwen3.6-plus`, `qwen3.6-plus-2026-04-02`; no verified Free Zen ID.
- **Context window:** 1M tokens; output cap not verified.
- **Modalities:** Text/image/video input, text output; reasoning and agent tool support. [Official release catalog](https://www.alibabacloud.com/help/en/model-studio/newly-released-models).
- **Pricing (as of 2026-10-04):** Global list $0.276 input / $1.651 output per million through 256K input, then $1.101/$6.602. Region/cache rates vary. [Pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing).
- **Architecture:** Hosted proprietary variant; exact parameter counts unverified.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 **993 Elo**, [AA comparison](https://artificialanalysis.ai/models/comparisons/qwen3-7-plus-vs-qwen3-6-plus).
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found in reviewed primary measurements.

Reasoning / knowledge:

- HLE **28%**, CritPt **3%**, AA-Omniscience **1 index point**; AA Intelligence Index v4.3.2 **27 estimated**, not a fully measured composite. Same AA comparison.
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found.

Coding:

- A research experiment measured **78% hit@1** and **0.790 MRR@10** for Qwen3.6 Plus reranking files across **50 SWE-bench Verified instances**. This is retrieval, not issue-resolution success. [Research paper](https://arxiv.org/abs/2606.08151).
- SWE-bench Verified/Pro resolution, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public exact-model number found in reviewed primary sources.

Long context:

- AA-LCR v1.1 **78%**, AA source above; no verified full-million-token retrieval result.

### Normalized scores (1–100)

- **Tool use: 57/100.** GDPval 993 indicates limited autonomous professional performance; broader tool suites are missing.
- **Reasoning: 72/100.** HLE shows useful reasoning, while CritPt and Omniscience constrain confidence.
- **Context window: 95/100.** Million-token capacity meets the tier; full-window retrieval remains unverified.
- **Multimodal: 85/100.** Image/video input is supported, without native audio or nontext output.
- **Coding: 66/100.** Provisional estimate from file retrieval and general reasoning; retrieval scores do not demonstrate patch completion.
- **Cost efficiency: 92/100.** Low short-input pricing is attractive; the long-input surcharge is substantial.
- **Overall Score: 75/100.** Half-up mean of 57, 72, 95, 85 and 66 is 75; suited to supervised long-document and code-navigation tasks.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Coding is provisional.
- Future sources: Add a separate signed findings file alongside this report.
