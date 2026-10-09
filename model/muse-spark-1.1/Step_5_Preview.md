# Muse Spark 1.1 — findings by Step 5 Preview

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July 2026 model (released 2026-07-09) — a multimodal reasoning model built for agentic tasks, and Meta's first paid developer API (Meta Model API, public preview, US). +8 Intelligence-Index points over Muse Spark 1.0 in three months (43 → 51), with the gains concentrated in coding, scientific reasoning and knowledge. Field-leading MCP-Atlas (88.1%) and HLE-with-tools (62.1%); its advertised 1M context is undercut by poor measured long-context retrieval (AA-LCR 63%, 25th of 26).
- **Provider / access:** Meta Model API `muse-spark-1.1` (`api.meta.ai/v1`; OpenAI Chat Completions, OpenAI Responses and Anthropic Messages formats); Meta AI app / meta.ai Thinking mode; OpenRouter `meta/muse-spark-1.1`. No OpenCode Zen Free ID found (paid; $20 one-time free credits).
- **Release / knowledge:** 2026-07-09 (API public preview); EU/global API availability later. Knowledge cutoff not disclosed.
- **IDs:** `muse-spark-1.1` (Meta Model API), `meta/muse-spark-1.1` (OpenRouter).
- **Context window:** 1,048,576 tokens, flat-priced with no long-context premium; actively self-managing (remembers actions, retrieves earlier work, compacts); 131,072 max output.
- **Modalities:** Text, image, video, audio and PDF in → text out. `reasoning_effort` minimal → xhigh (reasoning tokens bill as output); built-in web search with citations ($2.50/1K queries); structured output; parallel tool calling.
- **Pricing (as of 2026-10-09):** $1.25 / MTok input, $4.25 output; cached input $0.15 (88% off, automatic); no batch endpoint; 60 RPM/2M TPM free tier, 3,000 RPM/4M TPM paid. AA estimates ~$0.26–0.29 per Intelligence-Index task — among the cheapest at its intelligence level; 114 tok/s median output, ~21s to first answer token.
- **Architecture:** Proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **88.1%** (Meta report — #1 in its comparison table, vs Opus 4.8 82.2, GPT-5.5 75.3)
- JobBench: **54.7%** (#1 in table; Opus 4.8 48.4)
- Toolathlon-Verified: **75.6%**; DeepSearchQA: **84.9%**; WebArena-Verified: **69%**
- OSWorld-Verified: **80.8%** (Meta; Opus 4.8 83.4); **OSWorld 2.0: 14.2%**
- Terminal-Bench 2.1: **80.0%** (Meta's harness) / **77.9–78%** (AA) / **69.3%** (Vals AI Terminus-2 — an 11-point independent gap)
- Terminal-Bench 4.0: **6.06%** (AA)
- GDPval-AA: **Elo 1375** (Meta) / **35.7%** (AA)
- AutomationBench-AA: **42.8%**; AA Agentic Index: **27.5%**
- Finance Agent v2: **57.2%** (#1 in table); Cybench: **92.9% pass@1** (near-ceiling CTF); CyberGym 59.0%

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (v4.1, xhigh — tied with GLM-5.2/GPT-5.4/GPT-5.6 Luna, +8 over Muse Spark 1.0) / **33.7** on the rebased v4.3.2
- GPQA Diamond: **89.8%** (AA) / **91.2%** (Vals)
- HLE: **62.1% with tools** (#1 in table) / **52.2% without tools** (Meta); AA-HLE **46.2%**
- SciCode: **58.8%** (AA — #3 of all models benchmarked, behind Fable 5's 60% and Gemini 3.1 Pro's 59%)
- MMLU-Pro: **88.7%** (Vals); AA-Omniscience index **28.1**, accuracy 52.1%, **non-hallucination rate 62%** (beats every GPT-5.x in the set)
- LiveBench: overall **75.3%** (reasoning 87.7%, mathematics 87.1%, coding 77.2%, data analysis 72.5%, language 74.3%, instruction following 69.6%, agentic coding 58.5%)

Coding:

- SWE-bench Pro: **61.5% ±3.1** (Scale AI, 731 public tasks — between GPT-5.5's 58.6% and Opus 4.8's 69.2%)
- SWE-bench Verified: **82.0%** (Vals)
- DeepSWE v1.1: **53.3%** (Meta) / 53.0% (DataCurve; Opus 4.8 59.0, GPT-5.5 67.0)
- LiveCodeBench: **85.9%** (Vals); AA Coding Index: **71.3**
- Meta Internal Coding Bench: "competitive with leading alternatives" (no public number)

Multimodal:

- CharXiv Reasoning: **88.4%** (slightly below Muse Spark 1.0's 88.9%); BabyVision: **76.3%** (Opus 4.8 81.2, GPT-5.5 83.6)

Long context:

- 1M-token window, flat-priced; **AA-LCR: 63% — 25th of 26** in its class (Kimi K3 leads at 75%); **MRCR v2: 54.1** in Meta's own report (GPT-5.5 74.0) — the model's headline feature is its weakest measured dimension

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 88.1% (table lead), OSWorld-Verified 80.8%, Toolathlon 75.6% and DeepSearchQA 84.9% are genuinely strong agentic evidence; capped by GDPval-AA 35.7%, AutomationBench-AA 42.8%, Terminal-Bench 4.0 6.06%, OSWorld 2.0 14.2% and the 11-point Vals gap on TB2.1 (80.0 vendor vs 69.3 independent).
- **Reasoning: 84/100.** GPQA 89.8–91.2%, HLE 52.2% without tools (62.1% with), SciCode 58.8% (#3 overall) and the AA Index at 51 (v4.1) are frontier-band, with a best-in-set 62% non-hallucination rate; capped by the rebased index reading of 33.7 and AA-HLE 46.2%.
- **Context window: 90/100.** 1,048,576 tokens at flat $1.25 pricing with 131K output and active self-compaction is the ≥1M tier; the 95–100 band requires verified retrieval strength, and both independent (AA-LCR 63%, 25/26) and Meta's own MRCR v2 (54.1 vs GPT-5.5's 74.0) show retrieval is the weak spot.
- **Multimodal: 88/100.** Text + image + video + audio + PDF in → text out is the top modality band (audio input), anchored by CharXiv 88.4%, BabyVision 76.3% and native perception across the plan-execute-verify loop; no non-text output and BabyVision trailing Opus 4.8/GPT-5.5 keep it below 90.
- **Coding: 78/100.** SWE-bench Verified 82.0% (Vals), SWE-bench Pro 61.5%, LiveCodeBench 85.9% and Coding Index 71.3 are frontier-adjacent; capped by DeepSWE 53.3% (well behind Opus 4.8's 59.0 and GPT-5.5's 67.0), Terminal-Bench 2.1 at 69.3% independent, and losing every coding row in Meta's own comparison table.
- **Cost efficiency: 88/100.** $1.25/$4.25 per MTok with $0.15 automatic cache reads maps to the methodology's ~$1.25/$4.25 ≈ 88 tier — the cheapest 1M-context frontier-adjacent API at launch, with a measured ~$0.26–0.29 per Index task; no batch discount and 94M output tokens per Index run temper it.
- **Overall Score: 84/100.** Best-fit recommendation: the price-efficiency agentic pick — field-leading MCP-Atlas tool orchestration and HLE-with-tools at $1.25/$4.25 with a flat-priced 1M window; add retrieval for long-context work and route hard SWE-Pro coding to Opus/Fable-class models.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Meta AI blog + Muse Spark 1.1 evaluation report, Artificial Analysis article/tables, Vals AI, Scale AI, LiveBench, eesel AI, writingmate, sdd.sh, RankLLMs, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
