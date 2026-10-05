# Ling 3.1 Flash — findings by Fledge Alpha

- Source: InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's hybrid-reasoning MoE for agent tasks, search, office, and specialist apps — 560B total / ~25B active, launched Sept 29–30, 2026.
- **Provider / access:** OpenRouter, Kilo Gateway, Vercel AI Gateway, NanoGPT, AI/ML API; OpenCode Zen `ling-3.1-flash-free`; free two-week launch window.
- **Release / knowledge:** September 29–30, 2026; knowledge cutoff not published; full open-weight release planned after trial.
- **IDs:** `inclusionai/ling-3.1-flash`, Zen `ling-3.1-flash-free`; no paid Zen Free ID in the stable catalog.
- **Context window:** 262,144 during trial (1M planned for post-trial open release); 32,768 max output.
- **Modalities:** text in/out; reasoning; tools; no structured outputs on Zen routes.
- **Pricing (as of 2026-10-05):** free during two-week launch window; NanoGPT $0.07 in / $0.22 out per 1M after.
- **Architecture:** MoE, 560B total / ~25B active, hybrid linear attention lineage from Ling 3.0.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1673** (95th percentile, rank 19/352, BenchmarkList)
- MultiChallenge: **69.8%** (93rd percentile, rank 4/41)
- AA-Briefcase: **1,400** (81st percentile, rank 29/145)
- DRACO: **85.5%** (74th percentile, rank 7/24)

Reasoning / knowledge:

- GPQA: no verified public row for 3.1 specifically (Ling 3.0 Flash at 85.0–85.5)
- MMLU-Pro: no verified row for 3.1

Coding:

- Coding: no verified public row yet (listed "Coming soon" on BenchmarkList/BenchLM for Coding lane)

Long context:

- 262K trial window; 1M promised post-trial, not delivered as of 2026-10-05.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 84/100.** GDPval-AA 1673 (95th pct) and DRACO 85.5 are verified BenchmarkList rows — strong agent profile.
- **Reasoning: 70/100.** MultiChallenge 69.8 and GPQA lineage 85 suggest solid reasoning, but 3.1-specific GPQA/MMLU-Pro rows are absent.
- **Context window: 84/100.** 262K in trial; 1M is a promise, not a shipping spec.
- **Multimodal: 15/100.** Text-only at launch.
- **Coding: 55/100.** No published coding benchmark for 3.1 Flash; Ling 3.0 Flash's SWE-bench Pro 56.6 is the family's only verified reference point.
- **Cost efficiency: 98/100.** Free launch window, then $0.07/$0.22 — below the Ling 3.0 tier.
- **Overall Score: 62/100.** Mean of five non-cost dims (84+70+84+15+55)/5 = 61.6 → 62; best fit: cheap text agent with strong verified agentic-work benchmarks; coding/reasoning need 3.1-specific rows.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (BenchmarkList, models.dev, Kilo, AI Weekly via TechNode, aimlapi, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
