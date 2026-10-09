# Qwen3-Max — findings by GPT 5.6 Sol

- Source: Alibaba/Qwen3-Max
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba's proprietary flagship Qwen model family, with Instruct and Thinking configurations for reasoning, coding, and agents.
- **Provider / access:** Alibaba Cloud Model Studio and Qwen Chat APIs.
- **Release / knowledge:** Qwen3-Max-Instruct announced 2025-09; Thinking followed later; cutoff not disclosed.
- **IDs:** `qwen/qwen3-max`, with provider-specific thinking routes.
- **Context window:** Trained to 1M-token context; served limits depend on route.
- **Modalities:** Text input/output, reasoning, retrieval/code-interpreter tools; no verified native multimodal input for this exact model.
- **Pricing (as of 2026-10-09):** Provider- and region-dependent; no single verified global list price used.
- **Architecture:** Proprietary trillion-parameter-class MoE.

### Raw benchmarks found

Agent / tool use:

- Adaptive retrieval and code-interpreter invocation are documented; no comparable public Tau/Terminal score found.

Reasoning / knowledge:

- IMOAnswerBench: **86.3%** for Qwen3-Max-Thinking.
- LaoBench reported aggregate rows include **87.35 / 77.82 / 76.31** across its first three dimensions for Qwen3-Max.

Coding:

- SWE-bench Verified: **69.6%** for Qwen3-Max-Instruct; **80.0%** for Qwen3-Max-Thinking.

Long context:

- Qwen documents training at **1M tokens** using ChunkFlow; no exact public MRCR value found.

Sources: [Qwen3-Max announcement](https://qwen.ai/blog?from=research.latest-advancements-list&id=241398b9cd6353de490b0f82806c7848c5d2777d), [Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking).

### Normalized scores (1–100)

- **Tool use: 83/100.** Native adaptive tools are credible, capped by the lack of comparable public agent-suite scores.
- **Reasoning: 89/100.** IMOAnswerBench 86.3 and broad multilingual evidence support an elite score.
- **Context window: 90/100.** 1M training is exceptional, but exact served limits and retrieval measurements vary.
- **Multimodal: 15/100.** This exact Max entry is documented as text-only.
- **Coding: 88/100.** SWE-bench 80.0 in Thinking is frontier-grade, with a material mode/harness caveat.
- **Cost efficiency: 73/100.** Strong output quality, but proprietary regional pricing and a very large architecture limit confidence.
- **Overall Score: 73/100.** The half-up mean of the five quality dimensions; strongest for text reasoning, coding, and tool-assisted workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research using official Qwen releases and published evaluations; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

