# Muse Wonder Full — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's flagship "full" variant of Muse Wonder, available via subscription only (not API). Higher base model capacity than Wonder 1.0, with xhigh reasoning effort option. Same Active Memory + Active Focus architecture. Released October 12, 2026 alongside Wonder 1.0. Proprietary, subscription-gated.
- **Provider / access:** Meta AI subscription (Muse Wonder Full tier). Not available via standard API/OpenRouter. Chat interface with reasoning_effort up to xhigh.
- **Release / knowledge:** 2026-10-12 release (same as Wonder 1.0); knowledge cutoff not published.
- **IDs:** `meta/muse-wonder-full` (subscription). No API ID, no free tier.
- **Context window:** 1,000,000 tokens (1M input + 131K output). Verified via Meta model card, Artificial Analysis (~1.05M).
- **Modalities:** Text, image, video, PDF, audio input; text output. Reasoning: yes (max + xhigh). Tool calls: yes. JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Subscription-only (Meta "Muse Wonder Full" plan). No per-token pricing published. OpenCode shows "—" for pricing. Effectively premium enterprise pricing.
- **Architecture:** Proprietary. Larger/stronger base model than Wonder 1.0 per Meta ("builds on larger, stronger base models"). Parameter count undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0 (AA): **57.1%** (max) / **58.8%** (est) — Meta card / Benchgap
- Terminal-Bench 2.1 (AA): **87.3%** (est) — Benchgap
- Terminal-Bench 2.1 (Vals): **80.9%** (est) — Benchgap
- AutomationBench-AA: **45.4%** (max) — Meta card (measured)
- Harvey LAB-AA: **13.1%** all-pass — Meta card (measured, AA source)
- GDP.pdf: **32.6%** — Meta card (measured, Surge)
- JobBench: **75.3%** mean reward — Meta card (measured)
- OSWorld V2.1: **78.4%** partial / **39.4%** binary — Meta card (measured)
- DeepSWE v1.1: **79.0%** pass@1 — Meta card (measured, Datacurve)
- SWE-Marathon: **57.5%** pass@1 (xhigh) — Meta card (measured, Abundant AI)
- ProgramBench: **59.0%** (≥95% tests) — Meta card (measured)
- Toolathlon-Verified: **79.9%** (est) — Benchgap
- MCP Atlas: **100.0%** (est) — Benchgap
- APEX-Agents: **65.8%** (est) — Benchgap
- AA Agentic Index: **68.9%** (est) — Benchgap

Reasoning / knowledge:

