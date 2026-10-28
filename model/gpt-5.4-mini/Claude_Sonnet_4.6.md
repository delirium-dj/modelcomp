# GPT-5.4 Mini — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-5.4-mini`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's small-tier model (400K/128K, $0.75/$4.50) for delegated coding and computer use; OSWorld 72.1%, 30% of 5.4 quota in Codex — the subagent delegation tier.
- **Provider / access:** OpenAI (`opencode/gpt-5.4-mini`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/gpt-5.4-mini` (no Free ID on Zen)
- **Context window:** 400,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image in; text out; tool calls; computer-use
- **Pricing (as of 2026-10-21):** $0.75/$4.50 per 1M; $0.075 cached input
- **Architecture:** Proprietary (OpenAI GPT-5.4 Mini — small tier)

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (Computer Use): **72.1%** (meta.json short field)

Reasoning / knowledge:

- No GPQA or HLE score found for GPT-5.4 Mini

Coding:

- No SWE-bench score found

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 72.1% for computer use is solid at the mini tier; designed for delegated subagent coding and desktop tasks.
- **Reasoning: 68/100.** Small-model ceiling; performs tasks, the flagship architects them. No GPQA published.
- **Context window: 82/100.** 400,000-token context → tier 400K = 82.
- **Multimodal: 62/100.** Text + image in; text-only out — image + computer-use capable.
- **Coding: 68/100.** No SWE-bench; coding delegation tier with 30% of 5.4 quota in Codex; not a specialist.
- **Cost efficiency: 95/100.** $0.75/$4.50 per 1M is very affordable for 400K context with computer-use.
- **Overall Score: 72/100.** (78+68+82+62+68)/5 = 71.6 → 72. Best fit: fleets of subagent coding and computer-use tasks under an orchestrator.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
