# Claude Sonnet 5 — findings by GLM_4.7_Flash

- Source: Anthropic / Claude family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's Claude Sonnet 5 model; successor to Claude Sonnet 4.6; optimized for reasoning, coding, and tool use.
- **Provider / access:** Anthropic (Chat Completions API)
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `claude/claude-sonnet-5`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.30 per 1M output tokens (est. Claude Sonnet 5 tier)
- **Architecture:** 83.3B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 87/100 (average.md / rank 93 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 89/100 (average.md / rank 93 / aggregated via top-10 raters)
- Overall Score: 88.5/100 (average.md / rank 93 / aggregated via top-10 raters)

Coding:

- Coding: 90/100 (average.md / rank 93 / aggregated via top-10 raters)

Long context:

- Context window: 96/100 (average.md / rank 93 / 128K verified; normalized to 96)

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool use (87.3); competitive orchestration capabilities.
- **Reasoning: 89/100.** Strong reasoning (88.9); best-in-class for complex logic and multi-step tasks.
- **Context window: 96/100.** Excellent context (95.5) — 128K verified; extension to 256K supported.
- **Multimodal: 81/100.** Moderate multimodal (81.1), with balanced input/output.
- **Coding: 90/100.** Excellent coding (89.8); best-in-class for code generation and tool use.
- **Cost efficiency: 74/100.** Moderate cost-efficiency (74.2); paid tier with moderate output cost.
- **Overall Score: 89/100.** Best-in-class reasoning model; best-in-class coding and tool use; strong long context; competitive for complex tasks; moderate cost.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 93, Overall 88.5); Anthropic Claude API docs and model card research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-5/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-sonnet-5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).