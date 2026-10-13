# Qwen3.5 Plus — findings by Space Bunny

- Source: Alibaba (`qwen3.5-plus`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 74 → 68, and the reason is a change in what the
> aggregators are willing to stand behind.** The 2026-10-01 version scored this model on a
> record of **vendor and launch figures — GPQA 84.8–88.4%, MMLU-Pro 87.2%, AIME 2025 83.8%,
> PinchBench 85.8%, LiveCodeBench 85.3%, τ²-bench** — and it said so candidly. What has
> changed is not the model. **benchgap now carries only 4 measured benchmarks and estimates
> 28 more; BenchLM carries 4 of 626; Vector Wire has no record at all (the hyphenated slugs
> 404).** And the four that *are* measured are all low: **JobBench 18.5%, FrontierMath v2
> Tiers 1–3 21.0%, FrontierMath Tier 4 2.1%, Vibe Code Bench 15.7%**. The high-profile
> numbers survive only as **low-confidence estimates** — HMMT Feb. 2025 at 96.9% and HMMT
> Nov. 2025 at 96.8%, both ±2.7–2.8 pp.
>
> **This model is also two-plus generations behind.** BenchLM ranks it **47.65, #106 of
> 891**, against Qwen3.6 Plus at 53.39, Qwen3.7 Max at 62.14 and Qwen3.8 Max at 69.57.

## Model card

- **Name:** Qwen3.5 Plus
- **Short description:** Alibaba's February 2026 flagship Plus-series model — **native vision-language**, with the full **1M context window available by default**, official built-in tools and **adaptive tool use**. Snapshots: `qwen3.5-plus-2026-02-15` (the current alias target) and `qwen3.5-plus-2026-04-20`. **Superseded** by Qwen3.6 Plus and four later models. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Alibaba Cloud Model Studio, Global region; also OpenRouter and third-party gateways.
- **Release / knowledge:** series released **2026-02-16/17**. Knowledge cutoff not established in this record.
- **Context window:** **1,000,000 tokens — the full window by default.** **Max input 991,808 tokens; max output 65,536 tokens.** In thinking mode: max input **983,616** tokens.
- **Modalities:** **native vision-language** — text, image and video in; text out. Reasoning: yes, via `enable_thinking`. Official built-in tools with **adaptive tool use**.
- **Pricing (as of 2026-10-13, historical list price for a superseded model):** **tiered by input length**, three bands. Alibaba Cloud Model Studio, Global region: **≤128K input at $0.115 / MTok input, $0.688 / MTok output**, with **explicit cache reads at $0.0115** — a 90% discount, which in an agentic loop is the number that actually matters. **No aggregator tracks a price for this model any more.**
- **Architecture:** proprietary MoE. Parameter count not established in this record.

### Raw benchmarks found

> **Sourcing note that governs this entire section.** Four benchmarks are **measured**;
> twenty-eight are **model-based estimates** carrying explicit confidence bands, many at
> **low confidence** with error bars of ±10 pp or worse. benchgap states plainly: *"Estimates
> are model-based predictions, never measurements."* **Every measured figure below is
> labelled as such, and the score leans on measured rows first.**

**Measured (the only four):**

- **JobBench: 18.5%** (JobBench paper, arXiv 2605.26329) — a real-world job-performance benchmark, and the figure is very low.
- **FrontierMath v2, Tiers 1–3: 21.034%** and **Tier 4: 2.083%** (Epoch AI leaderboard) — both very low, and well below Qwen3.6 Plus's 26.2% / 8.3% in the same record family.
- **Vibe Code Bench: 15.74%** (Vals AI v1.1) — **the only measured coding figure, and it is close to the floor.** Qwen3.6 Plus reads 25.56% on the same harness.

**Estimated, high or medium confidence:**

- **SWE-bench Verified: 74.6% ± 4.4 pp**; **Vals SWE-bench 70.5% ± 6.3 pp** — the usual vendor-over-independent gap, here as an estimate on both sides.
- **AA Coding Index: 47.2% ± 6.8 pp**. **AA-SciCode: 48.0% ± 3.8 pp**.
- **BrowseComp 66.2% ± 6.2 pp**; **WideResearch 74.4% ± 1.2 pp**; **DeepSearchQA 75.7% ± 10.9 pp**; **GDPval-AA 26.1% ± 5.7 pp**.
- **OSWorld-Verified 61.0% ± 8.4 pp**; **MCP Atlas 40.3% ± 8.2 pp**; **Claw-Eval 50.7% ± 5.6 pp**; **Toolathlon 30.9% ± 7.4 pp**.
- **MMAnswerBench 82.4% ± 1.3 pp**; **HMMT Feb. 2025 96.9% ± 2.8 pp**; **HMMT Nov. 2025 96.8% ± 2.6 pp**; **AIME 2026 95.5% ± 0.6 pp**; **React Native Evals 63.9% ± 3.0 pp**; **Gert Labs 50.4%**.

**Estimated, low confidence — and these are the ones worth reading closely:**

- **SWE-Rebench: 12.4% ± 6.5 pp.** This is the contamination-resistant re-run benchmark. **12.4% on a re-run harness is close to the floor.**
- **FrontierCode 1.1 Main: 6.3% ± 4.3 pp.**
- **ApprenticeBench: 0.2% ± 5.6 pp.**
- **GDP.pdf: 17.9% ± 4.0 pp** — a long-document PDF comprehension task.
- **Agents' Last Exam: 48.9% ± 10.7 pp** — nominally respectable, on the widest band in the record.
- **CyberGym 42.2% ± 11.4 pp**; **PostTrainBench v1.1 19.9% ± 10.5 pp**; **Toolathlon-Verified 73.2% ± 1.3 pp**; **APEX-Agents-AA 22.0% ± 3.6 pp**.

**Provenance.** All 32 rows above come from a single aggregator's compiled record (benchgap, data dated 2026-10-13, which itself sources BenchLM's CC BY-NC 4.0 data), plus Epoch AI's FrontierMath v2 leaderboard, Vals AI's Vibe Code Bench v1.1 and SWE-bench leaderboards, and the JobBench paper. **No aggregator carries the GPQA, MMLU-Pro, AIME 2025, PinchBench, LiveCodeBench or τ²-bench figures the previous version of this file used.** BenchLM's own record is explicit that it holds **4 of 626** benchmarks for this model and that "the overall score is conservative."

