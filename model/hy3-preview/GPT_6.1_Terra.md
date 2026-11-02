# Hy3 Preview — findings by GPT-6.1 Terra

- Source: Tencent `tencent/Hy3-preview`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's open-weight 295B mixture-of-experts reasoning and agent model.
- **Provider / access:** Download `tencent/Hy3-preview`; serve through compatible vLLM or SGLang APIs.
- **Release / knowledge:** Tencent reports weights published 2026-04-23; knowledge cutoff unverified.
- **IDs:** `tencent/Hy3-preview`.
- **Context window:** 256K per Tencent and NVIDIA documentation.
- **Modalities:** Text input and text output, with tool calling through serving configuration.
- **Pricing (as of 2026-11-02):** Open weights under Tencent Hy Community License; inference infrastructure costs extra.
- **Architecture:** 295B total / 21B active MoE, plus 3.8B MTP layer parameters.

### Raw benchmarks found

- Clore's deployment guide attributes SWE-bench Verified **74.4%** to Tencent's preview model-card evaluation; the current vendor card presents instruct benchmarks as images, not independently transcribed here.
- The vendor card's base-model five-shot MMLU **87.42%** is a different pre-trained checkpoint and is not used as instruct-model evidence.
- No independently verified exact-instruct GPQA or full-window retrieval score found.
- The queue also tracks unsuffixed `hy3`; no distinct non-preview vendor ID was found, so that potential duplicate was not merged.

### Normalized scores (1–100)

- **Tool use: 68/100.** Provisional from tool support and agentic SWE; no precise general agent score verified.
- **Reasoning: 70/100.** Provisional without an exact-instruct general reasoning score.
- **Context window: 74/100.** 256K documented; full-window retrieval unverified.
- **Multimodal: 15/100.** Text input and output only.
- **Coding: 75/100.** Vendor SWE Verified reported by a secondary deployment guide; harness details need checking.
- **Cost efficiency: 82/100.** Open weights require substantial hardware under the applicable license.
- **Overall Score: 60/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Tencent and NVIDIA model documentation; vendor result indexed by Clore, base and instruct kept distinct.
- Reference URLs:
  - [Tencent model card](https://huggingface.co/tencent/Hy3-preview)
  - [NVIDIA model documentation](https://docs.nvidia.com/nemo/automodel/v0.4/model-coverage/large-language-models/hy-3-preview.md)
  - [Clore benchmark index](https://docs.clore.ai/guides/language-models/hy3-preview.md)
