# Grok 4.3 — findings by MiMo 2.6 Flash

- Source: Artificial Analysis (Grok 4.3 High page), BenchLM, Vals AI, OpenRouter, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 — xAI's **April 2026** enterprise reasoning flagship (AA release date 2026-04-30), **1M context**, with aggressive sub-200K pricing (meta). Now deprecated on AA in favor of Grok 4.6, but still benchmarked and served (OpenRouter `x-ai/grok-4.3`, 1M, $1.25/$2.50).
- **Short description:** Reasoning model aimed at enterprise deployments — meta positions it on "elite support-agent tool use and science reasoning." AA's current verdict: *below average intelligence, very well priced, notably fast* (139 t/s) but somewhat verbose (87M tokens/task vs median 81M).
- **Provider / access:** xAI API (3 providers per AA), OpenRouter. Proprietary, reasoning tier ("High" effort benchmarked).
- **Release / knowledge:** 2026-04-30 (AA); cutoff not stated on fetched pages.
- **Context window:** **1,000,000 total** (AA, OpenRouter, meta agree).
- **Modalities:** **text, image in; text out** (AA spec; MMMU-Pro row confirms image input).
- **Pricing:** **$1.25 in / $2.50 out per 1M under 200K prompt; $2.50 / $5.00 at ≥200K** (meta; OpenRouter shows the sub-200K tier $1.25/$2.50); **84% cache discount** (AA: cache $0.21-class, $0.21 per Intelligence-Index task — **#7/225 for cost**); blended $0.64/1M (AA).

### Raw benchmarks found

> Primary: AA model page (independent rows, high-effort tier) + BenchLM aggregate
> (Vals/OpenRouter/leaderboard rows, updated 2026-10-07). AA index currently **25** —
> BenchLM's 37.6 is an older re-base of the same index, flagged as version variance.

Agentic / tool use:

- **τ²-bench: 97.7** (AA) — elite, and the strongest row on the page; matches the meta's "support-agent" positioning (τ² is telecom-support shaped).
- Weak elsewhere: **GDPval-AA Elo 1018 / 29.2%**, APEX-Agents-AA 17.0, AA Agentic Index 17.2, Vals Terminal-Bench 2.1 **41.9**, Gert Labs 43.86, ResearchClawBench 12.4. A sharply specialized agent profile.

Coding:

- **AA Coding Index: 42.3** — far under the 70 reference. **AA-SciCode: 48.3** (under 55; plain SciCode 47.3).
- LiveCodeBench (Vals) 84.5; SWE-bench (Vals) 71.4. No official SWE-V / TB2.1 rows found.

Reasoning & knowledge:

- **AA-GPQA Diamond: 90.1** — just clears the 90 reference (Vals: 91.4). **AA-HLE: 37.2** (BenchLM/AA alt row 35) — under 40, flagged.
- **AA Intelligence Index (v4.3.2): 25**, #122/225 — **below the median (26)**; AA: "below average in intelligence."
- MMLU-Pro (Vals) 85.8; IFBench 81.3 (strong instruction following); CritPt 8.0 (weak physics); AA-Omniscience Index 18 (accuracy 34.6 — weak knowledge reliability).

Multimodal:

- **MMMU-Pro: 78.1** (AA) — top of the image band; Design Arena Website 1201 (OpenRouter).

Long context:

- 1M window; **AA-LCR: 64.3** — only modest long-context reasoning; no MRCR-style retrieval row.

### Normalized scores (1–100)

- **Tool use: 83/100.** τ²-bench 97.7 is a top-of-market result and directly validates the support-agent positioning, but every other agentic row is weak (AA Agentic 17.2, GDPval 1018, Vals TB2.1 41.9, APEX-Agents 17.0) — elite at one thing, mediocre at the rest.
- **Reasoning: 83/100.** GPQA 90.1/91.4 clears the reference and IFBench 81.3 is strong; HLE 37.2 misses 40, the AA Index of 25 is below median, and CritPt/Omniscience drag on science and knowledge reliability despite the meta's "science reasoning" claim.
- **Context window: 94/100.** 1M native qualifies for the ≥1M tier, held a point under the 95 floor by genuinely weak long-context quality evidence (LCR 64.3, no retrieval row).
- **Multimodal: 70/100.** Image input with MMMU-Pro 78.1 — top of the image band; nothing beyond images.
- **Coding: 75/100.** LCB 84.5 and Vals SWE 71.4 are respectable, but AA Coding Index 42.3 and SciCode 48.3 sit far below references — coding was never this generation's focus (4.5+ pivoted to Cursor-grade SWE).
- **Cost efficiency: 92/100** (excluded from Overall). Sub-200K $1.25/$2.50 beats the $1.25/$4.25 ≈ 88 anchor on output, 84% cache discount, #7/225 cost-per-task, 139 t/s serving; discounted for the 200K prompt-price doubling and 19.5 s TTFT at high effort.
- **Overall Score: 81/100.** (83+83+94+70+75)/5 = 81.0 → 81 — xAI's fast, cheap, 1M-context enterprise worker with one elite skill (τ² 97.7) and strong GPQA — held back by below-median composite intelligence, weak coding depth, and shallow long-context quality.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — AA model page (release/spec/speed/cost telemetry, index/GPQA/HLE/MMMU-Pro/LCR/τ² rows, deprecation notice), BenchLM aggregate (Vals/OpenRouter/leaderboard rows with per-row provenance, updated 2026-10-07), OpenRouter API (pricing/context cross-check), repo meta (positioning, tier pricing). Scores are normalized 1–100 interpretations, not official vendor scores; AA-index version variance between sources flagged.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
