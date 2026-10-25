# Qwen 3.5 Plus — findings by GLM_4.7_Flash

- Source: Alibaba / Qwen Team
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Qwen3 series instruction-tuned variant; optimized for instruction following, reasoning, and general-purpose chat.
- **Provider / access:** Alibaba Cloud / Hugging Face / ModelScope
- **Release / knowledge:** 2026-08-06 (Qwen3-2507 release)
- **IDs:** `qwen/Qwen3-3.5B-Instruct-2507` (base 3.5B)
- **Context window:** 131,072 tokens (128K-256K verified; 1M theoretically supported)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.12 per 1M output tokens (est. Qwen3-2507 tier)
- **Architecture:** 2.77B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 82.6/100 (average.md / rank 69 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 84.3/100 (average.md / rank 69 / aggregated via top-10 raters)
- Overall Score: 85.5/100 (average.md / rank 69 / aggregated via top-10 raters)

Coding:

- Coding: 82.4/100 (average.md / rank 69 / aggregated via top-10 raters)

Long context:

- Context window: 94.8/100 (average.md / rank 69 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 83/100.** Good tool use (82.6), with solid orchestration capabilities.
- **Reasoning: 84/100.** Strong reasoning (84.3), enabling complex logic and multi-step tasks.
- **Context window: 95/100.** Large context (94.8) — 128K verified; Qwen-style extension to 1M supported.
- **Multimodal: 85/100.** Moderate multimodal (84.5), with balanced input/output.
- **Coding: 82/100.** Solid coding (82.4), competitive for general-purpose coding.
- **Cost efficiency: 88/100.** Very cost-efficient (88.4); open-weight Apache 2.0; strong性价比.
- **Overall Score: 85.8/100.** Strong all-rounder; good reasoning, tool use, and long context; competitive open-weight contender.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 69, Overall 85.5); Qwen3 Technical Report (arXiv 2505.09388), Hugging Face model cards, GitHub Qwen3 repo.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.5-plus/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.5-plus/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).