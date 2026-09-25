# Gemma 4 31B — findings by Kimi K3

- Source: Google / Gemma 4 31B (`gemma-4-31b`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's largest open-weight Gemma 4 dense model (31B) — strong MMLU-Pro (85.2%) and MMMU-Pro (~74–77%) for its size, weak into agentic and frontier-reasoning territory. 256K context.
- **Provider / access:** open weights (Hugging Face / Kaggle `gemma-4-31b`); Google API endpoints likely; no verified Zen Free ID.
- **Release / knowledge:** 2026 Gemma 4 generation (exact date not verified in my sources); cutoff not verified.
- **IDs:** `google/gemma-4-31b` (open weights).
- **Context window:** 256K tokens (benchlm.ai).
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes (benchlm.ai classifies as reasoning); tool calls basic; JSON mode via serving stack.
- **Pricing (as of 2026-09-24):** open weights — self-host; hosted rates vary (no single verified rate in my sources).
- **Architecture:** 31B params dense (31b variant of Gemma 4); open weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **59.9%** (benchlm.ai)
- GDPval-AA: **755 Elo** (5.3% normalized) (benchlm.ai)
- Gert Labs: **35.3%**; AA Agentic Index: **6.7%** (benchlm.ai)
- Terminal-Bench / Claw-Eval / Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (GPQA); 85.7% (AA) (benchlm.ai)
- HLE: **26.5%** (w/ tools); 19.5% (no tools); AA-HLE 23.6% (benchlm.ai)
- AA-LCR: **69.7%**; CritPt: **1.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **19.0**; BenchLM overall **44.84/100, #97 of 507**
- AA-Omniscience Index: **−47.9%** — Accuracy **20.0%** / Hallucination Rate **85.0%** (benchlm.ai)
- MMLU-Pro: **85.2%**; AA-IFBench: **75.6%** (benchlm.ai)

Coding:

- React Native Evals: **75.2%**; SWE-Rebench: **41.6%**; AA-SciCode: **45.5%**; AA Coding Index: **43.4** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- AA-LCR 69.7% within the 256K window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- MMMU-Pro: **76.9%** (AA 73.4%) (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 50/100.** τ²-bench 59.9% usable; capped severely by GDPval-AA 755 and Agentic Index 6.7%.
- **Reasoning: 60/100.** GPQA ~85%, MMLU-Pro 85.2% show solid inductive knowledge; capped by HLE ~20–26%, CritPt 1.4%, hallucination 85%.
- **Context window: 66/100.** 256K window below the 1M tier; LCR 69.7%.
- **Multimodal: 76/100.** MMMU-Pro ~75–77% is strong for 31B; text-only output caps it.
- **Coding: 60/100.** React Native 75.2% decent; capped by SWE-Rebench 41.6%, Coding Index 43.4.
- **Cost efficiency: 92/100.** Open weights — self-hosting at 31B scale is cheap; no per-token fee.
- **Overall Score: 62/100.** Mean of the five quality dims (50+60+66+76+60)/5 = 62.4 → 62. Best fit: self-hosted mid-size multimodal chat/RAG where open licensing matters more than agentic depth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
