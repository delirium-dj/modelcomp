# Muse Spark 1.3 — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.3 (API IDs `muse-spark-1.3` and `muse-spark-1.3-contributor`; Contributor/Free/Max are the same weights)
- Date: 2026-10-16 (UTC) — deep rewrite pass; re-verified 2026-10-18; enriched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`muse-spark-1-3`) re-read on 2026-10-23 now carries **35 source-displayable rows** (was 20 on 2026-10-18) and surfaced independent rows the launch file lacked: **Vals Terminal-Bench 2.1 72.3%** (independent), AA Agentic Index 55.7%, AA Tau3-Banking 50.5%, **AA-LCR 83.0%**, CritPt 24.9%, AA-GPQA Diamond 93.5%, AA-HLE 48.7%, AA-Omniscience accuracy 43.6% / hallucination 32.9% / index 25.0%, FrontierMath v2 T1–3 74.0% / Tier-4 46.3%, CWE-bench v1 55.0%, ApprenticeBench 19%, **FrontierSWE v2 25.8%**, MazeBench 0%, Bug Hunt 32.2 fixes, Design Arena Website 1356, Gray Swan IPI 15.9%.
> **New conflict surfaced:** independent **Vals TB2.1 72.3%** sits ~13–16 pts below the AA (85–86%) and Meta (88.8%) rows — agentic tool use on this checkpoint is strongly harness-sensitive. Weak assistant-style rows (ApprenticeBench 19%, MazeBench 0%) confirm a specialist coding/agentic profile rather than a general agent.
> **Scores trimmed this pass: Tool use 92→90, Reasoning 91→90, Coding 93→92; Overall 91→90.** Context (MRCR unchanged), Multimodal and Cost unchanged.
> Sources this pass: https://benchlm.ai/models/muse-spark-1-3 · https://www.vals.ai/models/meta_muse_spark_1_3 · https://artificialanalysis.ai/models/muse-spark-1-3 · https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2 · https://cwe-bench.com/

