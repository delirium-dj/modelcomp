# Qwen 3.8 325B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 325B (Qwen3.8-325B / Qwen3.8-Max)
- **Short description:** Alibaba's flagship MoE model, released August 2-3, 2026. 325B total parameters (active params not disclosed, likely ~30-40B based on MoE scaling). Closed weights. 1M+ context window. Multimodal (text, image, video input; text output). Positioned as Alibaba's strongest model, competing with GPT-5.6 Sol, Fable 5, Opus 4.8.
- **Provider / access:** Alibaba Cloud (Qwen API), DashScope, OpenRouter (`qwen/qwen3.8-max`), ModelScope. Closed weights, no self-host. No free tier.
- **Release / knowledge:** 2026-08-02/03 release; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.8-max` (OpenRouter), `qwen3.8-max` (DashScope/Alibaba Cloud). Proprietary.
- **Context window:** 1M+ tokens (256K–1M verified). Qwen blog: 256K for SWE-bench, 1M+ claimed. Epoch AI: 1M context.
- **Modalities:** Text + image + video input; text output. **Native multimodal** (vision). Reasoning: yes (thinking mode). Tool calls: yes (Claude Code harness for evals). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Alibaba Cloud: not published. OpenRouter: not published. Closed weights = no self-host. No free tier.
- **Architecture:** 325B total MoE (active params undisclosed). 1M+ context. Multimodal. Closed weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE LIMITATION:** All benchmarks **vendor-reported by Alibaba/Qwen** (Qwen blog Aug 3, 2026 technical release). **Zero independent third-party reproduction** found (EvoLink, BenchLM, Epoch AI all cite vendor numbers). EvoLink explicitly states "these are official Qwen results—not independent replication."

Agent / tool use (vendor-reported, Qwen blog / EvoLink / BenchLM / Epoch AI):

- Terminal-Bench 2.1: **86.6%** (Claude Code, avg@10, 5hr timeout, 131K tokens) — Qwen blog / EvoLink / BenchLM / Epoch AI
- SWE-bench Pro: **67.7%** (Claude Code, temp 1.0, top-p 0.95, 256K ctx) — Qwen blog / EvoLink / BenchLM / Epoch AI
- SWE-bench Verified: **no vendor score** (Qwen blog omits)
- SWE-bench Multilingual: **no vendor score** for Max (27B: 61.7%)
- PaperBench: **93.0%** — Qwen blog / EvoLink
- Toolathlon Verified: **72.5%** — Qwen blog / EvoLink
- NL2Repo: **55.9%** — Qwen blog / EvoLink
- FrontierSWE: **73.5%** — Qwen blog / EvoLink
- DeepSWE: **56.6%** — Qwen blog / EvoLink
- AutomationBench: **27.3%** — Qwen blog / EvoLink
- CoWorkBench: **no score** for Max (27B: 70.7%)
- WebArena-Verified: **no score** for Max (27B: 64.8%)
- Agents' Last Exam: **no score** for Max (27B: 42.9%)
- JobBench: **no score** for Max (27B: 33.4%)
- MCP-Atlas / τ²-Bench / BFCL / PinchBench / ClawEval / BrowseComp / DeepSearchQA: **no scores**

Reasoning / knowledge (vendor-reported):

- MMMU-Pro: **82.3%** — Qwen blog / EvoLink / BenchLM
- GPQA Diamond: **93%** (Omni-Flash) / **n/a** for Max — Epoch AI / BenchLM
- HLE: **43.6%** — Qwen blog / EvoLink
- GPQA: **91%** (Omni-Flash) — BenchLM
- ERQA: **71%** (Omni-Flash) — BenchLM
- MMLU / MMLU-Pro / AIME / MATH / BBH / C-Eval / SuperGPQA / MMMLU: **no scores** for Max specifically
- Chess Puzzles: **46%** — Epoch AI
- SciCode: **53%** — Epoch AI

Coding (vendor-reported):

- Terminal-Bench 2.1: **86.6%** — Qwen blog / EvoLink / BenchLM / Epoch AI
- SWE-bench Pro: **67.7%** — Qwen blog / EvoLink / BenchLM / Epoch AI
- PaperBench: **93.0%** — Qwen blog / EvoLink
- FrontierSWE: **73.5%** — Qwen blog / EvoLink
- DeepSWE: **56.6%** — Qwen blog / EvoLink
- NL2Repo: **55.9%** — Qwen blog / EvoLink
- SWE-bench Verified / LiveCodeBench / HumanEval / MBPP / Codeforces / Terminal-Bench Hard / SWE-Rebench: **no scores** for Max

Long context:

- Native 1M+ context claimed (256K verified for SWE-bench, 1M for Epoch AI)
- SWE-bench Pro at 256K ctx, Terminal-Bench 2.1 at 131K ctx
- NL2Repo at long context
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR: **no scores**

Multimodal (vendor-reported):

- OmniDocBench 1.5: **92.1%** (edit distance, lower better) — Qwen blog / EvoLink
- MMMU-Pro: **82.3%** — Qwen blog / EvoLink / BenchLM
- Vision2Web: **62.9%** (Omni-Flash) — BenchLM
- SWE Multilingual: **80.5%** (Omni-Flash) — BenchLM
- MATH-Vision / MMMU / ChartQA / DocVQA / AI2D / OCRBench / VideoMMU: **no scores** for Max

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Terminal-Bench 2.1 86.6% (near frontier: Fable 5 84.6%, Opus 4.8 84.6%, GPT-5.6 Sol 88.8%), SWE-bench Pro 67.7%, Toolathlon 72.5%, NL2Repo 55.9%, FrontierSWE 73.5%, DeepSWE 56.6%. Strong terminal/repo agentic but **all vendor-reported, zero independent reproduction**. No SWE-Verified, MCP-Atlas, τ²-Bench, BFCL. Capped by no independent verification and missing standard agentic benchmarks.
- **Reasoning: 70/100.** HLE 43.6% (strong vs Opus 4.7 ~40%, GPT-5.6 Sol ~45%), MMMU-Pro 82.3%, GPQA Diamond 93% (Omni-Flash proxy), GPQA 91% (Omni-Flash). **No standard reasoning benchmarks** for Max specifically (GPQA/AIME/HLE/MMLU/MMLU-Pro all from Omni-Flash or omitted). Chess 46%, SciCode 53% (Epoch AI). Capped by no direct Max reasoning benchmarks and vendor-only data.
- **Context window: 90/100.** 1M+ claimed (1M tier = 85–90). SWE-Pro at 256K, Terminal-Bench at 131K, NL2Repo long-context. Epoch AI confirms 1M context. No RULER/MRCR/GraphWalks/LongBench/AA-LCR. Tier placement + demonstrated long-context agentic saves score.
- **Multimodal: 80/100.** Native text+image+video in, text out. OmniDocBench 92.1% (exceptional document understanding), MMMU-Pro 82.3%, Vision2Web 62.9% (Omni-Flash). No MMMU/MathVision/ChartQA/DocVQA/AI2D/OCRBench for Max. Capped by no standard vision benchmarks for Max specifically.
- **Coding: 75/100.** Terminal-Bench 2.1 86.6% (near SOTA), SWE-bench Pro 67.7%, PaperBench 93.0%, FrontierSWE 73.5%, DeepSWE 56.6%. **No SWE-bench Verified / LiveCodeBench / HumanEval / Codeforces.** PaperBench 93% beats GPT-5.6 Sol 90.5% and Fable 5 88.8% (vendor). Capped by no SWE-Verified and zero independent coding verification.
- **Cost efficiency: 20/100.** Closed weights, no self-host, no published pricing. No free tier. Proprietary 325B MoE = massive inference cost. Capped by closed ecosystem and unknown pricing.
- **Overall Score: 78/100.** Mean of (75+70+90+80+75)/5 = 78.0 → 78. Queue rank unknown (not in model-queue.md top 200). Epoch AI ECI #21 (157). Best fit: **vendor-claimed near-frontier agentic/coding model**; TB 2.1 86.6%, PaperBench 93%, HLE 43.6% strong; **zero independent verification**; closed weights; no standard reasoning/coding benchmarks for Max specifically.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Qwen blog Aug 3 2026, EvoLink analysis, BenchLM, Epoch AI, DataLearnerAI, APIdog, bleap.finance, guangxiangdebizi/qwen3.8-research); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** All benchmarks vendor-reported by Alibaba; **zero independent third-party reproduction**; EvoLink explicitly warns "not independent replication"; no SWE-bench Verified, LiveCodeBench, HumanEval, standard reasoning benchmarks for Max; closed weights; no pricing; Omni-Flash benchmarks used as proxy for some metrics.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.