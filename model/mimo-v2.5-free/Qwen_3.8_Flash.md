# MiMo V2.5 Free — findings by Qwen 3.8 Flash

- Source: Xiaomi MiMo / MiMo-V2.5 Free on OpenCode Zen (`opencode/mimo-v2.5-free`)
- Date: 2026-10-02 (UTC); second pass 2026-11-04 (UTC) — **lifecycle: origin-and-platform-retired, legacy flag** (Xiaomi native API retired MiMo-V2.5 Oct 21, 2026; OpenCode Zen free tier removed ~Oct 11–17; usage zero by Oct 29); successor MiMo-V2.6-Flash Free live on Zen; no new independent benchmark data → **bands unchanged, Overall remains 74**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (capability model: Xiaomi MiMo-V2.5, April-2026 open-weights omni MoE)
- **Short description:** Xiaomi's ~310B-total/15B-active MIT-licensed omnimodal MoE (text/image/video/audio in) served as a $0 capped tier on OpenCode Zen — one generation behind the Sept-2026 V2.6 line, with strong SWE/Tau2 signals but weak research-grade agent and long-context retrieval depth.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions; limited-time $0, data may be used for training); paid native Xiaomi API; OpenRouter; HF `XiaomiMiMo/MiMo-V2.5` (weights 2026-04-28).
- **Release / knowledge:** 2026-04-22 announcement / 04-28 weights; knowledge cutoff not disclosed.
- **IDs:** `opencode/mimo-v2.5-free` (tier) — benchmark rows are for the underlying `xiaomi/mimo-v2.5` model.
- **Context window:** native **1,048,576** tokens (Gert Labs row confirms 1048576; curated meta "200K Zen cap / native 1M"); the scored Zen free route caps at **200K in / 32K out**.
- **Modalities:** text, image, audio, video in; text out; reasoning + tool calls. Matches curated meta.
- **Pricing (as of 2026-10-02):** $0 / $0 on the Zen free tier; native independently confirmed at **$0.105 in / $0.28 out** per 1M (benchmarklist pricing row). Free-tier consent caveat applies.
- **Architecture:** open-weights sparse MoE (~310B/~15B active), MIT; MTP; extended-reasoning training ("You Only RL Once" lineage).

### Raw benchmarks found

> Independently verified via benchmarklist `xiaomi-mimo-v2.5` (fetched 2026-10-02; harness/verified labels kept), corroborated by prior BenchLM rows (2026-09-28 audit) and the frozen `model-comparison.md` MiMo table. Vendor claims (Xiaomi 2026-04-22: "level with frontier closed-source", "≈half the inference cost") noted but not scored as evidence.

Agent / tool use:

- Terminal-Bench 2.1: **63.7%** (indep., 73rd pct); Terminal-Bench Hard: **41.7%** (91st pct of a small field)
- Tau2-Bench Telecom: **90.6%** (85th pct) — but Tau3-Banking: **8.7%** (41st pct) → huge domain spread
- GDPval-AA: **Elo 1,146** (79th pct, verified); Gert Labs GScore 47.5%; GeneBench-Pro **1.2%** (research-agent tasks nearly nil)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.6% / 84.9%** (two independent harnesses — source variance noted per methodology)
- MMLU-Pro **82.9%**; AA Intelligence Index **38** (83rd pct); no HLE / competition-math row found for this exact ID

Coding:

- SWE-bench Verified: **71.0%** (indep., 37th pct); SWE-bench Pro 56.1% (RankedAGI, prior audit); LiveCodeBench **81.5%**; SciCode **43.1%**; Vibe Code Bench v1.1 **42.2%**

Multimodal / long context:

- MMMU-Pro **80.0%**; Vals Multimodal Index 52.8 (29th pct — weak); Video-MME 87.7 w/ subtitles and CharXiv 81.0 (prior BenchLM audit)
- Context Arena (GDM-MRCRv2): avg **24.0%**, AUC@1M 14.3% — poor retrieval-at-length; AA-LCR **68.3** (75th pct); native 1M window.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 66/100.** TB 2.1 63.7% and GDPval Elo 1,146 are upper-mid, Tau2 Telecom 90.6% is near-frontier — but Tau3 Banking 8.7% and GeneBench-Pro 1.2% expose brittle cross-domain agentic generalization; mid-upper band.
- **Reasoning: 72/100.** GPQA 81.6–84.9% and MMLU-Pro 82.9% are solid upper-mid; Index 38 is mid; no HLE or AIME row for this ID, and the retrieval weakness (MRCR 24%) further caps composite reasoning depth.
- **Context window: 70/100.** The scored Zen tier caps at 200K (band floor = 70, same tier treatment as the frozen MiMo V2.5 Free row); the native 1M is undermined by measured retrieval depth (MRCRv2 AUC@1M 14.3%, AA-LCR 68.3), so no credit toward the ≥1M tier.
- **Multimodal: 88/100.** True text/image/video/audio-in puts it in the 90–100 band, with real evidence rows (MMMU-Pro 80.0, Video-MME 87.7, CharXiv 81.0); held 2 points under the floor by the weak Vals Multimodal Index (52.8) and zero published audio benchmarks; text-only output.
- **Coding: 74/100.** SWE-bench Verified 71.0% and LiveCodeBench 81.5% are strong-mid, but SciCode 43.1%, Vibe 42.2% and TB 2.1 63.7% keep it under the 80 frontier approach; one generation behind current leaders.
- **Cost efficiency: 100/100.** $0 Zen free tier is the rubric's free-model anchor; even the paid native ($0.105/$0.28) is top-decile cheap. Cost is excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 66, Reasoning 72, Context 70, Multimodal 88, Coding 74 = 370/5 = 74.0 → 74. Best fit: the cheapest way to run genuine omni-modal ingestion (video/audio/chart) plus competent repo coding at $0 — pair it with a stronger reasoner for banking/research agent loops and never trust it for >200K needle-retrieval work; the V2.6 line now dominates it on agentic coding for similar money.

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02). Lifecycle finding: both serving paths (native API and OpenCode Zen free tier) have been retired.

