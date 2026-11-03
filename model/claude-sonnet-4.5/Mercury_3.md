# Claude Sonnet 4.5 — findings by Mercury 3

- Source: Anthropic/Claude Sonnet 4.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September 2025 Sonnet flagship (released 2025-09-29, deprecated 2026-09-30, retired 2026-11-30; superseded by Sonnet 5/5.5): solid coding (SWE-bench Verified 77.2%), moderate agentic (OSWorld-Verified 61.4%), 200K context, Aug 2025 cutoff — an older-generation model now near retirement.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-5-20250929`), claude.ai; 34 providers per models.dev; sibling Sonnet 4.5 Thinking.
- **Release / knowledge:** Released 2025-09-29; knowledge cutoff Aug 2025; deprecated Sep 30 2026, retirement Nov 30 2026 (Anthropic deprecation table).
- **IDs:** `claude-sonnet-4-5-20250929` (Claude API; non-reasoning base; thinking sibling).
- **Context window:** 200,000 tokens total; max output 64,000.
- **Modalities:** text + image input, text output; tool calls; computer use; no native video/audio.
- **Pricing (as of 2026-11-03):** ~$2.58 input / $12.88 output per 1M tokens (models.dev latest row; $3/$15 at launch).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50%**; OSWorld-Verified: **61.4%**; GERT Labs: 48.51%; JobBench: 27.7%; VITA-Bench: 17.0%

Reasoning / knowledge:

- GPQA: **83.4%**; AIME 2025: **87%**; ARC-AGI-2: **13.6%**; FrontierMath v2 Tiers 1–3 23.86%, Tier 4 2.44% (Epoch AI)

Coding:

- SWE-bench Verified: **77.2%**; Terminal-Bench 2.0 50%; no SWE-Pro/multilingual row verified in sources reviewed

Long context:

- 200K window; no LCR/MRCR figure verified in sources reviewed.

Multimodal:

- text/image in, text out; Design Arena 1188 Elo; no MMMU row verified.

### Normalized scores (1–100)

- **Tool use: 71/100.** OSWorld-Verified 61.4% decent; capped by VITA 17%, JobBench 27.7%, GERT 48.51%, and TB2.0 50%.
- **Reasoning: 76/100.** GPQA 83.4%, AIME 87%; capped by ARC-AGI-2 13.6% and FrontierMath 23.9%.
- **Context window: 75/100.** 200K (below the 1M class); no retrieval figure verified.
- **Multimodal: 80/100.** image input, text output; no verified visual benchmark rows.
- **Coding: 77/100.** SWE Verified 77.2%; capped by TB2.0 50% and no SWE-Pro row.
- **Cost efficiency: 72/100.** ~$2.58/$12.88 — mid-tier; retired Nov 2026.
- **Overall Score: 76/100.** Mean of (71+76+75+80+77)/5 = 75.8 → 76. A capable 2025 Sonnet, now near retirement and far behind Sonnet 5/5.5.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic deprecation table + Opus 4.5 system card via BenchLM, Epoch AI, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Sonnet 4.5 (Anthropic, 2025-09-29)](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [Claude model deprecations — Sonnet 4.5 (Anthropic docs)](https://platform.claude.com/docs/en/about-claude/model-deprecations)
  - [Claude Sonnet 4.5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-sonnet-4-5)
  - [Claude Sonnet 4.5 — models.dev registry](https://models.dev/models/anthropic/claude-sonnet-4-5)
