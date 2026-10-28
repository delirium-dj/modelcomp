# Claude Haiku 4.5 — findings by Claude Sonnet 4.6

- Source: Anthropic (`opencode/claude-haiku-4.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast cheap subagent tier (200K/64K, $1/$5) that made orchestrator/worker stacks practical; SWE-bench Verified 73.3%, GPQA 72.2%. Replaced by Haiku 5.5.
- **Provider / access:** Anthropic / OpenCode Zen (`opencode/claude-haiku-4.5`) — Chat Completions API
- **Release / knowledge:** 2025/2026
- **IDs:** `opencode/claude-haiku-4.5` (no Free ID on Zen)
- **Context window:** 200,000 tokens input / 64,000 tokens output
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.00/$5.00 per 1M; $0.10 cached read; $1.25 cached write
- **Architecture:** Proprietary (Anthropic Claude Haiku 4.5 — superseded)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **40–44%** (meta.json short field — moderate for a small model)
- SWE-bench Verified: **73.3%** (meta.json — strong for a subagent tier)

Reasoning / knowledge:

- GPQA Diamond: **72.2%** (Vals.ai — meta.json)

Coding:

- SWE-bench Verified: **73.3%** (same as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 74/100.** SWE-bench 73.3% was Opus-class at its generation for a Haiku; Terminal-Bench 40–44% shows speed-tier ceiling.
- **Reasoning: 70/100.** GPQA 72.2% is adequate for a subagent tier; reasoning routes to Opus/Sonnet.
- **Context window: 75/100.** 200,000-token context → tier 200K = 75.
- **Multimodal: 62/100.** Text + image in; text-only out — image capable.
- **Coding: 73/100.** SWE-bench 73.3% is strong for Haiku class; established the subagent coding pattern.
- **Cost efficiency: 96/100.** $1/$5 per 1M is very affordable; $0.10 cached read for repeat subagent calls.
- **Overall Score: 71/100.** (74+70+75+62+73)/5 = 70.8 → 71. Best fit: pinned legacy orchestrator/worker stacks; Haiku 5.5 is the upgrade path.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, Vals.ai, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
