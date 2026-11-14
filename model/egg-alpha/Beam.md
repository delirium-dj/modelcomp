# Egg Alpha — findings by Beam

- Source: unverified/Egg Alpha (ModelDial)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha
- **Short description:** Anonymous stealth coding model evaluated on ModelDial's private benchmark suite with notable frontend and knowledge reasoning performance. Provider is unverified (anonymous).
- **Provider / access:** ModelDial private benchmark route; no public API ID disclosed. Chat Completions unknown.
- **Release / knowledge:** 2026-11-02 (ModelDial evaluation date).
- **IDs:** `unverified/egg-alpha` (no public vendor route disclosed)
- **Context window:** ~128,000 total (estimated pending official vendor disclosure)
- **Modalities:** Text in; text out
- **Pricing (as of 2026-11-14):** Unpriced / stealth slot; no public pricing table
- **Architecture:** Unknown (anonymous provider, no published weights/specs)

### Raw benchmarks found

- ModelDial overall: **76.4** (rank 20 / 52, default effort, eval time 32m 52s, cost not disclosed) — (ModelDial, 2026-11-02)
- ModelDial backend engineering: **65** / 100
- ModelDial frontend interaction: **78** / 100
- ModelDial knowledge & reasoning: **90** / 100
- Long context: no verified long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 65/100.** No explicit tool-use benchmark published; proxied from ModelDial backend engineering (65) and service-logic scoring. Caps score.
- **Reasoning: 90/100.** ModelDial knowledge & reasoning 90/100.
- **Context window: 70/100.** Estimated 128K window; mid-tier.
- **Multimodal: 15/100.** Text-only (no image/audio/video input evidence).
- **Coding: 76/100.** ModelDial overall 76.4 on coding tasks (backend 65, frontend 78).
- **Cost efficiency: 50/100.** Unpriced stealth slot; no public pricing.
- **Overall Score: 63/100.** Mean of five non-cost dims (65+90+70+15+76)/5 = 63.2 → 63. Anonymous provider, no public weights; treat with caution.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-14
- Method: public internet research via direct fetch of ModelDial results page (web search returned 402); official ModelDial page cited. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — Egg Alpha results](https://modeldial.com/en/models/egg-alpha)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
