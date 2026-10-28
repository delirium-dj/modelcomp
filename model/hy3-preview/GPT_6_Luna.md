# Hy3 Preview — findings by GPT-6 Luna

- Source: Tencent Hy Team/Hy3 Preview (`tencent/Hy3-preview`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hy Team's early open-weight MoE for reasoning, coding, and agent tasks. It preceded the full Hy3 release, which incorporated further post-training based on product feedback.
- **Provider / access:** Hugging Face weights `tencent/Hy3-preview`; deployable with vLLM/SGLang using an OpenAI-compatible endpoint.
- **Release / knowledge:** Open-sourced 2026-04-23; knowledge cutoff not stated.
- **IDs:** `tencent/Hy3-preview`; serving name `hy3-preview`.
- **Context window:** 256,000 tokens.
- **Modalities:** Text input/output; reasoning and tool use supported. No image/audio/video input documented.
- **Pricing (as of 2026-10-28):** Open weights; no fixed per-token price. Self-hosting requires substantial GPU capacity.
- **Architecture:** 295B total / 21B active MoE parameters plus 3.8B MTP layer; 192 experts with top-8 routing. Tencent Hy Community License Agreement; not Apache 2.0.

### Raw benchmarks found

Hugging Face lists evaluation results for the preview instruct checkpoint; Tencent's README also provides broader results with different evaluation sets/configurations. Values below retain the specific Hugging Face-listed names and versions.

Agent / tool use:

- Terminal-Bench 2.0: **54.4**.
- Tencent describes strong results on ClawEval and WildClawBench but the exact scores were not readable in the accessible text.

Reasoning / knowledge:

- GPQA Diamond: **87.2**.
- Humanity's Last Exam: **30** (Hugging Face evaluation result).

Coding:

- SWE-bench Verified: **74.4**.
- Terminal-Bench 2.0: **54.4**.
- LiveCodeBench v6 pre-trained/base table: **34.86** for Hy3 Preview Base; not attributed to the instruct checkpoint and therefore not used as its instruct score.

Long context:

- 256K capacity documented; no exact MRCR/RULER/GraphWalks retrieval score verified.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 at 54.4 and vendor qualitative agent claims support capability, but no exact ClawEval or modern tool-use result was verified.
- **Reasoning: 83/100.** GPQA Diamond 87.2 and HLE 30 are solid; scores are from publisher-linked evaluation listings and lack independent replication here.
- **Context window: 75/100.** 256K capacity is useful, but no retrieval score validates behavior at long spans.
- **Multimodal: 15/100.** This preview checkpoint is documented as text-only input/output.
- **Coding: 78/100.** SWE-bench Verified 74.4 is strong, while Terminal-Bench 2.0 54.4 is more modest; the newer full Hy3 results are not applied to the preview.
- **Cost efficiency: 100/100.** Open weights permit self-hosting without per-token license charges, though compute costs are high.
- **Overall Score: 65/100.** Half-up mean of the five quality dimensions (72+83+75+15+78)/5 = 64.6; useful for self-hosted text coding/reasoning when preview-level capability is acceptable.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from Tencent's Hugging Face model card and model documentation. Preview and base-model results are distinguished from full Hy3/instruct figures; normalized scores are independent interpretations.
- Sources: [Tencent Hy3 Preview model card](https://huggingface.co/tencent/Hy3-preview); [Tencent Hy3 repository](https://github.com/Tencent-Hunyuan/Hy3).
