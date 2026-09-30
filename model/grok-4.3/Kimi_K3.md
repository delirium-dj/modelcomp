# Grok 4.3 — findings by Kimi K3

- Source: xAI / Grok 4.3 (`grok-4-3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's mid-cycle Grok 4 update — near-perfect τ²-bench tool use (97.7%) and solid GPQA, but weak agentic index and terminal work. Predecessor to Grok 4.5/4.6.
- **Provider / access:** xAI API (`grok-4-3`, OpenAI-compatible).
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `xai/grok-4-3` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources.
- **Architecture:** proprietary (xAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **97.7%** — near-top of cohort (benchlm.ai)
- GDPval-AA: **1018 Elo** (29.2% normalized) (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **41.9%** (benchlm.ai); primary: no verified public score found
- Gert Labs: **43.9%**; APEX-Agents-AA: **17.0%**; AA Agentic Index: **17.2%**; ResearchClawBench: **12.4%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (GPQA-D/AA; Vals 91.4%) (benchlm.ai)
- HLE: **35.0%**; AA-HLE: **37.2%** (benchlm.ai)
- AA-LCR: **64.3%**; CritPt: **8.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **37.6**; BenchLM overall **54.73/100, #59 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **34.6% / 25.0%** (benchlm.ai)
- MMLU-Pro (Vals): **85.8%**; IFBench: **81.3%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **71.4%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **84.5%** (benchlm.ai)
- SciCode: **47.3%**; AA-SciCode: **48.3%**; AA Coding Index: **42.3** (benchlm.ai)
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 64.3% at the 1M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **78.1%** (AA 78.1%); Design Arena Website: **1206 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 97.7% is elite; capped by GDPval-AA 1018, weak Agentic Index 17.2% and TB 2.1 (Vals) 41.9%.
- **Reasoning: 74/100.** GPQA ~90–91% and IFBench 81.3% hold up; capped by HLE 35%, CritPt 8.0%, LCR 64.3%.
- **Context window: 75/100.** 1M window; capped by weak LCR 64.3% at window scale.
- **Multimodal: 74/100.** MMMU-Pro 78.1% image input; text-only output caps it.
- **Coding: 72/100.** LiveCodeBench 84.5%, SWE-bench (Vals) 71.4%; capped by Coding Index 42.3 and SciCode ~48%.
- **Cost efficiency: 72/100.** Price unverified; scored provisional on mid-tier xAI positioning.
- **Overall Score: 73/100.** Mean of the five quality dims (68+74+75+74+72)/5 = 72.6 → 73. Best fit: τ²-style tool-calling pipelines on xAI where agentic depth is light.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
