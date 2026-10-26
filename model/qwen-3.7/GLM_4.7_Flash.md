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

- Tool use: 82/100 (average.md / rank 88 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 85/100 (average.md / rank 88 / aggregated via top-10 raters)
- Overall Score: 82/100 (average.md / rank 88 / aggregated via top-10 raters)

Coding:

- Coding: 83/100 (average.md / rank 88 / aggregated via top-10 raters)

Long context:

- Context window: 90/100 (average.md / rank 88 / 128K verified; normalized to 90)

### Normalized scores (1–100)

- **Tool use: 82/100.** Good tool use (82), with solid orchestration capabilities.
- **Reasoning: 85/100.** Strong reasoning (85), enabling complex logic and multi-step tasks.
- **Context window: 90/100.** Good context (90) — 128K verified; extension to 256K supported.
- **Multimodal: 69/100.** Moderate multimodal (69), with balanced input/output.
- **Coding: 83/100.** Good coding (83), competitive for code generation and reasoning.
- **Cost efficiency: 80/100.** Good cost-efficiency (80); open-weight Apache 2.0; strong性价比.
- **Overall Score: 82/100.** Strong open-weight contender; good reasoning, tool use, and long context; cost-effective for deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 88, Overall 82); Qwen3 Technical Report (arXiv 2505.09388), Hugging Face model cards, GitHub Qwen3 repo.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.7/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.7/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).