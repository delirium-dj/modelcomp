# Solar Mini 4 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4 (solar-mini-4)
- **Short description:** Upstage's cost-efficient compact MoE reasoning model, released September 22, 2026. 35B total / 3B active parameters. Proprietary weights (not open). 1M context window (512K–524K verified). Strong Korean/English/Japanese. Designed for agentic use cases prioritizing speed and cost.
- **Provider / access:** Upstage Console API, OpenRouter (`upstage/solar-mini4`), Artificial Analysis (benchmarking only). No self-hosted (proprietary). No free tier.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff February 2026.
- **IDs:** `upstage/solar-mini4` (OpenRouter/Upstage Console). Proprietary.
- **Context window:** 1M tokens claimed (Upstage Console), 512K–524K verified (Artificial Analysis, The Aggregate, llmboard.ai, Tokens or Towers). **CONFLICT: 1M claimed vs 512K–524K verified.**
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Upstage, Artificial Analysis, OpenRouter, The Aggregate). Reasoning: yes (reasoning model, high reasoning token usage). Tool calls: yes (function calling, agentic workflows). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Upstage Console: $0.10/M in, $0.40/M out, $0.01/M cache (90% discount). 50% launch discount through Oct 22. OpenRouter: $0.10/M in, $0.40/M out. Artificial Analysis measured: $0.36/task (Intelligence Index), 48% cache reuse (vs 99% for GPT-6 Luna). Blended ~$0.10–0.40/M. No free tier.
- **Architecture:** 35B total / 3B active MoE. Proprietary weights. 1M claimed / 512K–524K verified context. Korean/English/Japanese optimized.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- AA-LCR (Long Context Reasoning): **83.3%** (measured, rank #18/144, percentile 96.3%) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers
- AA-Briefcase v1.1: **872** points (rank #5/5, percentile 0%) — Artificial Analysis / The Aggregate
- GDPval-AA v2.1: **1072** points (rank #6/6, percentile 0%) — Artificial Analysis / The Aggregate
- AutomationBench-AA: **22%** (partial, measured) — Artificial Analysis / The Aggregate / AlphaSignal
- Terminal-Bench 4.0: **1.0%** (measured, rank #29/29, percentile 0%) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers / AlphaSignal
- SWE-bench Verified / Pro / Terminal-Bench 2.0/2.1 / Toolathlon / MCP-Atlas / PinchBench / ClawEval / τ²-Bench / IFBench / OfficeQA / JobBench / BrowseComp / DeepSearchQA: **no scores**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24.1** (measured, rank #39/172, percentile 72.6%) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers / AlphaSignal
- HLE (no tools, text-only): **25.8%** (measured, rank #13/14, percentile 7.7%) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers
- AA-Omniscience Accuracy: **18.4%** — Artificial Analysis / OpenRouter
- AA-Omniscience Non-Hallucination Rate: **64.2%** — Artificial Analysis / OpenRouter
- AA-Omniscience Index: **-10.82** (rank varies by domain) — Artificial Analysis / The Aggregate
- CritPt: **1.4%** — Artificial Analysis / OpenRouter
- GDP.pdf: **not individually scored** (part of Intelligence Index)
- AA-LCR: **83.3%** (see Agent/Tool Use)
- SciCode: **47.6%** (measured, rank #12/31, percentile 63.3%) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers / AlphaSignal
- MMLU / MMLU-Pro / GPQA Diamond / AIME / C-Eval / SuperGPQA / MATH / BBH / ZebraLogic: **no direct scores** (components of Intelligence Index)

Coding:

- SciCode: **47.6%** (measured) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers / AlphaSignal
- Terminal-Bench 4.0: **1.0%** (measured) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers / AlphaSignal
- LiveCodeBench / HumanEval / MBPP / Codeforces / SWE-bench Verified / Pro / Terminal-Bench 2.0/2.1: **no scores**

Long context:

- AA-LCR: **83.3%** (measured, top 4% of all models) — Artificial Analysis / The Aggregate / llmboard.ai / Tokens or Towers
- Native context: **512K–524K verified** (Artificial Analysis, The Aggregate, llmboard.ai, Tokens or Towers) vs **1M claimed** (Upstage Console) — **CONFLICT**
- RULER / MRCR / GraphWalks / LongBench / LOFT / BrowseComp / DeepSearchQA: **no scores**

Multimodal:

- **No native multimodal** (text-only per Upstage, Artificial Analysis, OpenRouter, The Aggregate).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** AA-LCR 83% (exceptional long-context reasoning), but Terminal-Bench 4.0 1% (last place), AutomationBench-AA 22%, GDPval-AA 1072 (last/6), AA-Briefcase 872 (last/5). Strong long-context retrieval but **catastrophic agentic coding/terminal failure** (1% TB 4.0). Capped by Terminal-Bench 1% and no SWE-bench/τ²-Bench/MCP-Atlas scores.
- **Reasoning: 55/100.** AA Intelligence Index 24 (rank #39/172, 73rd percentile), HLE 26% (rank #13/14, 8th percentile), SciCode 48% (rank #12/31, 63rd percentile), CritPt 1.4%, Omniscience Accuracy 18%, Non-Hallucination 64%. Strong long-context reasoning (AA-LCR 83%) but HLE low (26%) and agentic reasoning weak. Capped by HLE 26% and Omniscience 18%.
- **Context window: 85/100.** 512K–524K verified (512K tier = 80–85), AA-LCR 83% (top 4%). **Conflict: 1M claimed vs 512K verified.** No RULER/MRCR/GraphWalks/LOFT. Tier placement + AA-LCR 83% saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 35/100.** SciCode 48% (decent), Terminal-Bench 4.0 1% (catastrophic). No SWE-bench/LiveCodeBench/HumanEval/Codeforces/Terminal-Bench 2.0/2.1. Capped by Terminal-Bench 1% and missing standard coding benchmarks.
- **Cost efficiency: 75/100.** $0.10/$0.40 competitive, but proprietary (no self-host), 48% cache reuse (vs 99% GPT-6 Luna), high reasoning token volume (88K/task, 2.5x peers), $0.36/task (5x GPT-6 Luna). Good per-token price but high task cost.
- **Overall Score: 46/100.** Mean of (40+55+85+15+35)/5 = 46.0 → 46. Queue shows 57.9 — significant gap due to Terminal-Bench 1%, HLE 26%, no SWE-bench, text-only, proprietary. ModelComp: not listed. Best fit: **long-context reasoning specialist with catastrophic agentic coding failure**; AA-LCR 83% exceptional but Terminal-Bench 1% and HLE 26% limit generalist use; proprietary weights prevent independent verification.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Artificial Analysis, Upstage Console docs, OpenRouter, The Aggregate, llmboard.ai, Tokens or Towers, AlphaSignal); scores normalized 1–100 per model-comparison.md methodology. **Critical conflicts:** Context window 1M claimed vs 512K–524K verified (multiple independent sources agree on ~512K). Terminal-Bench 4.0 1% (last place) vs AA-LCR 83% (top 4%) shows extreme specialization. All benchmarks from Artificial Analysis (single independent evaluator); no vendor-reported benchmarks found. Proprietary weights = no self-host, no independent reproduction possible.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.