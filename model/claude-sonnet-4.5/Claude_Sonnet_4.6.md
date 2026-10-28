# Claude Sonnet 4.5 — findings by Claude Sonnet 4.6

- Source: Anthropic (`opencode/claude-sonnet-4.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sonnet model that made long-horizon coding a mid-tier feature; SWE-bench Verified 77.2%, 200K context. Superseded by Sonnet 4.6 and the 5.x line.
- **Provider / access:** Anthropic (`opencode/claude-sonnet-4.5`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/claude-sonnet-4.5` (no Free ID on Zen)
- **Context window:** 200,000 tokens standard (64K out); 1M beta (Tier 4+)
- **Modalities:** Text, image, file in; text out; tool calls
- **Pricing (as of 2026-10-21):** $3.00/$15.00 per 1M; $0.30 cached
- **Architecture:** Proprietary (Anthropic Claude Sonnet 4.5)

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **77.2%** (meta.json — long-horizon coding)

Reasoning / knowledge:

- No GPQA or HLE score found for Sonnet 4.5

Coding:

- SWE-bench Verified: **77.2%** (same as above)

Long context:

- 1M beta context available for Tier 4+ (not default)

### Normalized scores (1–100)

- **Tool use: 79/100.** SWE-bench 77.2% was Opus-shaped work at Sonnet price — the generation milestone.
- **Reasoning: 78/100.** Sonnet 4.x class reasoning; no GPQA published; superseded by 4.6 and 5.x.
- **Context window: 75/100.** Standard 200K context → tier 200K = 75 (1M beta is not the default).
- **Multimodal: 63/100.** Text + image + file in; text-only out — image and document capable.
- **Coding: 79/100.** SWE-bench Verified 77.2%; solid for Sonnet tier; compatibility default use case now.
- **Cost efficiency: 85/100.** $3/$15 per 1M is good value for Sonnet-class; same price as successors.
- **Overall Score: 75/100.** (79+78+75+63+79)/5 = 74.8 → 75. Best fit: compatibility with existing Sonnet 4.5 workflows; migrate to 4.6/5.x for new projects.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
