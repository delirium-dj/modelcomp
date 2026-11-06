# Codestral (2405) — Claude Sonnet 4.6 Research

Codestral (released May 2024 as Codestral 2405) is Mistral AI's first open-weight code-specialised model — 22 billion parameters, 32K native context, source-available licence (Mistral AI Non-Production Licence for the weights; commercial API access via Mistral La Plateforme). It supports 80+ programming languages and was specifically tuned for Fill-in-the-Middle (FIM) completion, making it a natural IDE autocomplete backend. As of 2026 the original 2405 checkpoint is superseded — `codestral` now aliases to Codestral 25.08 (256K context, improved scores). This entry documents the original 2405 release as a historical reference.

Benchmarks (verified, 2405 checkpoint):
- HumanEval Python pass@1: 81.1%
- MBPP Sanitized pass@1: 78.2%
- CruxEval-O: 51.3%
- RepoBench: 34.0%
- Spider (SQL): 63.5%
- HumanEvalFIM Python: 89.4% / JS: 95.1% / Java: 90.3% / Average: 91.6%
- Multi-language HumanEval average (7 languages): 61.5%
- Pricing: $0.30/$0.90 per 1M in/out ($0.03 cached); live endpoint redirects to 25.08

## Scores

- **Tool use: 52/100.** Codestral 2405 supports function calling via the Mistral API; tool-use depth is adequate for IDE-centric workflows (single-turn code actions) but not validated on complex multi-step agentic benchmarks. Autocompletion-first design limits generalised tool chaining.
- **Reasoning: 50/100.** No MMLU or broad reasoning benchmark published for 2405. Coding-specialised models of this generation (22B, 2024) typically land in the 55–65% MMLU range; without verification, mid-tier is assumed. CruxEval-O 51.3% supports a moderate-reasoning estimate.
- **Context window: 45/100.** 32K native context. Tier: 32K = 45 points. Well below modern 128K+ standards; later checkpoints (25.08) expanded to 256K.
- **Multimodal: 15/100.** Text/code in and out only — no image, audio, or video. FIM is a code-specific modality, not a cross-modal one.
- **Coding: 72/100.** HumanEval 81.1%, FIM average 91.6% — class-leading at launch (outperformed CodeLlama 70B and DeepSeek Coder 33B on FIM). RepoBench 34.0% shows repository-scale reasoning is weaker; still a strong code-completion model for its era.
- **Cost efficiency: 75/100.** $0.30/$0.90 per 1M is competitive for a 22B code model. The live endpoint now routes to 25.08 (same price, better capability), so effective cost efficiency is higher in practice.
- **Overall Score: 47/100.** Mean of Tool use (52) + Reasoning (50) + Context (45) + Multimodal (15) + Coding (72) = 234 / 5 = 46.8, rounded to 47. A historical-reference entry: the 2405 checkpoint is superseded by 25.08 in all practical use cases; scores reflect the original May 2024 release.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
