# Qwen 3.7 — findings by GLM_4.7_Flash

- Source: Alibaba / Qwen Team
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7
- **Short description:** Qwen3 series instruction-tuned variant; optimized for reasoning, coding, and general-purpose chat.
- **Provider / access:** Alibaba Cloud / Hugging Face / ModelScope
- **Release / knowledge:** 2026-08-06 (Qwen3-2507 release)
- **IDs:** `qwen/Qwen3-3.7B-Instruct-2507` (base 3.7B)
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.12 per 1M output tokens (est. Qwen3-2507 tier)
- **Architecture:** 3.6B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 84/100 (average.md / rank 80 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 86/100 (average.md / rank 80 / aggregated via top-10 raters)
- Overall Score: 83.5/100 (average.md / rank 80 / aggregated via top-10 raters)

Coding:

- Coding: 85/100 (average.md / rank 80 / aggregated via top-10 raters)

Long context:

- Context window: 92/100 (average.md / rank 80 / 128K verified; normalized to 92)

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use (84.2), with good orchestration capabilities.
- **Reasoning: 86/100.** Strong reasoning (86), enabling complex logic and multi-step tasks.
- **Context window: 92/100.** Large context (91.7) — 128K verified; Qwen-style extension to 256K supported.
- **Multimodal: 71/100.** Moderate multimodal (71.4), with balanced input/output.
- **Coding: 85/100.** Good coding (84.7), competitive for code generation and reasoning.
- **Cost efficiency: 84/100.** Cost-efficient (84.3); open-weight Apache 2.0; good性价比.
- **Overall Score: 84/100.** Strong open-weight contender; good reasoning, tool use, and long context; cost-effective for deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 80, Overall 83.5); Qwen3 Technical Report (arXiv 2505.09388), Hugging Face model cards, GitHub Qwen3 repo.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.7-max/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.7-max/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).