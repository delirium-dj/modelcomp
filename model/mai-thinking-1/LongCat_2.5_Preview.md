# MAI-Thinking-1 — findings by LongCat 2.5 Preview

- Source: Microsoft AI/MAI-Thinking-1
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first fully in-house reasoning model — 35B active / 1T total sparse MoE trained from scratch without distillation. Strong STEM reasoning and coding for its weight class. Preferred over Claude Sonnet 4.6 in blind human evaluations. Enterprise-ready with clean data provenance.
- **Provider / access:** Microsoft Foundry (`azure_ai/MAI-Thinking-1`), Azure AI. Chat Completions API compatible (OpenAI SDK).
- **Release / knowledge:** 2026-06-02 (public preview August 12, 2026); training cutoff July 2025.
- **IDs:** `azure_ai/MAI-Thinking-1` (also `MAI-Thinking-1` on Microsoft Foundry)
- **Context window:** 256K tokens (verified via Azure, Microsoft model card); up to 64K output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes (adaptive reasoning effort). Tool calling: yes (function calling).
- **Pricing (as of 2026-10-09):** $2.00/1M input, $8.00/1M output (Azure). Proprietary license.
- **Architecture:** 35B active / 1T total sparse MoE, alternating MoE and dense FFN layers. Trained on 30T tokens (50%+ code) across 8K GB200 GPUs. Clean enterprise-grade data, no distillation from third-party models.

### Raw benchmarks found

Agent / tool use:

- Agents (LLM Stats): **12.6 / #104** (3 evals)
- Tool use (LLM Stats): **10.7 / #123** (2 evals)
- Function calling: supported (Azure, Microsoft)
- 8M+ RLE environments for agentic coding training (Microsoft)

Reasoning / knowledge:

- AIME 2025: **97.0%** (Microsoft — vs Claude Sonnet 4.6 95.6%, DeepSeek V3.2 93.1%, Claude Opus 4.6 99.8%)
- AIME 2026: **94.5%** (Microsoft)
- IFBench: **85%** (BenchLM — #1 of 16 models, ahead of Nemotron 3 Ultra 81.7%, Grok 4.3 81.3%)
- LongFact: **98.0%** (LLM Stats)
- GraphWalks: **90.0%** (LLM Stats)
- AIR-Bench: **88.0%** (LLM Stats)
- GPQA Diamond: **84.2%** (Microsoft — soft spot, lowest of closed frontier models)
- Reasoning (LLM Stats): **33.8 / #99** (16 evals)

Coding:

- SWE-Bench Pro: **52.8%** (Microsoft — toe-to-toe with Claude Opus 4.6)
- LiveCodeBench v6: **87.7%** (Microsoft)
- Coding (LLM Stats): **19.3 / #113** (3 evals)

Long context:

- Context window: **256K tokens** (verified via Azure, Microsoft model card)

Multimodal:

- Text input only (Azure, LLM Stats)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling supported. Agents #104, Tool use #123. Below average on tool use benchmarks despite 8M+ RLE training environments.
- **Reasoning: 78/100.** AIME 97.0%, IFBench 85% (#1), LongFact 98.0%. Strong math reasoning and instruction following, competitive with Sonnet 4.6. GPQA Diamond (84.2%) is a soft spot.
- **Context window: 82/100.** 256K token context. Good long-context capability.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 78/100.** SWE-Bench Pro 52.8%, LiveCodeBench 87.7%. Strong coding for 35B active parameters, competitive with Claude Opus 4.6.
- **Cost efficiency: 65/100.** $2.00/$8.00 per 1M tokens — moderate pricing for a 1T model. Proprietary license.
- **Overall Score: 63/100.** Mean of Tool (62), Reasoning (78), Context (82), Multimodal (15), Coding (78) = 315/5 = 63. Strong reasoning and coding for its weight class with excellent instruction following, but text-only and below-average tool use.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
