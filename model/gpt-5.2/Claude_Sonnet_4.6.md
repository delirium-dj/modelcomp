# GPT-5.2 — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-5.2`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's science-and-knowledge flagship of the 5.2 generation with Instant/Thinking/Pro compute tiers; 400K context, GPQA 92.4%, MCP Atlas 67.6%.
- **Provider / access:** OpenAI (`opencode/gpt-5.2`) — Chat Completions & Responses API
- **Release / knowledge:** 2026
- **IDs:** `opencode/gpt-5.2` (no Free ID on Zen)
- **Context window:** 400,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-21):** $1.75/$14.00 per 1M (Thinking); $21.00/$168.00 per 1M (Pro); $0.175 cached
- **Architecture:** Proprietary (Instant/Thinking/Pro tiers)

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **67.6%** (meta.json short field — Scale AI MCP-Atlas multi-server orchestration)

Reasoning / knowledge:

- GPQA Diamond: **92.4–93.2%** (OpenAI official / introl.com — varies by compute tier)
- AA Intelligence Index: **42** (meta.json short field — Artificial Analysis)
- GDPval: **70.9%** (introl.com — outperforms baseline human experts across white-collar tasks)

Coding:

- No separate verified SWE-bench score found for GPT-5.2 specifically

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 67.6% and strong multi-server orchestration performance; AA Index 42 anchors overall intelligence position.
- **Reasoning: 89/100.** GPQA Diamond 92.4–93.2% places it near top tier; GDPval 70.9% shows broad professional-knowledge strength.
- **Context window: 82/100.** 400,000-token context → tier 400K = 82.
- **Multimodal: 60/100.** Text + image in; text-only out — no audio or video.
- **Coding: 82/100.** No standalone SWE-bench verified; inferred from Thinking/Pro tiers and MCP Atlas performance; estimated conservatively.
- **Cost efficiency: 80/100.** $1.75/$14 Thinking tier is competitive; Pro tier ($21/$168) is specialist-only.
- **Overall Score: 79/100.** (82+89+82+60+82)/5 = 79.0. Best fit: science-heavy knowledge work with tiered compute budget.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, Artificial Analysis, introl.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
