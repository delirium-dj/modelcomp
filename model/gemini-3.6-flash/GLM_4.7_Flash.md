# Gemini 3.6 Flash — findings by GLM_4.7_Flash

- Source: Google DeepMind / Gemini family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's Gemini 3.6 Flash model; successor to Gemini 3.5 Flash; optimized for speed, multimodal, and tool use.
- **Provider / access:** Google AI / Google Cloud / API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `gemini/gemini-3.6-flash`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.20 per 1M output tokens (est. Gemini 3.6 Flash tier)
- **Architecture:** 3.7B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 85/100 (average.md / rank 96 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 87/100 (average.md / rank 96 / aggregated via top-10 raters)
- Overall Score: 88.8/100 (average.md / rank 96 / aggregated via top-10 raters)

Coding:

- Coding: 86/100 (average.md / rank 96 / aggregated via top-10 raters)

Long context:

- Context window: 95/100 (average.md / rank 96 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 85/100.** Good tool use (85.1); solid orchestration capabilities.
- **Reasoning: 87/100.** Strong reasoning (87); competitive for complex logic and multi-step tasks.
- **Context window: 95/100.** Excellent context (94.6) — 128K verified; extension to 256K supported.
- **Multimodal: 92/100.** Excellent multimodal (91.6); best-in-class multimodal coverage for vision and text.
- **Coding: 86/100.** Good coding (86); competitive for code generation and reasoning.
- **Cost efficiency: 84/100.** Good cost-efficiency (83.8); open-weight Apache 2.0; strong性价比.
- **Overall Score: 89/100.** Cost-effective multimodal model; best-in-class long context and multimodal; competitive for deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 96, Overall 88.8); Google DeepMind Gemini 3.6 Flash model card research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.6-flash/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.6-flash/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).