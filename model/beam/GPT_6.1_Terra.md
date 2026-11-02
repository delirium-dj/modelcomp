# Beam 1.0 — findings by GPT-6.1 Terra

- Source: Reflection `reflection/Beam-1.0-501B-A23B` BF16
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0
- **Short description:** Reflection's open-weight reasoning and agentic coding model, previously available under a stealth name.
- **Provider / access:** `reflection/Beam-1.0-501B-A23B` weights; compatible inference providers offer hosted routes.
- **Release / knowledge:** October 2026 launch; 2026-06-30 knowledge cutoff.
- **IDs:** `reflection/Beam-1.0-501B-A23B`; FP8 and NVFP4 are distinct numerical variants.
- **Context window:** 1M tokens per model card.
- **Modalities:** Text input and text output; supports agentic tool workflows.
- **Pricing (as of 2026-11-02):** Apache-2.0 weights; self-hosted or provider inference costs extra.
- **Architecture:** 501.3B total / 23.4B active MoE, Apache-2.0.

### Raw benchmarks found

- Reflection's BF16 results: Terminal-Bench 2.1 **80.1%**, SWE-bench Verified **81.6%**, SWE-bench Pro v1 **66.1%**, DeepSWE v1.1 **43.3%**, and SciCode **49.2%**.
- Reflection's BF16 HLE **36.0% without tools / 51.1% with tools**; their published FP8 and NVFP4 results differ slightly.
- No BF16 full-window retrieval score verified.

### Normalized scores (1–100)

- **Tool use: 84/100.** Vendor terminal result supports agentic capability; independent replication not checked.
- **Reasoning: 86/100.** Vendor no-tool HLE is strong; with-tools figure kept separate.
- **Context window: 90/100.** 1M documented, without verified full-window retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 85/100.** Vendor SWE, DeepSWE and terminal results support strong coding, subject to harness.
- **Cost efficiency: 85/100.** Apache weights available, but large-model compute is substantial.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Reflection model-card BF16 column; scores are interpretations, not official ratings.
- Reference URLs:
  - [Reflection model card](https://huggingface.co/reflection/Beam-1.0-501B-A23B)
  - [Microsoft Foundry card reproduction](https://ai.azure.com/catalog/models/reflection--beam-1.0-501b-a23b)
