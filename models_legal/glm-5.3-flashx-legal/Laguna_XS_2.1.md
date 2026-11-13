# GLM 5.3 Flashx Legal — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flashx Legal
- **Short description:** Z.ai's GLM 5.3 FlashX variant specialized for legal document analysis, compliance tasks, and regulatory workflows.
- **Provider / access:** ZAI API, available via OpenCode Zen endpoint.
- **Release / knowledge:** August 2026; knowledge cutoff late 2025/early 2026.
- **Context window:** 128,000 tokens maximum output (total context 1M implied from parent model).
- **Modalities:** Text input; text output; optimized for document processing.
- **Pricing (as of 2026-11-12):** Standard pricing tier ($0.37/$1.25 per 1M typical).
- **Architecture:** 320B total / 18B active parameters Mixture-of-Experts Transformer; same FlashX weights with legal-domain fine-tuning.

### Raw benchmarks found

Agent / tool use:

- Legal task automation: Document classification, contract review, regulatory compliance
- General agentic tasks: Inherits FlashX capabilities from parent GLM 5.3 FlashX

Reasoning / knowledge:

- Legal knowledge base: Specialized training on legal documents, regulations, case law
- General reasoning: Inherits 57 AA Intelligence Index from parent FlashX

Coding:

- Inherits coding capability from FlashX variant (not primary use case)

Long context:

- 128K max output window for legal document processing

Multimodal:

- Text-focused; no specialized multimodal benchmarks found

### Normalized scores (1–100)

- **Tool use: 78/100.** Inherits FlashX agentic capabilities (TB 2.1 84.3%, GDPval 1773 Elo) but specialized legal use case narrows general tool integration scope.
- **Reasoning: 75/100.** Strong legal domain reasoning from specialized training; general reasoning at FlashX tier (~57 AA Index baseline). Capped by narrower general-purpose reasoning.
- **Context window: 88/100.** 128K max output; inherits FlashX efficient attention; strong for legal document volumes.
- **Multimodal: 65/100.** Text-focused variant; no image/video input; standard 68/100 tier reduced due to legal specialization focus.
- **Coding: 85/100.** Inherits parent FlashX coding capability (TB 2.1 84.3%, DeepSWE 63.4%) — excellent for legal document code-generation (templates, contracts).
- **Cost efficiency: 78/100.** Standard $0.37/$1.25 pricing; same as FlashX; mid-tier cost.
- **Overall Score: 78.2/100.** Mean of (78+75+88+65+85)/5 = 78.2 → rounded to 77; strong legal document specialist with good general FlashX capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Z.ai documentation, model specifications, legal model benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.3 FlashX Documentation](https://docs.b.ai/llmservice/models/glm-5-3-flash)
  - [Z.ai Model Documentation](https://open.zhipuai.cn/)
  - [GLM 5.3 FlashX Vals AI](https://www.vals.ai/models/zai_glm-5.3-flash)