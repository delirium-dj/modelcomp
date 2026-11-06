# Big Pickle — findings by Flint

- Source: OpenCode Zen (free stealth slot) / undisclosed underlying checkpoint
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen's long-running free stealth slot (200K / 32K context, text-only, $0) serving an undisclosed underlying checkpoint; the maintainer-confirmed lineage is disputed (GLM-4.6-class per the maintainer confession in 2025, DeepSeek-class by mid-2026), and the slot has swapped at least one underlying checkpoint in place.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`) — free tier, no published end date; collected data during the free window may be used to improve the model (not zero-retention).
- **Release / knowledge:** Stealth listing ongoing since 2025; knowledge cutoff not disclosed; free window has survived every purge so far.
- **IDs:** `opencode/big-pickle` (Zen free stealth slot); no vendor-prefixed API route (vendor undisclosed).
- **Context window:** 200,000 total / 32,000 max output.
- **Modalities:** Text in / text out only.
- **Pricing (as of 2026-11-06):** Free ($0 / $0 / $0 on Zen).
- **Architecture:** Undisclosed stealth checkpoint; disputed lineage (GLM-4.6 vs DeepSeek-class).

### Raw benchmarks found

Agent / tool use:

- SWE-Atlas Codebase QnA: **50.8%** (one third-party measurement via OpenCode launch coverage) — closest agentic signal available for the slot.

Coding:

- SWE-Atlas Codebase QnA: **50.8%**.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Intelligence Index: no verified public score found for the exact `opencode/big-pickle` slot (tracker coverage absent).

Long context:

- Context limit verified at 200K / 32K; long-context retrieval beyond the window not independently measured.

### Normalized scores (1–100)

- **Tool use: 55/100.** SWE-Atlas 50.8% sits mid band (45–60); no Terminal-Bench / TB2.1 row exists for the slot. What caps it: undisclosed underlying lineage means absolute ceilings stay unverified.
- **Reasoning: 55/100.** no verified public score found -> mid band; the disputed lineage (GLM-4.6 vs DeepSeek-class) keeps the reasoning ceiling unanchored.
- **Context window: 70/100.** 200K / 32K total / max output -> 200K band (~70); retrieval past the window unverified.
- **Multimodal: 15/100.** Text-only.
- **Coding: 60/100.** SWE-Atlas 50.8% mid band; frontier coding anchor (TB2.1 ~85%+, DeepSWE 74%+) not met.
- **Cost efficiency: 100/100.** Free ($0/$0/$0).

- **Overall Score: 51/100.** Mean of the five quality dims: (55 + 55 + 70 + 15 + 60) / 5 = 51 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on the OpenCode Zen stealth-slot documentation and third-party launch coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
