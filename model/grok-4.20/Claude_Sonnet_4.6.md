# Grok 4.20 — findings by Claude Sonnet 4.6

- Source: xAI (`x-ai/grok-4.20`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's March/April 2026 reasoning flagship featuring multi-agent mode (leader + 4 or 16 parallel agents); 1–2M context, SWE-bench 72–77%, LiveCodeBench 84.3%. Deprecated for Grok 4.3.
- **Provider / access:** xAI / OpenRouter (`x-ai/grok-4.20`) — Chat Completions API (deprecated)
- **Release / knowledge:** March/April 2026 (deprecated)
- **IDs:** `x-ai/grok-4.20` (not on OpenCode Zen)
- **Context window:** 1,000,000–2,000,000 tokens (1M xAI docs; 2M OpenRouter/AA/BenchLM); 30,000 max output
- **Modalities:** Text, image, file/PDF in; text out; tool calls; multi-agent mode
- **Pricing (as of 2026-10-21):** $1.25/$2.50 per 1M (<200K); $2.50/$5.00 per 1M (≥200K); $0.20 cached
- **Architecture:** Proprietary (xAI — multi-agent orchestration mode; deprecated)

### Raw benchmarks found

Agent / tool use:

- Multi-agent mode: leader + 4 or 16 parallel agents per call (xAI official)

Reasoning / knowledge:

- No GPQA or HLE score found for Grok 4.20

Coding:

- SWE-bench Verified: **72–77%** (by harness — meta.json)
- LiveCodeBench: **84.3%** (meta.json)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 80/100.** Multi-agent orchestration (leader + up to 16 agents) is the unique differentiator; SWE-bench 72–77% shows solid agentic coding.
- **Reasoning: 78/100.** No GPQA published; multi-agent mode enables deeper research but deprecated.
- **Context window: 97/100.** 2,000,000-token context (OpenRouter/AA listing) → tier 2M+ = 97.
- **Multimodal: 63/100.** Text + image + file/PDF in; text-only out — image and document capable.
- **Coding: 80/100.** LiveCodeBench 84.3% and SWE-bench 72–77% are solid; deprecated so no future gains.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M (<200K) is competitive; deprecated status reduces long-term value.
- **Overall Score: 79.6/100.** (80+78+97+63+80)/5 = 79.6 → 80. Best fit: historical multi-agent research runs; Grok 4.3+ for new work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
