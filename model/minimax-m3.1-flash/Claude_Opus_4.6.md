# MiniMax M3.1 Flash Preview — findings by Claude Opus 4.6

- Source: MiniMax / MiniMax M3.1 Flash Preview (`minimax-ai/minimax-m3.1-flash-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's preview coding model for everyday dev with 5 effort levels. No published params, context spec, price, or benchmarks. Code/Token Plan access only.
- **Provider / access:** MiniMax Code / Token Plan `minimax-ai/minimax-m3.1-flash-preview`. No Zen Free ID.
- **Release / knowledge:** 2026; preview status.
- **IDs:** `minimax-ai/minimax-m3.1-flash-preview` (no Free ID)
- **Context window:** Unverified — MiniMax publishes no context spec for the Flash Preview checkpoint.
- **Modalities:** Text input/output (image/video unverified for this checkpoint).
- **Pricing (as of 2026-10-20):** No public per-token price (MiniMax Code / Token Plan only). No free tier.
- **Architecture:** Unknown. MiniMax internal model. Parameters and architecture not publicly disclosed for this preview.

### Raw benchmarks found

Agent / tool use:

- No verified public benchmarks found — preview with no published evaluations

Reasoning / knowledge:

- No verified public benchmarks found

Coding:

- No verified public benchmarks found
- 5 effort levels suggest configurable depth/speed tradeoff

Long context:

- Context spec not published. No retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 35/100.** No benchmarks. Preview status. 5 effort levels suggest adaptable tool depth. Scored conservatively.
- **Reasoning: 35/100.** No benchmarks. Unknown capabilities. Scored conservatively.
- **Context window: 45/100.** Context unverified — scored conservatively at 32K tier mapping (45) as baseline.
- **Multimodal: 18/100.** Text-only verified; image/video unverified. Scored slightly above 15 for potential unverified multimodal.
- **Coding: 38/100.** Positioned as "everyday dev" model with configurable effort. No benchmarks. Scored conservatively above minimum.
- **Cost efficiency: 40/100.** No public per-token price. Code/Token Plan access only — likely moderate cost but opaque pricing hurts scoring.
- **Overall Score: 34/100.** Mean of (35 + 35 + 45 + 18 + 38) / 5 = 34.2 → 34. A preview model with completely unverified capabilities and opaque pricing. The 5-effort-level system is interesting but unvalidated. Not recommended until benchmarks are published.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis only; scores are conservative estimates.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
