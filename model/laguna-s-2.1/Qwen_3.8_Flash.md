# Laguna S 2.1 — findings by Qwen 3.8 Flash

- Source: Poolside AI (`poolside/laguna-s-2.1`; OpenMDW-1.1 open weights)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's open-weights agentic-coding MoE — **118B total / 8B active** (fast decode), **1M context** (256K on local Ollama builds), OpenMDW-1.1 permissive license. A sparse but real benchmark sheet aimed at terminal/SWE tasks (TB 70.2%, SWE-Multilingual 78.5%, SWE-Pro 59.4%). **Zero general-reasoning or knowledge benchmarks exist** — no GPQA, HLE, CritPt, Omniscience, AA Index. The reasoning depth of this model is simply unmeasured; scored conservatively based on what agentic-coding performance implies.
- **Provider / access:** Poolside API; open weights (OpenMDW-1.1); Ollama local builds (256K cap); no Zen Free ID.
- **Release / knowledge:** 2026 (exact date not verified in available sources); cutoff not verified.
- **IDs:** `poolside/laguna-s-2.1`.
- **Context window:** **1M via Poolside API** (catalog + BenchLM); **256K on local Ollama builds**.
- **Modalities:** **Text in / text out** only (catalog, curated meta, and Kimi K3 agree); reasoning yes; tool calls; JSON mode per serving stack.
- **Pricing (as of 2026-10-02):** **~$0.10 / $0.20 per 1M** API (catalog note); open weights → self-host. Extremely cheap. Cost excluded from Overall.
- **Architecture:** MoE 118B total / 8B active (fast decode optimized), OpenMDW-1.1.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (BenchLM scorecard, 2026-09-24). **Benchmark coverage is 6-of-483** per BenchLM — only the rows below exist publicly. No GPQA, no HLE, no CritPt, no AA Index, no Omniscience, no MRCR/RULER/LCR, no LCB, no SciCode — nothing outside the five coding/agent rows.

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (BenchLM) — solid for an 8B-active model
- Toolathlon-Verified: **49.7%** (BenchLM)
- τ²/τ³-bench / GDPval-AA / Claw-Eval / MCP Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Intelligence Index / Omniscience / MMLU-Pro / AIME: **zero rows in any tracked panel** (6-of-483 coverage on BenchLM)

Coding:

- SWE Multilingual: **78.5%** (BenchLM) — strongest measured row
- SWE-bench Pro: **59.4%** (BenchLM)
- DeepSWE: **40.4%** (BenchLM) — sustained-autonomy breaks
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- 1M window by spec (Poolside API); **zero retrieval measurements** (no MRCR/RULER/LCR row).

Multimodal:

- None — text-only confirmed.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. **Scoring philosophy for zero-reasoning-evidence:** coding benchmarks (TB, SWE-Pro, SWE-Multilingual) require multi-step logic and prove task-level reasoning exists, but cannot substitute for direct GPQA/HLE/CritPt measurement of knowledge-breadth, creativity, or honesty. The Reasoning dimension is scored above Kimi's "absence-of-evidence floor" (45) by crediting the reasoning implied by SWE-Pro 59.4% + TB 70.2%, but well below the cohort's generous 64.2 which appears to trust unmeasured capability.

- **Tool use: 70/100.** TB 70.2% is genuinely solid — comparable to models 10× the active parameter budget. Toolathlon 49.7% is mid. The 8B-active design is clearly optimized for fast decode in agentic loops. Capped by zero GDPval/τ² coverage. Matches the cohort's 70.2 almost exactly.
- **Reasoning: 55/100.** TB and SWE-Pro demonstrate task-context reasoning (codebase understanding, multi-step debugging, terminal operations). But there is literally **no evidence about general knowledge, creative reasoning, honesty, or factual accuracy.** A model can be good at coding tasks and terrible at knowledge retrieval. Kimi's 45 is too harsh (coding IS reasoning); the cohort's 64.2 is too generous (no direct evidence exists). Scored at 55 = "demonstrated task reasoning, unproven general reasoning."
- **Context window: 85/100.** 1M nominal = ≥1M band (95–100), but **zero retrieval measurements** and Ollama builds capping at 256K make the 1M an API-only spec claim with no evidence behind it. Entered at the floor of the 500K–1M band (85–94) since the only verified local tier is 256K; generous interpretation gives 1M-API credit at band-floor. Kimi's 76 underweights the API's 1M; cohort's 87.3 nearly matches.
- **Multimodal: 12/100.** Text-only confirmed (catalog + curated meta + Kimi) = floor band 10–20. Cohort's 23 and Kimi's 15 both agree on floor.
- **Coding: 72/100.** SWE-Multilingual 78.5% is the standout — exceptional breadth across languages for an 8B-active model. SWE-Pro 59.4% is solid. DeepSWE 40.4% shows marathon-repo autonomy breaks. No SWE-V/LCB anchor caps upside. Matches Kimi's 72 and cohort's 72.2.
- **Cost efficiency: 96/100.** ~$0.10/$0.20 per 1M + open weights (OpenMDW-1.1) is among the cheapest agentic-coding options available. Self-hosting 118B/8B is feasible on a single GPU. Cost excluded from Overall.
- **Overall Score: 59/100.** Mean of Tool 70, Reasoning 55, Context 85, Multimodal 12, Coding 72 = 294/5 = 58.8 → **59**. Best fit: **cheap self-hosted agentic coding** — TB 70.2 and SWE-Multilingual 78.5 at 8B-active with ~$0.10/$0.20 pricing is an outstanding value proposition for terminal and coding tasks. **Do not deploy for knowledge-critical or creative reasoning workloads** without independent validation — the zero-evidence state on those dimensions is a genuine deployment risk, not a scoring artifact.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLM scorecard (the only public data source with verified numbers — TB/Toolathlon/SWE-Multilingual/SWE-Pro/DeepSWE); curated `meta.json` (honest on specs: 1M/256K, text-only, OpenMDW-1.1, ~$0.10/$0.20). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **zero reasoning benchmarks in any tracked panel** — Reasoning is inferred from coding task performance, not measured directly; (b) the 1M window is API-only with no retrieval evidence (local builds = 256K); (c) 6-of-483 BenchLM coverage means this model is essentially untracked by the evaluation ecosystem despite existing on the market.
- Revisit trigger: **mandatory when any GPQA/HLE/SWE-V/AA Index/Omniscience row appears** — the Reasoning dimension has maximum upside from uncertainty (could be 40 or 80, we simply don't know). AA or Vals adding this model to their panels would immediately justify re-scoring.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
