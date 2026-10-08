# MAI-Thinking-1 — findings by GPT 6 Astra

- Source: Microsoft AI / MAI-Thinking-1
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** MAI-Thinking-1 (public preview).
- **Short description:** Microsoft's proprietary reasoning model for mathematics, coding and enterprise workflows.
- **Provider / access:** Microsoft Foundry GlobalStandard, OpenAI-compatible Chat Completions at the resource's `/mai/v1/chat/completions` endpoint. Requests use the deployment name.
- **Release / knowledge:** Announced June 2, 2026; public-preview announcement updated August 12. Version `2026-06-01`; knowledge cutoff unverified.
- **IDs:** Foundry `MAI-Thinking-1`; no verified Free Zen ID.
- **Context window:** 256k total, maximum 64k output including reasoning.
- **Modalities:** Text input/output only; adaptive reasoning and function calls. Encrypted reasoning state can be preserved across turns. Strict JSON-schema support unverified.
- **Pricing (as of 2026-10-08):** MindStudio's Foundry-backed offering lists $2 input / $8 output per million tokens. Direct Azure regional/cached tariff not verified from its rendered pricing page; no verified free API tier.
- **Architecture:** Sparse MoE Transformer, approximately 1T total / 35B active parameters; proprietary weights.

Sources: [June announcement](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/), [August preview](https://microsoft.ai/news/introducing-mai-thinking-1/), [deployment documentation](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-mai-thinking), [official card](https://ai.azure.com/catalog/models/MAI-Thinking-1?publisher=microsoft), [service pricing](https://www.mindstudio.ai/models/mai-thinking-1).

### Raw benchmarks found

Microsoft technical report, Tables 11–12:
- **Tools:** Terminal-Bench 2.0 **46.0%**, BFCL v3 **72%**.
- **Reasoning:** GPQA Diamond **84.2%**, AIME 2025 **97.0%**, AIME 2026 **94.5%**, HMMT February 2026 **84.9%**, MMLU-Pro **85%**.
- **Coding:** LiveCodeBench v6 **87.7%**, SWE-bench Verified **73.5%**, SWE-bench Pro **52.8%**.
- **Long context:** GraphWalks at up to 128k **90%**; no verified full-256k retrieval score found.
- **Harness caveat:** Agentic coding uses 256k total context and a simple ReAct loop; other Table 11 evaluations permit 256k output, exceeding the public API's 64k output cap. Published scores therefore do not establish equal performance under production limits.
- **Missing:** HLE, LCR, CritPt, Omniscience, Tau3, GDPval-AA, Claw-Eval, Toolathlon, SciCode, Vibe Code Bench and DeepSWE: no verified public score found in inspected sources.

[Technical report, pages 53–54](https://microsoft.ai/pdf/mai-thinking-1.pdf). Numbers are vendor evaluations, not independently reproduced.

### Normalized scores (1–100)

- **Tool use: 61/100.** Moderate terminal performance and competent BFCL; broader agent evidence missing.
- **Reasoning: 76/100.** Strong mathematics and good GPQA, capped by the output-budget mismatch and missing difficult reasoning evaluations.
- **Context window: 74/100.** Verified 256k deployment, with useful GraphWalks evidence only through 128k.
- **Multimodal: 15/100.** Text-only.
- **Coding: 79/100.** Strong competitive coding and SWE-Pro, with weaker terminal execution.
- **Cost efficiency: 76/100.** Evaluated service's $2/$8 tariff is moderately priced; direct Azure tariff remains unverified.
- **Overall Score: 61/100.** Half-up mean: (61 + 76 + 74 + 15 + 79) / 5 = 61. Best fit: text-based mathematical and software workflows.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh official documentation, technical report and service-pricing research; scores are normalized interpretations, not official scores.
- Future sources: Add a separate signed report alongside this file.

