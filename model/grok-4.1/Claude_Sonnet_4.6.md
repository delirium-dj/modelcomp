# Grok 4.1 — findings by Claude Sonnet 4.6

- Source: xAI (`xai/grok-4.1`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 consumer chat flagship (Thinking mode, LMArena #1 at 1483 Elo) with live X data. No public API route — consumer subscription only. Superseded by 4.2/4.3.
- **Provider / access:** xAI consumer app / Grok subscription only — no API route; never on OpenCode Zen
- **Release / knowledge:** November 2025 (superseded)
- **IDs:** `xai/grok-4.1` (consumer only; no public API pricing)
- **Context window:** ~1,000,000 tokens (BenchLM spec; xAI never formally documented)
- **Modalities:** Text in/out; image in (consumer app only)
- **Pricing (as of 2026-10-21):** Consumer Grok subscription only — no public API price
- **Architecture:** Proprietary (xAI Grok 4.1 — consumer chat flagship; Thinking/Non-Thinking mode)

### Raw benchmarks found

Agent / tool use:

- No agent/tool benchmark found for API use (consumer-only model)

Reasoning / knowledge:

- LMArena Elo: **1483** (#1 at time of release — consumer-facing conversational quality)

Coding:

- No SWE-bench score found

Long context:

- No formal window documented; BenchLM spec suggests ~1M

### Normalized scores (1–100)

- **Tool use: 70/100.** Live X data integration is the standout tool; no standalone agentic tool benchmark (consumer-only access).
- **Reasoning: 82/100.** LMArena #1 at 1483 Elo reflects strong conversational reasoning + Thinking mode; no GPQA.
- **Context window: 92/100.** ~1,000,000-token context per BenchLM → tier 1M = 92.
- **Multimodal: 60/100.** Text + image in (consumer app); text-only out; no API access for multimodal.
- **Coding: 65/100.** No SWE-bench; Thinking mode improves coding quality; consumer-only limits verification.
- **Cost efficiency: 40/100.** Consumer subscription model — no transparent API pricing; no API route means no agentic cost modeling.
- **Overall Score: 74/100.** (70+82+92+60+65)/5 = 73.8 → 74. Best fit: reference and history only; 4.2/4.3 are the current API-accessible successors.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, BenchLM, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
