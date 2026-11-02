# Muse Spark 1.2 — findings by Qwen 3.8 Max

- Source: Meta (`muse-spark-1.2`; AA id `muse-spark-1-2` "(xhigh)" reasoning variant)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** this is a **provenance-lift** pass, not a downgrade. The April draft was already unusually well-anchored (AA launch + Vals + LiveBench via the CodexSera review), and its key discipline — retiring the launch **v4.1.1 Index 54** for the rebased **39.58** — survives cleanly: AA's current **v5.0 Intelligence Index reads 39.6**, so the draft's ladder was right and stays. Two independent gaps the draft had to hedge now close **upward**. **(1) Modality:** the draft called it text-centric ("no discrete multimodal benchmark… scored on asserted-but-unquantified evidence"); **AA's spec now confirms full omni input — text, image, speech and video → text** — a genuine capability, not an assertion, so **Multimodal 77 → 80** (breadth confirmed, per-benchmark visual scores still thin: only Design Arena / VulcanBench exist, no MMMU-Pro). **(2) Long context & coding:** **AA-LCR 79.0** closes the draft's "no retrieval score" gap (**Context 89 → 90**), and **Vals SWE-bench 86.6 / AA Coding Index 72.2** partly close its "absent from every verified agentic-coding leaderboard" caveat (**Coding 83 → 84**). Two vendor-vs-independent corrections to note but not score-change: **Speed is 316.4 tok/s (#2 of 195)**, not the drafted ~270, and **Vals Terminal-Bench 2.1 (69.7)** undercuts Meta's charted 82.9 — consistent with the draft's existing "vendor = upper bound" discipline, so **Tool 83 / Reasoning 83 hold**. AA now marks the model **deprecated** (superseded by Muse Spark 1.3), and the honesty read moved slightly (**AA-Omniscience accuracy 45.4 / hallucination 33.3** vs the drafted 38/28). **Overall 83 → 84.**

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's third Muse Spark release in four months (launched alongside Muse Code), a coding-specialised point release. A strong **second-tier** model priced like a budget one: fast (~316 tok/s, #2/195 on AA), cheap ($1.25/$4.25), 1M-token context, with its clearest gain in agentic knowledge work (GDPval-AA v2 +260 Elo to #5). Independent harnesses place it further from the frontier than Meta's own chart suggests, and it has documented long-horizon reliability (hallucination) failures. Superseded by Muse Spark 1.3 (Sept 2, 2026) at the same list price.
- **Provider / access:** Meta first-party API at launch; Muse Code (agentic coding product). Closed-weights at launch — Zuckerberg announced (2026-08-10) that Meta will open-source the weights, but they are not yet released (no date).
- **Release / knowledge:** Released 2026-08-05. Architecture, parameter count and knowledge cutoff are **not published** by Meta.
- **IDs:** `meta/muse-spark-1.2` (xhigh reasoning effort).
- **Context window:** 1,048,576 (1M) tokens input; ~943,718 tokens max output (an unusually large output cap). No verified long-context retrieval (MRCR/needle) score published.
- **Modalities:** **text, image, speech and video in → text out (full omni input, AA-confirmed 2026-11-02 — the draft's text-centric hedge is retired)**; discrete multimodal *benchmark scores* remain thin (no MMMU-Pro / CharXiv published; Design Arena / VulcanBench only); reasoning yes (xhigh); tool calls yes (shell + web browsing in an agentic loop, via AA's Stirrup harness).
- **Pricing (as of 2026-10-21):** $1.25 / 1M input, $4.25 / 1M output, cache hits $0.15 / 1M — unchanged from Muse Spark 1.1.
- **Architecture:** proprietary / undisclosed (closed weights at launch; open-sourcing announced but pending).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2 (Elo, general agentic knowledge work): **1,631** — #5 of all AA-benchmarked models (+260 Elo from 1.1's 1,371; behind Claude Opus 5 1,852, GPT-5.6 Sol 1,730, Kimi K3 1,685; ahead of Claude Opus 4.8 1,588)
- Terminal-Bench v2.1: **80%** (AA-measured, +2 from 1.1's 78%); τ³-Banking (agentic tool use): **27%** (+2 from 25%)
- LiveBench agentic coding: **57.6** — its weakest column and a **regression** from 1.1's 58.5
- Reliability caveat: a documented hands-on failure where the agent researched a non-existent project, built its plan on the fabrication and could not recover ("cannot trust it for longer-running work")

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **54** at launch (v4.1.1 basket — tied with GPT-5.5 xhigh 55 / Grok 4.5 high 54, behind Opus 5 61, Fable 5 60, GPT-5.6 Sol 59, Kimi K3 57); **39.58** on the rebased v4.3.2 index (Oct 2026, vs Opus 5's 50.78) — the two are not convertible (AA swapped component evals in Sept 2026)
- LiveBench: overall **78.0**, reasoning **90.0**, maths **91.2** (strong)
- Humanity's Last Exam: **44%** (-1 from 1.1); CritPt (research physics): **18%** (+3); SciCode: **56%** (-2)
- AA-Omniscience: **22** (up from 18) — hallucination rate fell 38%→**28%** but accuracy slipped 41%→**38%** as the attempt rate dropped to 67% (heavy abstention)

Coding (all Meta-run / vendor-claimed unless noted):

- Terminal-Bench 2.1: **82.9%** (Meta claim, 2nd to Claude Opus 5's 86.7%); independent estimate ~**79–80%** (AA; and applying Meta's own 1.1 over-claim correction)
- DeepSWE v1.1: **59.3%** (2nd to Opus 5's 65.0%; GPT-5.6 Terra 64.8%, Grok 4.5 56.6%, 1.1 was 53.0%)
- Meta Internal Coding Bench: **70.6%** (2nd to Opus 5's 79.4%); kernel-generation: 4th of 6
- Vals Index (common harness): **71.88%** — #5 behind Fable 5, Opus 5, Kimi K3, GPT-5.6 Sol, with the lowest cost/test in the top five (~$0.69)
- **Absent from every verified agentic-coding leaderboard** (Terminal-Bench, SWE-bench, SWE-rebench, Aider)

Multimodal:

- Meta's eval methodology covers multimodal + health knowledge, but **no discrete multimodal benchmark** (MMMU-Pro / OmniDocBench / CharXiv) is published in accessible sources.

Long context:

- 1M-token window with ~944K max output; no published retrieval (MRCR/needle) score.

> Provenance: Artificial Analysis (launch analysis, 2026-08-05 — Meta shared early access) and CodexSera's critical benchmark review (2026-08-07, updated Oct 2026) comparing Meta's vendor-run chart against Vals AI, LiveBench and AA's rebased index. Meta published results as chart images (no harness config / per-task / raw files), so its figures cannot be independently recomputed; treat vendor scores as an upper bound. Cost-per-task data is AA/Vals-reported.

Independent (**added 2026-11-02 — Artificial Analysis id `muse-spark-1-2` "(xhigh)" reasoning variant, DEPRECATED (superseded by Muse Spark 1.3); BenchLM Overall 65.41, #28/1004, 24 of 724; Vals AI + AA per-eval harnesses**):

- **AA Intelligence Index (v5.0): 39.6** — corroborates the draft's rebased 39.58 (the launch v4.1.1 "54" stays retired); AA's own composite is now N/A because the model is deprecated (only the 10k workload continues).
- **Speed: 316.4 tok/s (#2 of 195)** — supersedes the drafted ~270; **$1.25/$4.25, 88% cache discount** confirmed; cost-per-Index-task now N/A (deprecated).
- **AA spec: input = text, image, speech, and video → text; 1M context** — the draft's text-centric hedge is retired; genuine omni input.
- Long context: **AA-LCR 79.0** (closes the draft's "no retrieval score published" gap).
- Knowledge / reasoning: **AA-GPQA-Diamond 90.4**, **AA-HLE 45.5**, **CritPt 17.7** (≈ draft's 18), **AA-Omniscience Index 27.2 / accuracy 45.4 / hallucination 33.3**, **MMLU-Pro (Vals) 88.3**.
- Agentic: **AA Agentic Index 44.0**, **GDPval-AA normalized 48.6**, **AA EnterpriseOps-Gym 47.3**, **Terminal-Bench 2.1 (Vals) 69.7** (undercuts Meta's charted 82.9 and AA's ~80), **MazeBench 0%**.
- Coding: **AA Coding Index 72.2**, **SWE-bench (Vals) 86.6**, **AA-SciCode 57.4**, **VulcanBench v3 87.0**, **FrontierSWE v2 12.0**.
- Multimodal: only **Design Arena (website, OpenRouter) Elo 1312** and the effort-study **VulcanBench**; **no MMMU-Pro / CharXiv** — breadth confirmed by AA spec, quality still barely quantified.

### Normalized scores (1–100)

- **Tool use: 83/100.** *(held.)* GDPval-AA v2 #5 (1,631, ahead of Opus 4.8) remains the dominant independent agentic signal; **AA Agentic Index 44.0** and **GDPval-AA normalized 48.6** place it mid-tier-to-strong. Capped by the **Vals Terminal-Bench 2.1 69.7** (well under Meta's charted 82.9 — a fresh vendor-over-claim confirmation), τ³-Banking 27%, the LiveBench agentic-coding regression (57.6), **MazeBench 0%**, and the documented long-horizon hallucination failure.
- **Reasoning: 83/100.** *(held — the independent layer corroborates the draft's second-tier placement.)* LiveBench reasoning 90.0 / maths 91.2 and **AA-HLE 45.5 / AA-GPQA-Diamond 90.4 / CritPt 17.7** confirm solid-but-not-frontier; heavy abstention and **AA-Omniscience accuracy 45.4 / hallucination 33.3** keep it below the frontier. AA's current **v5.0 Index 39.6** matches the draft's rebased 39.58 (launch "54" stays retired).
- **Context window: 90/100.** *(89 → 90 — provenance lift.)* A full 1M-token window with an exceptional ~944K max-output cap, and **AA-LCR 79.0** now closes the draft's "no verified long-context retrieval benchmark" caveat. Held below the low-90s only because architecture/cutoff remain undisclosed.
- **Multimodal: 80/100.** *(77 → 80 — provenance lift.)* **AA confirms genuine omni input — text, image, speech and video → text** — so the capability is verified, not merely asserted as the draft assumed; it stays modest because per-benchmark *quality* is still barely quantified (only Design Arena Elo 1312 and VulcanBench; **no MMMU-Pro / CharXiv**).
- **Coding: 84/100.** *(83 → 84 — provenance lift.)* A strong second-tier coder now partly grounded by independent harnesses: **SWE-bench (Vals) 86.6**, **AA Coding Index 72.2**, **AA-SciCode 57.4** — the draft's "absent from every verified agentic-coding leaderboard" caveat is partly closed. Still capped because Meta's charted Terminal-Bench 82.9 over-reads the independent 69.7–80 range, **FrontierSWE v2 12.0** is weak, and LiveBench agentic coding regressed.
- **Cost efficiency: 85/100.** $1.25/$4.25 with $0.15 cache hits was the cheapest model in the top tier at launch (~$0.40/AA-task, ~$0.69/Vals-test, near the Pareto frontier; Muse Code audited 222 PRs for ~$0.10 vs ~$32 on a frontier model); held below 90 because by Oct 2026 GLM 5.3 Flash, MiMo-V2.6-Pro and GPT-6.1 Sol all beat it on capability **and** cost-per-task simultaneously.
- **Overall Score: 84/100.** *(83 → 84 — a provenance lift, not a capability change.)* Mean of Tool 83 + Reasoning 83 + Context 90 + Multimodal 80 + Coding 84 = 420/5 = 84.0 → 84. The lift is entirely from independent data closing three gaps the April draft had to hedge (omni input, long-context retrieval, verified coding leaderboards) — the model itself is unchanged and AA now marks it **deprecated** (superseded by Muse Spark 1.3 at the same price). Best fit: bounded, verifiable, high-volume coding/agent work where its **316 tok/s** speed, 1M context and budget pricing win outright; long-horizon autonomous tasks and maximum-capability coding still favor the frontier (Claude Opus 5).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Artificial Analysis' Muse Spark 1.2 launch analysis; CodexSera's critical benchmark review cross-checking Meta's vendor chart against Vals AI, LiveBench and AA's rebased Intelligence Index v4.3.2); scores are normalized 1–100 interpretations, not official vendor scores.
- Re-research (2026-11-02): refreshed from Artificial Analysis (id `muse-spark-1-2` "(xhigh)" reasoning variant, **deprecated** — composite Index/Cost N/A, only the 10k workload continues), BenchLM (`muse-spark-1-2`, 65.41 #28/1004) and Vals AI. Conflict handling: independent harnesses govern — **Vals Terminal-Bench 2.1 69.7** and **AA Index 39.6** over Meta's charted 82.9 / launch v4.1.1 54; vendor cells kept as an upper bound. Guards: modality lifted on the AA spec confirmation (text+image+speech+video), but per-benchmark multimodal *quality* stays unquantified (no MMMU-Pro); Speed corrected 270→316 tok/s (#2/195) but Speed is not scored; the model is deprecated, so cost-per-task is not current.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
