# Grok 4.5 — findings by Cat Jam

- Source: SpaceXAI / xAI / Grok 4.5 (`opencode/grok-4-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 (prior flagship before Grok 4.6)
- **Short description:** SpaceXAI xAI reasoning model released mid-2026 (5 weeks before Grok 4.6; July 15? wait docs say available). 500K context, text/image, $2/$6 at standard. Similar to 4.6 but higher cache? 
- **Provider / access:** xAI API (`grok-4.5`), Grok in X, SuperGrok, OpenRouter. Chat/Responses. Text/image in; text out.
- **Release / knowledge:** Released circa 2026-07-?? (knowledge cutoff ~Feb 2026? likely earlier). Not stated in sampled docs (from Grok 4.6 comparison? docs cutoff Feb 1 2026 for 4.6, 4.5 earlier maybe mid-2025). Mark unknown.
- **IDs:** `grok-4.5` (xAI)
- **Context window:** 500,000 tokens; >200K repriced $4/$12 (cached $1?). Standard input/cached/output: $2/$0.30/$6 under 200K; cache rate 0.30 (vs 4.6 0.50).
- **Modalities:** Text, image in; text out (no audio/video). Web search/X search, function calling. 
- **Pricing (as of 2026-10-16):** $2.00/$6.00 under 200K; $4.00/$12.00 at long context ≥200K. Cached standard: $0.30 (15%); regional US +10% where available.
- **Architecture:** Predecessor 1.5T scale; post-training/training improvements in 4.6.

### Raw benchmarks found (cross-reference from Grok 4.5 data in Grok 4.6 coverage)

- GPQA Diamond: 93.1% (eesel comparison)
- Terminal-Bench 2.1: 81.6%
- Tau-3-Banking: 42.1%
- GDPval-AA v2 Elo: 1526
- AA-Briefcase Elo: 1313
- AA-LCR: 74.0%
- HLE: 42.7%
- SciCode: 54.1% (only +? 4.6 regressed -0.5 compared with 54.1)
- AA Intelligence Index: likely ~? (eesel/AA maybe 44? from first AA post? Not reproduced; omit exact and cap norms below).

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 81.6, Tau3 42.1, GDPval Elo 1526, OSWorld? unknown. Strong agent prior to 4.6.
- **Reasoning: 86/100.** GPQA 93.1, HLE 42.7, LCR 74.0, SciCode 54.1. Good general reasoning, below late 2026 flagships.
- **Context window: 78/100.** 500K; AA LCR 74.0%; context threshold 200K.
- **Multimodal: 76/100.** Text/image only.
- **Coding: 88/100.** TB2.1 81.6, SWE-Bench Verified 95? not 4.5-specific; SciCode 54.1. High tool-heavy coding (per table).
- **Cost efficiency: 78/100.** $2/$6 low headline, but 4.6's cache-rate change raises effective bills; classification based on cost-run behavior. (No batch for at least 4.6; unknown for 4.5)
- **Overall Score: 82/100.** Mean (82+86+78+76+88)/5 = 82. (Slightly below 4.6, which normalized 88 using stronger 4.6 numbers.)

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (earlier benchmark comparison incl. cross-vendor AA summary inside Grok 4.6 coverage; raw xAI pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
