# Ling 3.1 Flash — findings by Qwen 3.8 Max

- Source: InclusionAI / Ant Group (`ling-3.1-flash`; id `inclusionai/ling-3.1-flash`; AA `ling-3-1-flash`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** InclusionAI's (Ant Group's open-research arm) October-2026 open-weight **native hybrid-reasoning MoE — 560B total / 25B active, MIT**, built for tool-using agents. Its standout is **speed: AA measures 215.7 tok/s, #3 of 78 (4/4 units)** — one of the fastest models tracked — at a competitive **$0.30/$0.90** (blended $0.19; OpenRouter discount $0.075/$0.225) or **$0 self-host**. Vendor agentic numbers are strong (Terminal-Bench **2.1** 81.2%, CyberGym 87.9%, GDPval-AA 1618), and AA's independent v5.0 components show **large gains over Ling 3.0 Flash** (Terminal-Bench **4.0** 33% vs 0%, AutomationBench-AA 62% vs 3%). Caveats: the meta's **"AA Intelligence Index 41" is a pre-v5.0 (v4.3) value — the current v5.0 Index is N/A** (baskets are not convertible); the harder TB **4.0** is only 33%; **no SWE-bench Verified / LiveCodeBench** is published; hallucination is high (37.9%); and the context is **advertised as 1M but served at 262K**. Best-fit: a very fast, cheap, MIT self-hostable agent model — validate the hard-benchmark and context claims yourself.

## Model card

