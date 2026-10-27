# Muse Wonder 1.0 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's frontier multimodal reasoning model for personal/professional agents, long-horizon coding, and computer use. Features Active Memory (cross-conversation context) and Active Focus (persistence through blockers). Released October 12, 2026. Proprietary, API-only via Meta/Partners.
- **Provider / access:** Meta AI (`meta/muse-wonder-1.0`), OpenRouter, OpenCode. Chat Completions API with reasoning_effort control. No free tier.
- **Release / knowledge:** 2026-10-12 release; knowledge cutoff not published.
- **IDs:** `meta/muse-wonder-1.0` (OpenRouter/OpenCode), Meta API. No free tier on any platform.
- **Context window:** 1,000,000 tokens (1M input + 131K output). Verified via Meta model card, OpenCode data, Artificial Analysis.
- **Modalities:** Text, image, video, PDF, audio input; text output. Reasoning: yes (adaptive, max effort benchmarked). Tool calls: yes. JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Input $4.00/M, cached input $0.20/M, output $20.00/M (Meta/OpenRouter/OpenCode). Among the most expensive proprietary APIs. No free tier.
- **Architecture:** Proprietary. Parameter count undisclosed. Active Memory + Active Focus mechanisms. Trained for long-horizon agentic tasks.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0 (AA): **52.0%** (max reasoning) — Meta model card (measured)
- Terminal-Bench 2.1 (AA): **87.2–87.3%** (estimated) — Benchgap (estimated ±5.2 pp)
- Terminal-Bench 2.1 (Vals AI): **80.9%** (estimated) — Benchgap
- Tau2-Bench Telecom (AA): **94.7%** — Qwen 3.7 Max comparison page (cross-ref)
- AutomationBench-AA: **39.1%** (strict pass@1, max) — Meta model card (measured)
- Harvey LAB-AA: **10.0%** all-pass — Meta model card (measured, AA source)
- GDP.pdf: **30.8%** — Meta model card (measured, Surge source)
- JobBench: **70.5%** mean reward — Meta model card (measured)
- OSWorld V2.1: **72.6%** partial / **34.3%** binary — Meta model card (measured)
- DeepSWE v1.1: **78.8%** pass@1 — Meta model card (measured, Datacurve)
- SWE-Marathon: **53.1%** pass@1 (max) — Meta model card (measured, Abundant AI)
- ProgramBench: **50.0%** (≥95% tests passing) — Meta model card (measured)
- Toolathlon-Verified: **79.2%** (estimated) — Benchgap
- MCP Atlas: **100.0%** (estimated) — Benchgap
- APEX-Agents: **59.6%** (estimated) — Benchgap
- AA Agentic Index: **62.4%** (estimated) — Benchgap

Reasoning / knowledge:

