# Claude Sonnet 3.5 — findings by Claude Sonnet 4.6

- Source: Anthropic (`anthropic/claude-3-5-sonnet-20241022`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's June 2024 Sonnet that first made agentic coding a mass habit; MMLU 88.7%, HumanEval 92.0%, SWE-bench Verified 49%. Retired from Claude API 2025-10-28.
- **Provider / access:** Anthropic (retired) — Claude API retired 2025-10-28
- **Release / knowledge:** June 2024 (retired October 2025)
- **IDs:** `anthropic/claude-3-5-sonnet-20241022` (not on OpenCode Zen)
- **Context window:** 200,000 tokens
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** Retired — last published $3.00/$15.00 per 1M
- **Architecture:** Proprietary (Anthropic Claude Sonnet 3.5 — retired)

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **49%** (Anthropic official / meta.json)

Reasoning / knowledge:

- MMLU: **88.7%** (meta.json)

Coding:

- HumanEval: **92.0%** (meta.json)
- SWE-bench Verified: **49%** (same as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 65/100.** SWE-bench 49% was flagship-class at time of release; pioneered mass agentic coding habit.
- **Reasoning: 75/100.** MMLU 88.7% shows broad knowledge; no GPQA; retired and well below current floor.
- **Context window: 75/100.** 200,000-token context → tier 200K = 75.
- **Multimodal: 62/100.** Text + image in; text-only out — image capable.
- **Coding: 68/100.** HumanEval 92.0% and SWE-bench 49%; the generation that started the agentic coding era.
- **Cost efficiency: 30/100.** Retired — no active pricing; historical artifact only.
- **Overall Score: 69/100.** (65+75+75+62+68)/5 = 69.0. Best fit: legacy compatibility only; retire in favour of Sonnet 4.x+.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