> **Re-verified 2026-10-18.** BenchLM (`muse-spark-1-3`, 20 rows) assigned **no overall score** (unranked); no new independent benchmark surfaced and the prior deep-pass rows stood. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources re-run).
> Confirmed independent data this pass: Artificial Analysis Terminal-Bench 2.1 **85% (xhigh) / 86% (max)**, Tau3-Banking **47% / 52% (max, #1)**, GDPval-AA v2 **1709 / 1754 Elo**, HLE **47% / 49%**, SciCode **58.8%**, AA Coding Index **75.8**. Newly captured this pass: **MRCR v2 98.5% (256K–512K) / 98.1% (512K–1M)** and CursorBench 4.0 **41.6** (Meta scorecard via BenchLM/Cursor) — the previous file recorded no long-context retrieval number, so 1M recall is now independently evidenced. **BridgeBench** ranks it #8/27 (606), the top non-Claude/OpenAI/GPT-6 entry.
> **Conflicts surfaced:** (1) AA Intelligence Index reads **62 (launch, v4.1.1)** but **48 (max) / 45 (xhigh)** on the current **v4.3.2** page — an index-basket rebase, not a model change; never compare across versions. (2) Max output is reported as **943,718 (Meta/CloudPrice/LLM-Stats)**, **131,072 (AA)** and **128K (LLM Reference)** — unresolved; LLM-Stats now lists **1.0M in / 943.7K out**, supporting the ~944K figure. (3) Audio input is listed by Meta/CloudPrice but flagged "not fully supported" by BridgeBench; treat 1.3 as text/image/video/PDF-in. (4) Meta's "improvement" framing omits the **Vals Finance Agent v2 regression** (1.3 below 1.2).
> Sources: https://research.meta.ai/blog/introducing-muse-spark-1-3 · https://dev.meta.ai/models/muse-spark · https://artificialanalysis.ai/articles/muse-spark-1-3 · https://artificialanalysis.ai/models/muse-spark-1-3 · https://benchlm.ai/models/muse-spark-1-3 · https://www.bridgebench.ai/leaderboard/muse-spark-1-3 · https://www.datacamp.com/blog/muse-spark-1-3 · https://www.techrepublic.com/article/news-meta-muse-spark-1-3-ai-coding-2026/

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' closed, API-only multimodal reasoning model for long-horizon agentic, multi-agent and coding work. Its defining feature is a second SKU up to ~21× cheaper because Meta trains on your prompts and completions.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`), IDs `muse-spark-1.3` and `muse-spark-1.3-contributor`. Also reachable via OpenRouter and Google Vertex partner preview. No downloadable weights.
- **Release / knowledge:** 2026-09-02. No knowledge cutoff published.
- **IDs:** `muse-spark-1.3`, `muse-spark-1.3-contributor`; no Zen Free ID.
- **Context window:** 1,048,576 input tokens (1M). Max completion disputed (LLM-Stats lists ~943.7K out; see conflicts).
- **Modalities:** text, image, video, PDF input; text out. Audio documented as degraded — not credited.
- **Reasoning:** mandatory, effort minimal→xhigh (default medium); forced tool calls; JSON-schema output; automatic prefix caching.
- **Pricing (as of 2026-10-24):** standard **$1.25 in / $0.15 cached / $4.25 out** per 1M; **contributor $0.10 in / $0.002 cached / $0.20 out** (Meta trains on prompts/completions).
- **Architecture:** proprietary and undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85% (xhigh) / 86% (max)** — independent AA; **88.8%** Meta scorecard; **72.3%** independent **Vals** (conflict)
- Tau3-Banking: **47% (xhigh) / 52% (max, #1)** — AA; AA Tau3-Banking leaderboard **50.5%**
- GDPval-AA v2: **1709 (xhigh) / 1754 (max)** Elo — AA; Meta scorecard 1754; AA normalized **59.0%**
- AA Agentic Index **55.7%**; OSWorld 2.0 66.9%, JobBench 64.9%, DeepSearchQA 89.4%, AutomationBench 49.4% (Meta scorecard)
- ApprenticeBench **19%** (NeoCognition); MazeBench **0%** (ASCII mode) — assistant-style weak spots
- Vals Finance Agent v2 **58.90% / 59.96%** — independent, below Muse Spark 1.2's 60.60%

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA) / 94% (Meta via AA) / 87% (llm-stats) — spread
- HLE: **47% (xhigh) / 49% (max)**, AA-HLE **48.7%**; CritPt **24.9%**
- SciCode: **58.8%** (AA); AA Coding Index 75.8; AA-LCR **83.0%**
- FrontierMath v2 Tiers 1–3 **74.035%** / Tier-4 **46.341%** (Epoch AI)
- AA-Omniscience: accuracy **43.6%**, hallucination **32.9%**, index **25.0%**
- AA Intelligence Index: **62** (launch, v4.1.1) vs **48.1** (current v4.3.2) — conflict/version

Coding:

- DeepSWE v1.1: **75.4** (Meta scorecard); SWE-Atlas Codebase QnA 59.4; Terminal-Bench 2.1 88.8 (self)
- CursorBench 4.0 **41.6** (Cursor, $2.64/task); Bug Hunt Bench **32.2 fixes**; FrontierSWE v2 **25.8%** (Proximal)
- CWE-bench v1 **55.0%** (Collinear); BridgeBench overall 606 (#8/27)
- SWE-Bench Verified 79%, LiveCodeBench 76%, Aider Polyglot 73% (mixed/unverified)

Long context:

- MRCR v2 **98.5% (256K–512K) / 98.1% (512K–1M)** — near-saturated retrieval across the full 1M window (Meta scorecard via BenchLM); GPT-5.6 Sol falls to 91.5/73.8 over the same spans
- Design Arena Website **1356** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** AA TB2.1 85–86%, Tau3 50.5% (max 52% #1) and GDPval-AA 1754 confirm frontier tool use; trimmed from 92 because the independent **Vals TB2.1 (72.3%)** conflicts sharply and ApprenticeBench 19% / MazeBench 0% cap the general-agent ceiling.
- **Reasoning: 90/100.** GPQA 93.5–94%, AA-LCR 83% and HLE 47–48.7% are frontier-level; the rebased AA Index (48.1 on v4.3.2), a 32.9% Omniscience hallucination rate and low CritPt (24.9%) keep it under 92.
- **Context window: 97/100.** 1,048,576 input with ~98% MRCR retrieval at 512K–1M (retrieval-verified 1M band); held under 100 only because the retrieval row is vendor-side.
- **Multimodal: 83/100.** Text + image + video + PDF in (video band), text out; audio is documented as degraded, so not credited.
- **Coding: 92/100.** DeepSWE 75.4, TB2.1 88.8 and SciCode 58.8 clear the frontier refs; trimmed from 93 because CursorBench 41.6 is middling and FrontierSWE v2 25.8% is weak on an independent harness.
- **Cost efficiency: 98/100.** $0.10/$0.20 per 1M on the contributor tier (~97–99 band); the price is training-data consent.
- **Overall Score: 90/100.** (90 + 90 + 97 + 83 + 92) / 5 = 90.4 → 90. Best fit: top-end agentic coding/multi-agent on the contributor SKU, accepting that prompts train Meta models and that agentic scores swing widely by harness.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-24
- Method: second-pass enrichment over deep rewrite-pass public internet research (Meta dev model page and launch blog, Artificial Analysis launch article + current model page + Tau3 leaderboard, BenchLM re-read 2026-10-23, Vals AI model page, Epoch AI FrontierMath, Collinear CWE-bench, LLM-Stats). New independent Vals TB2.1, AA-LCR/Omniscience and Epoch rows were promoted; the AA index rebase, the Vals-vs-AA TB2.1 spread and the Muse 1.2→1.3 finance regression are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
