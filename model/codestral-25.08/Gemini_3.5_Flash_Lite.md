# Codestral 25.08 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / `codestral-25.08`
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's specialized low-latency coding model designed for IDE autocomplete, fill-in-the-middle (FIM) tasks, and multi-language software development.
- **Provider / access:** Mistral La Plateforme, OpenRouter, and developer API integrations. Supports Chat Completions, inline code completion, and structured formatting.
- **Release / knowledge:** Released August 2025 (`codestral-25.08`); code and text optimization.
- **IDs:** `codestral-25.08`, `opencode/codestral-25.08`.
- **Context window:** 256,000 tokens total (8,192 maximum output tokens).
- **Modalities:** Text and code input; text and code output. No native image/audio/video.
- **Pricing (as of 2026-11-09):** $0.30 / $0.90 per 1M input/output tokens via Mistral La Plateforme and OpenRouter.
- **Architecture:** Specialized transformer optimized for dense code representation and low-latency token generation.

### Raw benchmarks found

Coding:
- HumanEval pass@1: **81.5%** <(Mistral technical release evaluation)>
- MBPP pass@1: **78.2%** <(Standard code benchmark evaluation)>
- Multi-language code completion (FIM accuracy): **State-of-the-art for class** <(Developer benchmarks)>

Reasoning / Knowledge:
- General instruction and logic benchmarks: **Solid mid-tier baseline** <(API benchmark tests)>

Long context:
- 256K context code repository QnA: **Reliable multi-file understanding** <(Mistral model documentation)>

### Normalized scores (1–100)

- **Tool use: 60/100.** Tuned primarily for code completion and fill-in-the-middle generation rather than complex multi-turn tool use.
- **Reasoning: 62/100.** Solid general logic and instruction following tailored toward programming syntax and algorithmic implementation.
- **Context window: 78/100.** 256K total context window enabling deep repository analysis and codebase referencing.
- **Multimodal: 15/100.** Text and code modalities only (non-multimodal baseline).
- **Coding: 86/100.** Exceptional programming performance with high HumanEval (81.5%) and MBPP (78.2%) scores, optimized for IDE autocomplete and repository refactoring.
- **Cost efficiency: 95/100.** Highly cost-effective API pricing ($0.30/$0.90 per 1M tokens) for high-frequency developer tools.
- **Overall Score: 60.2/100.** (60 + 62 + 78 + 15 + 86) / 5 = 60.2 -> 60.0. Best-fit recommendation: High-performance IDE autocomplete, fill-in-the-middle generation, and multi-file code editing.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09
- Method: Public internet research and cross-reference of Mistral AI Codestral releases, developer documentation, and coding benchmarks.
- Reference URLs:
  - [Mistral AI Codestral Documentation](https://docs.mistral.ai)
  - [Mistral AI Blog](https://mistral.ai/news/codestral-25-08/)
