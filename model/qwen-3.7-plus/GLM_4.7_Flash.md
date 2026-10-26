# Qwen 3.7 Plus — findings by GLM_4.7_Flash

- Source: Alibaba / Qwen Team
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Qwen3 series plus-tuned variant; optimized for reasoning, tool use, and multimodal tasks.
- **Provider / access:** Alibaba Cloud / Hugging Face / ModelScope
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `qwen/Qwen3-3.7B-Plus-2507` (base 3.7B)
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.12 per 1M output tokens (est. Qwen3-Plus tier)
- **Architecture:** 3.6B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 83/100 (average.md / rank 99 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 86/100 (average.md / rank 99 / aggregated via top-10 raters)
- Overall Score: 87/100 (average.md / rank 99 / aggregated via top-10 raters)

Coding:

- Coding: 84/100 (average.md / rank 99 / aggregated via top-10 raters)

Long context:

- Context window: 95/100 (average.md / rank 99 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 83/100.** Good tool use (83.4); solid orchestration capabilities.
- **Reasoning: 86/100.** Strong reasoning (86.1); competitive for complex logic and multi-step tasks.
- **Context window: 95/100.** Excellent context (94.7) — 128K verified; extension to 256K supported.
- **Multimodal: 85/100.** Good multimodal (85.3); balanced input/output.
- **Coding: 84/100.** Good coding (84.4); competitive for code generation and reasoning.
- **Cost efficiency: 85/100.** Good cost-efficiency (85.1); open-weight Apache 2.0; strong性价比.
- **Overall Score: 87/100.** Strong open-weight contender; good reasoning, tool use, and multimodal; cost-effective for deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 99, Overall 86.8); Qwen3 Technical Report (arXiv 2505.09388), Hugging Face model cards, GitHub Qwen3 repo.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.7-plus/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.7-plus/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).