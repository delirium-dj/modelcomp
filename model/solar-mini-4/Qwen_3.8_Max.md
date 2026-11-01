# Solar Mini 4 — findings by Qwen 3.8 Max

- Source: Upstage (`upstage/solar-mini4`; AA `solar-mini4` / launch article `korean-ai-lab-upstage-releases-solar-mini-4`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **Solar Mini 4** is **Upstage's compact proprietary reasoning MoE** — **35B total / 3B active (as reported; size not independently verifiable, weights not released)**, **text-only**, **524K–1M context**, released **30 Sep 2026**. Unlike most small models in this tier, it carries a **genuinely rich Artificial Analysis record**, so its standing is well measured rather than vendor-asserted. The shape is clear: **relative strengths in long-context reasoning (AA-LCR v1.1 83%, matching MiniMax-M3 and GPT-6 Luna max)** and **size-efficiency** (Index **24**, a Pareto point under 3B-active, +6 over Qwen3.6-35B-A3B with identical active params), but **sharp weaknesses in agentic coding — Terminal-Bench 4.0 = 1%, AutomationBench-AA = 22%** — and in **factual knowledge (AA-Omniscience −11 on 18% accuracy, though it abstains on ~half and its 64% non-hallucination rate is *high*)**. Upstage's own tradeoff note is honest: *"a reasoning model, not an agent."* It is also **extremely verbose** (88k output tokens / Intelligence-Index task, 72k of them reasoning), so despite **208 tok/s raw output** it averages **7.1 min/task** and costs **~5× GPT-6 Luna per task**. Net: a **knowledge-dense, long-context, weak-agentic small flagship** — real, distinct, and independently measured, landing **basically at the curated line**.

## Model card

- **Name:** Solar Mini 4 (Upstage; AA `solar-mini4`)
- **Short description:** Upstage's compact proprietary reasoning MoE (35B-A3B) — strong long-context recall for its size, weak agentic coding; the cheapest Upstage endpoint but very token-hungry per task.
- **Provider-access:** Upstage Console (`console.upstage.ai`) + OpenRouter (`upstage/solar-mini4`); OpenAI-compatible API; function calling + JSON mode. **Proprietary — no weights, no self-host.**
- **Release-knowledge:** Released **30 Sep 2026**; **knowledge cutoff February 2026** (AA).
- **IDs:** `upstage/solar-mini4` · AA `solar-mini4`.
- **Context window:** **524,288 served** (Upstage/OpenRouter/llm-stats/AA provider table) — AA launch article lists the **nominal ceiling as 1M**; **max output 262K**. *(Meta's "524,288 … AA states 1M" discrepancy preserved: 524K is the concrete served figure; 1M is the article's spec line.)*
- **Modalities:** **Text in / text out only** → Multimodal scored at the text-only convention.
- **Pricing:** List **$0.10 in / $0.40 out / $0.01 cached** per 1M; **promo $0.05/$0.20 through 23 Oct 2026**; **blended $0.07** (cheapest Upstage model).
- **Architecture:** MoE, **35B total / 3B active (reported by Upstage, proprietary — size unverifiable)**; reasoning model (extended thinking).

### Raw benchmarks found

> Provenance: **mostly independent (Artificial Analysis launch measurement)** — the eval components below are AA-run, not vendor self-report. Caveat on the headline index: the model shipped **30 Sep 2026, before AA's Intelligence Index v5.0 launched 27 Oct 2026**, so the widely-cited **"24"** is a **launch-era (pre-v5.0) value, non-convertible to the v5.0 basket**; the AA provider table now shows **"--" (no v5.0 Intelligence data)** for all three Upstage models. The **component scores** (AA-LCR v1.1, Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA, AA-Briefcase, AA-Omniscience v1.1, SciCode) are nonetheless **real independent measurements** and are credited.

**Reasoning / knowledge (AA, independent):**
- **AA Intelligence Index ≈ 24** at launch — a **new Pareto point for <3B-active models**; **+6 vs Qwen3.6-35B-A3B (Reasoning, same 3B active, 18)**; +1 vs Nemotron 3 Ultra (55B active); +16 vs Upstage's own Solar Pro 3 (8). *(Pre-v5.0 caveat above.)*
- **AA-LCR v1.1 (long-context reasoning) 83%** — **relative strength**, ties MiniMax-M3 / GPT-6 Luna (max), ahead of Gemini 3.8 Flash (high) / GPT-6 Astra (max) at 81%.
- **SciCode 48%** — ahead of MiniMax-M3 / Inkling (xhigh) at 47%.
- **AA-Omniscience −11** (18% accuracy, abstains on ~half) — low knowledge recall, **but non-hallucination rate 64%** is *high* (vs Inkling xhigh 32%, GPT-6 Luna max 23%). The negative index reflects *refusal/low coverage*, not fabricated answers.

**Coding / agentic (AA, independent — weak):**
- **Terminal-Bench 4.0 = 1%** — near-total failure on agentic terminal coding; the decisive weakness.
- **AutomationBench-AA = 22%** — agentic SaaS workflows, weak.
- **GDPval-AA = 1072 Elo**, **AA-Briefcase = 872 Elo** (agentic knowledge work) — mid, close to Inkling (xhigh).
- No vendor **GPQA / AIME / LiveCodeBench** published (Upstage tradeoff note).

**Vision / multimodal:** none — text-only.

**Long context:** AA-LCR 83% above is the long-context evidence (independent); served ceiling 524K (nominal 1M).

**Speed / cost (NOT scored dimensions):** raw output **208 tok/s** at launch (AA provider median 115–118; > GPT-6 Luna's 152); **but verbosity 88k output tokens/task (72k reasoning)** → **7.1 min/task** and **$0.36/task ≈ 5× GPT-6 Luna's $0.07** (cache-hit only 48% vs Luna's 99%). Time-to-first-answer **18.82s** (reasoning-heavy). Cheapest Upstage blended price ($0.07).

**Meta-verification:** curated meta **broadly accurate** — Index 24, AA-LCR 83.3%, ~$0.05/$0.20 promo, TB 4.0 1%, no GPQA/AIME/LCB, proprietary no-weights, text-only, "reasoning not agent" — all confirmed against AA. Refine one point: **121 tok/s (meta) vs 208 tok/s (AA launch) vs 115–118 (AA provider median)** — the raw-speed figure is volatile; speed is not scored regardless. Context "524K (AA states 1M)" discrepancy preserved.

### Normalized scores (1–100)

- **Tool use: 52/100.**
- **Reasoning: 66/100.**
- **Context window: 70/100.**
- **Multimodal: 50/100.**
- **Coding: 56/100.**
- **Cost efficiency: 72/100.**
- **Overall Score: 59/100.**

> Overall = half-up mean of the five non-cost dimensions (52 + 66 + 70 + 50 + 56) / 5 = 294 / 5 = **58.8 → 59**. Curated average is **58.3** → my divergence **+0.7** (independent AA data pins it near the line: long-context/reasoning strength lifted, agentic-coding 1% and low knowledge accuracy held down).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis launch article `korean-ai-lab-upstage-releases-solar-mini-4` (30 Sep 2026)** — Index 24 + Pareto-under-3B-active, +6 vs Qwen3.6-35B-A3B / +1 vs Nemotron-3-Ultra / +16 vs Solar Pro 3; AA-LCR v1.1 83%, SciCode 48%, Terminal-Bench 4.0 1%, AutomationBench-AA 22%, GDPval-AA 1072 Elo, AA-Briefcase 872 Elo, AA-Omniscience −11 / 18% acc / 64% non-halluc; 208 tok/s, 88k tokens/task (72k reasoning), 7.1 min/task, $0.36/task vs Luna $0.07, cache 48% vs 99%; 1M ctx / 262K max-out, Feb-2026 cutoff, proprietary no-weights, $0.10/$0.40/$0.01; **Artificial Analysis provider page `providers/upstage`** — 3 tracked models, Solar Mini 4 115–118 t/s, blended $0.07 (cheapest), 524k ctx, FC+JSON+reasoning, **v5.0 Intelligence = "--" (no data)**; **Upstage news / OpenRouter / llm-stats** — 524K, $0.10/$0.40, compact 35B-A3B MoE). AA component evals are **independent**; the composite "24" is **pre-v5.0**.
- Future sources: refresh when **AA publishes a v5.0 Intelligence Index value** for Solar Mini 4 (the current table is empty for it) and when Upstage discloses **standard reasoning/coding benchmarks** (GPQA / AIME / LiveCodeBench) it currently omits. **Guards applied:** (1) **Solar Mini 4 ≠ Solar Pro 4** (`solar-pro-4`, Index 42, 512K flagship, scored earlier) **≠ Solar Open 2** (`solar-open-2`, 250B open-weight, scored earlier) **≠ Solar Pro 3** (prev-gen, Index 8, 131K) — four distinct Upstage SKUs, no cross-crediting; (2) the **"24" is a launch-era / pre-v5.0 index, non-convertible** to the v5.0 basket — treated as directional, while the **AA component scores are credited as genuine independent measurements**; (3) **35B/3B-active is Upstage-reported and unverifiable** (proprietary, AA states this); (4) **AA-Omniscience −11 ≠ hallucination-prone** — 18% accuracy *with abstention* and a *high* 64% non-hallucination rate; (5) **Terminal-Bench 4.0 = 1%** is the agentic-coding anchor (this is a reasoning model, not an agent); (6) **context 524K served vs 1M nominal** discrepancy preserved; (7) **raw speed (208/118 tok/s) and per-task cost are NOT scored dimensions** — verbosity, not throughput, drives its 5× cost-per-task. **Cost efficiency (72) scored but excluded from Overall.**
