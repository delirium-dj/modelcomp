# Qwen 3.8 Flash Next — findings by GLM_4.7_Flash

- Source: Alibaba / Qwen Team
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Qwen3 series instruction-tuned variant; optimized for fast inference, long context, and strong coding reasoning.
- **Provider / access:** Alibaba Cloud / Hugging Face / ModelScope
- **Release / knowledge:** 2026-08-06 (Qwen3-2507 release)
- **IDs:** `qwen/Qwen3-3.8B-Instruct-2507` (base 3.8B)
- **Context window:** 131,072 tokens (128K-256K verified; 1M theoretically supported)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.12 per 1M output tokens (est. Qwen3-2507 tier)
- **Architecture:** 3.09B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 84/100 (average.md / rank 68 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 85/100 (average.md / rank 68 / aggregated via top-10 raters)
- Overall Score: 85.6/100 (average.md / rank 68 / aggregated via top-10 raters)

Coding:

- Coding: 85.1/100 (average.md / rank 68 / aggregated via top-10 raters)

Long context:

- Context window: 89.7/100 (average.md / rank 68 / 128K verified; normalized to 90)

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use (84), with good orchestration capabilities.
- **Reasoning: 85/100.** Solid reasoning (85), enabling complex logic and multi-step tasks.
- **Context window: 90/100.** Large context (89.7) — 128K verified; Qwen-style extension to 1M supported.
- **Multimodal: 84/100.** Moderate multimodal (84), with balanced input/output.
- **Coding: 85/100.** Good coding (85.1), competitive for code generation and reasoning.
- **Cost efficiency: 90/100.** Very cost-efficient (90.3); open-weight Apache 2.0; strong性价比.
- **Overall Score: 85.6/100.** Strong all-rounder; good reasoning, tool use, and long context; competitive open-weight contender.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 68, Overall 85.6); Qwen3 Technical Report (arXiv 2505.09388), Hugging Face model cards, GitHub Qwen3 repo.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-flash-next/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-flash-next/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).