- GPQA Diamond: **95.7–96.1%** (est ±1–2 pp) — Benchgap / Meta card (AA)
- HLE: **46.0%** (est) / **53.6%** (measured, AA) — Benchgap
- HLE w/ tools: **64.9%** (est) — Benchgap
- AA-LCR: **83.7%** (measured) — Benchgap
- LongBench v2: **62.9%** (est) — Benchgap
- MMLU-Pro: **83.4%** (est) / **87.5%** (AA high conf) — Benchgap
- MMLU-Redux: **96.6%** (est) — Benchgap
- C-Eval: **93.4%** (est) — Benchgap
- SuperGPQA: **81.8%** (est) — Benchgap
- AA Intelligence Index v4.3: **56** (measured) — Meta card / AA / Benchgap (Wonder 1.0: 52)
- AA-Omniscience Accuracy: **43.2%** (measured) — Benchgap
- CritPt: **32.9%** (measured) — Benchgap
- GDPval-AA: **67.9%** (measured) — Benchgap
- LiveBench: **81.2%** overall (#8) — BenchLeader (same as Wonder 1.0?)

Coding:

- SWE-bench Verified: **96.8%** (est ±4.6 pp) — Benchgap
- SWE-bench Pro: **78.9%** (est ±6.6 pp) — Benchgap
- SWE-bench (Vals): **94.8%** (est) — Benchgap
- DeepSWE v1.1: **79.0%** (measured, Datacurve) — Meta card
- SWE-Marathon: **57.5%** (measured, xhigh, Abundant AI) — Meta card
- LiveCodeBench v6: **100.0%** (est ±4.9 pp) — Benchgap
- LiveCodeBench (Vals): **77.4%** (est) — Benchgap
- Terminal-Bench 4.0: **57.1%** (measured, AA) — Meta card
- Terminal-Bench 2.1: **87.3%** (est) — Benchgap
- ProgramBench: **59.0%** (measured) — Meta card
- FrontierCode 1.1: **59.2%** (est) — Benchgap
- CursorBench 4.0: **52.7%** (est) — Benchgap
- VulcanBench: **87.6%** (est) — Benchgap
- AA Coding Index: **78.9%** (est) — Benchgap

Long context:

- AA-LCR: **83.7%** (measured) — Benchgap
- LongBench v2: **62.9%** (est) — Benchgap
- MRCRv2: **85.9%** (est) — Benchgap
- OSWorld 2.1: **78.4%** partial (measured) — Meta card
- OSWorld 2.0: **90.4%** (est) — Benchgap
- Native 1M context verified

Multimodal:

- Vision Evals: Not directly tested separately from Wonder 1.0 (same architecture)
- HealthBench Pro: **62.3%** (measured) — Meta card
- BabyVision (tools): **92.5%** — DeepSeek card cross-ref
- Chartography (tools): **83.0%** — DeepSeek card cross-ref
- ZeroBench-main (tools): **51.0%** — DeepSeek card cross-ref

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Terminal-Bench 2.1 87%, AutomationBench 45% (vs Opus 5.5 41%), DeepSWE 79%, OSWorld 78% partial, Harvey LAB-AA 13% (still low but 3x Wonder 1.0). Strongest agentic profile in Meta lineup. Capped by Harvey LAB-AA and Terminal-Bench 4.0 (57%) vs Opus 5.5 (60%).
- **Reasoning: 83/100.** GPQA Diamond 96%, HLE 46–54%, AA Intelligence Index 56 (vs Opus 5.5 58), MMLU-Pro 83–88%, CritPt 33%. Better than Wonder 1.0 across all reasoning benchmarks. Capped by AA Index still below Opus 5.5/Fable 5.1.
- **Context window: 95/100.** 1M native context. AA-LCR 84%, LongBench v2 63%, MRCRv2 86%, OSWorld 78% partial. Near-ceiling context capacity and retrieval, marginally better than Wonder 1.0.
- **Multimodal: 80/100.** Same multimodal input suite as Wonder 1.0. HealthBench Pro 62.3%, BabyVision 92.5%, Chartography 83%. Text-only output. No separate vision evals published; assume parity with Wonder 1.0 (78.8% Vision Evals avg).
- **Coding: 90/100.** SWE-bench Verified est 97%, DeepSWE 79%, SWE-Pro est 79%, SWE-Marathon 57.5% (xhigh), Terminal-Bench 2.1 87%, LiveCodeBench est 100%. Highest coding scores in Meta lineup. Capped by estimation uncertainty on SWE-bench (Benchgap model-based) and SWE-Marathon using xhigh vs max for others.
- **Cost efficiency: 20/100.** Subscription-only, no public per-token pricing. Effectively premium enterprise tier. No free tier. Cannot compute blended cost.
- **Overall Score: 87/100.** Mean of (88+83+95+80+90)/5 = 87.2 → 87. Best fit: enterprise subscription for maximum agentic coding/computer-use persistence; xhigh reasoning unlocks SWE-Marathon lead over Opus 5.5.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 4+ independent sources (Meta model card, Artificial Analysis, Benchgap, DeepSeek model card cross-ref, MarkTechPost, DeepLearning.AI); scores normalized 1–100 per model-comparison.md methodology. Conflicting estimates (Benchgap model-based vs Meta measured) noted. Subscription-only access limits independent verification.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.