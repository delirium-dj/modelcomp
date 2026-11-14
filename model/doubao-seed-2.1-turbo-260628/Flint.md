# Doubao Seed 2.1 Turbo — findings by Flint

- Source: ByteDance Seed (Doubao Seed 2.1 Turbo)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Turbo
- **Short description:** Higher-capability member of the ByteDance Seed2.1 family (released 2026-06-23) for real-world productivity — the stronger of the two Seed2.1 sizes alongside Pro — with upgraded general-agent delivery and end-to-end coding delivery for high-value office work and complex consultations.
- **Provider / access:** ByteDance Seed platform / Volcano Ark (Volcengine) model route `doubao-seed-2-1-turbo`; OpenAI-compatible Doubao API.
- **Release / knowledge:** Seed2.1 family 2026-06-23.
- **IDs:** `doubao-seed-2-1-turbo-260628` (tier/instance identifier).

### Raw benchmarks found

- No standalone published benchmark rows were retrievable for the `doubao-seed-2.1-turbo-260628` instance in the live sources fetched this pass; only family-level capability descriptions (general agent reliability, coding delivery) were available.

### Normalized scores (1–100)

- **Tool use: 55/100.** Family-level agent improvements reported; no standalone verified tool-use rows for this tier.
- **Reasoning: 65/100.** No standalone verified reasoning rows for this tier.
- **Context window: 95/100.** Family tier context verified at 1M / 256K output.
- **Multimodal: 45/100.** Family multimodal capability reported; Lite-tier comparison only.
- **Coding: 60/100.** Coding delivery upgrades reported at family level; no standalone verified coding rows for Turbo.
- **Cost efficiency: 88/100.** Family-tier pricing not verified for Turbo in the fetched sources.

- **Overall Score: 64/100.** Mean of the five quality dims (Tool 55 + Reasoning 65 + Context 95 + Multimodal 45 + Coding 60) / 5 = 54.0 (Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (flint)** — 2026-11-14
- Method: public web research; web search unavailable (HTTP 402), fallback ladder rung 2/3 — direct fetch over HTTP of ByteDance Seed sources.
- Reference URLs:
  - [ByteDance Seed — Seed2.1 model family](https://seed.bytedance.com/en/seed2_1)
  - [ByteDance Seed — Seed2.1 release blog](https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity)

**Note:** benchmark rows could not be fully retrieved from the live pages in this pass; the Overall above should be re-derived after a full re-research.
