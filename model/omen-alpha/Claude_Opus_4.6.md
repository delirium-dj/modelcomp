# Omen Alpha — findings by Claude Opus 4.6

- Source: Unknown vendor / Omen Alpha (`opencode/omen-alpha`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Anonymous stealth reasoning model live on OpenCode Go for coding/agents. Paid at $0.20/$0.66 with 0-day data retention. Achieves OpenCode 23.14/40. Vendor unknown.
- **Provider / access:** OpenCode Go `opencode/omen-alpha`. No Zen Free ID.
- **Release / knowledge:** 2026; vendor undisclosed.
- **IDs:** `opencode/omen-alpha` (no Free ID)
- **Context window:** Not publicly disclosed (vendor states parameters and context are undisclosed).
- **Modalities:** Text input/output. No verified image/audio/video support.
- **Pricing (as of 2026-10-20):** $0.20/$0.66 per 1M ($0.04 cached). TokenRa promo $0.08/$0.26 per 1M. 0-day data retention.
- **Architecture:** Unknown. Anonymous stealth model. Parameters and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenCode benchmark: **23.14/40** (meta.json)
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found

Long context:

- Context window undisclosed. No retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 42/100.** OpenCode 23.14/40 (57.9%) suggests moderate agentic capability. Capped by limited benchmark scope and unknown model identity.
- **Reasoning: 38/100.** No reasoning benchmarks. Anonymous model. Scored conservatively.
- **Context window: 45/100.** Context undisclosed — scored conservatively at the 32K tier mapping (45) as a baseline with no verifiable information.
- **Multimodal: 15/100.** Text-only (no verified multimodal). Fixed at 15.
- **Coding: 40/100.** OpenCode 23.14/40 includes coding components. No standalone coding benchmarks. Scored conservatively.
- **Cost efficiency: 82/100.** $0.20/$0.66 per 1M is affordable. TokenRa promo at $0.08/$0.26 is very cheap. 0-day retention is a privacy plus.
- **Overall Score: 36/100.** Mean of (42 + 38 + 45 + 15 + 40) / 5 = 36.0 → 36. An anonymous paid model with moderate agentic performance. Strong privacy (0-day retention) but completely unknown provenance limits trust and scoring.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis; scores are conservative estimates given anonymous provenance.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
