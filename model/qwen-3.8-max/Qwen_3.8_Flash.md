# Qwen 3.8 Max — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.8 Max (`alibaba/qwen3-8-max`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — family AA coverage now exists (0902 snapshot at 45; base artifact 40 on v4.3) recorded alongside vendor 57/60 without averaging; $2/$6 and Vals-gap reconfirmed; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's flagship 2.4T sparse-MoE (A95B active) open-weight model with 1M multimodal context, a very broad agent/vision/coding suite and flat $2/$6 pricing — the strongest Qwen lineage entry here, though independent Vals re-runs of its agentic and terminal scores land below the vendor launch numbers.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.8-max`); open weights on HF `Qwen/Qwen3.8-2.4T-A95B`; one-time 1M-token free quota, no Zen Free ID. Reasoning + tool calls.
- **Release / knowledge:** 2026 (Qwen blog "Qwen3.8-Max release benchmarks"); knowledge cutoff not disclosed.
- **IDs:** `alibaba/qwen3-8-max`; HF `Qwen/Qwen3.8-2.4T-A95B`.
- **Context window:** 1M in / 131K out (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, video in; text out; reasoning on; tool calls. No audio-in and no non-text output (per curated meta and published rows).
- **Pricing (as of 2026-10-02):** Paid $2 / $6 per 1M flat; open-weight self-hostable; one-time 1M-token free quota.
- **Architecture:** open-weight sparse MoE (2.4T total / ~95B active).

### Raw benchmarks found

> Independently verified against BenchLM (61 of 618 rows; 72.1/100, #16 of 645), citing the Qwen3.8-Max release benchmarks, Vals AI, VulcanBench, Proximal FrontierSWE and OpenHarmony Bench (fetched 2026-10-02). BenchLM flags partial coverage; most rows are vendor-published, so Vals re-runs (marked) are the independent cross-check.

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (vendor) but **Vals 67.4%** — a ~19pt independent gap
- OSWorld-Verified **86.1%**; AndroidWorld 85.3%; MobileWorld 77.8%; Toolathlon-Verified 72.5%; WideResearch 81.9%; CoWorkBench 74.8%; skillsBench 70.2%
- WebArena-Verified 66.8%; JobBench 53.4%; Agents' Last Exam 52.4%; OSWorld 2.0 19.4%; AutomationBench 27.3%

Reasoning / knowledge:

- GPQA-Diamond 92.6% (Vals 93.7%); **HLE 43.6%** — clears the 40% bar; MMLU-Pro (Vals) 88.6%; IFBench 82.8%
- MRCRv2 **92.9%**; LongBench v2 66.3%; MathVision w/ Python 97.7% / MathVision 95.2%
- No Artificial Analysis Intelligence Index or Omniscience/hallucination rows published (factuality unprofiled)

Coding:

- SWE-bench (Vals) **85.6%**; LiveCodeBench (Vals) 87.9%; PaperBench **93.0%**; Terminal-Bench 2.1 86.6%; VulcanBench v3 81.2%
- FrontierSWE 73.5%; SWE-bench Pro 67.7%; NL2Repo 55.9%; DeepSWE **56.6%** (under the 74 ref); FrontierSWE v2 15.8%; MLS-Bench Lite 41.0%

Multimodal / long context:

- CharXiv 93.5% (w/o tools 88.4); Video-MME (subtitle) **90.4%**; MLVU 90.8%; VideoMMMU 88.7%; LVBench 81.8%; MMVU 82.4%
- OmniDocBench 1.5 92.1%; RealWorldQA 88.0%; ScreenSpot Pro 84.5%; OCRBench V2 74.2%; MMMU-Pro 82.3%

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 87/100.** OSWorld-Verified 86.1%, AndroidWorld 85.3%, Toolathlon-Verified 72.5% and WideResearch 81.9% are a frontier agentic spread, and vendor Terminal-Bench 2.1 86.6% is near the 88 ref — but the independent Vals re-run (67.4%), AutomationBench 27.3% and OSWorld 2.0 19.4% hold it under the 90 band.
- **Reasoning: 87/100.** GPQA-Diamond 92.6/93.7%, HLE 43.6% clearing the bar, MMLU-Pro 88.6% and MathVision 95.2% are strong; MRCRv2 92.9% supports long-context reasoning, but the absence of any Intelligence Index / Omniscience profile (unmeasured factuality) and LongBench v2 66.3% cap it just under 90.
- **Context window: 95/100.** 1M-token window (131K out) meets the ≥1M tier and MRCRv2 92.9% is supportive; short of the ≥98%-at-512K+ standard for 100, so the band floor.
- **Multimodal: 88/100.** Text+image+video+document in with an exceptional, well-populated visual suite (Video-MME 90.4, MLVU 90.8, CharXiv 93.5, OmniDocBench 92.1) — top of the +video band (75–90); no audio-in and no non-text output keep it below the 90 tier.
- **Coding: 85/100.** SWE-bench (Vals) 85.6%, LiveCodeBench 87.9%, PaperBench 93.0% and Terminal-Bench 86.6% are strong, but DeepSWE 56.6% (under the 74 ref), FrontierSWE v2 15.8% and MLS-Bench 41.0% trim the hardest agentic-code band.
- **Cost efficiency: 78/100.** Flat $2 / $6 per 1M is well under the $3/$15≈60 anchor and open weights allow self-hosting; a one-time 1M free quota (no recurring free tier) — strong value. Cost is excluded from Overall.
- **Overall Score: 88/100.** Mean of Tool 87, Reasoning 87, Context 95, Multimodal 88, Coding 85 = 88.4 → 88. Best fit: frontier-adjacent multimodal agent and long-document/video work at disruptive $2/$6 open-weight pricing, where you re-verify terminal/agentic output (the Vals gap is real) and keep factual claims grounded — an unmatched value-to-breadth ratio in this audit rather than a pure peak-score leader.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Family index coverage — https://www.reddit.com/r/LocalLLaMA/comments/1wi0dme/ (**"Qwen3.8 Max (0902) scores 45 on the Artificial Analysis Intelligence Index, up 5 points in a month and back on top of China's leaderboard"**) and https://commandcode.ai/models/qwen3-8-max-0902 (the dated snapshot profiled as its own sku: **"upgraded Qwen 3.8 Max: stronger coding & agentic tool use"**) — pass 1's "no AA rows published" note is now superseded *at family level*, while this exact artifact still carries no AA row of its own · competing readings kept side by side: https://emergent.sh/learn/qwen-3-8-benchmarks (**"Qwen3.8-Max beats both Claude flagships on Terminal Bench, and it trails Fable 5 by 12 points on SWE-bench Pro"** — vendor-table analysis) vs the independent **"up 5 points in a month"** community framing — NOT averaged, per house rule · vendor-vs-independent gap validated — https://www.datacamp.com/blog/qwen3-8-max (**"Qwen3.8-Max scores 86.6 on Terminal-Bench 2.1, between GPT-5.6 Sol at 88.8 and the 84.6 posted by both Opus 4.8 and Fable 5"** — repeats the vendor number pass 1 contrasted against Vals' 67.4%) and https://medium.com/data-science-collective/qwen-3-8-max-benchmarks-and-the-footnotes-under-them (footnote-level scrutiny of the vendor table) · pricing/lineage — https://apidog.com/blog/qwen-3-8-benchmarks/ (official release table vs Opus 4.8 / Fable 5 / GPT-5.6 Sol; $2/$6 flat lane unchanged) and https://www.reddit.com/r/Qwen_AI/comments/1waw1dx/ (0902 parsing-failure caveat thread).

**What moved and how it was resolved:**

1. **The "factuality unprofiled" caveat evolves — but only at family level.** AA now indexes the **0902 dated snapshot at 45** (and today's qwen-3.8 pass logged the base `2.4T-A95B` artifact at **40 on v4.3**). Neither reading is this slug's exact artifact, and the 45-vs-57/60 vendor-era framings sit on different builds — recorded side by side, **not averaged**, per the batch convention (same pattern as the GLM cascade). Reasoning 87's stated cap (no exact-id Omniscience/hallucination profile) therefore still stands: nothing published rebuts it, and the Medium/apidog footnote audits reinforce discounting the vendor table.
2. **The Vals gap — pass 1's central caution — is reconfirmed as the load-bearing discrepancy.** DataCamp reprints the vendor TB 86.6 verbatim; no second-pass source produces an independent TB re-run *better* than Vals 67.4%, and emergent itself flags the SWE-bench Pro trail (12 pts behind Fable 5). Tool 87's placement just under the 90 band, on the independent reading, survives exactly as written.
3. **Pricing and economics unchanged.** Flat **$2/$6** with open weights and the one-time 1M free quota reconfirmed; Cost 78 stands (the 0902 snapshot is a separate sku per CommandCode — its rows belong to its own folder, not here, per the exact-ID rule). Multimodal 88's video/document suite and Context 95's MRCR 92.9% support have no disputes.
4. **No retirement signal.** The line is current — the community thread even notes parsing artifacts deflating 0902's raw run ("7 hard errors … response-parsing failures"), a measurement caveat, not a capability change. **Scores changed by this pass:** None. Tool 87, Reasoning 87, Context 95, Multimodal 88, Coding 85 → Overall = half-up mean(87, 87, 95, 88, 85) = 442/5 = 88.4 → **88, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Qwen3.8-Max release benchmarks plus Vals AI, VulcanBench, Proximal and OpenHarmony Bench independent re-runs); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Reddit/CommandCode for the 0902 AA-45 snapshot reading, emergent/DataCamp/Medium/apidog for the vendor-table audits and Vals-gap validation, pricing reconfirmation); index readings logged without averaging, exact-id "factuality unprofiled" caveat preserved, Vals 67.4% discount of vendor TB 86.6 reconfirmed as load-bearing, snapshot rows kept in their own sku — **no dimension changed and Overall remains 88**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
