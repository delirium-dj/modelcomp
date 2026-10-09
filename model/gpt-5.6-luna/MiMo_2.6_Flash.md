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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# GPT-5.6 Luna — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.6-luna`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fastest/most-affordable GPT-5.6 tier (GA 2026-07-09; 80% price cut 2026-07-30) — nano-class volume model that still outperforms Claude Fable 5 on Agents' Last Exam at a fraction of cost, with full 1.05M context and multi-step tool use.
- **Provider / access:** OpenAI API `gpt-5.6-luna` (Chat Completions); ChatGPT Work / Codex (Plus, Pro, Business, Enterprise can choose Luna); **no OpenCode Zen Free ID** (`noFreeId: true`). Reasoning effort: none / low / medium (default) / high / xhigh / max.
- **Release / knowledge:** Preview 2026-06-26 (limited government-vetted partners); API GA 2026-07-09; price cut effective 2026-07-30. Knowledge cutoff **2026-02-16**.
- **IDs:** `gpt-5.6-luna` (alias snapshots available).
- **Context window:** **1,050,000** input; **128,000** max output. Prompts >272K input: 2× input / 1.5× output for the full request.
- **Modalities:** text/image in; text out; reasoning effort levels through max; tool calls yes; cache breakpoints (30-min min life); cache writes 1.25× input, cache reads 90% off.
- **Pricing (as of 2026-09-22):** **$0.20 in / $1.20 out per 1M** (after −80% cut from launch $1/$6); cached input **$0.02**. Free tier: none on API (subscription credit draw only).
- **Architecture:** proprietary; OpenAI positions Luna on the Intelligence-vs-Cost Pareto frontier ahead of Terra at every effort (AA).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). OpenAI GPT-5.6 launch/system-card tables + AA pre-release eval unless noted.

Agent / tool use:

- Agents' Last Exam: **50.3%** (OpenAI; beats Claude Fable 5 40.5, Opus 4.8 45.2, GPT-5.5 46.9 — family claim: ~99% lower est. cost/task vs Fable 5)
- GDPval-AA v2: **1591.8 Elo** (OpenAI; trails Fable 5 1759.6, Opus 4.8 1600.1; beats GPT-5.5 1493.7)
- Toolathlon: **53.4%** (OpenAI; trails Fable 61.7, Opus 59.9, GPT-5.5 55.6)
- AutomationBench: **14.9%** (OpenAI; beats GPT-5.5 12.9, trails Fable 17.4)
- OSWorld 2.0: **45.6%** (OpenAI; trails Fable 54.8, GPT-5.5 47.5)
- BrowseComp: **87.5%** (OpenAI; trails Fable 84.4? wait — beats Fable 84.4, trails Sol 90.4 / Mythos Preview 88)
- Management Consulting Tasks (internal): **35.4%** (OpenAI; beats Fable 35.5 roughly tie, Opus 31.6)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI system card via benchr; Requesty-style panels may differ slightly)
- FrontierMath Tier 1–3 (v2): **78.6%**; Tier 4: **58.5%** (OpenAI)
- Artificial Analysis Intelligence Index v4.1: **51.2** (OpenAI table) — AA pre-release run: **51** (max); ~80% lower cost/task than Sol ($0.21/index task)
- HealthBench Professional: **55.7%**; LifeSciBench: **51.2%**; GeneBench Pro: **10.8%** (OpenAI — science weaker than flagship)
- ARC-AGI-2 / HLE: no verified public score found for Luna specifically in this pass

Coding:

- Artificial Analysis Coding Agent Index v1.1: **74.6** (OpenAI/AA; **beats Opus 4.8 72.5**, trails Fable 5 77.2, Terra 77.4, Sol 80)
- SWE-bench Verified: **79.8%** (OpenAI system card via benchr)
- SWE-bench Pro: **62.7%** (OpenAI; trails Opus 4.8 69.2, Fable 80)
- DeepSWE v1.1: **67.2%** (OpenAI; trails Fable 69.7, Sol 72.7; beats GPT-5.5 67)
- Terminal-Bench 2.1: **84.7%** (OpenAI launch table; benchr chart shows **82.5%** from preview card — both cited; prefer launch-table 84.7 with note) — beats Opus 4.8 78.9, trails GPT-5.5 85.6 slightly on preview chart
- KernelGen 1P: **22.4%**; NanoGPT: **1.66%** (OpenAI — weak on hardest systems-kernel rows)

Long context:

- MRCR v2 8-needle 256K–512K: **41.3%** (OpenAI — poor mid-long retrieval)
- MRCR v2 8-needle 512K–1M: **41.3%** (OpenAI)
- GraphWalks BFS 256K F1: **81.3%**; 1M F1: **51.2%** (OpenAI)

Multimodal:

- text/image in (vision accepted); no audio/video listed in API modalities for Luna in sources reviewed
- MMMU / CharXiv: no verified public score found for Luna in this pass

### Normalized scores (1–100)

- **Tool use: 82/100.** ALE 50.3 beats Fable 5, GDPval 1592 solid, BrowseComp 87.5 strong; Toolathlon 53.4 and OSWorld 45.6 trail Fable/Opus — excellent for a nano-tier, not frontier absolute.
- **Reasoning: 84/100.** GPQA 92.3, FrontierMath T1–3 78.6, AA Index 51.2 — near-frontier science/math at nano cost; GeneBench 10.8 and Tier-4 58.5 show hard-domain falloff; Index still below Fable 59.9/Sol 58.9.
- **Context window: 62/100.** Sticker 1.05M/128K is huge, but measured MRCR is only **41.3%** in both 256–512K and 512K–1M bands and GraphWalks drops 81→51 at 1M — practical reliable window is well under 256K despite the million-token billable size.
- **Multimodal: 78/100.** Text+image in with vision-capable agent stacks (BrowseComp, OSWorld use images); no audio/video — upper-mid multimodal, not omni.
- **Coding: 86/100.** Coding Agent Index 74.6 beats Opus 4.8, SWE-Verified 79.8, DeepSWE 67.2, TB2.1 ~84.7 — elite coding for the price tier; still trails Fable/Sol/Terra on SWE-Pro and hardest kernel benches.
- **Cost efficiency: 96/100.** $0.20/$1.20 with $0.02 cache after an 80% cut, AA cost/task ~$0.21 on Index — among the best intelligence-per-dollar rates in the field; not free (no Zen ID), and >272K prompts hit 2× input surcharge.
- **Overall Score: 78/100.** Mean of five quality dims (82+84+62+78+86)/5 = 78.4 → 78. Best-fit: high-volume agentic coding and professional workflows where Fable-class ALE/Code-Index performance at ~cents-on-the-dollar matters more than deep 1M needle retrieval or audio input.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (OpenAI GPT-5.6 launch + price-cut posts, OpenAI API models docs, AA GPT-5.6 article, benchr launch/system-card coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