- **Name:** Ling 3.1 Flash (vendor "Ling-3.1-flash"; AA renders "Ling 3.1 Flash")
- **Short description:** InclusionAI's open-weight 560B/25B-active hybrid-linear MoE and native hybrid-reasoning model for complex, real-world agentic tasks; the successor to Ling 3.0 Flash. Text-only. A distinct artifact — not `ling-3.0-flash`, `ling-2.6-flash`, `ling-2.6.1t`, or `ling-3.0-tiny`.
- **Provider / access:** HuggingFace `inclusionAI/Ling-3.1-flash` (MIT weights, self-host $0); InclusionAI first-party API; OpenRouter `inclusionai/ling-3.1-flash`; **2 API providers** per AA. A free Zen trial (`opencode/ling-3.1-flash-free`) ran through **2026-10-13** and has ended; no paid `opencode/` id (`noFreeId`).
- **Release / knowledge:** Released **2026-10-01** (AA FAQ); announced as a free trial in Sept 2026, free through Oct 13. Knowledge cutoff not independently confirmed.
- **IDs:** `inclusionai/ling-3.1-flash` (free trial id `opencode/ling-3.1-flash-free` now expired)
- **Context window:** **Advertised 1M** (AA spec table + FAQ and the model card all say 1.0M) **but served at 262,144** (config and endpoints per meta) — a material discrepancy; the practical window today is ~262K.
- **Modalities:** Text in → text out. **TEXT-ONLY** (AA FAQ: "does not support image input… not multimodal"). **Reasoning** — native hybrid reasoning (fast/slow), AA-confirmed extended thinking / chain-of-thought.
- **Pricing (as of 2026-10-30):** InclusionAI API **$0.30 / $0.90** per 1M in/out (AA: "moderately priced" in / "very competitive" out vs $0.50 / $2.10 medians), **80% cache discount**, blended **$0.19**. OpenRouter running a 75% discount at **$0.075 / $0.225** ($0.015 cached). Self-host **$0** (MIT).
- **Architecture:** Open-weight **hybrid-linear MoE**, **560B total / 25B active**, **MIT license** (commercial use allowed). Exceptionally fast decode: **215.7 tok/s (#3/78)**; TTFT 1.90s.

### Raw benchmarks found

> The AA model page shows **Intelligence Index N/A, Verbosity N/A** but *does* independently measure **Speed (#3/78)** and **Cost**. The meta's "AA Intelligence Index 41" is a **v4.3 (pre-v5.0)** score — see flags. AA separately published v5.0-basket **component** scores for this model (Terminal-Bench 4.0, AutomationBench-AA). Vendor numbers are from InclusionAI / ModelScope.

Agent / tool use:

- Terminal-Bench **4.0**: **33%** (**AA-measured v5.0 component**, per AA's own release note) — up from 0% for Ling 3.0 Flash; modest in absolute terms on the hard v5.0 benchmark.
- AutomationBench-AA: **62%** (**AA-measured v5.0 component**) — up from 3% for Ling 3.0 Flash; solid agentic SaaS-workflow score.
- Terminal-Bench **2.1**: **81.2%** (vendor / meta) — the **older, easier** TB version; not comparable to TB 4.0 and not part of the v5.0 basket.
- CyberGym: **87.9%** (vendor) — strong agentic cybersecurity. GDPval-AA V2.1: **1618** (vendor Elo) — office/real-world work tasks.

Reasoning / knowledge:

- AA Intelligence Index: **N/A on v5.0** (page). Historical **v4.3 Index = 41** (mid-tier on the old basket; non-convertible to v5.0).
- Native hybrid reasoning (AA-confirmed). AA notes "large gains in intelligence over its predecessor."
- Hallucination rate: **37.9%** (vendor / meta) — high; a notable faithfulness weakness.

Coding:

- **No SWE-bench Verified or LiveCodeBench figure is published** (meta tradeoff). Vendor cites strong **FrontierSWE** (agentic SWE) but no number surfaced in this research; CyberGym 87.9% and AA Terminal-Bench 4.0 33% are the closest code-adjacent signals.

Long context:

- Advertised **1M** (AA spec + FAQ) via hybrid-linear attention, but **served at 262,144** (config/endpoints). No independent MRCR/RULER retrieval score found.

Speed / cost (AA-measured, independent):

- Output speed **215.7 tok/s**, **#3/78** (4 of 4 units; "notably fast" vs the 74 median) — a top-3 speed of all AA-tracked models.
- TTFT **1.90s** (somewhat above the 1.66s median). Cost $0.30 / $0.90, 80% cache discount, blended $0.19.

> **Meta-verification:** `meta.json` is mostly accurate — id ✓, 560B/25B ✓, MIT ✓, 262,144 served vs 1M advertised ✓ (meta itself flags this), Terminal-Bench 2.1 81.2% ✓ (vendor), CyberGym 87.9% ✓, GDPval-AA 1618 ✓, hallucination 37.9% ✓, $0.075/$0.225 OpenRouter discount ✓, self-host $0 ✓, free trial ended 2026-10-13 ✓, `noFreeId` ✓, "no SWE-bench Verified or LiveCodeBench published" ✓. **Corrections / flags:** (1) **"AA Intelligence Index 41" is a v4.3 (pre-v5.0) value** — the current AA v5.0 page shows Index **N/A**; baskets are not convertible, so 41 must not be presented as a v5.0 Index; (2) the vendor **Terminal-Bench 2.1 81.2%** is the **older** TB version — AA's v5.0-basket **Terminal-Bench 4.0 is 33%**, far lower; do not conflate them; (3) **context is advertised 1M but served 262K**; (4) hallucination 37.9% is high; (5) creator InclusionAI is Ant Group's open-research arm (some coverage attributes it directly to "Ant Group").

### Normalized scores (1–100)

- **Tool use: 78/100.** Genuinely agent-oriented with strong vendor numbers (CyberGym 87.9%, TB 2.1 81.2%, GDPval-AA 1618) and real **AA-independent v5.0 components** (AutomationBench-AA 62%, a large gain over Ling 3.0 Flash's 3%), but AA's harder **Terminal-Bench 4.0 is only 33%** — solid agentic, not elite on the toughest benchmark.
- **Reasoning: 76/100.** Native **hybrid reasoning** model with AA-noted "large gains" over its predecessor, but the **current v5.0 Index is N/A** (the 41 is pre-v5.0 v4.3, mid-tier) and the **hallucination rate is high (37.9%)** — capable but unproven on the current independent Index.
- **Context window: 80/100.** **Advertised 1M** (AA spec + FAQ + card) via hybrid-linear attention, but **served at 262,144** per the config/endpoints — scored between the 262K reality and the 1M claim, weighted toward what is actually served, with no independent retrieval benchmark.
- **Multimodal: 50/100.** Text-only — AA FAQ confirms no image input. Text-only floor.
- **Coding: 72/100.** **No SWE-bench Verified / LiveCodeBench published**; the coding signal is indirect — CyberGym 87.9% (cybersecurity), vendor FrontierSWE (unquantified here), and AA Terminal-Bench 4.0 33% (modest) — thin on conventional coding benchmarks.
- **Cost efficiency: 93/100.** Outstanding — **MIT** self-host **$0**, competitive hosted ($0.30/$0.90, blended $0.19; OpenRouter $0.075/$0.225), and **#3/78 speed (215.7 tok/s)** maximizes throughput-per-dollar. Not counted in Overall.
- **Overall Score: 71/100.** Mean of the five quality dims (78+76+80+50+72)/5 = 71.2 → 71. Divergence **+2.9** vs curated 68.1. The 560B scale, native hybrid reasoning, real AA-measured agentic gains, and 1M-advertised context lift it, but the text-only floor (50), modest hard-benchmark numbers (TB 4.0 33%), absent conventional coding benchmarks, high hallucination, and the 262K-served context hold it to a strong-value tier. Best-fit: a very fast, cheap, MIT self-hostable agent model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `ling-3-1-flash` page incl. FAQ + AA release note on Terminal-Bench 4.0 / AutomationBench-AA, InclusionAI / ModelScope `Ling-3.1-flash` card, OpenRouter, r/LocalLLaMA, WISE AI on the v4.3 Index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
