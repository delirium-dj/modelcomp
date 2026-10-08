# GPT-5.6 Luna — findings by MiMo 2.6 Flash

- Source: OpenAI GPT-5.6 launch page + system card (via BenchLM provenance), Artificial Analysis, Vals AI, ARC Prize, Cursor/Cognition/VulcanBench/NeoCognition leaderboards, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna — OpenAI's **cost-sensitive, high-volume tier of the GPT-5.6 family** (siblings: Sol, Terra, Cyber), released **2026-07-09** (AA, Max effort). Deprecated on AA in favor of **GPT-6 Luna** but still served (7 providers; id `openai/gpt-5.6-luna`).
- **Short description:** The family's cheap workhorse: reasoning model benchmarked at **Max** effort by AA. AA verdict: "amongst the leading models in intelligence" for its price class (Index 37, #11/182 vs median 13), faster than average (117 t/s) — but **TTFT 137.4 s at Max** (extreme thinking latency) and somewhat verbose (150M tokens/task vs median 100M). BenchLM overall 65.98 (#30/887), clearly below siblings Sol (77.95) and Terra (72.36).
- **Provider / access:** OpenAI API (7 providers, AA). Proprietary. **No free Zen id** (meta).
- **Release / knowledge:** 2026-07-09; cutoff not stated on fetched pages.
- **Context window:** **1,050,000 / 128K out** (meta); AA: 1M class.
- **Modalities:** **text, image in; text out** (AA; MMMU-Pro rows confirm image input).
- **Pricing:** **$0.20 in / $1.20 out per 1M**, **90% cache discount** ($0.18 cache), blended $0.17/1M, **$0.18 per Intelligence-Index task** (AA #42/182 cost) — a fraction of flagship tariffs.

### Raw benchmarks found

> Primary: OpenAI GPT-5.6 launch/system-card rows as attributed by BenchLM's
> Luna page (updated 2026-10-07) + AA's independent Luna page + third-party leaderboards.
> Note: BenchLM logs an "AA Intelligence Index 51.2%" attributed to the OpenAI post —
> AA's own current Luna reading is **37**; version/attribution variance flagged.

Agentic / tool use:

- **Terminal-Bench 2.1: 84.7** (OpenAI; Vals 79.0) — just under the 85 reference. **BrowseComp: 83.3.**
- **GDPval-AA: Elo 1582 / 48.2%** — strong. AA Agentic Index 42.7; APEX-Agents-AA 35.8.
- Mid/weak: **OSWorld 2.0: 45.6**, Toolathlon 53.4, CyberGym 77.9, ExploitGym 12.4, Terminal-Bench 3.0 14.3 (frontier-new), ApprenticeBench 7.0 (NeoCognition GUI).

Coding:

- **AA Coding Index: 71.5** — clears the 70 reference. **DeepSWE: 67.2**, SWE-bench Pro 62.7, FrontierCode 1.1-Extended 55.1 (Cognition/Devin), CursorBench 3.2 61.1 (4.0: 35.9), **VulcanBench v3: 85.5**, SWE-bench (Vals) 93.0; **AA-SciCode 53.6** — just under the 55 reference.

Reasoning & knowledge:

- **GPQA Diamond: 92.3** (OpenAI), 91.1 (AA), 91.7 (Vals) — clears the 90 reference. **AA-HLE: 39.5** — misses 40 by half a point, flagged.
- **FrontierMath: 78.6 (Tiers 1–3), 58.5 (Tier 4)** — elite math. ARC-AGI-1 88.0 (Luna Max, ARC Prize), ARC-AGI-2 59.5.
- **AA Intelligence Index (v4.3.2): 37** — well above its price-class median (13), #11/182.
- AA-Omniscience Index **−10.3** (accuracy 42.7, hallucination 92.6 — actively unreliable knowledge, flagged); MMLU-Pro 86.0 (Vals); HealthBench Hard 32.0 / Professional 55.7.

Multimodal:

- **MMMU-Pro: 78.4 / 78.6 (AA) / 79.5 with Python** — top of the image band.

Long context:

- 1.05M window; **AA-LCR 83.7** — solid long-context reasoning; no retrieval row.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 84.7, BrowseComp 83.3, GDPval 1582 are strong agentic results, but OSWorld 2.0 45.6, Toolathlon 53.4, TB3 14.3 and ApprenticeBench 7.0 keep it out of the top tier.
- **Reasoning: 82/100.** GPQA 92.3 clears the reference and FrontierMath/ARC-AGI-1 are elite; HLE 39.5 narrowly misses, the composite index (37) is strong-for-price but not absolute-frontier, and Omniscience at −10.3 is the worst knowledge-reliability reading in this part of the queue.
- **Context window: 94/100.** 1.05M native with LCR 83.7 — 1M-class (floor 95) held one point under by no retrieval row.
- **Multimodal: 67/100.** Image input with MMMU-Pro 78.4–79.5 — solid top-of-image-band evidence, nothing beyond images.
- **Coding: 86/100.** Coding Index 71.5 clears the reference, DeepSWE 67.2 and Vals SWE 93.0 are strong, TB2.1 84.7 near-reference; SciCode 53.6 and CursorBench 4.0 35.9 are the dings.
- **Cost efficiency: 94/100** (excluded from Overall). $0.20/$1.20 with 90% cache and $0.18/AA-task is far below the $1.25/$4.25 ≈ 88 anchor — the family's headline value; discounted from 100 only by the 137 s Max-effort TTFT (latency is a real cost in production).
- **Overall Score: 82/100.** (83+82+94+67+86)/5 = 82.4 → 82 — GPT-5.6's bargain tier: reference-clearing GPQA, elite math, TB2.1 84.7 and a 1.05M window at $0.20/$1.20 — mid OSWorld/Toolathlon depth, a narrow HLE miss, and catastrophic Omniscience keep it below its Sol/Terra siblings.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — AA model page (Max-tier spec/index/speed/cost + independent GPQA/HLE/LCR/MMMU-Pro/agentic/Omniscience rows), BenchLM aggregate (OpenAI-launch and leaderboard rows with per-row provenance URLs, updated 2026-10-07), ARC Prize / Vals / Cursor / Cognition / VulcanBench / NeoCognition leaderboards as cited, repo meta (tier positioning, 1.05M/128K, pricing). Scores are normalized 1–100 interpretations, not official vendor scores; AA-index 51.2-vs-37 variance flagged; family ordering checked against own GPT-5.6 Sol/Terra reports.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
