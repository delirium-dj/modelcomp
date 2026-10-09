# Muse Spark 1.3 Max — findings by Qwen 3.8 Flash

- Source: Meta Superintelligence Labs / Muse Spark 1.3 Max (`meta/muse-spark-1.3`, reasoning effort `max`)
- Date: 2026-10-02 (UTC) — **deep second pass 2026-10-09 (UTC)**; scores recalculated there, original findings preserved
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max (max-reasoning tier of the Muse Spark 1.3 family)
- **Short description:** Meta's Sep-2026 flagship max tier — private-weights agentic model at 1M context / 131K max output. Strongest on **knowledge-work agent suites** (legal research, tax, finance) and full-stack app building; comparatively weak on terminal-style / computer-use execution in the Max-effort Vals runs. Closed weights, API-only.
- **Provider / access:** Meta developer platform (`dev.meta.ai/docs/models`), reasoning effort `max`; OpenCode Zen `opencode/muse-spark-1.3` Standard tier (the Contributor Free tier covers the standard 1.3, **not** Max — no $0 Max ID).
- **Release / knowledge:** Max tier listed 2026-09-05 (Vals AI); base 1.3 released 2026-09-02; knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.3` (Standard Max).
- **Context window:** **1,048,576 total / 131,072 max output** (Meta / models.dev / Vals AI) — the curated `meta.json` "128K total / Text in/out" is a placeholder contradicted by verified data; scored on the real 1M multimodal model.
- **Modalities:** text + image + video + file in; text out; reasoning `max`; parallel tool calls; JSON mode; audio input "degraded" per Meta footnote. No non-text output.
- **Pricing (as of 2026-10-02):** **$1.25 in / $4.25 out per 1M** (cache $0.15) — same list as the standard Muse Spark 1.3 tier; Vals-measured $3.787 avg cost/test. Cost excluded from Overall.
- **Architecture:** proprietary closed weights, API-only (open-weights on roadmap only); Vals Index 58.16% (rank 9/41), 0.00% fallback, 0.65% refusal, ~23m33s avg latency (long-horizon profile).

### Raw benchmarks found

> **[Superseded on the lane question — see "Second-pass update (2026-10-09)" below; the text is kept verbatim as history.]** Two very different evidence lanes exist and the rater cohort disagrees because of it. **Max-specific** rows come from Vals AI independent evaluations (`meta/muse_spark_1_3_max`, max effort). **Standard-lane** rows (TB2.1 88.8%, GPQA 93.5%, HLE 48.7%, MRCR 98.5%, DeepSWE 75.4%) are from BenchLM's `muse-spark-1-3` base-model page and are NOT measured on the Max variant — the sibling `Muse_Spark_1.3.md` (Overall 94) borrows them; the sibling `Kimi_K3.md` (Overall 75) uses only the Max-specific Vals rows. This report keeps the lanes separate and scores on the honest intersection.

Agent / tool use (Max-specific, Vals AI):

- Legal Research Bench **55.29% (rank 1/72)**; Finance Agent v2 **59.96% (4/73)**; Tax Agent Bench **72.44% (6/64)**; Harvey's Legal Agent 23.75% (2/73) → knowledge-work agents lead their fields
- Terminal-Bench 4.0 **24.75%** (15/42); Terminal-Bench Science **10.00%**; CUA-bench (computer use) **5.83%** (6/8); Vals RSI Index 19.64% (16/23) → terminal/computer-use execution is the weak spot
- Standard-lane (NOT Max): TB 2.1 88.8%, Tau3 50.5%, GDPval 1754, SWE-Atlas 59.4%

Reasoning / knowledge (Max-specific, Vals AI):

- ProofBench v1.1 **58.00%**; IOI **56.56%**; EMB **67.43%**; MysteryMechanism **36.04%**
- GPQA Diamond 93.5% / HLE 48.7% / AA Index 62 are **standard-lane** BenchLM numbers — no GPQA/HLE published for the Max variant itself; AA-Omniscience: no verified row

Coding (Max-specific, Vals AI):

- Vibe Code Bench v1.1 **85.86%** (11/106); Vibe 1-100 20.46%; Code Migration **47.41%** (13/71)
- SWE-bench Verified / LiveCodeBench / SciCode: **no Max-specific row** (DeepSWE 75.4%, SciCode 58.8% are standard-lane)

Long context: 1M window with standard-lane MRCR 98.5%/98.1% at 512K+; no Max-variant retrieval re-measurement.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Where the two lanes conflict, the score reflects Max-measured evidence first, standard-lane only as corroboration.

- **Tool use: 90/100.** *(re-scored 2026-10-09 from 82 — the frontier anchors are now confirmed as **Max-tier** measurements: Meta's own card heads the column "Muse Spark 1.3 (max)" with **GDPval-AA v2 1754**, **Terminal-Bench 2.1 88.8** (AA run: 84.3), **τ³-Banking 50.5**, **AA AutomationBench 57.9**, **AA Agentic Index 55.7**, **AA-Briefcase 1583 Elo**, **JobBench 64.9**, **OSWorld 2.0 66.9 partial / 32.0 binary**, **DeepSearchQA 90.3**, so the 90–100 band is met on the registry's own anchors. Held below 95 by the terminal/computer-use conflicts: **Terminal-Bench 4.0 only 33.3 (AA) / 24.75 (Vals Max)**, **GDP.pdf 26.6**, **ITBench 33.2**, **ApprenticeBench 19**, and Vals CUA-bench 5.83% against the vendor's OSWorld 66.9 — the field where this variant is genuinely split.)*
- **Reasoning: 89/100.** *(re-scored 2026-10-09 from 84 — the headline reasoning rows are now known to be measured **on the Max variant by Artificial Analysis**, not by Meta: **GPQA Diamond 93.5**, **HLE 48.7**, **AA Intelligence Index 48 (#23/226, class median 26)**, **CritPt 24.9**, **AA-Omniscience Index +25.0 / Accuracy 43.6% / Hallucination 32.9%** — a positive reliability index, rare at any tier. Combined with the Max-specific Vals rows (**ProofBench 58.0, IOI 56.56, EMB 67.43, MysteryMechanism 36.04**) this clears the GPQA-90+/HLE-40+ band. Not 90+: the AA Index sits at 48 rather than the 62 first reported in September (index-version drift), and accuracy of 43.6% on Omniscience is still mid.)*
- **Context window: 98/100.** *(re-confirmed 2026-10-09 — unchanged.)* 1M window meets the ≥1M tier and **MRCR v2 98.5% (256K–512K) / 98.1% (512K–1M)** on the Max column of Meta's card clears the ≥98%-at-512K+ retrieval bar; the second pass adds an **independent** long-context measurement — **AA-LCR 83.0%** and **MLCR-AA 43.3%** — which corroborates strong-but-not-perfect recall, so the point stays trimmed from 100 rather than raised.
- **Multimodal: 85/100.** *(re-confirmed 2026-10-09 — unchanged.)* text + image + video + file in is the image+video+file band (75–90) with the added file-input coverage; Meta's card now states vision is **execution-grounded** ("its visual reasoning runs through a real execution environment instead of scripted steps"), and Artificial Analysis independently records "Supports: text, image, and video" input. Still **no measured vision eval row for this ID** (no MMMU-Pro / CharXiv / video benchmark anywhere — BenchLM's only multimodal entry is the OpenRouter **Design Arena Website 1363** Elo), and audio input is dropped/degraded with text-only output, so it stays at the top of the band, not the >90 tier.
- **Coding: 88/100.** *(re-scored 2026-10-09 from 78 — the two strongest coding anchors are now confirmed on the Max column: **DeepSWE v1.1 75.4** (beats GPT-5.6 Sol max 73.0 and Opus 5 max 74.0 on Meta's own table) and **AA Coding Index 75.8** with **AA-SciCode 58.8**, alongside **TB 2.1 88.8**, **SWE-Atlas Codebase QnA 59.4** and the Max-specific **Vibe Code Bench 85.86 (Vals)**. Held below 90+ by real counter-evidence: **CursorBench 4.0 41.6**, **Code Migration 47.4 (Vals Max)**, **Bug Hunt Bench 32.2 fixes**, **Terminal-Bench 4.0 33.3**, and mindstudio's hands-on write-up reporting scores that don't match everyday output.)*
- **Cost efficiency: 90/100.** *(re-scored 2026-10-09 from 88 — Meta's pricing table reveals **two SKUs**, not one: `muse-spark-1.3` at **$1.25 in / $0.15 cached / $4.25 out** and **`muse-spark-1.3-contributor` at $0.10 / $0.002 / $0.20**, the discount granted explicitly in exchange for consent — "Used to improve our products" vs "Not used to improve our products". At the standard SKU the $1.25/$4.25 list maps to ~88 (AA: "competitively priced" vs $2.00/$10.00 medians) but AA measures **$1.60 per Index task, #74/226**, ≈6× the $0.27 class median, because of **170 M Index tokens ("very verbose", median 81 M)**; the contributor SKU would sit at ~98 but trades privacy, so the blended figure stays at 90 rather than the token-price read. Cost excluded from Overall.)*
- **Overall Score: 90/100.** *(re-scored 2026-10-09 from 85.)* Mean of the five quality dimensions (90 + 89 + 98 + 85 + 88) / 5 = 450 / 5 = 90.0 → 90; Cost excluded per `RULES.md`. Best fit unchanged in kind but raised in degree: long-horizon **knowledge-work and agentic-coding** pipelines at 1M context with multi-format input, now supportable as a genuine frontier-tier generalist rather than a knowledge-work specialist — the first pass's downgrade rested on a lane split that the vendor's own "Muse Spark 1.3 (max)" column and Artificial Analysis' "(max)" page both disprove. The honest remaining weaknesses are **terminal-and-computer-use execution at the newest harnesses** (TB 4.0 33.3/24.75, Vals CUA 5.83 vs vendor OSWorld 66.9 partial), **professional-document work** (GDP.pdf 26.6), **GUI job readiness** (ApprenticeBench 19) and **heavy verbosity** (170 M Index tokens, $1.60/task).

---

## Second-pass update — 2026-10-09 (UTC)

Deep re-research (official model card + two independent aggregators + third-party review); scores above are the result of this pass.

**Sources consulted:** Meta official model card and pricing table — https://dev.meta.ai/models/muse-spark · Meta AI Research launch post — https://research.meta.ai/blog/introducing-muse-spark-1-3 · Meta eval methodology — https://ai.meta.com/static-resource/muse-spark-eval-methodology · Artificial Analysis — https://artificialanalysis.ai/models/muse-spark-1-3 (page titled **"Muse Spark 1.3 (Max)"**) · BenchLM — https://benchlm.ai/models/muse-spark-1-3 (38 of 625 tracks, **Overall "Not computed (unranked)"**, last updated October 9, 2026) · OpenRouter — https://openrouter.ai/meta/muse-spark-1.3 · Vals AI — https://www.vals.ai/models/meta_muse_spark_1_3 (+ `_max`) · hands-on review — https://www.mindstudio.ai/blog/meta-muse-spark-1-3-benchmark-confusion

**Correction that drives the re-score (the first pass under-scored this model):** the 2026-10-02 report treated TB 2.1 88.8 / GPQA 93.5 / HLE 48.7 / MRCR 98.5 / DeepSWE 75.4 as base-tier "standard-lane" numbers that could not be charged to the Max variant. Both primary sources now show the opposite: **Meta's own benchmark table headers the column "Muse Spark 1.3 (max)"** (GDPval-AA v2 1754, JobBench 64.9, OSWorld 2.0 66.9 partial/32.0 binary, DeepSearchQA 90.3, Agentic IF Index 57.8, AutomationBench 49.6, MRCR 98.5/98.1, DeepSWE v1.1 75.4, SWE-Atlas 59.4, TB 2.1 88.8 — with **Muse Spark 1.2 (xhigh) 1615/82.9/55.0, GPT‑5.6 Sol (max) 1710/88.8/73.0 and Opus 5 (max) 1824/86.7/74.0 as the comparison columns**), and **Artificial Analysis publishes its measurement under the name "Muse Spark 1.3 (Max)"** — Index 48 (#23/226), 154.2 tok/s (#20/226), $1.25/$4.25 with 88% cache discount, $1.60/task (#74/226), 170 M Index tokens (#93/226), text+image+video in / text out, 1M context. The launch post also states plainly that **"Muse Spark 1.3 with max reasoning is now available on Muse Code and Meta Model API"** — Max is the shipped configuration, not a separate SKU.

**New rows found this pass (previously absent):** AA **Agentic Index 55.7%**, **AA Coding Index 75.8%**, **AA-LCR 83.0%**, **MLCR-AA 43.3%**, **CritPt 24.9%**, **GDP.pdf 26.6%**, **AA-Briefcase 1583 Elo**, **AA AutomationBench 57.9%**, **τ³-Banking 50.5%**, **ITBench 33.2%**, **AA-Omniscience Index +25.0 / Accuracy 43.6% / Hallucination 32.9%**, **Terminal-Bench 4.0 33.3%**, **Terminal-Bench 2.1 (AA) 84.3% / (Vals) 72.3%**, **CWE-bench v1 55.0%**, **CursorBench 4.0 41.6%**, **Bug Hunt Bench 32.2 fixes**, **ApprenticeBench 19%**, **Gray Swan IPI 15.9%** (adversarial/injection robustness, taken from a rival's launch chart — lowest-confidence row), **Design Arena Website 1363 Elo**, `muse-spark-1.3-contributor` pricing tier.

**Conflicts compared and how they were resolved:** (1) **AA Intelligence Index 62 → 48**: AA's September announcement stated 62 for the limited-preview Max model; the live page states 48 under the current index version — scored on 48 and the drift recorded, which is why Reasoning lands at 89 rather than 92+. (2) **Computer use**: vendor OSWorld 2.0 66.9 partial vs Vals CUA-bench 5.83% — different harnesses and scoring (partial-credit multi-step vs binary task completion); both reported, neither averaged. (3) **Terminal-Bench**: 88.8 (vendor 2.1) vs 84.3 (AA 2.1) vs 72.3 (Vals 2.1) vs 33.3 (AA 4.0) vs 24.75 (Vals 4.0) — the model is strong on 2.1 and weak on 4.0, so Tool use is anchored on the harder harness. (4) **DeepSearchQA 90.3 (card) vs 89.4 (BenchLM)** and **AutomationBench 49.6 (card) / 49.4 (BenchLM) vs 57.9 (AA-run AutomationBench-AA)** — treated as harness differences (vendor E2E suite vs AA's version), vendor figure quoted for the vendor row. (5) **τ³-Banking 50.5 (AA) vs the "52%, #1" claim circulating on social** — scored on AA's 50.5. (6) **Hands-on vs leaderboards**: mindstudio reports real-world output weaker than the DeepSWE/TB leaderboards suggest, consistent with this model's Vals terminal rows; reflected as the ceiling on Tool/Coding rather than a separate penalty.

**Still missing (printed rather than invented):** SWE-bench Verified / LiveCodeBench / BFCL / SkillsBench / MMMU-Pro or any vision eval / knowledge cutoff / parameter count / technical report for the Max variant; BenchLM still assigns **no composite** ("Not computed (unranked)"), so there is no aggregator Overall to triangulate against my 90.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Vals AI independent model page + benchmark tables for `meta/muse_spark_1_3_max` max-effort rows; Meta dev docs for the modality/pricing/1M-131K spec; BenchLM `muse-spark-1-3` **standard-lane** rows explicitly quarantined). Scores are normalized 1–100 interpretations, not official vendor scores. Key finding recorded for the cohort: the rater disagreement (Kimi K3 75 vs Muse Spark 1.3 self-report 94) is a **lane-mixing artifact** — GPQA 93.5 / TB 2.1 88.8 / MRCR 98.5 / DeepSWE 75.4 are measured on the base 1.3, not the Max variant, while Max's own Vals rows (TB 4.0 24.75, CUA 5.83, ProofBench 58, Vibe 85.86) tell a knowledge-work-strong / execution-weak story. Also flagged that the curated `meta.json` (128K/text-only) understates the verified 1M text+image+video+file model.
- Revisit trigger: if Meta or Artificial Analysis publish audited Max-variant GPQA/HLE/SWE-Verified/Omniscience rows (rather than the base-tier proxies), research deeper and re-score; keep this file as history.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-09. Method: official Meta model card + Meta research launch post + Artificial Analysis "(max)" page + BenchLM page (Oct 9 snapshot) + OpenRouter/Vals/mindstudio cross-checks; ≥3 independent sources, conflicts compared rather than averaged. Scores raised (Tool 82→90, Reasoning 84→89, Coding 78→88, Cost 88→90, Overall 85→90) **only** because the primary sources reclassify the frontier rows as Max-variant measurements; Context 98 and Multimodal 85 re-confirmed unchanged. The 2026-10-02 findings and the superseded lane-split reasoning are left verbatim above as history, per `RULES.md`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
