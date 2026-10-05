# Laguna S 2.1 — findings by GLM 5.3 Flash

- Source: Poolside (`laguna-s-2.1` — Laguna S 2.1; developer confirmed as Poolside, previously tracked as "Laguna Labs")
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 (Poolside; open-weight reasoning model)
- **Short description:** Poolside's Laguna S 2.1 — released July 21, 2026 as an open-weight reasoning model with a 1M-token context window and a confirmed coding orientation. The 2026-09-19 pass could not verify benchmark values; the 2026-10-05 enrichment pass surfaced the launch benchmark rows, the developer identity, and a hosted free tier.
- **Provider / access:** Open weights (OpenMDW license); hosted free tier at $0.00 per 1M tokens on OpenRouter and Kilo (listed as of October 2026). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released July 21, 2026 (Poolside launch materials via GlobeNewswire/VentureBeat; BenchLM release record). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `laguna-s-2.1` (folder slug / BenchLM record; OpenRouter and Kilo free-tier listings).
- **Context window:** 1,000,000 tokens (1M) — verified from the BenchLM dossier header ("1M context").
- **Modalities:** text in / text out; no multimodal claims verified (folder meta: "Unknown").
- **Pricing (as of 2026-10-05):** Hosted free tier $0.00 per 1M tokens on OpenRouter/Kilo (typical free-tier data-usage caveats apply); open weights (OpenMDW) give a verified $0 self-host path.
- **Architecture:** ~118B parameters, open weights under the OpenMDW license; reasoning-capable; developer confirmed as Poolside (launch materials).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Poolside launch materials, 2026-07-21, via GlobeNewswire/VentureBeat; BenchLM row corroborates)
- Tau2 / GDPval / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / LCR: no verified public score found

Coding:

- DeepSWE: **40.4%** (Poolside launch materials, 2026-07-21, via GlobeNewswire/VentureBeat; BenchLM row corroborates)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window verified (BenchLM); no MRCR/RULER retrieval numbers surfaced

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 at 70.2% is a genuinely strong agentic result that replaces the 2026-09-19 evidence dock; capped by zero Tau2/GDPval rows and a weak DeepSWE showing the agentic ceiling is uneven.
- **Reasoning: 48/100.** Reasoning-capable flag and 1M window verified; still no reasoning benchmark values — unchanged from the provisional score.
- **Context window: 92/100.** 1M window verified (95–100 tier); no retrieval numbers published, so no 95+.
- **Multimodal: 20/100.** No multimodal claims verified — text-only band pending evidence.
- **Coding: 58/100.** DeepSWE 40.4% is weak-to-mid, but the strong Terminal-Bench 2.1 run and Poolside's confirmed coding focus lift it above the old provisional floor.
- **Cost efficiency: 88/100.** A verified $0.00/1M hosted free tier (OpenRouter/Kilo) on top of OpenMDW self-hosting makes the $0 path real rather than theoretical; short of 100 only because free-tier rate limits and the OpenMDW terms are not fully documented.
- **Overall Score: 57.2/100.** (68+48+92+20+58)/5 = 57.2. Best fit: self-hosted or free-tier long-context agentic runs — the launch rows confirm real tool competence, but the reasoning side is still unmeasured.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-19 pass: BenchLM dossier, provider-catalog cross-reference; 2026-10-05 approved enrichment pass: Poolside launch materials via GlobeNewswire/VentureBeat, BenchLM rows, OpenRouter/Kilo free-tier listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
