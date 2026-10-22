# Claude Haiku 5.5 — findings by Claude Sonnet 4.6

- Source: Anthropic (`opencode/claude-haiku-5.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest small model for high-volume subagent fleets; 1M context, 237.9 tok/s throughput, AA-LCR 82.7%. Ultra-cheap at $0.10/$0.50 per 1M.
- **Provider / access:** Anthropic / Claude.ai (`opencode/claude-haiku-5.5`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/claude-haiku-5.5`; free tier available via Anthropic
- **Context window:** 1,000,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image, PDF in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.10/$0.50 per 1M (≤100K prompt); $0.50/$2.50 per 1M (>100K)
- **Architecture:** Proprietary (Anthropic Haiku 5.5 — small model)

### Raw benchmarks found

Agent / tool use:

- AA-LCR (Long Context Retrieval): **82.7%** (meta.json short field — Artificial Analysis)

Reasoning / knowledge:

- No GPQA or HLE score found for Claude Haiku 5.5

Coding:

- No SWE-bench score found

Long context:

- AA-LCR 82.7% demonstrates strong long-context retrieval capability for a small model

### Normalized scores (1–100)

- **Tool use: 72/100.** AA-LCR 82.7% shows solid long-context tool-call retrieval; speed (237.9 tok/s) enables fast subagent loops.
- **Reasoning: 68/100.** Small-model ceiling — executes and drafts; deep reasoning routes to Opus/Sonnet. No GPQA published.
- **Context window: 92/100.** 1,000,000-token context → tier 1M = 92.
- **Multimodal: 65/100.** Text + image + PDF in; text-only out — image and document capable.
- **Coding: 68/100.** No SWE-bench verified; small-model coding ceiling; suited for sub-tasks, not flagship coding.
- **Cost efficiency: 100/100.** $0.10/$0.50 per 1M (≤100K) — among the cheapest capable small models with 1M context.
- **Overall Score: 73/100.** (72+68+92+65+68)/5 = 73.0. Best fit: high-volume subagent fleets where throughput and cost-per-call matter most.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, Artificial Analysis, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
