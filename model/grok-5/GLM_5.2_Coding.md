# Grok 5 — findings by GLM 5.2 Coding

- Source: xAI (unreleased, in training — `grok-5` reserved but not live)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** xAI's next flagship, still in training as of 2026-10-09 and NOT released. No model card, no spec sheet, no public benchmark, no pricing, no model ID in xAI docs. Every specific spec in circulation (6–10T params, 1.5M context) is rumor or estimate. Musk's ladder (2026-09-14 X posts): Grok 4.7 shipped 2026-09-21 ≈ Opus 5.0 level; Grok 4.8 (2.5T, new C++ stack) next; Grok 4.9 "probably Astra/Fable class"; Grok 5 "maybe better than anything" — his pick for AGI.
- **Provider / access:** none yet — xAI API, Grok app, Grok Build and third-party harnesses are the expected channels (per xAI shipping-model pattern). Confirmed only: in training on Colossus 2 (xAI Jan 2026 funding announcement). xAI now operates as SpaceXAI after SpaceX acquired it 2026-02.
- **Release / knowledge:** not released. Late-2025, Q1-2026, Q2-2026 windows all passed; Polymarket "released by Dec 31, 2026" priced ~40s–50s% over Sept 16, 2026; Nov 30 23%.
- **IDs:** none. `grok-5` not in docs.x.ai model list (tops out at `grok-4.7`). No Zen listing.
- **Context window:** unknown. The repeated "1.5M tokens" is an estimate, not a spec — shipping references: Grok 4.7 500K, Grok 4.3 1M, Grok Build 256K.
- **Modalities:** expected native multimodal (image/video understanding folded in; Grok already ships image/video generation and voice as separate features) — not specified for Grok 5.
- **Pricing:** none announced.
- **Architecture:** rumored 6–10T-parameter MoE (Musk sized 4.7 at ~2.1T, 4.8 at 2.5T; nothing official for 5). Multi-agent parallel reasoning expected to scale from 4.20 beta; live X + web grounding expected.

### Raw benchmarks found

- None. Zero published benchmarks — no LMArena, no SWE-Bench, no leaderboard entry, no AA Index score. Any "Grok 5 tops the charts" headline refers to V9-generation coding models that shipped as Grok 4.5/4.6, not Grok 5.
- Confusion to log: spring-2026 "1.5T parameter Grok 5 unveil" headlines actually described Grok V9-Medium, the ~1.5T coding foundation that shipped as Grok 4.5 (2026-07-08, $2/$6, 500K ctx, 4th on AA Index at launch) and 4.6 (2026-08-12 interim flagship). Consumer release names (4.x) and internal foundation versions (V9) do not line up.
- Unconfirmed features flagged: "Reality Engine" fact-checker (blog coinage, never announced), "rapid learning" weekly improvement (loosely discussed only).

### Normalized scores (1–100)

> Not scorable. No shipping model, no verified data. Per repo methodology (no hallucinated scores), all dims marked pending rather than estimated.

- **Tool use:** pending — model not released.
- **Reasoning:** pending — model not released.
- **Context window:** pending — model not released.
- **Multimodal:** pending — model not released.
- **Coding:** pending — model not released.
- **Cost efficiency:** pending — no pricing.
- **Overall Score:** pending — not released; excluded from rankings until `grok-5` appears in xAI model docs / a launch post / a leaderboard entry.
- **Watch signals:** `grok-5` entry in docs.x.ai models; official model/system card; LMArena/SWE-Bench leaderboard entry; launch post from @xAI (not a Musk reply).

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Geotoolbox dated status article with xAI docs/Musk-post timeline, Overchat, Fello AI tracker, OrcaRouter docs check, MindStudio roadmap, Polymarket odds, CellCog timeline); no vendor claims of capability exist to evaluate — this file records the non-release state to prevent future duplicate research from re-chasing rumors.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.