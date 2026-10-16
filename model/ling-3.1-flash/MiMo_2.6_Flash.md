# Ling 3.1 Flash — findings by Mimo v2.6 Flash

- Source: Ant Group (InclusionAI)/`inclusionai/ling-3.1-flash`
- Date: 2026-10-16 (UTC) — second pass (first pass 2026-10-02; user-approved enrichment update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's (Ant Group) hybrid-reasoning MoE tuned for coding, multi-step analysis and tool-using agents — ~560B total / ~25B active, roughly 4.5x the scale of Ling 3.0 Flash. Not a variant or alias of another entry.
- **Provider / access:** InclusionAI (Ant Group) first-party API (AA benchmarked on it, 2 providers per AA); OpenRouter `inclusionai/ling-3.1-flash` (NovitaAI 75%-off promo route + DeepInfra 30%-off); Vercel AI Gateway (`inclusionai/ling-3.1-flash`, route served by Novita; promo `-free` route). OpenAI-compatible Chat Completions. Open weights on Hugging Face (AA links them).
- **Release / knowledge:** launched 2026-09-29/30 (launch material), **date conflict**: OpenRouter lists "Oct 2, 2026", Artificial Analysis "Released October 1, 2026"; knowledge cutoff not published. **Update: free promo through 2026-10-13 has ended — model is now a paid service** (see Pricing).
- **IDs:** `inclusionai/ling-3.1-flash` (all hosts); the `-free` promo route is no longer the headline tier.
- **Context window:** **Conflict updated:** Artificial Analysis reports a live **1M-token** context window on the InclusionAI API (spec + summary, obs. 2026-10-16), while OpenRouter and gateway listings still show **262,144** with 32,768 max output. AA-LCR (long-context recall) **83.0%** (AA) is the first measured retrieval number. Scored between the two (see normalized). Free-trial 256K cap (threatfrontier, first pass).
- **Modalities:** text in → text out; **AA re-confirmed text-only** ("does not support image input", obs. 2026-10-16); hybrid reasoning (switchable thinking/instant); tool calls; implicit caching.
- **Pricing (as of 2026-10-16):** **free promo ENDED (ran through 2026-10-13) — now paid.** List $0.30 in / $0.90 out per 1M (InclusionAI API via AA; 80% cache discount; $1.00 per Intelligence-Index task); OpenRouter current: NovitaAI promo 75% off → **$0.075/$0.225**, DeepInfra 30% off → $0.21/$0.63. Open weights MIT → self-host token cost $0.
- **Architecture:** ~560B total / ~25B active, MoE, hybrid reasoning. **Weights released on Hugging Face under MIT license** (AA, obs. 2026-10-16) — first-pass "not yet released" is stale; Ant's open-source-on-paid-service plan fulfilled.

### Raw benchmarks found

> First-pass rows below came from Ant's single launch comparison table (via
> threatfrontier 2026-09-30 / buildfastwithai 2026-10-01) — vendor-reported.
> **Second pass (2026-10-16): Artificial Analysis has now independently measured the model**
> (https://artificialanalysis.ai/models/ling-3-1-flash) plus OpenRouter's Exacto
> provider-run rows — those are marked NEW and update several conflicts.

Agent / tool use:

- MCP-Atlas: **83.00** (Ant launch table)
- BrowseComp: **91.67** (Ant launch table)
- AutomationBench: **52.5%** (InclusionAI launch material, via buildfastwithai)
- SkillsBench: **68.7%** (InclusionAI launch material, via buildfastwithai)
- Finance Agent v2: **57.9%** (InclusionAI launch material, via buildfastwithai)
- Terminal-Bench 2.1: **81.18%** (Ant launch table)
- Terminal-Bench 4.0: **40.40%** (Ant launch table)
- **NEW:** GDPval-AA (AA): **55.9** (AA-normalized, obs. 2026-10-16) — first independent agentic-work score
- **NEW:** TAU-Bench (OpenRouter Exacto, provider-run): **79.3%** (DeepInfra and NovitaAI both) — first Tau-family number, strong
- **NEW:** Terminal-Bench 4.0 (AA): **33.3%** vs vendor's 40.40% (Ant table) — independent run lower; conflict noted
- Tau3-Banking: no verified public score found; Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE: **37.44%** (Ant launch table; up from 22.7 on Ling 3.0 Flash)
- MultiChallenge: **69.78%** (Ant launch table)
- HealthBench Professional: **65.35%** (Ant launch table)
- WideSearch: **83.32%** (Ant launch table)
- **NEW:** HLE (AA): **39.4%** — independent corroboration of vendor 37.44% (obs. 2026-10-16)
- **NEW:** Artificial Analysis Intelligence Index: **41** (#6/120 open-weights class, median 19; Index run generated 220M output tokens — very verbose; $1.00/task)
- **NEW:** AA-LCR (long-context recall): **83.0%**; CritPt: **18.0%**; AA-Omniscience: accuracy **29.1%** / non-hallucination **62.1%** (all AA)
- **NEW:** GPQA Diamond (OpenRouter Exacto, provider-run): **94.8%** (DeepInfra) vs **81.3%** (NovitaAI) — wide provider spread, no official row
- BenchLM overall: no verified public score found (ModelCap's 59.8 remains modeled, not measured)

Coding:

- SWE-Pro / SWE-Bench Pro: **65.39%** (Ant launch table; up from 56.6 on Ling 3.0 Flash)
- DeepSWE: **59.70%** (Ant launch table)
- SWE Atlas Codebase QnA: **55.9%** (InclusionAI launch material, via buildfastwithai)
- CyberGym: **87.90%** (Ant launch table)
- LiveCodeBench / Vibe Code Bench: no verified public score found
- **NEW:** SciCode (AA): **54.1%** — just under the 55%+ frontier reference

Long context:

- **NEW:** AA-LCR **83.0%** (AA, obs. 2026-10-16) is the first measured long-context recall; no MRCR / RULER / GraphWalks at 512K+ published. Context conflict: AA 1M live vs OpenRouter 262K served.

### Normalized scores (1–100)

- **Tool use: 80/100.** (Was 78.) Vendor MCP-Atlas 83.00 / BrowseComp 91.67 / TB2.1 81.18 now backed by first independent rows: TAU-Bench 79.3% (provider-run, both hosts) and GDPval-AA 55.9 (AA-normalized); capped by AA's Terminal-Bench 4.0 at 33.3% (below the vendor's 40.40%), AutomationBench 52.5 / Finance Agent v2 57.9, and no Tau3-Banking row.
- **Reasoning: 75/100.** (Was 70.) Independent measurement landed exactly where the vendor table claimed: HLE 39.4% (AA) vs 37.44% (vendor), plus AA Intelligence Index **41** (#6/120 open-weights class, median 19) and AA-LCR 83.0%; capped below 80 by HLE still under the 40% frontier anchor, CritPt 18.0%, Omniscience 29.1/62.1, no official GPQA (provider spread 81.3–94.8%), and very high Index verbosity (220M tokens).
- **Context window: 90/100.** (Was 72.) AA reports a live **1M** window (≥1M tier 95–100) with AA-LCR 83.0% evidencing retrieval quality — but OpenRouter/gateways still serve **262K**, so scored between the defensible values (76 if 262K-only, 95 if 1M everywhere), held below band top for the conflict and absent MRCR/RULER-at-512K evidence.
- **Multimodal: 15/100.** Unchanged — AA re-confirmed text-only in/out ("does not support image input"); text-only floor.
- **Coding: 76/100.** (Was 78.) Vendor strengths hold (SWE-Pro 65.39, TB2.1 81.18, CyberGym 87.90) but independent rows ran below them: SciCode 54.1% (just under the 55% frontier reference) and TB4.0 33.3% vs vendor 40.40%; DeepSWE 59.70 still trails the 74%+ frontier. Net small deduction for corroboration running cool.
- **Cost efficiency: 92/100.** (Was 100 — free promo ended 2026-10-13.) Now paid: list $0.30/$0.90 beats the $0.60/$2.20 (~92) anchor; current Novita 75%-off promo ($0.075/$0.225) sits near the $0.10/$0.20 (~97) band; 80% cache discount; MIT self-host = $0 tokens. Held at 92: paid-only at list, promo-limited, and AA flags high verbosity ($1.00 per Index task). Not counted in Overall.
- **Overall Score: 67/100.** (Was 63 on 2026-10-02.) Mean of the five non-cost dims (80 + 75 + 90 + 15 + 76) / 5 = 67.2 → 67 — Tool +2 (first Tau/GDPval rows), Reasoning +5 (independent HLE/Index/LCR), Context +18 (AA 1M + LCR, conflict-capped), Coding −2 (independent rows below vendor). Best fit: fast, cheap-to-self-host (MIT) agentic/coding workhorse with independently verified flash-tier reasoning — solid for multi-step tool tasks; watch verbosity and the 1M-vs-262K serving gap.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research, second pass (first pass 2026-10-02) across official/vendor sources (InclusionAI launch material via threatfrontier/buildfastwithai) plus independent sources (Artificial Analysis model page https://artificialanalysis.ai/models/ling-3-1-flash — Index 41, HLE 39.4, LCR 83.0, TB4.0 33.3, MIT weights, 1M context, pricing; OpenRouter listing + Exacto provider rows https://openrouter.ai/inclusionai/ling-3.1-flash — promo pricing, TAU-Bench 79.3, GPQA spread). Conflicts compared (TB4.0 vendor 40.40 vs AA 33.3; context AA 1M vs OpenRouter 262K; GPQA 94.8 vs 81.3 provider spread; release Sep 29 vs Oct 1/2). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.