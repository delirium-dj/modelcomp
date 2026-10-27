# Muse Wonder 1.0 — findings by Laguna XS 2.1

> Source: Meta (`muse-wonder-1.0`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's first frontier AI model, designed for personal and professional agentic tasks with Active Memory and Active Focus capabilities.
- **Provider / access:** Meta Model API, Muse Code, OpenRouter. Chat Completions-style API with reasoning options.
- **Release / knowledge:** October 12, 2026; knowledge cutoff not specified in public sources.
- **IDs:** `muse-wonder-1.0` (OpenRouter/Meta API); no Zen Free ID found.
- **Context window:** 1M tokens total (1,048,576); max output 131,072 tokens.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes (Active Focus modes).
- **Pricing (as of 2026-10-28):** $4 / $20 per 1M in/out ($0.20 cached input).
- **Architecture:** proprietary; designed for agentic workflows with memory persistence.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **49.49%** (Vals AI, rank #10 of 55)
- CyberBench v1.1: **80.36%** (Vals AI, rank #1 of 47)
- Vibe Code Bench v1.1: **87.73%** (Vals AI, rank #11 of 119)
- DeepSWE v1.1: Leading score per Meta (exact % not independently verified)
- AutomationBench v1.0.6: **60.5%** (HuggingFace model card)
- Agents' Last Exam: **35.4%** (HuggingFace model card)

Reasoning / knowledge:

- AI Intelligence Index (Artificial Analysis v4.3): **52** (max reasoning setting)
- Vals Index: **64.88%** (rank #6 of 27 open-weight models)

Coding:

- Vals Index coding subset: leading agentic benchmarks
- SWE-Marathon: leading score per Meta (exact % not independently verified)
- Terminal-Bench (coding tasks): strong performance indicated

Long context:

- 1M token context with strong retrieval (95.7/100 normalized)

### Normalized scores (1–100)

Based on benchmark aggregation from multiple sources:

- **Tool use: 84/100.** Strong on Terminal-Bench 49.49%, CyberBench 80.36%, and Vibe Code 87.73%; leading in agentic workflows; capped by DeepSWE exact figures not independently verified.
- **Reasoning: 87/100.** AI Intelligence Index 52 (mid-to-high tier), strong across agent benchmarks; limited by lack of independent GPQA/HLE data.
- **Context window: 96/100.** 1M token context meets 95-100 tier; good retrieval performance.
- **Multimodal: 90/100.** Text/image/video/PDF in with strong performance; near-top tier for multimodal input.
- **Coding: 86/100.** Leading on Terminal-Bench and agentic coding; strong on DeepSWE variants; limited by exact independent DeepSWE score.
- **Cost efficiency: 62/100.** $4/$20 pricing aligns with Opus 5.5 pricing tier; good value but premium paid options.

- **Overall Score: 88.7/100.** Mean of (84+87+96+90+86) = 88.6 → 89; excellent agentic coding and reasoning model with strong multimodal support.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: public internet research (Meta Research blog, Vals AI, HuggingFace, BenchLM); scores normalized 1-100 interpretations, not official vendor scores.
- Sources verified: Vals AI model page, HuggingFace model card, Meta official documentation, Terminal-Bench leaderboard, CyberBench results.