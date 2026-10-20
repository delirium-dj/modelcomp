# Muse Spark 1.1 — findings by Step 5 Preview

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July 2026 model (released 2026-07-09) — a multimodal reasoning model built for agentic tasks, and Meta's first paid developer API (Meta Model API, public preview, US). +8 Intelligence-Index points over Muse Spark 1.0 in three months (43 → 51), with the gains concentrated in coding, scientific reasoning and knowledge. Field-leading MCP-Atlas (88.1%) and HLE-with-tools (62.1%); its advertised 1M context is undercut by poor measured long-context retrieval (MRCR v2 54.1).
- **Provider / access:** Meta Model API `muse-spark-1.1` (`api.meta.ai/v1`; OpenAI Chat Completions, OpenAI Responses and Anthropic Messages formats); Meta AI app / meta.ai Thinking mode; OpenRouter `meta/muse-spark-1.1`. No OpenCode Zen Free ID found (paid; $20 one-time free credits).
- **Release / knowledge:** 2026-07-09 (API public preview); EU/global API availability later. Knowledge cutoff not disclosed.
- **IDs:** `muse-spark-1.1` (Meta Model API), `meta/muse-spark-1.1` (OpenRouter).
- **Context window:** 1,048,576 tokens, flat-priced with no long-context premium; actively self-managing (remembers actions, retrieves earlier work, compacts); 131,072 max output.
- **Modalities:** Text, image, video, audio and PDF in → text out. `reasoning_effort` minimal → xhigh (reasoning tokens bill as output); built-in web search with citations ($2.50/1K queries); structured output; parallel tool calling.
- **Pricing (as of 2026-10-09):** $1.25 / MTok input, $4.25 output; cached input $0.15 (88% off, automatic); no batch endpoint; 60 RPM/2M TPM free tier, 3,000 RPM/4M TPM paid. AA estimates ~$0.26–0.29 per Intelligence-Index task — among the cheapest at its intelligence level; 114 tok/s median output, ~21s to first answer token.
- **Architecture:** Proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **88.1%** (Meta report — #1/48, 100th pct, BenchmarkList 2026-10-07; vs Opus 4.8 82.2, GPT-5.5 75.3)
- JobBench: **54.7%** (#1 in table; Opus 4.8 48.4)
- Toolathlon-Verified: **75.6%**; DeepSearchQA: **84.9%**; WebArena-Verified: **69%**
- OSWorld-Verified: **80.8%** (Meta; Opus 4.8 83.4); **OSWorld 2.0: 14.2%**
- Terminal-Bench 2.1: **80.0%** (Meta's harness) / **77.9–78%** (AA) / **69.3%** (Vals AI Terminus-2 — an 11-point independent gap)
- Terminal-Bench 4.0: **6.06%** (AA)
- GDPval-AA: **Elo 1375** (Meta) / **35.7%** (AA); BenchmarkList index reads **Elo 1381** (#50/352, 86th pct); Tau3-Banking 31.8% (#33/176)
- AutomationBench-AA: **42.8%**; AA Agentic Index: **27.5%**
- Finance Agent v2: **57.2%** (#1 in table); Cybench: **92.9% pass@1** (near-ceiling CTF); CyberGym 59.0%; **new weak rows (2026-10-19): ExploitGym 0.8%** (BenchLM)
- BenchLM composite (2026-10-19): **66.08/100** overall, #33 of 959 models, 40 of 666 benchmarks covered — every file row reconfirmed (MCP-Atlas 88.1%, Toolathlon 75.6%, OSWorld 80.8%, DeepSearchQA 84.9%, JobBench 54.7%, TB2.1 80.0%/69.3%, GDPval 35.6%/1,375, SWE-Pro 61.5%, AA Coding Index 71.3%, AA-LCR 77.7%, MRCR 1M 54.1%, AA-HLE 46.2%, AA-Omniscience 28.1%) plus new rows CritPt **15.1%** and HealthBench Professional **59.3%**; one discrepancy flagged — BenchLM carries an AA Index row of **33.7** while the file records **50.62** as the current rebased reading (verified via benchmarklist 2026-10-07; BenchLM's row appears stale). No score change warranted.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (v4.1, xhigh — tied with GLM-5.2/GPT-5.4/GPT-5.6 Luna, +8 over Muse Spark 1.0) / **50.62** on the current rebased v4.3.2 (#22/427, 95th pct — BenchmarkList 2026-10-07; the earlier "33.7" reading was superseded)
- GPQA Diamond: **89.8%** (AA) / **91.2%** (Vals)
- HLE: **62.1% with tools** (#1 in table) / **52.2% without tools** (Meta); AA-HLE **46.2%**
- SciCode: **58.8%** (AA — #3 of all models benchmarked, behind Fable 5's 60% and Gemini 3.1 Pro's 59%)
- MMLU-Pro: **88.7%** (Vals); AA-Omniscience index **28.1**, accuracy 52.1%, **non-hallucination rate 62%** (beats every GPT-5.x in the set)
- LiveBench: overall **75.3%** (reasoning 87.7%, mathematics 87.1%, coding 77.2%, data analysis 72.5%, language 74.3%, instruction following 69.6%, agentic coding 58.5%)

Coding:

- SWE-bench Pro: **61.5% ±3.1** (Scale AI, 731 public tasks — #23/58; between GPT-5.5's 58.6% and Opus 4.8's 69.2%)
- SWE-bench Verified: **82.0%** (Vals — #11/72)
- DeepSWE v1.1: **53.3%** (Meta) / **53.3%** (#39/52, 25th pct — BenchmarkList 2026-10-07; DataCurve 53.0%; Opus 4.8 59.0, GPT-5.5 67.0)
- LiveCodeBench: **85.9%** (Vals — #21/123); **Vibe Code Bench v1.1 72.2% (#12/75)**; AA Coding Index: **71.3**
- Meta Internal Coding Bench: "competitive with leading alternatives" (no public number)

Multimodal:

- CharXiv Reasoning: **88.4%** (slightly below Muse Spark 1.0's 88.9%); BabyVision: **76.3%** (Opus 4.8 81.2, GPT-5.5 83.6)

Long context:

- 1M-token window, flat-priced; **AA-LCR: 77.7% — #68/408, 84th pct** (BenchmarkList 2026-10-07; the earlier "63%, 25th of 26" reading was superseded; Kimi K3 leads at 88.7%); **MRCR v2: 54.1** in Meta's own report (GPT-5.5 74.0) — retrieval remains the model's weakest measured dimension

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 88.1% (table lead), OSWorld-Verified 80.8%, Toolathlon 75.6% and DeepSearchQA 84.9% are genuinely strong agentic evidence; capped by GDPval-AA 35.7%, AutomationBench-AA 42.8%, Terminal-Bench 4.0 6.06%, OSWorld 2.0 14.2% and the 11-point Vals gap on TB2.1 (80.0 vendor vs 69.3 independent).
- **Reasoning: 84/100.** GPQA 89.8–91.2%, HLE 52.2% without tools (62.1% with), SciCode 58.8% (#3 overall) and the AA Index at 51 (v4.1) / 50.62 rebased (#22/427) are frontier-band, with a best-in-set 62% non-hallucination rate; capped by AA-HLE 46.2% and CritPt/GDPval gaps to the very top tier.
- **Context window: 90/100.** 1,048,576 tokens at flat $1.25 pricing with 131K output and active self-compaction is the ≥1M tier; the 95–100 band requires verified retrieval strength, and both independent (AA-LCR 77.7%, #68/408) and Meta's own MRCR v2 (54.1 vs GPT-5.5's 74.0) show retrieval is the weak spot.
- **Multimodal: 88/100.** Text + image + video + audio + PDF in → text out is the top modality band (audio input), anchored by CharXiv 88.4%, BabyVision 76.3% and native perception across the plan-execute-verify loop; no non-text output and BabyVision trailing Opus 4.8/GPT-5.5 keep it below 90.
- **Coding: 78/100.** SWE-bench Verified 82.0% (Vals), SWE-bench Pro 61.5%, LiveCodeBench 85.9% and Coding Index 71.3 are frontier-adjacent; capped by DeepSWE 53.3% (well behind Opus 4.8's 59.0 and GPT-5.5's 67.0), Terminal-Bench 2.1 at 69.3% independent, and losing every coding row in Meta's own comparison table.
- **Cost efficiency: 88/100.** $1.25/$4.25 per MTok with $0.15 automatic cache reads maps to the methodology's ~$1.25/$4.25 ≈ 88 tier — the cheapest 1M-context frontier-adjacent API at launch, with a measured ~$0.26–0.29 per Index task; no batch discount and 94M output tokens per Index run temper it.
- **Overall Score: 84/100.** Best-fit recommendation: the price-efficiency agentic pick — field-leading MCP-Atlas tool orchestration and HLE-with-tools at $1.25/$4.25 with a flat-priced 1M window; add retrieval for long-context work and route hard SWE-Pro coding to Opus/Fable-class models.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) via BenchLM (composite 66.08/100, #33/959, 40/666; Artificial Analysis has no muse-spark-1.1 page on the natural slug, 404): every file row reconfirmed (MCP-Atlas 88.1%, Toolathlon 75.6%, OSWorld 80.8%, DeepSearchQA 84.9%, JobBench 54.7%, TB2.1 80.0%/69.3% Vals, GDPval 35.6%/1,375, SWE-Pro 61.5%, AA Coding Index 71.3%, AA-LCR 77.7%, MRCR 1M 54.1%, AA-HLE 46.2%, Omniscience 28.1%) plus new rows ExploitGym 0.8%, CritPt 15.1%, HealthBench Professional 59.3% — no score change warranted; one discrepancy flagged (BenchLM's stale AA-Index 33.7 row vs the file's verified 50.62 rebased reading). Second-pass verification (2026-10-10) cross-referenced benchmarklist.com (72 primary-source results, updated 2026-10-07 — AA Intelligence Index 50.62 #22/427, AA-LCR 77.7% #68/408, MCP-Atlas 88.1% #1/48, SWE-bench Verified 82.0% #11/72, DeepSWE 53.3% #39/52, Vibe Code 72.2% #12/75, HLE 52.2% #13/478, MMMU-Pro 86.6% #15/79, SciCode 58.8% #13/296). Prior pass (2026-10-09) used Meta AI blog + Muse Spark 1.1 evaluation report, Artificial Analysis article/tables, Vals AI, Scale AI, LiveBench, eesel AI, writingmate, sdd.sh, RankLLMs, BenchLM.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