- GPQA Diamond: **93.9–94.6%** (estimated ±1–2 pp) — Benchgap / Meta card (AA source)
- HLE (Humanity's Last Exam): **44.2%** (est) / **50.1%** (measured, AA) / **53.6%** (Wonder Full) — Benchgap
- HLE w/ tools: **61.7%** (estimated) — Benchgap
- AA-LCR: **80.7%** (measured) — Benchgap
- LongBench v2: **62.4%** (estimated) — Benchgap
- MMLU-Pro: **83.4%** (est ±6.3 pp) / **87.2%** (AA high confidence) — Benchgap
- MMLU-Redux: **96.4%** (est) — Benchgap
- C-Eval: **93.4%** (est) — Benchgap
- SuperGPQA: **80.8%** (est) — Benchgap
- IFBench: **no direct score** (AA Intelligence Index 52)
- AA Intelligence Index v4.3: **52** (measured) — Meta card / AA / Benchgap
- AA-Omniscience Accuracy: **41.1%** (measured) — Benchgap
- CritPt: **28.3%** (measured) — Benchgap
- GDPval-AA: **63.5%** (measured) — Benchgap
- LiveBench: **81.2%** overall (#8) — BenchLeader

Coding:

- SWE-bench Verified: **96.7%** (est ±4.6 pp) — Benchgap (very high, note: estimated)
- SWE-bench Pro: **75.3%** (est ±6.6 pp) — Benchgap
- SWE-bench (Vals): **91.9%** (est) — Benchgap
- DeepSWE v1.1: **78.8%** (measured, Datacurve) — Meta card
- SWE-Marathon: **53.1%** (measured, Abundant AI) — Meta card
- LiveCodeBench v6: **100.0%** (est ±4.9 pp) — Benchgap
- LiveCodeBench (Vals): **77.4%** (est) — Benchgap
- Terminal-Bench 4.0: **52.0%** (measured, AA) — Meta card
- Terminal-Bench 2.1: **80.4%** (agreed, 4 reports) — ModelComp
- ProgramBench: **50.0%** (measured) — Meta card
- FrontierCode 1.1: **59.0%** (est) — Benchgap
- CursorBench 4.0: **49.0%** (est) — Benchgap
- VulcanBench: **87.6%** (est) — Benchgap
- AA Coding Index: **78.9%** (est) — Benchgap

Long context:

- AA-LCR: **80.7%** (measured) — Benchgap
- LongBench v2: **62.4%** (est) — Benchgap
- MRCRv2: **85.8%** (est) — Benchgap
- OSWorld 2.1: **72.6%** partial (measured) — Meta card
- Native 1M context verified

Multimodal:

- Vision Evals (Roboflow): **78.8%** avg (#9/63) — Roboflow comparison
  - Object Detection: 65.1% low / 66.0% high
  - Counting: 76.6% low / 79.7% high
  - Identification: 92.7% low / 90.6% high
  - OCR: 67.4% low / 70.9% high
  - Reasoning: 85.2% low / 83.4% high
- HealthBench Pro: **60.5%** (measured) — Meta card
- BabyVision (tools): not directly tested (Wonder Full: 92.5%)
- Chartography (tools): not directly tested (Wonder Full: 83.0%)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Terminal-Bench 2.1 80–87%, AutomationBench 39%, DeepSWE 79%, OSWorld 73% partial, Harvey LAB-AA only 10%. Strong agentic coding/computer use, but legal agent benchmark very low. Capped by Harvey LAB-AA and AutomationBench gap vs Opus 5.5.
- **Reasoning: 80/100.** GPQA Diamond 94%, HLE 44–50%, AA Intelligence Index 52, MMLU-Pro 83–87%, CritPt 28%. Excellent knowledge/reasoning but HLE and CritPt below Opus 5.5 (58 AA Index). Capped by HLE and composite index vs top tier.
- **Context window: 95/100.** 1M native context (top tier). AA-LCR 81%, LongBench v2 62%, MRCRv2 86%, OSWorld 73% at long horizon. Near-ceiling for context capacity and retrieval.
- **Multimodal: 80/100.** Text/image/video/PDF/audio in; text out. Vision Evals 78.8% avg (#9/63), HealthBench Pro 60.5%. Strong vision reasoning (85% low) and OCR. Capped by text-only output, no audio/video generation.
- **Coding: 88/100.** SWE-bench Verified est 97%, DeepSWE 79%, SWE-Pro est 75%, Terminal-Bench 2.1 80%, LiveCodeBench est 100%. Exceptional coding but SWE-bench figures are estimated (Benchgap model-based), not independently reproduced. Capped by estimation uncertainty on top coding benchmarks.
- **Cost efficiency: 30/100.** $4/$20 per 1M tokens — among the most expensive APIs (only Opus/Fable tiers higher). Blended ~$8/M. No free tier. High cost per Intelligence Index run ($4,711 per AA).
- **Overall Score: 86/100.** Mean of (85+80+95+80+88)/5 = 85.6 → 86. Best fit: premium agentic coding/computer-use assistant where cost is secondary to capability; Active Memory/Focus differentiate for long-horizon tasks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Meta model card, Artificial Analysis, Benchgap, BenchLeader, ModelComp, Roboflow, MarkTechPost, TechCrunch, Plotly blog); scores normalized 1–100 per model-comparison.md methodology. Conflicting estimates (Benchgap model-based vs Meta measured) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.