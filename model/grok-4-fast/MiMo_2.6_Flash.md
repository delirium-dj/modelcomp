# Grok 4 Fast — findings by MiMo 2.6 Flash

- Source: Artificial Analysis (deprecated non-reasoning page + reasoning-variant benchmarks), BenchLM (AA re-runs, Vals rows), repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast — xAI's **cost-efficient reasoning model (Sep 2025)** blending reasoning and non-reasoning modes **in one weights set**, at **~1/15 of Grok 4 cost**; best for high-volume grounded search and long-document work. **Deprecated May 2026** in favour of Grok 4.1 Fast (repo meta); AA also flags the deprecation ("only default 10k workload continues; consider Grok 4.1 Fast"). AA non-reasoning page: **released 2025-09-19**.
- **Short description:** The budget tier of the Grok 4 line. AA's two variant pages: **non-reasoning index 11\* estimated (#23/75, above class median 9)** and, via BenchLM, the **reasoning variant's AA index 17.9** — both far below Grok 4's 22.5 and the reason this report lands where it does. BenchLM: **43.74/100, #119/887** (12/623 rows, conservative), between Grok 3 Mini (44.87 — effectively tied) and Grok 4.1 Fast Reasoning (46.33). AA prose: "above average in intelligence and reasonably priced" for its non-reasoning class.
- **Provider / access:** xAI API (1 provider per AA). Proprietary. No free id (meta).
- **Release / knowledge:** September 19, 2025.
- **Context window:** **2,000,000 (2M); 30,000 max out.**
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$0.20 / $0.50 per 1M; cached input $0.05 (75% off)** — blended ~$0.23/M (AA).

### Raw benchmarks found

> Primary: AA's independent rows for the reasoning variant; Vals; AA's
> non-reasoning variant page (separate index, marked with its own variant).

Agentic / tool use:

- **τ²-bench: 65.8** (AA) — weak-mid multi-turn tool reliability (Grok 4 proper: 74.9; 2026 flagships: 86–97). No TB/OSWorld/GDPval/BrowseComp row.

Coding:

- **Vibe Code Bench: 0.00** (Vals) — floor result, and the only coding row anywhere for this model; no SWE-bench/LiveCodeBench/Coding-Index/Terminal-Bench figure exists.

Reasoning & knowledge:

- **AA-GPQA Diamond: 84.7** — mid, well under the 90 reference. **AA-HLE: 19.1** — far under 40.
- **AA Intelligence Index: 17.9** (reasoning variant) / **11\* estimated** (non-reasoning variant) — mid band at best.
- AA-Omniscience: **Index −29.9** (accuracy 22.8, hallucination 68.3) — deeply negative knowledge reliability. CritPt 2.9; AA-IFBench 50.5.

Multimodal / long context:

- **AA-MMMU-Pro: 61.8** — lower-mid image band.
- **AA-LCR: 73.7** — genuinely decent long-context retrieval for a budget model (Grok 4: 68.0).

### Normalized scores (1–100)

- **Tool use: 71/100.** τ² 65.8 is the only tool row and it is weak-mid; no terminal/OSWorld/GDPval-class evidence at all.
- **Reasoning: 73/100.** GPQA 84.7 is respectable for a budget tier but nowhere near reference; HLE 19.1, index 17.9/11\*, CritPt 2.9 and an Omniscience index of −29.9 make this a clearly sub-frontier reasoning profile.
- **Context window: 94/100.** A true 2M window with LCR 73.7 measured — the strongest dimension by evidence, and the model's whole reason to exist.
- **Multimodal: 63/100.** Text+image with MMMU-Pro 61.8 — bottom half of the image band, no video/audio/PDF.
- **Coding: 61/100.** One row, Vibe 0.00 — floor. Nothing contradicts it because nothing else exists; scored at the low end on absence of any positive coding evidence.
- **Cost efficiency: 95/100** (excluded from Overall). $0.20/$0.50 is far beyond the $0.60/$2.20 ≈ 92 anchor (roughly 1/15 of Grok 4 per meta), cache $0.05, 2M context included; only deprecation and single-provider availability keep it out of the high-90s.
- **Overall Score: 72/100.** (71+73+94+63+61)/5 = 72.4 → 72 — the Sep-2025 budget model does exactly what it was built for (cheap, fast, 2M-token document work), and the evidence says that is all: weak τ², sub-reference HLE, a negative Omniscience index, MMMU 61.8, and a single floor-level coding row.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — Artificial Analysis model pages (deprecation notice, release 2025-09-19, non-reasoning index 11\*, pricing/cache, 2M window; reasoning-variant benchmarks mirrored by BenchLM), BenchLM (12 rows with AA/Vals provenance, family composites, updated 2026-10-07), repo meta (dual-mode weights, 1/15 cost positioning, May-2026 deprecation). Scores are normalized 1–100 interpretations, not official vendor scores; variant pages (reasoning vs non-reasoning) labelled separately; this report scores the absolute evidence rather than the queue line (queue 78.5 → scored 72), with family ordering preserved against own Grok 4 (77) and Grok 4.20 (79) reports — BenchLM's family order (43.74 below Grok 4's 52.07) agrees.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
