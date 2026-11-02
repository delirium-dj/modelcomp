# Gemini 3.6 Flash — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** this report's entire framing rested on one evidence pillar — that 3.6 Flash is an *efficiency-only, not-smarter* patch because its **AA Intelligence Index is "identical to 3.5 Flash (50)."** On the current **v5.0** basket that pillar is **falsified**: 3.6 Flash's independent AA read is **34.0**, materially **below** Gemini 3.5 Flash's v5.0 **50.2**. The "50/50 parity" the draft cited was a July *v4.x* head-to-head and is **not convertible** to v5.0; measured like-for-like today, 3.6 Flash scores **lower**, not equal — the opposite of "not smarter, same intelligence." AA also now marks the model **deprecated (superseded by Gemini 3.7 Flash)** with its composite N/A, re-measures **Speed at 196.4 tok/s #14/195** (the ~276 figure was a launch/pre-launch number; unscored), and its **spec independently confirms text+image+speech+video** (matching the draft's omni claim). Independent cells also temper the vendor-heavy agentic/coding framing: **AA Agentic Index is only 30.1** (not the OSWorld-83 headline), **CritPt 10.6**, and **Terminal-Bench 2.1 (Vals) 73.8 lands below the vendor's 78.0** — so **Tool 89 → 87** and, with the intelligence-parity premise reversed (though cushioned by a genuinely strong **GPQA-Diamond 92.8 (AA) / 93.4 (Vals)** and **AA-HLE 40.8** that are *better* than the 38% the draft feared), **Reasoning 81 → 80**. The rest holds on independent confirmation: **AA-LCR 80.0** validates the long-context retrieval gain (**Context 88**), **Vals LiveCodeBench 88.1 / AA Coding Index 69.2** confirm solid coding (**Coding 85**), and **AA-MMMU-Pro 83.2 exactly corroborates the vendor MMMU-Pro** (**Multimodal 87**). One upside the draft undercounted: AA now lists **$0.75 / $3.75** (vs the $1.50/$7.50 the draft priced) — even cheaper, though Cost is excluded from the mean. **Overall 86 → 85.**

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July-2026 **efficiency** upgrade to Gemini 3.5 Flash — a post-training update on the *same base architecture*, not a new generation. Independent testing confirms it is **not smarter** (identical Artificial Analysis Intelligence Index) but is markedly faster and cheaper: it roughly halves task time (2.7→1.3 min), doubles output speed (~165→~276 tok/s), cuts output price ($9→$7.50), and improves coding/computer-use/long-context-retrieval execution while trimming wasted tokens and tool calls. Released alongside Gemini 3.5 Flash-Lite (smaller high-throughput) and Gemini 3.5 Flash Cyber (government/partner-restricted security model).
- **Provider / access:** Gemini API, Google AI Studio, Gemini app, Gemini Enterprise + Agent Platform (computer use shipped as a built-in client-side tool). Single stable ID, no preview/date suffix; served by multiple providers on OpenRouter.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not restated (inherits the Gemini 3.5 Flash lineage, ~January 2025).
- **IDs:** `google/gemini-3.6-flash` (**AA now marks it deprecated, superseded by Gemini 3.7 Flash**).
- **Context window:** 1,000,000 tokens input; 64,000-token max output (unchanged from 3.5 Flash).
- **Modalities:** text + image + video + audio + PDF in → text out (**AA spec independently confirms text+image+speech+video input, 2026-11-02**); reasoning yes (**default thinking level: medium**; `thinking_level` enum minimal/low/medium/high replaces the old numeric `thinking_budget`); tool calls yes (optimized tool-call reliability, fewer unnecessary calls/shorter agent loops).
- **Pricing (as of 2026-10-21):** $1.50 input / $7.50 output per 1M tokens (output cut 16.7% from 3.5 Flash's $9.00; input unchanged); cached input $0.15; batch ~$0.75 / $3.75. Average cost per task ~$0.50 (vs ~$0.59 for 3.5 Flash); output-heavy agent workloads ~20–30% cheaper.
- **Architecture:** Same base as Gemini 3.5 Flash with post-training optimizations for token efficiency, tool-call reliability and coding accuracy.

### Raw benchmarks found

Agent / tool use (Google vendor-reported unless noted):

- OSWorld-Verified (computer use): **83.0%** — +4.6 over 3.5 Flash (78.4%); computer use now a built-in client-side tool
- GDPval-AA v2 (Elo): **1421** — +72 over 3.5 Flash (1349); document parsing / chart analysis / report drafting (Hebbia, Harvey cited)
- Fewer reasoning steps and tool calls per multi-step workflow (shorter agent loops = lower spend)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index (independent): 50** — **identical to Gemini 3.5 Flash**; broad intelligence did not improve (efficiency upgrade, not capability upgrade). **[2026-11-02 correction: the current v5.0 read is 34.0 — below Gemini 3.5 Flash's v5.0 50.2; the "identical/50" figure was a July v4.x head-to-head and is not v5.0-convertible, so the parity premise is falsified.]**
- GPQA Diamond: **94.13%** (#12 of 463, DataLeader) — strong graduate-level science reasoning
- Humanity's Last Exam: **38%** (AA-measured) — a **~3-point regression** vs 3.5 Flash (~41%); knowledge breadth is the documented weak spot
- MMMU-Pro: **83.20%** (#18 of 229, DataLeader)

Coding (Google vendor-reported; vs 3.5 Flash):

- DeepSWE v1.1 (Datacurve): **49%** (+12 over 37%) — fewer bad edits/execution loops in multi-step repo work
- MLE-Bench: **63.9%** (+14.2 over 49.7%)
- SWE-Bench Pro: **58.7%** (+3.6 over 55.1%) — still trails Claude Opus 4.7 (64.3%) on from-scratch engineering
- Terminal-Bench 2.1: **78.0%** (+1.8 over 76.2%; matches GPT-5.5's 78.2%) — note OpenRouter separately lists 73.8%

Multimodal:

- Native text/image/video/audio/PDF (unchanged); GDPval-AA v2 multimodal knowledge work improved (+72 Elo)
- **Regression:** human evaluators preferred 3.5 Flash's front-end/UI visual output (layout/styling); 3.6 also over-explores before simple front-end edits (extra tokens/time)

Long context:

- GDM-MRCR v2 (128K avg): **91.8%** — large gain over 3.5 Flash (77.3%)
- GDM-MRCR v2 (1M): **54.0%** — doubles 3.5 Flash (26.6%), though both still struggle at the full 1M length

> Provenance: benchmark figures are **Google vendor-reported** (launch blog, via Emergent and MyClaw.ai) except the Artificial Analysis Intelligence Index (50), speed (~276 tok/s post-launch; ~304 pre-launch), TTFT (~12.3s), time/cost-per-task (1.3 min / ~$0.50, measured at *high* thinking) and the HLE regression (38%), which are **independent** AA measurements; GPQA/MMMU-Pro ranks are DataLeader. Google's "17% fewer output tokens" claim did **not** replicate consistently (EvoLink: +1.7% at medium, −6.4% at high). Note an AA discrepancy on the predecessor: 3.5 Flash was 55.3 (#7/147) in Appwrite's May write-up but 50 in the July head-to-head — AA re-measurement/config drift; the July figure (both = 50) is used here. Migration carries **breaking API changes**: `temperature`/`top_p`/`top_k` silently ignored, `thinking_budget`→`thinking_level`, response prefilling removed, `candidate_count` unsupported, `FunctionResponse` requires both `call_id` and `name`.

Independent (added 2026-11-02 — AA live per-eval page + BenchLM, Vals, ARC Prize, Epoch, LlamaIndex, Cursor cross-checks):

- **BenchLM overall: 62.41/100 (#44/1004, 29 of 724 benchmarks covered — partial/conservative).**
- **AA Intelligence Index v5.0 (independent): 34.0** — the draft's "50, identical to 3.5 Flash" was a July v4.x head-to-head; like-for-like v5.0 puts 3.6 Flash (34.0) **below** 3.5 Flash (50.2), reversing the "not smarter, same intelligence" thesis. AA composite now N/A (deprecated → Gemini 3.7 Flash).
- **AA Speed: 196.4 tok/s (#14/195)** — replaces the ~276 launch figure (unscored axis). **AA pricing: $0.75 / $3.75** (cache 80%) — below the draft's $1.50/$7.50; **AA spec confirms text+image+speech+video, 1M.**
- Reasoning/knowledge: **GPQA-Diamond 92.8 (AA) / 93.4 (Vals)** strong; **MMLU-Pro (Vals) 89.3**; **AA-HLE 40.8** (better than the 38% cited); **CritPt 10.6** (weak); **Epoch FrontierMath v2 T1-3 58.9 / T4 21.9** (mid); **ARC-AGI-1 91.17 / ARC-AGI-2 60.4 (ARC Prize, semi-private)**; **AA-Omniscience accuracy 50.0 / hallucination 55.6**.
- Agentic: **AA Agentic Index only 30.1** (tempering the vendor OSWorld-Verified 83 headline); **GDPval-AA 1423 vendor / 39.2% AA-normalized**; **Terminal-Bench 2.1 (Vals) 73.8** (below the vendor's 78.0); **MazeBench 0%**.
- Coding: **Vals LiveCodeBench 88.1**; **AA Coding Index 69.2**; **Vals SWE-bench 79.6**; **CursorBench 3.2 53.5**; **AA-SciCode 53.4**.
- Multimodal/docs: **AA-MMMU-Pro 83.2 (independent — exactly corroborates the vendor MMMU-Pro)**; **LlamaIndex ParseBench 69.38**.
- Long context: **AA-LCR 80.0 (independent, strong)** — validates the MRCR retrieval gain over 3.5 Flash.

### Normalized scores (1–100)

- **Tool use: 87/100.** (was 89, trimmed 2026-11-02) Vendor OSWorld-Verified 83.0, built-in computer use and +72 GDPval-AA Elo look strong on Google's numbers, but the independent **AA Agentic Index is only 30.1** and **Terminal-Bench 2.1 (Vals) 73.8 lands below the vendor's 78.0**, so the agentic edge is real-but-mid rather than top-of-table; the draft's own cap ("independent Index unchanged") is now worse — 3.6 Flash's v5.0 Index is *lower*, not equal.
- **Reasoning: 80/100.** (was 81, trimmed 2026-11-02) The draft scored this as "no intelligence gain — identical Index 50"; the current v5.0 read is **34.0, below 3.5 Flash's 50.2**, so the parity premise is falsified. Cushioned (and kept from a deeper trim) by genuinely strong **GPQA-Diamond 92.8 (AA) / 93.4 (Vals)**, **MMLU-Pro 89.3 (Vals)** and **AA-HLE 40.8** (better than the 38% feared), against weak **CritPt 10.6**, **Epoch FrontierMath v2 T1-3 58.9** and a **55.6% Omniscience hallucination**.
- **Context window: 88/100.** (hold — independent confirms) The same 1M-token window (64K output) with materially better retrieval — GDM-MRCR v2 91.8% at 128K / 54.0% at 1M — now independently corroborated by a strong **AA-LCR 80.0**; discounted only because full-length 1M retrieval is still weak in absolute terms.
- **Multimodal: 87/100.** (hold — independent confirms) Broad input set (**AA spec independently confirms text+image+speech+video**) with **AA-MMMU-Pro 83.2 exactly corroborating the vendor MMMU-Pro** and mid **LlamaIndex ParseBench 69.38**; still held below 3.5 Flash by the documented **front-end/UI visual-generation regression**.
- **Coding: 85/100.** (hold) Vendor DeepSWE +12 / MLE-Bench +14.2 / SWE-Bench Pro 58.7% are tempered by independent reads that are solid-mid — **Vals LiveCodeBench 88.1** is strong but **Terminal-Bench 2.1 (Vals) 73.8 sits below the vendor 78.0**, **AA Coding Index 69.2**, **CursorBench 3.2 53.5** — and it still trails Claude Opus 4.7 on the hardest from-scratch SWE work.
- **Cost efficiency: 85/100.** (hold — price actually lower) $1.50/$7.50 per the draft; **AA now lists an even cheaper $0.75/$3.75** (cache 80%), ~$0.50/task and half the task time keep this the headline value. Scored but **not** counted in the Overall.
- **Overall Score: 85/100.** (was 86, trimmed 2026-11-02) Mean of Tool 87 + Reasoning 80 + Context 88 + Multimodal 87 + Coding 85 = 85.4 → 85. Best fit: latency- and cost-sensitive production agents — multi-step tool-calling, computer-use automation, repository coding and 128K-scale document retrieval where ~2x speed and a now-**$0.75/$3.75** price compound; but the draft's "not smarter, identical intelligence" framing is **reversed** by the v5.0 data (34.0 vs 3.5 Flash's 50.2), so knowledge-heavy Q&A and front-end/UI generation favor 3.5 Flash, migration requires handling the breaking API changes, and **AA marks both deprecated (→ Gemini 3.7 Flash)**.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21; re-researched 2026-11-02.
- Method (2026-11-02 refresh): original draft's Google launch-blog table (via Emergent/MyClaw), DataLeader ranks and pricing preserved; independent sources added from **Artificial Analysis** (`gemini-3-6-flash` high page: now **deprecated → Gemini 3.7 Flash**, v5.0 Index **34.0**, Speed **196.4** #14/195, pricing $0.75/$3.75, spec text+image+speech+video, per-eval AA Agentic 30.1 / Coding 69.2 / MMMU-Pro 83.2 / LCR 80.0 / GPQA-D 92.8 / HLE 40.8 / CritPt 10.6 / Omniscience 50.0 acc / 55.6 halluc / GDPval-AA norm 39.2) and **BenchLM** (`gemini-3-6-flash` 62.41 #44/1004, 29/724), surfacing **Vals** (GPQA-D 93.4, MMLU-Pro 89.3, LCB 88.1, SWE-bench 79.6, TB2.1 73.8), **ARC Prize** (ARC-AGI-1 91.17, ARC-AGI-2 60.4), **Epoch** (FrontierMath v2 T1-3 58.9 / T4 21.9), **LlamaIndex** (ParseBench 69.38) and **Cursor** (CursorBench 3.2 53.5) cells.
- Conflict handling: vendor-vs-independent recorded, never averaged, independent governs — the draft's central "identical intelligence (Index 50)" pillar is **reversed** on v5.0 (34.0 < 3.5 Flash's 50.2) → **Reasoning 81→80**; **AA Agentic 30.1 + Vals TB 73.8 below vendor** → **Tool 89→87**; strong independent GPQA/HLE/LCR/MMMU-Pro **hold** Context/Multimodal/Coding; **Overall 86→85**.
- Guards: **vintage discipline** — the draft's "50/50 parity" is a **v4.x** head-to-head, not convertible to the current **v5.0** reads (3.6=34.0 vs 3.5=50.2); AA composite is now N/A (**deprecated → Gemini 3.7 Flash**) so Index/Speed/Cost are last-known per-eval cells; **Speed 276→196.4** (unscored); AA's **$0.75/$3.75** pricing differs from the draft's $1.50/$7.50 (recorded, Cost excluded from the mean); the HLE regression the draft cited (38%) is superseded by **AA-HLE 40.8**; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