**Sources:** lifecycle — https://platform.xiaomimimo.com (“Xiaomi MiMo-V2.5-Pro and MiMo-V2.5 were retired on **Oct 21, 2026**, at 10:00 (UTC+8), and their model IDs no longer work. Please update your integrations to [V2.6].”) · https://mimo.mi.com/docs/en-US/updates/model (same retirement notice on official docs) · GitHub https://github.com/diegosouzapw/OmniRoute/issues/16328 (Oct 11, 2026: “Measured today: **5 of the 6 ids in our current OPENCODE\_FREE\_MODELS set are absent from the live list — deepseek-v4-flash-free, mimo-v2.5-free**”) · GitHub https://github.com/anomalyco/opencode/issues/56541 (“docs(www): remove retired Exo and MiMo V2.5 free models #55943: Exo and MiMo V2.5 free models were retired”) · https://opencode.ai/data/xiaomi/mimo-v2-5 (usage zeroed on Oct 29–30; last non-zero day Oct 28 at 60B tokens, down from 1.7T on Sep 10 — **−64%** over 2 months; paid-tier listing $0.40/$2.00 persists but is non-functional post-retirement) · successor — https://kingy.ai/blog/mimo-v2-6-pro-free-access-pricing-setup (Sept 2026: “OpenCode currently lists MiMo-V2.6-Flash Free in Zen as a limited-time free model”; codex-router changelog: “mimo-v2.6-flash-free is curatable on the anonymous OpenCode routes”) · benchmarks — https://benchlm.ai/models/mimo-v2-5 (15 source-displayable rows, no public overall score, unchanged from pass-1); OpenCode data benchmarks table (vendor HF-card rows: SWE-Bench Pro 56.1, Terminal-Bench 65.8, Claw-Eval 62.3 — source = HuggingFace model card, consistent with pass-1’s independent rows at different harnesses). No new independent benchmark absolutes (AA/Vals) published for this model post-retirement.

**Trigger resolution:** no formal revisit trigger defined in pass-1 (model scored from benchmarklist + prior BenchLM audit). The OpenCode data page confirms specs unchanged (1M ctx native, 200K Zen cap, text/image/audio/video in, reasoning+tool calls). Vendor benchmark rows (from HF model card) match pass-1’s cited values at different harness cuts. No AA/Vals new data for the exact id → **no band movement**.

**Lifecycle flag:** `legacy` — native Xiaomi API retired 2026-10-21; OpenCode Zen free tier removed ~2026-10-11–17 (GitHub evidence); opencode.ai/data shows zero usage since Oct 29; paid listing ($0.40/$2.00) persists but is a non-functional artifact. Successor on OpenCode Zen: MiMo-V2.6-Flash Free.

**Bands unchanged:** Tool 66, Reasoning 72, Context 70, Multimodal 88, Coding 74. No new independent evidence for any dimension; all pass-1 sources (benchmarklist, Context Arena, Gert Labs, prior BenchLM audit) remain the operative evidence base.

**Overall Score: 74/100** — unchanged; half-up mean (66+72+70+88+74)/5 = 370/5 = 74.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (benchmarklist `xiaomi-mimo-v2.5` independent harness rows incl. embedded verified labels + Context Arena MRCRv2, fetched 2026-10-02; OpenCode Zen docs for the $0 tier; prior BenchLM audit rows 2026-09-28 as corroboration); scores are normalized 1–100 interpretations, not official vendor scores. Flagged GPQA source variance (81.6 vs 84.9), the Tau2-vs-Tau3 domain collapse, and that benchmark rows belong to the native model, measured against the 200K/32K free-tier caps.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Origin API + free platform tier both retired; lifecycle confirmed from Xiaomi official + GitHub issues + OpenCode data (zero usage); successor MiMo-V2.6-Flash Free identified; no band changes; Overall 74 stands.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
