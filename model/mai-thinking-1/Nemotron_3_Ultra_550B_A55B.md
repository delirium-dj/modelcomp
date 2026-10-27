# MAI-Thinking-1 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1 (MAI Thinking 1)
- **Short description:** Microsoft AI's first self-developed reasoning model, announced at Microsoft Build 2026 (June 2026). 35B active parameter MoE (~1T total). 256K context. Trained on proprietary clean-licensed data with zero distillation from other AI labs. Function calling, long context, developer instructions. Proprietary (Microsoft Foundry). Matches Claude Opus 4.6 on coding benchmarks.
- **Provider / access:** Microsoft Foundry, Azure AI, Microsoft AI platform. Proprietary, no self-host. No public API outside Microsoft ecosystem.
- **Release / knowledge:** 2026-06-06 technical report / 2026-08-12 Microsoft AI blog announcement; knowledge cutoff not published.
- **IDs:** Microsoft Foundry / Azure (no public model ID). Proprietary.
- **Context window:** 256K tokens (262,144). Verified via Microsoft AI blog, technical report, BenchLM, BenchmarkList.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Microsoft AI blog, technical report, BenchLM). Reasoning: yes (reasoning model, hill-climbing RL). Tool calls: yes (function calling, agentic). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Microsoft Foundry / Azure: not published. Proprietary, no self-host. No free tier.
- **Architecture:** ~1T total / 35B active MoE (sparse). 256K context. Clean licensed proprietary data, zero distillation. Hill-climbing RL (agentic climb). Function calling support.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE LIMITATION:** Mix of **vendor-reported** (Microsoft AI technical report, blog) and **third-party** (BenchLM, BenchmarkList, AI Intel Report, TechPulse). BenchLM has 13 benchmarks covered.

Agent / tool use:

- SWE-bench Verified: **73.5%** (vendor, 4-run avg, temp 1.0) — Microsoft AI technical report / BenchLM / BenchmarkList
- SWE-bench Pro: **52.8–53.4%** (vendor) — Microsoft AI technical report / BenchmarkList / AI Intel Report / TechPulse
- Terminal-Bench 2.0: **46%** (vendor) — Microsoft AI technical report / BenchLM / BenchmarkList
- OSWorld-Verified: **no vendor score** (Claude Opus 4.5 comparison: 66.3%) — BenchLM
- LiveCodeBench v6: **87.7%** (vendor) — Microsoft AI technical report / BenchLM / BenchmarkList
- IFBench: **85%** (vs Ling 3.0 Flash 74.5%) — BenchLM
- CoWorkBench / JobBench / Agents' Last Exam: **no scores**
- MCP-Atlas / τ²-Bench / BFCL / Toolathlon / PinchBench / ClawEval / AutomationBench / BrowseComp / DeepSearchQA: **no scores**

Reasoning / knowledge:

- AIME 2025: **97.0%** (vendor, 4-run avg) — Microsoft AI technical report / BenchmarkList / AI Intel Report / TechPulse
- AIME 2026: **94.5%** (vendor) — BenchmarkList
- GPQA: **84.2%** (vendor, vs Claude Opus 4.5 87%) — BenchLM
- HMMT Feb 2026: **vendor-reported** (not numerically published in summaries) — Microsoft AI technical report
- MMLU / MMLU-Pro / GPQA Diamond / HLE / MATH / BBH / C-Eval / SuperGPQA / MMMLU: **no direct scores** in summaries
- BenchLM Overall Score: **52.5/100** (rank #90/992) — BenchLM
- BenchLM Coding: **3 evals, median 47th pct** — BenchLM
- BenchLM Mathematics: **1 eval, median 49th pct** — BenchLM

Coding:

- SWE-bench Verified: **73.5%** (vendor) — Microsoft AI technical report / BenchLM / BenchmarkList
- SWE-bench Pro: **52.8–53.4%** (vendor) — Microsoft AI technical report / BenchmarkList / AI Intel Report / TechPulse
- Terminal-Bench 2.0: **46%** (vendor) — Microsoft AI technical report / BenchLM / BenchmarkList
- LiveCodeBench v6: **87.7%** (vendor) — Microsoft AI technical report / BenchLM / BenchmarkList
- HumanEval / MBPP / Codeforces / SWE-Rebench / Vibe Code Bench / Terminal-Bench Hard / SWE-bench Multilingual: **no scores**

Long context:

- Native 256K context verified
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR: **no scores**

Multimodal:

- **No native multimodal** (text-only per Microsoft AI blog, technical report, BenchLM).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** SWE-bench Verified 73.5% (strong, near Opus 4.6), SWE-bench Pro 53.4%, Terminal-Bench 2.0 46%, LiveCodeBench 87.7%. **Mix of vendor and third-party** (BenchLM 6 shared benchmarks with Ling 3.0 Flash, 10 with Opus 4.5). No MCP-Atlas/τ²-Bench/BFCL/Toolathlon/PinchBench/ClawEval. Capped by no standard agentic benchmarks beyond SWE/Terminal and proprietary-only access.
- **Reasoning: 75/100.** AIME 2025 97.0% (exceptional, leads field), AIME 2026 94.5%, GPQA 84.2% (vs Opus 4.5 87%). **No MMLU/MMLU-Pro/HLE/MATH/BBH/C-Eval** published. HMMT Feb 2026 vendor-reported only. Clean licensed data, zero distillation. Capped by missing standard reasoning benchmarks and proprietary-only verification.
- **Context window: 75/100.** 256K native (256K tier = 70–75). No RULER/MRCR/GraphWalks/LongBench/AA-LCR. Tier placement saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 70/100.** SWE-bench Verified 73.5% (matches Opus 4.6 per vendor), SWE-bench Pro 53.4%, Terminal-Bench 2.0 46%, LiveCodeBench 87.7%. **Strong SWE-Verified** but below Opus 4.6 on Terminal-Bench (46% vs 59.3% Opus 4.5). No HumanEval/Codeforces/SWE-Multilingual. Capped by Terminal-Bench gap vs frontier and no independent verification.
- **Cost efficiency: 30/100.** Proprietary, Microsoft Foundry/Azure only, no self-host, no published pricing. 35B active MoE = large inference footprint. No free tier. Capped by closed ecosystem.
- **Overall Score: 60/100.** Mean of (65+75+75+15+70)/5 = 60.0 → 60. BenchLM Overall: 52.5 (partial coverage). Queue rank unknown. Best fit: **strong mid-size reasoning/coding model**; AIME 97% exceptional, SWE-Verified 73.5% matches Opus 4.6; proprietary, text-only, no standard reasoning benchmarks beyond AIME/GPQA; zero independent reproduction.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Microsoft AI technical report PDF, Microsoft AI blog, BenchLM, BenchmarkList, AI Intel Report, TechPulse, Ling 3.0 Flash comparison, Opus 4.5 comparison, Gemini 3.1 Flash-Lite comparison); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Proprietary model (no self-host, no public API); mix of vendor-reported and third-party benchmarks; no MMLU/HLE/MMLU-Pro/MATH standard reasoning benchmarks; no independent third-party reproduction of vendor SWE/Terminal benchmarks; BenchLM partial coverage (13/706 benchmarks).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.