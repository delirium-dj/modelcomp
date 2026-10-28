# Hy3 — findings by GPT-6 Luna

- Source: Tencent Hy Team/Hy3 (`tencent/Hy3`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent Hy Team's open-weight MoE for reasoning, agentic workflows, and production coding. It is the full release following Hy3 Preview.
- **Provider / access:** Hugging Face weights `tencent/Hy3`; supports vLLM and SGLang with OpenAI-compatible serving.
- **Release / knowledge:** Released July 2026; cutoff not stated.
- **IDs:** `tencent/Hy3` (weights); API model name `hy3` when self-hosted.
- **Context window:** 256,000 tokens; 192,000 input and 128,000 output listed in OpenCode Go catalog (provider limits vary).
- **Modalities:** Text input/output, reasoning, and tool calls; no image/audio/video support documented for this checkpoint.
- **Pricing (as of 2026-10-28):** Open Apache 2.0 weights; no single official per-token API rate. Third-party hosting prices vary by provider.
- **Architecture:** 295B total / 21B active MoE parameters, 192 experts with top-8 routing, plus 3.8B MTP layer; Apache 2.0.

### Raw benchmarks found

Tencent's Hugging Face model card lists evaluation results; its blind expert evaluation is an internal work-task comparison and is labeled separately.

Agent / tool use:

- Apex Agents: **25.6**; SkillsBench v1: **55.3** (Hugging Face evaluation results).
- Blind internal task evaluation by 270 experts: **2.67/4**, versus GLM-5.1 at 2.51/4 (Tencent-reported).

Reasoning / knowledge:

- GPQA Diamond: **90.4** (Hugging Face evaluation result).
- Tencent reports internal hallucination rate **5.4%**, down from 12.5%; this is not a standard benchmark and is not converted to an accuracy score.

Coding:

- SWE-bench Verified: **78.0**.
- SWE-bench Pro: **57.9**.
- SWE-bench Multilingual: **75.8**.
- Terminal-Bench 2.1: **71.7**.

Long context:

- Context capacity 256K; Tencent reports improvement on MRCR but does not publish an exact score in the text-readable card. No RULER/GraphWalks figure verified.

### Normalized scores (1–100)

- **Tool use: 78/100.** Apex Agents 25.6 and SkillsBench 55.3 indicate moderate agent strength; capped because Tencent's expert task score is internal and tool suites are limited.
- **Reasoning: 88/100.** GPQA Diamond 90.4 is strong; no verified HLE or broad independent index score was found.
- **Context window: 75/100.** 256K capacity is substantial, but the MRCR improvement has no published number and retrieval quality is not independently verifiable.
- **Multimodal: 15/100.** The exact checkpoint is documented as text-only input/output.
- **Coding: 82/100.** SWE-bench Verified 78% and Multilingual 75.8 are useful, but SWE-Pro 57.9 and Terminal-Bench 71.7 limit a higher rating.
- **Cost efficiency: 100/100.** Open Apache-licensed weights permit self-hosting; hardware and inference costs remain user-dependent.
- **Overall Score: 68/100.** Half-up mean of the five quality dimensions (78+88+75+15+82)/5 = 67.6; suitable for self-hosted text coding and reasoning where multimodal input is unnecessary.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from Tencent's Hugging Face model card and technical/model documentation. Internal and public benchmark results are distinguished; normalized scores are independent interpretations.
- Sources: [Tencent Hy3 model card](https://huggingface.co/tencent/Hy3); [Tencent Hy3 GitHub](https://github.com/Tencent-Hunyuan/Hy3); [OpenCode Go provider catalog](https://models.dev).
