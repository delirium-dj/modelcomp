# Solar Mini 4 — findings by GLM 5.3

- Source: Upstage (`solar-mini-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact enterprise model (35B MoE, just 3B active) that "runs agents at scale" — high-frequency, cost-sensitive text work with reasoning; sibling of the agentic Solar Pro 4.
- **Provider / access:** Upstage Console / Upstage API (1 provider on Artificial Analysis). Project meta lists Zen ID `opencode/solar-mini-4` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026-09-22 (Artificial Analysis); knowledge cutoff February 2026.
- **IDs:** `opencode/solar-mini-4` (project meta).
- **Context window:** 1M per Artificial Analysis (measured); ApX lists 524K and the project meta lists 65,536 (16,384 out) — the curated and aggregator figures conflict; scored at the conservative end of the verified range.
- **Modalities:** text in/out only; reasoning yes; tool calling per the product pitch (no verified tool benchmark); JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.10 in / $0.40 out per 1M on Upstage's API (Artificial Analysis; launch promo 70% off through Oct 10 — standard $0.20/$0.80 per project meta); blended $0.07; 78.7 tokens/s, TTFT 1.79s; very verbose (370M output tokens on the AA Index, ~3.7x median).
- **Architecture:** ~35B total / 3B active MoE (proprietary; params per AA/Upstage, active count per Upstage).

### Raw benchmarks found

> Coverage warning: the only public benchmark number is Artificial Analysis's composite Intelligence Index — the per-evaluation values (GPQA, HLE, SciCode, Terminal-Bench 4.0, GDPval-AA, etc.) are "Not publicly available" on AA, and no other aggregator (BenchLM 404) or the vendor publishes per-benchmark rows. This report is therefore evidence-thin; every dimension below is scored conservatively from the composite and product facts.

Agent / tool use:

- **no verified public score found** for any tool/agentic benchmark (GDPval / Tau / Terminal-Bench all absent); product pitch: "runs agents at scale" (Upstage homepage)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24** (AA model page — #36 of 182 in its price class, above the median 13; composite includes GPQA/HLE/SciCode/Terminal-Bench 4.0 components, values unpublished)

Coding:

- **no verified public score found** (SciCode and Terminal-Bench 4.0 are inside the AA Index but their values are not public)

Multimodal:

- **no verified public score found** — text-only model.

Long context:

- 1M window per Artificial Analysis (ApX 524K, project meta 65K — conflicting); no MRCR/RULER/LCR retrieval score published.

### Normalized scores (1–100)

- **Tool use: 45/100.** Zero verified agentic measurements; the "runs agents at scale" positioning and reasoning-mode baseline suggest entry-level tool competence only — scored provisionally at the mid-band floor.
- **Reasoning: 58/100.** AA Intelligence Index 24 sits in the 20–35 mid band (55–65 per methodology) and above the class median of 13; capped by zero published per-eval values and verbose thinking (3.7x median tokens).
- **Context window: 90/100.** Artificial Analysis measures 1M (top tier), but ApX (524K) and the project meta (65K) disagree — the conflict costs it the 95+ band; no retrieval-quality measurement exists.
- **Multimodal: 15/100.** Text-only input and output — text-only band.
- **Coding: 50/100.** No public coding benchmark beyond the unpublished SciCode/Terminal-Bench components of the AA Index — provisional mid-low score, unproven.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M blended $0.07 is near the top of the value band (even the standard $0.20/$0.80 is strong); verbosity inflates effective cost, TTFT is excellent at 1.79s.
- **Overall Score: 52/100.** (45 + 58 + 90 + 15 + 50) / 5 = 51.6 → 52. Best-fit recommendation: high-volume text agent loops (classification, routing, document Q&A) at mini pricing; wait for published per-benchmark numbers before trusting it with tool-heavy or coding work.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Artificial Analysis composite index, ApX specs, Upstage product pages, project pricing meta); scores are normalized 1–100 interpretations, not official vendor scores. Only one public benchmark value exists for this ID; all other dimensions are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