**Family comparison (BenchLM, 2026-10-12)** — the placement is unambiguous:

| Model | BenchLM score |
|---|---|
| Qwen3.8 Max | 69.57 |
| Qwen3.8-Flash-Next | 63.01 |
| Qwen3.7 Max | 62.14 |
| Qwen3.8-27B | 57.44 |
| Qwen3.5 397B | 55.58 |
| Qwen3.7 Plus | 55.00 |
| **Qwen3.6 Plus** | **53.39** |
| Qwen 3.6 Max (preview) | 51.36 |
| Qwen3.5-27B | 49.32 |
| Qwen3.6-27B | 47.49 |
| **Qwen3.5 Plus** | **47.65 (#106 of 891)** |
| Qwen3.7 Flash | 46.86 |

### Normalized scores (1–100)

- **Tool use: 55/100.** *Revised down from 65.* The previous version scored this 65 on **PinchBench 85.8% (#26 of 73)** plus τ²-bench and other figures that **no aggregator now carries**. What replaces them is thinner and weaker. **JobBench at 18.5% is the only measured agentic figure and it is very low** — and JobBench is a real-world job-performance benchmark, not a harness artefact. Estimated rows are mixed: **BrowseComp 66.2%, WideResearch 74.4%, DeepSearchQA 75.7%, Toolathlon-Verified 73.2%** against **GDPval-AA 26.1%, APEX-Agents 22.0%, Toolathlon 30.9%, MCP Atlas 40.3%, Claw-Eval 50.7%**. The pattern is consistent with what the previous version already suspected — good on structured research tooling, poor on open-ended job-like execution — but the only measured row says the latter is worse than "poor."
- **Reasoning: 66/100.** *Revised down from 72.* **FrontierMath v2 Tiers 1–3 at 21.034% and Tier 4 at 2.083% are measured and very low** — 2.08% on the hardest frontier maths tier is among the weakest readings anywhere in this dataset. The previous version's **GPQA 84.8–88.4%, MMLU-Pro 87.2%, AIME 2025 83.8%** are not carried by any current aggregator and are not repeated here as if they were. Estimated rows that look better — **HMMT Feb. 2025 96.9%, HMMT Nov. 2025 96.8%, AIME 2026 95.5%** — all carry **low confidence** bands, and the Tier 4 measurement is hard to reconcile with them: **this is a model that does competition-maths formats well and frontier maths badly**, and the measured row is the one that should be trusted. **Agents' Last Exam 48.9% ± 10.7 pp** is nominally the strongest reasoning row, on the widest band in the record.
- **Context window: 90/100.** *Revised down from 95.* **1,000,000 tokens, 991,808 max input, 65,536 max output**, available **by default** — a real and unusual advantage over models that gate 1M behind a premium tier, and the reason this score is still in the ≥1M band rather than lower. Reduced five points because **no AA-LCR, MRCR, RULER or GraphWalks measurement appears on any current record**, and because **GDP.pdf at 17.9% ± 4.0 pp** — a long-document comprehension task, the exact thing a 1M window exists for — is the one long-context figure on record and it is low. The 100 tier requires ≥98% retrieval at 512K+ and is out of reach regardless.
- **Multimodal: 70/100.** *Unchanged, and the reasoning is unchanged.* **Native vision-language — text, image and video in; text out** — but the previous version scored this **deliberately below the capability floor** because measured evidence contradicted the documentation. That remains the correct call: **no MMMU, MMMU-Pro, DocVQA or CharXiv figure exists on any current record**, and the only new row, **MMAnswerBench 82.4% ± 1.3 pp**, is an estimated multimodal-reasoning figure rather than a standard vision benchmark. Documented capability is not measurement, and the previous version's flag on this stands unretracted.
- **Coding: 58/100.** *Revised down from 70 — the largest single move in this file.* The previous version scored this 70 on **LiveCodeBench 85.3% (#26 of 123, 80th percentile)**, which **no current aggregator carries for this model.** What replaces it is the opposite picture. **Vibe Code Bench at 15.74% is measured** — close to the floor, and 10 points below Qwen3.6 Plus on the same harness. The estimated rows are **SWE-bench Verified 74.6% ± 4.4** and **Vals SWE-bench 70.5% ± 6.3**, which are respectable and consistent with each other, against **AA Coding Index 47.2% ± 6.8**. And the three weakest rows in the entire record are all coding-shaped: **SWE-Rebench 12.4% ± 6.5**, **FrontierCode 1.1 Main 6.3% ± 4.3**, **ApprenticeBench 0.2% ± 5.6**. SWE-Rebench is the contamination-resistant re-run harness, and ApprenticeBench at 0.2% is effectively zero. **A model scoring 15.7% on Vibe Code Bench and 12.4% on SWE-Rebench is not writing patches well, whatever its leaderboard-era LiveCodeBench number said.**
- **Cost efficiency: 88/100.** *Revised down from 92.* Unchanged rate card at **≤128K input: $0.115 / $0.688 per MTok**, with **cache reads at $0.0115** — a 90% discount, and in an agentic loop with a 1M window the cached rate is the number that actually decides the bill. Two deductions: **no aggregator tracks a price for this model any more**, so the field-relative reading available elsewhere in this batch is unavailable; and the model is **superseded by successors that are cheaper and stronger** — BenchLM scores Qwen3.6 Plus at 53.39 against this model's 47.65, and Qwen3.8 Max at 69.57.
- **Overall Score: 68/100.** (55 + 66 + 90 + 70 + 58) / 5 = 339 / 5 = 67.8 → **68**, down from 74. **Cost efficiency is reported but excluded from the five-dimension average.** The six-point drop is **coding −12, tool use −10, reasoning −6, context −5**, and every one of those is attributable to the same cause: **the record went from launch figures to measured figures, and the measured figures are worse.** Best fit, stated as history: **high-volume multilingual agentic and coding workloads on a 1M default context window at $0.115/$0.688**, where the cached-input rate of $0.0115 was genuinely excellent for a 1M-window agent loop. **It should not be chosen now.** Three reasons, in order: **it is two-plus generations behind** (BenchLM #106 of 891, against Qwen3.8 Max at 69.57); **its only measured coding figure is 15.7% on Vibe Code Bench and 12.4% on SWE-Rebench**; and **its frontier-maths figures are measured at 21.0% and 2.1%**. The 1M default context and the $0.0115 cache rate remain the two things worth carrying forward to whatever supersedes it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (74 → **68**).
  **No aggregator now carries a substantial record for this model.** **Vector Wire's
  hyphenated slugs return 404**; **benchgap (data dated 2026-10-13) holds 4 measured and 28
  estimated benchmarks**; **BenchLM holds 4 of 626** and states its own overall score is
  conservative. This pass therefore leaned on the **measured** rows first and labelled every
  estimate with its confidence band, per benchgap's own warning that *"Estimates are
  model-based predictions, never measurements."*
  Sources: **benchgap** (compiled 2026-10-13 from BenchLM CC BY-NC 4.0 data, plus **Epoch AI's
  FrontierMath v2 leaderboard**, **Vals AI's Vibe Code Bench v1.1 and SWE-bench
  leaderboards**, and the **JobBench paper, arXiv 2605.26329**); **BenchLM (2026-10-12)** for
  the family comparison and the superseded model's **47.65 / #106 of 891** ranking.
  Load-bearing figures: **JobBench 18.5% (measured)**, **FrontierMath v2 21.034% / 2.083%
  (measured)**, **Vibe Code Bench 15.74% (measured)**, **SWE-bench Verified 74.6% ± 4.4**,
  **Vals SWE-bench 70.5% ± 6.3**, **AA Coding Index 47.2% ± 6.8**, **AA-SciCode 48.0% ± 3.8**,
  **BrowseComp 66.2% ± 6.2**, **WideResearch 74.4% ± 1.2**, **DeepSearchQA 75.7% ± 10.9**,
  **GDPval-AA 26.1% ± 5.7**, **OSWorld-Verified 61.0% ± 8.4**, **MCP Atlas 40.3% ± 8.2**,
  **Claw-Eval 50.7% ± 5.6**, **Toolathlon 30.9% ± 7.4**, **Toolathlon-Verified 73.2% ± 1.3**,
  **APEX-Agents-AA 22.0% ± 3.6**, **MMAnswerBench 82.4% ± 1.3**, **HMMT Feb. 2025 96.9% ±
  2.8**, **HMMT Nov. 2025 96.8% ± 2.6**, **AIME 2026 95.5% ± 0.6**, **React Native Evals
  63.9% ± 3.0**, **Agents' Last Exam 48.9% ± 10.7**, **SWE-Rebench 12.4% ± 6.5**,
  **FrontierCode 1.1 Main 6.3% ± 4.3**, **ApprenticeBench 0.2% ± 5.6**, **GDP.pdf 17.9% ±
  4.0**, **PostTrainBench v1.1 19.9% ± 10.5**, **CyberGym 42.2% ± 11.4**.
  **What this pass deliberately did not do.** The previous version scored this model on
  **GPQA 84.8–88.4%, MMLU-Pro 87.2%, AIME 2025 83.8%, PinchBench 85.8% (#26 of 73),
  LiveCodeBench 85.3% (#26 of 123)** and a τ²-bench figure. **None of those is carried by any
  aggregator consulted on 2026-10-13**, so none is repeated here as current evidence. That is
  the whole of the six-point drop: **the record moved from launch figures to measurements,
  and the measurements are worse.** **One internal tension recorded rather than resolved:**
  the estimated competition-maths rows (**HMMT 96.8–96.9%, AIME 2026 95.5%**) cannot be
  reconciled with the **measured FrontierMath Tier 4 at 2.083%** on any reading; the
  competition-format benchmarks are solvable with heavy sampling and formalisation while
  FrontierMath Tier 4 is not, and the measured row is the one trusted here. **One dimension
  held rather than moved:** Multimodal stays at 70 with the previous version's reasoning
  intact — documented native vision-language capability with **no MMMU, MMMU-Pro, DocVQA or
  CharXiv figure on any current record** — so the flag it raised is carried forward
  unretracted. Scores are normalized 1–100 interpretations per `model-comparison.md`, not
  official vendor scores, and cost efficiency is reported but excluded from the overall
  average.
- Future sources: add a new file next to this one, e.g. `qwen-3.8-max.md`, using the same
  headings — **Qwen3.8 Max, Qwen3.8-Flash-Next, Qwen3.7 Max, Qwen3.8-27B, Qwen3.7 Plus and
  Qwen3.6 Plus are all separate models in this dataset** and all postdate this one. The gaps
  most worth closing: **an AA-LCR measurement**, which would put Context on evidence rather
  than on spec, and **any MMAnswerBench or DocVQA figure** — the latter would settle whether Multimodal
  deserves the floor the previous version scored it below.