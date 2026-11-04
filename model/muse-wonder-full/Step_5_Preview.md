# Muse Wonder Full — findings by Step 5 Preview

- Source: Meta / Meta Superintelligence Labs (`muse-wonder-full-1.0`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full. Distinct SKU from **Muse Wonder** (`muse-wonder-1.0`) — Full is not a tier or effort setting of Wonder; it is a separate model available only inside Muse Code, while Wonder is the API-available sibling.
- **Short description:** Meta's most advanced model as of 2026-10-12, aimed at personal/professional agents, marathon planning, frontier coding in large repositories and advanced computer use. Introduces "Active Memory", which carries context across conversations so long sessions don't fragment under compaction.
- **Provider / access:** **Muse Code subscription only** — Power Usage ($50/month) or Maximum Usage ($200/month). **Not available on Meta Model API and not priced per token**; Meta's own pricing table shows no per-1M rate for `muse-wonder-full-1.0`. The $4.00/$0.20/$20.00 rates belong to the sibling `muse-wonder-1.0`. No OpenCode Zen route exists for Full (Zen lists `muse-wonder-1.0` at $4/$20).
- **Release / knowledge:** released 2026-10-12; knowledge cutoff **not disclosed**.
- **IDs:** `muse-wonder-full-1.0` (Muse Code subscription). No public API ID and no Free ID.
- **Context window:** 1M tokens, unchanged from Muse Spark 1.3. **Max output and knowledge cutoff are not published** (LLMLearner lists both as `—`).
- **Modalities:** text, image, **audio and video** input; text output (Artificial Analysis and LLMLearner agree on all four input modalities). Reasoning model with tool use, function calling, computer use, structured output and web search.
- **Pricing (as of 2026-11-04):** no per-token rate. Subscription floor $50/month (Power Usage, "20x more usage than the Everyday Usage plan") or $200/month (Maximum Usage, "80x more usage"). The only published Meta per-token rate in this family is Muse Wonder 1.0's $4 / $0.20 / $20 per 1M, which is the correct floor reference for a cost comparison.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Meta's official table is reproduced below (max effort). Artificial Analysis's independently measured values are listed alongside where they differ; LLMLearner's per-harness catalog is the third leg.

Agent / professional / tool use:

- Personal Superintelligence Index (Meta's internal composite of personal + knowledge work): **59.1** (#1 of the 2 Meta-indexed models)
- Terminal-Bench 4.0: **57.1%** (Meta) — tops Meta's comparison table, ahead of GPT-6 Astra (max) 57.9→ see note, Claude Fable 5.1 55.8, Muse Wonder 52.0. Caveat: LLMLearner ranks it **#10 of 69** on the global Terminal-Bench 4.0 leaderboard, so "new high" is scoped to Meta's comparison set
- AutomationBench-AA: **45.4%** (Meta, provider-reported) vs **71%** (Artificial Analysis at max) — a large harness conflict, kept as both
- OSWorld V2.1 (agentic computer use): **78.4%** partial score / **39.4%** binary — the binary figure is the honest one for pass/fail agent work
- MemoryBench (remembering context): **85.5%**
- JobBench (professional tool use): **75.3%**
- Harvey LAB-AA v1.1 (all-pass, legal agent work): **13.1%** (#1 of 12)
- Vals Finance Agent v2: **59.1%** (#6/75); EMB (Excel Modeling): **71.9%** (#10/76); Tax Agent Bench 43.0% (#25/69)
- GDPval-AA v2.1: **1,857 Elo** (#2/19; normalized 67.9%) — within the confidence intervals of Claude Opus 5.5 (max w/ fallback, 1,866) and Claude Sonnet 5.5 (1,838)
- AA-Briefcase: **1,729 Elo** (#3/14)
- GDP.pdf: **33.2%** (Meta) / **32.6%** (AA leaderboard) — #1 on AA's GDP.pdf at max
- HealthBench Professional (length-adjusted): **62.3%** (#7/15); MedScribe **89.3%** (#8/99); MedCode 49.9% (#18/97)
- Legal Research Bench: **53.4%** (#6/86); Public Benefits Bench v1.1: **73.8%** (#3/50); GDPx: **9.0** (#4/20); Agent Arena 10.7 (#7/29)
- AA Coding Agents Index (Muse Code, max): **68** — level with Claude Code + Sonnet 5.5 (max, 68), ahead of Claude Code + Opus 5.5 (66); up from 54 for Muse Code + Muse Spark 1.3
- MazeBench: **17%** — the clear weak spot
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- CritPt: **32.9%** (#1 of 134)
- SciCode: **62.6%** (#3/98)
- HLE: **53.6%** (#31/144)
- ProofBench v1.1 (Lean 4): **94.0%** (#10/53); MysteryMechanism: 35.1% (#10/29); Terminal-Bench-Science 0.1: **37.1%** (#10/34)
- AA-LCR: **83.7%**; MLCR-AA: **22.2%** (weak)
- AA-Omniscience Index: **30** (AA) / 30.6% (BenchLM); Accuracy **41.0%**; Hallucination rate **23%** (AA, max) — second-lowest of any model scoring 45+ on the index, behind only Gemini 4 Argon (high, 15%) — but BenchLM's AA-Omniscience v1.1 entry records **17.6%**, an index-version conflict
- Artificial Analysis Intelligence Index: **56** (v4.3, max, #3/16) / **49.7** (v5.0, #8/37) — non-comparable across the redesign; +8 points over Muse Spark 1.3 (max, 48) in v4.3 with only a 6-week release gap
- Vals Index v2.2: **66.8%** (#5/28)
- GPQA Diamond: **no verified public score found** — not published by Meta or carried by AA/LLMLearner/BenchLM for this model
- MRCR: **no verified public score found** (MemoryBench 85.5% is the closest long-context proxy)

Coding:

- DeepSWE 1.1: **79.0%** (#1 of 59)
- SWE-Marathon: **57.5%** (xhigh) (#2/14); ProgramBench: **59.0%** (#2/8); Code Migration: **61.0%** (#7/78)
- IOI (Vals v2): **79.8%** (#12/45)
- Vibe Code Bench 1-100: **34.0%** (#1/25); Vibe Code Bench v1.1: **86.0%** (#14/114)
- Bug Hunt Bench: 42.0 fixes
- SWE-bench Verified: **no verified public score found**

Multimodal:

- Input coverage is the widest of any model researched so far (text + image + audio + video), but measured multimodal depth is thin: only **GDP.pdf 33.2%** (#3/90) is recorded across all four trackers checked. No MMMU-Pro, GeoBench, Chartography or perception-benchmark numbers found.

### Normalized scores (1–100)

- **Tool use: 93/100.** Leads its comparison class on GDPval-AA (1,857 Elo), AA-Briefcase (1,729), Harvey LAB-AA all-pass (13.1%, #1) and the AA Coding Agents Index (68, level with Claude Code + Sonnet 5.5), with JobBench 75.3% and AutomationBench-AA 71% (AA). Capped by OSWorld binary scoring (39.4%), MazeBench (17%), the absence of any published τ³-Banking figure, and Terminal-Bench 4.0 ranking only #10/69 globally despite topping Meta's own table.
- **Reasoning: 91/100.** CritPt 32.9% (#1/134), SciCode 62.6% (#3), HLE 53.6% and Intelligence Index 56 (v4.3, +8 over Muse Spark 1.3 in six weeks) put it at frontier level, and its 23% hallucination rate is among the lowest measured anywhere. Capped by AA-Omniscience (index 30, accuracy 41%) — the weakest knowledge dimension in this trio — plus MLCR-AA 22.2%, no published GPQA Diamond and no MRCR figure.
- **Context window: 95/100.** 1M-token tier as required. Retrieval is mid-tier rather than the ≥98% that would earn a 100: MemoryBench 85.5% and AA-LCR 83.7% are the only measured long-context numbers, and no MRCR run is published. Max output is also undisclosed by Meta.
- **Multimodal: 90/100.** Text + image + audio + video input puts it in the methodology's 90–100 "audio in" tier — the joint-highest input coverage of any model researched. Held at the floor of that tier because output is text-only and only one multimodal benchmark (GDP.pdf 33.2%) is publicly recorded, so depth is largely unverified.
- **Coding: 96/100.** DeepSWE 79.0% (#1/59), SWE-Marathon 57.5% (#2/14), ProgramBench 59.0% (#2/8), SciCode 62.6% (#3) and an AA Coding Agents Index of 68 all clear the frontier reference; Meta reports tops on DeepSWE and SWE-Marathon in independent third-party runs. Capped only by Code Migration 61.0% (below GPT-6 Astra's 67.7%) and Vibe Code Bench v1.1 86.0%.
- **Cost efficiency: 60/100.** **No per-token rate is published** — the score is bounded, not verified: Meta publishes only a $50/month subscription floor (Power Usage) with capped plan allowances, and the only per-token rate in this family is the sibling Muse Wonder's $4/$0.20/$20, which costs $4.52 per Intelligence Index task. That rate sits between the methodology's ~$3/$15 (≈60) and $10/$50 (≈30) anchors, and no $0 or free tier exists. Treat this as an upper bound; the true figure could be materially lower on a heavy plan or higher for light use.
- **Overall Score: 93/100.** (93 + 91 + 95 + 90 + 96) / 5 = 93.0 → 93. Recommendation: the strongest Meta model researched so far and a genuine choice for agentic coding, marathon-length repository work and computer use — but only if the team can work inside Muse Code, since there is no API or per-token route and thus no way to integrate it into a custom pipeline. Verify the cost per task on your own workload before committing, and prefer GPT-6 Astra for breadth of published evidence.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-04
- Method: public internet research using Meta's official Muse Wonder model page and benchmark table as the primary source, cross-validated against Artificial Analysis's launch analysis (including its per-evaluation index breakdown), LLMLearner's 37-result catalog and BenchLM. Meta's comparison table was decoded column-wise and 9 of 14 Muse Wonder Full values were confirmed to match LLMLearner's independently curated numbers exactly or within rounding (Harvey LAB-AA 13.1, Finance Agent v2 59.1, AutomationBench-AA 45.4, JobBench 75.3, OSWorld 2.1 78.4, Terminal-Bench 4.0 57.1, DeepSWE 79.0, SWE-Marathon 57.5, HealthBench Pro 62.3), so the table mapping is treated as reliable. Scores are normalized 1–100 interpretations, not official vendor scores; conflicting figures are listed side by side with their harness.
- Reference URLs:
  - [Meta — Muse Wonder / Muse Wonder Full model page, benchmark table and pricing](https://dev.meta.ai/models/muse-wonder)
  - [Meta — Muse Wonder model card (PDF)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Artificial Analysis — Muse Wonder and Muse Wonder Full: a material jump in intelligence](https://artificialanalysis.ai/articles/muse-wonder)
  - [LLMLearner — Muse Wonder Full (37 curated benchmark results)](https://llmlearner.com/models/muse-wonder-full)
  - [llm-stats — Muse Wonder Full benchmarks, pricing & context window](https://llm-stats.com/models/muse-wonder-full)
  - [BenchLM — Muse Wonder Full benchmark scores & performance](https://benchlm.ai/models/muse-wonder-full)
  - [OpenCode Zen — model list and Console pricing (Muse Wonder 1.0 rate)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
